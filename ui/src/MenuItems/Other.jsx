// assets
import { IconFileDescription } from '@tabler/icons-react';

// constant
const icons = { IconFileDescription };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const Other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'create-a-scene',
      title: 'Create a scene',
      type: 'item',
      url: '/scene/',
      icon: icons.IconFileDescription,
      breadcrumbs: false
    }
  ]
};

export default Other;
