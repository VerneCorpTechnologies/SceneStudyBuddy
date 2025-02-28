import React from 'react';
import './CallToAction.css';
import { Box, Button, Container } from '@mui/material';
import { SECONDARY_COLOR } from './../../colors';
import Typography from '@mui/material/Typography';
// import cta_steak from './../../assets/cta_steak.svg'
import robot from './../../assets/robot.jpg'
import cta_arrow from './../../assets/cta_arrow.svg'


const CallToAction = () => {
    return (
        <Container>
            <Box sx={{
                textAlign: 'center',
                borderRadius: 7,
                backgroundColor: SECONDARY_COLOR,
                mt: 30,
                mb: 20
            }}>

                <Box style={{
                    transform: 'translateY(-50%)'
                }}>
                    <img style={{
                        width: 132
                    }} src={robot} alt="" />
                </Box>

                <Typography sx={{
                    fontWeight: '700',
                    fontSize: '40px',
                    lineHeight: '48px'
                }}>
                    <span style={{
                        color: '#FFFFFF'
                    }}>Register</span> for Scene Study Buddy <br /> Start perfecting your craft today.
                </Typography>


                <Typography sx={{
                    fontWeight: '500',
                    fontSize: '16px',
                    lineHeight: '32px',
                    mt: 3
                }}>
                    Learn lines, film a self-tape or practice a scene that you love.
                </Typography>


                <Button variant="contained" sx={{
                    width: 200,
                    height: 50,
                    fontWeight: '700',
                    fontSize: '18px',
                    lineHeight: '32px',
                    background: '#FFFFFF',
                    color: '#1E1E1E',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '8px',
                    textTransform: 'capitalize',
                    '&:hover': {
                        background: '#FFFFFF',
                        color: '#1E1E1E'
                    },
                    mt: 6
                }}>Register now &nbsp;<img style={{ marginRight: -7 }} src={cta_arrow} alt="" /></Button>

                <Typography sx={{
                    fontWeight: '500',
                    fontSize: '16px',
                    lineHeight: '32px',
                    mt: 5,
                    pb: 10
                }}>
                    Join the THOUSANDS of actors who love Scene Study Buddy.
                </Typography>

            </Box>
        </Container>
    );
};

export default CallToAction;




