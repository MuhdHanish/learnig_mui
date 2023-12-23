import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const MUICard = () => {
  return (
    <Box width={"300px"}>
      <Card>
        <CardMedia
          component={"img"}
          height={"185"}
          image="https://v4.mui.com/static/logo.png"
          alt="react-image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component={"div"}>
            Material UI
          </Typography>
          <Typography variant="body2" color={"text.secondary"}>
            Material Design is a design language developed by Google in 2014.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
