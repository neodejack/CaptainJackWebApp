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
    <div
      class="relative flex items-center justify-center
    h-12 w-12 mt-2 mb-2 mx-auto bg-white
    rounded-xl cursor-pointer shadow-lg ;"
    >
      <img src={grandSlam} />
    </div>
  );
}

export default SideBar;
