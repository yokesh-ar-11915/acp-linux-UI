/** Navigation structure — revamped L-tree design. */
const MENU = {
  overview: {
    label: 'Overview',
    hasSidebar: true,
    sections: [
      {
        title: 'Overview',
        items: [
          { id: 'dashboard', label: 'Dashboard' }
        ]
      }
    ]
  },
  manage: {
    label: 'Manage',
    hasSidebar: true,
    sections: [
      {
        title: 'Manage',
        items: [
          { id: 'app-groups', label: 'Application Groups' },
          { id: 'deploy-policy', label: 'Deployment Policy' },
          { id: 'jit-access', label: 'Just In Time Access' }
        ]
      }
    ]
  },
  policies: {
    label: 'Policies',
    hasSidebar: true,
    sections: [
      {
        title: 'Policies',
        items: [
          { id: 'ac-policies', label: 'Application Control Policies' },
          { id: 'epm-policies', label: 'Endpoint Privilege Management' }
        ]
      }
    ]
  },
  insight: {
    label: 'Insight',
    hasSidebar: true,
    sections: [
      {
        title: 'Insight',
        items: [
          { id: 'admin-rights-summary', label: 'Admin Rights Summary' },
          { id: 'systems-view', label: 'Systems View' }
        ]
      }
    ]
  },
  reports: {
    label: 'Reports',
    hasSidebar: true,
    sections: [
      {
        title: 'User-defined Reports',
        items: [
          { id: 'schedule-reports', label: 'Schedule Reports' },
          { id: 'query-reports', label: 'Query Reports' }
        ]
      },
      {
        title: 'Other Reports',
        items: [
          { id: 'ac-reports', label: 'Application Control Reports' }
        ]
      }
    ]
  },
  settings: {
    label: 'Settings',
    hasSidebar: true,
    sections: [
      {
        title: 'Settings',
        items: [
          { id: 'alert-settings', label: 'Alert Settings' }
        ]
      }
    ]
  }
};
