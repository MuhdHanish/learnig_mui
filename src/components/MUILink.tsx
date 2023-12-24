import { Link, Stack, Typography } from "@mui/material"


export const MUILink = () => {
  return (
    <Stack spacing={2} direction={"row"} margin={4}>
      <Link href="#" variant="h2">Link</Link>
      <Typography variant="h6" >
        <Link href="#" color={"secondary"} underline="hover">
          Secondary
        </Link>
      </Typography>
    </Stack>
  );
}
