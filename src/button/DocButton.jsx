import React from 'react'
import { DocButtonBox, DocButtonDiv, DocButtonText } from './buttonStyle'
import { useRecoilState } from 'recoil'
import { docHandler } from '../atom/dialogAtom'
import DocModal from '../modal/DocModal'

function DocButton() {
    const [docButtonState, setDocButtonState] = useRecoilState(docHandler)
    const handler = () => {
        docButtonState ? (setDocButtonState(false)) : (setDocButtonState(true))
    }
    return (
        <>
            <DocButtonDiv>
                <DocButtonBox className='btn' onClick={() => handler()}>
                    <DocButtonText>사업 계획서 업로드</DocButtonText>
                </DocButtonBox>
            </DocButtonDiv>
            {docButtonState ? (<DocModal />) : (null)}
        </>
    )
}

export default DocButton