import React from 'react'

import { Carousel } from 'react-responsive-carousel'

const ModalDetail_3 = () => {
    return (
        <>
            <div>
                {/* 이미지 */}
                <Carousel> 
                    
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
                    
                    
                </Carousel>

                {/* 설명 */}
                <div className="mt-10 mb-10">
                    <h3 className="py-[16px] text-[16px] font-bold ">업무 요약</h3>
                    <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                        <p> [대시보드] Data(거래 정보 요약', '블랙리스트 유저', '최근 거래) '조회' 컴포넌트 구현 </p>
                    </ul>

                    <h3 className="py-[16px] text-[16px] font-bold mt-6">업무 상세</h3>
                    <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                        <li> '블랙리스트 유저' 는 '협약사 요청사항'으로써, 메인페이지에서 확인할 수 있게 구현 </li>
                        <li> '거래 정보 요약' 및 '최근 거래' 컴포넌트는  필수사항이 아니지만, STO 비즈니스를 운영하는 '어드민에게 필요한 기능이라 판단'하여 구현 </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ModalDetail_3
