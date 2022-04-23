import { ITodo } from 'src/interfaces'
import { todoRepository } from 'src/repository/todoRepository'

const SSG = ({ todoList }: { todoList: ITodo[] }) => {
  return (
    <ul>
      {todoList?.map((todo, idx) => (
        <li key={idx}>{todo.content}</li>
      ))}
    </ul>
  )
}

export const getStaticProps = async () => {
  // 빌드시 요청
  const response = await todoRepository.retrieve()

  return {
    props: {
      todoList: response.data,
    },
  }
}

export default SSG
