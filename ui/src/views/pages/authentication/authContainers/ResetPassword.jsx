import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import AuthWrapper from '../AuthWrapper';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthResetPassword from '../authForms/AuthResetPassword';
import Logo from '../../../src/components/Logo';
import AuthFooter from '../AuthFooter';

import {
  Divider,
  Grid2,
  Stack,
  Typography,
  useMediaQuery
} from '@mui/material';

// ================================|| RESET PASSWORD ||================================ //

const ResetPassword = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AuthWrapper>
      <Grid2 container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid2 item xs={12}>
          <Grid2 container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
            <Grid2 item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid2 container spacing={2} alignItems="center" justifyContent="center">
                  <Grid2 item sx={{ mb: 0 }}>
                    <Link to="#">
                      <Logo />
                    </Link>
                  </Grid2>
                  <Grid2 item xs={12}>
                    <Grid2 container direction={matchDownSM ? 'column-reverse' : 'row'} alignItems="center" justifyContent="center">
                      <Grid2 item>
                        <Stack alignItems="center" justifyContent="center" spacing={1}>
                          <Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownSM ? 'h3' : 'h2'}>
                            Reset Password
                          </Typography>
                          <Typography variant="caption" fontSize="16px" textAlign={matchDownSM ? 'center' : 'center'}>
                            A verification code was sent to your email. Please enter it below along with your new password.
                          </Typography>
                        </Stack>
                      </Grid2>
                    </Grid2>
                  </Grid2>
                  <Grid2 item xs={12}>
                    <AuthResetPassword />
                  </Grid2>
                  <Grid2 item xs={12}>
                    <Divider />
                  </Grid2>
                  <Grid2 item xs={12}>
                    <Grid2 item container direction="column" alignItems="center" xs={12}>
                      <Typography 
                        component={Link} 
                        to='/login/' 
                        variant="subtitle1" sx={{
                            textDecoration: 'none',
                            '&:hover': {
                            textDecoration: 'underline',
                            },
                        }}
                      >
                        Return to login
                      </Typography>
                    </Grid2>
                  </Grid2>
                </Grid2>
              </AuthCardWrapper>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid2>
      </Grid2>
    </AuthWrapper>
  );
};

export default ResetPassword;
