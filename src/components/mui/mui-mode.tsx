import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

export default function MuiMode() {
  const theme = useTheme();
  return <Typography variant="h1">Current mode: {theme.palette.mode}</Typography>;
}