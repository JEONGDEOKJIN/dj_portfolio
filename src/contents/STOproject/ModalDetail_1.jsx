import React from 'react'
import { Carousel } from 'react-responsive-carousel'


const ModalDetail_1 = () => {
    return (
        <>
            {/* 첫번째 : 피그마 */}
            <div>
                {/* 이미지 */}
                
                <div className="">
                    <video
                        // src="./JEONGDEOKJIN.jpg"
                        src={process.env.PUBLIC_URL + '/dashboard&board_0123.mp4'}
                        aria-hidden
                        alt="profile image"
                        className="w-[100vw] m-auto rounded-2xl shadow-lg  border-slate-500"
                        controls
                    />
                </div>

                {/* 설명 */}
                <div className="mt-10 mb-10">
                    <h3 className="py-[16px] text-[16px] font-bold ">업무 요약</h3>
                    <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                        <li> data fetch 를 통한 '대시보드 기능' 구현  </li>
                        <li> chart.js 를 활용한 '데이터 시각화' </li>
                        <li> 등록 버튼별 '게시판 기능' 구현 </li>
                    </ul>

                    <h3 className="py-[16px] text-[16px] font-bold mt-6">업무 상세</h3>
                    <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                        <li> 대시보드 기능 </li>
                        <li className="ml-10 "> 어드민 메인 페이지 접근 시, Server Component 에서 fetch 후, DOM 의 말단인 차트 컴포넌트(Client Component) 에 props 로 데이터를 전송하여 구현 </li>
                        
                        <li> 데이터 시각화 </li>
                        <li className="ml-10"> chart.js' 와 'react-chartjs-2' 라이브러리 활용하여 대시보드의 '회원가입, 거래금액, marekt 거래 통계 및 사용자 시세' 차트 구현 </li>
                        
                        <li> 게시판 기능 </li>
                        <li className="ml-10"> server component 에서 data fetch 후, client component 로 props 전달 데이터를 map 메소드 사용하여 렌더링 </li>
                        <li className="ml-10"> 거래유형 속성은 transaction 테이블 status 컬럼의 4가지 경우의 수를 switch 문을 사용해서 4가지 컴포넌트로 분류하여 구현 </li>



                    </ul>
                </div>
            </div>
        </>
    )
}

export default ModalDetail_1
