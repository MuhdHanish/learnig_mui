import { Box, ImageList, ImageListItem, ImageListItemBar, Stack } from "@mui/material";

export const MUIImageList = () => {
  return (
    <Stack spacing={4}>
      <ImageList sx={{ width:500, height: 450 }} cols={3} rowHeight={164}>
        {actualData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy"/>
          <ImageListItemBar title={item.title} position="top" subtitle={"image"}/>
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList sx={{ width:500, height: 450 }} variant="woven" cols={3} gap={8}>
        {actualData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy"/>
          </ImageListItem>
        ))}
      </ImageList>
      <Box sx={{ width:500, height: 450, overflowY:"scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
        {actualData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy"/>
          </ImageListItem>
        ))}
      </ImageList>
      </Box>
    </Stack>
  );
};

const actualData = [
  {
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    title: "Sunset Mountains",
  },
  {
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    title: "City at Night",
  },
  {
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    title: "Tropical Beach",
  },
  {
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    title: "Jungle Ruins",
  },
  {
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    title: "Arctic Aurora",
    },
  {
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    title: "Jungle Ruins",
  },
  {
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    title: "Jungle Ruins",
  },
  {
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    title: "Jungle Ruins",
  },
  {
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    title: "Jungle Ruins",
  },
  {
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    title: "Jungle Ruins",
  },
  {
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    title: "Jungle Ruins",
  },
  {
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    title: "Jungle Ruins",
  },
  {
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    title: "Jungle Ruins",
  },
  {
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    title: "Jungle Ruins",
  },
  {
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    title: "Jungle Ruins",
  },
  {
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    title: "Jungle Ruins",
  },
  {
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    title: "Jungle Ruins",
  },
  {
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    title: "Jungle Ruins",
  },
];
