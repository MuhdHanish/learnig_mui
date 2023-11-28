import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useEffect, useState } from "react";

export const MUIRadioButton = () => {
    const [value, setValue] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    useEffect(() => { console.log(value); }, [value]);
  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-experience-group-lable">
          Year of experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-aria-labelledby="job-experience-group-lable"
          row
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel control={<Radio size="small" color="secondary" />} label="0-2" value={"0-2"} />
          <FormControlLabel control={<Radio size="small" color="secondary" />} label="3-5" value={"3-5"} />
          <FormControlLabel control={<Radio size="small" color="secondary" />} label="6-10" value={"6-10"} />
        </RadioGroup>
        <FormHelperText>Invalid Selection</FormHelperText>
      </FormControl>
    </Box>
  );
}
