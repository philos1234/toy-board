import React from "react"
import Snb from "../snb/Snb"

interface Props {
    disableSideBar?: boolean
    children?: React.ReactNode | Array<React.ReactNode>
}

const PageTemplate = ({ disableSideBar = false, children }: Props) => {
    return (
        <>
            {
                disableSideBar ? <></> : <Snb />
            }
            <section className={"content"}>
                {children}
            </section>
        </>
    )
}

export default PageTemplate
