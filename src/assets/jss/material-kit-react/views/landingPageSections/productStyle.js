import { title } from "assets/jss/material-kit-react.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    //marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    marginLeft: "10px",
  },
  description: {
    color: "#999",
    marginLeft: "10px",
  },
  imgClass: {
    maxHeight: "80%",
    width: "80%",
    marginTop: "20px",
  },
  sectionDisc: {
    marginTop: "170px",
  },
  ...imagesStyles,
};

export default productStyle;
