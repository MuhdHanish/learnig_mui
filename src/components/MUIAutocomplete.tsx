import { Autocomplete, Stack, TextField } from "@mui/material";
import { SyntheticEvent, useState } from "react";

type Skill = {
    id: number;
    label: string;
}

const skills = ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "PYTHON"];
const skillsOption = skills.map((skill, index) =>({ id: index + 1 , label: skill }));

const MUIAutocomplete = () => {
  const [values, setValues] = useState<string[]>([]);
    const [skill, setSkill] = useState<Skill | null>(null);
  const handleChange = (
    _event: SyntheticEvent<Element, Event>,
    value: string[] | null
  ) => {
    setValues(value as string[]);
  };
    const handleSkillObjectChange = (
    _event: SyntheticEvent<Element, Event>,
    value: Skill | null
  ) => {
    setSkill(value);
  };
  console.log({values});
  return (
    <Stack spacing={2} width={"250px"}>
      <Autocomplete
        options={skills}
        multiple
        value={values}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} label="skills" />}
        freeSolo
      />
      <Autocomplete
        options={skillsOption}
        value={skill}
        onChange={handleSkillObjectChange}
        renderInput={(params) => <TextField {...params} label="skills" />}
      />
    </Stack>
  );
};

export default MUIAutocomplete;
