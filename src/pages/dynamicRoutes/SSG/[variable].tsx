import { useRouter } from 'next/router'

const SSG = () => {
  // useRouter hook을 이용해 path variable을 가져옵니다.
  const router = useRouter()
  const { variable } = router.query
  return (
    <div className="container card bg-light mt-3">
      <h1>
        현재 입력받은 Path Variable은 {"'"}
        {variable}
        {"'"} 입니다.
      </h1>
      주소에 {"'"}
      {variable}
      {"'"} 대신 다른 값을 넣어보세요.
    </div>
  )
}

export const getStaticProps = async () => {
  // 상황에 따라 revalidate 속성으로 Dynamic Route 에서도 ISR 방식을 사용할 수 있습니다.
  return { props: {} }
}

export const getStaticPaths = async () => {
  return {
    paths: [
      // 이곳에 선언된 path variable은 최초로 빌드될때 생성되는 페이지입니다.
      { params: { variable: 'variable' } },
      { params: { variable: 'variable1' } },
      { params: { variable: 'variable2' } },
      { params: { variable: 'variable3' } },
    ],
    // fallback: true 또는 'blocking'인 경우 위에서 선언한 path variable 외로 요청이 들어오면
    // 그 페이지를 새롭게 빌드합니다. ('blocking'은 true의 문제점을 보완해서 나온 기능입니다.)
    // fallback: false일 경우 위에서 선언한 path variable 외에는 Not Found로 처리합니다.
    fallback: false,
  }
}

export default SSG
