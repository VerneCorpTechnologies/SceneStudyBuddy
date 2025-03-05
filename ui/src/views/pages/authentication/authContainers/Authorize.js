import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import AuthWrapper from '../AuthWrapper';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthAuthorize from '../authForms/AuthAuthorize';
import Logo from 'components/Logo';
import AuthFooter from '../AuthFooter';
import {
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery
} from '@mui/material';

// ================================|| AUTHORIZE ||================================ //

const Authorize = (username) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AuthWrapper>
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item sx={{ mb: 0 }}>
                    <Link to="#">
                      <Logo />
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container direction={matchDownSM ? 'column-reverse' : 'row'} alignItems="center" justifyContent="center">
                      <Grid item>
                        <Stack alignItems="center" justifyContent="center" spacing={1}>
                          <Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownSM ? 'h3' : 'h2'}>
                            Enter verification code
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <AuthAuthorize />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item container direction="column" alignItems="center" xs={12}>
                      <Button 
                      sx={{
                        textDecoration: 'none',
                        backgroundColor: 'transparent',
                        '&:hover': {
                          textDecoration: 'underline',
                          backgroundColor: 'transparent',
                        },
                      }}
                      id="resend-verification-button"
                      variant="subtitle1" 
                      >
                        Resend verification code
                      </Button>
                      {/* {successMessage && (
                        <div className="success-message">
                          {successMessage}
                        </div>
                      )} */}
                    </Grid>
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Authorize;