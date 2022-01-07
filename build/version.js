const util = require('util')
const exec = util.promisify(require('child_process').exec)

async function run(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        reject(error)
      } else {
        resolve(stdout, stderr)
      }
    })
  }).then(resp => resp)
}

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
    console.log()
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

async function getOriginVersion() {
  const ID = await run('git rev-list --tags --max-count=1')
  const ver = await run(`git describe --tags ${ID} `)
  const version = ver.replace('v', '').trim()
  // console.log('version', version)
  return version
}

async function getBranch() {
  const res = await run('cat .git/HEAD')
  const branch = res.replace('ref: refs/heads/', '').trim()
  // console.log('branch', branch)
  return branch
}

async function init() {
  branch = await getBranch()
  const oldVersion = await getOriginVersion()
  const newVersion = await increment_version(oldVersion)
  console.log(`目前分支:${branch}`)
  console.log(`遠端舊版本:v${oldVersion}`)
  console.log(`新版本:v${newVersion}`)
  run(`git tag v${newVersion} && git push origin v${newVersion} `)
  // run(`git describe --tags `)
}

var branch
init()
