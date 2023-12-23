import { Box } from "@mui/material";

const MUILayout = () => {
  return (
    <>
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
    </>
  );
};

export default MUILayout;
