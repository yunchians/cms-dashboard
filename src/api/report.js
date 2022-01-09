import { fetchAPI } from '@/plugins/api'


export function getMembersList() {
    return fetchAPI({
        url: 'http://jsonplaceholder.typicode.com/users'
    })
}

export function getAlbumsList() {
    return fetchAPI({
        url: 'http://jsonplaceholder.typicode.com/albums'
    })
}