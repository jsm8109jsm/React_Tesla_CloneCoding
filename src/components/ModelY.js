import React, { useEffect, useState } from "react";
import ModelYImg from "./ModelYImg";

export default function ModelY(){
    const [distance, setDistance] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [speedPerHour, setSpeedPerHour] = useState(0);
    const [isPer, setIsPer] = useState(false);
    const [colorName, setColorName] = useState('');
    const [colorPrice, setColorPrice] = useState('');
    const [carImg, setCarImg] = useState('');
    const [color, setColor] = useState('white');

    let wheelBtn;

    let PerformUpgrade;
    useEffect(()=>{
        setOption1();
        setColorName('Pearl White Multi-Coat');
        setColorPrice('포함');
        setColor('white');
        carImgName('white');
    },[])

    const setOption1 = () => {
        setDistance(511);
        setSpeed(217);
        setSpeedPerHour(5.0);
        setIsPer(true);
        setCarImg(`basic--${color}`);
    }

    const setOption2 = () => {
        setDistance(448);
        setSpeed(250);
        setSpeedPerHour(3.7);
        setIsPer(false);
        setCarImg(`perform--${color}`);
    }

    const carImgName = (newColor) => {
        if(isPer){
            setCarImg('basic');
        }
        else{
            setCarImg('perform');
        }
        setCarImg(prev => prev += '--' + newColor);
    }

    if(!isPer){
        PerformUpgrade = '<div><h2 style="text-align: center; font-weight: normal; font-size: 1.75em; margin:0.5em;">퍼포먼스 업그레이드</h2><span style="display: block; text-align: center;">포함</span><ul><li style="margin-top: 0.5em">최고 속도를 217km/h에서 250km/h로 증가</li><li style="margin-top: 0.5em">21인치 Überturbine 휠</li><li style="margin-top: 0.5em">퍼포먼스 브레이크</li><li style="margin-top: 0.5em">낮아진 서스펜션</li><li style="margin-top: 0.5em">알루미늄 알로이 페달</li></ul></div>'
        wheelBtn = '<button><img src="../images/21.png"/></button>';
    }
    else{
        wheelBtn = '<button><img src="../images/19.png"/></button><button><img src="../images/20.png"/></button>';
    }

    return(
        <div>
            <ModelYImg carimg={carImg}/>
            <main className="car--content">
                <h1 className="car--name">Model Y</h1>
                <div className="main">
                    <ul className="car--info--ul">
                        <li className="car--info"><span className="car--info--num">{distance}</span><span className="car--info--unit">km</span><br/><span className="car--info--text">주행 가능 거리</span></li>
                        <li className="car--info"><span className="car--info--num">{speed}</span><span className="car--info--unit">km/h</span><br/><span className="car--info--text">최고 속도</span></li>
                        <li className="car--info"><span className="car--info--num">{speedPerHour}</span><span className="car--info--unit">초</span><br/><span className="car--info--text">0-100 km/h</span></li>
                    </ul>
                    <span>듀얼 모터 상시 사륜구동(AWD)</span>
                    <button className="price--button" onClick={setOption1} style={!isPer?{border: '2px solid gray'}:{border: '2px solid #3457b1'}}>
                        <span className="price--button--name">Model Y Long Range</span>
                        <span className="price--button--price">₩89,490,000</span>
                    </button>
                    <button className="price--button" onClick={setOption2} style={isPer?{border: '2px solid gray'}:{border: '2px solid #3457b1'}}>
                        <span className="price--button--name">Model Y Performance</span>
                        <span className="price--button--price">₩96,190,000</span>
                    </button>
                    <button className="char">특징</button>
                </div>

                <div dangerouslySetInnerHTML={{__html : PerformUpgrade}} className="performance"></div>

                <div className="color">
                    <h4 className="detail--title">색상</h4>
                        <div className="color--btn--div">
                            <button className="color--btn" style={color==='white'?{border: '3px solid #3457b1'}:{border: '0px solid'}}><img src="../images/Paint_White.png" alt="white" className="color--img" onClick={()=>{
                                    setColorName('Pearl White Multi-Coat');
                                    setColorPrice('포함');
                                    setColor('white');
                                    carImgName('white');
                                }
                            }></img></button>
                            <button className="color--btn" style={color==='black'?{border: '3px solid #3457b1'}:{border: '0px solid'}}><img src="../images/Paint_Black.png" alt="black" className="color--img" onClick={()=>{
                                    setColorName('Solid Black');
                                    setColorPrice('₩1,286,000');
                                    setColor('black');
                                    carImgName('black');
                            }}></img></button>
                            <button className="color--btn" style={color==='midnightsilver'?{border: '3px solid #3457b1'}:{border: '0px solid'}}><img src="../images/Paint_MidnightSilver.png" alt="midnightsilver" className="color--img" onClick={()=>{
                                    setColorName('Midnight Silver Metallic');
                                    setColorPrice('₩1,286,000');
                                    setColor('midnightsilver');
                                    carImgName('midnightsilver');
                            }}></img></button>
                            <button className="color--btn" style={color==='blue'?{border: '3px solid #3457b1'}:{border: '0px solid'}}><img src="../images/Paint_Blue.png" alt="blue" className="color--img" onClick={()=>{
                                    setColorName('Deep Blue Metallic');
                                    setColorPrice('₩1,286,000');
                                    setColor('blue');
                                    carImgName('blue');
                            }}></img></button>
                            <button className="color--btn" style={color==='red'?{border: '3px solid #3457b1'}:{border: '0px solid'}}><img src="../images/Paint_Red.png" alt="red" className="color--img" onClick={()=>{
                                    setColorName('Red Multi-Coat');
                                    setColorPrice('₩2,571,000');
                                    setColor('red');
                                    carImgName('red');
                            }}></img></button>
                        </div>
                    <span className="color--name">{colorName}</span><span className="color--price">{colorPrice}</span>
                </div>

                <div className="color">
                    <h4 className="detail--title">휠</h4>
                    <div dangerouslySetInnerHTML={{__html : wheelBtn}} className="performance"></div>
                </div>
            </main>
        </div>
    )
}