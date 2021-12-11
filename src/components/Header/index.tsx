import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ROUTE_PATHS } from '../../config/routes';
import { useNavigate } from "react-router-dom";

export default function Header() {
    let navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: '#7a23cc' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Button color="inherit" onClick={() => navigate(ROUTE_PATHS.CAMPAIGN)}>Campanhas</Button>
                        <Button color="inherit">Gerenciamento</Button>
                        <Button color="inherit">Black List</Button>
                        <Button color="inherit">Interface de Usúario</Button>
                    </Typography>
                    <Button color="inherit">Seu Nome</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}