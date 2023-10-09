import React from 'react'
import { CoverCompany, CoverDate, CoverDiv, CoverTitle } from './coverStyle'

function CoverPage() {
    return (
        <CoverDiv>
            <CoverTitle>사업계획서</CoverTitle>
            <CoverDate>2022년 00월</CoverDate>
            <CoverCompany>회사명: choi</CoverCompany>
        </CoverDiv>
    )
}

export default CoverPage