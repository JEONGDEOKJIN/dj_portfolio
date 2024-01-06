import { Wrapper, Heading } from '../components/common'
import { DiJavascript, DiNodejs, DiGithubBadge, DiAws, DiGit, DiPhotoshop } from 'react-icons/di'
import { FaAws, FaFigma, FaNodeJs } from 'react-icons/fa'
import { FaGit } from 'react-icons/fa6'
import { SiNextdotjs, SiTypescript, SiJavascript, SiExpress, SiReact, SiReactos, SiNodedotjs, SiAwsamplify, SiSolidity, SiUnrealengine } from 'react-icons/si'

const Skills = () => {
    return (
        <Wrapper>
            <Heading>기술 스택</Heading>
            
            <ul className="flex flex-col divide-y divide-gray-400">
                <li className="flex flex-row gap-[32px] py-[32px">
                    
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        언어
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-start">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiJavascript />
                                <span className="md:w-[120px]">Javascript</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>
                                    브라우저 및 node 런타임 환경을 고려하여, 안정적인 코드를 작성하려 노력
                                </li>
                                <li>'클린 코드'를 작성하기 위해 노력 </li>
                                
                            </ul>
                        </li>

                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-start">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiTypescript />
                                <span className="md:w-[120px]">Typescript</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li> interface 를 이용한 기본적인 type 설정 </li>
                            </ul>
                        </li>
                    
                        

                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-start mt-2">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiSolidity />
                                <span className="md:w-[120px]">Solidity</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li> ERC721, ERC20 활용한 NFT 발행 경험  </li>
                            </ul>
                        </li>
                        

                        
                    </ul>
                </li>

                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        FrontEnd
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-start">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiReact />
                                <span className="md:w-[120px]">React</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>reactQuery, mutation 활용한 캐싱 데이터 활용 </li>
                                <li>redux 활용한 상태 관리</li>
                            </ul>
                        </li>

                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-start">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiNextdotjs />
                                <span className="md:w-[120px]">NextJS</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>Client Component 와 Servier component 최적화 사용</li>
                                <li> useParams, searchParams 를 사용하여 동적 라우팅 사용 </li>
                                <li> timebased 또는 on-demand 을 통한 revalidate 기능 사용</li>
                                <li>web3 연결시 SSR 특징을 고려하여 연결 최적화</li>
                            </ul>
                        </li>

                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-start">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <FaFigma />
                                <span className="md:w-[120px]"> Figma </span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li> 컴포넌트 재사용성과 UX 를 고려한 UI 기획 </li>
                            </ul>
                        </li>
                        
                    </ul>
                </li>

                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        BackEnd
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-start">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiExpress />
                                <span className="md:w-[120px]">Express</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>RESTful API 설계 및 CRUD 게시판 작성 경험</li>
                            </ul>
                        </li>

                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-start">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <FaNodeJs />
                                <span className="md:w-[120px]">Node.js</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li> sequelize, MySQL 활용하여 기본적인 CRUD 구현  </li>
                            </ul>
                        </li>

                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-start">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <FaAws />
                                <span className="md:w-[120px]"> AWS </span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li> EC2 활용하여 React 프로젝트 배포 경험 </li>
                            </ul>
                        </li>

                    </ul>
                </li>

                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        ETC
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">

                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-start">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <FaGit />
                                <span className="md:w-[120px]"> Git </span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li> git 활용하여 버전관리 및 프로젝트 관리 </li>
                            </ul>
                        </li>

                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-start">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiUnrealengine />
                                <span className="md:w-[120px]">Unreal</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>블루프린트 활용한 3D 애셋 제작 및 레벨 디자인</li>
                            </ul>
                        </li>
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-start">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <DiPhotoshop />
                                <span className="md:w-[120px]">Photoshop</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>선택툴, 블렌드 모드 등을 활용한 이미지 제작 </li>
                            </ul>
                        </li>
                        
                    </ul>
                </li>



                
            </ul>
        </Wrapper>
    )
}

export default Skills
