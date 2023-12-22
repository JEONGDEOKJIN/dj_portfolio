import React from 'react'
import { DiGithubBadge, DiNodejs, DiPostgresql, DiReact } from 'react-icons/di'
import { FaAws, FaExternalLinkAlt, FaFigma } from 'react-icons/fa'
import { SiAwsamplify, SiMysql, SiNextdotjs, SiSolidity, SiStyledcomponents, SiTailwindcss, SiTypescript } from 'react-icons/si'

const ProjectSecond = ({toggleModal2}) => {
    
  return (
    <>
                    {/* 두번째 프로젝트 */}
                    <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] cursor-pointer"  >
                        <img
                            onClick={toggleModal2}
                            src={process.env.PUBLIC_URL + '/nobroker_estateList.gif'}
                            className="w-full"
                            alt="어떤어떤 프로젝트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li onClick={toggleModal2} className="text-[16px]">React 프로젝트 (4명)</li>
                            <li onClick={toggleModal2} className="text-stone-500">2023. 07. 28 ~ 2023. 08. 28</li>
                            <li>front-end , back-end</li>
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal2}
                                >
                                    상세보기
                                </button>
                                <a
                                    href={'http://ec2-3-37-244-154.ap-northeast-2.compute.amazonaws.com/'}
                                    className="ml-2 px-[16px] py-[10px] bg-slate-500 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    Visit Page
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                        Nobroker (중개인 없는 부동산 거래 플랫폼) {' '}
                        
                            <a 
                                className='flex items-center justify-center w-10 h-10 hover:bg-indigo-100'
                                href="http://ec2-3-37-244-154.ap-northeast-2.compute.amazonaws.com/">
                                {/* <FaExternalLinkAlt /> */}
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                        부동산 중개인 없이 부동산 거래가 가능한 탈중앙화된 부동산 서비스
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiReact />
                            <DiNodejs />
                            <FaAws />
                            <SiMysql />
                            <SiStyledcomponents />

                            <FaFigma />

                            <DiGithubBadge />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">

                            <li>매물 목록 페이지 </li>
                            
                                <li className='ml-10'>프론트</li>    
                                    <li className='ml-20'>등록된 매물의 구매 목록 리스트로 보여주기</li>
                                    <li className='ml-20'>google api 내 Autocomplete 기능 사용하여 자동검색 기능 및 마커 구현 </li>
                                    <li className='ml-20'>google api 내 MarkerClusterer 기능 이용하여 개별 마커를 클러스터로 표현</li>
                                    <li className='ml-20'>방 종류, 크기, 가격 드롭다운 버튼 클릭시 해당 정보 필터링 기능 구현</li>
                                    <li className='ml-20'>key color 반영하여 구글맵 색상 및 마커 커스텀</li>
                                
                                <li className='ml-10'>백엔드</li>    
                                    <li className='ml-20'>드롭 다운 필터 사항 반영하여 where 조건 만족하는 조회 기능 구현 </li>

                            <li>어드민 페이지 </li>
                            
                                <li className='ml-10'>[프론트] 판매 업자 인증 버튼 클릭시, 변경 post 요청 구현</li>    
                                <li className='ml-10'>[백엔드] 클릭된 유저의 certificate 속성 update 하기 </li>    

                                
                            <li> 배포 </li>
                                <li className='ml-10'> NGINX 등을 이용하여 AWS EC2 에 프로젝트 배포 </li>    


                                    
                                
                            
                        </ul>
                    </div>
                </li>
            
    
    </>
  )
}

export default ProjectSecond