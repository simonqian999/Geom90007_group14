
import { Divider, Typography } from "@mui/material";
import React from "react";
import { TagCloud } from 'react-tagcloud'
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
    width: "1100px",
    padding: "50px",
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
    marginBottom: "40px"
});

const Cloud = styled(TagCloud)({
    padding: "4px",
    justifyContent: "center",
    marginBottom:"40px",
    
});

const VideoContainer = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
})

const Video = styled("div")({
    display: "flex",
    margin: "30px",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
})

const data = [
    { value: 'Bargoonga Nganjin North Fitzroy Library', count: 25, http:"https://library.yarracity.vic.gov.au/"  },
    { value: 'State Library of Victoria', count: 30, http:"https://www.slv.vic.gov.au/"  },
    { value: 'CBD', count: 28, http:"https://www.travelvictoria.com.au/melbourne/" },
    { value: 'Japanese restaurant', count: 25, http:"https://www.timeout.com/melbourne/restaurants/the-best-japanese-restaurants-in-melbourne"},
    { value: 'National gallery', count: 33, http:"https://www.ngv.vic.gov.au/"  },
    { value: 'Queen Victoria Market', count: 50, http:"https://qvm.com.au/"  },
    { value: 'St Francis Church', count: 20, http:"http://www.stfrancismelbourne.com/"  },
    { value: 'Melbourne University', count: 40, http:"https://www.unimelb.edu.au/"  },
    { value: 'Royal Exhibition Building', count: 60, http:"https://museumsvictoria.com.au/reb/"  },
    { value: 'Melbourne Zoo', count: 25, http:"https://www.zoo.org.au/melbourne/"  },
    { value: 'William Street', count: 33, http:"https://en.wikipedia.org/wiki/William_Street,_Melbourne"  },
    { value: 'Coles Book Arcade', count: 20, http:"https://www.theguardian.com/books/2020/sep/29/coles-book-arcade-was-melbournes-literary-funhouse-but-its-creator-was-truly-inspirational#:~:text=Melbourne%20history%20buffs%20might,Mall%20from%201883%20to%201929."  },
    { value: 'Flinders Street Railway Station', count: 38, http:"https://en.wikipedia.org/wiki/Flinders_Street_railway_station"  },
    { value: 'Melbourne Mint', count: 30, http:"https://melbournemint.com.au/"  },
    { value: 'Collins St', count: 28, http:"https://www.visitvictoria.com/regions/melbourne/destinations/collins-street-and-little-collins-street"  },
    { value: 'St Kilda Road', count: 31, http:"https://www.visitvictoria.com/regions/melbourne/destinations/st-kilda-road"  },
    { value: 'Melbourne Town Hall', count: 25, http:"https://whatson.melbourne.vic.gov.au/things-to-do/melbourne-town-hall"  },
    { value: 'Fitzroy', count: 25, http:"https://www.visitvictoria.com/regions/melbourne/destinations/fitzroy"  },
    { value: 'Balaclava and St Kilda East', count: 25, http:"https://www.visitvictoria.com/regions/melbourne/destinations/balaclava"  },
    { value: 'The Melbourne Athenaeum', count: 33, http:"https://www.melbourneathenaeum.org.au/"  },
    { value: 'Swanston Street', count: 18, http:"https://en.wikipedia.org/wiki/Swanston_Street"  },
    { value: 'Oriental Bank', count: 20, http:"https://en.wikipedia.org/wiki/Oriental_Bank_Corporation"  },
  ]

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
                <Content sx={{ borderLeft: 1, borderRight: 1 }}>
                    <ContentTitle>Overview:</ContentTitle>
                    <ContentTxt>Melbourne is the coastal capital of the southeastern Australian state of Victoria. At the city's centre is the modern Federation Square development, with plazas, bars, and restaurants by the Yarra River. In the Southbank area, the Melbourne Arts Precinct is the site of Arts Centre Melbourne – a performing arts complex – and the National Gallery of Victoria, with Australian and indigenous art.</ContentTxt>  
                
                    
                    <Cloud 
                    sx={{ border: 3 }}
                    minSize={10}
                    maxSize={80}
                    tags={data}
                    onClick={tag => window.open(tag.http, '_blank')}
                    />

                    <ContentTitle>Videos:</ContentTitle>
                    <VideoContainer>
                        <Video>
                            <iframe
                            width="426"
                            height="240"
                            src="https://youtube.com/embed/KS8QAYiHPS4"
                            allowFullScreen
                            />
                        </Video>
                    
                        <Video>
                            <iframe
                            width="426"
                            height="240"
                            src="https://youtube.com/embed/RLOsQViPLhw"
                            allowFullScreen
                            />
                        </Video>
                    </VideoContainer>
                    

                </Content>
            </div>

            <footer style={{backgroundColor:"black", height:"40px"}}>
                <center>
                    <Typography style={{color:"white"}}>@Discover Melbourne</Typography>
                </center>
            </footer>
        </div>
    );
};

export default Introduction;