import { TodoItemId } from 'src/component/TodoItemId'
import { ITodoItem } from 'src/interfaces'
import { todoRepository } from 'src/repository/todoRepository'

const DynamicRoutesHome = ({ todoList }: { todoList: ITodoItem[] }) => {
  return (
    <div className="container">
      <h1>Dynamic Routes Advanced</h1>
      <p>
        path variable과 외부 API 요청이 둘 다 발생하는 경우 상황은 더
        복잡해집니다.
        <br />
        아래의 예시는 To-Do List 목록에서 id 번호를 path variable로 받아 새로운
        페이지에 각각의 아이템을 개별조회하는 상황을 가정합니다.
      </p>
      <ul>
        <li>
          Client Side Rendering (CSR) 으로 To-Do 아이템 개별조회하기
          <TodoItemId todoList={todoList} endpoint="dynamicRoutesAdv/CSR" />
          <p>
            페이지 요청시 서버에서 최소한의 HTML만을 전달하고 클라이언트에서
            path variable을 받아 조회 후 렌더링합니다. 결과가 없는 경우 404
            페이지로 이동합니다.
          </p>
        </li>
        <li>
          Server Side Rendering (SSR) 으로 To-Do 아이템 개별조회하기
          <TodoItemId todoList={todoList} endpoint="dynamicRoutesAdv/SSR" />
          <p>
            페이지 요청시 서버에서 path variable을 통해 조회 후 렌더링하여
            완성된 HTML을 클라이언트에게 전달합니다. 결과가 없는 경우 Not
            Found로 처리합니다.
          </p>
        </li>
        <li>
          Static Site Generation (SSG) 으로 To-Do 아이템 개별조회하기
          <TodoItemId todoList={todoList} endpoint="dynamicRoutesAdv/SSG" />
          <p>
            빌드시 조회가 가능한 id들을 미리 path variable로 선정하고 이들에
            대해서만 완성된 HTML을 만들어줍니다.
          </p>
        </li>
        <li>
          Incremental Static Regeneration (ISR) 으로 To-Do 아이템 개별조회하기
          <TodoItemId todoList={todoList} endpoint="dynamicRoutesAdv/ISR" />
          <p>
            SSG 방식으로 미리 빌드를 하되 일정 주기를 두어 주가기 끝난 이후에
            들어오는 페이지 요청에 대해서 새롭게 캐싱합니다.
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
