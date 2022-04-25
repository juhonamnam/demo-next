import { useEffect, useState } from 'react'
import { TodoInput } from 'src/component/TodoInput'
import { TodoItem } from 'src/component/TodoItem'
import { ITodoItem } from 'src/interfaces'
import { todoRepository } from 'src/repository/todoRepository'

const CSR = () => {
  const [todoList, setTodoList] = useState<ITodoItem[]>()

  useEffect(() => {
    // 클라이언트에서 요청
    todoRepository.retrieve().then((response) => {
      setTodoList(response.data)
    })
  }, [])

  return (
    <div className="container card bg-light mt-3">
      <h1>Todo List</h1>
      ** 이 안에 요청 응답 내용이 들어갑니다 **
      {/* Todo List 목록 */}
      <ul className="list-group">
        {todoList?.map((todoItem, idx) => (
          <TodoItem todoItem={todoItem} key={idx} />
        ))}
      </ul>
      {/* Todo List 목록 */}
      ** 이 안에 요청 응답 내용이 들어갑니다 **
      <TodoInput />
    </div>
  )
}

export default CSR
