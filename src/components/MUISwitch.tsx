import React, { useState } from "react";
import { Box, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Switch } from "@mui/material";

const MUISwitch = () => {
    const [checked, setChecked] = useState<boolean>(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);  
    };
  const [skills, setSkills] = useState<string[]>([]);
    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value);
        if (index === -1) {
            setSkills([...skills, event.target.value]);
        } else {
            setSkills(skills.filter(skill => skill !== event.target.value));
        }
    }
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="Dark Mode"
          control={<Switch checked={checked} onChange={handleChange} size="small" color="success" />}
        />
      </Box>
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Switch
                  value={"html"}
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Switch
                  value={"css"}
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="JAVASCRIPT"
              control={
                <Switch
                  value={"javascript"}
                  checked={skills.includes("javascript")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
          <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
}

export default MUISwitch