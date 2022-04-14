import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import WorkerHeaderLinks from "components/Header/WorkerHeaderLinks.js";

import Button from "components/CustomButtons/Button.js";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
// import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
// import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import styles from "assets/jss/material-kit-react/views/findJobsPage.js";
// import { ListItemSecondaryAction } from "@material-ui/core";
// import CustomInput from "components/CustomInput/CustomInput.js";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

// import SearchBar from "";

// import image from "assets/img/bg7.jpg";
// import helper from "assets/img/services/helper.jpg";
import team1 from "assets/img/faces/test1.jpg";
//import team2 from "assets/img/faces/christian.jpg";
//import team3 from "assets/img/faces/test3.jpg";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const useStyles = makeStyles(styles);
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function FindJobs(props) {
  const [job, getJobData] = useState({
    jobs: [
      {
        title: "",
        budget: "",
        city: "",
        address: "",
        category: "",
        description: "",
      },
    ],
  });

  const ViewData = async () => {
    console.log("Check");
    try {
      const res = await fetch("/job", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      getJobData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      // history.push('/login');
    }
  };

  useEffect(() => {
    ViewData();
  }, []);

  const [open, setOpen] = React.useState(false);
  const [disable, setDisable] = React.useState(false);
  const classes = useStyles();
  const { ...rest } = props;
  const handleClick = () => {
    // prop.setDisable(true);
    setDisable(true);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const searchHandle = async (event) => {
    // console.warn();
    let key = event.target.value;
    if (key) {
      let result = await fetch(`/job/${key}`);
      result = await result.json();
      if (result) {
        getJobData(result);
      }
    } else {
      ViewData();
    }
  };

  return (
    <div>
      <Header
        absolute
        color="black"
        brand="MARKAZ"
        rightLinks={<WorkerHeaderLinks />}
        {...rest}
      />
      <div className={classes.pageHeader}>
        <div className={classes.container}>
          <h2 className={classes.title}>Find Jobs of your interest!</h2>
          <h3 className={classes.desc}>
            Choose from a number of jobs posted from different areas, place your
            bids to get selected.
          </h3>
          <div className={classes.new}>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 700,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search for desired jobs..."
                inputProps={{ "aria-label": "search google maps" }}
                onChange={searchHandle}
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
            {/* <CustomInput
              black
              inputProps={{
                placeholder: "Search",
                inputProps: {
                  "aria-label": "Search",
                  className: classes.searchInput,
                  //error: true,
                },
              }}
            />

            <Button color="green" className={classes.searchBtn}>
              <i className="fas fa-search" />
              Search
            </Button> */}
          </div>
          {/* <SearchBar
            onChange={() => console.log("onChange")}
            onRequestSearch={() => console.log("onRequestSearch")}
            style={{
              margin: "0 auto",
              maxWidth: 800,
            }}
          /> */}
          <List>
            {console.log(job.jobs.length)}

            {job.jobs.length > 0 ? (
              job.jobs.map((jobs, index) => {
                return (
                  <ListItem alignItems="flex-start" key={index}>
                    <Card className={classes.jobCard}>
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={team1} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography className={classes.heading}>
                            <strong> {jobs.title}</strong>
                          </Typography>
                        }
                        secondary={
                          <React.Fragment>
                            <Typography
                              className={classes.heading}
                              color="text.primary"
                            >
                              Ali Connors
                            </Typography>
                            {jobs.description}
                            <br /> <br />
                            <strong> Budget: {jobs.budget}</strong>
                            <Divider
                              sx={{ width: 1000, m: 0.5 }}
                              orientation="horizontal"
                            />
                            <TextField
                              defaultValue="45"
                              InputProps={{ inputProps: { min: 0 } }}
                              variant="standard"
                              type="number"
                              id="bid"
                              label=" "
                              sx={{ width: 60 }}
                            />
                            <Button
                              color="green"
                              size="md"
                              // href="/signup-page"
                              // target="_blank"
                              disabled={disable}
                              rel="noopener noreferrer"
                              className={classes.jobBtn}
                              onClick={handleClick}
                            >
                              <i className="fas fa-dollar-sign" />
                              Make Bid
                            </Button>
                            <Snackbar
                              open={open}
                              autoHideDuration={6000}
                              onClose={handleClose}
                            >
                              <Alert
                                onClose={handleClose}
                                severity="success"
                                sx={{ width: "100%" }}
                              >
                                Bid placed successfully!
                              </Alert>
                            </Snackbar>
                          </React.Fragment>
                        }
                      />
                    </Card>
                    {/* <Button
                    color="black"
                    size="md"
                    href="/signup-page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.searchBtn}
                  >
                    <i className="fas fa-check" />
                    Bid
                  </Button> */}
                  </ListItem>

                  // <ListItem alignItems="flex-start">
                  //   <Card className={classes.jobCard}>
                  //     <ListItemAvatar>
                  //       <Avatar alt="Travis Howard" src={team2} />
                  //     </ListItemAvatar>
                  //     <ListItemText
                  //       primary={
                  //         <Typography className={classes.heading}>
                  //           <strong>Title: Plumbing</strong>
                  //         </Typography>
                  //       }
                  //       secondary={
                  //         <React.Fragment>
                  //           <Typography
                  //             className={classes.heading}
                  //             color="text.primary"
                  //           >
                  //             Ali Connors
                  //           </Typography>
                  //           Ill be in your neighborhood doing errands this… Ill be in
                  //           your neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           <br /> <br />
                  //           <strong>Max bid: $45</strong>
                  //           <Divider
                  //             sx={{ width: 1000, m: 0.5 }}
                  //             orientation="horizontal"
                  //           />
                  //           <TextField
                  //             defaultValue="45"
                  //             InputProps={{ inputProps: { min: 0 } }}
                  //             variant="standard"
                  //             type="number"
                  //             id="bid"
                  //             label=" "
                  //             sx={{ width: 60 }}
                  //           />
                  //           <Button
                  //             color="green"
                  //             size="md"
                  //             // href="/signup-page"
                  //             // target="_blank"
                  //             // disabled={disable}
                  //             rel="noopener noreferrer"
                  //             className={classes.jobBtn}
                  //             onClick={handleClick}
                  //           >
                  //             <i className="fas fa-dollar-sign" />
                  //             Make Bid
                  //           </Button>
                  //           {/* <Snackbar
                  //             open={open}
                  //             autoHideDuration={6000}
                  //             onClose={handleClose}
                  //           >
                  //             <Alert
                  //               onClose={handleClose}
                  //               severity="success"
                  //               sx={{ width: "100%" }}
                  //             >
                  //               Bid placed successfully!
                  //             </Alert>
                  //           </Snackbar> */}
                  //         </React.Fragment>
                  //       }
                  //     />
                  //   </Card>
                  // </ListItem>
                  // {/* <Divider variant="inset" component="li" /> */}
                  // {/* </div> */}
                  // {/* <div className={classes.newClass}> */}
                  // <ListItem alignItems="flex-start">
                  //   <Card className={classes.jobCard}>
                  //     <ListItemAvatar>
                  //       <Avatar alt="Cindy Baker" src={team3} />
                  //     </ListItemAvatar>
                  //     <ListItemText
                  //       primary={
                  //         <Typography className={classes.heading}>
                  //           <strong>Title: Plumbing</strong>
                  //         </Typography>
                  //       }
                  //       secondary={
                  //         <React.Fragment>
                  //           <Typography
                  //             className={classes.heading}
                  //             color="text.primary"
                  //           >
                  //             Ali Connors
                  //           </Typography>
                  //           Ill be in your neighborhood doing errands this… Ill be in
                  //           your neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           <br /> <br />
                  //           <strong>Max bid: $45</strong>
                  //           <Divider
                  //             sx={{ width: 1000, m: 0.5 }}
                  //             orientation="horizontal"
                  //           />
                  //           <TextField
                  //             defaultValue="45"
                  //             InputProps={{ inputProps: { min: 0 } }}
                  //             variant="standard"
                  //             type="number"
                  //             id="bid"
                  //             label=" "
                  //             sx={{ width: 60 }}
                  //           />
                  //           <Button
                  //             color="green"
                  //             size="md"
                  //             // href="/signup-page"
                  //             // target="_blank"
                  //             // disabled={disable}
                  //             rel="noopener noreferrer"
                  //             className={classes.jobBtn}
                  //             onClick={handleClick}
                  //           >
                  //             <i className="fas fa-dollar-sign" />
                  //             Make Bid
                  //           </Button>
                  //           {/* <Snackbar
                  //             open={open}
                  //             autoHideDuration={6000}
                  //             onClose={handleClose}
                  //           >
                  //             <Alert
                  //               onClose={handleClose}
                  //               severity="success"
                  //               sx={{ width: "100%" }}
                  //             >
                  //               Bid placed successfully!
                  //             </Alert>
                  //           </Snackbar> */}
                  //         </React.Fragment>
                  //       }
                  //     />
                  //   </Card>
                  // </ListItem>
                  // {/* <Divider variant="inset" component="li" /> */}
                  // {/* </div> */}
                  // {/* <div className={classes.newClass}> */}
                  // <ListItem alignItems="flex-start">
                  //   <Card className={classes.jobCard}>
                  //     <ListItemAvatar>
                  //       <Avatar alt="Remy Sharp" src={team1} />
                  //     </ListItemAvatar>
                  //     <ListItemText
                  //       primary={
                  //         <Typography className={classes.heading}>
                  //           <strong>Title: Plumbing</strong>
                  //         </Typography>
                  //       }
                  //       secondary={
                  //         <React.Fragment>
                  //           <Typography
                  //             className={classes.heading}
                  //             color="text.primary"
                  //           >
                  //             Ali Connors
                  //           </Typography>
                  //           Ill be in your neighborhood doing errands this… Ill be in
                  //           your neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           <br /> <br />
                  //           <strong>Max bid: $45</strong>
                  //           <Divider
                  //             sx={{ width: 1000, m: 0.5 }}
                  //             orientation="horizontal"
                  //           />
                  //           <TextField
                  //             defaultValue="45"
                  //             InputProps={{ inputProps: { min: 0 } }}
                  //             variant="standard"
                  //             type="number"
                  //             id="bid"
                  //             label=" "
                  //             sx={{ width: 60 }}
                  //           />
                  //           <Button
                  //             color="green"
                  //             size="md"
                  //             // href="/signup-page"
                  //             // target="_blank"
                  //             // disabled={disable}
                  //             rel="noopener noreferrer"
                  //             className={classes.jobBtn}
                  //             onClick={handleClick}
                  //           >
                  //             <i className="fas fa-dollar-sign" />
                  //             Make Bid
                  //           </Button>
                  //           {/* <Snackbar
                  //             open={open}
                  //             autoHideDuration={6000}
                  //             onClose={handleClose}
                  //           >
                  //             <Alert
                  //               onClose={handleClose}
                  //               severity="success"
                  //               sx={{ width: "100%" }}
                  //             >
                  //               Bid placed successfully!
                  //             </Alert>
                  //           </Snackbar> */}
                  //         </React.Fragment>
                  //       }
                  //     />
                  //   </Card>
                  // </ListItem>
                  // {/* <Divider variant="inset" component="li" /> */}
                  // {/* </div> */}
                  // {/* <div className={classes.newClass}> */}
                  // <ListItem alignItems="flex-start">
                  //   <Card className={classes.jobCard}>
                  //     <ListItemAvatar>
                  //       <Avatar alt="Travis Howard" src={team2} />
                  //     </ListItemAvatar>
                  //     <ListItemText
                  //       primary={
                  //         <Typography className={classes.heading}>
                  //           <strong>Title: Plumbing</strong>
                  //         </Typography>
                  //       }
                  //       secondary={
                  //         <React.Fragment>
                  //           <Typography
                  //             className={classes.heading}
                  //             color="text.primary"
                  //           >
                  //             Ali Connors
                  //           </Typography>
                  //           Ill be in your neighborhood doing errands this… Ill be in
                  //           your neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           <br /> <br />
                  //           <strong>Max bid: $45</strong>
                  //           <Divider
                  //             sx={{ width: 1000, m: 0.5 }}
                  //             orientation="horizontal"
                  //           />
                  //           <TextField
                  //             defaultValue="45"
                  //             InputProps={{ inputProps: { min: 0 } }}
                  //             variant="standard"
                  //             type="number"
                  //             id="bid"
                  //             label=" "
                  //             sx={{ width: 60 }}
                  //           />
                  //           <Button
                  //             color="green"
                  //             size="md"
                  //             // href="/signup-page"
                  //             // target="_blank"
                  //             // disabled={disable}
                  //             rel="noopener noreferrer"
                  //             className={classes.jobBtn}
                  //             onClick={handleClick}
                  //           >
                  //             <i className="fas fa-dollar-sign" />
                  //             Make Bid
                  //           </Button>
                  //           {/* <Snackbar
                  //             open={open}
                  //             autoHideDuration={6000}
                  //             onClose={handleClose}
                  //           >
                  //             <Alert
                  //               onClose={handleClose}
                  //               severity="success"
                  //               sx={{ width: "100%" }}
                  //             >
                  //               Bid placed successfully!
                  //             </Alert>
                  //           </Snackbar> */}
                  //         </React.Fragment>
                  //       }
                  //     />
                  //   </Card>
                  // </ListItem>
                  // {/* <Divider variant="inset" component="li" /> */}
                  // {/* </div> */}
                  // {/* <div className={classes.newClass}> */}
                  // <ListItem alignItems="flex-start">
                  //   <Card className={classes.jobCard}>
                  //     <ListItemAvatar>
                  //       <Avatar alt="Cindy Baker" src={team3} />
                  //     </ListItemAvatar>
                  //     <ListItemText
                  //       primary={
                  //         <Typography className={classes.heading}>
                  //           <strong>Title: Plumbing</strong>
                  //         </Typography>
                  //       }
                  //       secondary={
                  //         <React.Fragment>
                  //           <Typography
                  //             className={classes.heading}
                  //             color="text.primary"
                  //           >
                  //             Ali Connors
                  //           </Typography>
                  //           Ill be in your neighborhood doing errands this… Ill be in
                  //           your neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           neighborhood doing errands this… Ill be in your
                  //           <br /> <br />
                  //           <strong>Max bid: $45</strong>
                  //           <Divider
                  //             sx={{ width: 1000, m: 0.5 }}
                  //             orientation="horizontal"
                  //           />
                  //           <TextField
                  //             defaultValue="45"
                  //             InputProps={{ inputProps: { min: 0 } }}
                  //             variant="standard"
                  //             type="number"
                  //             id="bid"
                  //             label=" "
                  //             sx={{ width: 60 }}
                  //           />
                  //           <Button
                  //             color="green"
                  //             size="md"
                  //             // href="/signup-page"
                  //             // target="_blank"
                  //             // disabled={disable}
                  //             rel="noopener noreferrer"
                  //             className={classes.jobBtn}
                  //             onClick={handleClick}
                  //           >
                  //             <i className="fas fa-dollar-sign" />
                  //             Bid
                  //           </Button>
                  //           {/* <Snackbar
                  //             open={open}
                  //             autoHideDuration={6000}
                  //             onClose={handleClose}
                  //           >
                  //             <Alert
                  //               onClose={handleClose}
                  //               severity="success"
                  //               sx={{ width: "100%" }}
                  //             >
                  //               Bid placed successfully!
                  //             </Alert>
                  //           </Snackbar> */}
                  //         </React.Fragment>
                  //       }
                  //     />
                  //   </Card>
                  // </ListItem>
                  // {/* </div> */}
                );
              })
            ) : (
              // <h1> No record found</h1>
              // alert("No record found")
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                No record found !
              </Alert>
            )}
          </List>
        </div>
      </div>
    </div>
  );
}
