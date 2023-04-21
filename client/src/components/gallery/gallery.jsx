import { Box } from "@mui/material";
import { GalleryItem } from "./style";
import ImageGallery from 'react-image-gallery';
// const Gallery = ({ data, settings }) => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         gap: "1.5rem",
//         flexWrap: "wrap",
//         alignItems: "center",
//         overflow: "hidden",
//       }}
//     >
//       {data.map((el, idx) => {
//         return (
//           <GalleryItem imgUrl={el.original} title={el.title}>
//             <div className="container"></div>
//           </GalleryItem>
//         );
//       })}
//     </Box>
//   );
// };
const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const Gallery = () => {
  return(
    <ImageGallery items={images} />
  )
}

export default Gallery;
