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

                    <div className="">
                        <img
                            src={process.env.PUBLIC_URL + '/carousel.jpg'}
                            aria-hidden
                            alt="profile image"
                            className="w-[100vw] m-auto rounded-2xl shadow-lg  border-slate-500"
                            />
                    </div>

                    <div className="">
                        <img
                            src={process.env.PUBLIC_URL + '/blacklistUser.jpg'}
                            aria-hidden
                            alt="profile image"
                            className="w-[100vw] m-auto rounded-2xl shadow-lg  border-slate-500"
                            />
                    </div>

                    <div className="">
                        <img
                            src={process.env.PUBLIC_URL + '/latest_transaction.jpg'}
                            aria-hidden
                            alt="profile image"
                            className="w-[100vw] m-auto rounded-2xl shadow-lg  border-slate-500"
                            />
                    </div>
                
                    <div className="">
                        <img
                            src={process.env.PUBLIC_URL + '/enrollbtn.jpg'}
                            aria-hidden
                            alt="profile image"
                            className="w-[100vw] m-auto rounded-2xl shadow-lg  border-slate-500"
                        />
                    </div>
                    <div className="">
                        <img
                            src={process.env.PUBLIC_URL + '/noticeForm.jpg'}
                            aria-hidden
                            alt="profile image"
                            className="w-[100vw] m-auto rounded-2xl shadow-lg  border-slate-500"
                        />
                    </div>

                    <div className="">
                        <img
                            src={process.env.PUBLIC_URL + '/voteform.jpg'}
                            aria-hidden
                            alt="profile image"
                            className="w-[100vw] m-auto rounded-2xl shadow-lg  border-slate-500"
                        />
                    </div>
                    
                </Carousel>

                {/* 설명 */}
                <div className="mt-10 mb-10">
                    <h3 className="py-[16px] text-[16px] font-bold ">업무 요약</h3>
                    <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                        <p> [대시보드] chart.js 활용하여 '기간별 거래금액' 등의 '차트' 구현 </p>
                        <p> [대시보드] Data(거래 정보 요약', '블랙리스트 유저', '최근 거래) '조회' 컴포넌트 구현 </p>
                        <p> [대시보드] 배당금, 게시글, 매물, DAO 투표 '등록 기능' 구현 </p>
                    </ul>

                    <h3 className="py-[16px] text-[16px] font-bold mt-6">업무 상세</h3>
                    <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                        <li>
                            'chart.js' 와 'react-chartjs-2' 라이브러리 활용하여 '고객 유입(회원가입) - 전환(구매 및
                            청약) - 매출' 의 흐름을 파악할 수 있도록 '회원가입, 거래금액, marekt 거래 통계 및 사용자
                            시세' 차트 구현{' '}
                        </li>
                        <li>
                            '차트 및 조회 컴포넌트' : 어드민 메인 페이지 접근 시, Server Component 에서 fetch 후, DOM 의 말단인 차트 컴포넌트(Client Component) 에 props 로 데이터를 전송하여 구현  
                        </li>
                        <li>
                            '등록 버튼' : 투표 등록 버튼 클릭 시, searchParams 의 key 값을 true 로 변경하여, 모달 component 를 띄운 후, form 태그로 input 정보를 취합해서 POST 요청 하여 구현  
                        </li>
                        
                        {/* <li> '블랙리스트 유저' 는 '협약사 요청사항'으로써, 메인페이지에서 확인할 수 있게 구현 </li>
                        <li> '거래 정보 요약' 및 '최근 거래' 컴포넌트는  필수사항이 아니지만, STO 비즈니스를 운영하는 '어드민에게 필요한 기능이라 판단'하여 구현 </li>
                        <li> 'DAO 투표' 실행에 따라 'DB(투표테이블 및 투표컨트랙트의 CA테이블에 저장) 및 컨트랙트' 모두에 해당 정보 등록 </li>
                        <li> '배당금, 게시글, 매물' 버튼 실행에 따라 DB에 해당 정보 등록 </li> */}

                        {/* <li> 해결과정 </li> */}
                        {/* <li className="ml-10">
                            {' '}
                            '고객 유입(회원가입) - 전환(구매 및 청약) - 매출' 의 흐름을 파악할 수 있는 지표 선정
                        </li>
                        <li className="ml-10"> 'chart.js' 와 'react-chartjs-2' 라이브러리 활용하여 구현 </li> */}

                        {/* <li> 결과 </li>
                        <li className="ml-10">
                            {' '}
                            4개 chart 컴포넌트 (회원가입, 거래금액, marekt 거래 통계 및 사용자 시세) 구현{' '}
                        </li> */}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ModalDetail_2
