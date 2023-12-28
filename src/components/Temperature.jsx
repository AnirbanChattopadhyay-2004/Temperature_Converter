import { useState } from "react";
import {Container,Box,Typography} from "@mui/material"
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./temp.css";
export default function temperature({setdegree,setunit})
{
    
    const [initial,setInitial]=useState('');
    const [final,setFinal]=useState('');
    // const[convdig,setConvdig]=useState('');
    const [temp,setTemp]=useState('');
    const [val, setVal] = React.useState('');
    const [value,setValue]=React.useState('');
    




    function handlechange(e)
    {
        let degree;
       let tempe=e.target.value;
        switch(initial){
            case 'c':
                if(final=='c')
                    degree=(Number)(tempe);
                else if(final=='k')
                    degree=(Number)(tempe)+273.15;
                 else
                    degree=((Number)(tempe)*1.8 + 32)
                break;
             case 'f':
                if(final=='f'){
                    degree=(Number)(tempe);
                    // console.log(degree)
                }
                    else if(final=='c')
                    degree=((Number)(tempe)-32)*(5/9);
                    else
                    
                        degree=((Number)(tempe)-32)*(5/9)+273.15

                    
                    break;
            case 'k':
                if(final=='k')
                degree=tempe;
                else if(final=='c')
                degree=(Number)(tempe)-273.15;
                else
                degree=((Number)(tempe)-273.15)*1.8 + 32

            break;

        }
        //alert(degree)
        if(final=='k' && degree<0)
        degree=0;
        if(final=='')
        degree=0
        setTemp(tempe);

        // setConvdig(degree.toFixed(3));
        
        setdegree( degree.toFixed(3))
    }
    return (
        
        <Container sx={{height:"100%",display:"flex",flexDirection:"column",justifyContent:'space-evenly',alignItems:'center'}}>
       
        <Typography sx={{typography:{xs:'h4',sm:'h4',md:'h2'}  }} >Temperture Converter</Typography> 
        
         <Box sx={{display:'flex' ,alignItems:'center'}}>   
        <input type="number" className="input" placeholder="temperature..." value={temp} onChange={handlechange}/>
        


  <FormControl sx={{ m: 1, minWidth: 85 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Initial</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={val}
          onChange={(e)=>{
            setInitial(e.target.value)
            setVal(e.target.value)
        }}
          autoWidth
          label="Temp"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'c'}>C</MenuItem>
          <MenuItem value={'f'}>F</MenuItem>
          <MenuItem value={'k'}>K</MenuItem>
        </Select>
      </FormControl>
  

</Box>
      
        <Typography sx={{typography:{xs:'h4',sm:'h4',md:'h2'}  }}>Convert in</Typography>
       
        <Box>
        


<FormControl sx={{ m: 1, minWidth: 85 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Final</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={value}
          onChange={(e)=>{
            setunit(e.target.value)
            setFinal(e.target.value)
            setValue(e.target.value)
        }}
          autoWidth
          label="Temp"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'c'}>C</MenuItem>
          <MenuItem value={'f'}>F</MenuItem>
          <MenuItem value={'k'}>K</MenuItem>
        </Select>
      </FormControl>

       
    </Box>
   
   </Container> 



    )
}