import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ITodoItem } from 'src/interfaces'
import { todoRepository } from 'src/repository/todoRepository'

const CSR = () => {
  // useRouter hook을 이용해 path variable을 가져옵니다.
  const router = useRouter()
  const { id } = router.query

  const [todoItem, setTodoItem] = useState<ITodoItem>()
  useEffect(() => {
    // 클라이언트에서 요청
    todoRepository.retrieveItem(Number(id)).then((response) => {
      // 결과가 없을 경우 404 페이지
      if (!response.ok) {
        router.push('/404')

        return
      }
      setTodoItem(response.data)
    })
  }, [id, router])

  return <>{todoItem?.content}</>
}

export default CSR