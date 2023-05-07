import { Icon } from "../icon/Icon";
import { Nav, NavLink, Dropdown, DropdownLink } from "./Nav.styled";

const links = [
  { label: "About us", url: "/about" },
  { label: "Article", url: "/article" },
  { label: "Property", url: "/property" },
];

const properties = [
  { label: "House", url: "#" },
  { label: "Villa", url: "#" },
  { label: "Apartment", url: "#" },
];

export const Navigation = () => {
  return (
    <Nav>
      {links.map(({ label, url }) => (
        <NavLink key={label} href={url}>
          {label}
          {label === "Property" && (
            <>
              <Icon name={"icon-arrow-down-min"} width="15px" height="15px" />
              <Dropdown>
                {properties.map(({ label, url }) => (
                  <DropdownLink key={label} href={url}>
                    {label}
                  </DropdownLink>
                ))}
              </Dropdown>
            </>
          )}
        </NavLink>
      ))}
    </Nav>
  );
};
