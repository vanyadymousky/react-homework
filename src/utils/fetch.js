import { Observable } from 'rxjs'

export const fetchStreamJson = url =>
    Observable.fromPromise(fetch(url)).mergeMap(response => Observable.fromPromise(response.json()))
