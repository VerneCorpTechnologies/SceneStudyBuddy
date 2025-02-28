import { Box, Container, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import Quotation from '../../assets/Quotation.svg'
import './Testimonial.css'
// import user_one from '../../assets/user_one.svg'
// import user_two from '../../assets/user_two.svg'
// import user_three from '../../assets/user_three.svg'
// import user_four from '../../assets/user_four.svg'
import { TERTIARY_COLOR } from './../../colors';



const Testimonial = () => {
    return (
        <>
            <Container sx={{
                mt: 16
            }}>
                <Typography sx={{
                    py: 5,
                    mb: 8,
                    fontSize: '40px',
                    fontWeight: 700,
                    color: '#1E1E1E',
                    lineHeight: '49px',
                    textAlign: 'center'
                }}>
                    See Why Actors Love Scene Study Buddy
                </Typography>
                <Box sx={{
                }}>
                    <IconButton sx={{
                        position: 'absolute',
                        //    float:'right',
                        left: '130px',
                        marginTop: '-100px',
                        zIndex: -1



                    }} >
                        <img src={Quotation} alt="quotationIcon" />
                    </IconButton>
                    <Typography sx={{
                        fontSize: '40px',
                        fontWeight: 400,
                        lineHeight: '49px',
                        textAlign: 'justify'
                    }}>
                        Actors love Scene Study Buddy because it’s an AI-powered scene reader that helps them practice by reading the Other characters' lines, making rehearsal more dynamic and convenient.
                    </Typography>
                </Box>

            </Container>
        </>
    )
}

export default Testimonial





