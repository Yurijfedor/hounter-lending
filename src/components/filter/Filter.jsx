// import { useState } from "react";
import { Icon } from "../icon/Icon";
import { FilterButton } from "../buttons/FilterButton";

import { FilterWrapp } from "./Filter.styled";

export const Filter = ({ handleFilterClick }) => {
  return (
    <FilterWrapp>
      <FilterButton
        text="House"
        icon={
          <Icon name="icon-house-min" fill="inherit" width={18} height={18} />
        }
        onClick={handleFilterClick}
      />
      <FilterButton
        text="Villa"
        icon={
          <Icon name="icon-villa-min" fill="inherit" width={18} height={18} />
        }
        onClick={handleFilterClick}
      />
      <FilterButton
        text="Apartment"
        icon={
          <Icon
            name="icon-apartment-min"
            fill="inherit"
            width={18}
            height={18}
          />
        }
        onClick={handleFilterClick}
      />
    </FilterWrapp>
  );
};
