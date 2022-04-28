import Link from 'next/link'

const DataFetchingHome = () => {
  return (
    <div className="container">
      <h1>Data Fetching</h1>
      <p>
        Next.js의 컴포넌트에서 정적인 요소들은 모두 HTML 형태로 컴파일합니다.
        그러나 외부의 데이터를 가저오는 등의 동적인 요소들의 경우 미리 렌더링을
        하기에는 제한이 있습니다. Next.js는 이를 처리하는 방법으로 다음과 같은
        방법을 제공합니다.
        <br />
        아래 예제는 외부 API 요청으로 데이터를 받아와서 To-Do List 목록조회하는
        상황을 가정합니다.
      </p>
      <ul>
        <li>
          <Link href={'dataFetching/CSR'}>
            Client Side Rendering (CSR) 으로 To-Do List 조회하기
          </Link>
          <p>
            페이지 요청시 서버는 클라이언트에게 미완성된 HTML을 전달하고 필요한
            데이터는 클라이언트가 직접 요청 후 받아와서 렌더링합니다.
          </p>
        </li>
        <li>
          <Link href={'dataFetching/SSR'}>
            Server Side Rendering (SSR) 으로 To-Do List 조회하기
          </Link>
          <p>
            페이지 요청시 필요한 데이터를 서버가 요청 후 받아와서 렌더링하고
            완성된 HTML을 클라이언트에게 전달합니다.
          </p>
        </li>
        <li>
          <Link href={'dataFetching/SSG'}>
            Static Site Generation (SSG) 으로 To-Do List 조회하기
          </Link>
          <p>
            서버 빌드시 필요한 데이터를 요청 후 받아와서 렌더링을 하고, 이후
            클라이언트에서 페이지 요청시 미리 완성되어있는 HTML을 클라이언트에게
            넘겨줍니다.
          </p>
        </li>
        <li>
          <Link href={'dataFetching/ISR'}>
            Incremental Static Regeneration (ISR) 으로 To-Do List 조회하기
          </Link>
          <p>
            SSR과 SSG의 장단점을 섞어 최초에는 SSG 방식으로 빌드를 하되 주기를
            가지게 되고, 그 주기가 끝난 이후에 요청이 들어올 경우 데이터를
            최신화하여 해당 페이지만 새롭게 캐싱합니다.
          </p>
        </li>
      </ul>
    </div>
  )
}

export default DataFetchingHome
