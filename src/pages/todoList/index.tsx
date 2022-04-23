import Link from 'next/link'

const TodoList = () => {
  return (
    <>
      <div>
        Client Side Rendering: <Link href={'todoList/CSR'}>CSR</Link>
      </div>
      <div>
        Server Side Rendering: <Link href={'todoList/SSR'}>SSR</Link>
      </div>
      <div>
        Static Site Generator: <Link href={'todoList/SSG'}>SSG</Link>
      </div>
    </>
  )
}

export default TodoList
