import { Typography } from "@mui/material";
import { ContentDiv } from "./content-box";

const ContentBox = () => {
  return (
    <ContentDiv>
      <Typography variant="h4" className="title" >
        Subheading 1
      </Typography>
      <Typography variant="body1" className="content">
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
        <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius exercitationem, harum dicta similique natus doloremque maiores perferendis itaque quaerat mollitia eaque maxime fugiat nulla possimus, officia aspernatur praesentium at! Voluptatem corrupti accusamus obcaecati culpa totam saepe perspiciatis necessitatibus vitae minus repellendus reiciendis quis corporis quisquam, autem tempora laborum, recusandae eius!
      </Typography>
    </ContentDiv>
  );
};

export default ContentBox;
