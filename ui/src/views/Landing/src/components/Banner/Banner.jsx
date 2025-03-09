import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import './Banner.css';
import { Button, Grid2, Typography } from '@mui/material';
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from './../../colors';
import robot from './../../assets/robot.jpg'
import banner_arrow from './../../assets/banner_arrow.svg'

const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: 15 }}>
            <Grid2 container
                direction="row"
                justifyContent="center"
                alignItems="center" spacing={1}>
                <Grid2 item sm={10} md={8} lg={7} display="flex" justifyContent="center">
                    <img style={{
                        width: '50%',
                    }} src={robot} alt="" />
                </Grid2>
                <Grid2 item sm={10} md={5} lg={5} alignSelf="flex-start" sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}>
                    <Typography sx={{
                        fontWeight: '600',
                        fontSize: '20px',
                        lineHeight: '32px',
                        textAlign: 'justify',
                        maxWidth: '472px',
                    }}>
                        An AI powered scene study partner to help you practice scenes, self-tape for auditions and perfect your craft.
                    </Typography>
                    <Typography sx={{
                        fontWeight: '600',
                        fontSize: '20px',
                        lineHeight: '32px',
                        textAlign: 'justify',
                        mt: 2
                    }}>
                    </Typography>
                    <Box>
                        <Button variant="contained" className='banner_button' href='/register/'
                        sx={{
                            width: '180px',
                            height: '48px',
                            padding: '8px 30px 8px 6px',
                            borderRadius: '8px',
                            backgroundColor: PRIMARY_COLOR,
                            color: '#1E1E1E',
                            '&:hover': {
                                backgroundColor: SECONDARY_COLOR,
                                paddingRight: '-5px',
                            },
                            transition: '0.2s linear',
                            transitionDelay: '0.3s',
                            mt: 2
                        }} disableElevation>
                            <Typography
                            sx={{
                                textTransform: 'capitalize',
                                fontSize: '20px',
                                lineHeight: '32px',
                                fontWeight: '700',
                                align: 'justify',
                            }}>
                                Register Now
                            </Typography>
                        </Button>
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default Banner;






