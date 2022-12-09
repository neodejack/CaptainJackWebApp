import Nav from "./components/nav";
import { Route, Routes } from "solid-app-router";
import HomePage from "./pages/homePage";
import MemberPage from "./pages/memberPage.jsx";
import { createEffect, createSignal } from "solid-js";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");
const tele = window.Telegram.WebApp;
tele.ready();
const webAppData = tele.initDataUnsafe;

const [teleHandle, setTeleHandle] = createSignal("");
const [member, setMember] = createSignal("");
setTeleHandle(webAppData.user.username);
createEffect(async () => {
  const record = await pb
    .collection("member_22_23")
    .getFirstListItem(`telegram_handle=${teleHandle()} && paid=true`);
  setMember(await record.json());
});

function App() {
  return (
    <div class="container text-center">
      <h1>
        🎾 Captain <span class="badge text-bg-success">Jack</span>
      </h1>
      {/*<Nav />*/}
      <h3>Init Data (unsafe): </h3>
      <pre id="initDataUnsafe">{member()}</pre>
      <Routes>
        <Route path="/" element={<MemberPage member={teleHandle()} />} />
      </Routes>
    </div>
  );
}

export default App;
