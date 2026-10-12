import ReactDOM from "react-dom/client";
import "./styles/reset.css"
import "./styles/global.css"
import { HashRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </HashRouter>
);
