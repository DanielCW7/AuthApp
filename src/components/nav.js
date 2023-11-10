import { Link } from "react-router-dom";
import LogoutButton from "./logout";
import { Container, AppBar, Menu, Stack, Toolbar, Button } from "@mui/material";


const Navbar = () => {
    return (
        <AppBar>
            <Container>
                <Toolbar>
                    <Stack direction="row" spacing={2}>
                        <Link to="/"><Button variant="outlined" sx={{ color: "white"}}> Home </Button></Link>
                        <Link to="/login"><Button variant="outlined" sx={{ color: "white"}}> Login </Button></Link>
                        <LogoutButton />                         
                    </Stack>
                      
                </Toolbar>            
            </Container>

        </AppBar>
    )
}

export default Navbar