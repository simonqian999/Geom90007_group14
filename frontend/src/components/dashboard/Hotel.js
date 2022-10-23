import { Link, Typography } from '@mui/material';
import React, { Component } from 'react';
import tableau from 'tableau-api';
import NavHeader from '../header/NavHeader';
 
 
class Hotel extends Component {
  componentDidMount() {
    this.initViz()
  }
 
 
  initViz() {
    const vizUrl = 'https://public.tableau.com/views/Hotel_16652553347770/Dashboard2?:language=en-US&:display_count=n&:origin=viz_share_link';
    const vizContainer = this.vizContainer;
    let viz = new window.tableau.Viz(vizContainer, vizUrl)
  }
 
  //render the hotel tableau and the header
  render() {
    return (
    <>
    <NavHeader page={"hotel"}/>
        <div style={{width:'100%', height:"770px"}} ref={(div) => { this.vizContainer = div }}>
        </div>
        <Typography style={{marginTop:"20px"}}>
            Additional information: 
            <Link
                href="/report"
                target="_blank"
                rel="noreferrer"
                variant="body1"
                sx={{ display: "inline-block", fontWeight: "bold" }}
            >
            Hotel Analytics in TripAdvisor
            </Link>
        </Typography>
    </>
    )
  }
}
 
 
export default Hotel;
