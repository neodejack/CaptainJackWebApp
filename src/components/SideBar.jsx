import AOlogo from "../assets/AOlogo.png";

function SideBar() {
  return (
    <div class="sticky top-16 left-0 h-screen w-16 m-0 flex flex-col bg-blueAO text-black shadow-2xl">
      <SideBarIcon />
    </div>
  );
}

function SideBarIcon() {
  return (
    <div
      class="relative flex items-center justify-center
    h-12 w-12 mt-2 mb-2 mx-auto bg-white
    rounded-xl cursor-pointer shadow-lg ;"
    >
      <img src={AOlogo} />
    </div>
  );
}

export default SideBar;
