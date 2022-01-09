import { fetchAPI } from '@/plugins/api'


export function getMembersList() {
    return fetchAPI({
        url: 'https://jsonplaceholder.typicode.com/users'
    })
}

export function getAlbumsList() {
    return fetchAPI({
        url: 'https://jsonplaceholder.typicode.com/albums'
    })
}