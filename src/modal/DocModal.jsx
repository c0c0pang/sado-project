import React from 'react'
import { DocModalDialogTitle, DocModalDialog, DocModalDialogSelectDiv, DocModalDialogSelectText, DocModalClose, DocModalCloseDiv } from './docModalStyle'
import { selectList } from '../data/DocData'
import { useSetRecoilState } from 'recoil'
import { docHandler } from '../atom/dialogAtom'
function DocModal() {
    const setDocButtonState = useSetRecoilState(docHandler)
    return (
        <DocModalDialog>
            <DocModalDialogTitle>사업계획서 유형 선택</DocModalDialogTitle>
            <DocModalDialogSelectDiv>
                {selectList.map((e, index) => {
                    return (
                        <DocModalDialogSelectText key={index} color={e.color} className={'list-' + index}>{e.name}</DocModalDialogSelectText>
                    )
                })}
            </DocModalDialogSelectDiv>
            <DocModalCloseDiv>
                <DocModalClose onClick={() => setDocButtonState(false)}>닫기</DocModalClose>
            </DocModalCloseDiv>
        </DocModalDialog >
    )
}

export default DocModal