/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

export default function EmotionSlider() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        defaultValue={30}
        css={css`
          color: hsl(177, 70%, 41%);

          :hover {
            color: hsl(177, 70%, 36%);
          }

          & .MuiSlider-thumb {
            &:hover {
              box-shadow: 0px 0px 0px 8px hsl(177, 70%, 36%, 0.5);
            }
          }
        `}
      />
    </Box>
  );
}
