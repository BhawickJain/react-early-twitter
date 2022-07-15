interface NavItemProps {
  label: string;
  index?: number;
  navItemsCount?: number;
}

function NavItem({label, index, navItemsCount}: NavItemProps): JSX.Element {
  if (index === navItemsCount) {
    <>
      <a href="#">{label}</a>
    </>

  }

  return (
    <>
      <a href="#">{label}</a>
      <span> | </span>
    </>
  );
}

export default NavItem;