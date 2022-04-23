import { ITodo } from 'src/interfaces'
import { todoRepository } from 'src/repository/todoRepository'

const SSR = ({ todoList }: { todoList: ITodo[] }) => {
  return (
    <ul>
      {todoList?.map((todo, idx) => (
        <li key={idx}>{todo.content}</li>
      ))}
    </ul>
  )
}

export const getServerSideProps = async () => {
  // 서버에서 요청
  const response = await todoRepository.retrieve()

  return {
    props: {
      todoList: response.data,
    },
  }
}

export default SSR
