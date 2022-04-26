import { useRouter } from 'next/router'

const CSR = () => {
  // useRouter hook을 이용해 path variable을 가져옵니다.
  const router = useRouter()
  const { variable } = router.query
  return <>Path Variable: {variable}</>
}

export default CSR
