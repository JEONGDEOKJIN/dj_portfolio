import React from 'react'
import { Carousel } from 'react-responsive-carousel'


const ModalDetail_1 = () => {
    return (
        <>
            {/* 첫번째 : 피그마 */}
            <div>
                {/* 이미지 */}
                
                <div className="">
                    <img
                        // src="./JEONGDEOKJIN.jpg"
                        src={process.env.PUBLIC_URL + '/figma_admin.jpg'}
                        aria-hidden
                        alt="profile image"
                        className="w-[100vw] m-auto rounded-2xl shadow-lg  border-slate-500"
                    />
                </div>

                {/* 설명 */}
                <div className="mt-10 mb-10">
                    <h3 className="py-[16px] text-[16px] font-bold ">업무 요약</h3>
                    <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                        <p> [기획] figma 활용하여 사용자 및 어드민 시나리오 및 UI 제작 </p>
                    </ul>

                    <h3 className="py-[16px] text-[16px] font-bold mt-6">업무 상세</h3>
                    <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                        <li> 문제상황 </li>
                        <li className="ml-10"> 협약사 요청에 따라 '사용자 및 어드민 user flow' 기획안 작성 </li>
                        <li className="ml-10">
                            {' '}
                            협약사는 '소유(부동산 STO 회사)'를 레퍼런스로 요청하였으나, footer bar 가 없는 등의 UX 적인
                            불편함이 발견됨{' '}
                        </li>

                        <li> 해결과정 </li>
                        <li className="ml-10">
                            {' '}
                            잠개고객을 'STO 조각 투자에 관심있는 고객', '주식 투자에 관심있는 고객' 으로 상정하고, 해당
                            기업 레퍼런스 분석
                        </li>

                        <li className="ml-20">
                            {' '}
                            뮤직카우(음악저작권STO) : STO 산업에서 가장 대표적인 기업으로써, STO 이용 고객의 기본 니즈가
                            충실히 반영되었을 것 으로 가정{' '}
                        </li>
                        <li className="ml-20">
                            {' '}
                            Tessa(미술품STO) : '공지 및 공시', '매거진 탭' 을 별도로 구성한 점 반영{' '}
                        </li>
                        <li className="ml-20"> 소유(부동산 STO) : 부동산 STO 산업의 기본적인 비즈니스 로직 반영 </li>
                        <li className="ml-20"> 토스(금융) : 투자 상품의 정보 제공을 가시적으로 표현한 점 반영</li>

                        <li> 결과 </li>
                        <li className="ml-10"> 어드민(12p) 및 사용자(25p) UI 및 User flow 기획</li>

                        {/* <li>  </li>
                                <li> 사용자 디자인은 레퍼런스 참고하여 기획안 디자인 구상</li>
                                <li> figma auto layout 기능 활용하여 layout 디자인</li> */}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ModalDetail_1
