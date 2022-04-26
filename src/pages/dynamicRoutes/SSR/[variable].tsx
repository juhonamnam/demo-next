import { useRouter } from 'next/router'

const SSR = () => {
  // useRouter hook을 이용해 path variable을 가져옵니다.
  const router = useRouter()
  const { variable } = router.query
  return <>Path Variable: {variable}</>
}

// getServerSideProps 함수를 선언하는것 만으로 path variable을 server side로 처리합니다.
export const getServerSideProps = async () => {
  return { props: {} }
}

export default SSR
