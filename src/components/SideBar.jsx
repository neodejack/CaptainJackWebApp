import AOlogo from "../assets/AOlogo.png";
import FOlogo from "../assets/FOlogo.png";
import Wlogo from "../assets/Wlogo.png";
import UOlogo from "../assets/UOlogo.png";
import { theme, setTheme } from "../App";

const changeTheme = (themeName) => {
  setTheme(themeName.themeName);
};
function SideBar() {
  return (
    <div class="sticky top-0 left-0 h-full w-20 m-0 rounded-lg flex flex-col justify-around bg-primary text-black shadow-lg shadow-gray-300">
      <SideBarIcon grandSlam={AOlogo} themeName="australianOpen" />
      <SideBarIcon grandSlam={FOlogo} themeName="frenchOpen" />
      <SideBarIcon grandSlam={Wlogo} themeName="wimbledon" />
      <SideBarIcon grandSlam={UOlogo} themeName="usOpen" />
    </div>
  );
}

function SideBarIcon({ grandSlam, themeName }) {
  return (
    <div class="m-1">
      <button
        type="button"
        class="sidebar-button"
        onClick={() => changeTheme({ themeName })}
      >
        <img src={grandSlam} alt="grand slam logo" />
      </button>
    </div>
  );
}

export default SideBar;
