import type { UseFetchOptions } from '#app'
import { defu } from 'defu'

const isDev = import.meta.env.DEV

export function useCustomFetch<T> (url: string, options: UseFetchOptions<T> = {}) {

  const defaults: UseFetchOptions<T> = {
    baseURL: isDev ? '/api' : 'https://jsonplaceholder.typicode.com',
    key: url,
  }

  const params = defu(options, defaults)

  return useFetch(url, params)
}