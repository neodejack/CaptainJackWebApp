import CollapseButton from "../components/collapseButton";
import { Show } from "solid-js";
import CourtAllocationButton from "../components/courtAllocationButton";

const MemberPage = ({ member }) => {
  return (
    <Show
      when={member !== ""}
      fallback={
        <div class="container text-center">
          <h2>You are not a member</h2>
          <h3>Please contact tennis club exco if this is an error</h3>
        </div>
      }
      keyed
    >
      <div class="container text-center">
        <h2>Hi {member}</h2>
        <h3>What would you like to do</h3>
        <CourtAllocationButton />
      </div>
    </Show>
  );
};

export default MemberPage;
