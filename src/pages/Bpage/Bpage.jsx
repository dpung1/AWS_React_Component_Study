import React, { useRef, useState } from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';

function Bpage({ setHeader }) { // App.js 에 있는 setHeader의 props 가져옴
    const menus = [
        {
            id: 1,
            name: "내 계정 정보"
        },
        {
            id: 2,
            name: "비밀번호 변경"
        },
        {
            id: 3,
            name: "이메일 인증 또는 변경"
        },
        {
            id: 4,
            name: "계정 업그레이드"
        }
    ];

    let [ content, setContent ] = useState("기본값"); // 랜더링용

    let inputText = "";

    const inputRef = useRef();

    const handleInputChange = (e) => {
        inputText = e.target.value
    };
    

    const handleOkClick = () => {
        // console.log(document.querySelector("input").value)
        // console.log(inputRef.current.value);
        // setContent(inputText);
        setHeader(inputText); // App.js 에 있는 Header 이름 바꾸기
    };

    return (
        <MainLayout title={"B페이지"} menus={menus}>
            <div> {/* children 영역 */}
                <h1>{content}</h1> 
                <input type="text" onChange={handleInputChange} ref={inputRef}/>
                <button onClick={handleOkClick} >확인</button>
            </div> {/* children 영역 */}
        </MainLayout>
    );
}

export default Bpage;