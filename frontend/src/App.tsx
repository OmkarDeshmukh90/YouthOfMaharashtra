import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import JoinUs from "./Routes/JoinUs";

const App = () => {
  return (
    <>
    <div className="h-[100vh]">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Login" Component={JoinUs} />
        <Route path="/FootPrints" />
        <Route path="/Resources" />
        <Route path="/Events" />
        <Route path="/ContextUs" />
      </Routes>
      </div>
    </>
  );
};

export default App;
