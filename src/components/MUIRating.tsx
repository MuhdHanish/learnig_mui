import { Rating, Stack } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const MUIRating = () => {
  const [value, setValue] = useState<number | null>(2.5);
  const handleChange = (
    _event: SyntheticEvent<Element, Event>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  console.log({ value });
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.1}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        readOnly
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        highlightSelectedOnly
      />
    </Stack>
  );
};
