import { Box, Stack, Divider, Grid } from "@mui/material";

const MUILayout = () => {
    return (
      <>
        <Stack
          sx={{ border: "1px solid" }}
          direction={"row"}
          spacing={2}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Box
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              width: "100px",
              height: "100px",
              padding: "16px",
              "&:hover": { backgroundColor: "primary.light" },
            }}
          >
            MUILayout
          </Box>
          <Box
            display={"flex"}
            height={"100px"}
            width={"100px"}
            justifyContent={"center"}
            alignItems={"center"}
            bgcolor="success.light"
            p={2}
          >
            Flex box
          </Box>
        </Stack>
        <Grid container my={4} rowSpacing={2} columnSpacing={1}>
             <Grid item xs={6}><Box bgcolor={"primary.light"} p={2}>Item 1</Box></Grid>
             <Grid item xs={6}><Box bgcolor={"primary.light"} p={2}>Item 2</Box></Grid>
             <Grid item xs={6}><Box bgcolor={"primary.light"} p={2}>Item 3</Box></Grid>
             <Grid item xs={6}><Box bgcolor={"primary.light"} p={2}>Item 4</Box></Grid>   
        </Grid>
      </>
    );
};

export default MUILayout;
