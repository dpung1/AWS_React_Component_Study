import React, { useEffect, useState } from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';

function Apage(props) {
    const menus = [
        {
            id: 1,
            name: "나의 프로젝트"
        },
        {
            id: 2,
            name: "나에게 공유된 프로젝트"
        }
    ];

    const [ result, setResult ] = useState("");
    
    const [ inputValueObjs, setInputValueObjs ] = useState({
        firstNum: 0,
        secondNum: 0
    });
    
    useEffect(() => { // 처음 페이지 열리면서 한번 동작 후 안에서 상태가 변할때 마다 동작
        calc(inputValueObjs.firstNum, inputValueObjs.secondNum);
        // calc(10, 20);
    });

    const calc = (x, y) => {
        setResult(x + y);
    }

    const handleInputChange = (e) => {
        setInputValueObjs({
            ...inputValueObjs,
            [e.target.name]: parseInt(e.target.value)
        });
    };

    return (
        <MainLayout title={"A페이지"} menus={menus}> {/* mainLayout의 porps를 가져와 해당 페이지에만 값을 적용 */}
            <div> {/* children 영역 */}
                {result}
            </div>
            <div>
                <input type="text" name='firstNum' onChange={handleInputChange} placeholder='1번 값'/>
                <input type="text" name='secondNum' onChange={handleInputChange} placeholder='2번 값'/>
            </div>
        </MainLayout>
    );
}

export default Apage;