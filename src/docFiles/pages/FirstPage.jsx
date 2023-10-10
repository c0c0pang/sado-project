import React, { useState } from "react";
import { IndexDiv } from "../index/indexStyle";
import { Grid } from "./Grid";
import styled from "styled-components";

function FirstPage(){
    
    return(
        <S.A4>
            <S.Container>
                <Grid>
                    <div style={{display:"flex"}}>
                        <Grid.LeftDiv percent={20}>
                            <S.Wrapper>
                                성 명
                            </S.Wrapper>
                        </Grid.LeftDiv>
                        <Grid.RightDiv percent={80}>
                            <Grid.TextAreas/>
                        </Grid.RightDiv>
                    </div>
                    
                    <div style={{display:"flex"}}>
                        <Grid.LeftDiv percent={20}>
                            <S.Wrapper>
                                주민등록번호
                            </S.Wrapper>
                        </Grid.LeftDiv>
                        <Grid.RightDiv percent={80}>
                            <Grid.TextAreas/>
                        </Grid.RightDiv>
                    </div>

                    <div style={{display:"flex"}}>
                        <Grid.LeftDiv percent={20}>
                            <S.Wrapper>
                                본 적
                            </S.Wrapper>
                        </Grid.LeftDiv>
                        <Grid.RightDiv percent={80}>
                            <Grid.TextAreas/>
                        </Grid.RightDiv>
                    </div>
                    
                    <div style={{display:"flex"}}>
                        <Grid.LeftDiv percent={20}>
                            <S.Wrapper>
                                현 주 소
                            </S.Wrapper>
                        </Grid.LeftDiv>
                        <Grid.RightDiv percent={80}>
                            <Grid.TextAreas/>
                        </Grid.RightDiv>
                    </div>

                    
                    <div style={{display:"flex"}}>
                        <Grid.LeftDiv percent={20}>
                            <Grid.LeftDiv percent={100}>
                                <S.Wrapper>
                                    학<br/><br/><br/>력
                                </S.Wrapper>
                            </Grid.LeftDiv>
                            
                            <Grid.RightColDiv percent={100}>
                                <S.Wrapper>
                                    기 간
                                </S.Wrapper>
                                <S.Wrapper>
                                    <Grid.TextAreas/>
                                </S.Wrapper>
                                <S.Wrapper>    
                                    <Grid.TextAreas/>
                                </S.Wrapper>
                                <S.Wrapper>
                                    <Grid.TextAreas/>
                                </S.Wrapper>
                            </Grid.RightColDiv>
                        </Grid.LeftDiv>
                        <Grid.RightDiv percent={80}>
                            <Grid.RightColDiv percent={100}>
                                <S.Wrapper>
                                    학교명
                                </S.Wrapper>
                                <S.Wrapper>    
                                    <Grid.TextAreas/>
                                </S.Wrapper>
                                <S.Wrapper>    
                                    <Grid.TextAreas/>
                                </S.Wrapper>
                                <S.Wrapper>    
                                    <Grid.TextAreas/>
                                </S.Wrapper>
                            </Grid.RightColDiv>
                            
                            <Grid.RightColDiv percent={100}>
                                <S.Wrapper>
                                    전공분야
                                </S.Wrapper>
                                <S.Wrapper>    
                                    <Grid.TextAreas/>
                                </S.Wrapper>
                                <S.Wrapper>    
                                    <Grid.TextAreas/>
                                </S.Wrapper>
                                <S.Wrapper>    
                                    <Grid.TextAreas/>
                                </S.Wrapper>
                            </Grid.RightColDiv>
                            
                            <Grid.RightColDiv percent={100}>
                                <S.Wrapper>
                                    수학상태
                                </S.Wrapper>
                                <S.Wrapper>    
                                    <Grid.TextAreas/>
                                </S.Wrapper>
                                <S.Wrapper>    
                                    <Grid.TextAreas/>
                                </S.Wrapper>
                                <S.Wrapper>    
                                    <Grid.TextAreas/>
                                </S.Wrapper>
                            </Grid.RightColDiv>
                        </Grid.RightDiv>
                    </div>
                    
                    <div style={{display:"flex"}}>
                        <Grid.LeftDiv percent={20}>
                            <Grid.LeftDiv percent={100}>
                                <S.Wrapper>
                                    경<br/><br/><br/>력
                                </S.Wrapper>
                            </Grid.LeftDiv>
                            
                            <Grid.RightColDiv percent={100}>
                                <S.Wrapper>
                                    기 간
                                </S.Wrapper>
                                <S.Wrapper>
                                    <Grid.TextAreas/>
                                </S.Wrapper>
                                <S.Wrapper>    
                                    <Grid.TextAreas/>
                                </S.Wrapper>
                                <S.Wrapper>
                                    <Grid.TextAreas/>
                                </S.Wrapper>
                            </Grid.RightColDiv>
                        </Grid.LeftDiv>
                        <Grid.RightDiv percent={80}>
                            <Grid.RightColDiv percent={100}>
                                <S.Wrapper>
                                    기 업 체 명
                                </S.Wrapper>
                                <S.Wrapper>    
                                    <Grid.TextAreas/>
                                </S.Wrapper>
                                <S.Wrapper>    
                                    <Grid.TextAreas/>
                                </S.Wrapper>
                                <S.Wrapper>    
                                    <Grid.TextAreas/>
                                </S.Wrapper>
                            </Grid.RightColDiv>
                            
                            <Grid.RightColDiv percent={100}>
                                <S.Wrapper>
                                    주 생 산 품 목
                                </S.Wrapper>
                                <S.Wrapper>    
                                    <Grid.TextAreas/>
                                </S.Wrapper>
                                <S.Wrapper>    
                                    <Grid.TextAreas/>
                                </S.Wrapper>
                                <S.Wrapper>    
                                    <Grid.TextAreas/>
                                </S.Wrapper>
                            </Grid.RightColDiv>
                            
                            <Grid.RightColDiv percent={100}>
                                <S.Wrapper>
                                    최종직위
                                </S.Wrapper>
                                <S.Wrapper>    
                                    <Grid.TextAreas/>
                                </S.Wrapper>
                                <S.Wrapper>    
                                    <Grid.TextAreas/>
                                </S.Wrapper>
                                <S.Wrapper>    
                                    <Grid.TextAreas/>
                                </S.Wrapper>
                            </Grid.RightColDiv>
                        </Grid.RightDiv>
                    </div>
                </Grid>
            </S.Container>
        </S.A4>
    )
}

const S = {    
    A4: styled.div`
    padding: 20px;
    background-color: white;
    height: 297mm;
    width: 210mm;
    @page{
        size: 210mm 297mm; /* A4 용지 크기 */
        margin: 0;
    }
    `,
    Wrapper: styled.div`
        display: flex;  
        min-height: 40px;
        width: 100%;
        height: 100%;
        align-items: center;
    `,
    LargeWrapper: styled.div`
        display: flex;  
        min-height: 80px;
        width: 100%;
        height: 100%;
        align-items: center;
    `,
    Container: styled.div`
        margin: 50px;
        height: 80%;
        border: 2px solid black;
    `
}


export default FirstPage;