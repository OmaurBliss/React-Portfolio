import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
//  import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// import Facebook from "@material-ui/icons/Facebook";

// import Instagram from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
       {/* <BottomNavigationAction  />
      <BottomNavigationAction  />  */}
           <button className= "btn">
                   <a href = "https://www.facebook.com/omaur.bliss.9/">Facebook </a>
                   </button> 
                   <button className= "btn">
                   <a href = "https://www.instagram.com/omaurbliss/">Instagram </a>
                   </button> 
    </BottomNavigation>
  );
};
export default Footer;