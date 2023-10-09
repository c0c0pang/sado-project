import { styled } from "styled-components";
import { A4, GmarketBText, GmarketLText, GmarketMText } from "../../globalStyle";

export const IndexDiv = styled(A4)`
    justify-content: space-evenly;
`

export const IndexTitle = styled(GmarketMText)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    margin-bottom: 60px;
`
export const IndexSubDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: start;
    margin-left: 40px;
    margin-bottom: 60px;
`
export const IndexSubTitle = styled(GmarketBText)`
    font-size: 20px;
`
export const IndexSubContentsDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`
export const IndexSubContents = styled(GmarketLText)`
    font-size: 18px;
    margin-left: 30px;
`