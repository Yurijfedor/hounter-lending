import { SearchWrapp } from "./Search.styled";
import { Icon } from "../icon/Icon";
import { Input } from "../input/Input";
import { Button } from "../buttons/SearchButton";

export const LocationInput = () => {
  const icon = (
    <Icon
      name="icon-arrow-right-min"
      stroke="#fff"
      fill="#fff"
      width="7"
      height="14"
    />
  );

  return (
    <SearchWrapp>
      <Icon name="icon-location-min" />
      <Input placeholder="Search for the location you want!" />
      <Button
        text="Search"
        icon={icon}
        // fill="#10B981"
        // color="#FFFFFF"
        // hoverFill="#0E956D"
      />
    </SearchWrapp>
  );
};
