import { ITodoItem } from 'src/interfaces'

export const TodoItemContent = ({ todoItem }: { todoItem?: ITodoItem }) => {
  return (
    <table className="table" style={{ maxWidth: 300 }}>
      <colgroup>
        <col />
        <col />
      </colgroup>
      <tbody>
        <tr>
          <th>ID</th>
          <td>{todoItem?.id}</td>
        </tr>
        <tr>
          <th>내용</th>
          <td>{todoItem?.content}</td>
        </tr>
      </tbody>
    </table>
  )
}
