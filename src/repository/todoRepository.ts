import { ICommonResponse, ITodoItem } from 'src/interfaces'

class TodoRepository {
  private request({
    endpoint,
    method,
    body,
    headers,
  }: {
    endpoint: string
    method: string
    body?: string
    headers?: any
  }) {
    const baseApi = process.env.NEXT_PUBLIC_BASE_API + '/todo' + endpoint
    const options: any = { method: method }
    if (body) options.body = body
    if (headers) options.headers = headers
    return fetch(baseApi, options)
  }

  async retrieve(): Promise<ICommonResponse<ITodoItem[]>> {
    try {
      const response = await this.request({
        endpoint: '/retrieveTodo',
        method: 'GET',
      })
      return response.json()
    } catch {
      return { ok: false, message: 'Connection Error' }
    }
  }

  async createTodo(content: string): Promise<ICommonResponse<ITodoItem>> {
    try {
      const response = await this.request({
        endpoint: '/createTodo',
        method: 'POST',
        body: JSON.stringify({ content: content }),
        headers: { 'Content-Type': 'application/json' },
      })
      return response.json()
    } catch {
      return { ok: false, message: 'Connection Error' }
    }
  }

  async deleteTodo(id: number): Promise<ICommonResponse<ITodoItem>> {
    try {
      const response = await this.request({
        endpoint: `/deleteTodo/${id}`,
        method: 'DELETE',
      })
      return response.json()
    } catch {
      return { ok: false, message: 'Connection Error' }
    }
  }
}

export const todoRepository = new TodoRepository()
