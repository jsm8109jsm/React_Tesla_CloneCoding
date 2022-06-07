import React from "react";

export default function Cybertruck(){
    return(
        <div>
            <div className="cybertruck_main">
                <img src="../images/cybertruck_logo.svg" className='cybertruck_logo' alt="사진 업로드 중..."></img>
                <p className="cybertruck_logo--text">스포츠카를 능가하는 퍼포먼스와 기존의 픽업트럭보다 더 높은 실용성</p>
                <button className="cybertruck--news">뉴스레터 받기</button>
            </div>
            <div className="cybertruck_introduce">
                <img src="https://www.tesla.com/xNVh4yUEc3B9/02_Desktop.jpg" className="cybertruck_introduce--img" alt="사진 업로드 중..."></img>
            </div>
        </div>
    )
}