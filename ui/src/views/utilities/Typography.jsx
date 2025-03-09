import { Grid2, Link } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import SubCard from '../../components/cards/SubCard';
import MainCard from '../../components/cards/MainCard';
import SecondaryAction from '../../components/cards/CardSecondaryAction';
import { gridSpacing } from '../../store/constant';

// ==============================|| TYPOGRAPHY ||============================== //

const Typography = () => (
  <MainCard title="Basic Typography" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
    <Grid2 container spacing={gridSpacing}>
      <Grid2 item xs={12} sm={6}>
        <SubCard title="Heading">
          <Grid2 container direction="column" spacing={1}>
            <Grid2 item>
              <MuiTypography variant="h1" gutterBottom>
                h1. Heading
              </MuiTypography>
            </Grid2>
            <Grid2 item>
              <MuiTypography variant="h2" gutterBottom>
                h2. Heading
              </MuiTypography>
            </Grid2>
            <Grid2 item>
              <MuiTypography variant="h3" gutterBottom>
                h3. Heading
              </MuiTypography>
            </Grid2>
            <Grid2 item>
              <MuiTypography variant="h4" gutterBottom>
                h4. Heading
              </MuiTypography>
            </Grid2>
            <Grid2 item>
              <MuiTypography variant="h5" gutterBottom>
                h5. Heading
              </MuiTypography>
            </Grid2>
            <Grid2 item>
              <MuiTypography variant="h6" gutterBottom>
                h6. Heading
              </MuiTypography>
            </Grid2>
          </Grid2>
        </SubCard>
      </Grid2>
      <Grid2 item xs={12} sm={6}>
        <SubCard title="Sub title">
          <Grid2 container direction="column" spacing={1}>
            <Grid2 item>
              <MuiTypography variant="subtitle1" gutterBottom>
                subtitle1. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur
              </MuiTypography>
            </Grid2>
            <Grid2 item>
              <MuiTypography variant="subtitle2" gutterBottom>
                subtitle2. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur
              </MuiTypography>
            </Grid2>
          </Grid2>
        </SubCard>
      </Grid2>
      <Grid2 item xs={12} sm={6}>
        <SubCard title="Body">
          <Grid2 container direction="column" spacing={1}>
            <Grid2 item>
              <MuiTypography variant="body1" gutterBottom>
                body1. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur unde suscipit, quam beatae rerum
                inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </MuiTypography>
            </Grid2>
            <Grid2 item>
              <MuiTypography variant="body2" gutterBottom>
                body2. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur unde suscipit, quam beatae rerum
                inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </MuiTypography>
            </Grid2>
          </Grid2>
        </SubCard>
      </Grid2>
      <Grid2 item xs={12} sm={6}>
        <SubCard title="Extra">
          <Grid2 container direction="column" spacing={1}>
            <Grid2 item>
              <MuiTypography variant="button" display="block" gutterBottom>
                button text
              </MuiTypography>
            </Grid2>
            <Grid2 item>
              <MuiTypography variant="caption" display="block" gutterBottom>
                caption text
              </MuiTypography>
            </Grid2>
            <Grid2 item>
              <MuiTypography variant="overline" display="block" gutterBottom>
                overline text
              </MuiTypography>
            </Grid2>
            <Grid2 item>
              <MuiTypography
                variant="body2"
                color="primary"
                component={Link}
                href="https://berryDashboard.io"
                target="_blank"
                display="block"
                underline="hover"
                gutterBottom
              >
                https://berryDashboard.io
              </MuiTypography>
            </Grid2>
          </Grid2>
        </SubCard>
      </Grid2>
    </Grid2>
  </MainCard>
);

export default Typography;
