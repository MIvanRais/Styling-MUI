import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: "hsl(231, 65%, 58%)",
  color: "hsl(190, 100%, 95%)",
  textTransform: "capitalize",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  "&:hover": {
    backgroundColor: "hsl(231, 65%, 55%)",
  },
}));

export default PrimaryButton;
