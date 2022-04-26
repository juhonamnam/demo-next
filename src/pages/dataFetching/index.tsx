import Link from 'next/link'

const TodoList = () => {
  return (
    <div className="container">
      <h1>Data Fetching</h1>
      <p>
        아래 To-Do List 예제를 통해 외부 API 요청으로 받아오는 데이터를
        렌더링하는 네가지 방법의 차이를 확인해봐요.
      </p>
      <ul>
        <li>
          <Link href={'dataFetching/CSR'}>
            Client Side Rendering (CSR) 으로 To-Do List 조회하기
          </Link>
          <p>
            페이지 요청시 프론트 서버는 클라이언트에게 미완성된 HTML을 전달하고
            필요한 데이터는 클라이언트가 직접 요청 후 받아와서 렌더링합니다.
          </p>
        </li>
        <li>
          <Link href={'dataFetching/SSR'}>
            Server Side Rendering (SSR) 으로 To-Do List 조회하기
          </Link>
          <p>
            페이지 요청시 필요한 데이터를 프론트 서버가 요청 후 받아와서
            렌더링하고 완성된 HTML을 클라이언트에게 전달합니다.
          </p>
        </li>
        <li>
          <Link href={'dataFetching/SSG'}>
            Static Site Generation (SSG) 으로 To-Do List 조회하기
          </Link>
          <p>
            프론트 서버 빌드시 필요한 데이터를 요청 후 받아와서 렌더링을 하고,
            이후 클라이언트에서 페이지 요청시 미리 완성되어있는 HTML을
            클라이언트에게 넘겨줍니다.
          </p>
        </li>
        <li>
          <Link href={'dataFetching/ISR'}>
            Incremental Static Regeneration (ISR) 으로 To-Do List 조회하기
          </Link>
          <p>
            SSR과 SSG의 장단점을 섞어 최초에는 SSG 방식으로 빌드를 하되 주기를
            가지게 되고, 그 주기가 끝난 이후에 요청이 들어올 경우 데이터를
            최신화하여 해당 페이지만 새롭게 빌드합니다.
          </p>
        </li>
      </ul>
    </div>
  )
}

export default TodoList
