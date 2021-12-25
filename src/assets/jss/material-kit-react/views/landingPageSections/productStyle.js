import { title } from "assets/jss/material-kit-react.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

//import image from "assets/img/sign.jpg";
const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
    //backgroundImage: "url(" + image + ")",
    backgroundColor: "#210753",
  },
  title: {
    ...title,
    //marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    marginLeft: "10px",
    fontFamily: '"Macan","Helvetica Neue","Helvetica","Arial",sans-serif',
    fontWeight: "700",
    color: "#ffffff",
    textAlign: "Left",
  },
  description: {
    color: "#ffffff",
    marginLeft: "10px",
    fontFamily: '"Macan","Helvetica Neue","Helvetica","Arial",sans-serif',
    fontWeight: "400",
  },
  imgClass: {
    maxHeight: "80%",
    width: "80%",
    marginTop: "20px",
  },
  sectionDisc: {
    marginTop: "-250px",
    textAlign: "Left",
    marginLeft: "10px",
  },
  ...imagesStyles,
};

export default productStyle;
