import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./OverrideStyle.css";

function OverrideStyle() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        defaultValue={50}
        aria-label="Default"
        valueLabelDisplay="auto"
        sx={{
          color: "success.main",
          '&:hover':{
            color: 'hsl(123, 46%, 38%)'
          },
          "& .MuiSlider-thumb": {
            borderRadius: "1px",
            '&:hover': {
              boxShadow: '0px 0px 0px 8px hsl(123, 46%, 34%, 0.5)', 
            }
          },
        }}
      />

      <Button variant="contained" className="Button" sx={{ marginRight: 2 }}>
      {/* <Button variant="contained" className="Button" disabled sx={{ marginRight: 2 }}> */}
        Button
      </Button>
    </Box>
  );
}

export default OverrideStyle;
