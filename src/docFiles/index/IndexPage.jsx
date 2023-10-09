import React from 'react'
import { IndexDiv, IndexSubContents, IndexSubContentsDiv, IndexSubDiv, IndexSubTitle, IndexTitle } from './indexStyle'
import { IndexData } from '../../data/DocData'

function IndexPage() {
    return (
        <IndexDiv>
            <IndexTitle>목 차</IndexTitle>
            <IndexSubDiv>
                {IndexData.map((e, index) => {
                    return (
                        <>
                            <IndexSubTitle>{index + 1 + '. '}{e.name}</IndexSubTitle>
                            <IndexSubContentsDiv>
                                {e.contents.map((e, index) => {
                                    return (
                                        <IndexSubContents>{index + 1}{'. '}{e}</IndexSubContents>
                                    )
                                })}
                            </IndexSubContentsDiv>
                        </>
                    )
                })}
            </IndexSubDiv>
        </IndexDiv>
    )
}

export default IndexPage