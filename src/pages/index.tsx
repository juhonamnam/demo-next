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
          {process.env.NODE_ENV !== 'production' && (
            <>
              <br />
              <br />
              <span className="text-danger">
                현재 개발환경으로 실행중입니다. Next.js 에서 지원하는 렌더링
                최적화 효과를 체험하려면 개발환경이 아닌 배포환경으로
                실행하세요.
                <br />
                배포환경으로 실행하기 위해서는 <code>npm run build</code> 로
                빌드한 후 <code>npm run start</code> 로 실행하세요.
              </span>
            </>
          )}
        </p>

        <div className={styles.grid}>
          <a href="dataFetching" className={styles.card}>
            <h2>Data Fetching &rarr;</h2>
            <p>
              필요한 데이터를 전달받기 위한 방법들을 To-Do List 예제를 통해
              확인해봐요.
            </p>
          </a>

          <a href="dynamicRoutes" className={styles.card}>
            <h2>Dynamic Routes &rarr;</h2>
            <p>Path variable 렌더링을 최적화하기 위한 방법들을 확인해봐요.</p>
          </a>

          <a href="dynamicRoutesAdv" className={styles.card}>
            <h2>Dynamic Routes (Advanced) &rarr;</h2>
            <p>
              Path variable에 외부 API까지 사용하는 상황을 To-Do 리스트 예제로
              확인해봐요.
            </p>
          </a>

          <a href="imageOptimization" className={styles.card}>
            <h2>Image Optimization &rarr;</h2>
            <p>Next.js 에서 지원하는 이미지 최적화 방식입니다.</p>
          </a>

          <a href="https://nextjs.org" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>공식문서를 통해 다른 여러 기능을 확인하실 수 있습니다.</p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Home
