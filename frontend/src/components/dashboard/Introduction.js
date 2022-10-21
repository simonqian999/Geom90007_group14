
import { Typography } from "@mui/material";
import React from "react";
import melbourn from "../../graph/hero-melbourne.jpg"



const Introduction = () => {

    return (
        <div>
            <Typography variant="h3" gutterBottom>Tourists in Melbourne</Typography> 
            <Typography gutterBottom>Melbourne is the coastal capital of the southeastern Australian state of Victoria. At the city's centre is the modern Federation Square development, with plazas, bars, and restaurants by the Yarra River. In the Southbank area, the Melbourne Arts Precinct is the site of Arts Centre Melbourne – a performing arts complex – and the National Gallery of Victoria, with Australian and indigenous art.</Typography>
            <img src={melbourn}/>

        </div>
    );
};

export default Introduction;