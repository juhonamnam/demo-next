import Image from 'next/image'

const ImageDemo = () => {
  return (
    <div className="container">
      <h1>이미지 최적화</h1>
      <p>
        Next.js 에 내장되어있는{' '}
        <code>
          {'<'}Image {'/>'}
        </code>{' '}
        태그는 기존 이미지를 압축시켜서 데이터 전달양을 최소화 합니다.
      </p>

      <ul>
        <li>
          <code>
            {'<'}img {'/>'}
          </code>{' '}
          태그:
          <br />
          <img src="/test_image.jpg" width={480} height={270} alt="" />
        </li>
        <li>
          <code>
            {'<'}Image {'/>'}
          </code>{' '}
          태그:
          <br />
          <Image src="/test_image.jpg" width={480} height={270} alt="" />
        </li>
      </ul>
    </div>
  )
}

export default ImageDemo
