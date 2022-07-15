import NavItem from "./NavItem";
export type NavBarOption = "updates" | "archive" | "preferences" | "help" | "sign-out"

/**
 * 
 * @param navItem {NavBarOption} - nav bar option among NavBarOption[]
 * @param index {number} - nav bar option index among NavBarOption[]
 * @param navItems 
 * @returns - Populate NavItem with Pipe (|) in between
 */
function CreateNavItem(navItem: NavBarOption, index: number, navItems: NavBarOption[]): JSX.Element {
  return <NavItem key={index} label={navItem} index={index} navItemsCount={navItems.length}/>
}

export default CreateNavItem;
