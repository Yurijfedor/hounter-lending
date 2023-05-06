import { Icon } from "../icon/Icon";
import { Nav, NavLink, Dropdown, DropdownLink } from "./Nav.styled";

const links = [
  { label: "About us", url: "/about" },
  { label: "Article", url: "/article" },
  { label: "Property", url: "/property" },
];

const properties = [
  { label: "House", url: "/house" },
  { label: "Villa", url: "/villa" },
  { label: "Apartment", url: "/apartment" },
];

export const Navigation = () => {
  return (
    <Nav>
      {links.map(({ label, url }) => (
        <NavLink key={url} href={url}>
          {label}
          {label === "Property" && (
            <>
              <Icon name={"icon-arrow-down-min"} width="15px" height="15px" />
              <Dropdown>
                {properties.map(({ label, url }) => (
                  <DropdownLink key={url} href={url}>
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
