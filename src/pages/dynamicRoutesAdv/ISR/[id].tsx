import { TodoItemContent } from 'src/component/TodoItemContent'
import { ITodoItem } from 'src/interfaces'
import { todoRepository } from 'src/repository/todoRepository'

const ISR = ({ todoItem }: { todoItem: ITodoItem }) => {
  return (
    <div className="container card bg-light mt-3">
      <TodoItemContent todoItem={todoItem} />
    </div>
  )
}

export const getStaticProps = async (context: any) => {
  // context.params.[변수명]을 통해 path variable을 가져옵니다.
  const response = await todoRepository.retrieveItem(Number(context.params.id))

  // 조건에 따라 Not Found로 처리할 수 있습니다.
  if (!response.ok) {
    return {
      notFound: true,
      // Not Found로 처리된 상태가 30초간 유지됩니다.
      revalidate: 30,
    }
  }

  return {
    props: {
      todoItem: response.data,
    },
    // 캐싱된 HTML은 30초의 주기를 갖습니다.
    revalidate: 30,
  }
}

export const getStaticPaths = async () => {
  return {
    // 이곳에 선언된 path variable은 최초로 빌드될때 생성되는 페이지입니다.
    // 선언된 path variable 외에도 요청이 들어오면 새로 캐싱해주는 방식에서 초기 빌드는 필수가 아닙니다.
    paths: [],
    // fallback: true 또는 'blocking'인 경우 위에서 선언한 path variable 외로 요청이 들어오면
    // 그 페이지를 새롭게 캐싱합니다. ('blocking'은 true의 문제점을 보완해서 나온 기능입니다.)
    // fallback: false일 경우 위에서 선언한 path variable 외에는 Not Found로 처리합니다.
    fallback: 'blocking',
  }
}

export default ISR
