import React from 'react'

const ModalNobrokerDetail_3 = () => {
    return (
        <>
            <div>
                {/* 이미지 */}
                <div className="">
                    <video
                        src={process.env.PUBLIC_URL + '/nobroker_admin_auth.mp4'}
                        aria-hidden
                        alt="profile image"
                        className="w-[100vw] m-auto rounded-2xl shadow-lg  border-slate-500"
                    />
                </div>

                {/* 설명 */}
                <div className="mt-10 mb-10">
                    <h3 className="py-[16px] text-[16px] font-bold ">업무 요약</h3>
                    <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                        <p> [어드민 페이지_프론트] 판매 업자 인증 버튼 클릭시, 변경 post 요청 구현 </p>
                        <p> [어드민 페이지_백엔드] 클릭된 유저의 certificate 속성 update 하기  </p>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default ModalNobrokerDetail_3
