import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SMainContainer = css`
    display: flex;
`;

const SSidebar = css`
    width: 300px;
    background-color: #ddd;
`;

const SContantContainer = css`
    flex-grow: 1; // 남은 영역 채우기
    height: 700px;
    background-color: #aaa;
`;


function MainLayout({ title, menus, children }) { // children = 반복이 아닌 해당 페이지에만 있는 거
    const testMenus = [ 1, 2, 3, 4 ]
    const testMenusMap = testMenus.map((menu) => <li>{menu}</li>)
    // const testMenusMap2 = [ <li>1</li>, <li>2</li>, <li>3</li>, <li>4</li> ] 위에 있는 testMenusMap와 동일함

    return (
        <>
            <h1>{title}</h1>
            <div css={SMainContainer}>
                <ul css ={SSidebar}>
                    {menus.map((menu) => <li key={menu.id} >{menu.name}</li>)}
                </ul>
                <div css={SContantContainer}>
                    {children}
                </div>
            </div>
        </>
    );
}

export default MainLayout;