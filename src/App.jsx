import "./resources/css/body.css"

import { Fragment } from "react";

import {Header} from "./resources/partials/header"
import {Main} from "./resources/partials/main"
import {Footer} from "./resources/partials/footer"

function App() {
  return (
    <Fragment>
      <Header/>
      <Main/>
      <Footer/>
    </Fragment>
    
  );
}

export default App;
