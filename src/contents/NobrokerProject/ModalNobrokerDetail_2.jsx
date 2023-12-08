import React from 'react'

const ModalNobrokerDetail_2 = () => {
    return (
        <>
            {/* 두 번째 */}
            <div>
                {/* 이미지 */}
                <div className="">
                    <video
                        src={process.env.PUBLIC_URL + '/nobroker_estateList.mp4'}
                        aria-hidden
                        alt="profile image"
                        className="w-[100vw] m-auto rounded-2xl shadow-lg  border-slate-500"
                        controls  // 재생, 일시정지 등의 컨트롤 표시
                    />
                </div>

                {/* 설명 */}
                <div className="mt-10 mb-10">
                    <h3 className="py-[16px] text-[16px] font-bold ">업무 요약</h3>
                    <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                        <p> '구매 가능한 매물의 리스트', '드롭 다운 필터링' 및 '매물의 위치 정보를 지도에 표시' 기능 구현 </p>
                    </ul>

                    <h3 className="py-[16px] text-[16px] font-bold mt-6">프론트</h3>
                    <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                        <li> 부동산 데이터 fetch 후, '구매 가능한 매물의 리스트' 렌더링 </li>
                        <li> google api 내 Autocomplete 기능 사용하여 '자동검색 기능' 및 '마커(검색시 지도 위에 마커 표시)' 구현 </li>
                        <li> google api 내 MarkerClusterer 기능 이용하여 개별 마커를 클러스터(마우스 휠 zoom in - zoom out 에 따라 마커가 압축적으로 표현되는 기능)로 표현 </li>
                        <li> 방 종류, 크기, 가격 드롭다운 버튼 클릭시 해당 정보 '필터링 기능' 구현 </li>
                        <li> key color 반영하여 구글맵 색상 및 마커 디자인 '커스텀' </li>
                    </ul>
                    <h3 className="py-[16px] text-[16px] font-bold mt-6">백엔드</h3>
                    <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                        <li> 드롭 다운 필터 사항 반영하여 where 조건 만족하는 조회 기능 구현  </li>
                    </ul>
                    
                </div>
            </div>
        </>
    )
}

export default ModalNobrokerDetail_2
