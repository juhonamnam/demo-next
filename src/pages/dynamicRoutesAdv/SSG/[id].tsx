import { ITodoItem } from 'src/interfaces'
import { todoRepository } from 'src/repository/todoRepository'

const SSG = ({ todoItem }: { todoItem: ITodoItem }) => {
  return <>{todoItem?.content}</>
}

export const getStaticProps = async (context: any) => {
  // context.params.[변수명]을 통해 path variable을 가져옵니다.
  const response = await todoRepository.retrieveItem(Number(context.params.id))

  // 조건에 따라 Not Found로 처리할 수 있습니다.
  if (!response.ok) {
    return { notFound: true }
  }

  return { props: { todoItem: response.data } }
}

export const getStaticPaths = async () => {
  const response = await todoRepository.retrieve()

  return {
    // 이곳에 선언된 path variable 외에는 빌드하지 않습니다.
    paths: response.data?.map((todoItem) => {
      return { params: { id: todoItem.id.toString() } }
    }),
    // fallback: false일 경우 정해진 path variable 외에는 Not Found로 처리합니다.
    fallback: false,
  }
}

export default SSG
