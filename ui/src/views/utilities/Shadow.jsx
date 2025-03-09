import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid2 } from '@mui/material';

// project imports
import SubCard from '../../components/cards/SubCard';
import MainCard from '../../components/cards/MainCard';
import SecondaryAction from '../../components/cards/CardSecondaryAction';
import { gridSpacing } from '../../store/constant';

// ===============================|| SHADOW BOX ||=============================== //

const ShadowBox = ({ shadow }) => (
  <Card sx={{ mb: 3, boxShadow: shadow }}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 4.5,
        bgcolor: 'primary.light',
        color: 'grey.800'
      }}
    >
      <Box sx={{ color: 'inherit' }}>boxShadow: {shadow}</Box>
    </Box>
  </Card>
);

ShadowBox.propTypes = {
  shadow: PropTypes.string.isRequired
};

// ============================|| UTILITIES SHADOW ||============================ //

const UtilitiesShadow = () => (
  <MainCard title="Basic Shadow" secondary={<SecondaryAction link="https://next.material-ui.com/system/shadows/" />}>
    <Grid2 container spacing={gridSpacing}>
      <Grid2 item xs={12}>
        <SubCard title="Basic Shadow">
          <Grid2 container spacing={gridSpacing}>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="0" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="1" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="2" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="3" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="4" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="5" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="6" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="7" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="8" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="9" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="10" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="11" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="12" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="13" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="14" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="15" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="16" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="17" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="18" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="19" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="20" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="21" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="22" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="23" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
              <ShadowBox shadow="24" />
            </Grid2>
          </Grid2>
        </SubCard>
      </Grid2>
    </Grid2>
  </MainCard>
);

export default UtilitiesShadow;
