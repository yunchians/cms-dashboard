import { fetchAPI } from '@/plugins/api'

export function getMembersList() {
  return fetchAPI({
    url: 'https://jsonplaceholder.typicode.com/users/'
  })
}

export function getAlbumsList(params) {
  console.log('params', params)
  return fetchAPI({
    url: `https://jsonplaceholder.typicode.com/albums?userId=${params.userId}`
  })
}