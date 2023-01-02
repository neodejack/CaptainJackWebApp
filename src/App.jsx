import Nav from "./components/nav";
import { Route, Routes } from "solid-app-router";
import HomePage from "./pages/homePage";
import MemberPage from "./pages/memberPage.jsx";
import { createEffect, createSignal } from "solid-js";
import PocketBase from "pocketbase";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

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
    <div class="flex flex-col bg-blueAO h-screen">
      <Header />
      <div class="flex flex-row h-full">
        <SideBar />
        <MemberPage teleHandle={teleHandle()} />
      </div>
    </div>
  );
}

export default App;
