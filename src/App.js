import React,{useState,MouseEvent} from 'react';
import {AppBar, Box, IconButton, Toolbar, Typography,Menu,MenuList,MenuItem} from '@mui/material'
import './App.css';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

const pages=['Home','Settings','About','Login']
function App() {
  const [anchorNav, setAnchorNav] = useState(null);

  const openMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };
  
  const closeMenu = () => {
    setAnchorNav(null);
  };
  
  return (
    <AppBar position='static'>
      <Toolbar>

        <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{display:{xs:'none',md:'flex'}}}>
          <LocalLibraryIcon/>
        </IconButton>
        <Typography variant='h6' component='div' sx={{flexGrow:1,display:{xs:'none',md:'flex'}}}>Management</Typography>
        <Box sx={{display:{xs:'none',md:'flex'}}}>
          {/* <Button color='inherit'>Home</Button>
          <Button color='inherit'>Settings</Button>
          <Button color='inherit'>About</Button> */}
          {pages.map((page)=>(
            <Button color='inherit'>{page}</Button>
          ))}
        </Box>
        <Menu open={Boolean(anchorNav)} onClose={closeMenu} sx={{display:{xs:'flex',md:'none'}}}>
          <MenuList>
            {/* <MenuItem>Home</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>About</MenuItem> */}
            {pages.map(page=>(
              <MenuItem>{page}</MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Box sx={{display:{xs:'flex',md:'none'}}} >
          <IconButton size='large' edge='start' color='inherit' onClick={openMenu}>
            <MenuIcon/>

          </IconButton>
          </Box>
          <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{display:{xs:'flex',md:'none'}}}>
          <LocalLibraryIcon/>
        </IconButton>
        <Typography variant='h6' component='div' sx={{flexGrow:1,display:{xs:'flex',md:'none'}}}>Management</Typography>

        
      </Toolbar>

    </AppBar>
  );
}

export default App;
