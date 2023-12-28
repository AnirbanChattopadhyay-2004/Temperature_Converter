import {Box,Typography} from "@mui/material"
export default function Viewer({unit,degree}){
    return (
        <Box sx={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'	#088F8F'}}>
        {degree && <Typography  sx={{color:'aliceblue',typography:{xs:'h3',sm:'h3',md:'h1'}}}>{degree}<sup>°{unit.toUpperCase()}</sup></Typography>}
        </Box>
    );
}
