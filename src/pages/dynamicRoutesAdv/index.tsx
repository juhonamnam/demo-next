import { TodoItemId } from 'src/component/TodoItemId'
import { ITodoItem } from 'src/interfaces'
import { todoRepository } from 'src/repository/todoRepository'

const DynamicRoutesHome = ({ todoList }: { todoList: ITodoItem[] }) => {
  return (
    <div className="container">
      <h1>Dynamic Routes</h1>
      <p>
        Path variable은 url 경로에 변수를 지정하는 방식입니다. 페이지 컴포넌트
        파일의 이름을 [변수명].tsx (자바스크립트의 경우 [변수명].js) 로 지으면
        해당 변수명을 path variable로 사용할 수 있습니다.
        <br />
        사용자가 페이지 요청시 변수에 어떤 값이 들어올지 미리 예측할 수 없으므로
        path variable 역시 data fetching 방법들을 사용하여 렌더링합니다.
        <br />
        아래의 예시는 To-Do List 목록에서 id 번호로 각각의 아이템을 개별조회하는
        상황을 가정합니다.
      </p>
      <ul>
        <li>
          Client Side Rendering (CSR) 으로 To-Do 아이템 개별조회하기
          <TodoItemId todoList={todoList} endpoint="dynamicRoutes/CSR" />
          <p>
            페이지 요청시 클라이언트에게 path variable 부분이 비어있는 HTML을
            전달하고 클라이언트에서 빈 부분을 완성합니다.
          </p>
        </li>
        <li>
          Server Side Rendering (SSR) 으로 To-Do 아이템 개별조회하기
          <TodoItemId todoList={todoList} endpoint="dynamicRoutes/SSR" />
          <p>
            페이지 요청시 서버에서 path variable을 반영하여 완성된 HTML을
            만들어주고 클라이언트에게 전달합니다.
          </p>
        </li>
        <li>
          Static Site Generation (SSG) 으로 To-Do 아이템 개별조회하기
          <TodoItemId todoList={todoList} endpoint="dynamicRoutes/SSG" />
          <p>
            빌드시 정해진 path variable에 대해서만 완성된 HTML을 만들어줍니다.
          </p>
        </li>
      </ul>
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await todoRepository.retrieve()

  return {
    props: {
      todoList: response.data,
    },
  }
}

export default DynamicRoutesHome
