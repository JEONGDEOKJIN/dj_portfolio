

// import {
//   BiCaretLeft,
//   BiCaretLeftCircle,
//   BiCaretRight,
//   BiCaretRightCircle,
//   BiCaretRightSquare,
// } from "react-icons/bi";
// import { useState } from "react";



// import React from 'react'




// const RenderCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState;
//   const [animation, setAnimation] = useState("fadeIn"); // 애니메이션을 위한 새로운 상태

//   // const nameArr = currentSituationData.map((item) => item.subscription_name);
//   // const subscription_descriptionArr = currentSituationData.map(
//   //   (item) => item.subscription_description
//   // );
//   // const weekTradeArr = currentSituationData.map((item) => item.total_amount);
//   // const tokenPriceArr = currentSituationData.map((item) => item.current_price);


//   // const imagePathsArr = currentSituationData.map(
//   //   (item) => item.subscription_img_1
//   // );



//   const prevSlide = () => {
//     setAnimation("fadeOut"); // 페이드 아웃으로 시작
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide
//       ? finalImageURLArr.length - 1
//       : currentIndex - 1;
//     setTimeout(() => {
//       setCurrentIndex(newIndex);
//       setAnimation("fadeIn");
//     }, 1000);
//   };

//   const nextSlide = () => {
//     setAnimation("fadeOut"); // 페이드 아웃으로 시작
//     const isLastSlide = currentIndex === finalImageURLArr.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setTimeout(() => {
//       setCurrentIndex(newIndex);
//       setAnimation("fadeIn");
//     }, 1000);
//   };

//   return (
//     <>
//       <div className="relative flex items-center h-64 shadow-lg rounded-2xl w-30rem justify-evenly ">
//         {/* 왼쪽 */}
//         <div className="relative h-11.5rem w-9.875rem  ">
//           <img
//             className={`rounded-2xl grayscale-20 duration-500 ${animation}`} // 'bg-center bg-cover' 은 안 함 | duration-500 은 사진이 지연되게 넘어가면서, 슬라이더 효과
//             alt="매물 사진"
//             src={finalImageURLArr[currentIndex]} // [✅체크 할 것] next.config.js 에 기재한 경로와 맞아야 함
//             sizes="100vm"
//             style={{ objectFit: "cover" }}
//             fill={true}
//           />
//         </div>


//         {/* 버튼 */}
//         <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-small rounded-full p-2 bg-black/10 text-white cursor-pointer">
//           {/* <BiCaretLeftCircle onClick={prevSlide} size={30} /> */}
//           <BiCaretLeft onClick={prevSlide} size={25} />
//         </div>

//         <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-small rounded-full p-2 bg-black/10 text-white cursor-pointer">
//           <BiCaretRight onClick={nextSlide} size={25} />
//         </div>


//       </div>
//     </>
//   );
// };

// export default RenderCarousel;


