import AOlogo from "../assets/AOlogo.png";
import FOlogo from "../assets/FOlogo.png";
import Wlogo from "../assets/Wlogo.png";
import UOlogo from "../assets/UOlogo.png";

function SideBar() {
  return (
    <div class="sticky top-0 left-0 h-full w-20 m-0 flex flex-col justify-around bg-blueAO text-black shadow-2xl">
      <SideBarIcon grandSlam={AOlogo} />
      <SideBarIcon grandSlam={FOlogo} />
      <SideBarIcon grandSlam={Wlogo} />
      <SideBarIcon grandSlam={UOlogo} />
    </div>
  );
}

function SideBarIcon({ grandSlam }) {
  return (
    <div class="sidebar-icon">
      <div class="m-1">
        <img src={grandSlam} alt="grand slam logo" />
      </div>
    </div>
  );
}

export default SideBar;
