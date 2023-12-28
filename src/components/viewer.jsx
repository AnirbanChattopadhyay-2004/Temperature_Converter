import {Box,Typography} from "@mui/material"
export default function Viewer({unit,degree}){
    return (
        <Box sx={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'	#088F8F'}}>
        {degree && <Typography variant="h2" sx={{color:'aliceblue'}}>{degree}<sup>°{unit.toUpperCase()}</sup></Typography>}
        </Box>
    );
}
