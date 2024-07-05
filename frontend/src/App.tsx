import { Route, Routes } from "react-router-dom"
import AboutUs from "./Routes/Home"



const App = () => {
  return (
    <>
      <Routes>
        
        <Route path='/' Component={AboutUs} />
        <Route path="/Login" />
        <Route path="/FootPrints"/>
        <Route path="/Resources"/>
        <Route path="/Events"/>
        <Route path="/ContextUs"/>
        
      </Routes>
    </>
  )
}

export default App
