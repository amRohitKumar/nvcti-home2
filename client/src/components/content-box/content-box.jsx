import { Typography } from "@mui/material";
import { ContentDiv } from "./style";

const ContentBox = ({ subTitle, body }) => {
  return (
    <ContentDiv>
      <Typography variant="h4" className="title">
        {subTitle}
      </Typography>
      <Typography variant="body1" className="content">
        {body}
      </Typography>
    </ContentDiv>
  );
};

export default ContentBox;
