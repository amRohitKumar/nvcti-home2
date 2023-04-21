import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Container,
  Typography,
  TextField,
  Box,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Button,
} from "@mui/material";

const AdminDashboard = () => {
  const [dashboard, setDashboard] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([{}, {}, {}, {}, {}, {}]);
  const handleSubmit = async () => {
    try {
      const processedData = [];
      data.forEach((d) => d.imgUrl && processedData.push(d));
      // console.log("start ...");
      const res = await axios.post("http://localhost:5000/update", {
        value: JSON.stringify(processedData),
        name: dashboard,
        password,
      });
      toast.success(res.data.msg);
      toast.success(res.data.msg);
      setDashboard("");
      setPassword("");
      setData("");
    } catch (e) {
      toast.error(e.msg);
    }
  };
  const handleAdd = (e, idx) => {
    let newArr = data;
    newArr[idx][e.target.name] = e.target.value;
    setData(newArr);
  };
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2">ADMIN DASHBOARD</Typography>
      <Box sx={{ my: "2em" }}>
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Box sx={{ minWidth: 120, my: "2rem" }}>
        <FormControl sx={{ width: "400px" }}>
          <InputLabel>Select Dashboard</InputLabel>
          <Select
            value={dashboard}
            label="Select Dashboard"
            onChange={(e) => setDashboard(e.target.value)}
          >
            <MenuItem value="home">Home Dashboard</MenuItem>
            <MenuItem value="event">Event Dashboard</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", gap: "1rem", my: "1rem" }}>
        <TextField
          label="ImgURL"
          variant="outlined"
          name="imgUrl"
          onChange={(e) => handleAdd(e, 0)}
        />
        <TextField
          label="Heading"
          variant="outlined"
          name="title"
          onChange={(e) => handleAdd(e, 0)}
        />
        <TextField
          label="Description"
          variant="outlined"
          name="desc"
          onChange={(e) => handleAdd(e, 0)}
        />
        <TextField
          label="URL"
          variant="outlined"
          name="url"
          onChange={(e) => handleAdd(e, 0)}
        />
      </Box>
      <Box sx={{ display: "flex", gap: "1rem", my: "1rem" }}>
        <TextField
          label="ImgURL"
          variant="outlined"
          name="imgUrl"
          onChange={(e) => handleAdd(e, 1)}
        />
        <TextField
          label="Heading"
          variant="outlined"
          name="title"
          onChange={(e) => handleAdd(e, 1)}
        />
        <TextField
          label="Description"
          variant="outlined"
          name="desc"
          onChange={(e) => handleAdd(e, 1)}
        />
        <TextField
          label="URL"
          variant="outlined"
          name="url"
          onChange={(e) => handleAdd(e, 1)}
        />
      </Box>
      <Box sx={{ display: "flex", gap: "1rem", my: "1rem" }}>
        <TextField
          label="ImgURL"
          variant="outlined"
          name="imgUrl"
          onChange={(e) => handleAdd(e, 2)}
        />
        <TextField
          label="Heading"
          variant="outlined"
          name="title"
          onChange={(e) => handleAdd(e, 2)}
        />
        <TextField
          label="Description"
          variant="outlined"
          name="desc"
          onChange={(e) => handleAdd(e, 2)}
        />
        <TextField
          label="URL"
          variant="outlined"
          name="url"
          onChange={(e) => handleAdd(e, 2)}
        />
      </Box>
      <Box sx={{ display: "flex", gap: "1rem", my: "1rem" }}>
        <TextField
          label="ImgURL"
          variant="outlined"
          name="imgUrl"
          onChange={(e) => handleAdd(e, 3)}
        />
        <TextField
          label="Heading"
          variant="outlined"
          name="title"
          onChange={(e) => handleAdd(e, 3)}
        />
        <TextField
          label="Description"
          variant="outlined"
          name="desc"
          onChange={(e) => handleAdd(e, 3)}
        />
        <TextField
          label="URL"
          variant="outlined"
          name="url"
          onChange={(e) => handleAdd(e, 3)}
        />
      </Box>
      <Box sx={{ display: "flex", gap: "1rem", my: "1rem" }}>
        <TextField
          label="ImgURL"
          variant="outlined"
          name="imgUrl"
          onChange={(e) => handleAdd(e, 4)}
        />
        <TextField
          label="Heading"
          variant="outlined"
          name="title"
          onChange={(e) => handleAdd(e, 4)}
        />
        <TextField
          label="Description"
          variant="outlined"
          name="desc"
          onChange={(e) => handleAdd(e, 4)}
        />
        <TextField
          label="URL"
          variant="outlined"
          name="url"
          onChange={(e) => handleAdd(e, 4)}
        />
      </Box>
      <Box sx={{ display: "flex", gap: "1rem", my: "1rem" }}>
        <TextField
          label="ImgURL"
          variant="outlined"
          name="imgUrl"
          onChange={(e) => handleAdd(e, 5)}
        />
        <TextField
          label="Heading"
          variant="outlined"
          name="title"
          onChange={(e) => handleAdd(e, 5)}
        />
        <TextField
          label="Description"
          variant="outlined"
          name="desc"
          onChange={(e) => handleAdd(e, 5)}
        />
        <TextField
          label="URL"
          variant="outlined"
          name="url"
          onChange={(e) => handleAdd(e, 5)}
        />
      </Box>
      <Box sx={{ display: "flex", gap: "1rem", my: "1rem" }}>
        <TextField
          label="ImgURL"
          variant="outlined"
          name="imgUrl"
          onChange={(e) => handleAdd(e, 6)}
        />
        <TextField
          label="Heading"
          variant="outlined"
          name="title"
          onChange={(e) => handleAdd(e, 6)}
        />
        <TextField
          label="Description"
          variant="outlined"
          name="desc"
          onChange={(e) => handleAdd(e, 6)}
        />
        <TextField
          label="URL"
          variant="outlined"
          name="url"
          onChange={(e) => handleAdd(e, 6)}
        />
      </Box>
      <Button
        variant="contained"
        sx={{ my: 2 }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Container>
  );
};

export default AdminDashboard;
