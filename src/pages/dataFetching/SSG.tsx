import { TodoInput } from 'src/component/TodoInput'
import { TodoItem } from 'src/component/TodoItem'
import { ITodoItem } from 'src/interfaces'
import { todoRepository } from 'src/repository/todoRepository'

const SSG = ({ todoList }: { todoList: ITodoItem[] }) => {
  return (
    <div className="container card bg-light mt-3">
      <h1>To-Do List</h1>
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

export const getStaticProps = async () => {
  // 빌드시 요청
  const response = await todoRepository.retrieve()

  return {
    // 리턴된 props 속성이 위 컴포넌트 props로 맵핑됩니다.
    props: {
      todoList: response.data,
    },
  }
}

export default SSG
