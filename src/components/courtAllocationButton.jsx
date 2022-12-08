import CollapseButton from "./collapseButton";
import { createSignal } from "solid-js";

const [allocation, setAllocation] = createSignal("no allocation data for now");
setAllocation(<div>you are assigned to court 5</div>);
const CourtAllocationButton = () => {
  return (
    <div>
      <CollapseButton title="Check Court Allocation" body={allocation()} />
    </div>
  );
};

export default CourtAllocationButton;
