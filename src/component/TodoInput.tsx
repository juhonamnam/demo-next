import { useRef } from 'react'
import { todoRepository } from 'src/repository/todoRepository'

export const TodoInput = () => {
  const ref = useRef<HTMLInputElement>(null)

  return (
    <div className="input-group mb-3 mt-4">
      <input
        type="text"
        className="form-control"
        placeholder="Enter Todo Item"
        ref={ref}
      />
      <button
        className="btn btn-outline-secondary bg-primary text-white"
        onClick={(e) => {
          e.preventDefault()
          todoRepository.createTodo(ref?.current?.value || '').then((e) => {
            if (e.ok) {
              alert('Todo 아이템이 추가되었습니다.')
              window.location.reload()
            } else {
              alert(e.message)
            }
          })
        }}
      >
        입력
      </button>
    </div>
  )
}
