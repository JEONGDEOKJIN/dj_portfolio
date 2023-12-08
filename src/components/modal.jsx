import ReactDOM from 'react-dom'
const Modal = ({ show, onCloseButtonClick, children }) => {
    if (!show) {
        return null
    }

    // 모달 컨텐츠 클릭 시 이벤트 버블링을 막는 함수
    const handleModalContentClick = (event) => {
        event.stopPropagation();
    };
    

    return ReactDOM.createPortal(
        <div
            onClick={onCloseButtonClick}
            className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-50 "
        >
            <div onClick={handleModalContentClick} className="p-8 bg-white rounded-md w-[50%]">
                <h2 className="mb-4 text-lg font-bold">
                    <button className="float-right -mt-6 -mr-4" onClick={onCloseButtonClick}>
                        ✖
                    </button>
                </h2>
                <div className="body">{children}</div>
                {/* <div className="footer">
                    <button onClick={onCloseButtonClick}>Close Modal</button>
                </div> */}
            </div>
        </div>,
        document.body,
    )
}

export default Modal
