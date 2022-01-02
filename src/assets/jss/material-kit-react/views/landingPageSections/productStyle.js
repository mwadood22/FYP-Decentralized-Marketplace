import { title } from "assets/jss/material-kit-react.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

//import image from "assets/img/sign.jpg";
const productStyle = {
  section: {
    padding: "50px 0",
    textAlign: "center",
    //backgroundImage: "url(" + image + ")",
    backgroundColor: "#f7f9fd",
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
    color: "#404145",
  },
  description: {
    color: "#404145",
    marginLeft: "100px",
    fontFamily: '"Macan","Helvetica Neue","Helvetica","Arial",sans-serif',
    fontWeight: "400",
    fontSize: "100px",
  },
  imgClass: {
    // maxHeight: "90%",
    // width: "100%",
    marginTop: "20px",
    paddingRight: "40px",
    // verticalAlign: "baseline",
  },
  sectionDisc: {
    //marginTop: "-250px",
    textAlign: "Left",
  },
  ...imagesStyles,
};

export default productStyle;
