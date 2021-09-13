import { Fragment, useState } from "react"

import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Grid } from "../components/grid"

export const Content = ()=>{

  return (
    <Fragment>
      <Header/>
      <Grid/>
      
    </Fragment>
  )
  // <Footer/>
}