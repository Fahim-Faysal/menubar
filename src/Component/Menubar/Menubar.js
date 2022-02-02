import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MdNotificationAdd } from "react-icons/md";
import { GrChat } from "react-icons/gr";
import { RiTeamLine } from "react-icons/ri";
import { BsCalendarCheck, BsThreeDots } from "react-icons/bs";
import { FiPhoneCall, FiHelpCircle } from "react-icons/fi";
import { AiOutlineFileText, AiOutlineAppstore } from "react-icons/ai";
import { Link, Outlet } from 'react-router-dom';
import { Button } from '@mui/material';


const drawerWidth = 120;

const Menubar = (props) => {
      const { window } = props;
      const [mobileOpen, setMobileOpen] = React.useState(false);
      const [menu, setMenu] = useState(false)

      const handleDrawerToggle = () => {
            setMobileOpen(!mobileOpen);
      };

      const drawer = (
            <div style={{ height: '1000px' }}>
                  <div>
                        <Toolbar />
                        <Link style={{ textDecoration: 'none' }} to='activity'>
                              <MdNotificationAdd style={{ fontSize: '20px' }} />
                              <p>Activity</p>
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to='chat'>
                              <GrChat style={{ fontSize: '20px' }} />
                              <p>Chat</p>
                        </Link>

                        <Link style={{ textDecoration: 'none' }} to='teams'>
                              <RiTeamLine style={{ fontSize: '20px' }} />
                              <p>Teams</p>
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to='calender'>
                              <BsCalendarCheck style={{ fontSize: '20px' }} />
                              <p>Calender</p>
                        </Link>

                        <br />
                        {menu &&
                              <Box>
                                    <Link style={{ textDecoration: 'none' }} to='calls'>
                                          <FiPhoneCall style={{ fontSize: '20px' }} />
                                          <p>Calls</p>
                                    </Link>
                                    <Link style={{ textDecoration: 'none' }} to='files'>
                                          <AiOutlineFileText style={{ fontSize: '20px' }} />
                                          <p>Files</p>
                                    </Link>
                              </Box>
                        }

                        <Button onClick={() => setMenu(true)} style={{ textDecoration: 'none' }} to='files'>
                              <BsThreeDots style={{ fontSize: '20px' }} />
                        </Button>
                  </div>
                  <div style={{ marginTop: '100px' }}>
                        <Link style={{ marginTop: '800px', textDecoration: 'none' }} to='app'>
                              <AiOutlineAppstore style={{ fontSize: '20px' }} />
                              <p>App</p>
                        </Link>
                        <Link style={{ marginTop: '800px', textDecoration: 'none' }} to='help'>
                              <FiHelpCircle style={{ fontSize: '20px' }} />
                              <p>Help</p>
                        </Link>

                  </div>
            </div>
      );

      const container = window !== undefined ? () => window().document.body : undefined;

      return (
            <Box sx={{ display: 'flex' }}>
                  <CssBaseline />
                  <AppBar
                        position="fixed"
                        sx={{
                              width: { sm: `calc(100% - ${drawerWidth}px)` },
                              ml: { sm: `${drawerWidth}px` },
                        }}
                  >
                        <Toolbar style={{ backgroundColor: 'whitesmoke' }}>
                              <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    sx={{ mr: 2, display: { sm: 'none' } }}
                              >
                                    <MenuIcon />
                              </IconButton>
                              <Typography style={{ color: 'navy', margin: 'auto' }} variant="h4" noWrap component="div">
                                    Microsoft Teams
                              </Typography>
                        </Toolbar>
                  </AppBar>
                  <Box
                        component="nav"
                        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                        aria-label="mailbox folders"
                  >
                        <Drawer
                              container={container}
                              variant="temporary"
                              open={mobileOpen}
                              onClose={handleDrawerToggle}
                              ModalProps={{
                                    keepMounted: true,
                              }}
                              sx={{
                                    display: { xs: 'block', sm: 'none' },
                                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                              }}
                        >
                              {drawer}
                        </Drawer>
                        <Drawer
                              variant="permanent"
                              sx={{
                                    display: { xs: 'none', sm: 'block' },
                                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                              }}
                              open
                        >
                              {drawer}
                        </Drawer>
                  </Box>
                  <Box
                        component="main"
                        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                  >
                        <Toolbar />
                        <Typography paragraph>
                              <Outlet />
                        </Typography>

                  </Box>
            </Box>
      );
};


export default Menubar;