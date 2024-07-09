import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import JoinUs from "./Routes/JoinUs";
import MemberLogin from "./Routes/MemberLogin";
import OrgLogin from "./Routes/OrgLogin";

const App = () => {
  return (
    <>
    <div className="z-0">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Login" Component={JoinUs}/ >
            
        
        <Route path="/FootPrints" />
        <Route path="/Resources" />
        <Route path="/Events" />
        <Route path="/ContextUs" />
        <Route path="/MemberLogin" Component={MemberLogin}/>
        <Route path="/OrgLogin" Component={OrgLogin}/>
      </Routes>
      </div>
    </>
  );
};

export default App;
