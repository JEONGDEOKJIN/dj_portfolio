import React from 'react'
import { DiGithubBadge, DiNodejs, DiPostgresql, DiReact } from 'react-icons/di'
import { FaAws, FaExternalLinkAlt, FaFigma } from 'react-icons/fa'
import { SiAwsamplify, SiNextdotjs, SiSolidity, SiTailwindcss, SiTypescript } from 'react-icons/si'

import { Carousel } from 'flowbite';


const ProjectFirst = ({toggleModal}) => {


    
  return (
    <>
    {/* 첫번째 프로젝트 */}
    <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] cursor-pointer"  >
                        <img
                            onClick={toggleModal}
                            src={process.env.PUBLIC_URL + '/admin_main.jpg'}
                            className="w-full"
                            alt="기업 협약 프로젝트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li onClick={toggleModal} className="text-[16px]">기업 협약 프로젝트 (5명)</li>
                            <li onClick={toggleModal} className="text-stone-500">2023. 11. 01 ~ 12. 05</li>
                            <li>front-end</li>
                            <li>
                                <button
                                    onClick={toggleModal}
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    상세보기
                                </button>
                                <a
                                    href={'https://bs.admin.bouncesto.site/admin/dashboard'}
                                    className="ml-2 px-[16px] py-[10px] bg-slate-500 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    Admin page
                                </a>
                                <a
                                    href={'https://bouncesto.site/home'}
                                    className="ml-2 px-[16px] py-[10px] bg-slate-500 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    User page
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            STO 부동산 서비스 (with 바운스코드){' '}
                            <a
                                className="flex flex-col items-center justify-center w-10 h-10 ml-2 hover:bg-indigo-100 "
                                href="https://bs.admin.bouncesto.site/admin/dashboard"
                            >
                                <FaExternalLinkAlt className="text-neutral-900" size={13} />
                                <span className="flex justify-center text-xs font-thin text-neutral-800"> Admin </span>
                            </a>
                            
                            <a
                                className="flex flex-col items-center justify-center w-10 h-10 hover:bg-indigo-100 "
                                href="https://bouncesto.site/home"
                            >
                                {/* <FaRegUser /> */}
                                <FaExternalLinkAlt className="text-neutral-900" size={13} />
                                <span className="flex justify-center text-xs font-thin text-neutral-800">User</span>
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            바운스 코드 기업와 부동산 STO 발행, 거래, 추적 및 DAO 서비스 - 본인 외 4명
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <SiNextdotjs />
                            <DiReact />
                            <SiTailwindcss />
                            <DiNodejs />
                            <DiPostgresql />
                            <SiSolidity />

                            <SiTypescript />
                            <FaFigma />

                            <FaAws />
                            <SiAwsamplify />
                            <DiGithubBadge />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold ">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>[기획] figma 활용하여 사용자 및 어드민 시나리오 및 UI 제작  </li>

                            <li className="mt-1">
                                {' '}
                                [프론트] Admin 
                                <li className="ml-10">
                                    [대시보드] chart.js 활용하여 '기간별 거래금액' 등의 '차트' 구현
                                </li>
                                <li className="ml-10">
                                    [대시보드] '거래 정보 요약', '블랙리스트 유저', '최근 거래' 컴포넌트 구현
                                </li>
                                <li className="ml-10">[대시보드] 배당금, 게시글, 매물, DAO 투표 '등록 기능' 구현</li>
                                <li className="ml-10">[사용자 섹션] '사용자 정보 조회' 및 '블랙리스트 등록' 구현</li>
                                <li className="ml-10">
                                    [거래이력 섹션] 4가지 트랜잭션 유형 조회를 포함한 거래이력 조회 기능 구현
                                </li>
                                <li className="ml-10">[매물관리 섹션] 매물관리 목록 및 상세 정보 조회 기능 구현</li>
                                <li className="ml-10">[게시글 섹션] 공시 및 공지사항 조회 기능 구현</li>
                            </li>

                            <li className="mt-1">
                                [백엔드]
                                <li className="ml-10">공지사항, 사용자 정보 조회 기능 구현  </li>
                            </li>
                        </ul>

                        {/* <h3 className="py-[16px] text-[16px] font-bold ">성과</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>[기획] figma 활용하여 사용자 및 어드민 시나리오 및 UI 제작 </li>
                        </ul> */}
                    </div>
                </li>

    </>
  )
}

export default ProjectFirst