const util = require('util')
const exec = util.promisify(require('child_process').exec)
const path = require('path')
const fs = require('fs')
const root = __dirname
var branch, appVersion, mode

async function run(cmd, log = false) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        if (log === true) console.log(error)
        reject(error)
      } else {
        if (log === true) console.log(stdout, stderr)
        resolve(stdout, stderr)
      }
    })
  }).then(resp => resp)
}

/**
 * 新增版號
 * @param version
 * @returns {Promise<string|*>}
 */
async function increment_version(version) {
  let part = version.replace('-alpha', '').split('-')[0].split('.')
  let newStr = ''
  let carry = 1
  if (branch === 'master' || branch === 'uat') {
    part = [part[0], part[1], part[2]]
  } else if (branch !== 'master' && branch !== 'uat' && part.length === 3) {
    part = [part[0], part[1], part[2], '0']
  }

  for (let i = part.length - 1; i >= 0; i--) {
    //  判斷位數
    const len = 5
    //  新數值+1
    newStr = Number(part[i]) + carry
    carry = (String(newStr).length > len) ? 1 : 0
    newStr = (String(newStr).length > len && i !== 0) ? 0 : newStr
    //  生產模式時候只新增最左邊位元
    if (branch === 'master') {
      newStr = (i === 0) ? newStr : 0
      newStr = (i === 1) ? Number(part[i]) + 1 : newStr
    }
    part[i] = newStr
  }
  return (part.length === 4) ? `${part[0]}.${part[1]}.${part[2]}-alpha.${part[3]}` : part.join('.')
}

/**
 * 取目前最新分支
 * @returns {Promise<*>}
 */
async function getOriginVersion() {
  const ID = await run('git rev-list --tags --max-count=1')
  const ver = await run(`git describe --tags ${ID} `)
  const version = ver.replace('v', '').trim()
  // console.log('version', version)
  return version
}

/**
 * 取分支
 * @returns {Promise<*>}
 */
async function getBranch() {
  const res = await run('cat .git/HEAD')
  const branch = res.replace('ref: refs/heads/', '').trim()
  // console.log('branch', branch)
  return branch
}

/**
 * 新增版號流程
 * @returns {Promise<string>}
 */
async function initVersion() {
  branch = await getBranch()
  const oldVersion = await getOriginVersion()
  const newVersion = await increment_version(oldVersion)
  console.log(` ================================= `)
  console.log(` 目前分支:${branch}`)
  console.log(` 遠端舊版本:v${oldVersion}`)
  console.log(` 新版本:v${newVersion}`)
  console.log(` ================================= `)
  return `v${newVersion}`
}

/**
 * 設定env 版本號
 * @returns {Promise<void>}
 */
async function setVersion() {
  const versionFilePath = path.join(root + '/../.env.' + mode)

  const src = `VUE_APP_VERSION=${appVersion}`

  fs.readFile(versionFilePath, 'utf8', (err, data) => {
    if (err) {
      return console.log(err)
    }
    var result = data.replace(/VUE_APP_VERSION=/g, src)

    fs.writeFile(versionFilePath, result, { flat: 'w' }, function(err) {
      if (err) {
        return console.log(err)
      }
      console.log(` ================================= `)
      console.log(` 更新版號:${appVersion}`)
      console.log(` 更新檔案:${versionFilePath}`)
      console.log(` ================================= `)
    })
  })
}

async function start() {
  console.log(` 打包開始.....`)
  appVersion = await initVersion()
  if (appVersion === '' || appVersion === undefined) {
    console.log(` appVersion 未輸入:${appVersion}`)
    return
  }

  branch = await getBranch()
  mode = (branch === 'master') ? 'production' : 'stage'
  // mode = 'stage'
  await setVersion()

  console.log(` 打包模式:${mode}`)
  await run(` yarn install `, true)
  await run(` yarn run build:${mode} `, true)
  console.log(` 更新遠端tag: ${appVersion} ....`)
  await run(`git tag ${appVersion} && git push origin ${appVersion} `, true)
  console.log(` 更新 ${appVersion}至.tags  ....`)
  await run(` echo "${appVersion}" >> .tags `, true)
  run(`git describe --tags `)
  console.log(` 打包結束.....`)
}

start()
