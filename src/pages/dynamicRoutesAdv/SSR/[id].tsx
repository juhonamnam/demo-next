import { TodoItemContent } from 'src/component/TodoItemContent'
import { ITodoItem } from 'src/interfaces'
import { prismaClient } from 'src/prismaClient'

const SSR = ({ todoItem }: { todoItem: ITodoItem }) => {
  return (
    <div className="container">
      <TodoItemContent todoItem={todoItem} />
    </div>
  )
}

export const getServerSideProps = async (context: any) => {
  // context.params.[변수명]을 통해 path variable을 가져옵니다.
  const response = await prismaClient.get(Number(context.params.id))

  // 조건에 따라 없는 페이지 처리를 할 수 있습니다.
  if (!response) {
    return { notFound: true }
  }

  return { props: { todoItem: response } }
}

export default SSR
