import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import React, { useState } from "react";

export const MUIBottomNavigation = () => {
  const [value, setValue] = useState(0);
  const handleChange = (
    _event: React.SyntheticEvent<Element, Event>,
    value: number
  ) => {
    setValue(value);
  };
  return (
    <BottomNavigation
      sx={{ width: "100%", position: "absolute", bottom: 0 }}
      value={value}
      onChange={handleChange}
      showLabels
    >
      <BottomNavigationAction icon={<HomeIcon />} label={"Home"} />
      <BottomNavigationAction icon={<FavoriteIcon />} label={"Favorites"} />
      <BottomNavigationAction icon={<PersonIcon />} label={"Profile"} />
    </BottomNavigation>
  );
};
