import Link from 'next/link'
import { ITodoItem } from 'src/interfaces'

export const TodoItemId = ({
  todoList,
  endpoint,
}: {
  todoList?: ITodoItem[]
  endpoint: string
}) => {
  return (
    <table className="table" style={{maxWidth: 300}}>
      <colgroup>
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th>id</th>
          <th>조회</th>
        </tr>
      </thead>
      <tbody>
        {todoList?.map((todoItem) => (
          <tr key={todoItem.id}>
            <td>{todoItem.id}</td>
            <td>
              <Link href={`${endpoint}/${todoItem.id}`}>조회하기</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
