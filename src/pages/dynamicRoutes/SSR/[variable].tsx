import { useRouter } from 'next/router'

const SSR = () => {
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

// getServerSideProps 함수를 선언하는것 만으로 path variable을 server side로 처리합니다.
export const getServerSideProps = async () => {
  return { props: {} }
}

export default SSR
