import { ITodoItem } from 'src/interfaces'
import { todoRepository } from 'src/repository/todoRepository'

export const TodoItem = ({ todoItem }: { todoItem: ITodoItem }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {todoItem.content}
      <button
        type="button"
        className="btn btn-sm btn-danger img-circle"
        onClick={() => {
          todoRepository.deleteTodo(todoItem.id).then((response) => {
            if (response.ok) {
              alert('삭제되었습니다.')
              window.location.reload()
            } else {
              alert(response.message)
            }
          })
        }}
      >
        &#xff38;
      </button>
    </li>
  )
}
