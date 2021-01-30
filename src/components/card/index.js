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
import { OutlinedInput } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 960,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 50,
  },
  grid: {
    display: "grid",
    justifyItems: "left",
    marginLeft: 20,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    display: "block",
  },
  formControl: {
    minWidth: 120,
    float: "left",
  },
  input: {
    padding: 5,
    fontSize: 14,
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
        <div className={classes.grid}>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={"Product"}
              onChange={handleChange}
              input={<OutlinedInput classes={{ input: classes.input }} />}
            >
              <MenuItem value={"Product"} disabled>
                Product
              </MenuItem>
              <MenuItem value={"Client"}>Client Product</MenuItem>
              <MenuItem value={"User"}>Any User Product</MenuItem>
              <MenuItem value={"Admin"}>Admin Product</MenuItem>
            </Select>
          </FormControl>
          <Typography align="left" variant="h5" component="h2">
            BTC-USD
          </Typography>
          <Typography align="left" color="textSecondary" variant="h6">
            Market Price 34,118.002
          </Typography>
        </div>
        <Graph />
      </CardContent>
    </Card>
  );
}
