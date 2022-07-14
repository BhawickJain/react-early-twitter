import NavItem from "./NavItem";
import addSeparators from "../utils/addSeparators"

type NavOptions = "updates" | "archive" | "preferences" | "help" | "sign-out"

function AppHeader(): JSX.Element {
  const navBar: NavOptions[] = ["updates", "archive", "preferences", "help", "sign-out"]
  const navItems: JSX.Element[] = navBar.map(opt => <NavItem key={opt} label={opt}/>)
  const navItemsSpaced: JSX.Element[] = addSeparators(navItems)
  return (
    <header>
      <h2>twitter</h2>
      <nav>
         {navItemsSpaced}
      </nav>
    </header>
  );
}

export default AppHeader;
