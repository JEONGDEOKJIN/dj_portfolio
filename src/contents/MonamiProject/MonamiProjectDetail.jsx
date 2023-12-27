import React from 'react'

const MonamiProjectDetail = () => {
    return (
        <>
            {/* 두 번째 */}
            <div>
                {/* 이미지 */}
                <div className="">
                    <video
                        src={process.env.PUBLIC_URL + '/monami_boardList.mp4'}
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
                        <p> 그림 일심동체 게시판 목록 페이지 작업 </p>
                    </ul>

                    <h3 className="py-[16px] text-[16px] font-bold mt-6">업무 상세(프론트 및 백엔드)    </h3>
                    <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                        <li> 게시글 글쓰기 기능 : form 태그에 게시글 작성 후 완료 버튼 누르면, POST 요청을 보내고 게시글 목록 페이지로 리디렉션 될 수 있게 구현 </li>
                        <li> 페이지 네이션 기능 : 특정 페이지 클릭시, 해당 페이지의 데이터만 fetch 될 수 있게 구현</li>
                        <li> 게시판 목록 보여주기 기능 : data fetch 된 후, useEffect 의 의존성 설정된 변수에 데이터가 업데이트되면 렌더링 될 수 있게 구현</li>
                        <li> 좋아요 기능 : 해당 버튼 클릭시 '좋아요 테이블' 변경 후 '유저 및 게시글 테이블'에서 참조할 수 있게 구현 </li>
                        <li> 태그 검색 및 추가 기능 : sequelize 상에서 검색된 요청 데이터를 포함하는 데이터만 가공하여 전달 </li>
                        <li> 정렬 (최신순, 조회수, likes 순) 기능 : sequelize 상에서 정렬된 데이터를 DB 에서 호출하여 프론트로 전달 </li>
                    </ul>


                </div>
            </div>
        </>
    )
}

export default MonamiProjectDetail
