
import { Divider, Typography } from "@mui/material";
import React from "react";
import melbourn from "../../graph/melb.jpg"
import NavHeader from "../header/NavHeader";

import { styled } from "@mui/material/styles";

const Image = styled("div")({
    width: "100%",
    height: "500px",
    marginBottom: "50px",
    backgroundImage: `url(${melbourn})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    fontSize: "180px",
    fontWeight: "900",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

const Content = styled("div")({
    width: "1000px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
});

const ContentTitle = styled(Typography)({
    fontSize: "40px",
    fontWeight: "150",
});

const ContentTxt = styled(Typography)({
    fontSize: "20px",
    fontWeight: "100",
});

const Introduction = () => {

    return (
        <div>
            <NavHeader page={"home"}/>

            <Divider/>
            <Image>
                Melbourne
            </Image> 

            <div style={{width: "100%",
                         display: "flex",
                         flexDirection: "column",
                         flexWrap: "wrap",
                         alignItems: "center",
                        }}>
                <Content>
                    <ContentTitle>Overview:</ContentTitle>
                    <ContentTxt>Melbourne is the coastal capital of the southeastern Australian state of Victoria. At the city's centre is the modern Federation Square development, with plazas, bars, and restaurants by the Yarra River. In the Southbank area, the Melbourne Arts Precinct is the site of Arts Centre Melbourne – a performing arts complex – and the National Gallery of Victoria, with Australian and indigenous art.</ContentTxt>  
                
                    <TagCloud 
                    style={{
                    fontFamily: 'sans-serif',
                    fontSize: 30,
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    color: () => randomColor(),
                    padding: 5
                    }}>
                    <div style={{fontSize: 50}}>react</div>
                    <div style={{color: 'green'}}>tag</div>
                    <div rotate={90}>cloud</div>
                    ...
                </TagCloud>
                </Content>
            </div>
        </div>
    );
};

export default Introduction;