import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const ModalDetail_2 = () => {
    return (
        <>
            {/* 두 번째 */}
            <div>
                    {/* 이미지 */}
                    <div className="">
                        <video
                            src={process.env.PUBLIC_URL + '/figma_explain.mp4'}
                            aria-hidden
                            alt="profile image"
                            className="w-[100vw] m-auto rounded-2xl shadow-lg  border-slate-500"
                            controls
                        />
                    </div>
                {/* <Carousel>

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
                    
                </Carousel> */}

                {/* 설명 */}
                <div className="mt-10 mb-10">
                    <h3 className="py-[16px] text-[16px] font-bold ">업무 요약</h3>
                    <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                        <p> [기획] figma 활용하여 UX 고려한 사용자 및 어드민 UI 제작 </p>
                    </ul>

                    <h3 className="py-[16px] text-[16px] font-bold mt-6">업무 상세</h3>
                    <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                        <li> [이슈] 협약사는 '소유(부동산 STO 회사)'를 레퍼런스로 요청하였으나, 해당 어플에는 '하단 메뉴바' 가 없었음. </li>
                        <li> [해결과정]</li>
                            <li className='ml-10 list-none '> 1. '메뉴 하단 바'가 없는 경우, 정보접근성이 떨어진다고 판단. </li>
                            <li className='ml-20 text-sm list-none '> EX) 거래 페이지를 보다가, '물건 팔 때, 내가 청약한 물건을 얼마였지?' 를 참고 하고 싶다는 생각이 들면 '현재 페이지 - 홈 - 마이페이지' 로 '페이지 이동' 을 하게 됨 </li>
                            <li className='ml-10 list-none '> 2. '투자' 는 복합적인 판단을 필요함으로 다양한 정보게 빠르게 접근할 수 있어야 함 </li>
                            <li className='ml-10 list-none '> 3. ''메뉴 하단 바' 추가를 통해, 정보 접근의 효율성 제고 </li>
                            <li className='ml-20 text-sm list-none '> EX) 거래 페이지를 보다가, '물건 팔 때, 내가 청약한 물건을 얼마였지?' 를 참고 하고 싶다는 생각이 들면 '페이지 전환 없이' 마이페이지로 접근 가능 </li>

                        
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
