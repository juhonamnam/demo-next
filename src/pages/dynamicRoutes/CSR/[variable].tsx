import { useRouter } from 'next/router'

const CSR = () => {
  const router = useRouter()
  const { variable } = router.query
  return <>Path Variable: {variable}</>
}

export default CSR
