import { title } from "assets/jss/material-kit-react.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

//import image from "assets/img/sign.jpg";
const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
    //backgroundImage: "url(" + image + ")",
    //backgroundColor: "#f7f9fd",
    backgroundColor: "#008060",
  },
  section2: {
    maxHeight: "500px",
    //backgroundImage: "url(" + image + ")",
    //backgroundColor: "#f7f9fd",
    backgroundColor: "#461326",
  },
  title: {
    ...title,
    //marginBottom: "1rem",
    marginTop: "0px",
    textDecoration: "none",
    marginLeft: "100px",
    fontFamily: '"Macan","Helvetica Neue","Helvetica","Arial",sans-serif',
    fontWeight: "700",
    fontSize: "35px",
    textAlign: "Left",
    color: "#FFFFFF",
  },
  description: {
    color: "#FFFFFF",
    marginLeft: "100px",
    fontFamily: '"Macan","Helvetica Neue","Helvetica","Arial",sans-serif',
    textAlign: "left",
  },
  imgClass: {
    maxHeight: "90%",
    width: "90%",
    marginTop: "0px",
    verticalAlign: "baseline",
  },

  ...imagesStyles,
};

export default productStyle;
