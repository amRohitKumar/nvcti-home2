import {
  Container,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Toolbar,
} from "@mui/material";
import { AboutBanner, LabCarousel } from "../../components";
import { lookUp } from "./Labs-info";
import BannerImg from "../../assets/img.jpg";

const Labs = ({ lab }) => {
  const data = lookUp[lab];
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <>
      <AboutBanner
        // title={data.name}
        // body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tenetur, sint nobis, itaque facilis ipsam in rem laboriosam quae pariatur, veritatis consequuntur modi earum obcaecati!"
        imgurl={BannerImg}
      />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {/* <Grid container>
          <Grid
            item
            sx={{
              typography: "body2",
              textAlign: "center",
              textTransform: "uppercase",
              fontSize: 28,
              fontWeight: "bold",
            }}
            xs={12}
          >
            <span style={{ borderBottom: "2px solid #ea810b" }}>
              About The Lab
            </span>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              typography: "body1",
              textAlign: "justify",
              mt: 2,
            }}
          >
            {data.about}
          </Grid>
          <Grid item xs={12} mt={2}>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      Lab In-Charges
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      Name
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      Department
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.admins.map(({ designation, name, department }) => (
                    <TableRow key={name}>
                      <TableCell align="center">{designation}</TableCell>
                      <TableCell align="center">{name}</TableCell>
                      <TableCell align="center">{department}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid> */}
        {/* <Grid container> */}
        {/* <Grid
            item
            xs={12}
            sx={{
              typography: "body2",
              textAlign: "center",
              textTransform: "uppercase",
              fontSize: 24,
              fontWeight: "bold",
              marginTop: 4,
              marginBottom: 2,
            }}
          >
            <span style={{ borderBottom: "2px solid #ea810b" }}>
              EQUIPMENTS AVAILABLE IN THE LAB
            </span>
          </Grid> */}
        {/* <List sx={{ width: "100%" }}>
          {data.equipments.map(({ name, desc }, idx) => (
            <ListItem divider sx={{ gap: "3rem" }} key={name}>
              <ListItemAvatar sx={{ display: { xs: "none", md: "block" } }}>
                <Avatar
                  sx={{
                    width: 56,
                    height: 56,
                    background: "transparent",
                    border: "2px solid #ccc",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  {idx + 1}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    component="div"
                    variant="body2"
                    sx={{ fontWeight: "bold", fontSize: 18, color: "#3f3b3b" }}
                  >
                    {name + " -"}
                  </Typography>
                }
                secondary={
                  <Typography
                    sx={{
                      mt: 1,
                      textAlign: "justify",
                      fontSize: 16,
                      opacity: "0.8",
                    }}
                    component="p"
                    variant="body2"
                    color="text.primary"
                  >
                    {desc}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List> */}
        {/* <Grid item xs={12}>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{ fontWeight: "bold", width: "30%" }}
                    >
                      EQUIPMENTS NAME
                    </TableCell>
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      DESCRIPTION
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.equipments.map(({ name, desc }) => (
                    <TableRow key={name} sx={{ opacity: "0.8" }}>
                      <TableCell align="center">{name}</TableCell>
                      <TableCell align="justify">{desc}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid> */}
        {/* <Grid item xs={12} mt={1}>
            <Typography
              component="div"
              variant="body2"
              sx={{ opacity: "0.8", textAlign: "center" }}
            >
              and many more...
            </Typography>
          </Grid> */}
        {/* </Grid> */}
        <LabCarousel data={data.images} />
      </Container>
    </>
  );
};

export default Labs;
