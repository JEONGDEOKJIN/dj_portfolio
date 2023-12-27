import React from 'react'
import { DiGithubBadge, DiNodejs, DiPostgresql, DiReact } from 'react-icons/di'
import { FaAws, FaExternalLinkAlt, FaFigma } from 'react-icons/fa'
import { SiAwsamplify, SiMysql, SiNextdotjs, SiSolidity, SiStyledcomponents, SiTailwindcss, SiTypescript } from 'react-icons/si'

const ProjectThird = ({toggleModal3}) => {
    
  return (
    <>
                    <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] cursor-pointer" onClick={toggleModal3}>
                        <img
                            src={process.env.PUBLIC_URL + '/monami_boardList.gif'}
                            className="w-full"
                            alt="어떤어떤 프로젝트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">Node.js 프로젝트 (4명)</li>
                            <li className="text-stone-500">2023. 06. 07 ~ 2023. 06. 25</li>
                            <li>front-end , back-end</li>
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal3}
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                        그림 일심동체 (그림 제목 맞추기 게임) 
                            
                            <a 
                                className='flex items-center justify-center w-10 h-10 hover:bg-indigo-100'
                                href="https://youtu.be/4upgLvmXIMg?si=xHPftgOdEDnameIC  ">
                                {/* <FaExternalLinkAlt /> */}
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                        주어진 시간 안에 A유저가 특정 주제에 대해 그림을 그리면, B유저가 해당 그림의 제목을 맞추는 게임                         </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiReact />
                            <DiNodejs />
                            <FaAws />
                            <SiMysql />

                            <FaFigma />

                            <DiGithubBadge />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">

                            <li>게시판 목록 페이지 </li>
                            
                                <li className='ml-10'>프론트</li>   
                                    <li className='ml-20'>게시글 글쓰기 기능 </li>
                                    <li className='ml-20'>페이지 네이션 기능  </li>
                                    <li className='ml-20'>게시판 목록 보여주기 기능 </li>
                                    <li className='ml-20'>좋아요 기능  </li>
                                    <li className='ml-20'>태그 검색 기능  </li>
                                    <li className='ml-20'>정렬 (최신순, 조회수, likes 순) 기능 </li>
                                    {/* <li className='ml-20'>게시글 글쓰기 기능 : form 태그에 게시글 작성 후 완료 버튼 누르면, POST 요청을 보내고 게시글 목록 페이지로 리디렉션 될 수 있게 구현</li>
                                    <li className='ml-20'>페이지 네이션 기능 : 특정 페이지 클릭시, 해당 페이지의 데이터만 fetch 될 수 있게 구현 </li>
                                    <li className='ml-20'>게시판 목록 보여주기 기능 : data fetch 된 후, useEffect 의 의존성 설정된 변수에 데이터가 업데이트되면 렌더링 될 수 있게 구현</li>
                                    <li className='ml-20'>좋아요 기능 : likes 테이블을 별도로 설정하여, 해당 버튼 클릭시 게시글 및 좋아요 테이블을 참조할 수 있게 구현 </li>
                                    <li className='ml-20'>태그 검색 기능 :  sequelize 상에서 검색된 요청 데이터를 포함하는 데이터만 가공하여 전달 </li>
                                    <li className='ml-20'>정렬 (최신순, 조회수, likes 순) 기능 : sequelize 상에서 정렬된 데이터를 DB 에서 호출하여 프론트로 전달하여 구현</li> */}
                                
                                <li className='ml-10'>백엔드</li>    
                                    <li className='ml-20'>게시글 및 댓글 CRUD 기능</li>                                
                            
                        </ul>
                    </div>
                </li>
            
    
    </>
  )
}

export default ProjectThird