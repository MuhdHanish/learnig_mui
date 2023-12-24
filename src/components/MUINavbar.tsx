import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import SailingIcon from "@mui/icons-material/Sailing";

export const MUINavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <SailingIcon />
        </IconButton>
        <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
          Midjourney
        </Typography>
        <Stack direction={'row'} spacing={2}>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Home</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
