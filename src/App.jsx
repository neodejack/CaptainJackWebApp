import Nav from "./components/nav";
import { Route, Routes } from "solid-app-router";
import HomePage from "./pages/homePage";
import MemberPage from "./pages/memberPage.jsx";
import { createEffect, createSignal } from "solid-js";
import PocketBase from "pocketbase";
import Header from "./components/header";

const tele = window.Telegram.WebApp;
tele.ready();
const webAppData = tele.initDataUnsafe;

const [teleHandle, setTeleHandle] = createSignal("");
try {
  setTeleHandle(webAppData.user.username);
} catch (TypeError) {
  setTeleHandle("");
}

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MemberPage teleHandle={teleHandle()} />} />
      </Routes>
    </div>
  );
}

export default App;
