import React from 'react'
import { DiGithubBadge, DiNodejs, DiPhotoshop, DiPostgresql, DiReact } from 'react-icons/di'
import { FaAws, FaExternalLinkAlt, FaFigma } from 'react-icons/fa'
import { SiAwsamplify, SiMysql, SiNextdotjs, SiSolidity, SiStyledcomponents, SiTailwindcss, SiTypescript, SiUnrealengine } from 'react-icons/si'


const ProjectSixth = ({toggleModal6}) => {
    
  return (
    <>
                    <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src={process.env.PUBLIC_URL + '/venus.gif'}
                            className="w-full"
                            alt="어떤어떤 프로젝트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]"> 팀 프로젝트</li>
                            <li className="text-stone-500">2022. 10. 10 ~ 2022. 11. 10</li>
                            <li>3D 배경 및 2D 애셋 제작</li>
                            <li className='mt-2' >
                                <a
                                    className="px-[16px] py-[10px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    href="https://youtu.be/HcCSq8fBt6c?si=sM9mjOt_TG6A_fYj"
                                >
                                    영상 상세보기
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                        [인공지능 콘텐츠 창작자 양성사업] Venus
                            
                            <a 
                                className='flex items-center justify-center w-10 h-10 hover:bg-indigo-100'
                                href="https://youtu.be/HcCSq8fBt6c?si=_X7Op3g-f8RI1ZNQ">
                                {/* <FaExternalLinkAlt /> */}
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            생성형 ai 인 stable diffusion와 Unreal5를 이용하여 디스토피아적 세계관을 표현한 XR 작품 
                        </p>
                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <SiUnrealengine />
                            <DiPhotoshop />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">

                            <li>Unreal5를 이용한 3D 배경 제작</li>
                            <li>생성형 ai 인 stable diffusion 사용하여 2d 이미지 제작</li>
                            
                        </ul>
                    </div>
                </li>
            
    
    </>
  )
}

export default ProjectSixth