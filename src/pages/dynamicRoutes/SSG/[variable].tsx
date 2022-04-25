import { useRouter } from 'next/router'

const SSG = () => {
  const router = useRouter()
  const { variable } = router.query
  return <>Path Variable: {variable}</>
}

export const getStaticProps = async () => {
  // 상황에 따라 revalidate 속성으로 Dynamic Route 에서도 ISR 방식을 사용할 수 있습니다.
  return { props: {} }
}

export async function getStaticPaths() {
  return {
    paths: [
      // 이곳에 선언된 path variable 외에는 빌드하지 않습니다.
      { params: { variable: 'variable' } },
      { params: { variable: 'variable1' } },
      { params: { variable: 'variable2' } },
      { params: { variable: 'variable3' } },
    ],
    // fallback: true일 경우 정해진 path variable 외에는 Client Side Rendering으로 처리합니다.
    // fallback: false일 경우 없는 페이지로 처리합니다.
    fallback: true,
  }
}

export default SSG
