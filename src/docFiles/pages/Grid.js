import { Children, useState } from "react";
import styled from "styled-components";
import React from "react";



const TextAreas = () => {
    const [height, setHeight] = useState(2);
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
};

const LeftDiv = ({children, percent}) => {
    const childrenArray = Children.toArray(children);
    return(
        <S.Left percent={percent}>
            {childrenArray.slice(0,childrenArray.length - 1).map((child) =>
            <div style={{borderRight:"1px solid black",height:"100%",width:"100%", display:"flex", alignContent:"center"}}>
                {child}
            </div>  
            )}
            <div style={{width:"100%"}}>
                {childrenArray.slice(childrenArray.length - 1)}
            </div>
        </S.Left>
    )
};

const RightDiv = ({children, percent}) => {
    const childrenArray = Children.toArray(children);
    return(
        <S.Right percent={percent}>
            {childrenArray.slice(0,childrenArray.length - 1).map((child, index) =>
            <div style={{borderRight:"1px solid black",height:"100%",width:"100%", display:"flex", alignContent:"center", key:{index}}}>
                {child}
            </div>  
            )}
            <div style={{width:"100%"}}>
                {childrenArray.slice(childrenArray.length - 1)}
            </div>
        </S.Right>
    )
};

const LeftColDiv = ({children, percent}) => {
    const childrenArray = Children.toArray(children);
    return(
        <S.LeftColDiv percent={percent}>
            {childrenArray.slice(0,childrenArray.length - 1).map((child) =>
            <div style={{borderBottom:"1px solid black",height:"100%",width:"100%", display:"flex", alignContent:"center"}}>
                {child}
            </div>  
            )}
            <div style={{width:"100%"}}>
                {childrenArray.slice(childrenArray.length - 1)}
            </div>
        </S.LeftColDiv>
    )
};


const RightColDiv = ({children, percent}) => {
    const childrenArray = Children.toArray(children);
    return(
        <S.LeftColDiv percent={percent}>
            {childrenArray.slice(0,childrenArray.length - 1).map((child) =>
            <div style={{borderBottom:"1px solid black",height:"100%",width:"100%", display:"flex", alignContent:"center"}}>
                {child}
            </div>  
            )}
            <div style={{width:"100%"}}>
                {childrenArray.slice(childrenArray.length - 1)}
            </div>
        </S.LeftColDiv>
    )
};

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
    Left: styled.div`
        display: flex;
        width: ${(props) => props.percent}%;
        min-height: 50px;
        justify-content: center;
        border-bottom: 1px solid black;
        border-right: 1px solid black;
        align-items: center;
    `,
    Right: styled.div`
        display: flex;
        width: ${(props) => props.percent}%;
        min-height: 30px;
        justify-content: center;
        border-bottom: 1px solid black;
        align-items: center;
        height: auto;
    `,
    LeftColDiv: styled.div`
        display: flex;
        width: ${(props) => props.percent}%;
        min-height: 50px;
        justify-content: center;
        border-bottom: 1px solid black;
        border-right: 1px solid black;
        align-items: center;
        flex-direction: column;
    `,
    RightColDiv: styled.div`
        flex-direction: column;
        display: flex;
        width: ${(props) => props.percent}%;
        min-height: 30px;
        justify-content: center;
        border-bottom: 1px solid black;
        align-items: center;
        height: auto;
    `,
    TextArea: styled.textarea`
        min-height: 100%;
        height: ${(props) => props.plusHeight}rem;
        width: 99%;
        padding: 0;
        border: none;
        overflow-y: hidden; /* 스크롤바 감춤 */
        outline: none; /* 클릭 포커스 제거 */
    `,
    
};

export const Grid = Object.assign(GridMain, {
    LeftDiv,
    RightDiv,
    LeftColDiv,
    RightColDiv,
    TextAreas,
})