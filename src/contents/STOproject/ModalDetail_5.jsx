import React from 'react'

import { Carousel } from 'react-responsive-carousel'

const ModalDetail_5 = () => {
    return (
        <>
            <div>

                <Carousel>
                    <div className="">
                        <img
                            src={process.env.PUBLIC_URL + '/estate_list.jpg'}
                            aria-hidden
                            alt="profile image"
                            className="w-[100vw] m-auto rounded-2xl shadow-lg  border-slate-500"
                        />
                    </div>

                    <div className="">
                        <img
                            src={process.env.PUBLIC_URL + '/transaction.jpg'}
                            aria-hidden
                            alt="profile image"
                            className="w-[100vw] m-auto rounded-2xl shadow-lg  border-slate-500"
                        />
                    </div>
                    
                    <div className="">
                        <img
                            src={process.env.PUBLIC_URL + '/userSection.jpg'}
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
                        <p> 
                            '사용자' , '거래이력' , '매물관리' , '게시글' 섹션 구현 
                        </p>
                    </ul>

                    <h3 className="py-[16px] text-[16px] font-bold mt-6">업무 상세</h3>
                    <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                        <li> '사용자' 섹션</li>
                            <li className='ml-10'> 현재 회원가입한 유저 정보 기능 구현 </li>
                            <li className='ml-10'> 협약업체 요청에 따라, '블랙리스트' 유저 등록 기능 구현 </li>
                            <li className='ml-10'> 사용자 정보 조회 백엔드 기능 일부 구현  </li>

                        <li> '거래이력' 섹션</li>
                            <li className='ml-10'> 협약업체 요청 사항에 따라 'bounce 네트워크 외부' 에서 발생한 거래이력 추적 조회 기능 구현 </li>
                        <li> '매물관리' 섹션 </li>
                            <li className='ml-10'> Next.js 환경에서의 STO 토큰 발행 web3 연결 도움 </li>
                            <li className='ml-10'> 매물 조회 기능 구현 </li>
                        <li> '게시글' 섹션 </li>
                            <li className='ml-10'> 공지 및 공시사항 게시글 작성 기능 및 백엔드 기능 일부 구현 </li>
                    
                    
                    </ul>
                    
                </div>
            </div>
        </>
    )
}

export default ModalDetail_5
