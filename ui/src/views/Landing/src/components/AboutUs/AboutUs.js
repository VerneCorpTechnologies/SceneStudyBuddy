import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { TERTIARY_COLOR } from '../../colors'
import './AboutUs.css';

const About = () => {
    return (
        <>
            <Container sx={{
                mt: 8
            }}>
                <Typography sx={{
                    py: 5,
                    fontSize: '20px',
                    fontWeight: 600,
                    color: TERTIARY_COLOR
                }} >What is SceneStudyBuddy&trade;?</Typography>

                <Typography sx={{
                    fontSize: '40px',
                    lineHeight: '49px',
                    textAlign: 'justify',
                    fontWeight: 400,
                    color: '#1E1E1E'
                }} className='aboutText'>
                    SceneStudyBuddy&trade; is an <span className='highlight'> AI-powered</span> 
                    script reader designed to help you practice your lines in a dynamic and efficient way.
                    It <span className='highlight'>reads the Other characters' lines </span>
                    aloud, allowing you to focus solely on your performance. 
                    The AI waits for you to finish your lines before proceeding, simulating a more natural scene flow.  
                    This feature helps you <span className='highlight'> rehearse </span>
                    in a realistic setting, providing the opportunity to work on timing, delivery, 
                    and emotional pacing without the need for anOther person to read the opposite lines.
                    Whether you're preparing for auditions or perfecting a scene, SceneStudyBuddy&trade; makes practice more flexible and engaging.
                </Typography>
            </Container>
        </>
    )
}

export default About







