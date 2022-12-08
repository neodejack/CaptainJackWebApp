import Nav from "./components/nav";
import { Route, Routes } from "solid-app-router";
import HomePage from "./pages/homePage";
import MemberPage from "./pages/memberPage.jsx";
import { createEffect, createSignal } from "solid-js";

const tele = window.Telegram.WebApp;
tele.ready();

const [member, setMember] = createSignal("");
setMember("zili");
function App() {
  return (
    <div class="container text-center">
      <h1>Captain <span class="badge text-bg-success">Jack</span></h1>
      {/*<Nav />*/}
      <Routes>
        <Route path="/" element={<MemberPage member={member()} />} />
      </Routes>
    </div>
  );
}

export default App;
