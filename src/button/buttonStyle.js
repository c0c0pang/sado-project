import { styled } from "styled-components";
import { CafeText } from "../globalStyle";

export const DocButtonDiv = styled.div`
    display: flex;
    justify-content: end;
    .btn:hover{
        background-color: #406AFF;
    }
    padding-right: 50px;
`
export const DocButtonBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3258DF;
    width: 140px;
    height: 35px;
    border-radius: 3px;
    transition: all .5s;
    cursor: pointer;
`
export const DocButtonText = styled(CafeText)`
    color: white;
    font-size: 14px;
`