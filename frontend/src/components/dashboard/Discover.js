import React, { Component } from 'react';
import tableau from 'tableau-api';
import NavHeader from '../header/NavHeader';
 
 
class Discover extends Component {
  componentDidMount() {
    this.initViz()
  }
 
 
  initViz() {
    const vizUrl = 'https://public.tableau.com/views/discover_16663954547440/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link';
    const vizContainer = this.vizContainer;
    let viz = new window.tableau.Viz(vizContainer, vizUrl)
  }
 
 //render the attraction tableau and the header
  render() {
    return (
      <>
      <NavHeader page={"discover"}/>
      <div style={{width:'100%', height:"1000px"}} ref={(div) => { this.vizContainer = div }}>
      </div>
      </>
    )
  }
}
 
 
export default Discover;