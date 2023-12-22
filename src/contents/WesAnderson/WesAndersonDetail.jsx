import React from 'react'

const WesAndersonDetail = () => {
    return (
        <>
            {/* 두 번째 */}
            <div>
                {/* 이미지 */}
                <div className="">
                    <video
                        src={process.env.PUBLIC_URL + '/WesAnderson_ver2.mp4'}
                        aria-hidden
                        alt="profile image"
                        className="w-[100vw] m-auto rounded-2xl shadow-lg  border-slate-500"
                        controls // 재생, 일시정지 등의 컨트롤 표시
                    />
                </div>

                {/* 설명 */}
                <div className="mt-10 mb-10">
                    <h3 className="py-[16px] text-[16px] font-bold ">업무 요약</h3>
                    <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                        <p> Accidently Wes Anderson 사이트 클론코딩 </p>
                    </ul>

                    <h3 className="py-[16px] text-[16px] font-bold mt-6">메인 페이지</h3>
                    <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                        <li> 메인 페이지 디자인 </li>
                        <li> 메인 페이지 목차 및 드롭다운 기능 구현 </li>
                        <li> 메인 페이지 css 애니메이션 구현 </li>
                        <li> 메인 페이지 swiper 기능 </li>
                        <li> medeia query 활용 웹앱 반응형 사이트 구현  </li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default WesAndersonDetail
