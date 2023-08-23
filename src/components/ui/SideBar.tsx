import { Drawer, Box, Typography, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import { useContext } from 'react';
import { NavContext } from '@/context/Nav/NavContext';
import { useRouter } from 'next/router';






const SideBar = () => {
    const { sideMenuOpen, closeSideMenu } = useContext(NavContext)
    const router = useRouter()

    const NavigateTo = (url: string) => {
        router.push(url)
        closeSideMenu()
    }

    return (
        <Drawer
            anchor='left'
            open={sideMenuOpen}
            onClose={closeSideMenu}
        >
            <Box sx={{ width: 250 }}>

            </Box>
            <Box sx={{ pl: 2, backgroundColor: "secondary.main" }}>
                <Typography variant='h4' sx={{ color: "primary.main" }}> Menu</Typography>
            </Box>
            <List sx={{ backgroundColor: "secondary.main" }}>
                <ListItem component={"button"}
                    className='btn-menu'
                    onClick={() => NavigateTo("/")}
                    sx={{
                        backgroundColor: "inherit",
                        border: "none",
                        cursor: "pointer",
                        color: "primary.main"
                    }}>
                    <ListItemText>Página principal</ListItemText>
                </ListItem>
                <Divider />
                <ListItem component={"button"}
                    className='btn-menu'
                    onClick={() => NavigateTo("/categorias/coronas")}
                    sx={{
                        backgroundColor: "inherit",
                        border: "none",
                        cursor: "pointer",
                        color: "primary.main"
                    }}>
                    <ListItemText>Coronas</ListItemText>
                </ListItem>
                <Divider />
                <ListItem component={"button"}
                    className='btn-menu'
                    onClick={() => NavigateTo("/categorias/bouquets")}
                    sx={{
                        backgroundColor: "inherit",
                        border: "none",
                        cursor: "pointer",
                        color: "primary.main"
                    }}>
                    <ListItemText>Bouquets</ListItemText>
                </ListItem>
                <Divider />
                <ListItem component={"button"}
                    className='btn-menu'
                    onClick={() => NavigateTo("/categorias/arreglos")}
                    sx={{
                        backgroundColor: "inherit",
                        border: "none",
                        cursor: "pointer",
                        color: "primary.main"
                    }}>
                    <ListItemText>Otros Arreglos</ListItemText>
                </ListItem>
            <Divider />
            </List>
        </Drawer>
    )
}

export default SideBar