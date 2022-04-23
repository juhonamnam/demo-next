import { useEffect, useState } from 'react'
import { ITodo } from 'src/interfaces'
import { todoRepository } from 'src/repository/todoRepository'

const CSR = () => {
  const [todoList, setTodoList] = useState<ITodo[]>()

  useEffect(() => {
    // 클라이언트에서 요청
    todoRepository.retrieve().then((response) => {
      setTodoList(response.data)
    })
  }, [])

  return (
    <ul>
      {todoList?.map((todo, idx) => (
        <li key={idx}>{todo.content}</li>
      ))}
    </ul>
  )
}

export default CSR
