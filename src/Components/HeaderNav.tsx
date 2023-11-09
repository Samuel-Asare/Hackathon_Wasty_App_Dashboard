import "../css/HeaderNav.css";

import { Link } from "react-router-dom";
import { ModeToggle } from "./Toggle/ModeToggleBtn";
import { DropdownMenuComponent } from "./ShadcnUI/DropdownMenu";

// import { DataContext } from "../Context/ FirestoreDataContext";

const HeaderNav = () => {
  return (
    <>
      <div className="header_wrapper">
        <Link to="/">
          <h3>Wasty.</h3>
        </Link>
        <div className="left-side">
          <DropdownMenuComponent />
          <ModeToggle />
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
