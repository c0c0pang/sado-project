import React, { useState } from "react";
import { IndexDiv } from "../index/indexStyle";
import { Grid } from "./Grid";
import styled from "styled-components";

function FirstPage(){
    
    return(
        <S.A4>
            <S.Container>
                <Grid>
                    <div style={{display: "flex"}}>
                        <Grid.LeftDiv>
                            회사명
                        </Grid.LeftDiv>
                        <Grid.RightDiv>
                            <Grid.TextAreas/>
                        </Grid.RightDiv>
                    </div>
                    
                    <div style={{display: "flex"}}>
                        <Grid.LeftDiv>
                            설 립 년 월 일
                        </Grid.LeftDiv>
                        <Grid.RightDiv>
                            <Grid.TextAreas/>
                        </Grid.RightDiv>
                    </div>
                    
                    <div style={{display: "flex"}}>
                        <Grid.LeftDiv>
                            사업자등록번호
                        </Grid.LeftDiv>
                        <Grid.RightDiv>
                            <Grid.TextAreas/>
                        </Grid.RightDiv>
                    </div>
                    <div style={{display: "flex"}}>
                        <Grid.LeftDiv>
                            대표자
                        </Grid.LeftDiv>
                        <Grid.RightDiv>
                            <Grid.TextAreas/>
                        </Grid.RightDiv>
                    </div>
                    <div style={{display: "flex"}}>
                        <Grid.LeftDiv>
                            <Grid.Left1Right2>
                                <div>소재지</div>
                                <div>본사</div>
                                <div style={{fontSize: "8px"}}>공장(농장)</div>
                            </Grid.Left1Right2>
                        </Grid.LeftDiv>
                        <Grid.RightDiv>
                            <Grid.TextAreas/>
                            <Grid.TextAreas/>
                        </Grid.RightDiv>
                    </div>
                    
                    <div style={{display: "flex"}}>
                        <Grid.LeftDiv>
                            대표자
                        </Grid.LeftDiv>
                        <Grid.RightDiv>
                            <Grid.TextAreas/>
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
    
    Container: styled.div`
        margin: 50px;
        height: 80%;
        border: 2px solid black;
    `
}


export default FirstPage;