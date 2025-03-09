// assets
import { IconDashboard, IconMasksTheater } from '@tabler/icons-react';

// constant
const icons = { IconDashboard, IconMasksTheater };

// ==============================|| Dashboard MENU ITEMS ||============================== //

const Dashboard = {
  id: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Scenes',
      type: 'item',
      url: '/scenes/',
      icon: icons.IconMasksTheater,
      breadcrumbs: false
    }
  ]
};

export default Dashboard;
