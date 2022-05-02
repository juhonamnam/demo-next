import { TodoItemContent } from 'src/component/TodoItemContent'
import { ITodoItem } from 'src/interfaces'
import { todoRepository } from 'src/repository/todoRepository'

const SSR = ({ todoItem }: { todoItem: ITodoItem }) => {
  return (
    <div className="container card bg-light mt-3">
      <TodoItemContent todoItem={todoItem} />
    </div>
  )
}

export const getServerSideProps = async (context: any) => {
  // context.params.[변수명]을 통해 path variable을 가져옵니다.
  const response = await todoRepository.retrieveItem(Number(context.params.id))

  // 조건에 따라 없는 페이지 처리를 할 수 있습니다.
  if (!response.ok) {
    return { notFound: true }
  }

  return { props: { todoItem: response.data } }
}

export default SSR
