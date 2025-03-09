import { useEffect, useState } from 'react';

// material-ui
import { Grid2 } from '@mui/material';

// project imports
import EarningCard from '../../components/cards/EarningCard';
import PopularCard from '../../components/cards/PopularCard';
// import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from '../../components/cards/TotalIncomeDarkCard';
import TotalIncomeLightCard from '../../components/cards/TotalIncomeLightCard';
// import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from '../../store/constant';

// ==============================|| DEFAULT Dashboard ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid2 container spacing={gridSpacing}>
      <Grid2 item xs={12}>
        <Grid2 container spacing={gridSpacing}>
          <Grid2 item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid2>
          <Grid2 item lg={4} md={6} sm={6} xs={12}>
            {/* <TotalOrderLineChartCard isLoading={isLoading} /> */}
          </Grid2>
          <Grid2 item lg={4} md={12} sm={12} xs={12}>
            <Grid2 container spacing={gridSpacing}>
              <Grid2 item sm={6} xs={12} md={6} lg={12}>
                {/* <TotalIncomeDarkCard isLoading={isLoading} /> */}
              </Grid2>
              <Grid2 item sm={6} xs={12} md={6} lg={12}>
                {/* <TotalIncomeLightCard isLoading={isLoading} /> */}
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 item xs={12}>
        <Grid2 container spacing={gridSpacing}>
          <Grid2 item xs={12} md={8}>
            {/* <TotalGrowthBarChart isLoading={isLoading} /> */}
          </Grid2>
          <Grid2 item xs={12} md={4}>
            {/* <PopularCard isLoading={isLoading} /> */}
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default Dashboard;
