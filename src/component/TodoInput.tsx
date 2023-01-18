import { useRef } from 'react'
import { restClient } from 'src/restClient'

export const TodoInput = () => {
  const ref = useRef<HTMLInputElement>(null)
  const onClick = () => {
    if (!ref?.current?.value) {
      alert('할 일을 입력하세요')
      return
    }
    restClient.createTodo(ref.current.value).then((response) => {
      if (response.ok) {
        alert('Todo 아이템이 추가되었습니다.')
        window.location.reload()
      }
    })
  }

  return (
    <div className="input-group mb-3 mt-4">
      <input
        key={new Date().getTime()}
        type="text"
        className="form-control"
        placeholder="할 일을 입력하세요"
        ref={ref}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onClick()
        }}
      />
      <button
        className="btn btn-outline-secondary bg-primary text-white"
        onClick={onClick}
      >
        입력
      </button>
    </div>
  )
}
