import React from "react";
import { ReactComponent as Untitled } from "../images/Untitled.svg";

export default function Ad(props) {
    const {isAdIn, onClickAdIn, onClickAdOut} = props;
    
    return(
        <div>
            {isAdIn && <Untitled/>}
            {isAdIn ? (
                <button onClick={onClickAdOut}>광고안보기</button>
            ): (
                <button onClick={onClickAdIn}>광고보기</button>
            )}
        </div>
    )
}