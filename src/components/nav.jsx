import { NavLink } from "solid-app-router";

const Nav = () => {
  return (
    <nav>
      <NavLink
        href="/"
        class="btn btn-primary me-2"
        end
        activeClass="btn-success"
      >
        Member Page
      </NavLink>
    </nav>
  );
};

export default Nav;
