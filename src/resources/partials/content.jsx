import { Fragment, useState } from "react"

import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Grid } from "../components/grid"
import { Updates } from "../components/updates"

export const Content = ()=>{

  return (
    <Fragment>
      <Header/>
      <Updates/>
      
    </Fragment>
  )
  // <Footer/>
}