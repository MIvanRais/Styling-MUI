import { Button, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
    palette:{
        success:{
            main: 'hsl(348, 72%, 41%)' // override
        }, 
        unapproved: { // custom property
            main: 'hsl(48, 89%, 50%)',
            dark: 'hsl(48, 89%, 40%)',
        }
    }
})

export default function ManageTheme() {
    return(
        <ThemeProvider theme={theme}>
            <Button variant="contained" color="success" sx={{ marginRight: 2 }}>Contained</Button>
            <Button variant="contained" color="unapproved">Contained</Button>
        </ThemeProvider>
    )
}