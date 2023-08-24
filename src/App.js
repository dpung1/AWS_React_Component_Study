// function App({ age }) {
  
  // const student = {
    //   code: 20230801,
    //   name: "이름"
    // }
    
    // const { code } = student; // student 객체에서 code만 빼옴 (비할당 구조)
    
    // const name = "이름";
    
    // const jsx = <>
    //               <div>{code}</div>
    //               <div>{name}</div>
    //               <div>{age}</div> {/* props도 객체임 */}
    //             </>


/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { Reset } from "styled-reset";
import { GSCommon } from "./styles/common";
import { Route, Routes } from "react-router-dom";
import Apage from "./pages/Apage/Apage";
import Bpage from "./pages/Bpage/Bpage";
import { useState } from "react";

  const SHeader = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 60px;
    background-color: #777;
  `;

  const SContainer = css`
    margin: 0px auto; // auto시 flex 없이 가운데 정렬가능
    width: 1170px;
    background-color: #bbb;
  `;

function App() {
  const [ header, setHeader ] = useState("Header");

  return (
    <>
      <Reset />
      <Global styles={GSCommon} />
      <div>
        <div css={SHeader}>{header}</div>
        <div css={SContainer}>
            <Routes>
              <Route path="/a" element={ <Apage /> }/>
              <Route path="/b" element={ <Bpage setHeader={setHeader}/> }/> {/* setHeader의 값을 Bpage로 보냄 */}
            </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
