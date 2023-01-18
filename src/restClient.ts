import { ICommonResponse, ITodoItem } from 'src/interfaces'

const request = ({
  endpoint,
  method,
  body,
  headers,
}: {
  endpoint: string
  method: string
  body?: string
  headers?: any
}) => {
  const baseApi = '/api' + endpoint
  const options: any = { method: method }
  if (body) options.body = body
  if (headers) options.headers = headers
  return fetch(baseApi, options)
}

const message =
  '요청 에러: 로컬 데이터베이스 초기화를 하지 않았다면 npm run initialize 명령어로 초기화 하십시오.\n에러 메시지: '

export const restClient = {
  async retrieve(): Promise<ICommonResponse<ITodoItem[]>> {
    try {
      const response = await request({
        endpoint: '/todo/all',
        method: 'GET',
      })
      const result = await response.json()
      if (!result?.ok) throw result.message
      return result
    } catch (e: any) {
      alert(message + String(e))
      return { ok: false, message: e }
    }
  },

  async retrieveItem(id: number): Promise<ICommonResponse<ITodoItem>> {
    try {
      const response = await request({
        endpoint: `/todo/${id}`,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      const result = await response.json()
      if (!result.ok) throw result.message
      return result
    } catch (e: any) {
      alert(message + String(e))
      return { ok: false, message: e }
    }
  },

  async createTodo(content: string): Promise<ICommonResponse<ITodoItem>> {
    try {
      const response = await request({
        endpoint: '/todo',
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: { 'Content-Type': 'application/json' },
      })
      const result = await response.json()
      if (!result.ok) throw result.message
      return result
    } catch (e: any) {
      alert(message + String(e))
      return { ok: false, message: e }
    }
  },
  async deleteTodo(id: number): Promise<ICommonResponse<ITodoItem>> {
    try {
      const response = await request({
        endpoint: `/todo/${id}`,
        method: 'DELETE',
        body: JSON.stringify({ id }),
        headers: { 'Content-Type': 'application/json' },
      })
      const result = await response.json()
      if (!result.ok) throw result.message
      return result
    } catch (e: any) {
      alert(message + String(e))
      return { ok: false, message: e }
    }
  },
}
