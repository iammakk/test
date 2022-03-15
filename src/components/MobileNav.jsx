import React from 'react'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import "./MobileNav.css"
import logo from "../images/download.png";
import call from "../images/call.png";
import CallIcon from "@mui/icons-material/Call";

const MobileNav = () => {
    const [state, setState] = React.useState({
        right: false,
      });

      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

        <div className="nav__data">
        <div className="tabss">Home</div>
            <div className="tabss">About</div>
            <div className="tabss">LifeStyle</div>
            <div className="tabss">Services</div>
            <div className="tabss">Timeline</div>
            <div className="tabss">Awards</div>
            <div className="tabss">Media</div>
            <div className="tabss">Contact</div>
            <div className="mobile_white">
          <div className="call">
            <img src={call} className="callicon" />
          </div>
          <div className="info">
            <div className="first"> Available @ </div>
            <div className="second">123-456-67890</div>
          </div>
        </div>

            </div>
        </Box>
      );


  return (
    <div className="mobile__container">
         <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className="main">
          <div className="logo">
            <img className="" src={logo} alt="not found" />
          </div>
              <h1 onClick={toggleDrawer(anchor, true)}><MenuIcon className='burger_menu' /></h1>
              </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
        
        </div>
  )
}

export default MobileNav