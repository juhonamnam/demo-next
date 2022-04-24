import type { NextPage } from 'next'
import styles from 'styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Next.js 데모를 위한 페이지입니다. 아래의 링크를 통해 Next.js에서
          제공하는 기능을 체험하실 수 있습니다.
        </p>

        <div className={styles.grid}>
          <a href="todoList" className={styles.card}>
            <h2>데이터 패칭 &rarr;</h2>
            <p>
              필요한 데이터를 전달받기 위한 방법들을 Todo List 예제를 통해
              확인하세요.
            </p>
          </a>

          <a href="image" className={styles.card}>
            <h2>이미지 최적화 &rarr;</h2>
            <p>Next.js 에서 지원하는 이미지 랜더링 방식입니다.</p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Home
