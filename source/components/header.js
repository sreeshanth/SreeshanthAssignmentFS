import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
  } from "@material-ui/core";
  import React from "react";
  
  const headersData = [{
    label: "Page 1",
    href: "/page1",
  },
  {
    label: "Page 2",
    href: "/page2",
  }];
                       
  const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#400CCC",
        paddingRight: "79px",
        paddingLeft: "118px",
      },
    logo: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#FFFEFE",
      textAlign: "left",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "70px",

     },
     toolbar: {
        display: "flex",
        justifyContent: "space-between",
      },
  }));
                       
  export default function Header(props) {
    const { header, logo,toolbar,menuButton } = useStyles();
                       
    const displayDesktop = () => {
      return (
        <Toolbar>
          {femmecubatorLogo}
          <div>{getMenuButtons()}</div>
        </Toolbar>
      );
    };
                       
    const femmecubatorLogo = (
      <Typography variant="h6" component="h1" className={logo}>
        Sreeshanth Assignment
      </Typography>
    );
                       
    const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Button
            onClick={()=>{
                props.handlePageChange(label == 'Page 1' ? 'page1':'page2')
            }}
            {...{
              key: label,
              value:label,
              color: "inherit",
              className: menuButton
            }}
          >
            {label}
          </Button>
        );
      });
    };
                       
    return (
      <header>
        <AppBar className={header}>{displayDesktop()}</AppBar>
      </header>
    );
  }