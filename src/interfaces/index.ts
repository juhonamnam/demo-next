export interface ICommonResponse<T> {
  ok: boolean
  data?: T
  message?: string
}

export interface ITodo {
  id?: number
  content?: string
}
