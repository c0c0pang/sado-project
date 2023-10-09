import { styled } from "styled-components";
import { CafeText } from "../globalStyle";

export const DocModalDialog = styled.dialog`
    display: flex;
    flex-direction: column;
    gap: 50px;
    border-radius: 5px;
    border: none;
    box-shadow: 0 12px 10px rgba(0,0,0,0.1);
    padding: 40px;
    :before, :after {
        z-index: -1;
        position: absolute;
        content: "";
        bottom: 15px;
        left: 10px;
        width: 50%;
        top: 80%;
        max-width:300px;
        background: rgba(0,0,0,0.24);
        -webkit-box-shadow: 0 15px 10px rgba(0,0,0,0.24);
        -moz-box-shadow: 0 15px 10px rgba(0,0,0,0.24);
        box-shadow: 0 12px 10px rgba(0,0,0,0.1);
        -webkit-transform: rotate(-3deg);
        -moz-transform: rotate(-3deg);
        -o-transform: rotate(-3deg);
        -ms-transform: rotate(-3deg);
        transform: rotate(-3deg);
    }
    :after
    {
        -webkit-transform: rotate(3deg);
        -moz-transform: rotate(3deg);
        -o-transform: rotate(3deg);
        -ms-transform: rotate(3deg);
        transform: rotate(3deg);
        right: 10px;
        left: auto;
    }
`
export const DocModalDialogTitle = styled(CafeText)`
    display: flex;
    justify-content: center;
    font-size: 20px;
`
export const DocModalDialogSelectDiv = styled.div`
    display: flex;
    gap: 80px;
    :hover{
        color: white;
    }
    .Link{
        text-decoration: none;
        color: black;
    }
`
export const DocModalDialogSelectText = styled(CafeText)`
    font-size: 18px;
    padding: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    cursor: pointer;
    background-color: ${(props) => props.color};
    border-radius: 3px;
    transition: all 0.3s;
`
export const DocModalCloseDiv = styled(CafeText)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    :hover{
        color: black;
        background-color: #C1C1C1;
    }
`
export const DocModalClose = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 20%;
    background-color: gray;
    border-radius: 3px;
    color: white;
    cursor: pointer;
    transition: all .3s;
`