import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid2, Typography } from '@mui/material';

// project imports
import SubCard from '../../components/cards/SubCard';
import MainCard from '../../components/cards/MainCard';
import SecondaryAction from '../../components/cards/CardSecondaryAction';
import { gridSpacing } from '../../store/constant';

// ===============================|| COLOR BOX ||=============================== //

const ColorBox = ({ bgcolor, title, data, dark }) => (
  <>
    <Card sx={{ mb: 3 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 4.5,
          bgcolor,
          color: dark ? 'grey.800' : '#ffffff'
        }}
      >
        {title && (
          <Typography variant="subtitle1" color="inherit">
            {title}
          </Typography>
        )}
        {!title && <Box sx={{ p: 1.15 }} />}
      </Box>
    </Card>
    {data && (
      <Grid2 container justifyContent="space-between" alignItems="center">
        <Grid2 item>
          <Typography variant="subtitle2">{data.label}</Typography>
        </Grid2>
        <Grid2 item>
          <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
            {data.color}
          </Typography>
        </Grid2>
      </Grid2>
    )}
  </>
);

ColorBox.propTypes = {
  bgcolor: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.object.isRequired,
  dark: PropTypes.bool
};

// ===============================|| UI COLOR ||=============================== //

const UIColor = () => (
  <MainCard title="Color Palette" secondary={<SecondaryAction link="https://next.material-ui.com/system/palette/" />}>
    <Grid2 container spacing={gridSpacing}>
      <Grid2 item xs={12}>
        <SubCard title="Primary Color">
          <Grid2 container spacing={gridSpacing}>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="primary.light" data={{ label: 'Blue-50', color: '#E3F2FD' }} title="primary.light" dark />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="primary.200" data={{ label: 'Blue-200', color: '#90CAF9' }} title="primary[200]" dark />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="primary.main" data={{ label: 'Blue-500', color: '#2196F3' }} title="primary.main" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="primary.dark" data={{ label: 'Blue-600', color: '#1E88E5' }} title="primary.dark" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="primary.800" data={{ label: 'Blue-800', color: '#1565C0' }} title="primary[800]" />
            </Grid2>
          </Grid2>
        </SubCard>
      </Grid2>
      <Grid2 item xs={12}>
        <SubCard title="Secondary Color">
          <Grid2 container spacing={gridSpacing}>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="secondary.light" data={{ label: 'DeepPurple-50', color: '#ede7f6' }} title="secondary.light" dark />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="secondary.200" data={{ label: 'DeepPurple-200', color: '#b39ddb' }} title="secondary[200]" dark />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="secondary.main" data={{ label: 'DeepPurple-500', color: '#673ab7' }} title="secondary.main" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="secondary.dark" data={{ label: 'DeepPurple-600', color: '#5e35b1' }} title="secondary.dark" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="secondary.800" data={{ label: 'DeepPurple-800', color: '#4527a0' }} title="secondary[800]" />
            </Grid2>
          </Grid2>
        </SubCard>
      </Grid2>
      <Grid2 item xs={12}>
        <SubCard title="Success Color">
          <Grid2 container spacing={gridSpacing}>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="success.light" data={{ label: 'Green-A100', color: '#b9f6ca' }} title="success.light" dark />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="success.main" data={{ label: 'Green-A200', color: '#69f0ae' }} title="success[200]" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="success.main" data={{ label: 'Green-A400', color: '#69f0ae' }} title="success.main" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="success.dark" data={{ label: 'Green-A700', color: '#00c853' }} title="success.dark" />
            </Grid2>
          </Grid2>
        </SubCard>
      </Grid2>
      <Grid2 item xs={12}>
        <SubCard title="Orange Color">
          <Grid2 container spacing={gridSpacing}>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="orange.light" data={{ label: 'DeepOrange-50', color: '#fbe9e7' }} title="orange.light" dark />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="orange.main" data={{ label: 'DeepOrange-200', color: '#ffab91' }} title="orange.main" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="orange.dark" data={{ label: 'DeepOrange-800', color: '#d84315' }} title="orange.dark" />
            </Grid2>
          </Grid2>
        </SubCard>
      </Grid2>
      <Grid2 item xs={12}>
        <SubCard title="Error Color">
          <Grid2 container spacing={gridSpacing}>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="error.light" data={{ label: 'Red-50', color: '#ef9a9a' }} title="error.light" dark />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="error.main" data={{ label: 'Red-200', color: '#f44336' }} title="error.main" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="error.dark" data={{ label: 'Red-800', color: '#c62828' }} title="error.dark" />
            </Grid2>
          </Grid2>
        </SubCard>
      </Grid2>
      <Grid2 item xs={12}>
        <SubCard title="Warning Color">
          <Grid2 container spacing={gridSpacing}>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="warning.light" data={{ label: 'Amber-50', color: '#b9f6ca' }} title="warning.light" dark />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="warning.main" data={{ label: 'Amber-100', color: '#ffe57f' }} title="warning.main" dark />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="warning.dark" data={{ label: 'Amber-500', color: '#FFC107' }} title="warning.dark" />
            </Grid2>
          </Grid2>
        </SubCard>
      </Grid2>
      <Grid2 item xs={12}>
        <SubCard title="Grey Color">
          <Grid2 container spacing={gridSpacing}>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="grey.50" data={{ label: 'Grey-50', color: '#fafafa' }} title="grey[50]" dark />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="grey.100" data={{ label: 'Grey-100', color: '#f5f5f5' }} title="grey[100]" dark />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="grey.200" data={{ label: 'Grey-200', color: '#eeeeee' }} title="grey[200]" dark />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="grey.300" data={{ label: 'Grey-300', color: '#e0e0e0' }} title="grey[300]" dark />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="grey.500" data={{ label: 'Grey-500', color: '#9e9e9e' }} title="grey[500]" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="grey.700" data={{ label: 'Grey-600', color: '#757575' }} title="grey[600]" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="grey.700" data={{ label: 'Grey-700', color: '#616161' }} title="grey[700]" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="grey.900" data={{ label: 'Grey-900', color: '#212121' }} title="grey[900]" />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={2}>
              <ColorBox bgcolor="#fff" data={{ label: 'Pure White', color: '#ffffff' }} title="Pure White" dark />
            </Grid2>
          </Grid2>
        </SubCard>
      </Grid2>
    </Grid2>
  </MainCard>
);

export default UIColor;
