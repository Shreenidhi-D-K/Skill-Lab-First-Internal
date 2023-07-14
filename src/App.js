import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Service from "./components/Service";
import Error from "./components/Error";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

const App = ()=> {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Header/>}>
          <Route index element = {<Home/>}/>
          <Route path = "Service" element = {<Service/>}/>
          <Route path = "About" element = {<About/>}/>
          <Route path = "*" element = {<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
