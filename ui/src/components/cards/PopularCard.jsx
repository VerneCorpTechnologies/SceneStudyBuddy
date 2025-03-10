import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Button, CardActions, CardContent, Divider, Grid2, Menu, MenuItem, Typography } from '@mui/material';

// project imports
import MainCard from './MainCard';
import { gridSpacing } from '../../store/constant';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const PopularCard = ({ isLoading }) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
        <MainCard content={false}>
          <CardContent>
            <Grid2 container spacing={gridSpacing}>
              <Grid2 item xs={12}>
                <Grid2 container alignContent="center" justifyContent="space-between">
                  <Grid2 item>
                    <Typography variant="h4">Budget</Typography>
                  </Grid2>
                  <Grid2 item>
                    <MoreHorizOutlinedIcon
                      fontSize="small"
                      sx={{
                        color: theme.palette.primary[200],
                        cursor: 'pointer'
                      }}
                      aria-controls="menu-popular-card"
                      aria-haspopup="true"
                      onClick={handleClick}
                    />
                    <Menu
                      id="menu-popular-card"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      variant="selectedMenu"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                      }}
                    >
                      <MenuItem onClick={handleClose}> Today</MenuItem>
                      <MenuItem onClick={handleClose}> This Month</MenuItem>
                      <MenuItem onClick={handleClose}> This Year </MenuItem>
                    </Menu>
                  </Grid2>
                </Grid2>
              </Grid2>
              <Grid2 item xs={12} sx={{ pt: '16px !important' }}>
              </Grid2>
              <Grid2 item xs={12}>
                <Grid2 container direction="column">
                  <Grid2 item>
                    <Grid2 container alignItems="center" justifyContent="space-between">
                      <Grid2 item>
                        <Typography variant="subtitle1" color="inherit">
                          Food
                        </Typography>
                      </Grid2>
                      <Grid2 item>
                        <Grid2 container alignItems="center" justifyContent="space-between">
                          <Grid2 item>
                            <Typography variant="subtitle1" color="inherit">
                              £600.00
                            </Typography>
                          </Grid2>
                          <Grid2 item>
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: theme.palette.success.light,
                                color: theme.palette.success.dark,
                                ml: 2
                              }}
                            >
                              <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar>
                          </Grid2>
                        </Grid2>
                      </Grid2>
                    </Grid2>
                  </Grid2>
                  <Grid2 item>
                    <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                      10% under
                    </Typography>
                  </Grid2>
                </Grid2>
                <Divider sx={{ my: 1.5 }} />
                <Grid2 container direction="column">
                  <Grid2 item>
                    <Grid2 container alignItems="center" justifyContent="space-between">
                      <Grid2 item>
                        <Typography variant="subtitle1" color="inherit">
                          Home
                        </Typography>
                      </Grid2>
                      <Grid2 item>
                        <Grid2 container alignItems="center" justifyContent="space-between">
                          <Grid2 item>
                            <Typography variant="subtitle1" color="inherit">
                              £100.00
                            </Typography>
                          </Grid2>
                          <Grid2 item>
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: theme.palette.orange.light,
                                color: theme.palette.orange.dark,
                                marginLeft: 1.875
                              }}
                            >
                              <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar>
                          </Grid2>
                        </Grid2>
                      </Grid2>
                    </Grid2>
                  </Grid2>
                  <Grid2 item>
                    <Typography variant="subtitle2" sx={{ color: theme.palette.orange.dark }}>
                      10% over
                    </Typography>
                  </Grid2>
                </Grid2>
                <Divider sx={{ my: 1.5 }} />
                <Grid2 container direction="column">
                  <Grid2 item>
                    <Grid2 container alignItems="center" justifyContent="space-between">
                      <Grid2 item>
                        <Typography variant="subtitle1" color="inherit">
                          Petrol
                        </Typography>
                      </Grid2>
                      <Grid2 item>
                        <Grid2 container alignItems="center" justifyContent="space-between">
                          <Grid2 item>
                            <Typography variant="subtitle1" color="inherit">
                              £160.00
                            </Typography>
                          </Grid2>
                          <Grid2 item>
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: theme.palette.success.light,
                                color: theme.palette.success.dark,
                                ml: 2
                              }}
                            >
                              <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar>
                          </Grid2>
                        </Grid2>
                      </Grid2>
                    </Grid2>
                  </Grid2>
                  <Grid2 item>
                    <Typography variant="subtitle2" sx={{ color: theme.palette.success.dark }}>
                      10% under
                    </Typography>
                  </Grid2>
                </Grid2>
                <Divider sx={{ my: 1.5 }} />
                <Grid2 container direction="column">
                  <Grid2 item>
                    <Grid2 container alignItems="center" justifyContent="space-between">
                      <Grid2 item>
                        <Typography variant="subtitle1" color="inherit">
                          Home
                        </Typography>
                      </Grid2>
                      <Grid2 item>
                        <Grid2 container alignItems="center" justifyContent="space-between">
                          <Grid2 item>
                            <Typography variant="subtitle1" color="inherit">
                              £100.00
                            </Typography>
                          </Grid2>
                          <Grid2 item>
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: theme.palette.orange.light,
                                color: theme.palette.orange.dark,
                                ml: 2
                              }}
                            >
                              <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar>
                          </Grid2>
                        </Grid2>
                      </Grid2>
                    </Grid2>
                  </Grid2>
                  <Grid2 item>
                    <Typography variant="subtitle2" sx={{ color: theme.palette.orange.dark }}>
                      10% over
                    </Typography>
                  </Grid2>
                </Grid2>
                <Divider sx={{ my: 1.5 }} />
                <Grid2 container direction="column">
                  <Grid2 item>
                    <Grid2 container alignItems="center" justifyContent="space-between">
                      <Grid2 item>
                        <Typography variant="subtitle1" color="inherit">
                          Social
                        </Typography>
                      </Grid2>
                      <Grid2 item>
                        <Grid2 container alignItems="center" justifyContent="space-between">
                          <Grid2 item>
                            <Typography variant="subtitle1" color="inherit">
                              £400.00
                            </Typography>
                          </Grid2>
                          <Grid2 item>
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: theme.palette.orange.light,
                                color: theme.palette.orange.dark,
                                ml: 2
                              }}
                            >
                              <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                            </Avatar>
                          </Grid2>
                        </Grid2>
                      </Grid2>
                    </Grid2>
                  </Grid2>
                  <Grid2 item>
                    <Typography variant="subtitle2" sx={{ color: theme.palette.orange.dark }}>
                      10% over
                    </Typography>
                  </Grid2>
                </Grid2>
              </Grid2>
            </Grid2>
          </CardContent>
          <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
            <Button size="small" disableElevation>
              View All
              <ChevronRightOutlinedIcon />
            </Button>
          </CardActions>
        </MainCard>
  );
};

PopularCard.propTypes = {
  isLoading: PropTypes.bool
};

export default PopularCard;
