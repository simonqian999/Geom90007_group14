import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import threeD from "../../graph/3D.png"
import correlation from "../../graph/corre.png"
import density from "../../graph/Price Density.png"
import facilityRatio from "../../graph/Facility ratio.png"
import modelSum from "../../graph/sum2.png"
import modelSummary from "../../graph/model summary.png"
import modelDiag from "../../graph/model diagnosis.png"
import modelVisual from "../../graph/model visual.png"

export const ReviewSideBlank = styled("div")({
    flex: "0 1 auto",
    minWidth: 400,
    background: "lightblue",
    display: "flex",
    justifyContent: "center",
});

// contain text and png graph which is plot by r
export default function Report() {

    return(
        <div style={{ display: "flex", flexDirection: "row" }}>
        <ReviewSideBlank />
        
        <div style={{ flex: "1 1 auto", margin:"10px" }}>
        <center>
            <Typography variant="h3" gutterBottom>Hotel Analytics in TripAdvisor</Typography>
        </center>

        <Typography gutterBottom>We tried to explore Melbourne hotels using the hotel information we grabbed from tripadviser on October 5th.</Typography>
        <Typography gutterBottom>85 hotels are included in this dataset, and the star rating of the hotel ranges from 2 to 5 stars. We obtained the hotel's price, rating, facilities, services, etc., and try to use this dataset to explore the difference between these features. We have done a lot of visualizations on this dataset to allow visitors to make more scientific decisions. Some of the graphs in this report are intuitive and easy to understand for those without a statistical background. However, some regression analysis is also added at the same time. This part of the understanding may require some statistical knowledge background. This part of the content allows users to explore the data set more deeply.</Typography>

        <img src={correlation}/>

        <Typography gutterBottom>First of all, we try to analyze the correlation between the features. From Figure 1, we can find that the four features are positively correlated as a whole. At the same time, the first three features all illustrate the advantages of the hotel's geographical location from a certain point of view, that is, whether it is good for walker,  number of surrounded restaurants and attractive places. We can roughly draw a conclusion that the price of a hotel has a significant correlation with the location of the hotel.</Typography>
        
        <img src={density}/>

        <Typography gutterBottom>The following picture shows the distribution of hotel prices. We can find that the overall distribution is normal, with one outlier, the quality hotel carlton, which is significantly more expensive than other places.</Typography>
        
        <img src={facilityRatio}/>

        <Typography gutterBottom>Above figure shows the completeness of facilities in hotels with different star ratings. We can notice that the higher the star rating, the more complete the facilities. In addition, we can find some interesting things. For example, it's easy to find a gym in your hotel in Melbourne, but if you need an airport transfer, your options will be very limited. If you need a swimming pool, then you most likely need to go to a 5 star hotel, most other hotels do not have a swimming pool.</Typography>

        <img style={{ marginTop:"20px" }} src={modelSum}/>

        <Typography gutterBottom>Now we take a linear regression approach and explore what affects the price of a hotel. We first put all the features into the model, we can find that the effect of the model is very poor, most of the features are not significant (p{">"}0.05) This is due to the high collinearity of these features, many features are strongly correlated, we use  step function filters the features and obtains the second model.</Typography>

        <img style={{ marginTop:"20px" }} src={modelSummary}/>

        <Typography gutterBottom>We can find that after filtering, we get a model that contains three characteristics of hotel star rating, location and "Great for walkers", which is consistent with our intuition, hotel star rating represents the overall service quality of the hotel, and the other two tend to Means the hotel's transportation convenience.</Typography>

        <img src={modelDiag}/>

        <Typography gutterBottom>Then we do model diagnostics, we found several outliers, Quest NewQuay, Docklands, W Melbourne, Quality Hotel Carlton.</Typography>

        <img src={modelVisual}/>

        <img src={threeD}/>

        <Typography gutterBottom>We try to visualize the model obtained above. We can clearly find that the star rating of the hotel has the greatest influence. In the case of the same star rating, the geographical location is the decisive factor, so we recommend that tourists choose based on the star rating first. The suitable hotel range, and then choose the specific hotel according to the geographical location, so that you can often get a better travel experience</Typography>
        </div>

        <ReviewSideBlank />
        </div>
    )
}