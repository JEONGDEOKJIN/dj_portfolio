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

                    <h3 className="py-[16px] text-[16px] font-bold mt-6">프론트</h3>
                    <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                        <li> 게시글 글쓰기 기능</li>
                        <li> 페이지 네이션 기능 </li>
                        <li> 게시판 목록 보여주기 기능 </li>
                        <li> 좋아요 기능 </li>
                        <li> 태그 검색 및 추가 기능 </li>
                        <li> 정렬 (최신순, 조회수, likes 순) 기능 </li>
                    </ul>

                    <h3 className="py-[16px] text-[16px] font-bold mt-6">백엔드</h3>
                    <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                        <li> 게시글 및 댓글 CRUD 기능 </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MonamiProjectDetail
