import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from "@mui/material/styles";

export const HeaderContainer = styled("div")({
    flex: "0 1 auto",
    width: "100%",
    background: "#F0FFFF",
    display: "flex",
    justifyContent: "center",
});

export const AContainer = styled("div") ({
    flex: "0 1 auto",
    margin: "30px",
    display: "flex",
    justifyContent: "center",
});
export const LogoContainer = styled("div") ({
    flex: "0 1 auto",
    margin: "5px",
    fontWeight: "bold",
    justifyContent: "center",
    display: "flex",
    fontSize: "50px",
    color: "black",

});

export const A = styled("a") ({
    fontSize: "30px",
    color: "black",
    fontWeight: "bold",
    justifyContent: "center",
    textDecoration: "none",
    '&:hover': {
        textDecoration: "underline",
    }
});

export default function NavHeader({page}) {

    function decorater(cur){
        if(page === cur) {
            return "underline"
        } else{
            return "none"
        }
    }
    return (

    // header that contain 4 sections and above is the name of website
    <>
<LogoContainer sx={{ border: 3 }}>MELPLORER</LogoContainer>
    <HeaderContainer>
    
        <AContainer>
            <A style={{textDecoration : decorater("home")}} href="/">Home</A>
        </AContainer>
        <AContainer>
            <A style={{textDecoration : decorater("discover")}} href="/attractions">Attractions</A>
        </AContainer>
        <AContainer>
            <A style={{textDecoration : decorater("hotel")}} href="/hotel">Hotel</A>
        </AContainer>
        <AContainer>
            <A style={{textDecoration : decorater("transport")}} href="/transportation">Transportation</A>
        </AContainer>


    </HeaderContainer>
    </>
  );
}