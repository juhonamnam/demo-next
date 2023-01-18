import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { TodoItemContent } from 'src/component/TodoItemContent'
import { ITodoItem } from 'src/interfaces'
import { restClient } from 'src/restClient'

const CSR = () => {
  // useRouter hook을 이용해 path variable을 가져옵니다.
  const router = useRouter()
  const { id } = router.query

  const [todoItem, setTodoItem] = useState<ITodoItem>()
  useEffect(() => {
    // 클라이언트에서 요청
    restClient.retrieveItem(Number(id)).then((response) => {
      // 결과가 없을 경우 404 페이지
      if (!response.ok) {
        router.push('/404')

        return
      }
      setTodoItem(response.data)
    })
  }, [id, router])

  return (
    <div className="container">
      <TodoItemContent todoItem={todoItem} />
    </div>
  )
}

export default CSR
