import Link from 'next/link'

const TodoList = () => {
  return (
    <div className="container">
      <h1>Dynamic Routes</h1>
      <p>
        Path variable은 url 경로에 변수를 지정하는 방식입니다. 페이지 컴포넌트
        파일 이름을 [변수명].tsx (자바스크립트의 경우 [변수명].js) 로 지으면
        path variable로 사용할 수 있습니다.
        <br />
        사용자가 페이지 요청시 어떤 path variable을 통해 들어올지 미리 예측할 수
        없으므로 이는 동적인 요소가 됩니다. 앞서 살펴본 Data Fetching과 유사한
        방법으로 처리할 수 있습니다
      </p>
      <ul>
        <li>
          <Link href={'dynamicRoutes/CSR/variable'}>
            Client Side Rendering (CSR)
          </Link>
          <p>
            페이지 요청시 클라이언트에게 path variable 부분이 비어있는 HTML을
            전달하고 클라이언트에서 빈 부분을 완성합니다.
          </p>
        </li>
        <li>
          <Link href={'dynamicRoutes/SSR/variable'}>
            Server Side Rendering (SSR)
          </Link>
          <p>
            페이지 요청시 서버에서 path variable을 반영하여 완성된 HTML을
            만들어주고 클라이언트에게 전달합니다.
          </p>
        </li>
        <li>
          <Link href={'dynamicRoutes/SSG/variable'}>
            Static Site Generation (SSG)
          </Link>
          <p>
            빌드시 정해진 path variable에 대해서만 완성된 HTML을 만들어줍니다.
          </p>
        </li>
      </ul>
    </div>
  )
}

export default TodoList
