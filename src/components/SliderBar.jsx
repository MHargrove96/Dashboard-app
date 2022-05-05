import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}`;
}

export default function SliderBar(props) {
  const {
    state,
    setState
  } = props

  return (
    <Box sx={{ width: 220, margin: 'auto' }}>
      <Slider
        aria-label="Volume"
        value={state}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
        onChange={(e) => {setState(e.target.value)}}
      />
    </Box>
  );
}
