import React from "react"
import Snb from "../snb/Snb"

interface Props {
    disableSideBar?: boolean
    children?: JSX.Element | Array<JSX.Element>
}
const PageTemplate = ({ disableSideBar = false, children }: Props) => {
  return (
    <div style={{ display: 'flex' }}>
      {
        disableSideBar ? null : <Snb style={{flex : '0 0 auto '}}></Snb>
      }
      <section className={"pageTemplate"} style={{ flex: '1 1 auto' }}>
        {children}
      </section>
    </div>
  )
}


export default PageTemplate
