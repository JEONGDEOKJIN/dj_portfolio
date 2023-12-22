import React from 'react'
import { DiGithubBadge, DiNodejs, DiPostgresql, DiReact } from 'react-icons/di'
import { FaAws, FaExternalLinkAlt, FaFigma } from 'react-icons/fa'
import { SiAwsamplify, SiMysql, SiNextdotjs, SiSolidity, SiStyledcomponents, SiTailwindcss, SiTypescript } from 'react-icons/si'


const ProjectFourth = ({toggleModal4}) => {
    
  return (
    <>
                    <li className="flex flex-col gap-[32px] md:flex-row" >
                    <div className="w-full md:w-[420px] cursor-pointer" onClick={toggleModal4}>
                        <img
                            src={process.env.PUBLIC_URL + '/wesAndersonMain.gif'}
                            className="w-full"
                            alt="어떤어떤 프로젝트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]"> Wes Anderson 클론 코딩 프로젝트 (4명)</li>
                            <li className="text-stone-500">2023. 04. 01 ~ 2023. 04. 25</li>
                            <li>front-end</li>
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal4}
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                        Wes Anderson 클론 코딩
                            
                            <a 
                                className='flex items-center justify-center w-10 h-10 hover:bg-indigo-100'
                                href="https://youtu.be/4upgLvmXIMg?si=xHPftgOdEDnameIC">
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
                                                        
                                <li> 메인 페이지 디자인 </li>
                                <li> 메인 페이지 목차 및 드롭다운 기능 구현 </li>
                                <li> 메인 페이지 css 애니메이션 구현 </li>
                                <li> 메인 페이지 swiper 기능 </li>
                                <li> medeia query 활용 웹앱 반응형 사이트 구현  </li>
                        
                        </ul>
                    </div>
                </li>
            
    
    </>
  )
}

export default ProjectFourth