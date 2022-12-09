import Nav from "./components/nav";
import { Route, Routes } from "solid-app-router";
import HomePage from "./pages/homePage";
import MemberPage from "./pages/memberPage.jsx";
import { createEffect, createSignal } from "solid-js";
import PocketBase from "pocketbase";

const tele = window.Telegram.WebApp;
tele.ready();
const webAppData = tele.initDataUnsafe;

const [teleHandle, setTeleHandle] = createSignal("");
try {
  setTeleHandle(webAppData.user.username);
} catch (TypeError) {
  setTeleHandle("neodejack");
}

function App() {
  return (
    <div class="container text-center">
      <h1>
        🎾 Captain <span class="badge text-bg-success">Jack</span>
      </h1>
      <Routes>
        <Route path="/" element={<MemberPage teleHandle={teleHandle()} />} />
      </Routes>
    </div>
  );
}

export default App;
