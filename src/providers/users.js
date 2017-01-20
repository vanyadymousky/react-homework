import { fetchStreamJson } from 'src/utils/fetch'

export const getUser = user => {
    return fetchStreamJson(`https://api.github.com/users/${user}`)
}
