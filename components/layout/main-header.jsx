import Link from "next/link";
import DropDownClothes from "../dropdown/clothes";
import DropDownHouse from "../dropdown/houseThings";

import classes from "./main-header.module.css";

function MainHeader(props) {
  const { navigation } = props;
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Home</Link>
      </div>
      <nav className={classes.navigation}>
        <DropDownClothes items={navigation} />
      </nav>
    </header>
  );
}

export default MainHeader;
