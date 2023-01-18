import { TodoItemContent } from 'src/component/TodoItemContent'
import { ITodoItem } from 'src/interfaces'
import { prismaClient } from 'src/prismaClient'

const SSG = ({ todoItem }: { todoItem: ITodoItem }) => {
  return (
    <div className="container">
      <TodoItemContent todoItem={todoItem} />
    </div>
  )
}

export const getStaticProps = async (context: any) => {
  // context.params.[변수명]을 통해 path variable을 가져옵니다.
  const response = await prismaClient.get(Number(context.params.id))

  // 조건에 따라 Not Found로 처리할 수 있습니다.
  if (!response) {
    return { notFound: true }
  }

  return { props: { todoItem: response } }
}

export const getStaticPaths = async () => {
  const response = await prismaClient.getAll()

  return {
    // 이곳에 선언된 path variable은 최초로 빌드될때 생성되는 페이지입니다.
    paths: response.map((todoItem) => {
      return { params: { id: todoItem.id.toString() } }
    }),
    // fallback: true 또는 'blocking'인 경우 위에서 선언한 path variable 외로 요청이 들어오면
    // 그 페이지를 새롭게 빌드합니다. ('blocking'은 true의 문제점을 보완해서 나온 기능입니다.)
    // fallback: false일 경우 위에서 선언한 path variable 외에는 Not Found로 처리합니다.
    fallback: false,
  }
}

export default SSG
