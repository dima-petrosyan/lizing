import { useState } from 'react' 
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function InputSlider(props) {

    const handleSliderChange = (event, newValue) => {
        const value = event.target.value === '' ? '' : Number(event.target.value)
        props.onValueChange(value)
    }

    return (
        <Box fullwidth m="-15px" pl="30px" pr="30px"> 
            <Slider
                value={props.value}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
                sx={{color: "#FF9514"}}
                size="small"
                min={props.min}
                step={props.step}
                max={props.max}
            />
        </Box>
    )
}

export default InputSlider