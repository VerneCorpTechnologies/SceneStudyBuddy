import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <>
            <Container sx={{
                mt: 8,
                mb: 10
            }}>
                <Grid 
                    container 
                    spacing={2} 
                    justifyContent="center"
                    alignItems="center"
                    style={{
                        minHeight: "100px", 
                        maxWidth: "750px",
                        margin: "0 auto"
                      }}
                >
                <Grid item xs={12} sm={8} md={4}>
                            <Typography 
                            sx={{
                                fontSize: '16px',
                                lineHeight: '32px',
                                fontWeight: '500',
                                textDecoration: 'underline',
                                textAlign: 'center'
                            }}>
                                Contact
                            </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8} md={4}>
                            <Typography 
                            sx={{
                                fontSize: '16px',
                                lineHeight: '32px',
                                fontWeight: '500',
                                textDecoration: 'underline',
                                textAlign: 'center'
                            }}>
                                Privacy Policy
                            </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8} md={4}>
                            <Typography 
                            sx={{
                                fontSize: '16px',
                                lineHeight: '32px',
                                fontWeight: '500',
                                textDecoration: 'underline',
                                textAlign: 'center'
                            }}>
                                Terms & Conditions
                                </Typography>
                    </Grid>
                </Grid>
                <Grid 
                    container 
                    spacing={2} 
                    justifyContent="center"
                    alignItems="center"
                    style={{ minHeight: "100px" }}
                >
                    <Grid item xs={12} sm={8} md={4}>
                            <Typography 
                            sx={{
                                fontSize: '16px',
                                lineHeight: '32px',
                                fontWeight: '500',
                                textAlign: 'center'
                            }}>
                                &copy;   {new Date().getFullYear()} SceneStudyBuddy&trade;. All rights reserved.
                            </Typography>
                    </Grid>
                </Grid>
            </Container >
        </>
    )
}

export default Footer




