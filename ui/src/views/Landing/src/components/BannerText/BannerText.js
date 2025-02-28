import React from 'react';
import './BannerText.css';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';


const BannerText = () => {
    return (
        <Container sx={{
            mt: '70px',
        }}>
            <Typography variant="h2" sx={{
                fontWeight: '800',
                fontSize: '64px',
                lineHeight: '78.02px',
                textAlign: 'center'
            }}>
                Scene Study <span className='food-text'>Buddy</span>,<br />
                Rehearse, run lines and prepare for auditions with <span className='doorstep-text'>AI</span>
            </Typography>
        </Container>
    );
};

export default BannerText;




