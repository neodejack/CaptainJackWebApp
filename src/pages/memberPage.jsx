import CollapseButton from "../components/collapseButton";
import { createEffect, createSignal, Show } from "solid-js";
import CourtAllocationButton from "../components/courtAllocationButton";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://ec2-13-250-127-69.ap-southeast-1.compute.amazonaws.com:8080");
const authData = await pb.admins.authWithPassword(
  "neodejack@gmail.com",
  "ntutcntutc"
);

const MemberPage = ({ teleHandle }) => {
  const [member, setMember] = createSignal("");
  createEffect(async () => {
    try {
      const filter = `telegram_handle="${teleHandle}" && paid=true`;
      const record = await pb
        .collection("member_22_23")
        .getFirstListItem(filter);
      console.log(record);
      setMember(await record["name"]);
    } catch (ClientResponseError) {
      console.log("error caught");
    }
  });

  return (
    <Show
      when={member() !== ""}
      fallback={
        <div class="container text-center">
          <h2>You are not a member</h2>
          <h3>Please contact tennis club exco if this is an error</h3>
        </div>
      }
      keyed
    >
      <div class="container text-center">
        <h3>Hey {member()}, how can i help</h3>
        <CourtAllocationButton />
      </div>
    </Show>
  );
};

export default MemberPage;
