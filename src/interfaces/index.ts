export interface ICommonResponse<T> {
  ok: boolean
  data?: T
  message?: string
}

export interface ITodoItem {
  id: number
  content: string
}
