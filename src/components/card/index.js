import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Graph from "../chart";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    flexGrow: 1,
  },
  left: {
    alignItems: "left",
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
    color: "green",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    display: "block",
    // marginTop: theme.spacing(2),
  },
  formControl: {
    //margin: theme.spacing(1),
    minWidth: 120,
    float: "left",
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const [product, setProduct] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setProduct(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <FormControl className={classes.formControl}>
          <InputLabel id="label">Product</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={product}
            onChange={handleChange}
          >
            <MenuItem value={"Product"}>Product</MenuItem>
            <MenuItem value={"Client"}>Client Product</MenuItem>
            <MenuItem value={"User"}>Any User Product</MenuItem>
            <MenuItem value={"Admin"}>Admin Product</MenuItem>
          </Select>
        </FormControl>
        <br></br>
        <br></br>
        <br></br>
        <Typography align="left" variant="h5" component="h2">
          BTC-USD
        </Typography>
        <br></br>
        <Typography align="left" color="textSecondary" variant="h6">
          Market Price 34,118.002
        </Typography>
        <Graph />
      </CardContent>
    </Card>
  );
}
