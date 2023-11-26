import { Stack, Button, IconButton } from "@mui/material";                   
import AddToDriveOutlinedIcon from "@mui/icons-material/AddToDriveOutlined";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";

export const MUIButton = () => {
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
        <IconButton aria-label="celebration-button" color="warning" onClick={()=>{prompt("enter message!")}}><CelebrationOutlinedIcon/></IconButton>
      </Stack>
    </Stack>
  );
}
