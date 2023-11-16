import React, { useState } from "react";
import Ad from "../Components/Ad";

export default function AdPage() {
    const [isAdIn, setIsAdIn] = useState(true);

    const onClickAdIn = () => {
        setIsAdIn(true);
    };

    const onClickAdOut = () => {
        setIsAdIn(false);  
    };

    return(
        <div>
            <Ad
                isAdIn={isAdIn}
                onClickAdIn={onClickAdIn}
                onClickAdOut={onClickAdOut}
            />
        </div>
    )
}