import React from 'react'

const ModalNobrokerDetail_4 = () => {
    return (
        <>
            <div>
                {/* 이미지 */}
                <div className="">
                    <img
                        src={process.env.PUBLIC_URL + '/admin_main.jpg'}
                        aria-hidden
                        alt="profile image"
                        className="w-[100vw] m-auto rounded-2xl shadow-lg  border-slate-500"
                    />
                </div>

                {/* 설명 */}
                <div className="mt-10 mb-10">
                    <h3 className="py-[16px] text-[16px] font-bold ">업무 요약</h3>
                    <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                        <p> 
                            [대시보드] 배당금, 게시글, 매물, DAO 투표 '등록 기능' 구현
                        </p>
                    </ul>

                    <h3 className="py-[16px] text-[16px] font-bold mt-6">업무 상세</h3>
                    <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                        <li> 'DAO 투표' 실행에 따라 'DB(투표테이블 및 투표컨트랙트의 CA테이블에 저장) 및 컨트랙트' 모두에 해당 정보 등록 </li>
                        <li> '배당금, 게시글, 매물' 버튼 실행에 따라 DB에 해당 정보 등록 </li>
                    </ul>
                    
                </div>
            </div>
        </>
    )
}

export default ModalNobrokerDetail_4
