import { Children, useState } from "react";
import styled from "styled-components";
import React from "react";

const Left1Right2 = ({children}) => {
    const childrenArray = Children.toArray(children);
    return(
        <S.Wrapper>
            <S.Left>
                {childrenArray.slice(0,1)}
            </S.Left>
            <S.Right>
                {childrenArray.slice(1).map((item) =>
                    <div style={{borderBottom: "1px solid black", height:"100%"}}>
                        {item}
                    </div>
                )}
            </S.Right>
        </S.Wrapper>
    );
}

const TextAreas = () => {
    const [height, setHeight] = useState(1);
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          setHeight((prevHeight) => prevHeight + 1);
        }
        else if(e.key === 'Backspace') {
            if(height >= 0){
                setHeight((prevHeight) => prevHeight - 1);
            }
        }
      };
      
    return(
        <S.TextArea
        onKeyDown={handleKeyDown}
        plusHeight={height}/>
    )
}

const LeftDiv = ({children}) => {
    return(
        <S.LeftWrapper>
            {children}
        </S.LeftWrapper>
    )
}

const RightDiv = ({children}) => {
    return(
        <S.RightWrapper>
            {children}
        </S.RightWrapper>
    )
}

function GridMain({children}){
    return(
        <div>  
            {children}
        </div>
    )
};

const S ={
    Wrapper: styled.div`
        display: flex;
        color: black;
        min-height: 150px;
        width: 100%;
        height: 100%;
    `,
    LeftWrapper: styled.div`
        display: flex;
        width: 20%;
        min-height: 50px;
        justify-content: center;
        border-bottom: 1px solid black;
        border-right: 1px solid black;
        align-items: center;
    `,
    RightWrapper: styled.div`
        display: flex;
        width: 80%;
        min-height: 30px;
        justify-content: center;
        border-bottom: 1px solid black;
        align-items: center;
        height: auto;
    `,
    Left: styled.div`
        display: flex;
        align-items: center;
        width: 50%;
        height: 100%;
    `,
    Right: styled.div`
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 100%;
        border-left: 1px solid black;
    `,
    TextArea: styled.textarea`
        min-height: 90%;
        height: ${(props) => props.plusHeight}rem;
        width: 100%;
    `,
    
};

export const Grid = Object.assign(GridMain, {
    Left1Right2,
    LeftDiv,
    RightDiv,
    TextAreas,
})