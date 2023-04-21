import { ContactBox } from "./style";
import { Grid, TextField, Button } from "@mui/material";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  return (
    <ContactBox>
      <div id="leftBox">
        <div className="contact-title">CONTACT US</div>
        <div className="contact-subtitle">Get In Touch</div>
        <p className="contact-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          exercitationem quam, deserunt magni velit placeat aspernatur eaque
          corporis eum id tenetur, aut optio. Sunt, quasi?
        </p>
        <div className="contact-icons">
          <div className="icon">
            <SmartphoneIcon />
            <span>+91 94701 94401</span>
          </div>
          <div className="icon">
            <MailIcon />
            <span>nvcti@iitism.ac.in</span>
          </div>
          <div className="icon">
            <LocationOnIcon />
            <span>
              Naresh Vashisht Centre for Tinkering and Innovation IIT (ISM)
              Dhanbad, Dhanbad, Jharkhand - 826004
            </span>
          </div>
        </div>
      </div>
      <div id="rightBox">
        <div className="contact-subtitle" style={{ marginBottom: "2rem" }}>
          Leave Message
        </div>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField label="Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Email" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField label="Subject" variant="outlined" fullWidth />
          </Grid>
        </Grid>
        <TextField
          label="Message"
          placeholder="Write a message .."
          variant="outlined"
          fullWidth
          rows={4}
          multiline
        />
        <Button variant="contained" sx={{mt: 2, backgroundColor: '#042352'}}>Submit</Button>
      </div>
    </ContactBox>
  );
};

export default Contact;
