import * as React from "react";
//import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
//import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
//import Avatar from "@mui/material/Avatar";
//import IconButton from "@mui/material/IconButton";
//import FormGroup from "@mui/material/FormGroup";
//import FormControlLabel from "@mui/material/FormControlLabel";
//import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
//import Typography from "@mui/material/Typography";
import CheckCircle from "@mui/icons-material/LibraryAddCheck";
// import Check from "@mui/icons-material/Check";

//import DeleteIcon from "@mui/icons-material/Delete";
//import { makeStyles } from "@material-ui/core/styles";
//import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
//const useStyles = makeStyles(styles);

export default function InteractiveList() {
  const [dense] = React.useState(false);
  const [secondary] = React.useState(false);
  //const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid item xs={12} md={6}>
        <List dense={dense}>
          <ListItem>
            <ListItemIcon>
              <CheckCircle />
            </ListItemIcon>
            <ListItemText
              primary="Explore a range of services"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle />
            </ListItemIcon>
            <ListItemText
              primary="Get help from trusted workers"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle />
            </ListItemIcon>
            <ListItemText
              primary="Bid for your services"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle />
            </ListItemIcon>
            <ListItemText
              primary="Get offers from the clients for custom jobs"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle />
            </ListItemIcon>
            <ListItemText
              primary="Secure payment channels"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle />
            </ListItemIcon>
            <ListItemText
              primary="24/7 Support and guidlines"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
        </List>
      </Grid>
    </Box>
  );
}
