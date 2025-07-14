'use client';
import {
  Box,
  Button,
  Link,
  Drawer as MuiDrawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { Menu as MenuIcon, Instagram, LinkedIn } from '@mui/icons-material';
import { useState } from 'react';

export const Drawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
      <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
        <MenuIcon />
      </IconButton>
      <MuiDrawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <Box
          sx={{ width: 250, display: 'flex', flexDirection: 'column', height: '100%' }}
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
          <List sx={{ mt: 5 }}>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/#cases">
                <ListItemText
                  primary="WORKS"
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: 18,
                      fontWeight: 400,
                      textTransform: 'uppercase',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/#services">
                <ListItemText
                  primary="PROJECT CREATION"
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: 18,
                      fontWeight: 400,
                      textTransform: 'uppercase',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/#steps">
                <ListItemText
                  primary="TECHNOLOGIES"
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: 18,
                      fontWeight: 400,
                      textTransform: 'uppercase',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <Button component="a" href="/contact" fullWidth>
                CONTACT US
              </Button>
            </ListItem>
          </List>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
            <Link
              href="https://www.instagram.com/concept44.dev"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              sx={{ color: 'inherit' }}
            >
              <Instagram />
            </Link>
            <Link
              href="https://www.linkedin.com/company/concept44"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              sx={{ color: 'inherit' }}
            >
              <LinkedIn />
            </Link>
          </Box>
        </Box>
      </MuiDrawer>
    </Box>
  );
};
