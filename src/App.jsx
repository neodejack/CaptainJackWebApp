import Nav from "./components/nav";
import { Route, Routes } from "solid-app-router";
import HomePage from "./pages/homePage";
import MemberPage from "./pages/memberPage";
import { createEffect, createSignal } from "solid-js";

const tele = window.Telegram.WebApp;
tele.ready();

const [member, setMember] = createSignal("");
setMember("zili");
function App() {
  return (
    <div class="container">
      Captain Jack at your service
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/member" element={<MemberPage member={member()} />} />
      </Routes>
    </div>
  );
}

export default App;
