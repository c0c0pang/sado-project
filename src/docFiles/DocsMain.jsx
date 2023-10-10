import React from 'react'
import { DocsMainDiv } from './docsMainStyle'
import CoverPage from './cover/Cover'
import IndexPage from './index/IndexPage'
import FirstPage from './pages/FirstPage'

function DocsMain() {
    return (
        <DocsMainDiv>
            <CoverPage></CoverPage>
            <IndexPage></IndexPage>
            <FirstPage></FirstPage>
        </DocsMainDiv>
    )
}

export default DocsMain