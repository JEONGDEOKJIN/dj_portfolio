

import { Wrapper, Heading } from '../components/common'
import { FaAws, FaChessBoard, FaExternalLinkAlt, FaUserAlt } from 'react-icons/fa'
import { DiJavascript, DiNodejs, DiGithubBadge, DiPostgresql } from 'react-icons/di'
import { SiAwsamplify, SiAwsfargate, SiMysql, SiNextdotjs, SiSolidity, SiStyledcomponents, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { DiTrello } from 'react-icons/di'
import { DiReact } from 'react-icons/di'
import useModal from '../hooks/useModal'
import Modal from '../components/modal'
import { FaChalkboard, FaFigma, FaRegUser, FaUserCheck } from 'react-icons/fa6'
import { TfiBlackboard } from 'react-icons/tfi'
import { MdAdminPanelSettings } from 'react-icons/md'
import ProjectFirst from './ProjectFirst'
import ProjectSecond from './ProjectSecond'
import ProjectThird from './ProjectThird'
import RenderCarousel from './CarouselDetail'
import ModalDetail_1 from './STOproject/ModalDetail_1'
import ModalDetail_2 from './STOproject/ModalDetail_2'
// import ModalDetail_3 from './STOproject/ModalDetail_3'
// import ModalDetail_4 from './STOproject/ModalDetail_4'
// import ModalDetail_5 from './STOproject/ModalDetail_5'
import ModalNobrokerDetail_2 from './NobrokerProject/ModalNobrokerDetail_2'
import ModalNobrokerDetail_3 from './NobrokerProject/ModalNobrokerDetail_3'
import ModalNobrokerDetail_4 from './NobrokerProject/ModalNobrokerDetail_4'
import MonamiProjectDetail from './MonamiProject/MonamiProjectDetail'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import ProjectFourth from './ProjectFourth'
import ProjectFith from './ProjectFith'
import WesAndersonDetail from './WesAnderson/WesAndersonDetail'
import ProjectSixth from './ProjectSixth'



const Projects = () => {
    const [isShowingModal, toggleModal] = useModal()
    const [isShowingModalURL, toggleModalURL] = useModal()

    const [isShowingModal2, toggleModal2] = useModal()
    const [isShowingModal3, toggleModal3] = useModal()
    const [isShowingModal4, toggleModal4] = useModal()
    const [isShowingModal5, toggleModal5] = useModal()
    const [isShowingModal6, toggleModal6] = useModal()


    return (
        <Wrapper>
            <Heading>프로젝트</Heading>

            <ul className="flex flex-col w-full gap-[120px]">
                
                <ProjectFirst toggleModal ={toggleModal} />
                <ProjectSecond toggleModal2 ={toggleModal2} />
                <ProjectThird toggleModal3 ={toggleModal3} />
                <ProjectFourth toggleModal4 ={toggleModal4} />
                <ProjectSixth toggleModal5 ={toggleModal6} />
                <ProjectFith toggleModal5 ={toggleModal5} />

            </ul>

            {/* 첫번째 프로젝트 */}
            <Modal show={isShowingModal} onCloseButtonClick={toggleModal}>
                {/* <div className='overflow-auto min-h-[70vh]'> */}
                
                <div className='overflow-auto h-[70vh] '>
                    
                        <ModalDetail_1   />
                        <ModalDetail_2 />
                        {/* <ModalDetail_3 /> */}
                        {/* <ModalDetail_4 /> */}
                        {/* <ModalDetail_5 /> */}
                    
                </div>
                
            </Modal>
            
            {/* 두번째 프로젝트 */}
            <Modal show={isShowingModal2} onCloseButtonClick={toggleModal2}>
                
            <div className='overflow-auto h-[70vh] '>
                    <ModalNobrokerDetail_2 />
                    <ModalNobrokerDetail_3 />
            </div>
            </Modal>
                
            {/* 세번째 프로젝트 */}
            <Modal show={isShowingModal3} onCloseButtonClick={toggleModal3}>
                <div className='overflow-auto h-[70vh] '>
                    <MonamiProjectDetail /> 
                </div>
            </Modal>

            {/* 네번째 프로젝트 */}
            <Modal show={isShowingModal4} onCloseButtonClick={toggleModal4}>
                <div className='overflow-auto h-[70vh] '>
                    <WesAndersonDetail /> 
                </div>
            </Modal>

            {/* 다섯번째 프로젝트 */}
            {/* <Modal show={isShowingModal5} onCloseButtonClick={toggleModal}>
                <div className='overflow-auto h-[70vh] '>
                    <WesAndersonDetail /> 
                </div>
            </Modal> */}

        </Wrapper>
    )
}

export default Projects
