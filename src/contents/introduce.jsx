import { RiDoubleQuotesL } from 'react-icons/ri'
import { RiDoubleQuotesR } from 'react-icons/ri'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const Introduce = () => {
    const { animatedElementRef, isVisible } = useIntersectionObserver(0.7)

    return (
        <div
            ref={animatedElementRef}
            className={`w-full flex pt-[32px] transition-opacity duration-1000 ease-in-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div className="flex flex-col gap-[16px] w-full items-center">
                <RiDoubleQuotesL />
                <div className="text-center text-[16px] md:text-[24px]">
                    <p>새로운 기술로 '효율성'을 높일 때 희열을 느낍니다. </p>
                    <p>'좋은 잔상'을 남기는 프론트를 만들겠습니다. </p>
                </div>
                <RiDoubleQuotesR />
            </div>
        </div>
    )
}

export default Introduce
