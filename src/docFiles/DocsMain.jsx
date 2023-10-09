import React from 'react'
import { DocsMainDiv } from './docsMainStyle'
import CoverPage from './cover/Cover'
import IndexPage from './index/IndexPage'

function DocsMain() {
    return (
        <DocsMainDiv>
            <CoverPage></CoverPage>
            <IndexPage></IndexPage>
        </DocsMainDiv>
    )
}

export default DocsMain