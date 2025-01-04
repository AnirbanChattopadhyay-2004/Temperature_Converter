import { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import Header from "./components/Header";
import Temperature from "./components/Temperature.jsx";
import Viewer from "./components/viewer";






export default function App()
{
  const [deg,setDeg]=useState('')
  const [unit,setUnit]=useState('')
  return(
  <Box sx={{minHeight:'100vh',minWidth:'100vw',display:'flex'}}> 
  {/* In flex direction when it is row it means grid element are in the direction of row and break points are made according to it and in place of columns breakponts are made in direction of column  */}
    <Grid container sx={{height:'100'}} direction={{xs: "column-reverse", sm:"column-reverse", md: "row"}} >
    <Grid item xs={6}  >
    <Temperature setdegree={setDeg} setunit={setUnit}/>
    </Grid>
    
    <Grid item xs={6}>
    <Viewer degree={deg} unit={unit}/>
    </Grid>
    </Grid>
 </Box>
  )
}