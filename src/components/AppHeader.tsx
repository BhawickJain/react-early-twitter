import CreateNavItem, { NavBarOption } from "./CreateNavItem"

const navItems: NavBarOption[] = ["updates", "archive", "preferences", "help", "sign-out"]


function AppHeader(): JSX.Element {
  return (
    <header>
      <h2>twitter</h2>
      <nav>
        {navItems.map((navItem, index, navItems) => CreateNavItem(navItem, index, navItems))}
      </nav>
    </header>
  );
}

export default AppHeader;
