import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material";                   
import AddToDriveOutlinedIcon from "@mui/icons-material/AddToDriveOutlined";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import React, { useState } from "react";

export const MUIButton = () => {
    const [formats, setFormats] = useState<string|null>(null);
    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string|null) => {
        setFormats(updatedFormats);
    };
    console.log(formats);
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={"row"}>
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" color="primary">primary</Button>
        <Button variant="contained" color="secondary">secondary</Button>
        <Button variant="contained" color="error">error</Button>
        <Button variant="contained" color="warning">warning</Button>
        <Button variant="contained" color="info">info</Button>
        <Button variant="contained" color="success">success</Button>
      </Stack>
      <Stack display={"block"} spacing={2} direction={"row"}>
        <Button variant="contained" size="small">small</Button>
        <Button variant="contained" size="medium">medium</Button>
        <Button variant="contained" size="large">large</Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" startIcon={<AttachmentOutlinedIcon/>} disableRipple>Attach</Button>
        <Button variant="contained" endIcon={<AddToDriveOutlinedIcon/>} disableElevation>Add</Button>
        <IconButton aria-label="celebration-button" color="warning" onClick={()=>{alert("Happy 🎉");}}><CelebrationOutlinedIcon/></IconButton>
      </Stack>
      <Stack direction={"row"}>
        <ButtonGroup variant="contained" orientation="horizontal" color="secondary" size="small" area-aria-label="button group">
        <Button onClick={()=>{alert("Left Clicked ✨");}}>Left</Button>
        <Button>Center</Button>
        <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction={"row"}>
        <ToggleButtonGroup 
        aria-label="text formatting" value={formats} onChange={handleFormatChange}
        size="small" color="secondary" orientation="horizontal" exclusive
        > 
            <ToggleButton value={"bold"} aria-label="bold"><FormatBoldIcon/></ToggleButton>
            <ToggleButton value={"italic"} aria-label="italic"><FormatItalicIcon/></ToggleButton>
            <ToggleButton value={"underlined"} aria-label="underlined"><FormatUnderlinedIcon/></ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}
