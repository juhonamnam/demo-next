import Link from 'next/link'

const TodoList = () => {
  return (
    <div className="container">
      <h1>Todo List 목록 조회하기</h1>
      <p>
        전달받은 데이터를 렌더링하는 방법으로 Client Side, Server Side, Static
        Generation, Incremental Static Regeneration 이 있습니다.
      </p>
      <ul>
        <li>
          <Link href={'todoList/CSR'}>
            Client Side Rendering (CSR) 으로 조회하기
          </Link>
          <p>
            페이지 요청시 클라이언트에게 미완성된 HTML을 전달하고 필요한
            데이터를 클라이언트가 직접 요청하여 HTML을 완성합니다.
          </p>
        </li>
        <li>
          <Link href={'todoList/SSR'}>
            Server Side Rendering (SSR) 으로 조회하기
          </Link>
          <p>
            페이지 요청시 필요한 데이터를 서버에서 요청하여 완성된 HTML을
            클라이언트에게 전달합니다.
          </p>
        </li>
        <li>
          <Link href={'todoList/SSG'}>
            Static Site Generation (SSG) 으로 조회하기
          </Link>
          <p>
            빌드시 필요한 데이터를 요청하여 HTML을 완성시키고 페이지 요청시 미리
            완성되어있는 HTML을 클라이언트에게 전달합니다.
          </p>
        </li>
        <li>
          <Link href={'todoList/ISR'}>
            Incremental Static Regeneration (ISR) 으로 조회하기
          </Link>
          <p>
            SSG 방식으로 빌드를 하되 일정 주기마다 데이터를 최신화하여 변경
            여부를 파악하고 새롭게 빌드합니다.
          </p>
        </li>
      </ul>
    </div>
  )
}

export default TodoList
