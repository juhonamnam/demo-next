import { ICommonResponse, ITodo } from 'src/interfaces'

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

  async retrieve(): Promise<ICommonResponse<ITodo[]>> {
    const response = await this.request({
      endpoint: '/retrieveTodo',
      method: 'GET',
    })
    return response.json()
  }

  async createTodo(content: string): Promise<ICommonResponse<ITodo>> {
    const response = await this.request({
      endpoint: '/createTodo',
      method: 'POST',
      body: JSON.stringify({ content: content }),
      headers: { 'Content-Type': 'application/json' },
    })
    return response.json()
  }

  async deleteTodo(id: number): Promise<ICommonResponse<ITodo>> {
    const response = await this.request({
      endpoint: `/deleteTodo/${id}`,
      method: 'DELETE',
    })
    return response.json()
  }
}

export const todoRepository = new TodoRepository()
