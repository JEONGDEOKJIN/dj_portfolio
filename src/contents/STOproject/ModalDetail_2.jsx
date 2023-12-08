import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const ModalDetail_2 = () => {
    return (
        <>
            {/* 두 번째 */}
            <div>

                <Carousel>
                    {/* 이미지 */}
                    <div className="">
                        <img
                            src={process.env.PUBLIC_URL + '/admin_main.jpg'}
                            aria-hidden
                            alt="profile image"
                            className="w-[100vw] m-auto rounded-2xl shadow-lg  border-slate-500"
                        />
                    </div>

                    <div className="">
                        <img
                            src={process.env.PUBLIC_URL + '/market_week.jpg'}
                            aria-hidden
                            alt="profile image"
                            className="w-[100vw] m-auto rounded-2xl shadow-lg  border-slate-500"
                        />
                    </div>
                    
                    <div className="">
                        <img
                            src={process.env.PUBLIC_URL + '/user&trademoney.jpg'}
                            aria-hidden
                            alt="profile image"
                            className="w-[100vw] m-auto rounded-2xl shadow-lg  border-slate-500 "
                        />
                    </div>
                    
                </Carousel>

                {/* 설명 */}
                <div className="mt-10 mb-10">
                    <h3 className="py-[16px] text-[16px] font-bold ">업무 요약</h3>
                    <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                        <p> [대시보드] chart.js 활용하여 '기간별 거래금액' 등의 '차트' 구현 </p>
                    </ul>

                    <h3 className="py-[16px] text-[16px] font-bold mt-6">업무 상세</h3>
                    <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                        <li> 문제상황 </li>
                        <li className="ml-10"> 협약사의 요청에 따라 '통계 데이터' 차트 작성 </li>

                        <li> 해결과정 </li>
                        <li className="ml-10">
                            {' '}
                            '고객 유입(회원가입) - 전환(구매 및 청약) - 매출' 의 흐름을 파악할 수 있는 지표 선정
                        </li>
                        <li className="ml-10"> 'chart.js' 와 'react-chartjs-2' 라이브러리 활용하여 구현 </li>

                        <li> 결과 </li>
                        <li className="ml-10">
                            {' '}
                            4개 chart 컴포넌트 (회원가입, 거래금액, marekt 거래 통계 및 사용자 시세) 구현{' '}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ModalDetail_2
