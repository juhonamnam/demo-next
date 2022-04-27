import Image from 'next/image'

const ImageDemo = () => {
  return (
    <div className="container">
      <div style={{ minHeight: '150vh' }}>
        <h1>Image Optimization</h1>
        <p>
          Next.js 에 내장되어있는{' '}
          <code>
            {'<'}Image{'>'}
          </code>{' '}
          컴포넌트는 기존 이미지의 사이즈를 줄여서 데이터 전달양을 최소화
          합니다. 이미지 데이터 양은 브라우저 개발자 도구의 네트워크 탭에서
          확인할 수 있습니다.
        </p>
        <p>
          또한 lazy loading을 기본으로 탑재하여 화면에 표시되지 않는 이미지를
          미리 불러오지 않음으로 첫 페이지 로딩시간을 줄여줍니다. 아래로
          스크롤하여 lazy loading 기능을 확인하세요.
        </p>

        <ul>
          <li>
            <code>
              {'<'}img{'>'}
            </code>
            <br />
            <img src="/test_image1.jpg" width={480} height={270} alt="" />
          </li>
          <li>
            <code>
              {'<'}Image{'>'}
            </code>
            <br />
            {/* <Image>는 width와 height가 필수값입니다. */}
            <Image src="/test_image1.jpg" width={480} height={270} alt="" />
          </li>
        </ul>
      </div>
      <div>
        <Image src="/test_image2.jpg" width={480} height={270} alt="" />
      </div>
      <div>
        <Image src="/test_image3.jpg" width={480} height={270} alt="" />
      </div>
      <div>
        <Image src="/test_image4.jpg" width={480} height={270} alt="" />
      </div>
      <div>
        <Image src="/test_image5.jpg" width={480} height={270} alt="" />
      </div>
    </div>
  )
}

export default ImageDemo
