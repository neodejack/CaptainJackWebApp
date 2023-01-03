import AOlogo from "../assets/AOlogo.png";
import FOlogo from "../assets/FOlogo.png";
import Wlogo from "../assets/Wlogo.png";
import UOlogo from "../assets/UOlogo.png";

function SideBar() {
  return (
    <div class="sticky top-0 left-0 h-full w-20 m-0 rounded-lg flex flex-col justify-around bg-primary text-black shadow-lg shadow-gray-300">
      <SideBarIcon grandSlam={AOlogo} />
      <SideBarIcon grandSlam={FOlogo} />
      <SideBarIcon grandSlam={Wlogo} />
      <SideBarIcon grandSlam={UOlogo} />
    </div>
  );
}

function SideBarIcon({ grandSlam }) {
  return (
    <div class="m-1">
      <button type="button" class="sidebar-button" onClick="">
        <img src={grandSlam} alt="grand slam logo" />
      </button>
    </div>
  );
}

export default SideBar;
