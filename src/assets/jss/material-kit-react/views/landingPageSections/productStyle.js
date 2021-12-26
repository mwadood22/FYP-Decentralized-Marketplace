import { title } from "assets/jss/material-kit-react.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

//import image from "assets/img/sign.jpg";
const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
    //backgroundImage: "url(" + image + ")",
<<<<<<< Updated upstream
    background: "linear-gradient(60deg, #d5d0e5, #f3e6e8)",
=======
    backgroundColor: "#f7f9fd",
>>>>>>> Stashed changes
  },
  title: {
    ...title,
    //marginBottom: "1rem",
    marginTop: "0px",
    textDecoration: "none",
    marginLeft: "100px",
    fontFamily: '"Macan","Helvetica Neue","Helvetica","Arial",sans-serif',
    fontWeight: "700",
    fontSize: "48px",
    textAlign: "Left",
    color: "#404145",
  },
  description: {
    color: "#404145",
    marginLeft: "10px",
    fontFamily: '"Macan","Helvetica Neue","Helvetica","Arial",sans-serif',
    fontWeight: "400",
    fontSize: "100px",
  },
  imgClass: {
    maxHeight: "90%",
    width: "100%",
    marginTop: "0px",
    verticalAlign: "baseline",
  },
  sectionDisc: {
    //marginTop: "-250px",
    textAlign: "Left",
    marginLeft: "90px",
  },
  ...imagesStyles,
};

export default productStyle;
