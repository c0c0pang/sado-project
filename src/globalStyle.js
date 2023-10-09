import { styled } from "styled-components";
export const CafeText = styled.div`
    font-family: 'Cafe24';
`
export const GmarketLText = styled.div`
    font-family: 'GmarketL';
`
export const GmarketMText = styled.div`
    font-family: 'GmarketM';
`
export const GmarketBText = styled.div`
    font-family: 'GmarketB';
`

export const A4 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    height: 297mm;
    width: 210mm;
    @page{
        size: 210mm 297mm; /* A4 용지 크기 */
        margin: 0;
    }
`