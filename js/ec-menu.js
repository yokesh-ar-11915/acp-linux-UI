/** Endpoint Central — Application Control sidebar navigation structure (revamped L-tree). */
const EC_MENU = {
  'application-control': {
    label: 'Application Control',
    hasSidebar: true,
    sections: [
      {
        title: 'Overview',
        items: [
          { id: 'dashboard', label: 'Dashboard' }
        ]
      },
      {
        title: 'Manage',
        items: [
          { id: 'app-groups', label: 'Application Groups' },
          { id: 'child-process', label: 'Child Process' },
          { id: 'ac-policies', label: 'Deploy Policy' },
          { id: 'jit-deployments', label: 'JIT Deployments' },
          { id: 'jit-requests', label: 'JIT Requests', badge: 5 }
        ]
      },
      {
        title: 'Policies',
        items: [
          { id: 'epm-policies', label: 'EPM Policies' }
        ]
      },
      {
        title: 'Insight',
        items: [
          { id: 'admin-rights-summary', label: 'Admin Rights Summary' },
          { id: 'systems-view', label: 'Systems View' },
          { id: 'privileged-activity-audit', label: 'Privileged Activity Audit' }
        ]
      },
      {
        title: 'Reports',
        items: [
          { id: 'ac-reports', label: 'Reports' }
        ]
      },
      {
        title: 'Settings',
        items: [
          { id: 'alert-settings', label: 'Alert Settings' }
        ]
      }
    ]
  }
};
