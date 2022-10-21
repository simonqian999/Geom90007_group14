
import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Introduction from "./Introduction";
import Hotel from "./Hotel";
import Transport from "./Transport";
import Discover from "./Discover";


const DashBoard = () => {
    const [view, setView] = useState("introduction")
    return (
        <div>
            
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Tourists who would like to visit Melbourne
                    </Typography>

                    <Button color="inherit" onClick={() => setView('introduction')}>Introdunction</Button>
                    <Button color="inherit" onClick={() => setView('hotel')}>Hotel</Button>
                    <Button color="inherit" onClick={() => setView('trans')}>Transport</Button>
                    <Button color="inherit" onClick={() => setView('discover')}>Discover</Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <div>
                {view === "introduction" ? <Introduction/> : ""}
                {view === "hotel" ? <Hotel/> : ""}
                {view === "trans" ? <Transport/> : ""}
                {view === "discover" ? <Discover/> : ""}
            </div>
        </div>

    );
};

export default DashBoard;