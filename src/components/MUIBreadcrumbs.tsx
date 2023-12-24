import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const MUIBreadcrumbs = () => {
  return (
    <Box m={2}>
          <Breadcrumbs aria-label="breadcrumb" separator={<ChevronRightIcon fontSize="inherit" />}
          maxItems={2}
          >
              <Link underline="hover" href="#">Home</Link>
              <Link underline="hover" href="#">Catalog</Link>
              <Link underline="hover" href="#">Accessories</Link>
              <Typography color={"text.primary"}>Sheos</Typography>
         </Breadcrumbs>
    </Box>
  )
}
