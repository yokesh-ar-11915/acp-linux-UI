/** Endpoint Central — Application Control page content generators. */

/* Helper: generate random app names */
function ecRandomAppName() {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  let name = '';
  for (let i = 0; i < 5 + Math.floor(Math.random() * 6); i++) {
    name += chars[Math.floor(Math.random() * chars.length)];
  }
  return name + '.app';
}

/* Seed-based pseudo-random for consistent data */
const EC_VERIFIED_APPS = [
  { label: 'tanyqjzxi.app', count: 23 },
  { label: 'vzwapvkuo.app', count: 23 },
  { label: 'dlkqgsckl.app', count: 23 },
  { label: 'dpaqkktjf.app', count: 23 },
  { label: 'zjsmvgio.app', count: 23 },
];

const EC_NONVERIFIED_APPS = [
  { label: 'LomondMessaging.15', count: 24 },
  { label: 'brsjtylhc.app', count: 23 },
  { label: 'uxbbwnrzt.app', count: 23 },
  { label: 'qpqtoodma.app', count: 23 },
  { label: 'bhqjneuhi.app', count: 23 },
];

const EC_PAGES = {

  /* =================== DASHBOARD =================== */
  dashboard: () => `
    <div class="stat-cards-row">
      <div class="stat-card">
        <div class="stat-label">Unregulated Computers</div>
        <div class="stat-value zero">0</div>
        <a class="stat-link" href="#">Associate Application Group(s)</a>
      </div>
      <div class="stat-card">
        <div class="stat-label">Just in Time access policies</div>
        <div class="stat-value zero">0</div>
        <a class="stat-link" href="#">Show Expiring Policies</a>
      </div>
      <div class="stat-card">
        <div class="stat-label">Custom Groups with App Requests</div>
        <div class="stat-value">4</div>
        <a class="stat-link" href="#">View Group(s)</a>
      </div>
      <div class="stat-card">
        <div class="stat-label">Systems with Unmanaged Admin accounts</div>
        <div class="stat-value">1</div>
        <a class="stat-link" href="#">View System(s)</a>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 2fr;gap:0;margin:20px 28px;background:#fff;border:1px solid #e8e8e8;border-radius:8px;overflow:hidden">
      <div>
        <h3 style="font-size:15px;font-weight:700;color:#333;padding:16px 20px;border-bottom:1px solid #f0f0f0">Getting Started</h3>
        <div class="gs-item">Agent Installation</div>
        <div class="gs-item">Application Group Creation</div>
        <div class="gs-item">Custom Group Creation</div>
        <div class="gs-item">Policy Deployment</div>
        <div class="gs-item">Unmanaged applications Resolution</div>
      </div>
      <div class="gs-steps">
        <div class="gs-step">
          <div class="step-icon"><i class="fa fa-download"></i></div>
          <div class="step-num">1</div>
          <div>Download and install Agent</div>
        </div>
        <div class="gs-step">
          <div class="step-icon"><i class="fa fa-database"></i></div>
          <div class="step-num">2</div>
          <div>Data synced</div>
        </div>
        <div class="gs-step">
          <div class="step-icon"><i class="fa fa-chart-line"></i></div>
          <div class="step-num">3</div>
          <div>Applications discovered and ready to manage</div>
        </div>
      </div>
    </div>

    <div class="charts-row">
      <div class="chart-card">
        <h4>Most used applications from Verified publishers</h4>
        ${ecHBar([
          {label:'Brave VPN Wireguard Service',count:90},
          {label:'Microsoft Edge',count:80},
        ], 'blue')}
      </div>
      <div class="chart-card">
        <h4>Most used applications from Non-verified publishers</h4>
        ${ecHBar([
          {label:'Pages.app',count:85},
          {label:'Keynote.app',count:80},
        ], 'orange')}
      </div>
      <div class="chart-card">
        <h4>Unmanaged Applications</h4>
        <div style="text-align:center;padding:40px;color:#ccc">
          <i class="fa fa-desktop" style="font-size:48px;margin-bottom:8px;display:block"></i>
        </div>
      </div>
    </div>

    <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>`,

  /* =================== APPLICATION GROUPS =================== */
  'app-groups': () => `
    <div class="page-title-bar">
      <i class="fa fa-copy page-icon"></i>
      <h1>Application Groups</h1>
      <span class="tip-link"><i class="fa fa-gear"></i> Want to customize application control rules?</span>
    </div>
    <div class="toolbar">
      <div class="btn-dropdown-wrap">
        <button class="btn btn-primary" onclick="this.parentElement.classList.toggle('open')"><i class="fa fa-plus"></i> Create Allowlist <i class="fa fa-caret-down" style="font-size:10px"></i></button>
        <div class="btn-dropdown-menu">
          <a href="#" onclick="ecOpenCreateGroup('Allowlist','windows');return false"><i class="fab fa-windows"></i> Windows</a>
          <a href="#" onclick="ecOpenCreateGroup('Allowlist','mac');return false"><i class="fab fa-apple"></i> Mac</a>
          <a href="#" onclick="ecOpenCreateGroup('Allowlist','linux');return false"><i class="fab fa-linux"></i> Linux</a>
        </div>
      </div>
      <div class="btn-dropdown-wrap">
        <button class="btn btn-primary" onclick="this.parentElement.classList.toggle('open')"><i class="fa fa-plus"></i> Create Blocklist <i class="fa fa-caret-down" style="font-size:10px"></i></button>
        <div class="btn-dropdown-menu">
          <a href="#" onclick="ecOpenCreateGroup('Blocklist','windows');return false"><i class="fab fa-windows"></i> Windows</a>
          <a href="#" onclick="ecOpenCreateGroup('Blocklist','mac');return false"><i class="fab fa-apple"></i> Mac</a>
          <a href="#" onclick="ecOpenCreateGroup('Blocklist','linux');return false"><i class="fab fa-linux"></i> Linux</a>
        </div>
      </div>
      <div class="filter-group"><span class="filter-label">Filter By :</span>
        <select><option>Platform type</option><option>Windows</option><option>Mac</option><option>Linux</option></select>
        <select><option>Group type</option><option>Allowlist</option><option>Blocklist</option></select>
      </div>
      <div class="toolbar-right">
        <span class="total-records">Total Records</span>
        <span class="icon-btn"><i class="fa fa-search"></i></span>
        <span class="icon-btn"><i class="fa fa-columns"></i></span>
        <span class="icon-btn"><i class="fa fa-download"></i></span>
      </div>
    </div>
    <div class="table-wrap">
      <table class="data-table">
        <thead><tr>
          <th>Application Group Name <i class="fa fa-sort sort-icon"></i></th>
          <th>Group Type</th><th>Created By</th><th>Last Modified By</th><th>Created Time</th><th>Last Modified</th>
        </tr></thead>
        <tbody>
          <tr><td><i class="fab fa-windows os-icon"></i><a href="#" onclick="ecOpenAppGroupSummary('Allowed applications','Allowlist','windows');return false">Allowed applications</a></td><td>Allowlist</td><td>admin</td><td>admin</td><td>Oct 7, 2024 01:2...</td><td>Oct 7, 20...</td></tr>
          <tr><td><i class="fab fa-apple os-icon"></i><a href="#" onclick="ecOpenAppGroupSummary('Allowed Mac applications','Allowlist','mac');return false">Allowed Mac applications</a></td><td>Allowlist</td><td>admin</td><td>admin</td><td>Oct 7, 2024 02:4...</td><td>Oct 7, 20...</td></tr>
          <tr><td><i class="fab fa-linux os-icon"></i><a href="#" onclick="ecOpenAppGroupSummary('Allowed Linux applications','Allowlist','linux');return false">Allowed Linux applications</a></td><td>Allowlist</td><td>admin</td><td>admin</td><td>Mar 10, 2026 09:1...</td><td>Mar 10, 20...</td></tr>
          <tr><td><i class="fab fa-windows os-icon"></i><a href="#" onclick="ecOpenAppGroupSummary('Blocked applications','Blocklist','windows');return false">Blocked applications</a></td><td>Blocklist</td><td>admin</td><td>admin</td><td>Oct 7, 2024 01:2...</td><td>Oct 7, 20...</td></tr>
          <tr><td><i class="fab fa-apple os-icon"></i><a href="#" onclick="ecOpenAppGroupSummary('Blocked Mac Applications','Blocklist','mac');return false">Blocked Mac Applications</a></td><td>Blocklist</td><td>admin</td><td>admin</td><td>Oct 7, 2024 02:4...</td><td>Oct 7, 20...</td></tr>
          <tr><td><i class="fab fa-linux os-icon"></i><a href="#" onclick="ecOpenAppGroupSummary('Blocked Linux Applications','Blocklist','linux');return false">Blocked Linux Applications</a></td><td>Blocklist</td><td>admin</td><td>admin</td><td>Mar 12, 2026 11:3...</td><td>Mar 12, 20...</td></tr>
          <tr><td><i class="fab fa-windows os-icon"></i><a href="#" onclick="ecOpenAppGroupSummary('ManageEngine recommended blocklist for productivity','Blocklist','windows');return false">ManageEngine recommended blocklist for productivity</a></td><td>Blocklist</td><td>DC-SYSTEM-USER</td><td>DC-SYSTEM-US...</td><td>--</td><td>--</td></tr>
        </tbody>
      </table>
    </div>
    <div class="table-pagination">
      <span>1 - 7 of <a href="#" style="color:#1a73e8">Total Records</a></span>
      <select><option>25</option></select>
      <span class="page-btn">&lt;</span>
      <span class="page-btn">&gt;</span>
    </div>
    ${ecQuickLinks('app-groups')}`,

  /* =================== CHILD PROCESS =================== */
  'child-process': () => `
    <div class="page-title-bar">
      <i class="fa fa-code-branch page-icon"></i>
      <h1>Child Process</h1>
    </div>
    <div class="content-inner">
      <div class="alert-banner info" style="border-radius:0">
        <i class="fa fa-th"></i> Child Process control is currently available only for Windows.
      </div>
      <div class="child-proc-config">
        <div class="cp-header">
          <input type="checkbox" checked /> Global Child Process Configuration
        </div>
        <div class="cp-desc">All discovered endpoints will be allowed to run child processes only for applications included here.</div>

        <!-- Platform tabs -->
        <div class="cp-platform-tabs">
          <span class="cp-ptab active" onclick="ecSwitchCpPlatform(this,'cp-plat-win')"><i class="fab fa-windows"></i> Windows</span>
          <span class="cp-ptab" onclick="ecSwitchCpPlatform(this,'cp-plat-mac')"><i class="fab fa-apple"></i> Mac</span>
          <span class="cp-ptab" onclick="ecSwitchCpPlatform(this,'cp-plat-linux')"><i class="fab fa-linux"></i> Linux</span>
        </div>

        <!-- Windows platform -->
        <div class="cp-plat-panel" id="cp-plat-win">
          <div class="cg-toolbar" style="margin:0;padding:12px 0">
            <select class="cg-filter-select"><option>All</option><option>Products</option><option>Executables</option></select>
            <div class="cg-search-wrap"><i class="fa fa-search cg-search-icon"></i><input type="text" class="cg-search-input" placeholder="Search" /></div>
            <div class="cg-toolbar-right">
              <span class="cg-selected" id="cpSelectedWin">Selected (0)</span>
              <span class="cg-sep"></span>
              <span class="cg-view-btn active"><i class="fa fa-th-large"></i></span>
              <span class="cg-view-btn"><i class="fa fa-list"></i></span>
            </div>
          </div>
          <div class="cg-content-area">
            <div class="cg-section-header">Products <span style="font-size:12px;color:#888;font-weight:400;margin-left:8px">(select applications to add)</span></div>
            <div id="cpProductListWin"></div>
          </div>
        </div>

        <!-- Mac platform -->
        <div class="cp-plat-panel" id="cp-plat-mac" style="display:none">
          <div class="cg-toolbar" style="margin:0;padding:12px 0">
            <select class="cg-filter-select"><option>All</option><option>Vendor</option><option>Products</option><option>Executables</option><option>File Hash</option><option>Folder Path</option></select>
            <div class="cg-search-wrap"><i class="fa fa-search cg-search-icon"></i><input type="text" class="cg-search-input" placeholder="Search" /></div>
            <div class="cg-toolbar-right">
              <span class="cg-selected" id="cpSelectedMac">Selected (0)</span>
            </div>
          </div>
          <div class="cg-content-area">
            <div class="cg-section-header">Vendor <span style="font-size:12px;color:#888;font-weight:400;margin-left:8px">(click to select)</span></div>
            <div class="vendor-grid" id="cpVendorGridMac"></div>
            <div class="cg-section-header" style="border-top:1px solid #e8e8e8">Products <span style="font-size:12px;color:#888;font-weight:400;margin-left:8px">(select applications to add)</span></div>
            <div id="cpProductListMac"></div>
          </div>
        </div>

        <!-- Linux platform -->
        <div class="cp-plat-panel" id="cp-plat-linux" style="display:none">
          <div class="cg-toolbar" style="margin:0;padding:12px 0">
            <select class="cg-filter-select"><option>All</option><option>Package</option><option>Executables</option><option>File Hash</option></select>
            <div class="cg-search-wrap"><i class="fa fa-search cg-search-icon"></i><input type="text" class="cg-search-input" placeholder="Search" /></div>
            <div class="cg-toolbar-right">
              <span class="cg-selected" id="cpSelectedLinux">Selected (0)</span>
            </div>
          </div>
          <div class="cg-content-area">
            <div class="cg-section-header">Package <span style="font-size:12px;color:#888;font-weight:400;margin-left:8px">(select applications to add)</span></div>
            <div id="cpProductListLinux"></div>
          </div>
        </div>

        <div class="cp-actions">
          <button class="btn">Apply</button>
          <button class="btn">Reset</button>
        </div>
      </div>
    </div>
    <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>`,

  /* =================== DEPLOY POLICY =================== */
  'deploy-policy': () => `
    <div class="page-title-bar">
      <i class="fa fa-shield-halved page-icon"></i>
      <h1>Deploy Policy <i class="fa fa-circle-info info-icon"></i></h1>
      <a href="#" class="form-action-link" style="margin-left:auto"><i class="fa fa-video"></i> Watch Demo</a>
    </div>
    <div class="toolbar">
      <button class="btn btn-primary" onclick="ecOpenCreatePolicy('windows','Associate Policy','deploy-policy')"><i class="fa fa-plus"></i> Associate Group</button>
      <div class="filter-group"><span class="filter-label">Filter By :</span>
        <select><option>Flexibility</option></select>
        <select><option>All</option></select>
      </div>
      <div class="toolbar-right">
        <span class="total-records"><a href="#" style="color:#1a73e8">Total Records</a></span>
        <span class="icon-btn"><i class="fa fa-search"></i></span>
        <span class="icon-btn"><i class="fa fa-columns"></i></span>
        <span class="icon-btn"><i class="fa fa-download"></i></span>
      </div>
    </div>
    <div class="table-wrap">
      <table class="data-table">
        <thead><tr>
          <th>Custom Group Name <i class="fa fa-sort sort-icon"></i></th>
          <th>Associated Application Group(s)</th><th>Computer Count</th><th>Flexibility</th><th>Deployment Status</th><th>Action</th><th>Requested Apps</th>
        </tr></thead>
        <tbody>
          <tr><td><a href="#" onclick="ecOpenDeployPolicySummary('All Computers Group','All','Strict Mode','demo','Apr 9, 2025, 06:29:31 PM');return false">All Computers Group</a></td><td>8</td><td>161</td><td><span class="flex-badge strict"><i class="fa fa-circle" style="font-size:6px"></i> Strict Mode</span></td><td><span class="deploy-bar"><span class="fill gray" style="width:1%"></span></span>1%</td><td><i class="fa fa-link" style="color:#888"></i></td><td><a href="#" style="color:#1a73e8">0</a></td></tr>
          <tr><td><a href="#" onclick="ecOpenDeployPolicySummary('Developer group','Static Unique Group','Audit Mode','demo','Mar 20, 2026, 10:00:00 AM');return false">Developer group</a></td><td>8</td><td>1</td><td><span class="flex-badge audit"><i class="fa fa-search" style="font-size:10px"></i> Audit Mode</span></td><td><span class="deploy-bar"><span class="fill green" style="width:100%"></span></span>100%</td><td><i class="fa fa-link" style="color:#888"></i></td><td><a href="#" style="color:#1a73e8">1</a></td></tr>
          <tr><td><a href="#" onclick="ecOpenDeployPolicySummary('Engineering group','Static Computer Group','Strict Mode','demo','Mar 12, 2026, 11:30:00 AM');return false">Engineering group</a></td><td>5</td><td>0</td><td><span class="flex-badge strict"><i class="fa fa-circle" style="font-size:6px"></i> Strict Mode</span></td><td><span class="deploy-bar"><span class="fill gray" style="width:0%"></span></span>0%</td><td><i class="fa fa-link" style="color:#888"></i></td><td><a href="#" style="color:#1a73e8">0</a></td></tr>
          <tr><td><a href="#" onclick="ecOpenDeployPolicySummary('Marketing Group','Static Computer Group','Audit Mode','demo','Mar 22, 2026, 03:00:00 PM');return false">Marketing Group</a></td><td>7</td><td>5</td><td><span class="flex-badge audit"><i class="fa fa-search" style="font-size:10px"></i> Audit Mode</span></td><td><span class="deploy-bar"><span class="fill red" style="width:20%"></span></span>20%</td><td><i class="fa fa-link" style="color:#888"></i></td><td><a href="#" style="color:#1a73e8">1</a></td></tr>
          <tr><td><a href="#" onclick="ecOpenDeployPolicySummary('Remote Branch','Static Computer Group','Audit Mode','demo','Mar 24, 2026, 11:00:00 AM');return false">Remote Branch</a></td><td>3</td><td>1</td><td><span class="flex-badge audit"><i class="fa fa-search" style="font-size:10px"></i> Audit Mode</span></td><td><span class="deploy-bar"><span class="fill green" style="width:100%"></span></span>100%</td><td><i class="fa fa-link" style="color:#888"></i></td><td><a href="#" style="color:#1a73e8">1</a></td></tr>
          <tr><td><a href="#" onclick="ecOpenDeployPolicySummary('Support Group','Static Computer Group','Audit Mode','demo','Mar 14, 2026, 02:15:00 PM');return false">Support Group</a></td><td>6</td><td>1</td><td><span class="flex-badge audit"><i class="fa fa-search" style="font-size:10px"></i> Audit Mode</span></td><td><span class="deploy-bar"><span class="fill green" style="width:100%"></span></span>100%</td><td><i class="fa fa-link" style="color:#888"></i></td><td><a href="#" style="color:#1a73e8">1</a></td></tr>
        </tbody>
      </table>
    </div>
    <div class="table-pagination">
      <span>1 - 6 of <a href="#" style="color:#1a73e8">Total Records</a></span>
      <select><option>25</option></select>
      <span class="page-btn">&lt;</span>
      <span class="page-btn">&gt;</span>
    </div>
    ${ecQuickLinks('deploy-policy')}`,

  /* =================== JIT ACCESS =================== */
  'jit-deployments': () => `
    <div class="page-title-bar">
      <i class="fa fa-clock page-icon"></i>
      <h1>JIT Deployments <i class="fa fa-circle-info info-icon"></i></h1>
      <a href="#" class="form-action-link" style="margin-left:auto"><i class="fa fa-video"></i> Watch Demo</a>
    </div>
    <div class="toolbar">
      <div class="btn-dropdown-wrap">
        <button class="btn btn-primary" onclick="this.parentElement.classList.toggle('open')"><i class="fa fa-plus"></i> Create <i class="fa fa-caret-down" style="font-size:10px"></i></button>
        <div class="btn-dropdown-menu">
          <a href="#" onclick="ecOpenJitCreate('allowlisting');return false">Application Allowlisting</a>
          <a href="#" onclick="ecOpenJitCreate('elevation');return false">Application Elevation</a>
        </div>
      </div>
      <button class="btn btn-danger"><i class="fa fa-trash"></i> Delete</button>
      <div class="filter-group"><span class="filter-label">Filter By :</span>
        <select><option>Platform type</option></select>
        <select><option>Access Type</option></select>
        <select><option>Status</option></select>
        <select><option>Timeline</option></select>
        <select><option>Duration Type</option></select>
      </div>
      <div class="toolbar-right">
        <span class="total-records">Total Records</span>
        <span class="icon-btn"><i class="fa fa-search"></i></span>
        <span class="icon-btn"><i class="fa fa-columns"></i></span>
        <span class="icon-btn"><i class="fa fa-download"></i></span>
      </div>
    </div>
    <div class="table-wrap">
      <table class="data-table">
        <thead><tr>
          <th style="width:30px"><input type="checkbox" /></th>
          <th>Policy Name</th><th>Applied Time</th><th>Duration Type</th><th>Computer Name</th><th>Status</th><th>Access Type</th><th>Expiry Date <i class="fa fa-sort sort-icon"></i></th><th>Action</th>
        </tr></thead>
        <tbody>
          <tr><td><input type="checkbox" /></td><td><a href="#" onclick="ecOpenJitSummary('allow with elevation',0);return false">allow with elevation</a></td><td>Nov 17, 2022 03:08 PM</td><td>Fixed</td><td><i class="fab fa-windows os-icon"></i> Florina</td><td>Failed</td><td>Elevation</td><td>Nov 17, 2022 11:08 PM</td><td><div class="ec-action-menu"><i class="fa fa-ellipsis" onclick="ecToggleActionMenu(this)"></i><div class="ec-action-dropdown"><a href="#" onclick="return false">Modify</a><a href="#" onclick="return false">Delete</a></div></div></td></tr>
          <tr><td><input type="checkbox" /></td><td><a href="#" onclick="ecOpenJitSummary('allow with elevation',1);return false">allow with elevation</a></td><td>Jan 23, 2025 06:48 PM</td><td>Fixed</td><td><i class="fab fa-windows os-icon"></i> EC2AMAZ-DS25S0F</td><td>Succeeded</td><td>Elevation</td><td>Jan 23, 2025 07:48 PM</td><td><div class="ec-action-menu"><i class="fa fa-ellipsis" onclick="ecToggleActionMenu(this)"></i><div class="ec-action-dropdown"><a href="#" onclick="return false">Modify</a><a href="#" onclick="return false">Delete</a></div></div></td></tr>
          <tr><td><input type="checkbox" /></td><td><a href="#" onclick="ecOpenJitSummary('Access for specific app',2);return false">Access for specific app</a></td><td>Jan 24, 2025 12:08 AM</td><td>Fixed</td><td><i class="fab fa-windows os-icon"></i> EC2AMAZ-DS25S0F</td><td>Succeeded</td><td>Allowlisting</td><td>Jan 24, 2025 01:08 AM</td><td><div class="ec-action-menu"><i class="fa fa-ellipsis" onclick="ecToggleActionMenu(this)"></i><div class="ec-action-dropdown"><a href="#" onclick="return false">Modify</a><a href="#" onclick="return false">Delete</a></div></div></td></tr>
          <tr><td><input type="checkbox" /></td><td><a href="#" onclick="ecOpenJitSummary('Window access to all apps',3);return false">Window access to all apps</a></td><td>Jan 24, 2025 12:12 AM</td><td>Window</td><td><i class="fab fa-windows os-icon"></i> EC2AMAZ-DS25S0F</td><td>Succeeded</td><td>Allowlisting</td><td>Jan 29, 2027 05:30 AM</td><td><div class="ec-action-menu"><i class="fa fa-ellipsis" onclick="ecToggleActionMenu(this)"></i><div class="ec-action-dropdown"><a href="#" onclick="return false">Modify</a><a href="#" onclick="return false">Delete</a></div></div></td></tr>
          <tr><td><input type="checkbox" /></td><td><a href="#" onclick="ecOpenJitSummary('user specific jit elevation',4);return false">user specific jit elevation</a></td><td>--</td><td>Fixed</td><td><i class="fab fa-windows os-icon"></i> 001679907n4O</td><td>Failed</td><td>Elevation</td><td>Sep 9, 2025 02:21 PM</td><td><div class="ec-action-menu"><i class="fa fa-ellipsis" onclick="ecToggleActionMenu(this)"></i><div class="ec-action-dropdown"><a href="#" onclick="return false">Modify</a><a href="#" onclick="return false">Delete</a></div></div></td></tr>
          <tr><td><input type="checkbox" /></td><td><a href="#" onclick="ecOpenJitSummary('JIT allowlisting',5);return false">JIT allowlisting</a></td><td>--</td><td>Fixed</td><td><i class="fab fa-windows os-icon"></i> 0041000ePUlH</td><td>Failed</td><td>Allowlisting</td><td>Sep 9, 2025 02:22 PM</td><td><div class="ec-action-menu"><i class="fa fa-ellipsis" onclick="ecToggleActionMenu(this)"></i><div class="ec-action-dropdown"><a href="#" onclick="return false">Modify</a><a href="#" onclick="return false">Delete</a></div></div></td></tr>
          <tr><td><input type="checkbox" /></td><td><a href="#" onclick="ecOpenJitSummary('specific app access',6);return false">specific app access</a></td><td>--</td><td>Fixed</td><td><i class="fab fa-windows os-icon"></i> EC2AMAZ-DS25S0F</td><td>Failed</td><td>Allowlisting</td><td>Nov 20, 2025 02:16 PM</td><td><div class="ec-action-menu"><i class="fa fa-ellipsis" onclick="ecToggleActionMenu(this)"></i><div class="ec-action-dropdown"><a href="#" onclick="return false">Modify</a><a href="#" onclick="return false">Delete</a></div></div></td></tr>
          <tr><td><input type="checkbox" /></td><td><a href="#" onclick="ecOpenJitSummary('Mac all with block',7);return false">Mac all with block</a></td><td>--</td><td>Fixed</td><td><i class="fab fa-apple os-icon"></i> 010780015ksR</td><td>Failed</td><td>Allowlisting</td><td>Nov 20, 2025 02:20 PM</td><td><div class="ec-action-menu"><i class="fa fa-ellipsis" onclick="ecToggleActionMenu(this)"></i><div class="ec-action-dropdown"><a href="#" onclick="return false">Modify</a><a href="#" onclick="return false">Delete</a></div></div></td></tr>
          <tr><td><input type="checkbox" /></td><td><a href="#" onclick="ecOpenJitSummary('Mac Allow all Apps',8);return false">Mac Allow all Apps</a></td><td>--</td><td>Fixed</td><td><i class="fab fa-apple os-icon"></i> 0052200WJVMv</td><td>Failed</td><td>Allowlisting</td><td>Nov 21, 2025 01:20 PM</td><td><div class="ec-action-menu"><i class="fa fa-ellipsis" onclick="ecToggleActionMenu(this)"></i><div class="ec-action-dropdown"><a href="#" onclick="return false">Modify</a><a href="#" onclick="return false">Delete</a></div></div></td></tr>
          <tr><td><input type="checkbox" /></td><td><a href="#" onclick="ecOpenJitSummary('Linux Allow all Apps',9);return false">Linux Allow all Apps</a></td><td>--</td><td>Fixed</td><td><i class="fab fa-linux os-icon"></i> 0209099VaetS</td><td>Failed</td><td>Allowlisting</td><td>Mar 15, 2026 10:30 AM</td><td><div class="ec-action-menu"><i class="fa fa-ellipsis" onclick="ecToggleActionMenu(this)"></i><div class="ec-action-dropdown"><a href="#" onclick="return false">Modify</a><a href="#" onclick="return false">Delete</a></div></div></td></tr>
          <tr><td><input type="checkbox" /></td><td><a href="#" onclick="ecOpenJitSummary('Linux specific app access',10);return false">Linux specific app access</a></td><td>Mar 16, 2026 02:15 PM</td><td>Fixed</td><td><i class="fab fa-linux os-icon"></i> LinuxBuild-01</td><td>Succeeded</td><td>Allowlisting</td><td>Mar 16, 2026 06:15 PM</td><td><div class="ec-action-menu"><i class="fa fa-ellipsis" onclick="ecToggleActionMenu(this)"></i><div class="ec-action-dropdown"><a href="#" onclick="return false">Modify</a><a href="#" onclick="return false">Delete</a></div></div></td></tr>
        </tbody>
      </table>
    </div>
    <div class="table-pagination">
      <span>1 - 11 of <a href="#" style="color:#1a73e8">Total Records</a></span>
      <select><option>25</option></select>
      <span class="page-btn">&lt;</span>
      <span class="page-btn">&gt;</span>
    </div>
    <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>`,

  'jit-requests': () => `
    <div class="page-title-bar">
      <i class="fa fa-inbox page-icon"></i>
      <h1>JIT Requests <span style="background:#e53935;color:#fff;font-size:13px;font-weight:600;padding:2px 10px;border-radius:10px;margin-left:8px;vertical-align:middle" id="jitReqPendingCount">5</span> <i class="fa fa-circle-info info-icon"></i></h1>
    </div>
    <div class="toolbar">
      <button class="btn btn-sm" style="background:#2e7d32;color:#fff;border-color:#2e7d32" id="jitReqApproveBtn" disabled onclick="ecJitReqAction('Approved')"><i class="fa fa-check"></i> Approve</button>
      <button class="btn btn-sm" style="background:#c62828;color:#fff;border-color:#c62828" id="jitReqDeclineBtn" disabled onclick="ecJitReqAction('Declined')"><i class="fa fa-xmark"></i> Decline</button>
      <div class="filter-group" style="margin-left:8px"><span class="filter-label">JIT Requests :</span>
        <select id="jitReqStatusFilter" onchange="ecFilterJitRequests()">
          <option value="">All</option>
          <option value="Pending" selected>Pending</option>
          <option value="Approved">Approved</option>
          <option value="Declined">Declined</option>
        </select>
      </div>
      <div class="filter-group" style="margin-left:8px"><span class="filter-label">Request Type :</span>
        <select id="jitReqTypeFilter" onchange="ecFilterJitRequests()">
          <option value="">All</option>
          <option>Elevation</option>
          <option>Allowlisting</option>
        </select>
      </div>
      <div class="toolbar-right" style="margin-left:auto">
        <span class="total-records"><a href="#" style="color:#1a73e8">Total Records</a></span>
        <span class="icon-btn"><i class="fa fa-search"></i></span>
        <span class="icon-btn"><i class="fa fa-columns"></i></span>
        <span class="icon-btn"><i class="fa fa-download"></i></span>
      </div>
    </div>
    <div class="table-wrap">
      <table class="data-table jit-req-inbox" id="jitReqTable">
        <thead><tr>
          <th style="width:30px"><input type="checkbox" onclick="document.querySelectorAll('.jit-req-cb:not(:disabled)').forEach(c=>{c.checked=this.checked});ecUpdateJitReqSelection()" /></th>
          <th>Requested By</th>
          <th>Policy Name</th>
          <th>Request Type</th>
          <th>Computer Name</th>
          <th>Requested On <i class="fa fa-sort sort-icon"></i></th>
          <th>Duration</th>
          <th>Reason</th>
          <th>Request Status</th>
          <th>Actioned By</th>
          <th>Actioned On</th>
          <th>Action</th>
        </tr></thead>
        <tbody>
          <tr class="jit-req-row jit-req-unread" data-status="Pending" data-type="Elevation"><td><input type="checkbox" class="jit-req-cb" onchange="ecUpdateJitReqSelection()" /></td><td>john.doe</td><td><a href="#" onclick="ecOpenJitSummary('Temp Elevation - VS Code',20);return false">Temp Elevation - VS Code</a></td><td><span class="jit-type-badge elevation"><i class="fa fa-arrow-up"></i> Elevation</span></td><td><i class="fab fa-windows os-icon"></i> EC2AMAZ-DS25S0F</td><td>Apr 21, 2026 09:15 AM</td><td>2 hours</td><td style="max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="Need admin access to debug production issue">Need admin access to debug production issue</td><td><span class="jit-status-badge pending">Pending</span></td><td>--</td><td>--</td><td><div class="ec-action-menu"><i class="fa fa-ellipsis" onclick="ecToggleActionMenu(this)"></i><div class="ec-action-dropdown"><a href="#" onclick="ecJitReqRowAction(this,'Approved');return false"><i class="fa fa-check" style="color:#2e7d32"></i> Approve</a><a href="#" onclick="ecJitReqRowAction(this,'Declined');return false"><i class="fa fa-xmark" style="color:#c62828"></i> Decline</a><a href="#" onclick="return false"><i class="fa fa-pen" style="color:#1565c0"></i> Modify</a><a href="#" onclick="ecJitReqRowAction(this,'Deleted');return false"><i class="fa fa-trash" style="color:#888"></i> Delete</a></div></div></td></tr>
          <tr class="jit-req-row jit-req-unread" data-status="Pending" data-type="Allowlisting"><td><input type="checkbox" class="jit-req-cb" onchange="ecUpdateJitReqSelection()" /></td><td>sarah.kim</td><td><a href="#" onclick="ecOpenJitSummary('Allow Docker Desktop',21);return false">Allow Docker Desktop</a></td><td><span class="jit-type-badge allowlisting"><i class="fa fa-list-check"></i> Allowlisting</span></td><td><i class="fab fa-windows os-icon"></i> EngPC-01</td><td>Apr 21, 2026 08:45 AM</td><td>4 hours</td><td style="max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="Docker required for container testing">Docker required for container testing</td><td><span class="jit-status-badge pending">Pending</span></td><td>--</td><td>--</td><td><div class="ec-action-menu"><i class="fa fa-ellipsis" onclick="ecToggleActionMenu(this)"></i><div class="ec-action-dropdown"><a href="#" onclick="ecJitReqRowAction(this,'Approved');return false"><i class="fa fa-check" style="color:#2e7d32"></i> Approve</a><a href="#" onclick="ecJitReqRowAction(this,'Declined');return false"><i class="fa fa-xmark" style="color:#c62828"></i> Decline</a><a href="#" onclick="return false"><i class="fa fa-pen" style="color:#1565c0"></i> Modify</a><a href="#" onclick="ecJitReqRowAction(this,'Deleted');return false"><i class="fa fa-trash" style="color:#888"></i> Delete</a></div></div></td></tr>
          <tr class="jit-req-row jit-req-unread" data-status="Pending" data-type="Elevation"><td><input type="checkbox" class="jit-req-cb" onchange="ecUpdateJitReqSelection()" /></td><td>mike.chen</td><td><a href="#" onclick="ecOpenJitSummary('Elevate Wireshark',22);return false">Elevate Wireshark</a></td><td><span class="jit-type-badge elevation"><i class="fa fa-arrow-up"></i> Elevation</span></td><td><i class="fab fa-linux os-icon"></i> LinuxBuild-01</td><td>Apr 20, 2026 04:30 PM</td><td>1 hour</td><td style="max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="Network packet capture for troubleshooting">Network packet capture for troubleshooting</td><td><span class="jit-status-badge pending">Pending</span></td><td>--</td><td>--</td><td><div class="ec-action-menu"><i class="fa fa-ellipsis" onclick="ecToggleActionMenu(this)"></i><div class="ec-action-dropdown"><a href="#" onclick="ecJitReqRowAction(this,'Approved');return false"><i class="fa fa-check" style="color:#2e7d32"></i> Approve</a><a href="#" onclick="ecJitReqRowAction(this,'Declined');return false"><i class="fa fa-xmark" style="color:#c62828"></i> Decline</a><a href="#" onclick="return false"><i class="fa fa-pen" style="color:#1565c0"></i> Modify</a><a href="#" onclick="ecJitReqRowAction(this,'Deleted');return false"><i class="fa fa-trash" style="color:#888"></i> Delete</a></div></div></td></tr>
          <tr class="jit-req-row jit-req-unread" data-status="Pending" data-type="Allowlisting"><td><input type="checkbox" class="jit-req-cb" onchange="ecUpdateJitReqSelection()" /></td><td>lisa.wang</td><td><a href="#" onclick="ecOpenJitSummary('Allow Postman',23);return false">Allow Postman</a></td><td><span class="jit-type-badge allowlisting"><i class="fa fa-list-check"></i> Allowlisting</span></td><td><i class="fab fa-windows os-icon"></i> SupportPC-01</td><td>Apr 20, 2026 02:10 PM</td><td>8 hours</td><td style="max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="API testing for client integration">API testing for client integration</td><td><span class="jit-status-badge pending">Pending</span></td><td>--</td><td>--</td><td><div class="ec-action-menu"><i class="fa fa-ellipsis" onclick="ecToggleActionMenu(this)"></i><div class="ec-action-dropdown"><a href="#" onclick="ecJitReqRowAction(this,'Approved');return false"><i class="fa fa-check" style="color:#2e7d32"></i> Approve</a><a href="#" onclick="ecJitReqRowAction(this,'Declined');return false"><i class="fa fa-xmark" style="color:#c62828"></i> Decline</a><a href="#" onclick="return false"><i class="fa fa-pen" style="color:#1565c0"></i> Modify</a><a href="#" onclick="ecJitReqRowAction(this,'Deleted');return false"><i class="fa fa-trash" style="color:#888"></i> Delete</a></div></div></td></tr>
          <tr class="jit-req-row jit-req-unread" data-status="Pending" data-type="Allowlisting"><td><input type="checkbox" class="jit-req-cb" onchange="ecUpdateJitReqSelection()" /></td><td>raj.patel</td><td><a href="#" onclick="ecOpenJitSummary('Temp Access - npm install',24);return false">Temp Access - npm install</a></td><td><span class="jit-type-badge allowlisting"><i class="fa fa-list-check"></i> Allowlisting</span></td><td><i class="fab fa-linux os-icon"></i> LinuxSrv-02</td><td>Apr 20, 2026 11:30 AM</td><td>30 minutes</td><td style="max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="Installing node dependencies for build">Installing node dependencies for build</td><td><span class="jit-status-badge pending">Pending</span></td><td>--</td><td>--</td><td><div class="ec-action-menu"><i class="fa fa-ellipsis" onclick="ecToggleActionMenu(this)"></i><div class="ec-action-dropdown"><a href="#" onclick="ecJitReqRowAction(this,'Approved');return false"><i class="fa fa-check" style="color:#2e7d32"></i> Approve</a><a href="#" onclick="ecJitReqRowAction(this,'Declined');return false"><i class="fa fa-xmark" style="color:#c62828"></i> Decline</a><a href="#" onclick="return false"><i class="fa fa-pen" style="color:#1565c0"></i> Modify</a><a href="#" onclick="ecJitReqRowAction(this,'Deleted');return false"><i class="fa fa-trash" style="color:#888"></i> Delete</a></div></div></td></tr>
          <tr class="jit-req-row jit-req-read" data-status="Approved" data-type="Elevation" style="display:none"><td><input type="checkbox" class="jit-req-cb" onchange="ecUpdateJitReqSelection()" /></td><td>amy.zhang</td><td><a href="#" onclick="ecOpenJitSummary('Elevate IntelliJ IDEA',25);return false">Elevate IntelliJ IDEA</a></td><td><span class="jit-type-badge elevation"><i class="fa fa-arrow-up"></i> Elevation</span></td><td><i class="fab fa-windows os-icon"></i> DevPC-01</td><td>Apr 19, 2026 10:00 AM</td><td>4 hours</td><td style="max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="IDE needs elevated privileges for remote debugging">IDE needs elevated privileges for remote debugging</td><td><span class="jit-status-badge approved">Approved</span></td><td>admin</td><td>Apr 19, 2026 10:15 AM</td><td><div class="ec-action-menu"><i class="fa fa-ellipsis" onclick="ecToggleActionMenu(this)"></i><div class="ec-action-dropdown"><a href="#" onclick="return false"><i class="fa fa-pen" style="color:#1565c0"></i> Modify</a><a href="#" onclick="ecJitReqRowAction(this,'Deleted');return false"><i class="fa fa-trash" style="color:#888"></i> Delete</a></div></div></td></tr>
          <tr class="jit-req-row jit-req-read" data-status="Approved" data-type="Allowlisting" style="display:none"><td><input type="checkbox" class="jit-req-cb" onchange="ecUpdateJitReqSelection()" /></td><td>tom.wilson</td><td><a href="#" onclick="ecOpenJitSummary('Allow VPN Client',26);return false">Allow VPN Client</a></td><td><span class="jit-type-badge allowlisting"><i class="fa fa-list-check"></i> Allowlisting</span></td><td><i class="fab fa-windows os-icon"></i> RemotePC-01</td><td>Apr 18, 2026 03:20 PM</td><td>24 hours</td><td style="max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="VPN needed for remote office connectivity">VPN needed for remote office connectivity</td><td><span class="jit-status-badge approved">Approved</span></td><td>admin</td><td>Apr 18, 2026 03:45 PM</td><td><div class="ec-action-menu"><i class="fa fa-ellipsis" onclick="ecToggleActionMenu(this)"></i><div class="ec-action-dropdown"><a href="#" onclick="return false"><i class="fa fa-pen" style="color:#1565c0"></i> Modify</a><a href="#" onclick="ecJitReqRowAction(this,'Deleted');return false"><i class="fa fa-trash" style="color:#888"></i> Delete</a></div></div></td></tr>
          <tr class="jit-req-row jit-req-read" data-status="Declined" data-type="Allowlisting" style="display:none"><td><input type="checkbox" class="jit-req-cb" onchange="ecUpdateJitReqSelection()" /></td><td>kevin.lee</td><td><a href="#" onclick="ecOpenJitSummary('Allow BitTorrent',27);return false">Allow BitTorrent</a></td><td><span class="jit-type-badge allowlisting"><i class="fa fa-list-check"></i> Allowlisting</span></td><td><i class="fab fa-windows os-icon"></i> MktPC-02</td><td>Apr 18, 2026 01:00 PM</td><td>8 hours</td><td style="max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="Need to download large files quickly">Need to download large files quickly</td><td><span class="jit-status-badge declined">Declined</span></td><td>admin</td><td>Apr 18, 2026 01:30 PM</td><td><div class="ec-action-menu"><i class="fa fa-ellipsis" onclick="ecToggleActionMenu(this)"></i><div class="ec-action-dropdown"><a href="#" onclick="return false"><i class="fa fa-pen" style="color:#1565c0"></i> Modify</a><a href="#" onclick="ecJitReqRowAction(this,'Deleted');return false"><i class="fa fa-trash" style="color:#888"></i> Delete</a></div></div></td></tr>
          <tr class="jit-req-row jit-req-read" data-status="Approved" data-type="Elevation" style="display:none"><td><input type="checkbox" class="jit-req-cb" onchange="ecUpdateJitReqSelection()" /></td><td>nina.garcia</td><td><a href="#" onclick="ecOpenJitSummary('Elevate PowerShell',28);return false">Elevate PowerShell</a></td><td><span class="jit-type-badge elevation"><i class="fa fa-arrow-up"></i> Elevation</span></td><td><i class="fab fa-windows os-icon"></i> WinPC-01</td><td>Apr 17, 2026 09:45 AM</td><td>1 hour</td><td style="max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="Script execution for automated deployment - approved with modified duration">Script execution for automated deployment - approved with modified duration</td><td><span class="jit-status-badge approved">Approved</span></td><td>admin</td><td>Apr 17, 2026 10:00 AM</td><td><div class="ec-action-menu"><i class="fa fa-ellipsis" onclick="ecToggleActionMenu(this)"></i><div class="ec-action-dropdown"><a href="#" onclick="return false"><i class="fa fa-pen" style="color:#1565c0"></i> Modify</a><a href="#" onclick="ecJitReqRowAction(this,'Deleted');return false"><i class="fa fa-trash" style="color:#888"></i> Delete</a></div></div></td></tr>
          <tr class="jit-req-row jit-req-read" data-status="Declined" data-type="Allowlisting" style="display:none"><td><input type="checkbox" class="jit-req-cb" onchange="ecUpdateJitReqSelection()" /></td><td>david.brown</td><td><a href="#" onclick="ecOpenJitSummary('Allow Spotify',29);return false">Allow Spotify</a></td><td><span class="jit-type-badge allowlisting"><i class="fa fa-list-check"></i> Allowlisting</span></td><td><i class="fab fa-windows os-icon"></i> MktPC-05</td><td>Apr 16, 2026 02:30 PM</td><td>2 hours</td><td style="max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="Listening during work hours">Listening during work hours</td><td><span class="jit-status-badge declined">Declined</span></td><td>admin</td><td>Apr 16, 2026 03:00 PM</td><td><div class="ec-action-menu"><i class="fa fa-ellipsis" onclick="ecToggleActionMenu(this)"></i><div class="ec-action-dropdown"><a href="#" onclick="return false"><i class="fa fa-pen" style="color:#1565c0"></i> Modify</a><a href="#" onclick="ecJitReqRowAction(this,'Deleted');return false"><i class="fa fa-trash" style="color:#888"></i> Delete</a></div></div></td></tr>
        </tbody>
      </table>
    </div>
    <div class="table-pagination">
      <span>1 - 10 of <a href="#" style="color:#1a73e8">Total Records</a></span>
      <select><option>25</option></select>
      <span class="page-btn">&lt;</span>
      <span class="page-btn">&gt;</span>
    </div>
    <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>`,

  /* =================== SYSTEMS VIEW =================== */
  'systems-view': () => `
    <div class="content-inner">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px">
        <i class="fa fa-desktop" style="font-size:16px;color:#555"></i>
        <h1 style="font-size:17px;font-weight:600;color:#333">Systems View</h1>
      </div>
      <div class="toolbar" style="padding:0 0 12px">
        <div class="filter-group"><span class="filter-label">Filter By :</span>
          <select><option>Platform type</option></select>
          <select><option>Custom Group</option></select>
          <select><option>Association Status</option></select>
        </div>
        <div class="toolbar-right">
          <span class="total-records">Total Records</span>
          <span class="icon-btn"><i class="fa fa-search"></i></span>
          <span class="icon-btn"><i class="fa fa-columns"></i></span>
          <span class="icon-btn"><i class="fa fa-download"></i></span>
        </div>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead><tr>
            <th style="width:30px"><input type="checkbox" onclick="document.querySelectorAll('.sv-cb').forEach(c=>c.checked=this.checked)" /></th>
            <th>Computer Name <i class="fa fa-sort sort-icon"></i></th><th>Domain</th><th>Agent Version</th><th>Associated Application Group(s)</th><th>Operating System</th><th>IP Address</th><th>Associated...</th>
          </tr></thead>
          <tbody>
            <tr><td><input type="checkbox" class="sv-cb" /></td><td><i class="fa fa-th os-icon"></i>ues-w10-cloud1</td><td>WORKGROUP</td><td>11.3.2432.1.W</td><td>4</td><td>Windows 11 Professional Edition (x64)</td><td>192.168.140.39</td><td>2</td></tr>
            <tr><td><input type="checkbox" class="sv-cb" /></td><td><i class="fa fa-apple-whole os-icon"></i>uesqa-test11</td><td>WORKGROUP</td><td>11.3.2432.1.M</td><td>5</td><td>macOS - Sonoma</td><td>172.24.103.202</td><td>0</td></tr>
            <tr><td><input type="checkbox" class="sv-cb" /></td><td><i class="fa fa-th os-icon"></i>uesqa-w10-2</td><td>WORKGROUP</td><td>11.4.2514.01.W</td><td>5</td><td>Windows 10 Professional Edition (x64)</td><td>10.71.31.209,192.168....</td><td>4</td></tr>
            <tr><td><input type="checkbox" class="sv-cb" /></td><td><i class="fab fa-linux os-icon"></i>linux-build-srv1</td><td>WORKGROUP</td><td>11.4.2514.01.L</td><td>3</td><td>Ubuntu 22.04 LTS (x64)</td><td>10.71.32.105</td><td>2</td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-pagination">
        <span>1 - 4 of <a href="#" style="color:#1a73e8">Total Records</a></span>
        <select><option>25</option></select>
        <span class="page-btn">&lt;</span><span class="page-btn">&gt;</span>
      </div>
    </div>
    <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>`,

  /* =================== PRIVILEGE MANAGEMENT =================== */
  'priv-mgmt': () => `
    <div class="alert-banner info">
      <i class="fa fa-th"></i> Privilege Management is currently available only for Windows.
    </div>
    <div class="summary-panel" style="margin-top:20px">
      <div class="summary-header"><span>Summary</span><button class="btn-modify"><i class="fa fa-pen"></i> Modify</button></div>
      <div class="summary-row"><span class="sum-label">Elevate applications in Audit only mode <i class="fa fa-circle-question" style="color:#999;font-size:11px"></i></span><span class="sum-sep">:</span><span class="sum-value">Allowed</span></div>
      <div class="summary-row"><span class="sum-label">Privileges Elevated</span><span class="sum-sep">:</span><span class="sum-value">Specific applications selected</span></div>
      <div class="summary-row"><span class="sum-label">Auto Elevation</span><span class="sum-sep">:</span><span class="sum-value">Yes</span></div>
      <div class="summary-row"><span class="sum-label">Vendor(s) added to the list</span><span class="sum-sep">:</span><span class="sum-value"><a href="#">2</a></span></div>
      <div class="summary-row"><span class="sum-label">Product(s) added to the list</span><span class="sum-sep">:</span><span class="sum-value"><a href="#">2</a></span></div>
      <div class="summary-row"><span class="sum-label">Verified Executable(s) added to the list</span><span class="sum-sep">:</span><span class="sum-value"><a href="#">2</a></span></div>
      <div class="summary-row"><span class="sum-label">FileHash added to the list</span><span class="sum-sep">:</span><span class="sum-value"><a href="#">2</a></span></div>
      <div class="summary-row"><span class="sum-label">Folder Path added to the list</span><span class="sum-sep">:</span><span class="sum-value"><a href="#">1</a></span></div>
      <div class="summary-row"><span class="sum-label">Audit of Elevated Applications</span><span class="sum-sep">:</span><span class="sum-value"><a href="#">View Audit Applications</a></span></div>
      <div class="summary-row"><span class="sum-label">Created Time</span><span class="sum-sep">:</span><span class="sum-value">Oct 7, 2024, 02:47 PM</span></div>
      <div class="summary-row"><span class="sum-label">Modified Time</span><span class="sum-sep">:</span><span class="sum-value">Oct 7, 2024, 02:47 PM</span></div>
    </div>
    ${ecQuickLinks('priv-mgmt')}`,

  /* =================== REMOVE ADMIN RIGHTS =================== */
  'remove-admin': () => `
    <div class="page-title-bar"><i class="fa fa-user-shield page-icon"></i><h1>Remove Admin Rights</h1></div>
    <div class="content-inner">
      <div class="summary-panel">
        <div class="summary-header"><span>Admin Rights Removal</span></div>
        <div style="padding:40px;text-align:center;color:#999"><i class="fa fa-users" style="font-size:48px;margin-bottom:12px;display:block"></i><p>No data available</p></div>
      </div>
    </div>`,

  /* =================== REPORTS =================== */
  'ac-reports': () => `
    <div class="alert-banner info" style="border-radius:0;border-bottom:1px solid #c8dafe">
      <i class="fa fa-circle-info"></i>
      <span>Application Control reports will include data from the last 90 days, with older data automatically cleaned up. To retain historical data, use <a href="#" style="color:#1a73e8">scheduled reports to back up the events periodically</a></span>
    </div>
    <div class="reports-grid">
      <div class="report-category">
        <h3 class="report-cat-title">Discovered Applications Reports</h3>
        <a class="report-link" onclick="ecShowSubReport('rpt-discovered-products')">&rsaquo; Discovered Products</a>
        <a class="report-link" onclick="ecShowSubReport('rpt-discovered-unverified-exe')">&rsaquo; Discovered Unverified Executables</a>
        <a class="report-link" onclick="ecShowSubReport('rpt-discovered-store-apps')">&rsaquo; Discovered Store Applications</a>
        <a class="report-link" onclick="ecShowSubReport('rpt-discovered-child-process')">&rsaquo; Discovered Child Process</a>
      </div>
      <div class="report-category">
        <h3 class="report-cat-title">Unmanaged Application Reports</h3>
        <a class="report-link" onclick="ecShowSubReport('rpt-unmanaged-products')">&rsaquo; Unmanaged Products</a>
        <a class="report-link" onclick="ecShowSubReport('rpt-unmanaged-executables')">&rsaquo; Unmanaged Executables</a>
        <a class="report-link" onclick="ecShowSubReport('rpt-unmanaged-store-apps')">&rsaquo; Unmanaged Store Applications</a>
      </div>
      <div class="report-category">
        <h3 class="report-cat-title">Event Audit Reports</h3>
        <a class="report-link" onclick="ecShowSubReport('rpt-blocklisted-app-access')">&rsaquo; Blocklisted Application Access</a>
        <a class="report-link" onclick="ecShowSubReport('rpt-blocklisted-store-access')">&rsaquo; Blocklisted Store Applications Access</a>
        <a class="report-link" onclick="ecShowSubReport('rpt-elevated-with-reason')">&rsaquo; Applications Elevated with Reason</a>
        <a class="report-link" onclick="ecShowSubReport('rpt-admin-privileges')">&rsaquo; Applications running with Administrator Privileges</a>
      </div>
    </div>
    <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>`,

  /* --- Sub-report pages --- */
  'rpt-discovered-products': () => ecReportPage('Discovered Products',
    ['Product Name','Vendor','Publisher Credibility','Resource Count'],
    [
      ['.NET','.NET','Verified Publisher','1'],
      ['7-Zip','Trend Micro, Inc.','Verified Publisher','1'],
      ['7-Zip','VMware, Inc.','Verified Publisher','1'],
      ['Antivirus Installer','Avast Software s.r.o.','Verified Publisher','1'],
      ['Avast','Avast Software s.r.o.','Verified Publisher','1'],
      ['Avast Antivirus','Avast Software s.r.o.','Verified Publisher','1'],
      ['Avast Antivirus','Avast Software s.r.o.','Verified Publisher','1'],
      ['Avast Installer','Avast Software s.r.o.','Verified Publisher','1'],
      ['Background updater','PortSwigger Ltd','Verified Publisher','1'],
      ['BETest','Microsoft Corporation','Verified Publisher','1'],
    ], '1 - 10 of'),

  'rpt-discovered-unverified-exe': () => ecReportPage('Discovered Unverified Executables',
    ['Executable Name','Vendor','Product Name'],
    [
      ['CocoaApplet','--','Cocoa-AppleScript Applet.app'],
      ['GarageBand','Apple Mac OS Application Signing','GarageBand.app'],
      ['iMovie','Apple Mac OS Application Signing','iMovie.app'],
      ['java','Eclipse Foundation, Inc.','--'],
      ['Keynote','Apple Mac OS Application Signing','Keynote.app'],
      ['Numbers','Apple Mac OS Application Signing','Numbers.app'],
      ['Pages','Apple Mac OS Application Signing','Pages.app'],
    ], '1 - 7 of'),

  'rpt-discovered-store-apps': () => ecReportPage('Discovered Store Applications',
    ['Application Name','Publisher','Platform','Resource Count'],
    [
      ['Microsoft Edge WebView2 Runtime','Microsoft Corporation','Windows','1'],
      ['App Installer','Microsoft Corporation','Windows','1'],
    ], '1 - 2 of'),

  'rpt-discovered-child-process': () => ecReportPage('Discovered Child Process',
    ['Parent Application','Child Process','Computer Name','Detected Time'],
    [
      ['chrome.exe','chrome_pwa_launcher.exe','ues-w10-cloud1','Mar 16, 2026 10:15 AM'],
      ['notepad++.exe','gup.exe','ues-w10-cloud1','Mar 15, 2026 04:32 PM'],
      ['ms-teams.exe','msedgewebview2.exe','uesqa-w10-2','Mar 15, 2026 02:18 PM'],
      ['git.exe','git-credential-manager.exe','ues-w10-cloud1','Mar 14, 2026 11:45 AM'],
      ['git.exe','git-lfs.exe','uesqa-w10-2','Mar 14, 2026 09:20 AM'],
      ['backgroundTaskHost.exe','RuntimeBroker.exe','ues-w10-cloud1','Mar 13, 2026 03:55 PM'],
    ], '1 - 6 of'),

  'rpt-unmanaged-products': () => ecReportPage('Unmanaged Products',
    ['Product Name <i class="fa fa-sort sort-icon"></i>','Vendor <i class="fa fa-sort sort-icon"></i>','Publisher Credibility','Resource Count'],
    [
      ['.NET','.NET','Verified Publisher','1'],
      ['7-Zip','Trend Micro, Inc.','Verified Publisher','1'],
      ['7-Zip','VMware, Inc.','Verified Publisher','1'],
      ['Antivirus Installer','Avast Software s.r.o.','Verified Publisher','1'],
      ['Avast','Avast Software s.r.o.','Verified Publisher','1'],
      ['Avast Antivirus','Avast Software s.r.o.','Verified Publisher','1'],
      ['Avast Antivirus','Avast Software s.r.o.','Verified Publisher','1'],
      ['Avast Installer','Avast Software s.r.o.','Verified Publisher','1'],
      ['Background updater','PortSwigger Ltd','Verified Publisher','1'],
      ['BETest','Microsoft Corporation','Verified Publisher','1'],
    ], '1 - 25 of'),

  'rpt-unmanaged-executables': () => ecReportPage('Unmanaged Executables',
    ['Executable Name','Vendor','Product Name','Resource Count'],
    [
      ['CocoaApplet','--','Cocoa-AppleScript Applet.app','1'],
      ['GarageBand','Apple Mac OS Application Signing','GarageBand.app','1'],
      ['java','Eclipse Foundation, Inc.','--','1'],
      ['Keynote','Apple Mac OS Application Signing','Keynote.app','1'],
    ], '1 - 4 of'),

  'rpt-unmanaged-store-apps': () => ecReportPage('Unmanaged Store Applications',
    ['Application Name','Publisher','Platform','Resource Count'],
    [
      ['Microsoft Edge WebView2 Runtime','Microsoft Corporation','Windows','1'],
    ], '1 - 1 of'),

  'rpt-blocklisted-app-access': () => ecReportPage('Blocklisted Application Access',
    ['Product Name','Vendor','Publisher Credibility','Resource Count <i class="fa fa-sort sort-icon"></i>','Executable Name','File Hash'],
    [
      ['Brave Installer','Brave Software, Inc.','Verified Publisher','<a href="#">1</a>','chrmstp.exe','A01B7A5AABA96AE2...'],
      ['IntelliJ Platform','JetBrains s.r.o.','Verified Publisher','<a href="#">1</a>','runnerw.exe','2B66D6A8EFE9451AE...'],
      ['Microsoft 365 and Office','Microsoft Corporation','Verified Publisher','<a href="#">1</a>','OfficeC2RClient.exe','8521542E5119A3B55...'],
      ['Brave Browser','Brave Software, Inc.','Verified Publisher','<a href="#">1</a>','brave.exe','D9D8ACF4DBC502F6...'],
      ['Microsoft Remote Desk...','Microsoft Corporation','Verified Publisher','<a href="#">1</a>','Microsoft Remote Desk...','a1420e8c2c3152ad81...'],
      ['Keynote.app','Apple Mac OS Applicati...','Unverified Publisher','<a href="#">1</a>','Keynote','16b6f26377e9f49cbb2...'],
      ['Firefox','Mozilla Corporation','Verified Publisher','<a href="#">1</a>','default-browser-agent....','567285C864A4B21A8...'],
      ['VLC.app','VideoLAN','Verified Publisher','<a href="#">1</a>','VLC','6fd71f0d89d36fc6524...'],
      ['Microsoft Edge.app','Microsoft Corporation','Verified Publisher','<a href="#">1</a>','Microsoft Edge','737a187f05f15a63ef9f...'],
      ['Loom.app','Loom, Inc','Verified Publisher','<a href="#">1</a>','Loom','2b4f5013f6da04d3bb...'],
    ], '1 - 13 of'),

  'rpt-blocklisted-store-access': () => ecReportPage('Blocklisted Store Applications Access',
    ['Application Name','Publisher','Platform','Access Count','Last Accessed'],
    [
      ['Microsoft Edge WebView2 Runtime','Microsoft Corporation','Windows','<a href="#">3</a>','Mar 15, 2026 10:32 AM'],
      ['App Installer','Microsoft Corporation','Windows','<a href="#">2</a>','Mar 14, 2026 03:18 PM'],
      ['Windows Terminal','Microsoft Corporation','Windows','<a href="#">1</a>','Mar 12, 2026 09:45 AM'],
      ['Snipping Tool','Microsoft Corporation','Windows','<a href="#">1</a>','Mar 10, 2026 02:21 PM'],
    ], '1 - 4 of'),

  'rpt-elevated-with-reason': () => ecReportPage('Applications Elevated with Reason',
    ['Executable Name','Vendor','Product Name','Reason','Elevation Count','Last Elevated'],
    [
      ['cmd.exe','Microsoft Corporation','Windows Command Processor','Business Justification','<a href="#">12</a>','Mar 16, 2026 11:05 AM'],
      ['powershell.exe','Microsoft Corporation','Windows PowerShell','Business Justification','<a href="#">8</a>','Mar 16, 2026 09:47 AM'],
      ['regedit.exe','Microsoft Corporation','Registry Editor','Admin Approval','<a href="#">5</a>','Mar 15, 2026 04:30 PM'],
      ['msiexec.exe','Microsoft Corporation','Windows Installer','Auto Elevation','<a href="#">4</a>','Mar 15, 2026 02:12 PM'],
      ['notepad++.exe','Notepad++ Team','Notepad++','Business Justification','<a href="#">3</a>','Mar 14, 2026 01:55 PM'],
      ['devenv.exe','Microsoft Corporation','Visual Studio','Auto Elevation','<a href="#">2</a>','Mar 13, 2026 10:20 AM'],
      ['git.exe','The Git Development Community','Git for Windows','Auto Elevation','<a href="#">2</a>','Mar 12, 2026 03:40 PM'],
    ], '1 - 7 of'),

  'rpt-admin-privileges': () => ecReportPage('Applications running with Administrator Privileges',
    ['Executable Name','Vendor','Product Name','Computer Name','Run Count'],
    [
      ['services.exe','Microsoft Corporation','Windows Services Controller','ues-w10-cloud1','<a href="#">48</a>'],
      ['svchost.exe','Microsoft Corporation','Host Process for Windows Services','ues-w10-cloud1','<a href="#">35</a>'],
      ['taskmgr.exe','Microsoft Corporation','Task Manager','uesqa-w10-2','<a href="#">12</a>'],
      ['cmd.exe','Microsoft Corporation','Windows Command Processor','ues-w10-cloud1','<a href="#">9</a>'],
      ['powershell.exe','Microsoft Corporation','Windows PowerShell','uesqa-w10-2','<a href="#">7</a>'],
      ['regedit.exe','Microsoft Corporation','Registry Editor','ues-w10-cloud1','<a href="#">5</a>'],
      ['mmc.exe','Microsoft Corporation','Microsoft Management Console','uesqa-w10-2','<a href="#">4</a>'],
      ['brave.exe','Brave Software, Inc.','Brave Browser','ues-w10-cloud1','<a href="#">3</a>'],
      ['OfficeC2RClient.exe','Microsoft Corporation','Microsoft 365 and Office','uesqa-w10-2','<a href="#">2</a>'],
      ['devenv.exe','Microsoft Corporation','Visual Studio','ues-w10-cloud1','<a href="#">2</a>'],
    ], '1 - 10 of'),

  /* =================== ALERT SETTINGS =================== */
  'alert-settings': () => `
    <div class="page-title-bar"><i class="fa fa-bell page-icon"></i><h1>Alert Settings</h1></div>
    <div class="content-inner">
      <div class="alert-banner error" style="border-radius:6px;margin-bottom:16px">
        <div><strong style="color:#d32f2f">No mail server configuration found</strong><br/>
        <span style="color:#555">Configure mail server details to send alert notifications</span>
        <a href="#" style="margin-left:6px">Configure Now</a></div>
      </div>
      <div class="settings-form">
        <h3 style="font-size:14px;font-weight:600;color:#333;margin-bottom:16px">Configure Alert Settings</h3>
        <div class="form-group">
          <label>Alert for Requested Apps <i class="fa fa-circle-question" style="color:#999;font-size:11px"></i></label>
          <input type="email" placeholder="Enter email address" />
        </div>
        <div class="restricted-msg"><i class="fa fa-exclamation-circle"></i> Running in restricted mode</div>
        <div style="margin-top:16px;text-align:center"><button class="btn-save">Save</button></div>
      </div>
    </div>
    <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>`,

  /* =================== SAVED POLICIES =================== */
  'saved-policies': () => `
    <div class="page-title-bar">
      <i class="fa fa-file-shield page-icon"></i>
      <h1>Saved Policies</h1>
    </div>
    <div class="toolbar">
      <div class="filter-group"><span class="filter-label">Filter By :</span>
        <select><option>Platform</option><option>Windows</option><option>Mac</option><option>Linux</option></select>
        <select><option>Mode</option><option>Audit</option><option>Strict</option></select>
      </div>
      <div class="toolbar-right">
        <span class="total-records">Total Records</span>
        <span class="icon-btn"><i class="fa fa-search"></i></span>
        <span class="icon-btn"><i class="fa fa-columns"></i></span>
        <span class="icon-btn"><i class="fa fa-download"></i></span>
      </div>
    </div>
    <div class="table-wrap">
      <table class="data-table">
        <thead><tr>
          <th>Policy Name <i class="fa fa-sort sort-icon"></i></th>
          <th>Platform</th><th>Mode</th><th>Allowlist Groups</th><th>Blocklist Groups</th><th>Created Time</th><th>Last Modified</th><th>Action</th>
        </tr></thead>
        <tbody>
          <tr><td><a href="#" onclick="ecOpenPolicySummary('Windows Strict Policy','windows','Strict');return false">Windows Strict Policy</a></td><td><i class="fab fa-windows os-icon"></i>Windows</td><td><span class="flex-badge strict"><i class="fa fa-circle" style="font-size:6px"></i> Strict</span></td><td>2</td><td>1</td><td>Mar 10, 2026 09:1...</td><td>Mar 16, 20...</td><td><i class="fa fa-ellipsis"></i></td></tr>
          <tr><td><a href="#" onclick="ecOpenPolicySummary('Windows Audit Policy','windows','Audit');return false">Windows Audit Policy</a></td><td><i class="fab fa-windows os-icon"></i>Windows</td><td><span class="flex-badge audit"><i class="fa fa-search" style="font-size:10px"></i> Audit</span></td><td>3</td><td>1</td><td>Mar 12, 2026 11:3...</td><td>Mar 16, 20...</td><td><i class="fa fa-ellipsis"></i></td></tr>
          <tr><td><a href="#" onclick="ecOpenPolicySummary('Mac Audit Policy','mac','Audit');return false">Mac Audit Policy</a></td><td><i class="fab fa-apple os-icon"></i>Mac</td><td><span class="flex-badge audit"><i class="fa fa-search" style="font-size:10px"></i> Audit</span></td><td>1</td><td>1</td><td>Mar 14, 2026 02:4...</td><td>Mar 16, 20...</td><td><i class="fa fa-ellipsis"></i></td></tr>
          <tr><td><a href="#" onclick="ecOpenPolicySummary('Linux Strict Policy','linux','Strict');return false">Linux Strict Policy</a></td><td><i class="fab fa-linux os-icon"></i>Linux</td><td><span class="flex-badge strict"><i class="fa fa-circle" style="font-size:6px"></i> Strict</span></td><td>1</td><td>0</td><td>Mar 15, 2026 10:0...</td><td>Mar 17, 20...</td><td><i class="fa fa-ellipsis"></i></td></tr>
          <tr><td><a href="#" onclick="ecOpenPolicySummary('Linux Audit Policy','linux','Audit');return false">Linux Audit Policy</a></td><td><i class="fab fa-linux os-icon"></i>Linux</td><td><span class="flex-badge audit"><i class="fa fa-search" style="font-size:10px"></i> Audit</span></td><td>2</td><td>1</td><td>Mar 16, 2026 08:2...</td><td>Mar 17, 20...</td><td><i class="fa fa-ellipsis"></i></td></tr>
        </tbody>
      </table>
    </div>
    <div class="table-pagination">
      <span>1 - 5 of <a href="#" style="color:#1a73e8">Total Records</a></span>
      <select><option>25</option></select>
      <span class="page-btn">&lt;</span>
      <span class="page-btn">&gt;</span>
    </div>
    <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>`,

  /* =================== SCHEDULE / QUERY REPORTS =================== */
  'schedule-reports': () => `
    <div class="toolbar">
      <button class="btn btn-primary">Add Schedule Report</button>
      <span class="icon-btn"><i class="fa fa-gear"></i></span>
      <div class="toolbar-right">
        <span class="icon-btn"><i class="fa fa-search"></i></span>
        <span class="icon-btn"><i class="fa fa-columns"></i></span>
      </div>
    </div>
    <div class="table-wrap">
      <table class="data-table">
        <thead><tr><th>Scheduler Name</th><th>Last Run Time</th><th>Next Run Time</th><th>Email To</th><th>Status</th><th>Action</th><th>Frequency</th></tr></thead>
        <tbody><tr><td colspan="7" style="text-align:center;color:#999;padding:24px">No task has been added yet</td></tr></tbody>
      </table>
    </div>
    <div class="table-pagination"><span>Rows per page</span><select><option>25</option></select><span style="margin-left:auto">0 - 0 of 0</span><span class="page-btn">&lt;</span><span class="page-btn">&gt;</span></div>`,

  'query-reports': () => `
    <div class="page-title-bar"><i class="fa fa-file-lines page-icon"></i><h1>Query Reports</h1></div>
    <div class="content-inner" style="text-align:center;padding:60px;color:#999">
      <i class="fa fa-file-circle-question" style="font-size:48px;margin-bottom:12px;display:block"></i>
      <p>No query reports configured yet.</p>
    </div>`,
};

/* === EC HELPERS === */
function ecHBar(items, color) {
  const max = Math.max(...items.map(i => i.count));
  return items.map(it =>
    `<div class="bar-row">
      <span class="bar-label">${it.label}</span>
      <span class="bar-track"><span class="bar-fill ${color}" style="width:${Math.round(it.count / max * 100)}%"></span></span>
      <span class="bar-count">${it.count}</span>
    </div>`
  ).join('');
}

function ecQuickLinks(ctx) {
  const items = {
    'app-groups': ['How to create an application group (allowlist/blocklist)?','How to check if the Vendor/Product/EXE is verified or not?'],
    'deploy-policy': ['How to create Custom Group?','How to deploy policy?','What are the different flexibility modes and how to enable them?','How to modify or delete an existing application control policy?'],
    'priv-mgmt': ['How to configure Privilege Management?','How to create elevation rules?'],
  };
  const list = items[ctx] || ['Documentation coming soon.'];
  return `<div class="quick-links">
    <div class="quick-links-header"><h3>Quick Links</h3><span class="toggle"><i class="fa fa-chevron-up"></i> Hide</span></div>
    <div class="ql-tabs"><div class="ql-tab active">How Tos</div><div class="ql-tab">FAQ</div></div>
    <div class="ql-content"><ol>${list.map(q => `<li>${q}</li>`).join('')}</ol></div>
  </div>`;
}

function ecReportPage(title, headers, rows, paginationText) {
  return `
    <div class="report-breadcrumb">
      <a href="#" onclick="ecShowSubReport('ac-reports');return false">Application Control Reports</a>
      <span class="bc-sep">&rsaquo;</span>
      <span class="bc-current">${title}</span>
    </div>
    <div class="report-sub-title">${title}</div>
    <div class="toolbar" style="padding:12px 28px">
      <div class="filter-group"><span class="filter-label">Filter By :</span>
        <select><option>Platform type</option></select>
      </div>
      <div class="toolbar-right">
        <span class="total-records">Total Records</span>
        <span class="icon-btn"><i class="fa fa-search"></i></span>
        <span class="icon-btn"><i class="fa fa-columns"></i></span>
        <span class="icon-btn"><i class="fa fa-download"></i></span>
      </div>
    </div>
    <div class="table-wrap">
      <table class="data-table">
        <thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
        <tbody>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>
    <div class="table-pagination">
      <span>${paginationText} <a href="#" style="color:#1a73e8">Total Records</a></span>
      <select><option>25</option></select>
      <span class="page-btn">&lt;</span>
      <span class="page-btn">&gt;</span>
    </div>
    <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>`;
}

/** Navigate to a sub-report page */
function ecShowSubReport(pageId) {
  const gen = EC_PAGES[pageId];
  if (!gen) return;
  const content = document.getElementById('pageContent');
  if (content) {
    content.innerHTML = gen();
    content.scrollTop = 0;
  }
}

/* ================================================================
 *  JUST IN TIME ACCESS — Summary page
 * ================================================================ */
const EC_JIT_POLICIES = [
  {
    name: 'allow with elevation', description: '--', createdBy: 'demo', modifiedBy: 'demo',
    createdTime: 'Nov 17, 2022, 03:08:07 PM', modifiedTime: 'Nov 17, 2022, 03:08:07 PM',
    computer: 'Florina', computerIcon: 'fab fa-windows', deviceFriendly: 'Florina abc123-def456-ghi789',
    userName: 'All Users Group', domainName: '--',
    durationType: 'Fixed', accessDuration: '8 Hours',
    appliedTime: 'Nov 17, 2022, 03:08:09 PM',
    accessType: 'Specific applications', vendorsAdded: 2, productsAdded: 1, executablesAdded: 2, fileHashAdded: 1, storeAppsAdded: 0, folderPathAdded: 1,
    selfElevation: 'All Allowed Application(s)'
  },
  {
    name: 'allow with elevation', description: '--', createdBy: 'demo', modifiedBy: 'demo',
    createdTime: 'Jan 23, 2025, 06:48:07 PM', modifiedTime: 'Jan 23, 2025, 06:48:07 PM',
    computer: 'EC2AMAZ-DS25S0F', computerIcon: 'fab fa-windows', deviceFriendly: 'EC2AMAZ-DS25S0F ec29c965-e000-0252-737a-118cb46b706d',
    userName: 'All Users Group', domainName: '--',
    durationType: 'Fixed', accessDuration: '1 Hour',
    appliedTime: 'Jan 23, 2025, 06:48:09 PM',
    accessType: 'Specific applications', vendorsAdded: 3, productsAdded: 3, executablesAdded: 3, fileHashAdded: 3, storeAppsAdded: 3, folderPathAdded: 2,
    selfElevation: 'All Allowed Application(s)'
  },
  {
    name: 'Access for specific app', description: '--', createdBy: 'demo', modifiedBy: 'demo',
    createdTime: 'Jan 24, 2025, 12:08:00 AM', modifiedTime: 'Jan 24, 2025, 12:08:00 AM',
    computer: 'EC2AMAZ-DS25S0F', computerIcon: 'fab fa-windows', deviceFriendly: 'EC2AMAZ-DS25S0F ec29c965-e000-0252-737a-118cb46b706d',
    userName: 'All Users Group', domainName: '--',
    durationType: 'Fixed', accessDuration: '1 Hour',
    appliedTime: 'Jan 24, 2025, 12:08:02 AM',
    accessType: 'Specific applications', vendorsAdded: 1, productsAdded: 2, executablesAdded: 1, fileHashAdded: 0, storeAppsAdded: 0, folderPathAdded: 0,
    selfElevation: 'All Allowed Application(s)'
  },
  {
    name: 'Window access to all apps', description: '--', createdBy: 'demo', modifiedBy: 'demo',
    createdTime: 'Jan 24, 2025, 12:12:00 AM', modifiedTime: 'Jan 24, 2025, 12:12:00 AM',
    computer: 'EC2AMAZ-DS25S0F', computerIcon: 'fab fa-windows', deviceFriendly: 'EC2AMAZ-DS25S0F ec29c965-e000-0252-737a-118cb46b706d',
    userName: 'All Users Group', domainName: '--',
    durationType: 'Window', accessDuration: '1 Week',
    appliedTime: 'Jan 24, 2025, 12:12:05 AM',
    accessType: 'All Applications', vendorsAdded: 0, productsAdded: 0, executablesAdded: 0, fileHashAdded: 0, storeAppsAdded: 0, folderPathAdded: 0,
    selfElevation: 'All Allowed Application(s)'
  },
  {
    name: 'user specific jit elevation', description: '--', createdBy: 'demo', modifiedBy: 'demo',
    createdTime: 'Sep 9, 2025, 02:21:00 PM', modifiedTime: 'Sep 9, 2025, 02:21:00 PM',
    computer: '001679907n4O', computerIcon: 'fab fa-windows', deviceFriendly: '001679907n4O 2C8TY-XXXX',
    userName: 'admin', domainName: 'WORKGROUP',
    durationType: 'Fixed', accessDuration: '1 Hour',
    appliedTime: '--',
    accessType: 'All Allowed Application(s)', vendorsAdded: 0, productsAdded: 0, executablesAdded: 0, fileHashAdded: 0, storeAppsAdded: 0, folderPathAdded: 0,
    selfElevation: 'All Allowed Application(s)'
  },
  {
    name: 'JIT allowlisting', description: '--', createdBy: 'demo', modifiedBy: 'demo',
    createdTime: 'Sep 9, 2025, 02:22:00 PM', modifiedTime: 'Sep 9, 2025, 02:22:00 PM',
    computer: '0041000ePUlH', computerIcon: 'fab fa-windows', deviceFriendly: '0041000ePUlH HCJKO-XXXX',
    userName: 'All Users Group', domainName: '--',
    durationType: 'Fixed', accessDuration: '1 Hour',
    appliedTime: '--',
    accessType: 'All Applications', vendorsAdded: 0, productsAdded: 0, executablesAdded: 0, fileHashAdded: 0, storeAppsAdded: 0, folderPathAdded: 0,
    selfElevation: 'All Allowed Application(s)'
  },
  {
    name: 'specific app access', description: '--', createdBy: 'demo', modifiedBy: 'demo',
    createdTime: 'Nov 20, 2025, 02:16:00 PM', modifiedTime: 'Nov 20, 2025, 02:16:00 PM',
    computer: 'EC2AMAZ-DS25S0F', computerIcon: 'fab fa-windows', deviceFriendly: 'EC2AMAZ-DS25S0F ec29c965-e000-0252-737a-118cb46b706d',
    userName: 'All Users Group', domainName: '--',
    durationType: 'Fixed', accessDuration: '1 Hour',
    appliedTime: '--',
    accessType: 'Specific applications', vendorsAdded: 2, productsAdded: 1, executablesAdded: 0, fileHashAdded: 1, storeAppsAdded: 0, folderPathAdded: 0,
    selfElevation: 'All Allowed Application(s)'
  },
  {
    name: 'Mac all with block', description: '--', createdBy: 'demo', modifiedBy: 'demo',
    createdTime: 'Nov 20, 2025, 02:20:00 PM', modifiedTime: 'Nov 20, 2025, 02:20:00 PM',
    computer: '010780015ksR', computerIcon: 'fab fa-apple', deviceFriendly: '010780015ksR Y53R9-XXXX',
    userName: 'All Users Group', domainName: '--',
    durationType: 'Fixed', accessDuration: '1 Hour',
    appliedTime: '--',
    accessType: 'All Applications', vendorsAdded: 0, productsAdded: 0, executablesAdded: 0, fileHashAdded: 0, storeAppsAdded: 0, folderPathAdded: 0,
    selfElevation: 'All Allowed Application(s)'
  },
  {
    name: 'Mac Allow all Apps', description: '--', createdBy: 'demo', modifiedBy: 'demo',
    createdTime: 'Nov 21, 2025, 01:20:00 PM', modifiedTime: 'Nov 21, 2025, 01:20:00 PM',
    computer: '0052200WJVMv', computerIcon: 'fab fa-apple', deviceFriendly: '0052200WJVMv AV7AMDL',
    userName: 'All Users Group', domainName: '--',
    durationType: 'Fixed', accessDuration: '1 Hour',
    appliedTime: '--',
    accessType: 'All Applications', vendorsAdded: 0, productsAdded: 0, executablesAdded: 0, fileHashAdded: 0, storeAppsAdded: 0, folderPathAdded: 0,
    selfElevation: 'All Allowed Application(s)'
  },
  {
    name: 'Linux Allow all Apps', description: '--', createdBy: 'demo', modifiedBy: 'demo',
    createdTime: 'Mar 15, 2026, 10:30:00 AM', modifiedTime: 'Mar 15, 2026, 10:30:00 AM',
    computer: '0209099VaetS', computerIcon: 'fab fa-linux', deviceFriendly: '0209099VaetS LNXSRV01',
    userName: 'All Users Group', domainName: '--',
    durationType: 'Fixed', accessDuration: '2 Hours',
    appliedTime: '--',
    accessType: 'All Applications', vendorsAdded: 0, productsAdded: 0, executablesAdded: 0, fileHashAdded: 0, storeAppsAdded: 0, folderPathAdded: 0,
    selfElevation: 'All Allowed Application(s)'
  },
  {
    name: 'Linux specific app access', description: '--', createdBy: 'demo', modifiedBy: 'demo',
    createdTime: 'Mar 16, 2026, 02:15:00 PM', modifiedTime: 'Mar 16, 2026, 02:15:00 PM',
    computer: 'LinuxBuild-01', computerIcon: 'fab fa-linux', deviceFriendly: 'LinuxBuild-01 BLDX-7842',
    userName: 'admin', domainName: 'WORKGROUP',
    durationType: 'Fixed', accessDuration: '4 Hours',
    appliedTime: 'Mar 16, 2026, 02:15:05 PM',
    accessType: 'Specific applications', vendorsAdded: 1, productsAdded: 2, executablesAdded: 1, fileHashAdded: 0, storeAppsAdded: 0, folderPathAdded: 1,
    selfElevation: 'All Allowed Application(s)'
  }
];

function ecOpenJitSummary(policyName, idx) {
  const content = document.getElementById('pageContent');
  if (!content) return;

  const p = EC_JIT_POLICIES[idx] || EC_JIT_POLICIES[0];

  const summaryRows = [
    ['Policy Name', p.name, 'Description', p.description],
    ['Created by', p.createdBy, 'Created Time', p.createdTime],
    ['Last Modified by', p.modifiedBy, 'Modified Time', p.modifiedTime],
  ];
  const summaryHtml = summaryRows.map(r =>
    `<div class="jit-sum-row">
      <span class="jit-sum-label">${r[0]}</span><span class="jit-sum-sep">:</span><span class="jit-sum-value">${r[1]}</span>
      <span class="jit-sum-label">${r[2]}</span><span class="jit-sum-sep">:</span><span class="jit-sum-value">${r[3]}</span>
    </div>`
  ).join('');

  const targetRows = [
    ['Computer Name', '<i class="' + p.computerIcon + ' os-icon"></i> ' + p.computer, 'Device Friendly Name', p.deviceFriendly],
    ['User Name', p.userName, 'Domain Name', p.domainName],
    ['Duration Type', p.durationType, 'Access Duration', p.accessDuration],
    ['Applied Time', p.appliedTime, '', ''],
  ];
  const targetHtml = targetRows.map(r => {
    const right = r[2] ? `<span class="jit-sum-label">${r[2]}</span><span class="jit-sum-sep">:</span><span class="jit-sum-value">${r[3]}</span>` : '';
    return `<div class="jit-sum-row">
      <span class="jit-sum-label">${r[0]}</span><span class="jit-sum-sep">:</span><span class="jit-sum-value">${r[1]}</span>
      ${right}
    </div>`;
  }).join('');

  const overviewRows = [
    ['Access type', p.accessType, 'Vendor(s) added to the list', '<a href="#" style="color:#1a73e8">' + p.vendorsAdded + '</a>'],
    ['Product(s) added to the list', '<a href="#" style="color:#1a73e8">' + p.productsAdded + '</a>', 'Verified Executable(s) added to the list', '<a href="#" style="color:#1a73e8">' + p.executablesAdded + '</a>'],
    ['FileHash added to the list', '<a href="#" style="color:#1a73e8">' + p.fileHashAdded + '</a>', 'Store App(s) added to the list', '<a href="#" style="color:#1a73e8">' + p.storeAppsAdded + '</a>'],
    ['Folder Path added to the list', '<a href="#" style="color:#1a73e8">' + p.folderPathAdded + '</a>', '', ''],
  ];
  const overviewHtml = overviewRows.map(r => {
    const right = r[2] ? `<span class="jit-sum-label">${r[2]}</span><span class="jit-sum-sep">:</span><span class="jit-sum-value">${r[3]}</span>` : '';
    return `<div class="jit-sum-row">
      <span class="jit-sum-label">${r[0]}</span><span class="jit-sum-sep">:</span><span class="jit-sum-value">${r[1]}</span>
      ${right}
    </div>`;
  }).join('');

  content.innerHTML = `
    <div class="jit-summary-page">
      <!-- Header -->
      <div class="jit-summary-header">
        <a href="#" class="back-arrow" onclick="ecShowSubReport('jit-access');return false"><i class="fa fa-arrow-left"></i></a>
        <h1>${p.name}</h1>
      </div>

      <!-- Tabs -->
      <div class="jit-sum-tabs">
        <a href="#" class="jit-sum-tab active" onclick="ecSwitchJitSumTab(this,'jit-sum-summary');return false">Summary</a>
        <a href="#" class="jit-sum-tab" onclick="ecSwitchJitSumTab(this,'jit-sum-audit');return false">Audit</a>
      </div>

      <!-- Tab: Summary -->
      <div class="jit-sum-tab-content" id="jit-sum-summary">
        <div class="jit-sum-section">
          <div class="jit-sum-section-title">Summary</div>
          ${summaryHtml}
        </div>
        <div class="jit-sum-section">
          <div class="jit-sum-section-title">Target Details</div>
          ${targetHtml}
        </div>
        <div class="jit-sum-section">
          <div class="jit-sum-section-title">Allowlisting overview</div>
          ${overviewHtml}
        </div>
        <div class="jit-sum-section">
          <div class="jit-sum-section-title">Self-elevation overview</div>
          <div class="jit-sum-row">
            <span class="jit-sum-label">Access type</span><span class="jit-sum-sep">:</span><span class="jit-sum-value">${p.selfElevation}</span>
          </div>
        </div>
      </div>

      <!-- Tab: Audit -->
      <div class="jit-sum-tab-content" id="jit-sum-audit" style="display:none">
        <!-- View toggle -->
        <div style="display:flex;align-items:center;gap:0;padding:12px 24px">
          <span class="dp-plat-btn active jit-audit-view-btn" onclick="ecSwitchJitAuditView(this,'jit-audit-grid')" title="Grid view"><i class="fa fa-th"></i></span>
          <span class="dp-plat-btn jit-audit-view-btn" onclick="ecSwitchJitAuditView(this,'jit-audit-list')" title="List view"><i class="fa fa-bars"></i></span>
        </div>

        <!-- Grid view (default) -->
        <div id="jit-audit-grid">
          <div class="dp-content-toolbar" style="border-bottom:1px solid #e8e8e8">
            <div class="toolbar-right" style="margin-left:auto">
              <span class="total-records"><a href="#" style="color:#1a73e8">Total Records</a></span>
              <span class="icon-btn"><i class="fa fa-search"></i></span>
              <span class="icon-btn"><i class="fa fa-columns"></i></span>
              <span class="icon-btn"><i class="fa fa-download"></i></span>
            </div>
          </div>
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr>
                <th>Application Name <i class="fa fa-sort sort-icon"></i></th>
                <th>Application Type</th>
                <th>Event Time</th>
                <th>User Name</th>
                <th>User Domain</th>
              </tr></thead>
              <tbody>
                <tr><td colspan="5" style="text-align:center;color:#999;padding:24px">No data available</td></tr>
              </tbody>
            </table>
          </div>
          <div class="table-pagination">
            <span>0 - 0 of <a href="#" style="color:#1a73e8">Total Records</a></span>
            <select><option>25</option></select>
            <span class="page-btn">&lt;</span>
            <span class="page-btn">&gt;</span>
          </div>
        </div>

        <!-- List view (sidebar + table) -->
        <div id="jit-audit-list" style="display:none">
          <div class="dp-apps-layout">
            <div class="dp-apps-sidebar">
              <a href="#" class="ag-filter-tab active" onclick="ecSwitchJitAuditFilter(this,'jit-audit-exec-table');return false">Executable Event</a>
              <a href="#" class="ag-filter-tab" onclick="ecSwitchJitAuditFilter(this,'jit-audit-store-table');return false">Store Application Event</a>
            </div>
            <div class="dp-apps-main">
              <div class="dp-content-toolbar" style="border-bottom:1px solid #e8e8e8">
                <div class="toolbar-right" style="margin-left:auto">
                  <span class="total-records"><a href="#" style="color:#1a73e8">Total Records</a></span>
                  <span class="icon-btn"><i class="fa fa-search"></i></span>
                  <span class="icon-btn"><i class="fa fa-columns"></i></span>
                  <span class="icon-btn"><i class="fa fa-download"></i></span>
                </div>
              </div>
              <div class="table-wrap" id="jit-audit-exec-table">
                <table class="data-table">
                  <thead><tr>
                    <th>Product Name</th>
                    <th>Vendor</th>
                    <th>Publisher Credibility</th>
                    <th>Executable Name</th>
                    <th>File Hash</th>
                    <th>Arguments</th>
                    <th>Event Time <i class="fa fa-sort sort-icon"></i></th>
                    <th>User Name</th>
                    <th>User Domain</th>
                  </tr></thead>
                  <tbody>
                    <tr><td colspan="9" style="text-align:center;color:#999;padding:24px">No data available</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="table-wrap" id="jit-audit-store-table" style="display:none">
                <table class="data-table">
                  <thead><tr>
                    <th>Application Name</th>
                    <th>Publisher</th>
                    <th>Event Time <i class="fa fa-sort sort-icon"></i></th>
                    <th>User Name</th>
                    <th>User Domain</th>
                  </tr></thead>
                  <tbody>
                    <tr><td colspan="5" style="text-align:center;color:#999;padding:24px">No data available</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="table-pagination">
                <span>0 - 0 of <a href="#" style="color:#1a73e8">Total Records</a></span>
                <select><option>25</option></select>
                <span class="page-btn">&lt;</span>
                <span class="page-btn">&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>`;
  content.scrollTop = 0;
}

/* Switch JIT summary main tabs */
function ecSwitchJitSumTab(tab, panelId) {
  tab.parentElement.querySelectorAll('.jit-sum-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  document.querySelectorAll('.jit-sum-tab-content').forEach(p => p.style.display = 'none');
  document.getElementById(panelId).style.display = '';
}

/* Switch JIT audit view (grid vs list) */
function ecSwitchJitAuditView(btn, panelId) {
  btn.parentElement.querySelectorAll('.jit-audit-view-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const grid = document.getElementById('jit-audit-grid');
  const list = document.getElementById('jit-audit-list');
  if (panelId === 'jit-audit-grid') { grid.style.display = ''; list.style.display = 'none'; }
  else { grid.style.display = 'none'; list.style.display = ''; }
}

/* Switch JIT audit sidebar filter (Executable Event vs Store Application Event) */
function ecSwitchJitAuditFilter(tab, tableId) {
  tab.parentElement.querySelectorAll('.ag-filter-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  const execTable = document.getElementById('jit-audit-exec-table');
  const storeTable = document.getElementById('jit-audit-store-table');
  if (execTable) execTable.style.display = tableId === 'jit-audit-exec-table' ? '' : 'none';
  if (storeTable) storeTable.style.display = tableId === 'jit-audit-store-table' ? '' : 'none';
}

/* ================================================================
 *  JIT Requests — helper functions
 * ================================================================ */
function ecUpdateJitReqSelection() {
  const checked = document.querySelectorAll('.jit-req-cb:checked').length;
  const approveBtn = document.getElementById('jitReqApproveBtn');
  const declineBtn = document.getElementById('jitReqDeclineBtn');
  if (approveBtn) approveBtn.disabled = checked === 0;
  if (declineBtn) declineBtn.disabled = checked === 0;
}

function ecJitReqAction(action) {
  const rows = document.querySelectorAll('.jit-req-cb:checked');
  if (!rows.length) return;
  rows.forEach(cb => {
    const tr = cb.closest('tr');
    if (tr) ecApplyJitReqStatus(tr, action);
    cb.checked = false;
  });
  ecUpdateJitReqSelection();
  ecUpdateJitReqPendingCount();
}

function ecJitReqRowAction(el, action) {
  const tr = el.closest('tr');
  if (tr) ecApplyJitReqStatus(tr, action);
  /* Close dropdown */
  const menu = el.closest('.ec-action-dropdown');
  if (menu) menu.style.display = 'none';
  ecUpdateJitReqPendingCount();
}

function ecApplyJitReqStatus(tr, action) {
  tr.setAttribute('data-status', action);
  tr.classList.remove('jit-req-unread');
  tr.classList.add('jit-req-read');
  const badge = tr.querySelector('.jit-status-badge');
  if (badge) {
    badge.className = 'jit-status-badge ' + action.toLowerCase();
    badge.textContent = action;
  }
  /* Fill actioned columns */
  const cells = tr.querySelectorAll('td');
  if (cells.length >= 12) {
    cells[9].textContent = 'admin';
    cells[10].textContent = 'Apr 21, 2026 12:00 PM';
  }
}

function ecUpdateJitReqPendingCount() {
  const pending = document.querySelectorAll('#jitReqTable tr[data-status="Pending"]').length;
  const el = document.getElementById('jitReqPendingCount');
  if (el) el.textContent = pending;
}

function ecFilterJitRequests() {
  const statusVal = (document.getElementById('jitReqStatusFilter') || {}).value || '';
  const typeVal = (document.getElementById('jitReqTypeFilter') || {}).value || '';
  document.querySelectorAll('#jitReqTable tbody tr').forEach(tr => {
    const matchStatus = !statusVal || tr.getAttribute('data-status') === statusVal;
    const matchType = !typeVal || tr.getAttribute('data-type') === typeVal;
    tr.style.display = (matchStatus && matchType) ? '' : 'none';
  });
}

/* ================================================================
 *  JUST IN TIME ACCESS — Create forms
 * ================================================================ */
function ecOpenJitCreate(type) {
  document.querySelectorAll('.btn-dropdown-wrap.open').forEach(e => e.classList.remove('open'));
  const content = document.getElementById('pageContent');
  if (!content) return;

  const isElevation = type === 'elevation';
  const title = isElevation ? 'Application Elevation' : 'Application Allowlisting';

  /* Computer name suggestions for the dropdown */
  const allComputers = [
    {name:'001679907n4O', desc:'001679907n4O 2C8TY...', icon:'fab fa-windows', os:'windows'},
    {name:'0041000ePUlH', desc:'0041000ePUlH HCJKO...', icon:'fab fa-windows', os:'windows'},
    {name:'0070700VebWh', desc:'0070700VebWh Y53R9...', icon:'fab fa-windows', os:'windows'},
    {name:'007580068sQR', desc:'007580068sQR NBXG6...', icon:'fab fa-apple', os:'mac'},
    {name:'0078899PPpYV', desc:'0078899PPpYV 36TUS...', icon:'fab fa-windows', os:'windows'},
    {name:'0209099VaetS', desc:'0209099VaetS AV7AMDL', icon:'fab fa-linux', os:'linux'},
    {name:'02440006NtYF', desc:'02440006NtYF 6B92L87', icon:'fab fa-windows', os:'windows'},
  ];
  const computers = isElevation ? allComputers.filter(c => c.os === 'windows' || c.os === 'linux') : allComputers;
  const computerOptions = computers.map(c =>
    `<div class="jit-suggest-item" data-name="${c.name}" onclick="ecSelectJitComputer(this)"><i class="${c.icon} os-icon"></i> ${c.name} (${c.desc})</div>`
  ).join('');

  content.innerHTML = `
    <div class="form-page">
      <div class="form-page-header">
        <a href="#" class="back-arrow" onclick="ecShowSubReport('jit-deployments');return false"><i class="fa fa-arrow-left"></i></a>
        <h1>${title}</h1>
      </div>

      <!-- Name and Description -->
      <div class="form-section">
        <div class="form-section-title">Name and Description</div>
        <div class="form-row">
          <span class="form-label">Policy Name <span class="req">*</span></span>
          <div class="form-control-group" style="gap:12px">
            <input type="text" class="form-input" placeholder="Enter a policy name" />
            <a href="#" class="form-action-link">Add Description</a>
          </div>
        </div>
      </div>

      <!-- Define Target -->
      <div class="form-section">
        <div class="form-section-title">Define Target</div>
        <div class="form-row">
          <span class="form-label">Computer Name <span class="req">*</span></span>
          <div class="form-control-group">
            <div class="jit-suggest-wrap" style="flex:1;position:relative">
              <input type="text" class="form-input" placeholder="Computer Name" onfocus="this.parentElement.querySelector('.jit-suggest-dropdown').style.display='block'" oninput="ecFilterJitSuggest(this)" />
              <div class="jit-suggest-dropdown" style="display:none">${computerOptions}</div>
            </div>
          </div>
        </div>
        ${isElevation ? `<div class="form-row">
          <span class="form-label">User Name <span class="req">*</span></span>
          <div class="form-control-group">
            <input type="text" class="form-input" placeholder="User Name" />
          </div>
        </div>` : ''}
        <div class="form-row">
          <span class="form-label">Duration Type</span>
          <div class="form-control-group">
            <label class="radio-label"><input type="radio" name="jit-duration-type" value="fixed" checked /> Fixed</label>
            <label class="radio-label"><input type="radio" name="jit-duration-type" value="window" /> Window</label>
          </div>
        </div>
        <div class="form-row">
          <span class="form-label">Access Duration</span>
          <div class="form-control-group">
            <select class="form-input" style="width:200px">
              <option>1 Hour</option>
              <option>2 Hours</option>
              <option>4 Hours</option>
              <option>8 Hours</option>
              <option>12 Hours</option>
              <option>24 Hours</option>
              <option>1 Week</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Access Settings -->
      <div class="form-section">
        <div class="form-section-title">Access Settings</div>
        <div class="form-row">
          <span class="form-label">Access type</span>
          <div class="form-control-group">
            <label class="radio-label"><input type="radio" name="jit-access-type" value="all" checked onclick="document.getElementById('jit-specific-apps').style.display='none'" /> ${isElevation ? 'All Allowed Application(s)' : 'All Applications'}</label>
            <label class="radio-label"><input type="radio" name="jit-access-type" value="specific" onclick="document.getElementById('jit-specific-apps').style.display=''" /> Specific applications</label>
          </div>
        </div>
        ${!isElevation ? `<div class="form-row" style="padding-left:240px">
          <label style="display:flex;align-items:center;gap:8px;font-size:13px;color:#555">
            <input type="checkbox" /> Include Blocklisted applications
          </label>
        </div>` : ''}
        <!-- Specific applications modal trigger (hidden by default) -->
        <div id="jit-specific-apps" style="display:none;margin-top:12px">
          <button class="btn" onclick="ecOpenJitAppSelector()"><i class="fa fa-plus"></i> Select specific applications</button>
          <div id="jit-selected-apps-list" style="margin-top:8px"></div>
        </div>
      </div>

      <div class="form-actions">
        <button class="btn-form primary">Deploy Immediately</button>
        <button class="btn-form" onclick="ecShowSubReport('jit-deployments')">Cancel</button>
      </div>
      <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>
    </div>`;
  content.scrollTop = 0;
}

/* Filter computer name suggestions */
function ecFilterJitSuggest(input) {
  const q = input.value.toLowerCase();
  const dropdown = input.parentElement.querySelector('.jit-suggest-dropdown');
  dropdown.querySelectorAll('.jit-suggest-item').forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(q) ? '' : 'none';
  });
  dropdown.style.display = 'block';
}

/* Select a computer from the suggestion dropdown */
function ecSelectJitComputer(item) {
  const wrap = item.closest('.jit-suggest-wrap');
  const input = wrap.querySelector('input');
  input.value = item.dataset.name;
  wrap.querySelector('.jit-suggest-dropdown').style.display = 'none';
}

/* Close JIT suggestions on outside click */
document.addEventListener('click', function(e) {
  if (!e.target.closest('.jit-suggest-wrap')) {
    document.querySelectorAll('.jit-suggest-dropdown').forEach(d => d.style.display = 'none');
  }
});

/* Open Select specific applications modal */
function ecOpenJitAppSelector() {
  const tabs = ['Vendor','Products','Verified Executable','File Hash','Store Apps','Folder Path'];
  const vendorData = [
    {name:'.NET', verified:true},
    {name:'Acro Software Inc', verified:true},
    {name:'Acronis International GmbH1', verified:false},
    {name:'Acronis International GmbH1', verified:true},
    {name:'Acronis International GmbH10', verified:true},
    {name:'Acronis International GmbH11', verified:true},
    {name:'Acronis International GmbH11', verified:false},
    {name:'Acronis International GmbH2', verified:true},
    {name:'Acronis International GmbH2', verified:false},
    {name:'Acronis International GmbH3', verified:true},
    {name:'Acronis International GmbH3', verified:false},
  ];
  const vendorRows = vendorData.map(v =>
    `<tr class="jit-app-row" onclick="this.classList.toggle('selected')">
      <td style="color:#1a73e8">${v.name}</td>
      <td><i class="fa fa-shield-halved" style="color:${v.verified ? '#1a73e8' : '#d32f2f'};font-size:11px"></i> ${v.verified ? 'Verified Publisher' : 'Unverified Publisher'}</td>
    </tr>`
  ).join('');

  const overlay = document.createElement('div');
  overlay.className = 'la-modal-overlay';
  overlay.innerHTML = `
    <div class="la-modal" style="width:900px;max-height:80vh">
      <div class="la-modal-header" style="flex-direction:column;align-items:flex-start;gap:4px;padding:16px 24px">
        <div style="display:flex;width:100%;align-items:center;justify-content:space-between">
          <h3 style="color:#1a73e8;font-size:16px">Select specific applications</h3>
          <button class="la-modal-close" onclick="this.closest('.la-modal-overlay').remove()">&times;</button>
        </div>
        <div class="jit-app-tabs">
          ${tabs.map((t, i) => `<span class="jit-app-tab${i === 0 ? ' active' : ''}" onclick="ecSwitchJitAppTab(this)">${t}</span>`).join('')}
          <span style="margin-left:auto;font-size:12px;color:#555">Selected (0)</span>
        </div>
      </div>
      <div class="la-modal-body" style="padding:0">
        <div style="display:flex;align-items:center;gap:8px;padding:10px 24px;border-bottom:1px solid #e0e0e0">
          <i class="fa fa-search" style="color:#999"></i>
          <input type="text" placeholder="Search" style="border:none;outline:none;flex:1;font-size:13px" />
          <a href="#" class="form-action-link"><i class="fa fa-plus"></i> Add</a>
        </div>
        <div style="overflow-y:auto;max-height:400px">
          <table class="data-table" style="min-width:auto">
            <thead><tr>
              <th style="color:#1a73e8">Vendor Name</th>
              <th>Publisher Credibility</th>
            </tr></thead>
            <tbody>${vendorRows}</tbody>
          </table>
        </div>
      </div>
      <div style="padding:12px 24px;border-top:1px solid #e0e0e0;text-align:center">
        <button class="btn-form primary" onclick="this.closest('.la-modal-overlay').remove()">Save (0)</button>
      </div>
    </div>`;
  overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
}

function ecSwitchJitAppTab(tab) {
  tab.parentElement.querySelectorAll('.jit-app-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
}

/* ================================================================
 *  CHILD PROCESS — platform tab switch & populate grids
 * ================================================================ */
function ecSwitchCpPlatform(tab, panelId) {
  document.querySelectorAll('.cp-ptab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  document.querySelectorAll('.cp-plat-panel').forEach(p => p.style.display = 'none');
  document.getElementById(panelId).style.display = '';
}

/* Shared vendor/product data for child process */
const CP_PLATFORM_DATA = {
  win: {
    vendors: ['.NET','Avast Software s.r.o.','Brave Software, Inc.','Google LLC','JetBrains s.r.o.','Microsoft Corporation','Mozilla Corporation','VideoLAN'],
    products: [
      {vendor:'.NET', items:['.NET','Microsoft\u00ae .NET']},
      {vendor:'Avast Software s.r.o.', items:['Avast Antivirus','Avast','Antivirus Installer']},
      {vendor:'Brave Software, Inc.', items:['Brave Browser','Brave Installer','Brave VPN Wireguard Service']},
      {vendor:'Google LLC', items:['Google Chrome','Google Chrome Installer','Google Update Helper']},
      {vendor:'JetBrains s.r.o.', items:['IntelliJ Platform','IntelliJ IDEA']},
      {vendor:'Microsoft Corporation', items:['Microsoft 365 and Office','Microsoft Edge','Microsoft Remote Desktop','Windows Terminal']},
      {vendor:'Mozilla Corporation', items:['Firefox']},
      {vendor:'VideoLAN', items:['VLC media player']},
    ]
  },
  mac: {
    vendors: ['Apple Inc.','Google LLC','Mozilla Corporation','Microsoft Corporation'],
    products: [
      {vendor:'Apple Inc.', items:['Xcode','Safari','Finder']},
      {vendor:'Google LLC', items:['Google Chrome']},
      {vendor:'Mozilla Corporation', items:['Firefox']},
      {vendor:'Microsoft Corporation', items:['Microsoft Edge','Microsoft Teams']},
    ]
  },
  linux: {
    vendors: ['Canonical Ltd.','Red Hat, Inc.','Google LLC','Mozilla Corporation'],
    products: [
      {vendor:'Canonical Ltd.', items:['snap','apt-get','dpkg']},
      {vendor:'Red Hat, Inc.', items:['yum','dnf','rpm']},
      {vendor:'Google LLC', items:['Google Chrome']},
      {vendor:'Mozilla Corporation', items:['Firefox']},
    ]
  }
};

function ecPopulateCpGrids() {
  Object.entries({win:'Win',mac:'Mac',linux:'Linux'}).forEach(([key, suffix]) => {
    const data = CP_PLATFORM_DATA[key];
    const vendorGrid = document.getElementById('cpVendorGrid' + suffix);
    const productDiv = document.getElementById('cpProductList' + suffix);

    if (vendorGrid) {
      vendorGrid.innerHTML = data.vendors.map((v, i) =>
        `<div class="vendor-card selectable" data-vendor-idx="${i}" onclick="ecToggleVendorCard(this,event)">
          <input type="checkbox" class="vendor-cb" />
          <div class="vendor-name">${v}</div>
          <div class="vendor-status"><i class="fa fa-shield-halved" style="color:#1a73e8;font-size:11px"></i> Verified Publisher</div>
          <span class="vendor-info"><i class="fa fa-circle-info"></i></span>
        </div>`
      ).join('');
    }

    if (productDiv) {
      productDiv.innerHTML = data.products.map(g =>
        `<div class="product-group">
          <div class="product-vendor-header">
            <a href="#" class="product-vendor-name">${g.vendor}</a>
            <span class="vendor-badge"><i class="fa fa-shield-halved" style="color:#1a73e8;font-size:11px"></i> Verified Publisher</span>
          </div>
          <table class="data-table product-select-table" style="min-width:auto">
            <thead><tr>
              <th style="width:32px"><input type="checkbox" class="product-group-cb" onchange="ecToggleProductGroup(this)" style="width:16px;height:16px;accent-color:#1a73e8;cursor:pointer" /></th>
              <th>Application</th>
              <th style="width:180px">Child Process</th>
              <th style="width:40px"></th>
            </tr></thead>
            <tbody>
              ${g.items.map(p => `<tr class="product-row" onclick="ecToggleProductRow(this,event)">
                <td><input type="checkbox" class="product-item-cb" /></td>
                <td>${p}</td>
                <td><button class="btn cp-tree-btn disabled" onclick="event.stopPropagation();ecToggleCpTree(this)"><i class="fa fa-sitemap"></i> Whole Process Tree</button></td>
                <td><span class="vendor-info"><i class="fa fa-circle-info"></i></span></td>
              </tr>`).join('')}
            </tbody>
          </table>
        </div>`
      ).join('');
    }
  });
}

function ecToggleCpTree(btn) {
  if (btn.classList.contains('disabled')) return;
  btn.classList.toggle('active');
}

/* Auto-populate grids when child-process page loads */
const _origChildProcess = EC_PAGES['child-process'];
EC_PAGES['child-process'] = () => {
  const html = _origChildProcess();
  setTimeout(ecPopulateCpGrids, 0);
  return html;
};

/** Open Create Group form (EC version — full layout matching standalone) */
function ecOpenCreateGroup(type, platform) {
  document.querySelectorAll('.btn-dropdown-wrap.open').forEach(e => e.classList.remove('open'));
  const content = document.getElementById('pageContent');
  if (!content) return;

  const platformLabels = { windows: 'Windows', mac: 'Mac', linux: 'Linux' };
  const platformIcons = { windows: 'fab fa-windows', mac: 'fab fa-apple', linux: 'fab fa-linux' };
  const pLabel = platformLabels[platform] || platform;
  const pIcon = platformIcons[platform] || 'fab fa-windows';
  const isAllow = type === 'Allowlist';
  const breadcrumb = isAllow ? 'Allowlist Creation' : 'Blocklist Creation';

  /* Vendor data */
  const vendors = [
    {name:'.NET', verified:true},
    {name:'Avast Software s.r.o.', verified:true},
    {name:'BETSOL LLC', verified:true},
    {name:'BitTorrent Inc', verified:true},
    {name:'Brave Software, Inc.', verified:true},
    {name:'DBeaver Corp', verified:true},
    {name:'Dell Technologies Inc.', verified:true},
    {name:'Dropbox, Inc', verified:true},
    {name:'Eclipse.org Foundatio...', verified:true},
    {name:'EnterpriseDB Corpor...', verified:true},
    {name:'Epic Games Inc.', verified:true},
    {name:'GitHub', verified:true},
    {name:'GitHub, Inc.', verified:true},
    {name:'Google LLC', verified:true},
    {name:'H und H Software Gm...', verified:true},
    {name:'H+H Software GmbH', verified:true},
    {name:'Intel Corporation', verified:true},
    {name:'JetBrains s.r.o.', verified:true},
    {name:'Johannes Schindelin', verified:true},
    {name:'Macrovision Corporat...', verified:true},
  ];

  /* Product data grouped by vendor */
  const products = [
    {vendor:'.NET', verified:true, items:['.NET','Microsoft\u00ae .NET']},
    {vendor:'Avast Software s.r.o.', verified:true, items:['Avast Antivirus','Avast','Antivirus Installer','MDES SDK V4']},
    {vendor:'Brave Software, Inc.', verified:true, items:['Brave Browser','Brave Installer','Brave VPN Wireguard Service']},
    {vendor:'Google LLC', verified:true, items:['Google Chrome','Google Chrome Installer','Google Update Helper']},
    {vendor:'JetBrains s.r.o.', verified:true, items:['IntelliJ Platform','IntelliJ IDEA']},
    {vendor:'Microsoft Corporation', verified:true, items:['Microsoft 365 and Office','Microsoft Edge','Microsoft Remote Desktop','Windows Terminal']},
    {vendor:'Mozilla Corporation', verified:true, items:['Firefox']},
    {vendor:'VideoLAN', verified:true, items:['VLC media player']},
  ];

  /* Linux-only extra rule type — removed, now handled via filter */
  const linuxTrustedRepo = '';

  const vendorCards = vendors.map((v, i) =>
    `<div class="vendor-card selectable" data-vendor-idx="${i}" onclick="ecToggleVendorCard(this,event)">
      <input type="checkbox" class="vendor-cb" />
      <div class="vendor-name">${v.name}</div>
      <div class="vendor-status"><i class="fa fa-shield-halved" style="color:#1a73e8;font-size:11px"></i> ${v.verified ? 'Verified Publisher' : 'Unverified'}</div>
      <span class="vendor-info"><i class="fa fa-circle-info"></i></span>
    </div>`
  ).join('');

  const productList = products.map(g =>
    `<div class="product-group">
      <div class="product-vendor-header">
        <a href="#" class="product-vendor-name">${g.vendor}</a>
        <span class="vendor-badge"><i class="fa fa-shield-halved" style="color:#1a73e8;font-size:11px"></i> ${g.verified ? 'Verified Publisher' : 'Unverified'}</span>
      </div>
      <table class="data-table product-select-table" style="min-width:auto">
        <thead><tr>
          <th style="width:32px"><input type="checkbox" class="product-group-cb" onchange="ecToggleProductGroup(this)" style="width:16px;height:16px;accent-color:#1a73e8;cursor:pointer" /></th>
          <th>Application</th>
          <th style="width:40px"></th>
        </tr></thead>
        <tbody>
          ${g.items.map(p => `<tr class="product-row" onclick="ecToggleProductRow(this,event)">
            <td><input type="checkbox" class="product-item-cb" /></td>
            <td>${p}</td>
            <td><span class="vendor-info"><i class="fa fa-circle-info"></i></span></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>`
  ).join('');

  content.innerHTML = `
    <div class="cg-page">
      <div class="cg-breadcrumb">
        <a href="#" onclick="ecShowSubReport('app-groups');return false">Application Groups</a>
        <span class="bc-sep">&rsaquo;</span>
        <span class="bc-current">${breadcrumb}</span>
        <span class="platform-badge"><i class="${pIcon}"></i> ${pLabel}</span>
      </div>

      <div class="cg-header">
        <i class="fa fa-th-large cg-icon"></i>
        <input type="text" class="cg-name-input" placeholder="${type} Name" />
        <a href="#" class="form-action-link">Add Description</a>
      </div>

      <div class="cg-toolbar">
        <select class="cg-filter-select"><option>All</option><option>Vendor</option><option>${platform === 'linux' ? 'Package' : 'Products'}</option><option>Executables</option><option>File Hash</option><option>${platform === 'linux' ? 'File Path' : 'Folder Path'}</option>${platform !== 'linux' ? '<option>Trusted Repository</option>' : ''}</select>
        <div class="cg-search-wrap">
          <i class="fa fa-search cg-search-icon"></i>
          <input type="text" class="cg-search-input" placeholder="Search" />
        </div>
        <div class="cg-toolbar-right">
          <a href="#" class="cg-action"><i class="fa fa-plus"></i> Add</a>
          <span class="cg-sep">|</span>
          <a href="#" class="cg-action"><i class="fa fa-download"></i> Import</a>
          <span class="cg-sep">|</span>
          <span class="cg-selected" id="cgSelectedCount">Selected (0)</span>
          <span class="cg-sep"></span>
          <span class="cg-view-btn active"><i class="fa fa-th-large"></i></span>
          <span class="cg-view-btn"><i class="fa fa-list"></i></span>
        </div>
      </div>

      <div class="alert-banner info" style="margin:0;border-radius:0">
        <i class="fa fa-circle-info"></i>
        <span>Publishers listed in the Store Apps are not a part of Vendor selection.</span>
      </div>

      <div class="cg-content-area">
        <div class="cg-section-header">Vendor <span style="font-size:12px;color:#888;font-weight:400;margin-left:8px">(click to select)</span></div>
        <div class="vendor-grid">${vendorCards}</div>

        <div class="cg-section-header" style="border-top:1px solid #e8e8e8">${platform === 'linux' ? 'Package' : 'Products'} <span style="font-size:12px;color:#888;font-weight:400;margin-left:8px">(select applications to add)</span></div>
        ${productList}
      </div>

      ${linuxTrustedRepo}

      <div class="form-actions" style="background:#fff">
        <button class="btn-form primary">Create ${type}</button>
        <button class="btn-form" onclick="ecShowSubReport('app-groups')">Cancel</button>
      </div>
      <div class="restricted-warning"><i class="fa fa-exclamation-circle"></i> [ Running in restricted mode. ]</div>
      <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>
    </div>`;
  content.scrollTop = 0;
}

/* ================================================================
 *  APPLICATION GROUP SUMMARY PAGE
 * ================================================================ */
const EC_APP_GROUP_DATA = {
  'Allowed applications': {
    rulesApplied: 5,
    customGroups: 4,
    rules: [
      { credibility: 'Verified Publisher', groupName: 'Allowed applications', vendor: 'Microsoft Corporation' },
      { credibility: 'Verified Publisher', groupName: 'Allowed applications', vendor: 'Google LLC' },
      { credibility: 'Verified Publisher', groupName: 'Allowed applications', vendor: 'Mozilla Corporation' },
      { credibility: 'Verified Publisher', groupName: 'Allowed applications', vendor: 'JetBrains s.r.o.' },
      { credibility: 'Verified Publisher', groupName: 'Allowed applications', vendor: 'Brave Software, Inc.' },
    ],
    associatedGroups: [
      { name: 'All Computers Group', category: 'All Computers Group', createdBy: 'demo' },
      { name: 'Developer group', category: 'Static Unique Group', createdBy: 'demo' },
      { name: 'Engineering group', category: 'Static Computer Group', createdBy: 'demo' },
      { name: 'Marketing Group', category: 'Static Computer Group', createdBy: 'demo' },
    ]
  },
  'Allowed Mac applications': {
    rulesApplied: 4,
    customGroups: 3,
    rules: [
      { credibility: 'Verified Publisher', groupName: 'Allowed Mac applications', vendor: 'Apple Inc.' },
      { credibility: 'Verified Publisher', groupName: 'Allowed Mac applications', vendor: 'Microsoft Corporation' },
      { credibility: 'Verified Publisher', groupName: 'Allowed Mac applications', vendor: 'Google LLC' },
      { credibility: 'Verified Publisher', groupName: 'Allowed Mac applications', vendor: 'Mozilla Corporation' },
    ],
    associatedGroups: [
      { name: 'All Computers Group', category: 'All Computers Group', createdBy: 'demo' },
      { name: 'Engineering group', category: 'Static Computer Group', createdBy: 'demo' },
      { name: 'Support Group', category: 'Static Computer Group', createdBy: 'demo' },
    ]
  },
  'Allowed Linux applications': {
    rulesApplied: 3,
    customGroups: 2,
    rules: [
      { credibility: 'Verified Publisher', groupName: 'Allowed Linux applications', vendor: 'Canonical Ltd.' },
      { credibility: 'Verified Publisher', groupName: 'Allowed Linux applications', vendor: 'Red Hat, Inc.' },
      { credibility: 'Verified Publisher', groupName: 'Allowed Linux applications', vendor: 'Google LLC' },
    ],
    associatedGroups: [
      { name: 'All Computers Group', category: 'All Computers Group', createdBy: 'demo' },
      { name: 'Developer group', category: 'Static Unique Group', createdBy: 'demo' },
    ]
  },
  'Blocked applications': {
    rulesApplied: 3,
    customGroups: 6,
    rules: [
      { credibility: 'Verified Publisher', groupName: 'Blocked applications', vendor: 'RealVNC Ltd' },
      { credibility: 'Verified Publisher', groupName: 'Blocked applications', vendor: 'TeamViewer Germany GmbH' },
      { credibility: 'Verified Publisher', groupName: 'Blocked applications', vendor: 'BitTorrent Inc' },
    ],
    associatedGroups: [
      { name: 'All Computers Group', category: 'All Computers Group', createdBy: 'demo' },
      { name: 'Developer group', category: 'Static Unique Group', createdBy: 'demo' },
      { name: 'Engineering group', category: 'Static Computer Group', createdBy: 'demo' },
      { name: 'Marketing Group', category: 'Static Computer Group', createdBy: 'demo' },
      { name: 'Remote Branch', category: 'Static Computer Group', createdBy: 'demo' },
      { name: 'Support Group', category: 'Static Computer Group', createdBy: 'demo' },
    ]
  },
  'Blocked Mac Applications': {
    rulesApplied: 2,
    customGroups: 3,
    rules: [
      { credibility: 'Verified Publisher', groupName: 'Blocked Mac Applications', vendor: 'Loom, Inc' },
      { credibility: 'Unverified Publisher', groupName: 'Blocked Mac Applications', vendor: 'Unknown Vendor' },
    ],
    associatedGroups: [
      { name: 'All Computers Group', category: 'All Computers Group', createdBy: 'demo' },
      { name: 'Engineering group', category: 'Static Computer Group', createdBy: 'demo' },
      { name: 'Marketing Group', category: 'Static Computer Group', createdBy: 'demo' },
    ]
  },
  'Blocked Linux Applications': {
    rulesApplied: 2,
    customGroups: 2,
    rules: [
      { credibility: 'Verified Publisher', groupName: 'Blocked Linux Applications', vendor: 'Nmap Project' },
      { credibility: 'Verified Publisher', groupName: 'Blocked Linux Applications', vendor: 'Wireshark Foundation' },
    ],
    associatedGroups: [
      { name: 'All Computers Group', category: 'All Computers Group', createdBy: 'demo' },
      { name: 'Developer group', category: 'Static Unique Group', createdBy: 'demo' },
    ]
  },
  'ManageEngine recommended blocklist for productivity': {
    rulesApplied: 1,
    customGroups: 1,
    rules: [
      { credibility: 'Verified Publisher', groupName: 'ManageEngine recommended blocklist for productivity', vendor: 'Various' },
    ],
    associatedGroups: [
      { name: 'All Computers Group', category: 'All Computers Group', createdBy: 'DC-SYSTEM-USER' },
    ]
  }
};

function ecOpenAppGroupSummary(groupName, groupType, platform) {
  const content = document.getElementById('pageContent');
  if (!content) return;

  const data = EC_APP_GROUP_DATA[groupName] || {
    rulesApplied: 0, customGroups: 0, rules: [], associatedGroups: []
  };

  const isLinux = platform === 'linux';
  const filterTabs = ['Vendor', isLinux ? 'Package Name' : 'Product Name', 'Verified Executable', 'File Hash', isLinux ? 'File Path' : 'Folder Path', 'Store Apps'];
  const filterTabsHtml = filterTabs.map((t, i) =>
    `<a href="#" class="ag-filter-tab${i === 0 ? ' active' : ''}" onclick="ecSwitchAgFilterTab(this);return false">${t}</a>`
  ).join('');

  const ruleRows = data.rules.map(r =>
    `<tr>
      <td>${r.credibility}</td>
      <td>${r.groupName}</td>
      <td>${r.vendor}</td>
    </tr>`
  ).join('');

  const groupRows = data.associatedGroups.map(g =>
    `<tr>
      <td><a href="#" style="color:#1a73e8">${g.name}</a></td>
      <td>${g.category}</td>
      <td>${g.createdBy}</td>
    </tr>`
  ).join('');

  const groupTypeIcon = groupType === 'Blocklist'
    ? '<i class="fa fa-ban" style="font-size:28px;color:#d32f2f"></i>'
    : '<i class="fa fa-check-circle" style="font-size:28px;color:#34a853"></i>';

  content.innerHTML = `
    <div class="ag-summary-page">
      <!-- Header -->
      <div class="ag-summary-header">
        <div class="ag-summary-header-left">
          <a href="#" class="back-arrow" onclick="ecShowSubReport('app-groups');return false"><i class="fa fa-arrow-left"></i></a>
          <i class="fa fa-th-large" style="color:#555;font-size:16px"></i>
          <h1>${groupName}</h1>
        </div>
        <button class="btn-modify"><i class="fa fa-pen"></i> Modify</button>
      </div>

      <!-- Summary Cards -->
      <div class="ag-summary-cards">
        <div class="ag-summary-card">
          <div class="ag-card-icon"><i class="fa fa-file-lines" style="font-size:28px;color:#666"></i></div>
          <div class="ag-card-info">
            <div class="ag-card-value">${data.rulesApplied}</div>
            <div class="ag-card-label">Total Rules Applied</div>
          </div>
        </div>
        <div class="ag-summary-card">
          <div class="ag-card-icon">${groupTypeIcon}</div>
          <div class="ag-card-info">
            <div class="ag-card-value">${groupType}</div>
            <div class="ag-card-label">Group type</div>
          </div>
        </div>
        <div class="ag-summary-card">
          <div class="ag-card-icon"><i class="fa fa-layer-group" style="font-size:28px;color:#666"></i></div>
          <div class="ag-card-info">
            <div class="ag-card-value">${data.customGroups}</div>
            <div class="ag-card-label">Custom Group(s) Associated</div>
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="ag-tabs">
        <a href="#" class="ag-tab active" onclick="ecSwitchAgTab(this,'ag-tab-rules');return false">Rule Details</a>
        <a href="#" class="ag-tab" onclick="ecSwitchAgTab(this,'ag-tab-groups');return false">Associated Custom Group(s)</a>
      </div>

      <!-- Tab: Rule Details -->
      <div class="ag-tab-content" id="ag-tab-rules">
        <div class="ag-rule-layout">
          <div class="ag-filter-sidebar">
            ${filterTabsHtml}
          </div>
          <div class="ag-rule-main">
            <div class="ag-rule-toolbar">
              <span class="filter-label">Filter By :</span>
              <select><option>Publisher Credib...</option><option>Verified Publisher</option><option>Unverified Publisher</option></select>
              <div class="toolbar-right">
                <span class="total-records"><a href="#" style="color:#1a73e8">Total Records</a></span>
                <span class="icon-btn"><i class="fa fa-search"></i></span>
                <span class="icon-btn"><i class="fa fa-columns"></i></span>
                <span class="icon-btn"><i class="fa fa-download"></i></span>
              </div>
            </div>
            <div class="table-wrap">
              <table class="data-table">
                <thead><tr>
                  <th>Publisher Credibility</th>
                  <th>Application Group Name <i class="fa fa-sort sort-icon"></i></th>
                  <th>Vendor Name</th>
                </tr></thead>
                <tbody>${ruleRows}</tbody>
              </table>
            </div>
            <div class="table-pagination">
              <span>1 - ${data.rules.length} of <a href="#" style="color:#1a73e8">Total Records</a></span>
              <select><option>25</option></select>
              <span class="page-btn">&lt;</span>
              <span class="page-btn">&gt;</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab: Associated Custom Group(s) -->
      <div class="ag-tab-content" id="ag-tab-groups" style="display:none">
        <div class="ag-groups-toolbar">
          <div class="toolbar-right" style="margin-left:auto">
            <span class="total-records"><a href="#" style="color:#1a73e8">Total Records</a></span>
            <span class="icon-btn"><i class="fa fa-search"></i></span>
            <span class="icon-btn"><i class="fa fa-columns"></i></span>
            <span class="icon-btn"><i class="fa fa-download"></i></span>
          </div>
        </div>
        <div class="table-wrap">
          <table class="data-table">
            <thead><tr>
              <th>Custom Group Name <i class="fa fa-sort sort-icon"></i></th>
              <th>Group Category</th>
              <th>Created By</th>
            </tr></thead>
            <tbody>${groupRows}</tbody>
          </table>
        </div>
        <div class="table-pagination">
          <span>1 - ${data.associatedGroups.length} of <a href="#" style="color:#1a73e8">Total Records</a></span>
          <select><option>25</option></select>
          <span class="page-btn">&lt;</span>
          <span class="page-btn">&gt;</span>
        </div>
      </div>
    </div>
    <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>`;
  content.scrollTop = 0;
}

function ecSwitchAgTab(tab, panelId) {
  tab.parentElement.querySelectorAll('.ag-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  document.querySelectorAll('.ag-tab-content').forEach(p => p.style.display = 'none');
  document.getElementById(panelId).style.display = '';
}

function ecSwitchAgFilterTab(tab) {
  tab.parentElement.querySelectorAll('.ag-filter-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
}

/* Toggle vendor card selection — click anywhere on card */
function ecToggleVendorCard(card, e) {
  if (e.target.closest('.seg-control')) return;
  const cb = card.querySelector('.vendor-cb');
  if (e.target !== cb) cb.checked = !cb.checked;
  card.classList.toggle('selected', cb.checked);
  const seg = card.querySelector('.vendor-seg');
  if (seg) seg.classList.toggle('disabled', !cb.checked);
  ecUpdateSelectedCount();
}

/* Toggle product row — click anywhere on row */
function ecToggleProductRow(row, e) {
  if (e.target.closest('.seg-control') || e.target.closest('.vendor-info') || e.target.closest('.cp-tree-btn')) return;
  const cb = row.querySelector('.product-item-cb');
  if (e.target !== cb) cb.checked = !cb.checked;
  row.classList.toggle('selected', cb.checked);
  const seg = row.querySelector('.seg-control');
  if (seg) seg.classList.toggle('disabled', !cb.checked);
  const treeBtn = row.querySelector('.cp-tree-btn');
  if (treeBtn) { treeBtn.classList.toggle('disabled', !cb.checked); if (!cb.checked) treeBtn.classList.remove('active'); }
  ecUpdateProductGroupCb(cb);
}

/* Toggle all products within a vendor group */
function ecToggleProductGroup(groupCb) {
  const tbody = groupCb.closest('table').querySelector('tbody');
  tbody.querySelectorAll('.product-item-cb').forEach(cb => {
    cb.checked = groupCb.checked;
    const row = cb.closest('tr');
    row.classList.toggle('selected', cb.checked);
    const seg = row.querySelector('.seg-control');
    if (seg) seg.classList.toggle('disabled', !cb.checked);
    const treeBtn = row.querySelector('.cp-tree-btn');
    if (treeBtn) { treeBtn.classList.toggle('disabled', !cb.checked); if (!cb.checked) treeBtn.classList.remove('active'); }
  });
  ecUpdateSelectedCount();
}

/* Update vendor group checkbox based on individual selections */
function ecUpdateProductGroupCb(itemCb) {
  const table = itemCb.closest('table');
  const items = table.querySelectorAll('.product-item-cb');
  const groupCb = table.querySelector('.product-group-cb');
  const allChecked = Array.from(items).every(c => c.checked);
  const someChecked = Array.from(items).some(c => c.checked);
  groupCb.checked = allChecked;
  groupCb.indeterminate = someChecked && !allChecked;
  ecUpdateSelectedCount();
}

/* Update the selected count display */
function ecUpdateSelectedCount() {
  const vendorCount = document.querySelectorAll('.vendor-cb:checked').length;
  const productCount = document.querySelectorAll('.product-item-cb:checked').length;
  const total = vendorCount + productCount;
  const el = document.getElementById('cgSelectedCount');
  if (el) el.textContent = 'Selected (' + total + ')';
}

/* Select a segment in the segmented control (toggle off if already active) */
function ecSelectSeg(btn) {
  const seg = btn.closest('.seg-control');
  if (seg.classList.contains('disabled')) return;
  if (btn.classList.contains('active')) {
    btn.classList.remove('active');
    seg.dataset.value = '';
  } else {
    seg.querySelectorAll('.seg-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    seg.dataset.value = btn.dataset.val;
  }
}

/** Open Create Deployment Task form */
function ecOpenCreateDeployTask() {
  const content = document.getElementById('pageContent');
  if (!content) return;

  const customGroups = ['Designer Group','Developer Group','Marketing Group','Support Group','Webclient Group','Mobile App Group'];
  const policies = [
    {name:'Allow Portable Devices', os:'Windows', cat:'Allowlist'},
    {name:'Block Mac Removable Storage devices', os:'Mac', cat:'Blocklist'},
    {name:'Block Printers - Windows', os:'Windows', cat:'Blocklist'},
    {name:'Policy_0303', os:'Windows', cat:'Allowlist'},
    {name:'Policy_0455', os:'Linux', cat:'Allowlist'},
  ];

  content.innerHTML = `
    <div class="form-page">
      <div class="form-section-title" style="font-size:15px;font-weight:600;color:#333;padding:14px 28px;background:#f5f6fa;border-bottom:1px solid #e8e8e8">Create Deployment Task</div>

      <div class="form-row">
        <span class="form-label">Name</span>
        <div class="form-control-group">
          <input type="text" class="form-input" placeholder="Enter Task Name" />
        </div>
      </div>

      <div class="form-row" style="align-items:flex-start">
        <span class="form-label">Target Computer Groups</span>
        <div class="form-control-group" style="gap:8px;align-items:center">
          <div class="custom-dropdown multi" id="groupDropdown">
            <div class="cd-trigger" onclick="ecToggleDropdown('groupDropdown')">
              <div class="cd-chips" id="groupChips"><span class="cd-placeholder">Select Custom Groups</span></div>
              <i class="fa fa-chevron-down cd-arrow"></i>
            </div>
            <div class="cd-menu">
              ${customGroups.map(g => `<div class="cd-item" onclick="ecToggleMultiItem(this,'groupChips','groupDropdown')">
                <input type="checkbox" class="cd-item-cb" onclick="event.stopPropagation()" onchange="ecToggleMultiItem(this.parentElement,'groupChips','groupDropdown')" />
                <span>${g}</span>
              </div>`).join('')}
            </div>
          </div>
          <span class="form-icon-btn" title="Filter"><i class="fa fa-filter"></i></span>
          <a href="#" class="form-action-link">Create Custom Group</a>
        </div>
      </div>

      <div class="form-row" style="align-items:flex-start">
        <span class="form-label">Associate Policy</span>
        <div class="form-control-group">
          <div class="custom-dropdown multi" id="policyDropdown">
            <div class="cd-trigger" onclick="ecToggleDropdown('policyDropdown')">
              <div class="cd-chips" id="policyChips"><span class="cd-placeholder">Select Policies</span></div>
              <i class="fa fa-chevron-down cd-arrow"></i>
            </div>
            <div class="cd-menu">
              <div class="cd-filters">
                <select class="cd-filter-select" onclick="event.stopPropagation()"><option>All OS</option><option>Windows</option><option>Mac</option><option>Linux</option></select>
                <select class="cd-filter-select" onclick="event.stopPropagation()"><option>All Categories</option><option>Allowlist</option><option>Blocklist</option></select>
              </div>
              ${policies.map(p => `<div class="cd-item" onclick="ecToggleMultiItem(this,'policyChips','policyDropdown')">
                <input type="checkbox" class="cd-item-cb" onclick="event.stopPropagation()" onchange="ecToggleMultiItem(this.parentElement,'policyChips','policyDropdown')" />
                <i class="fa fa-file-shield cd-item-icon"></i> <span>${p.name}</span>
              </div>`).join('')}
            </div>
          </div>
        </div>
      </div>

      <div class="form-actions" style="justify-content:flex-start;padding:20px 28px">
        <button class="btn-form primary">Deploy</button>
        <button class="btn-form" onclick="ecShowSubReport('deploy-policy')">Cancel</button>
      </div>
    </div>`;
  content.scrollTop = 0;
}

/* Toggle a custom dropdown open/closed */
function ecToggleDropdown(id) {
  const dd = document.getElementById(id);
  const wasOpen = dd.classList.contains('open');
  document.querySelectorAll('.custom-dropdown.open').forEach(d => { if (d.id !== id) d.classList.remove('open'); });
  if (!wasOpen) dd.classList.add('open');
  else dd.classList.remove('open');
}

/* Toggle a multi-select item and update chips */
function ecToggleMultiItem(item, chipsId, ddId) {
  const cb = item.querySelector('.cd-item-cb');
  if (event.target !== cb) cb.checked = !cb.checked;
  ecRenderChips(ddId, chipsId);
}

/* Render chips from checked items */
function ecRenderChips(ddId, chipsId) {
  const dd = document.getElementById(ddId);
  const chipsEl = document.getElementById(chipsId);
  const checked = dd.querySelectorAll('.cd-item-cb:checked');
  if (checked.length === 0) {
    chipsEl.innerHTML = '<span class="cd-placeholder">Select...</span>';
    return;
  }
  chipsEl.innerHTML = Array.from(checked).map(cb => {
    const label = cb.parentElement.querySelector('span').textContent.trim();
    return '<span class="cd-chip">' + label + '<span class="cd-chip-x" onclick="event.stopPropagation();ecRemoveChip(this,\'' + ddId + '\',\'' + chipsId + '\')">&times;</span></span>';
  }).join('');
}

/* Remove a chip and uncheck the corresponding item */
function ecRemoveChip(xBtn, ddId, chipsId) {
  const chip = xBtn.parentElement;
  const label = chip.textContent.replace('\u00d7','').trim();
  const dd = document.getElementById(ddId);
  dd.querySelectorAll('.cd-item').forEach(item => {
    if (item.querySelector('span') && item.querySelector('span').textContent.trim() === label) {
      item.querySelector('.cd-item-cb').checked = false;
    }
  });
  ecRenderChips(ddId, chipsId);
}

/* Close dropdowns when clicking outside */
document.addEventListener('click', function(e) {
  if (!e.target.closest('.custom-dropdown')) {
    document.querySelectorAll('.custom-dropdown.open').forEach(d => d.classList.remove('open'));
  }
});

/* ================================================================
 *  DEPLOY POLICY — Custom Group Summary Page
 * ================================================================ */
const EC_DEPLOY_SUMMARY_DATA = {
  'All Computers Group': {
    computers: [
      { name: 'WilsonLawson', icon: 'fab fa-windows', domain: 'WORKGROUP', lastContact: 'Nov 21, 2025 12:27 AM', status: 'In Progress', remarks: 'Newly added device' },
      { name: 'WillieRodriguez', icon: 'fab fa-windows', domain: 'WORKGROUP', lastContact: 'Nov 21, 2025 12:27 AM', status: 'In Progress', remarks: 'Newly added device' },
      { name: 'WilliamBassett', icon: 'fab fa-apple', domain: 'WORKGROUP', lastContact: 'Sep 9, 2025 11:39 AM', status: 'In Progress', remarks: 'Pre-requisite not configured.' },
      { name: 'WalterFuller', icon: 'fab fa-windows', domain: 'WORKGROUP', lastContact: 'Sep 9, 2025 01:05 PM', status: 'In Progress', remarks: 'Newly added device' },
      { name: 'VivianArp', icon: 'fab fa-windows', domain: 'WORKGROUP', lastContact: 'Sep 9, 2025 01:05 PM', status: 'In Progress', remarks: 'Newly added device' },
      { name: 'VirgilAllender', icon: 'fab fa-windows', domain: 'WORKGROUP', lastContact: 'Sep 9, 2025 01:05 PM', status: 'In Progress', remarks: 'Newly added device' },
      { name: 'TravisDavis', icon: 'fab fa-windows', domain: 'WORKGROUP', lastContact: 'Sep 9, 2025 11:39 AM', status: 'In Progress', remarks: 'Newly added device' },
      { name: 'TraciChristman', icon: 'fab fa-windows', domain: 'WORKGROUP', lastContact: 'Sep 9, 2025 11:39 AM', status: 'In Progress', remarks: 'Newly added device' },
      { name: 'TimothySmith', icon: 'fab fa-apple', domain: 'WORKGROUP', lastContact: 'Sep 9, 2025 11:39 AM', status: 'In Progress', remarks: 'Pre-requisite not configured.' },
      { name: 'ThomasValdez', icon: 'fab fa-apple', domain: 'WORKGROUP', lastContact: 'Nov 20, 2025 01:07 PM', status: 'In Progress', remarks: 'Pre-requisite not configured.' },
      { name: 'ThomasNealy', icon: 'fab fa-apple', domain: 'WORKGROUP', lastContact: 'Sep 9, 2025 11:39 AM', status: 'In Progress', remarks: 'Pre-requisite not configured.' },
      { name: 'TheodoreToulouse', icon: 'fab fa-windows', domain: 'WORKGROUP', lastContact: 'Sep 9, 2025 11:39 AM', status: 'In Progress', remarks: 'Newly added device' },
      { name: 'TeresaCosta', icon: 'fab fa-windows', domain: 'WORKGROUP', lastContact: 'Sep 9, 2025 01:05 PM', status: 'In Progress', remarks: 'Newly added device' },
      { name: 'SureshKumar', icon: 'fab fa-linux', domain: 'WORKGROUP', lastContact: 'Mar 15, 2026 10:20 AM', status: 'In Progress', remarks: 'Newly added device' },
      { name: 'RajeshNair', icon: 'fab fa-linux', domain: 'WORKGROUP', lastContact: 'Mar 16, 2026 09:45 AM', status: 'In Progress', remarks: 'Newly added device' },
      { name: 'LinuxBuild-01', icon: 'fab fa-linux', domain: 'WORKGROUP', lastContact: 'Mar 17, 2026 02:30 PM', status: 'In Progress', remarks: 'Newly added device' },
    ],
    appGroups: [
      { name: 'Allowed apps', icon: 'fab fa-windows', type: 'Allowlist', created: 'May 2, 2024 12:06 PM', modified: 'Oct 25, 2024 10:51 AM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Allowed apps mac', icon: 'fab fa-apple', type: 'Allowlist', created: 'Jun 25, 2024 07:57 PM', modified: 'Jun 25, 2024 07:57 PM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Allowed Linux apps', icon: 'fab fa-linux', type: 'Allowlist', created: 'Mar 10, 2026 09:15 AM', modified: 'Mar 10, 2026 09:15 AM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Allowed Store Apps', icon: 'fab fa-windows', type: 'Allowlist', created: 'Nov 24, 2023 10:48 PM', modified: 'Nov 24, 2023 10:48 PM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Block E Drive', icon: 'fab fa-windows', type: 'Blocklist', created: 'Nov 24, 2023 10:49 PM', modified: 'Nov 24, 2023 10:49 PM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Block firefox', icon: 'fab fa-windows', type: 'Blocklist', created: 'Nov 24, 2023 10:49 PM', modified: 'Nov 24, 2023 10:49 PM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Blocked Apps', icon: 'fab fa-windows', type: 'Blocklist', created: 'Nov 24, 2023 10:54 PM', modified: 'Oct 25, 2024 10:55 AM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Blocked apps mac', icon: 'fab fa-apple', type: 'Blocklist', created: 'Jun 25, 2024 07:58 PM', modified: 'Oct 25, 2024 03:12 PM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Blocked Linux apps', icon: 'fab fa-linux', type: 'Blocklist', created: 'Mar 12, 2026 11:30 AM', modified: 'Mar 12, 2026 11:30 AM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Screening Application Group', icon: 'fab fa-windows', type: 'Blocklist', created: 'Nov 24, 2023 10:57 PM', modified: 'Nov 24, 2023 10:57 PM', createdBy: 'demo', modifiedBy: 'demo' },
    ],
    allowedApps: [
      { name: 'BraveCrashHandler.exe', vendor: 'Brave Software, Inc.', credibility: 'Verified Publisher', groupName: 'Allowed apps' },
      { name: 'dbeaver.exe', vendor: 'DBeaver Corp', credibility: 'Verified Publisher', groupName: 'Allowed apps' },
      { name: 'FortiClientSecurity.exe', vendor: 'Fortinet Technologies (Canada) ULC', credibility: 'Verified Publisher', groupName: 'Allowed apps' },
      { name: 'FortiVPNSt.exe', vendor: 'Fortinet Technologies (Canada) ULC', credibility: 'Verified Publisher', groupName: 'Allowed apps' },
      { name: 'stackbuilder.exe', vendor: 'EnterpriseDB Corporation', credibility: 'Verified Publisher', groupName: 'Allowed apps' },
      { name: 'nginx', vendor: 'F5, Inc.', credibility: 'Verified Publisher', groupName: 'Allowed Linux apps' },
      { name: 'docker', vendor: 'Docker, Inc.', credibility: 'Verified Publisher', groupName: 'Allowed Linux apps' },
      { name: 'git', vendor: 'Software Freedom Conservancy', credibility: 'Verified Publisher', groupName: 'Allowed Linux apps' },
    ],
    blockedApps: [
      { name: 'Firefox', vendor: 'Mozilla Corporation', credibility: 'Verified Publisher', groupName: 'Block firefox' },
      { name: 'Adobe AIR', vendor: 'Adobe Systems, Incorporated', credibility: 'Verified Publisher', groupName: 'Blocked Apps' },
      { name: 'ApClose', vendor: 'ALPS ELECTRIC CO., LTD.', credibility: 'Verified Publisher', groupName: 'Blocked Apps' },
      { name: 'Flow', vendor: 'Conexant Systems LLC', credibility: 'Verified Publisher', groupName: 'Blocked Apps' },
      { name: 'MaxxAudio Pro', vendor: 'Waves Inc', credibility: 'Verified Publisher', groupName: 'Blocked Apps' },
      { name: 'Skype', vendor: 'Skype Software Sarl', credibility: 'Verified Publisher', groupName: 'Blocked Apps' },
      { name: 'SmartAudio CPL (32bit)', vendor: 'Conexant Systems, Inc.', credibility: 'Verified Publisher', groupName: 'Blocked Apps' },
      { name: 'SmartAudio Service Application', vendor: 'Conexant Systems, Inc.', credibility: 'Verified Publisher', groupName: 'Blocked Apps' },
      { name: 'SmartAudio3', vendor: 'Synaptics Incorporated', credibility: 'Verified Publisher', groupName: 'Blocked Apps' },
      { name: 'Spotify', vendor: 'Spotify AB', credibility: 'Verified Publisher', groupName: 'Blocked Apps' },
      { name: 'Squid', vendor: '--', credibility: 'Unverified Publisher', groupName: 'Blocked Apps' },
      { name: 'Waves MaxxAudio', vendor: 'Waves Inc', credibility: 'Verified Publisher', groupName: 'Blocked Apps' },
      { name: 'Remote Desktop Manager', vendor: 'Devolutions inc.', credibility: 'Verified Publisher', groupName: 'Screening Application Group' },
      { name: 'Remote Desktop Manager Free', vendor: 'Devolutions inc.', credibility: 'Verified Publisher', groupName: 'Screening Application Group' },
      { name: 'TeamViewer', vendor: 'TeamViewer Germany GmbH', credibility: 'Verified Publisher', groupName: 'Screening Application Group' },
      { name: 'TeamViewer Host Installer', vendor: 'TeamViewer Germany GmbH', credibility: 'Verified Publisher', groupName: 'Screening Application Group' },
      { name: 'nmap', vendor: 'Nmap Project', credibility: 'Verified Publisher', groupName: 'Blocked Linux apps' },
      { name: 'wireshark', vendor: 'Wireshark Foundation', credibility: 'Verified Publisher', groupName: 'Blocked Linux apps' },
    ],
    unmanagedApps: [
      { name: 'LomondMessaging15', vendor: 'Acronis International GmbH9', credibility: 'Unverified Publisher', count: 24 },
      { name: 'ArkSignerWindowsService14', vendor: 'Microsoft 3rd Party Application Component10', credibility: 'Verified Publisher', count: 14 },
      { name: 'corTTex99', vendor: '--', credibility: 'Unverified Publisher', count: 14 },
      { name: 'DellOSDService for Grizzy/Bighorn59', vendor: 'Microsoft 3rd Party Application Component5', credibility: 'Verified Publisher', count: 14 },
      { name: 'SentinelRDTStartService60', vendor: '--', credibility: 'Unverified Publisher', count: 14 },
      { name: 'Internet Explorer41', vendor: '--', credibility: 'Unverified Publisher', count: 2 },
      { name: 'Spotify70', vendor: '--', credibility: 'Unverified Publisher', count: 2 },
      { name: 'im64', vendor: '--', credibility: 'Unverified Publisher', count: 2 },
      { name: 'Yandex updater89', vendor: '--', credibility: 'Unverified Publisher', count: 2 },
      { name: 'Sentinel53', vendor: '--', credibility: 'Unverified Publisher', count: 2 },
      { name: 'Slideshow PlugIn for IrfanView92', vendor: '--', credibility: 'Unverified Publisher', count: 2 },
      { name: 'Adobe Reader32', vendor: 'Microsoft Windows Publisher8', credibility: 'Verified Publisher', count: 2 },
      { name: 'CH2000PDFService36', vendor: '--', credibility: 'Unverified Publisher', count: 2 },
      { name: 'Adobe Reader and Acrobat Manager108', vendor: '--', credibility: 'Unverified Publisher', count: 2 },
      { name: 'DeskAlerts68', vendor: '--', credibility: 'Unverified Publisher', count: 2 },
      { name: 'MnitorStatus_AP78', vendor: '--', credibility: 'Unverified Publisher', count: 1 },
      { name: 'htop', vendor: '--', credibility: 'Unverified Publisher', count: 3 },
      { name: 'tmux', vendor: '--', credibility: 'Unverified Publisher', count: 2 },
    ],
    requestedApps: [
      { name: 'Microsoft\u00ae Visual Studio\u00ae', vendor: 'Microsoft Corporation', credibility: 'Verified Publisher', requests: 1 },
      { name: 'Visual Studio Code', vendor: 'Microsoft Corporation', credibility: 'Verified Publisher', requests: 2 },
      { name: 'IntelliJ IDEA', vendor: 'JetBrains s.r.o.', credibility: 'Verified Publisher', requests: 1 },
    ],
    unmanagedElevatedApps: [
      { name: 'LomondMessaging15', vendor: 'Acronis International GmbH9', credibility: 'Unverified Publisher', count: 24 },
      { name: 'ArkSignerWindowsService14', vendor: 'Microsoft 3rd Party Application Component10', credibility: 'Verified Publisher', count: 14 },
      { name: 'corTTex99', vendor: '--', credibility: 'Unverified Publisher', count: 14 },
      { name: 'DellOSDService for Grizzy/Bighorn59', vendor: 'Microsoft 3rd Party Application Component5', credibility: 'Verified Publisher', count: 14 },
      { name: 'SentinelRDTStartService60', vendor: '--', credibility: 'Unverified Publisher', count: 14 },
      { name: 'Internet Explorer41', vendor: '--', credibility: 'Unverified Publisher', count: 2 },
      { name: 'Spotify70', vendor: '--', credibility: 'Unverified Publisher', count: 2 },
      { name: 'im64', vendor: '--', credibility: 'Unverified Publisher', count: 2 },
      { name: 'Yandex updater89', vendor: '--', credibility: 'Unverified Publisher', count: 2 },
      { name: 'Sentinel53', vendor: '--', credibility: 'Unverified Publisher', count: 2 },
      { name: 'Slideshow PlugIn for IrfanView92', vendor: '--', credibility: 'Unverified Publisher', count: 2 },
    ],
    elevationExcludedApps: [
      { name: 'powershell_ise.exe', vendor: 'Microsoft Corporation', credibility: 'Verified Publisher', policyName: 'Windows EPM Policy' },
      { name: 'AutoHotkey.exe', vendor: 'Lexikos', credibility: 'Unverified Publisher', policyName: 'Windows EPM Policy' },
      { name: 'WinRAR.exe', vendor: 'Alexander L. Roshal', credibility: 'Unverified Publisher', policyName: 'Windows EPM Policy' },
      { name: 'cmd.exe', vendor: 'Microsoft Corporation', credibility: 'Verified Publisher', policyName: 'EPM - Admin Access Policy' },
    ],
    elevatedApps: [
      { name: 'curl.exe', vendor: 'Microsoft Corporation', credibility: 'Verified Publisher', elevatedBy: 'uesqa-test11', decision: 'Approved', policyName: 'Windows EPM Policy' },
      { name: 'dbeaver.exe', vendor: 'DBeaver Corp', credibility: 'Verified Publisher', elevatedBy: 'john.doe', decision: 'Approved', policyName: 'Windows EPM Policy' },
      { name: 'Wireshark.exe', vendor: 'Wireshark Foundation', credibility: 'Verified Publisher', elevatedBy: 'mike.chen', decision: 'Approved', policyName: 'EPM - Admin Access Policy' },
      { name: 'IntelliJ IDEA.exe', vendor: 'JetBrains s.r.o.', credibility: 'Verified Publisher', elevatedBy: 'amy.zhang', decision: 'Approved', policyName: 'Windows EPM Policy' },
      { name: 'VS Code.exe', vendor: 'Microsoft Corporation', credibility: 'Verified Publisher', elevatedBy: 'john.doe', decision: 'Pending', policyName: 'Windows EPM Policy' },
    ]
  },
  'Engineering group': {
    computers: [
      { name: 'EngPC-01', icon: 'fab fa-windows', domain: 'WORKGROUP', lastContact: 'Mar 10, 2026 09:15 AM', status: 'In Progress', remarks: 'Newly added device' },
      { name: 'EngPC-02', icon: 'fab fa-linux', domain: 'WORKGROUP', lastContact: 'Mar 11, 2026 02:30 PM', status: 'In Progress', remarks: 'Newly added device' },
    ],
    appGroups: [
      { name: 'Allowed apps', icon: 'fab fa-windows', type: 'Allowlist', created: 'May 2, 2024 12:06 PM', modified: 'Oct 25, 2024 10:51 AM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Allowed Linux apps', icon: 'fab fa-linux', type: 'Allowlist', created: 'Mar 10, 2026 09:15 AM', modified: 'Mar 10, 2026 09:15 AM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Blocked Apps', icon: 'fab fa-windows', type: 'Blocklist', created: 'Nov 24, 2023 10:54 PM', modified: 'Oct 25, 2024 10:55 AM', createdBy: 'demo', modifiedBy: 'demo' },
    ],
    allowedApps: [
      { name: 'dbeaver.exe', vendor: 'DBeaver Corp', credibility: 'Verified Publisher', groupName: 'Allowed apps' },
      { name: 'docker', vendor: 'Docker, Inc.', credibility: 'Verified Publisher', groupName: 'Allowed Linux apps' },
    ],
    blockedApps: [
      { name: 'Spotify', vendor: 'Spotify AB', credibility: 'Verified Publisher', groupName: 'Blocked Apps' },
    ],
    unmanagedApps: [
      { name: 'Sentinel53', vendor: '--', credibility: 'Unverified Publisher', count: 2 },
    ],
    requestedApps: [],
    unmanagedElevatedApps: [
      { name: 'Sentinel53', vendor: '--', credibility: 'Unverified Publisher', count: 2 },
    ],
    elevationExcludedApps: [],
    elevatedApps: [
      { name: 'dbeaver.exe', vendor: 'DBeaver Corp', credibility: 'Verified Publisher', elevatedBy: 'john.doe', decision: 'Approved', policyName: 'Windows EPM Policy' },
    ]
  },
  'Support Group': {
    computers: [
      { name: 'SupportPC-01', icon: 'fab fa-windows', domain: 'WORKGROUP', lastContact: 'Mar 12, 2026 10:00 AM', status: 'In Progress', remarks: 'Newly added device' },
      { name: 'SupportPC-02', icon: 'fab fa-windows', domain: 'WORKGROUP', lastContact: 'Mar 12, 2026 11:00 AM', status: 'In Progress', remarks: 'Newly added device' },
      { name: 'SupportPC-03', icon: 'fab fa-linux', domain: 'WORKGROUP', lastContact: 'Mar 13, 2026 09:15 AM', status: 'In Progress', remarks: 'Newly added device' },
    ],
    appGroups: [
      { name: 'Allowed apps', icon: 'fab fa-windows', type: 'Allowlist', created: 'May 2, 2024 12:06 PM', modified: 'Oct 25, 2024 10:51 AM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Allowed Linux apps', icon: 'fab fa-linux', type: 'Allowlist', created: 'Mar 10, 2026 09:15 AM', modified: 'Mar 10, 2026 09:15 AM', createdBy: 'demo', modifiedBy: 'demo' },
    ],
    allowedApps: [
      { name: 'FortiClientSecurity.exe', vendor: 'Fortinet Technologies (Canada) ULC', credibility: 'Verified Publisher', groupName: 'Allowed apps' },
    ],
    blockedApps: [],
    unmanagedApps: [],
    requestedApps: [],
    unmanagedElevatedApps: [],
    elevationExcludedApps: [],
    elevatedApps: []
  },
  'Windows Machines': {
    computers: [
      { name: 'WinPC-01', icon: 'fab fa-windows', domain: 'WORKGROUP', lastContact: 'Mar 14, 2026 08:30 AM', status: 'In Progress', remarks: 'Newly added device' },
      { name: 'WinPC-02', icon: 'fab fa-windows', domain: 'WORKGROUP', lastContact: 'Mar 14, 2026 09:30 AM', status: 'In Progress', remarks: 'Newly added device' },
    ],
    appGroups: [
      { name: 'Allowed apps', icon: 'fab fa-windows', type: 'Allowlist', created: 'May 2, 2024 12:06 PM', modified: 'Oct 25, 2024 10:51 AM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Blocked Apps', icon: 'fab fa-windows', type: 'Blocklist', created: 'Nov 24, 2023 10:54 PM', modified: 'Oct 25, 2024 10:55 AM', createdBy: 'demo', modifiedBy: 'demo' },
    ],
    allowedApps: [
      { name: 'BraveCrashHandler.exe', vendor: 'Brave Software, Inc.', credibility: 'Verified Publisher', groupName: 'Allowed apps' },
    ],
    blockedApps: [
      { name: 'Adobe AIR', vendor: 'Adobe Systems, Incorporated', credibility: 'Verified Publisher', groupName: 'Blocked Apps' },
    ],
    unmanagedApps: [
      { name: 'corTTex99', vendor: '--', credibility: 'Unverified Publisher', count: 14 },
    ],
    requestedApps: [],
    unmanagedElevatedApps: [
      { name: 'corTTex99', vendor: '--', credibility: 'Unverified Publisher', count: 14 },
    ],
    elevationExcludedApps: [
      { name: 'cmd.exe', vendor: 'Microsoft Corporation', credibility: 'Verified Publisher', policyName: 'EPM - Admin Access Policy' },
    ],
    elevatedApps: [
      { name: 'curl.exe', vendor: 'Microsoft Corporation', credibility: 'Verified Publisher', elevatedBy: 'uesqa-test11', decision: 'Approved', policyName: 'Windows EPM Policy' },
    ]
  },
  'Linux Machines': {
    computers: [
      { name: 'LinuxSrv-01', icon: 'fab fa-linux', domain: 'WORKGROUP', lastContact: 'Mar 18, 2026 08:00 AM', status: 'In Progress', remarks: 'Newly added device' },
      { name: 'LinuxSrv-02', icon: 'fab fa-linux', domain: 'WORKGROUP', lastContact: 'Mar 18, 2026 09:30 AM', status: 'In Progress', remarks: 'Newly added device' },
      { name: 'LinuxDev-01', icon: 'fab fa-linux', domain: 'WORKGROUP', lastContact: 'Mar 19, 2026 10:15 AM', status: 'In Progress', remarks: 'Newly added device' },
    ],
    appGroups: [
      { name: 'Allowed Linux apps', icon: 'fab fa-linux', type: 'Allowlist', created: 'Mar 10, 2026 09:15 AM', modified: 'Mar 10, 2026 09:15 AM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Blocked Linux apps', icon: 'fab fa-linux', type: 'Blocklist', created: 'Mar 12, 2026 11:30 AM', modified: 'Mar 12, 2026 11:30 AM', createdBy: 'demo', modifiedBy: 'demo' },
    ],
    allowedApps: [
      { name: 'nginx', vendor: 'F5, Inc.', credibility: 'Verified Publisher', groupName: 'Allowed Linux apps' },
      { name: 'docker', vendor: 'Docker, Inc.', credibility: 'Verified Publisher', groupName: 'Allowed Linux apps' },
    ],
    blockedApps: [
      { name: 'nmap', vendor: 'Nmap Project', credibility: 'Verified Publisher', groupName: 'Blocked Linux apps' },
    ],
    unmanagedApps: [
      { name: 'htop', vendor: '--', credibility: 'Unverified Publisher', count: 3 },
    ],
    requestedApps: [
      { name: 'Visual Studio Code', vendor: 'Microsoft Corporation', credibility: 'Verified Publisher', requests: 1 },
    ],
    unmanagedElevatedApps: [],
    elevationExcludedApps: [],
    elevatedApps: []
  },
  'Developer group': {
    computers: [
      { name: 'DevPC-01', icon: 'fab fa-windows', domain: 'WORKGROUP', lastContact: 'Mar 20, 2026 08:30 AM', status: 'In Progress', remarks: 'Newly added device' },
    ],
    appGroups: [
      { name: 'Allowed apps', icon: 'fab fa-windows', type: 'Allowlist', created: 'May 2, 2024 12:06 PM', modified: 'Oct 25, 2024 10:51 AM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Allowed Linux apps', icon: 'fab fa-linux', type: 'Allowlist', created: 'Mar 10, 2026 09:15 AM', modified: 'Mar 10, 2026 09:15 AM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Allowed apps mac', icon: 'fab fa-apple', type: 'Allowlist', created: 'Jun 25, 2024 07:57 PM', modified: 'Jun 25, 2024 07:57 PM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Blocked Apps', icon: 'fab fa-windows', type: 'Blocklist', created: 'Nov 24, 2023 10:54 PM', modified: 'Oct 25, 2024 10:55 AM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Block firefox', icon: 'fab fa-windows', type: 'Blocklist', created: 'Nov 24, 2023 10:49 PM', modified: 'Nov 24, 2023 10:49 PM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Blocked apps mac', icon: 'fab fa-apple', type: 'Blocklist', created: 'Jun 25, 2024 07:58 PM', modified: 'Oct 25, 2024 03:12 PM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Blocked Linux apps', icon: 'fab fa-linux', type: 'Blocklist', created: 'Mar 12, 2026 11:30 AM', modified: 'Mar 12, 2026 11:30 AM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Screening Application Group', icon: 'fab fa-windows', type: 'Blocklist', created: 'Nov 24, 2023 10:57 PM', modified: 'Nov 24, 2023 10:57 PM', createdBy: 'demo', modifiedBy: 'demo' },
    ],
    allowedApps: [
      { name: 'dbeaver.exe', vendor: 'DBeaver Corp', credibility: 'Verified Publisher', groupName: 'Allowed apps' },
      { name: 'docker', vendor: 'Docker, Inc.', credibility: 'Verified Publisher', groupName: 'Allowed Linux apps' },
    ],
    blockedApps: [
      { name: 'Spotify', vendor: 'Spotify AB', credibility: 'Verified Publisher', groupName: 'Blocked Apps' },
      { name: 'nmap', vendor: 'Nmap Project', credibility: 'Verified Publisher', groupName: 'Blocked Linux apps' },
    ],
    unmanagedApps: [
      { name: 'Sentinel53', vendor: '--', credibility: 'Unverified Publisher', count: 2 },
    ],
    requestedApps: [
      { name: 'IntelliJ IDEA', vendor: 'JetBrains s.r.o.', credibility: 'Verified Publisher', requests: 1 },
    ],
    unmanagedElevatedApps: [
      { name: 'Sentinel53', vendor: '--', credibility: 'Unverified Publisher', count: 2 },
    ],
    elevationExcludedApps: [
      { name: 'AutoHotkey.exe', vendor: 'Lexikos', credibility: 'Unverified Publisher', policyName: 'Windows EPM Policy' },
    ],
    elevatedApps: [
      { name: 'IntelliJ IDEA.exe', vendor: 'JetBrains s.r.o.', credibility: 'Verified Publisher', elevatedBy: 'amy.zhang', decision: 'Approved', policyName: 'Windows EPM Policy' },
      { name: 'VS Code.exe', vendor: 'Microsoft Corporation', credibility: 'Verified Publisher', elevatedBy: 'john.doe', decision: 'Pending', policyName: 'Windows EPM Policy' },
    ]
  },
  'Marketing Group': {
    computers: [
      { name: 'MktPC-01', icon: 'fab fa-windows', domain: 'WORKGROUP', lastContact: 'Mar 21, 2026 09:00 AM', status: 'In Progress', remarks: 'Newly added device' },
      { name: 'MktPC-02', icon: 'fab fa-windows', domain: 'WORKGROUP', lastContact: 'Mar 21, 2026 10:30 AM', status: 'In Progress', remarks: 'Newly added device' },
      { name: 'MktPC-03', icon: 'fab fa-apple', domain: 'WORKGROUP', lastContact: 'Mar 22, 2026 11:00 AM', status: 'In Progress', remarks: 'Pre-requisite not configured.' },
      { name: 'MktPC-04', icon: 'fab fa-linux', domain: 'WORKGROUP', lastContact: 'Mar 22, 2026 02:00 PM', status: 'In Progress', remarks: 'Newly added device' },
      { name: 'MktPC-05', icon: 'fab fa-windows', domain: 'WORKGROUP', lastContact: 'Mar 23, 2026 08:45 AM', status: 'In Progress', remarks: 'Newly added device' },
    ],
    appGroups: [
      { name: 'Allowed apps', icon: 'fab fa-windows', type: 'Allowlist', created: 'May 2, 2024 12:06 PM', modified: 'Oct 25, 2024 10:51 AM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Allowed apps mac', icon: 'fab fa-apple', type: 'Allowlist', created: 'Jun 25, 2024 07:57 PM', modified: 'Jun 25, 2024 07:57 PM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Allowed Linux apps', icon: 'fab fa-linux', type: 'Allowlist', created: 'Mar 10, 2026 09:15 AM', modified: 'Mar 10, 2026 09:15 AM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Blocked Apps', icon: 'fab fa-windows', type: 'Blocklist', created: 'Nov 24, 2023 10:54 PM', modified: 'Oct 25, 2024 10:55 AM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Blocked apps mac', icon: 'fab fa-apple', type: 'Blocklist', created: 'Jun 25, 2024 07:58 PM', modified: 'Oct 25, 2024 03:12 PM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Blocked Linux apps', icon: 'fab fa-linux', type: 'Blocklist', created: 'Mar 12, 2026 11:30 AM', modified: 'Mar 12, 2026 11:30 AM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Screening Application Group', icon: 'fab fa-windows', type: 'Blocklist', created: 'Nov 24, 2023 10:57 PM', modified: 'Nov 24, 2023 10:57 PM', createdBy: 'demo', modifiedBy: 'demo' },
    ],
    allowedApps: [
      { name: 'BraveCrashHandler.exe', vendor: 'Brave Software, Inc.', credibility: 'Verified Publisher', groupName: 'Allowed apps' },
      { name: 'FortiVPNSt.exe', vendor: 'Fortinet Technologies (Canada) ULC', credibility: 'Verified Publisher', groupName: 'Allowed apps' },
    ],
    blockedApps: [
      { name: 'Spotify', vendor: 'Spotify AB', credibility: 'Verified Publisher', groupName: 'Blocked Apps' },
      { name: 'Firefox', vendor: 'Mozilla Corporation', credibility: 'Verified Publisher', groupName: 'Blocked Apps' },
    ],
    unmanagedApps: [
      { name: 'Adobe Reader32', vendor: 'Microsoft Windows Publisher8', credibility: 'Verified Publisher', count: 2 },
    ],
    requestedApps: [
      { name: 'Microsoft\u00ae Visual Studio\u00ae', vendor: 'Microsoft Corporation', credibility: 'Verified Publisher', requests: 1 },
    ],
    unmanagedElevatedApps: [
      { name: 'Adobe Reader32', vendor: 'Microsoft Windows Publisher8', credibility: 'Verified Publisher', count: 2 },
    ],
    elevationExcludedApps: [
      { name: 'WinRAR.exe', vendor: 'Alexander L. Roshal', credibility: 'Unverified Publisher', policyName: 'Windows EPM Policy' },
    ],
    elevatedApps: [
      { name: 'Wireshark.exe', vendor: 'Wireshark Foundation', credibility: 'Verified Publisher', elevatedBy: 'mike.chen', decision: 'Approved', policyName: 'EPM - Admin Access Policy' },
    ]
  },
  'Remote Branch': {
    computers: [
      { name: 'RemotePC-01', icon: 'fab fa-windows', domain: 'WORKGROUP', lastContact: 'Mar 24, 2026 10:00 AM', status: 'In Progress', remarks: 'Newly added device' },
    ],
    appGroups: [
      { name: 'Allowed apps', icon: 'fab fa-windows', type: 'Allowlist', created: 'May 2, 2024 12:06 PM', modified: 'Oct 25, 2024 10:51 AM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Blocked Apps', icon: 'fab fa-windows', type: 'Blocklist', created: 'Nov 24, 2023 10:54 PM', modified: 'Oct 25, 2024 10:55 AM', createdBy: 'demo', modifiedBy: 'demo' },
      { name: 'Blocked Linux apps', icon: 'fab fa-linux', type: 'Blocklist', created: 'Mar 12, 2026 11:30 AM', modified: 'Mar 12, 2026 11:30 AM', createdBy: 'demo', modifiedBy: 'demo' },
    ],
    allowedApps: [
      { name: 'FortiClientSecurity.exe', vendor: 'Fortinet Technologies (Canada) ULC', credibility: 'Verified Publisher', groupName: 'Allowed apps' },
    ],
    blockedApps: [
      { name: 'TeamViewer', vendor: 'TeamViewer Germany GmbH', credibility: 'Verified Publisher', groupName: 'Blocked Apps' },
    ],
    unmanagedApps: [],
    requestedApps: [
      { name: 'Visual Studio Code', vendor: 'Microsoft Corporation', credibility: 'Verified Publisher', requests: 1 },
    ],
    unmanagedElevatedApps: [],
    elevationExcludedApps: [],
    elevatedApps: []
  }
};

const EC_CLSID_DATA = [
  { component: 'Add modems', clsid: '{4DF929E7-4C5E-4587-A598-7ED7B3D6E462}' },
  { component: 'Adhoc Wireless Network', clsid: '{BB2D41DF-7E34-4F06-8F51-007C9CAD36BE}' },
  { component: 'Advanced Indexing Options', clsid: '{2F2165FF-2C2D-4612-87B2-CC8E5002EF4C}' },
  { component: 'Advanced sharing settings', clsid: '{FFE1DF5F-9F06-46D3-AF27-F1FC10D63892}' },
  { component: 'Apply File Attributes', clsid: '{E96767E0-7EAA-45E1-8E7D-64414AFF281A}' },
  { component: 'Check Disk', clsid: '{A4C31131-FF70-4984-AFD6-0609CED53AD6}' },
  { component: 'Color Management', clsid: '{D2E7041B-2927-42FB-8E9F-7CE93B6DC937}' },
  { component: 'Common Indexed Locations Settings', clsid: '{6D3951EB-0B07-4FB8-B703-7C5CEE0DB578}' },
  { component: 'Connection Manager', clsid: '{3E000D72-A845-4CD9-BD83-80C07C3B881F}' },
  { component: 'Content Advisor', clsid: '{46CB32FA-B5CA-8A3A-62CA-A7023C0496C5}' },
  { component: 'Create New Shortcut', clsid: '{1BA783C1-2A30-4AD3-B928-A9A46C604C28}' },
];

function ecOpenDeployPolicySummary(groupName, groupCategory, flexibility, associatedBy, lastModified, backPage) {
  const content = document.getElementById('pageContent');
  if (!content) return;
  const goBack = backPage || 'deploy-policy';

  const data = EC_DEPLOY_SUMMARY_DATA[groupName] || {
    computers: [], appGroups: [], allowedApps: [], blockedApps: [], unmanagedApps: [], requestedApps: [], unmanagedElevatedApps: [], elevationExcludedApps: [], elevatedApps: []
  };

  /* --- Computers tab --- */
  const computerRows = data.computers.map(c => {
    const remarksCls = c.remarks.includes('Pre-requisite') ? ' style="color:#d32f2f"' : '';
    return `<tr>
      <td><i class="${c.icon} os-icon"></i><a href="#" style="color:#1a73e8">${c.name}</a></td>
      <td>${c.domain}</td>
      <td>${c.lastContact}</td>
      <td>${c.status}</td>
      <td${remarksCls}>${c.remarks}</td>
    </tr>`;
  }).join('');

  /* --- Application Groups tab --- */
  const appGroupRows = data.appGroups.map(g =>
    `<tr>
      <td><i class="${g.icon} os-icon"></i><a href="#" style="color:#1a73e8">${g.name}</a></td>
      <td>${g.type}</td>
      <td>${g.created}</td>
      <td>${g.modified}</td>
      <td style="color:#1a73e8">${g.createdBy}</td>
      <td style="color:#1a73e8">${g.modifiedBy}</td>
    </tr>`
  ).join('');

  /* --- Allowed Apps tab --- */
  const allowedFilterTabs = ['Vendor', 'Product Name', 'Verified Executable', 'File Hash', 'Folder Path', 'Store Apps'];
  const allowedFilterHtml = allowedFilterTabs.map((t, i) =>
    `<a href="#" class="ag-filter-tab${i === 2 ? ' active' : ''}" onclick="ecSwitchDpFilterTab(this);return false">${t}</a>`
  ).join('');
  const allowedRows = data.allowedApps.map(a =>
    `<tr>
      <td>${a.name}</td>
      <td>${a.vendor}</td>
      <td>${a.credibility}</td>
      <td>${a.groupName}</td>
    </tr>`
  ).join('');

  /* --- Blocked Apps tab --- */
  const blockedFilterTabs = ['Vendor', 'Product Name', 'Verified Executable', 'File Hash', 'Folder Path', 'Store Apps'];
  const blockedFilterHtml = blockedFilterTabs.map((t, i) =>
    `<a href="#" class="ag-filter-tab${i === 1 ? ' active' : ''}" onclick="ecSwitchDpFilterTab(this);return false">${t}</a>`
  ).join('');
  const blockedRows = data.blockedApps.map(a =>
    `<tr>
      <td>${a.name}</td>
      <td>${a.vendor}</td>
      <td>${a.credibility}</td>
      <td>${a.groupName}</td>
    </tr>`
  ).join('');

  /* --- Unmanaged Apps tab --- */
  const unmanagedFilterTabs = ['Product Name', 'Verified Executable', 'File Hash', 'Store Apps'];
  const unmanagedFilterHtml = unmanagedFilterTabs.map((t, i) =>
    `<a href="#" class="ag-filter-tab${i === 0 ? ' active' : ''}" onclick="ecSwitchDpFilterTab(this);return false">${t}</a>`
  ).join('');
  const unmanagedRows = data.unmanagedApps.map(a =>
    `<tr>
      <td><input type="checkbox" class="dp-unmanaged-cb" onclick="ecUpdateDpUnmanagedSelection()" /></td>
      <td>${a.name}</td>
      <td>${a.vendor}</td>
      <td>${a.credibility}</td>
      <td><a href="#" style="color:#1a73e8">${a.count}</a></td>
    </tr>`
  ).join('');

  /* --- Requested Apps tab --- */
  const requestedFilterTabs = ['Product Name', 'Verified Executable', 'File Hash', 'Store Apps'];
  const requestedFilterHtml = requestedFilterTabs.map((t, i) =>
    `<a href="#" class="ag-filter-tab${i === 0 ? ' active' : ''}" onclick="ecSwitchDpFilterTab(this);return false">${t}</a>`
  ).join('');
  const requestedRows = data.requestedApps.map(a =>
    `<tr>
      <td><input type="checkbox" class="dp-requested-cb" onclick="ecUpdateDpRequestedSelection()" /></td>
      <td>${a.name}</td>
      <td>${a.vendor}</td>
      <td>${a.credibility}</td>
      <td><a href="#" style="color:#1a73e8">${a.requests}</a></td>
    </tr>`
  ).join('');

  /* --- Unmanaged Apps for Elevation tab (Windows only) --- */
  const ueFilterTabs = ['Vendor', 'Product Name', 'Verified Executable', 'File Hash', 'CLSID'];
  const ueFilterHtml = ueFilterTabs.map((t, i) =>
    `<a href="#" class="ag-filter-tab${i === 0 ? ' active' : ''}" onclick="ecSwitchUeFilterTab(this,'${t}');return false">${t}</a>`
  ).join('');
  const ueRows = data.unmanagedElevatedApps.map(a =>
    `<tr>
      <td><input type="checkbox" class="dp-ue-cb" onclick="ecUpdateDpUeSelection()" /></td>
      <td>${a.name}</td>
      <td>${a.vendor}</td>
      <td>${a.credibility}</td>
      <td><a href="#" style="color:#1a73e8">${a.count}</a></td>
    </tr>`
  ).join('');
  const clsidRows = EC_CLSID_DATA.map(c =>
    `<tr>
      <td><input type="checkbox" class="dp-clsid-cb" onclick="ecUpdateDpClsidSelection()" /></td>
      <td><a href="#" style="color:#1a73e8">${c.component}</a></td>
      <td>${c.clsid}</td>
    </tr>`
  ).join('');

  /* --- Elevation Excluded Apps tab (Windows only) --- */
  const exclFilterTabs = ['Vendor', 'Product Name', 'Verified Executable', 'File Hash', 'CLSID'];
  const exclFilterHtml = exclFilterTabs.map((t, i) =>
    `<a href="#" class="ag-filter-tab${i === 0 ? ' active' : ''}" onclick="ecSwitchDpFilterTab(this);return false">${t}</a>`
  ).join('');
  const exclRows = data.elevationExcludedApps.map(a =>
    `<tr>
      <td>${a.name}</td>
      <td>${a.vendor}</td>
      <td>${a.credibility}</td>
      <td>${a.policyName}</td>
    </tr>`
  ).join('');

  /* --- Elevated Apps tab (Windows only) --- */
  const elevFilterTabs = ['Vendor', 'Product Name', 'Verified Executable', 'File Hash', 'CLSID'];
  const elevFilterHtml = elevFilterTabs.map((t, i) =>
    `<a href="#" class="ag-filter-tab${i === 0 ? ' active' : ''}" onclick="ecSwitchDpFilterTab(this);return false">${t}</a>`
  ).join('');
  const elevRows = data.elevatedApps.map(a => {
    const badgeCls = a.decision === 'Approved' ? 'color:#2e7d32;background:#e8f5e9' : 'color:#e65100;background:#fff3e0';
    return `<tr>
      <td>${a.name}</td>
      <td>${a.vendor}</td>
      <td>${a.credibility}</td>
      <td>${a.elevatedBy}</td>
      <td><span style="padding:2px 10px;border-radius:10px;font-size:12px;font-weight:500;${badgeCls}">${a.decision}</span></td>
      <td>${a.policyName}</td>
    </tr>`;
  }).join('');

  content.innerHTML = `
    <div class="dp-summary-page">
      <!-- Header -->
      <div class="dp-summary-header">
        <div class="dp-summary-header-left">
          ${goBack !== 'deploy-policy' ? '<a href="#" class="back-arrow" onclick="ecShowSubReport(\'' + goBack + '\');return false" style="color:#555;font-size:16px;text-decoration:none;display:flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;margin-right:4px"><i class="fa fa-arrow-left"></i></a>' : ''}
          <div class="dp-header-icons">
            <i class="fa fa-desktop" style="font-size:18px;color:#555"></i>
            <i class="fa fa-layer-group" style="font-size:14px;color:#888;margin-left:-4px;margin-top:8px"></i>
          </div>
          <div>
            <h1>${groupName}</h1>
            <div class="dp-header-meta">
              <span>Computer Groups : <span style="color:#1a9cb0">${groupCategory}</span></span>
              <span class="dp-meta-sep">|</span>
              <span>Flexibility status : <span style="color:#333;font-weight:500">${flexibility}</span></span>
              <span class="dp-meta-sep">|</span>
              <span>Association by user : <span style="color:#333">${associatedBy}</span></span>
              <span class="dp-meta-sep">|</span>
              <span>Last Modified Time : <span style="color:#333">${lastModified}</span></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Tabs -->
      <div class="dp-tabs">
        <a href="#" class="dp-tab active" onclick="ecSwitchDpTab(this,'dp-tab-computers');return false">Computers</a>
        <a href="#" class="dp-tab" onclick="ecSwitchDpTab(this,'dp-tab-appgroups');return false">Application Groups</a>
        <a href="#" class="dp-tab" onclick="ecSwitchDpTab(this,'dp-tab-allowed');return false">Allowed Apps</a>
        <a href="#" class="dp-tab" onclick="ecSwitchDpTab(this,'dp-tab-blocked');return false">Blocked Apps</a>
        <a href="#" class="dp-tab" onclick="ecSwitchDpTab(this,'dp-tab-unmanaged');return false">Unmanaged Apps</a>
        <a href="#" class="dp-tab" onclick="ecSwitchDpTab(this,'dp-tab-requested');return false">Requested Apps</a>
        <a href="#" class="dp-tab" onclick="ecSwitchDpTab(this,'dp-tab-ue');return false">Unmanaged Apps for Elevation</a>
        <a href="#" class="dp-tab" onclick="ecSwitchDpTab(this,'dp-tab-excl');return false">Elevation Excluded Apps</a>
        <a href="#" class="dp-tab" onclick="ecSwitchDpTab(this,'dp-tab-elevated');return false">Elevated Apps</a>
      </div>

      <!-- Tab: Computers -->
      <div class="dp-tab-content" id="dp-tab-computers">
        <div class="dp-content-toolbar">
          <span class="filter-label">Filter By :</span>
          <select><option>Platform type</option><option>Windows</option><option>Mac</option><option>Linux</option></select>
          <select><option>Deployment Sta...</option><option>In Progress</option><option>Completed</option><option>Failed</option></select>
          <div class="toolbar-right" style="margin-left:auto">
            <span class="total-records"><a href="#" style="color:#1a73e8">Total Records</a></span>
            <span class="icon-btn"><i class="fa fa-search"></i></span>
            <span class="icon-btn"><i class="fa fa-columns"></i></span>
            <span class="icon-btn"><i class="fa fa-download"></i></span>
          </div>
        </div>
        <div class="table-wrap">
          <table class="data-table">
            <thead><tr>
              <th>Computer Name <i class="fa fa-sort sort-icon"></i></th>
              <th>Domain Name</th>
              <th>Last Contact Time</th>
              <th>Deployment Status</th>
              <th>Remarks</th>
            </tr></thead>
            <tbody>${computerRows}</tbody>
          </table>
        </div>
        <div class="table-pagination">
          <span>1 - ${Math.min(25, data.computers.length)} of <a href="#" style="color:#1a73e8">Total Records</a></span>
          <select><option>25</option></select>
          <span class="page-btn">&lt;</span>
          <span class="page-btn">&gt;</span>
        </div>
      </div>

      <!-- Tab: Application Groups -->
      <div class="dp-tab-content" id="dp-tab-appgroups" style="display:none">
        <div class="dp-content-toolbar">
          <span class="filter-label">Filter By :</span>
          <select><option>Platform type</option><option>Windows</option><option>Mac</option><option>Linux</option></select>
          <select><option>Group Type</option><option>Allowlist</option><option>Blocklist</option></select>
          <div class="toolbar-right" style="margin-left:auto">
            <span class="total-records"><a href="#" style="color:#1a73e8">Total Records</a></span>
            <span class="icon-btn"><i class="fa fa-search"></i></span>
            <span class="icon-btn"><i class="fa fa-columns"></i></span>
            <span class="icon-btn"><i class="fa fa-download"></i></span>
          </div>
        </div>
        <div class="table-wrap">
          <table class="data-table">
            <thead><tr>
              <th>Application Group Name <i class="fa fa-sort sort-icon"></i></th>
              <th>Group Type</th>
              <th>Created Time</th>
              <th>Last Modified Time</th>
              <th>Created By</th>
              <th>Last Modified By</th>
            </tr></thead>
            <tbody>${appGroupRows}</tbody>
          </table>
        </div>
        <div class="table-pagination">
          <span>1 - ${data.appGroups.length} of <a href="#" style="color:#1a73e8">Total Records</a></span>
          <select><option>25</option></select>
          <span class="page-btn">&lt;</span>
          <span class="page-btn">&gt;</span>
        </div>
      </div>

      <!-- Tab: Allowed Apps -->
      <div class="dp-tab-content" id="dp-tab-allowed" style="display:none">
        <div class="dp-apps-layout">
          <div class="dp-apps-sidebar">
            <div class="dp-platform-toggle">
              <span class="dp-plat-btn active" title="Windows"><i class="fab fa-windows"></i></span>
              <span class="dp-plat-btn" title="Mac"><i class="fab fa-apple"></i></span>
              <span class="dp-plat-btn" title="Linux"><i class="fab fa-linux"></i></span>
            </div>
            ${allowedFilterHtml}
          </div>
          <div class="dp-apps-main">
            <div class="dp-content-toolbar" style="border-bottom:1px solid #e8e8e8">
              <div class="toolbar-right" style="margin-left:auto">
                <span class="total-records"><a href="#" style="color:#1a73e8">Total Records</a></span>
                <span class="icon-btn"><i class="fa fa-search"></i></span>
                <span class="icon-btn"><i class="fa fa-columns"></i></span>
                <span class="icon-btn"><i class="fa fa-download"></i></span>
              </div>
            </div>
            <div class="table-wrap">
              <table class="data-table">
                <thead><tr>
                  <th>Executable Name</th>
                  <th>Vendor Name</th>
                  <th>Publisher Credibility</th>
                  <th>Application Group Name <i class="fa fa-sort sort-icon"></i></th>
                </tr></thead>
                <tbody>${allowedRows}</tbody>
              </table>
            </div>
            <div class="table-pagination">
              <span>1 - ${data.allowedApps.length} of <a href="#" style="color:#1a73e8">Total Records</a></span>
              <select><option>25</option></select>
              <span class="page-btn">&lt;</span>
              <span class="page-btn">&gt;</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab: Blocked Apps -->
      <div class="dp-tab-content" id="dp-tab-blocked" style="display:none">
        <div class="dp-apps-layout">
          <div class="dp-apps-sidebar">
            <div class="dp-platform-toggle">
              <span class="dp-plat-btn active" title="Windows"><i class="fab fa-windows"></i></span>
              <span class="dp-plat-btn" title="Mac"><i class="fab fa-apple"></i></span>
              <span class="dp-plat-btn" title="Linux"><i class="fab fa-linux"></i></span>
            </div>
            ${blockedFilterHtml}
          </div>
          <div class="dp-apps-main">
            <div class="dp-content-toolbar" style="border-bottom:1px solid #e8e8e8">
              <span class="filter-label">Filter By :</span>
              <select><option>Publisher Credib...</option><option>Verified Publisher</option><option>Unverified Publisher</option></select>
              <div class="toolbar-right" style="margin-left:auto">
                <span class="total-records"><a href="#" style="color:#1a73e8">Total Records</a></span>
                <span class="icon-btn"><i class="fa fa-search"></i></span>
                <span class="icon-btn"><i class="fa fa-columns"></i></span>
                <span class="icon-btn"><i class="fa fa-download"></i></span>
              </div>
            </div>
            <div class="table-wrap">
              <table class="data-table">
                <thead><tr>
                  <th>Product Name</th>
                  <th>Vendor Name</th>
                  <th>Publisher Credibility</th>
                  <th>Application Group Name <i class="fa fa-sort sort-icon"></i></th>
                </tr></thead>
                <tbody>${blockedRows}</tbody>
              </table>
            </div>
            <div class="table-pagination">
              <span>1 - ${data.blockedApps.length} of <a href="#" style="color:#1a73e8">Total Records</a></span>
              <select><option>25</option></select>
              <span class="page-btn">&lt;</span>
              <span class="page-btn">&gt;</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab: Unmanaged Apps -->
      <div class="dp-tab-content" id="dp-tab-unmanaged" style="display:none">
        <div class="dp-apps-layout">
          <div class="dp-apps-sidebar">
            <div class="dp-platform-toggle">
              <span class="dp-plat-btn active" title="Windows"><i class="fab fa-windows"></i></span>
              <span class="dp-plat-btn" title="Mac"><i class="fab fa-apple"></i></span>
              <span class="dp-plat-btn" title="Linux"><i class="fab fa-linux"></i></span>
            </div>
            ${unmanagedFilterHtml}
          </div>
          <div class="dp-apps-main">
            <div class="dp-content-toolbar" style="border-bottom:1px solid #e8e8e8">
              <button class="btn btn-sm" id="dpUnmanagedAddBtn" disabled><i class="fa fa-plus"></i> Add</button>
              <button class="btn btn-sm" id="dpUnmanagedMoveBtn" onclick="ecOpenMoveToAppGroupModal('unmanaged')" disabled><i class="fa fa-arrow-up-from-bracket"></i> Move to existing App group</button>
              <span class="filter-label" style="margin-left:12px">Filter By :</span>
              <select><option>Publisher Credib...</option><option>Verified Publisher</option><option>Unverified Publisher</option></select>
              <div class="toolbar-right" style="margin-left:auto">
                <span class="total-records"><a href="#" style="color:#1a73e8">Total Records</a></span>
                <span class="icon-btn"><i class="fa fa-search"></i></span>
                <span class="icon-btn"><i class="fa fa-columns"></i></span>
                <span class="icon-btn"><i class="fa fa-download"></i></span>
              </div>
            </div>
            <div class="table-wrap">
              <table class="data-table">
                <thead><tr>
                  <th style="width:32px"><input type="checkbox" onclick="document.querySelectorAll('.dp-unmanaged-cb').forEach(c=>{c.checked=this.checked});ecUpdateDpUnmanagedSelection()" /></th>
                  <th>Product Name</th>
                  <th>Vendor Name</th>
                  <th>Publisher Credibility</th>
                  <th>Resource Count <i class="fa fa-sort sort-icon"></i></th>
                </tr></thead>
                <tbody>${unmanagedRows}</tbody>
              </table>
            </div>
            <div class="table-pagination">
              <span>1 - ${data.unmanagedApps.length} of <a href="#" style="color:#1a73e8">Total Records</a></span>
              <select><option>25</option></select>
              <span class="page-btn">&lt;</span>
              <span class="page-btn">&gt;</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab: Requested Apps -->
      <div class="dp-tab-content" id="dp-tab-requested" style="display:none">
        <div class="dp-apps-layout">
          <div class="dp-apps-sidebar">
            <div class="dp-platform-toggle">
              <span class="dp-plat-btn active" title="Windows"><i class="fab fa-windows"></i></span>
              <span class="dp-plat-btn" title="Linux"><i class="fab fa-linux"></i></span>
            </div>
            ${requestedFilterHtml}
          </div>
          <div class="dp-apps-main">
            <div class="alert-banner info" style="border-radius:0;margin:0;border-bottom:1px solid #c8dafe">
              <i class="fab fa-windows" style="color:#1a73e8"></i>
              <i class="fab fa-linux" style="color:#1a73e8;margin-left:4px"></i>
              <span>Application access request is currently available for Windows and Linux.</span>
            </div>
            <div class="dp-content-toolbar" style="border-bottom:1px solid #e8e8e8">
              <button class="btn btn-sm" id="dpRequestedAddBtn" disabled><i class="fa fa-plus"></i> Add</button>
              <button class="btn btn-sm" id="dpRequestedMoveBtn" onclick="ecOpenMoveToAppGroupModal('requested')" disabled><i class="fa fa-arrow-up-from-bracket"></i> Move to existing App group</button>
              <button class="btn btn-sm" id="dpRequestedRejectBtn" disabled><i class="fa fa-ban"></i> Reject</button>
              <span class="filter-label" style="margin-left:12px">Filter By :</span>
              <select><option>Publisher Credib...</option><option>Verified Publisher</option><option>Unverified Publisher</option></select>
              <div class="toolbar-right" style="margin-left:auto">
                <span class="total-records"><a href="#" style="color:#1a73e8">Total Records</a></span>
                <span class="icon-btn"><i class="fa fa-search"></i></span>
                <span class="icon-btn"><i class="fa fa-columns"></i></span>
                <span class="icon-btn"><i class="fa fa-download"></i></span>
              </div>
            </div>
            <div class="table-wrap">
              <table class="data-table">
                <thead><tr>
                  <th style="width:32px"><input type="checkbox" onclick="document.querySelectorAll('.dp-requested-cb').forEach(c=>{c.checked=this.checked});ecUpdateDpRequestedSelection()" /></th>
                  <th>Product Name <i class="fa fa-sort sort-icon"></i></th>
                  <th>Vendor Name</th>
                  <th>Publisher Credibility</th>
                  <th>Request(s) raised</th>
                </tr></thead>
                <tbody>${requestedRows}</tbody>
              </table>
            </div>
            <div class="table-pagination">
              <span>1 - ${data.requestedApps.length} of <a href="#" style="color:#1a73e8">Total Records</a></span>
              <select><option>25</option></select>
              <span class="page-btn">&lt;</span>
              <span class="page-btn">&gt;</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab: Unmanaged Apps for Elevation -->
      <div class="dp-tab-content" id="dp-tab-ue" style="display:none">
        <div class="dp-apps-layout">
          <div class="dp-apps-sidebar">
            <div class="dp-platform-toggle">
              <span class="dp-plat-btn active" title="Windows"><i class="fab fa-windows"></i></span>
            </div>
            ${ueFilterHtml}
          </div>
          <div class="dp-apps-main">
            <!-- Product view (default) -->
            <div id="ue-product-view">
              <div class="dp-content-toolbar" style="border-bottom:1px solid #e8e8e8">
                <button class="btn btn-sm" id="dpUeMoveEpmBtn" onclick="ecOpenMoveToEpmPolicyModal()" disabled><i class="fa fa-arrow-up-from-bracket"></i> Move to existing EPM policy</button>
                <span class="filter-label" style="margin-left:12px">Filter By :</span>
                <select><option>Publisher Credib...</option><option>Verified Publisher</option><option>Unverified Publisher</option></select>
                <div class="toolbar-right" style="margin-left:auto">
                  <span class="total-records"><a href="#" style="color:#1a73e8">Total Records</a></span>
                  <span class="icon-btn"><i class="fa fa-search"></i></span>
                  <span class="icon-btn"><i class="fa fa-columns"></i></span>
                  <span class="icon-btn"><i class="fa fa-download"></i></span>
                </div>
              </div>
              <div class="table-wrap">
                <table class="data-table">
                  <thead><tr>
                    <th style="width:32px"><input type="checkbox" onclick="document.querySelectorAll('.dp-ue-cb').forEach(c=>{c.checked=this.checked});ecUpdateDpUeSelection()" /></th>
                    <th>Product Name</th>
                    <th>Vendor Name</th>
                    <th>Publisher Credibility</th>
                    <th>Resource Count <i class="fa fa-sort sort-icon"></i></th>
                  </tr></thead>
                  <tbody>${ueRows}</tbody>
                </table>
              </div>
              <div class="table-pagination">
                <span>1 - ${data.unmanagedElevatedApps.length} of <a href="#" style="color:#1a73e8">Total Records</a></span>
                <select><option>25</option></select>
                <span class="page-btn">&lt;</span>
                <span class="page-btn">&gt;</span>
              </div>
            </div>
            <!-- CLSID view -->
            <div id="ue-clsid-view" style="display:none">
              <div class="dp-content-toolbar" style="border-bottom:1px solid #e8e8e8">
                <button class="btn btn-sm" id="dpClsidAddBtn" disabled><i class="fa fa-plus"></i> Add</button>
                <button class="btn btn-sm" id="dpClsidMoveEpmBtn" onclick="ecOpenMoveToEpmPolicyModal()" disabled><i class="fa fa-arrow-up-from-bracket"></i> Move to existing EPM policy</button>
                <div class="toolbar-right" style="margin-left:auto">
                  <span class="total-records"><a href="#" style="color:#1a73e8">Total Records</a></span>
                  <span class="icon-btn"><i class="fa fa-search"></i></span>
                  <span class="icon-btn"><i class="fa fa-columns"></i></span>
                  <span class="icon-btn"><i class="fa fa-download"></i></span>
                </div>
              </div>
              <div style="padding:10px 16px;border-bottom:1px solid #e8e8e8">
                <div style="display:flex;align-items:center;gap:6px;border:1px solid #ccc;border-radius:4px;padding:5px 10px;max-width:300px">
                  <i class="fa fa-search" style="color:#999"></i>
                  <input type="text" placeholder="Search" style="border:none;outline:none;width:100%;font-size:13px" oninput="ecFilterClsidTable(this.value)" />
                </div>
              </div>
              <div class="table-wrap" style="max-height:480px;overflow-y:auto">
                <table class="data-table" id="ueClsidTable">
                  <thead style="position:sticky;top:0;z-index:1"><tr>
                    <th style="width:32px"><input type="checkbox" onclick="document.querySelectorAll('.dp-clsid-cb').forEach(c=>{c.checked=this.checked});ecUpdateDpClsidSelection()" /></th>
                    <th style="color:#1a9cb0">System Component</th>
                    <th>CLSID</th>
                  </tr></thead>
                  <tbody>${clsidRows}</tbody>
                </table>
              </div>
              <div style="text-align:center;padding:16px;border-top:1px solid #e8e8e8">
                <button class="btn-form primary" onclick="alert('Saved!')">Save (<span id="ueClsidCount">${EC_CLSID_DATA.length}</span>)</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab: Elevation Excluded Apps -->
      <div class="dp-tab-content" id="dp-tab-excl" style="display:none">
        <div class="dp-apps-layout">
          <div class="dp-apps-sidebar">
            <div class="dp-platform-toggle">
              <span class="dp-plat-btn active" title="Windows"><i class="fab fa-windows"></i></span>
            </div>
            ${exclFilterHtml}
          </div>
          <div class="dp-apps-main">
            <div class="dp-content-toolbar" style="border-bottom:1px solid #e8e8e8">
              <span class="filter-label">Filter By :</span>
              <select><option>Publisher Credib...</option><option>Verified Publisher</option><option>Unverified Publisher</option></select>
              <div class="toolbar-right" style="margin-left:auto">
                <span class="total-records"><a href="#" style="color:#1a73e8">Total Records</a></span>
                <span class="icon-btn"><i class="fa fa-search"></i></span>
                <span class="icon-btn"><i class="fa fa-columns"></i></span>
                <span class="icon-btn"><i class="fa fa-download"></i></span>
              </div>
            </div>
            <div class="table-wrap">
              <table class="data-table">
                <thead><tr>
                  <th>Product Name</th>
                  <th>Vendor Name</th>
                  <th>Publisher Credibility</th>
                  <th>EPM Policy Name <i class="fa fa-sort sort-icon"></i></th>
                </tr></thead>
                <tbody>${exclRows}</tbody>
              </table>
            </div>
            <div class="table-pagination">
              <span>1 - ${data.elevationExcludedApps.length} of <a href="#" style="color:#1a73e8">Total Records</a></span>
              <select><option>25</option></select>
              <span class="page-btn">&lt;</span>
              <span class="page-btn">&gt;</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab: Elevated Apps -->
      <div class="dp-tab-content" id="dp-tab-elevated" style="display:none">
        <div class="dp-apps-layout">
          <div class="dp-apps-sidebar">
            <div class="dp-platform-toggle">
              <span class="dp-plat-btn active" title="Windows"><i class="fab fa-windows"></i></span>
            </div>
            ${elevFilterHtml}
          </div>
          <div class="dp-apps-main">
            <div class="dp-content-toolbar" style="border-bottom:1px solid #e8e8e8">
              <span class="filter-label">Filter By :</span>
              <select><option>Elevation Decision</option><option>Approved</option><option>Pending</option><option>Denied</option></select>
              <select><option>Publisher Credib...</option><option>Verified Publisher</option><option>Unverified Publisher</option></select>
              <div class="toolbar-right" style="margin-left:auto">
                <span class="total-records"><a href="#" style="color:#1a73e8">Total Records</a></span>
                <span class="icon-btn"><i class="fa fa-search"></i></span>
                <span class="icon-btn"><i class="fa fa-columns"></i></span>
                <span class="icon-btn"><i class="fa fa-download"></i></span>
              </div>
            </div>
            <div class="table-wrap">
              <table class="data-table">
                <thead><tr>
                  <th>Product Name</th>
                  <th>Vendor Name</th>
                  <th>Publisher Credibility</th>
                  <th>Elevated By (User)</th>
                  <th>Elevation Decision</th>
                  <th>EPM Policy Name <i class="fa fa-sort sort-icon"></i></th>
                </tr></thead>
                <tbody>${elevRows}</tbody>
              </table>
            </div>
            <div class="table-pagination">
              <span>1 - ${data.elevatedApps.length} of <a href="#" style="color:#1a73e8">Total Records</a></span>
              <select><option>25</option></select>
              <span class="page-btn">&lt;</span>
              <span class="page-btn">&gt;</span>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>`;
  content.scrollTop = 0;
}

/* Switch deploy policy summary tabs */
function ecSwitchDpTab(tab, panelId) {
  tab.parentElement.querySelectorAll('.dp-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  document.querySelectorAll('.dp-tab-content').forEach(p => p.style.display = 'none');
  document.getElementById(panelId).style.display = '';
}

/* Switch filter tabs inside deploy policy summary */
function ecSwitchDpFilterTab(tab) {
  tab.parentElement.querySelectorAll('.ag-filter-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
}

/* Enable/disable action buttons based on checkbox selection */
function ecUpdateDpUnmanagedSelection() {
  const checked = document.querySelectorAll('.dp-unmanaged-cb:checked').length;
  const addBtn = document.getElementById('dpUnmanagedAddBtn');
  const moveBtn = document.getElementById('dpUnmanagedMoveBtn');
  if (addBtn) addBtn.disabled = checked === 0;
  if (moveBtn) moveBtn.disabled = checked === 0;
}

function ecUpdateDpRequestedSelection() {
  const checked = document.querySelectorAll('.dp-requested-cb:checked').length;
  const addBtn = document.getElementById('dpRequestedAddBtn');
  const moveBtn = document.getElementById('dpRequestedMoveBtn');
  const rejectBtn = document.getElementById('dpRequestedRejectBtn');
  if (addBtn) addBtn.disabled = checked === 0;
  if (moveBtn) moveBtn.disabled = checked === 0;
  if (rejectBtn) rejectBtn.disabled = checked === 0;
}

/* Unmanaged Apps for Elevation — selection update */
function ecUpdateDpUeSelection() {
  const checked = document.querySelectorAll('.dp-ue-cb:checked').length;
  const moveBtn = document.getElementById('dpUeMoveEpmBtn');
  if (moveBtn) moveBtn.disabled = checked === 0;
}

function ecUpdateDpClsidSelection() {
  const checked = document.querySelectorAll('.dp-clsid-cb:checked').length;
  const addBtn = document.getElementById('dpClsidAddBtn');
  const moveBtn = document.getElementById('dpClsidMoveEpmBtn');
  if (addBtn) addBtn.disabled = checked === 0;
  if (moveBtn) moveBtn.disabled = checked === 0;
}

/* Unmanaged Apps for Elevation — filter tab switch (handles CLSID vs product views) */
function ecSwitchUeFilterTab(tab, tabName) {
  tab.parentElement.querySelectorAll('.ag-filter-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  const prodView = document.getElementById('ue-product-view');
  const clsidView = document.getElementById('ue-clsid-view');
  if (prodView && clsidView) {
    if (tabName === 'CLSID') {
      prodView.style.display = 'none';
      clsidView.style.display = '';
    } else {
      prodView.style.display = '';
      clsidView.style.display = 'none';
    }
  }
}

/* CLSID table search filter */
function ecFilterClsidTable(query) {
  const lower = query.toLowerCase();
  const table = document.getElementById('ueClsidTable');
  if (!table) return;
  table.querySelectorAll('tbody tr').forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(lower) ? '' : 'none';
  });
}

/* Move to existing EPM Policy modal */
function ecOpenMoveToEpmPolicyModal() {
  const epmPolicies = ['Windows EPM Policy', 'Developer EPM Policy', 'Support EPM Policy'];
  const overlay = document.createElement('div');
  overlay.className = 'la-modal-overlay';
  overlay.innerHTML = `
    <div class="la-modal" style="width:650px">
      <div class="la-modal-header">
        <h3>Move to existing EPM Policy</h3>
        <button class="la-modal-close" onclick="this.closest('.la-modal-overlay').remove()">&times;</button>
      </div>
      <div class="la-modal-body" style="padding:24px 28px">
        <div class="form-row" style="margin-bottom:16px">
          <span class="form-label">Select EPM Policy <span class="req">*</span></span>
          <div class="form-control-group">
            <select class="form-input" id="dpMoveEpmSelect" style="width:320px">
              ${epmPolicies.map(p => '<option>' + p + '</option>').join('')}
            </select>
          </div>
        </div>
        <div class="form-row">
          <label style="display:flex;align-items:center;gap:8px;font-size:13px;color:#555;cursor:pointer">
            <input type="checkbox" id="dpMoveEpmDefault" />
            Add to default Deployment&rsquo;s EPM policy
          </label>
        </div>
      </div>
      <div class="la-modal-footer" style="padding:12px 28px;border-top:1px solid #e0e0e0;text-align:right">
        <button class="btn-form primary" onclick="this.closest('.la-modal-overlay').remove()">Move</button>
        <button class="btn-form" onclick="this.closest('.la-modal-overlay').remove()">Cancel</button>
      </div>
    </div>`;
  overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
}

/* Move to existing App Group modal */
function ecOpenMoveToAppGroupModal(source) {
  const appGroups = {
    Allowlist: ['Allowed apps', 'Allowed Store Apps', 'Allowed Linux apps'],
    Blocklist: ['Block E Drive', 'Block firefox', 'Blocked Apps', 'Blocked Linux apps', 'Screening Application Group']
  };

  const overlay = document.createElement('div');
  overlay.className = 'la-modal-overlay';
  overlay.innerHTML = `
    <div class="la-modal" style="width:650px">
      <div class="la-modal-header">
        <h3>Move to existing Application Group</h3>
        <button class="la-modal-close" onclick="this.closest('.la-modal-overlay').remove()">&times;</button>
      </div>
      <div class="la-modal-body" style="padding:24px 28px">
        <div class="form-row" style="margin-bottom:16px">
          <span class="form-label">Application Group Type <span class="req">*</span></span>
          <div class="form-control-group">
            <select class="form-input" id="dpMoveGroupType" onchange="ecUpdateMoveGroupOptions()" style="width:280px">
              <option value="Allowlist">Allowlist</option>
              <option value="Blocklist">Blocklist</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <span class="form-label">Select the Application Group <span class="req">*</span></span>
          <div class="form-control-group">
            <select class="form-input" id="dpMoveGroupSelect" style="width:280px">
              ${appGroups.Allowlist.map(g => '<option>' + g + '</option>').join('')}
            </select>
          </div>
        </div>
      </div>
      <div class="la-modal-footer" style="padding:12px 28px;border-top:1px solid #e0e0e0;text-align:right">
        <button class="btn-form primary" onclick="this.closest('.la-modal-overlay').remove()">Move</button>
        <button class="btn-form" onclick="this.closest('.la-modal-overlay').remove()">Cancel</button>
      </div>
    </div>`;
  overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
}

/* Update group options based on type in the Move modal */
function ecUpdateMoveGroupOptions() {
  const type = document.getElementById('dpMoveGroupType').value;
  const select = document.getElementById('dpMoveGroupSelect');
  const appGroups = {
    Allowlist: ['Allowed apps', 'Allowed Store Apps', 'Allowed Linux apps'],
    Blocklist: ['Block E Drive', 'Block firefox', 'Blocked Apps', 'Blocked Linux apps', 'Screening Application Group']
  };
  select.innerHTML = (appGroups[type] || []).map(g => '<option>' + g + '</option>').join('');
}

/* ================================================================
 *  APPLICATION CONTROL POLICIES — combined view
 * ================================================================ */

function ecAcpAllPoliciesPage() {
  const groups = [
    { name: 'All Computers Group', category: 'All', appGroups: 8, computers: 161, flexibility: 'strict', flexLabel: 'Strict Mode', deployPct: 1, deployFill: 'gray', requested: 0 },
    { name: 'Developer group', category: 'Static Unique Group', appGroups: 8, computers: 1, flexibility: 'audit', flexLabel: 'Audit Mode', deployPct: 100, deployFill: 'green', requested: 1 },
    { name: 'Engineering group', category: 'Static Computer Group', appGroups: 5, computers: 0, flexibility: 'strict', flexLabel: 'Strict Mode', deployPct: 0, deployFill: 'gray', requested: 0 },
    { name: 'Marketing Group', category: 'Static Computer Group', appGroups: 7, computers: 5, flexibility: 'audit', flexLabel: 'Audit Mode', deployPct: 20, deployFill: 'red', requested: 1 },
    { name: 'Remote Branch', category: 'Static Computer Group', appGroups: 3, computers: 1, flexibility: 'audit', flexLabel: 'Audit Mode', deployPct: 100, deployFill: 'green', requested: 1 },
    { name: 'Support Group', category: 'Static Computer Group', appGroups: 6, computers: 1, flexibility: 'audit', flexLabel: 'Audit Mode', deployPct: 100, deployFill: 'green', requested: 1 },
  ];
  const rows = groups.map(g => {
    const flexIcon = g.flexibility === 'strict'
      ? '<i class="fa fa-circle" style="font-size:6px"></i>'
      : '<i class="fa fa-search" style="font-size:10px"></i>';
    return `<tr>
      <td><a href="#" onclick="ecOpenPolicySummary('${g.name}','','${g.flexLabel}');return false">${g.name}</a></td>
      <td>${g.appGroups}</td><td>${g.computers}</td>
      <td><span class="flex-badge ${g.flexibility}">${flexIcon} ${g.flexLabel}</span></td>
      <td><span class="deploy-bar"><span class="fill ${g.deployFill}" style="width:${g.deployPct}%"></span></span>${g.deployPct}%</td>
      <td><i class="fa fa-link" style="color:#888"></i></td>
      <td><a href="#" style="color:#1a73e8">${g.requested}</a></td>
    </tr>`;
  }).join('');

  return `
    <div class="page-title-bar">
      <i class="fa fa-shield-halved page-icon"></i>
      <h1>Deploy Policy <i class="fa fa-circle-info info-icon"></i></h1>
      <a href="#" class="form-action-link" style="margin-left:auto"><i class="fa fa-video"></i> Watch Demo</a>
    </div>
    <div class="toolbar">
      <button class="btn btn-primary" onclick="ecOpenCreatePolicy('windows','Associate Policy','ac-policies')"><i class="fa fa-plus"></i> Associate Group</button>
      <div class="filter-group"><span class="filter-label">Filter By :</span>
        <select><option>Flexibility</option></select>
        <select><option>All</option></select>
      </div>
      <div class="toolbar-right">
        <span class="total-records"><a href="#" style="color:#1a73e8">Total Records</a></span>
        <span class="icon-btn"><i class="fa fa-search"></i></span>
        <span class="icon-btn"><i class="fa fa-columns"></i></span>
        <span class="icon-btn"><i class="fa fa-download"></i></span>
      </div>
    </div>
    <div class="table-wrap">
      <table class="data-table">
        <thead><tr>
          <th>Custom Group Name <i class="fa fa-sort sort-icon"></i></th>
          <th>Associated Application Group(s)</th><th>Computer Count</th><th>Flexibility</th><th>Deployment Status</th><th>Action</th><th>Requested Apps</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    <div class="table-pagination">
      <span>1 - ${groups.length} of <a href="#" style="color:#1a73e8">Total Records</a></span>
      <select><option>25</option></select>
      <span class="page-btn">&lt;</span>
      <span class="page-btn">&gt;</span>
    </div>
    ${ecQuickLinks('ac-policies')}`;
}

EC_PAGES['ac-policies'] = ecAcpAllPoliciesPage;

/* ================================================================
 *  ENDPOINT PRIVILEGE MANAGEMENT — combined view
 * ================================================================ */

function ecEpmAllPoliciesPage() {
  const epmPolicies = [
    { name: 'Windows EPM Policy', platform: 'windows', platformLabel: 'Windows', platformIcon: 'fab fa-windows', elevation: 'Specific Apps', autoElevate: 'Yes', vendors: 2, products: 2, created: 'Oct 7, 2024 02:4...', modified: 'Oct 7, 20...' },
    { name: 'Linux EPM Policy', platform: 'linux', platformLabel: 'Linux', platformIcon: 'fab fa-linux', elevation: 'Not Configured', autoElevate: 'No', vendors: 0, products: 0, created: 'Mar 14, 2026 02:4...', modified: 'Mar 16, 20...' },
    { name: 'Mac EPM Policy', platform: 'mac', platformLabel: 'Mac', platformIcon: 'fab fa-apple', elevation: 'Not Configured', autoElevate: 'No', vendors: 0, products: 0, created: 'Mar 15, 2026 10:0...', modified: 'Mar 17, 20...' },
  ];
  const rows = epmPolicies.map(p => `<tr>
    <td><a href="#" onclick="ecOpenCreateEpmPolicy('${p.platform}');return false">${p.name}</a></td>
    <td><i class="${p.platformIcon} os-icon"></i>${p.platformLabel}</td>
    <td>${p.elevation}</td>
    <td>${p.autoElevate}</td>
    <td>${p.vendors}</td><td>${p.products}</td>
    <td>${p.created}</td><td>${p.modified}</td>
    <td><i class="fa fa-ellipsis"></i></td>
  </tr>`).join('');

  return `
    <div class="page-title-bar">
      <i class="fa fa-user-shield page-icon"></i>
      <h1>Endpoint Privilege Management Policies</h1>
    </div>
    <div class="toolbar">
      <div class="btn-dropdown-wrap">
        <button class="btn btn-primary" onclick="this.parentElement.classList.toggle('open')"><i class="fa fa-plus"></i> Create Policy <i class="fa fa-caret-down" style="font-size:10px"></i></button>
        <div class="btn-dropdown-menu">
          <a href="#" onclick="ecOpenCreateEpmPolicy('windows');return false"><i class="fab fa-windows"></i> Windows</a>
        </div>
      </div>
      <div class="filter-group"><span class="filter-label">Filter By :</span>
        <select><option>Platform</option><option>Windows</option><option>Mac</option><option>Linux</option></select>
      </div>
      <div class="toolbar-right">
        <span class="total-records">Total Records</span>
        <span class="icon-btn"><i class="fa fa-search"></i></span>
        <span class="icon-btn"><i class="fa fa-columns"></i></span>
        <span class="icon-btn"><i class="fa fa-download"></i></span>
      </div>
    </div>
    <div class="table-wrap">
      <table class="data-table">
        <thead><tr>
          <th>Policy Name <i class="fa fa-sort sort-icon"></i></th>
          <th>Platform</th><th>Elevation</th><th>Auto Elevate</th><th>Vendors</th><th>Products</th><th>Created Time</th><th>Last Modified</th><th>Action</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    <div class="table-pagination">
      <span>1 - ${epmPolicies.length} of <a href="#" style="color:#1a73e8">Total Records</a></span>
      <select><option>25</option></select>
      <span class="page-btn">&lt;</span>
      <span class="page-btn">&gt;</span>
    </div>
    <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>`;
}

EC_PAGES['epm-policies'] = ecEpmAllPoliciesPage;

/** Open Create / Edit EPM Policy form */
function ecOpenCreateEpmPolicy(platform) {
  document.querySelectorAll('.btn-dropdown-wrap.open').forEach(e => e.classList.remove('open'));
  const content = document.getElementById('pageContent');
  if (!content) return;

  const platformLabels = { windows: 'Windows', mac: 'Mac', linux: 'Linux' };
  const platformIcons = { windows: 'fab fa-windows', mac: 'fab fa-apple', linux: 'fab fa-linux' };
  const pLabel = platformLabels[platform] || platform;
  const pIcon = platformIcons[platform] || 'fab fa-windows';

  content.innerHTML = `
    <div class="form-page">
      <!-- Header -->
      <div class="form-page-header" style="align-items:flex-start;gap:16px">
        <a href="#" class="back-arrow" onclick="ecShowSubReport('epm-policies');return false"><i class="fa fa-arrow-left"></i></a>
        <div style="display:flex;align-items:center;gap:16px;flex:1">
          <div style="width:56px;height:56px;border-radius:12px;background:#f0f4ff;display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <i class="fa fa-shield-halved" style="font-size:24px;color:#5f6368"></i>
          </div>
          <div>
            <h1 style="margin:0;font-size:17px;font-weight:600;color:#333">Privileged Application List</h1>
            <div style="font-size:13px;color:#555;margin-top:4px">Control usage of local admin accounts by allowing standard users to self-elevate their privileges to specific applications.</div>
          </div>
        </div>
        <span class="tip-link" style="margin-left:auto;white-space:nowrap"><i class="fa fa-lightbulb"></i> Have suggestions to enhance privilege management?</span>
      </div>

      <!-- Policy Name -->
      <div class="form-section" style="margin-top:24px">
        <div class="form-row">
          <span class="form-label">Policy Name <span class="req">*</span></span>
          <div class="form-control-group">
            <input type="text" class="form-input" placeholder="Enter a policy name" style="width:400px" />
          </div>
        </div>
      </div>

      <!-- Step 1: Define scope -->
      <div class="epm-step">
        <div class="epm-step-header" id="epm-step1-hdr">
          <div style="flex:1">
            <div class="epm-step-title">Define the scope of applications permitted for privilege elevation</div>
            <div class="epm-step-desc">Applications within this scope will be elevated without requiring administrator approval. All elevation events are recorded in the audit trail irrespective of the scope selection.</div>
          </div>
          <div class="epm-step-toggle">
            <label class="cp-toggle"><input type="checkbox" id="epm-step1-cb" checked onchange="ecToggleEpmStep(1,this.checked)" /><span class="cp-toggle-slider"></span></label>
          </div>
        </div>
        <div class="epm-step-body" id="epm-step1-body">
          <label class="epm-radio-card selected" onclick="ecSelectRadioCard(this,'epm-scope')">
            <input type="radio" name="epm-scope" value="specific-policy" checked />
            <div>
              <div class="epm-radio-card-title">Specific applications defined by policy <span class="epm-badge recommended">Recommended</span></div>
              <div class="epm-radio-card-desc">Elevation is restricted to a manually curated list of applications. Each entry may be identified by file hash, product name, publisher, or installation path. Provides the highest degree of control over which executables may acquire elevated privileges.</div>
            </div>
          </label>
          <!-- Specific applications panel -->
          <div class="epm-scope-panel" id="epm-scope-specific-policy">
            <div class="epm-apps-panel" style="margin:0">
              <div class="epm-apps-title" style="display:flex;align-items:center;justify-content:space-between">Specific applications selected <label style="font-weight:400;font-size:12px;display:flex;align-items:center;gap:6px;cursor:pointer"><input type="checkbox" checked style="accent-color:#1a73e8" /> Auto Elevation <i class="fa fa-circle-question" style="color:#999;font-size:11px"></i></label></div>
              <div class="epm-apps-section">
                <div class="epm-apps-label">Vendor (2)</div>
                <div class="epm-chip-list">
                  <span class="epm-chip">Google Inc</span>
                  <span class="epm-chip">Google LLC</span>
                </div>
              </div>
              <div class="epm-apps-section">
                <div class="epm-apps-label">Products (9)</div>
                <div class="epm-chip-list">
                  <span class="epm-chip">7-Zip</span>
                  <span class="epm-chip">PostgreSQL</span>
                  <span class="epm-chip">Docker Engine</span>
                  <span class="epm-chip">DockerCli</span>
                  <span class="epm-chip">Git</span>
                  <span class="epm-chip">OpenJDK Platform 8</span>
                  <span class="epm-chip">Microsoft SQL Server</span>
                  <span class="epm-chip">Microsoft&reg; Visual Studio&reg; 2017</span>
                  <span class="epm-chip">Notepad++</span>
                </div>
              </div>
              <div class="epm-apps-section">
                <div class="epm-apps-label">Verified Executable (4)</div>
                <div class="epm-chip-list">
                  <span class="epm-chip">jabswitch.exe</span>
                  <span class="epm-chip">DocumentCollector.exe</span>
                  <span class="epm-chip">zendwin32.exe</span>
                  <span class="epm-chip">PrintUtil.exe</span>
                </div>
              </div>
              <div class="epm-apps-section">
                <div class="epm-apps-label">File Hash (4)</div>
                <div class="epm-chip-list">
                  <span class="epm-chip">7za.exe</span>
                  <span class="epm-chip">Dell.TechHub.Instrumentation.SubAgent.exe</span>
                  <span class="epm-chip">createdump.exe</span>
                  <span class="epm-chip">createdump.exe</span>
                </div>
              </div>
              <div class="epm-apps-section">
                <div class="epm-apps-label">Folder Path (1)</div>
                <div class="epm-chip-list">
                  <span class="epm-chip">C:\\Program Files\\Custom</span>
                </div>
              </div>
              <div style="text-align:center;padding:12px 0 4px">
                <button class="btn-form">Modify</button>
              </div>
            </div>
          </div>
          <label class="epm-radio-card" onclick="ecSelectRadioCard(this,'epm-scope')">
            <input type="radio" name="epm-scope" value="all-approved" />
            <div>
              <div class="epm-radio-card-title">All applications approved in Application Control</div>
              <div class="epm-radio-card-desc">Elevation is permitted for every application present in the Application Control allowlist. This selection maintains consistency between the application access policy and the privilege elevation policy without requiring additional configuration.</div>
            </div>
          </label>
          <!-- Exclusion list for All Approved -->
          <div class="epm-scope-panel" id="epm-scope-all-approved" style="display:none">
            <div class="epm-apps-panel" style="margin:0">
              <div class="epm-apps-title">Excluded applications <span style="font-weight:400;color:#666;font-size:12px">(These will NOT be elevated even though they are in the allowlist)</span></div>
              <div class="epm-apps-section">
                <div class="epm-apps-label">Vendor (1)</div>
                <div class="epm-chip-list">
                  <span class="epm-chip">Unknown Publisher</span>
                </div>
              </div>
              <div class="epm-apps-section">
                <div class="epm-apps-label">Products (2)</div>
                <div class="epm-chip-list">
                  <span class="epm-chip">AutoHotkey</span>
                  <span class="epm-chip">WinRAR archiver</span>
                </div>
              </div>
              <div class="epm-apps-section">
                <div class="epm-apps-label">Verified Executable (1)</div>
                <div class="epm-chip-list">
                  <span class="epm-chip">powershell_ise.exe</span>
                </div>
              </div>
              <div style="text-align:center;padding:12px 0 4px">
                <button class="btn-form">Modify</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 2: Elevation behavior outside scope -->
      <div class="epm-step">
        <div class="epm-step-header" id="epm-step2-hdr">
          <div style="flex:1">
            <div class="epm-step-title">Configure the elevation behavior for applications outside the defined scope</div>
            <div class="epm-step-desc">This setting governs how the system responds when an end user attempts to execute an application with elevated privileges and that application is not covered by the scope defined above.</div>
          </div>
          <div class="epm-step-toggle">
            <label class="cp-toggle"><input type="checkbox" id="epm-step2-cb" checked onchange="ecToggleEpmStep(2,this.checked)" /><span class="cp-toggle-slider"></span></label>
          </div>
        </div>
        <div class="epm-step-body" id="epm-step2-body">
          <label class="epm-radio-card" onclick="ecSelectRadioCard(this,'epm-outside')">
            <input type="radio" name="epm-outside" value="approval" />
            <div>
              <div class="epm-radio-card-title">Require administrator approval via a formal elevation request <span class="epm-badge recommended">Recommended</span></div>
              <div class="epm-radio-card-desc">The end user submits a formal elevation request specifying a justification and a requested access duration. The request is routed to a designated technician or administrator for review. Elevation is granted only upon explicit approval and is automatically revoked upon expiry of the approved duration. All request, approval, and revocation events are recorded in the audit trail.</div>
            </div>
          </label>
          <label class="epm-radio-card selected" onclick="ecSelectRadioCard(this,'epm-outside')">
            <input type="radio" name="epm-outside" value="justification" checked />
            <div>
              <div class="epm-radio-card-title">Permit elevation upon submission of a business justification <span class="epm-badge self-service">Self-service</span></div>
              <div class="epm-radio-card-desc">The end user is prompted to enter a justification before elevation proceeds. No administrator approval is required &mdash; elevation is granted immediately upon a valid submission. The justification and the identity of the requesting user are recorded in the audit trail. Suited to environments where end users are trusted but a verifiable accountability record is required.</div>
            </div>
          </label>
        </div>
      </div>

      <!-- Enable Automatic Local Admin Removal -->
      <div class="epm-step">
        <div class="epm-step-header" id="epm-step3-hdr">
          <div style="flex:1">
            <div class="epm-step-title">Enable Automatic Local Admin Privilege Removal</div>
            <div class="epm-step-desc" style="color:#1a73e8">Demotes accounts in the local Administrators group to standard users. No accounts are deleted.</div>
          </div>
          <div class="epm-step-toggle">
            <label class="cp-toggle"><input type="checkbox" id="epm-auto-remove-cb" onchange="ecToggleEpmStep(3,this.checked)" /><span class="cp-toggle-slider"></span></label>
          </div>
        </div>
        <div class="epm-step-body hidden" id="epm-step3-body">

          <!-- Include domain users checkbox -->
          <div style="padding:8px 0 12px">
            <label style="display:flex;align-items:center;gap:8px;font-size:13px;color:#333;cursor:pointer">
              <input type="checkbox" style="accent-color:#1a73e8;width:16px;height:16px" />
              Include domain users in the local administrators group for privilege removal
            </label>
          </div>

          <!-- Retained accounts -->
          <div style="padding:4px 0">
            <div class="form-row" style="padding:0">
              <span class="form-label" style="color:#d32f2f">Select Admin Account(s) to be retained :</span>
              <div class="form-control-group" style="gap:8px;flex:1">
                <div class="ptag-input-wrap" style="min-width:400px;min-height:60px;align-items:flex-start;padding:10px">
                  <div class="ptag-tags" id="epm-admin-tags">
                    <span class="ptag" data-name="sysadmin"><span class="ptag-text">sysadmin <span style="color:#888;font-size:10px">(local)</span></span><span class="ptag-remove" onclick="this.parentElement.remove()">&times;</span></span>
                    <span class="ptag" data-name="domainname/emsadmin"><span class="ptag-text">domainname/emsadmin <span style="color:#888;font-size:10px">(domain)</span></span><span class="ptag-remove" onclick="this.parentElement.remove()">&times;</span></span>
                    <span class="ptag" data-name="Administrator"><span class="ptag-text">Administrator <span style="color:#888;font-size:10px">(local)</span></span><span class="ptag-remove" onclick="this.parentElement.remove()">&times;</span></span>
                  </div>
                </div>
                <button class="btn-form" style="padding:8px 16px" onclick="ecOpenBrowseAdminUsers()">Browse</button>
              </div>
            </div>
          </div>
          </div>

        </div>
      </div>

      <div class="form-actions">
        <button class="btn-form primary">Save list</button>
        <button class="btn-form" onclick="ecShowSubReport('epm-policies')">Cancel</button>
      </div>
      <div class="restricted-warning"><i class="fa fa-exclamation-circle"></i> [ Running in restricted mode. ]</div>
      <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>
    </div>`;
  content.scrollTop = 0;
}

/* Toggle EPM step section on/off */
function ecToggleEpmStep(step, on) {
  const hdr = document.getElementById('epm-step' + step + '-hdr');
  const body = document.getElementById('epm-step' + step + '-body');
  if (hdr) hdr.classList.toggle('off', !on);
  if (body) body.classList.toggle('hidden', !on);
}

/* Select a radio card & show matching sub-panel */
function ecSelectRadioCard(card, groupName) {
  const parent = card.closest('.epm-step-body');
  if (!parent) return;
  parent.querySelectorAll('.epm-radio-card').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
  const radio = card.querySelector('input[type="radio"]');
  if (radio) radio.checked = true;
  if (groupName) {
    parent.querySelectorAll('.epm-scope-panel').forEach(p => p.style.display = 'none');
    const panel = document.getElementById('epm-scope-' + radio.value);
    if (panel) panel.style.display = '';
  }
}

/* Toggle Action menu (ellipsis dropdown) */
function ecToggleActionMenu(icon) {
  const menu = icon.closest('.ec-action-menu');
  document.querySelectorAll('.ec-action-menu.open').forEach(el => { if (el !== menu) el.classList.remove('open'); });
  menu.classList.toggle('open');
  event.stopPropagation();
}

/* Switch Admin Rights Summary tabs */
function ecSwitchArsView(view, btn) {
  document.getElementById('ars-view-device').style.display = view === 'device' ? '' : 'none';
  document.getElementById('ars-view-user').style.display = view === 'user' ? '' : 'none';
  const select = document.getElementById('arsViewSelect');
  if (select) select.value = view;
  if (btn) {
    document.querySelectorAll('.ars-view-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  } else {
    const btns = document.querySelectorAll('.ars-view-btn');
    btns.forEach(b => b.classList.remove('active'));
    btns[view === 'device' ? 0 : 1].classList.add('active');
  }
}

/* Switch device view sub-tabs (By Computer / By User) */
function ecSwitchArsDeviceTab(tabId, btn) {
  document.getElementById('dev-by-computer').style.display = tabId === 'dev-by-computer' ? '' : 'none';
  document.getElementById('dev-by-user').style.display = tabId === 'dev-by-user' ? '' : 'none';
  btn.parentElement.querySelectorAll('.ars-sub-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
}

/* Move Standard User — demote selected users to standard */
function ecRemoveAdminPrivilege() {
  const checked = document.querySelectorAll('#ars-view-user .ars-cb:checked');
  if (!checked.length) { alert('Please select at least one admin user to move to standard user.'); return; }
  const names = Array.from(checked).map(cb => {
    const row = cb.closest('tr');
    return row.children[1].textContent + ' (' + row.children[2].textContent + ')';
  });
  if (confirm('Move the following users to standard user?\\n\\n' + names.join('\\n') + '\\n\\nThey will be demoted to standard users.')) {
    checked.forEach(cb => cb.closest('tr').remove());
  }
}

/* Toggle Advanced Filter panel in Admin Rights Summary */
function ecToggleArsAdvancedFilter() {
  const panel = document.getElementById('arsAdvancedFilter');
  if (panel) panel.style.display = panel.style.display === 'none' ? '' : 'none';
}

const EC_LOCAL_ADMINS = {
  'EC2AMAZ-DS25S0F': [{ name: 'test', logon: 'Apr 1, 2026' }, { name: 'user', logon: 'Mar 28, 2026' }],
  'ues-w10-cloud1':  [{ name: 'test', logon: 'Apr 2, 2026' }, { name: 'user', logon: 'Mar 30, 2026' }, { name: 'admin', logon: 'Apr 3, 2026' }],
  'uesqa-w10-2':     [{ name: 'test', logon: 'Mar 25, 2026' }],
  'linux-build-srv1': [{ name: 'root', logon: 'Apr 2, 2026' }, { name: 'admin', logon: 'Apr 1, 2026' }]
};

const EC_USER_COMPUTERS = {
  'test':  [{ name: 'EC2AMAZ-DS25S0F', logon: 'Apr 1, 2026' }, { name: 'ues-w10-cloud1', logon: 'Apr 2, 2026' }, { name: 'uesqa-w10-2', logon: 'Mar 25, 2026' }],
  'user':  [{ name: 'EC2AMAZ-DS25S0F', logon: 'Mar 28, 2026' }, { name: 'ues-w10-cloud1', logon: 'Mar 30, 2026' }],
  'admin': [{ name: 'ues-w10-cloud1', logon: 'Apr 3, 2026' }, { name: 'linux-build-srv1', logon: 'Apr 1, 2026' }],
  'root':  [{ name: 'linux-build-srv1', logon: 'Apr 2, 2026' }]
};

function ecShowLocalAdmins(computer) {
  const users = EC_LOCAL_ADMINS[computer] || [];
  const rows = users.map(u => '<tr><td>' + u.name + '</td><td>' + u.logon + '</td></tr>').join('');
  const overlay = document.createElement('div');
  overlay.className = 'la-modal-overlay';
  overlay.innerHTML =
    '<div class="la-modal">' +
      '<div class="la-modal-header"><h3>Local Admin Users</h3>' +
        '<button class="la-modal-close" onclick="this.closest(\'.la-modal-overlay\').remove()">&times;</button></div>' +
      '<div class="la-modal-body">' +
        '<div class="la-modal-info"><i class="fa fa-circle-info"></i> Local Admin Accounts retained in the Exclusion Policy will not be displayed here.</div>' +
        '<table><thead><tr><th>User Name</th><th>Last Logon</th></tr></thead><tbody>' + rows + '</tbody></table>' +
      '</div>' +
    '</div>';
  overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
}

function ecShowUserComputers(userName) {
  const computers = EC_USER_COMPUTERS[userName] || [];
  const rows = computers.map(c => '<tr><td>' + c.name + '</td><td>' + c.logon + '</td></tr>').join('');
  const overlay = document.createElement('div');
  overlay.className = 'la-modal-overlay';
  overlay.innerHTML =
    '<div class="la-modal">' +
      '<div class="la-modal-header"><h3>Computers for \'' + userName + '\'</h3>' +
        '<button class="la-modal-close" onclick="this.closest(\'.la-modal-overlay\').remove()">&times;</button></div>' +
      '<div class="la-modal-body">' +
        '<table><thead><tr><th>Computer Name</th><th>Last Logon</th></tr></thead><tbody>' + rows + '</tbody></table>' +
      '</div>' +
    '</div>';
  overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
}

/* Browse Admin Users modal — selectable table for retained accounts */
function ecOpenBrowseAdminUsers() {
  const users = [
    { name: 'test', domain: 'WORKGROUP', type: 'Local', count: 3 },
    { name: 'user', domain: 'WORKGROUP', type: 'Local', count: 2 },
    { name: 'admin', domain: 'WORKGROUP', type: 'Local', count: 2 },
    { name: 'emsadmin', domain: 'domainname', type: 'Domain', count: 2 },
    { name: 'root', domain: 'WORKGROUP', type: 'Local', count: 1 },
    { name: 'sysadmin', domain: 'WORKGROUP', type: 'Local', count: 1 },
    { name: 'Administrator', domain: 'WORKGROUP', type: 'Local', count: 1 },
    { name: 'dbadmin', domain: 'domainname', type: 'Domain', count: 1 }
  ];
  const existing = Array.from(document.querySelectorAll('#epm-admin-tags .ptag')).map(t => t.dataset.name);
  const rows = users.map(u => {
    const checked = existing.includes(u.name) || existing.includes(u.domain + '/' + u.name) ? ' checked' : '';
    const key = u.type === 'Domain' ? u.domain + '/' + u.name : u.name;
    return '<tr>' +
      '<td><input type="checkbox" class="ba-cb" data-name="' + key + '" data-label="' + (u.type === 'Domain' ? u.domain + '/' + u.name : u.name) + '" data-type="' + u.type.toLowerCase() + '"' + checked + ' /></td>' +
      '<td>' + u.name + '</td><td>' + u.domain + '</td><td>' + u.type + '</td><td>' + u.count + '</td></tr>';
  }).join('');

  const overlay = document.createElement('div');
  overlay.className = 'la-modal-overlay';
  overlay.innerHTML =
    '<div class="la-modal" style="width:700px;max-width:90vw">' +
      '<div class="la-modal-header"><h3>Select Admin Accounts to Retain</h3>' +
        '<button class="la-modal-close" onclick="this.closest(\'.la-modal-overlay\').remove()">&times;</button></div>' +
      '<div class="la-modal-body">' +
        '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">' +
          '<div class="filter-group" style="gap:6px"><span class="filter-label">CG :</span>' +
            '<select class="filter-select" style="font-size:12px;padding:4px 8px"><option>All Computer Groups</option><option>All Computers Group</option><option>Developer group</option><option>Engineering group</option><option>Marketing Group</option><option>Remote Branch</option><option>Support Group</option></select>' +
          '</div>' +
          '<div style="font-size:11px;color:#888">Sorted by Computer Count (descending)</div>' +
        '</div>' +
        '<div style="max-height:300px;overflow-y:auto">' +
        '<table style="width:100%"><thead><tr>' +
          '<th style="width:30px"><input type="checkbox" onclick="this.closest(\'table\').querySelectorAll(\'.ba-cb\').forEach(c=>c.checked=this.checked)" /></th>' +
          '<th>User Name</th><th>Domain</th><th>User Type</th><th>Computer Count</th>' +
        '</tr></thead><tbody>' + rows + '</tbody></table>' +
        '</div>' +
      '</div>' +
      '<div style="padding:12px 20px;border-top:1px solid #e8e8e8;text-align:right;display:flex;gap:8px;justify-content:flex-end">' +
        '<button class="btn-form primary" onclick="ecApplyBrowseSelection(this)">Add Selected</button>' +
        '<button class="btn-form" onclick="this.closest(\'.la-modal-overlay\').remove()">Cancel</button>' +
      '</div>' +
    '</div>';
  overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
}

/* Apply selected users from browse modal to the retained accounts tags */
function ecApplyBrowseSelection(btn) {
  const modal = btn.closest('.la-modal-overlay');
  const checked = modal.querySelectorAll('.ba-cb:checked');
  const tags = document.getElementById('epm-admin-tags');
  if (!tags) { modal.remove(); return; }
  const existing = Array.from(tags.querySelectorAll('.ptag')).map(t => t.dataset.name);
  checked.forEach(cb => {
    const name = cb.dataset.name;
    if (existing.includes(name)) return;
    const label = cb.dataset.label;
    const type = cb.dataset.type;
    const tag = document.createElement('span');
    tag.className = 'ptag';
    tag.dataset.name = name;
    tag.innerHTML = '<span class="ptag-text">' + label + ' <span style="color:#888;font-size:10px">(' + type + ')</span></span><span class="ptag-remove" onclick="this.parentElement.remove()">&times;</span>';
    tags.appendChild(tag);
  });
  modal.remove();
}

/* ================================================================
 *  INSIGHT — Privileged Activity Audit
 * ================================================================ */

EC_PAGES['privileged-activity-audit'] = () => `
    <div class="page-title-bar">
      <i class="fa fa-clipboard-list page-icon"></i>
      <h1>Privileged Activity Audit</h1>
    </div>
    <div class="toolbar" style="padding:12px 28px;flex-wrap:wrap;gap:8px">
      <div class="filter-group"><span class="filter-label">Filter By :</span>
        <select class="filter-select"><option>Application Type</option><option>Executables</option><option>System Components</option></select>
      </div>
      <div class="filter-group">
        <select class="filter-select"><option>Elevated by ManageEngine</option><option>Yes</option><option>No</option></select>
      </div>
      <div class="filter-group">
        <select class="filter-select"><option>Elevation Decision</option><option>Approved</option><option>Denied</option></select>
      </div>
      <div class="toolbar-right">
        <span class="total-records">Total Records</span>
        <span class="icon-btn"><i class="fa fa-search"></i></span>
        <span class="icon-btn"><i class="fa fa-columns"></i></span>
        <span class="icon-btn"><i class="fa fa-download"></i></span>
      </div>
    </div>
    <div class="table-wrap">
      <table class="data-table">
        <thead><tr>
          <th>Application Name <i class="fa fa-sort sort-icon"></i></th>
          <th>Application Type</th>
          <th>Elevated Endpoint</th>
          <th>Reason stated</th>
          <th>Date &amp; Time of elevation <i class="fa fa-sort sort-icon"></i></th>
          <th>Elevated by (User)</th>
          <th>User Domain</th>
          <th>Elevated by ManageEngine</th>
          <th>Elevation Decision</th>
        </tr></thead>
        <tbody>
          <tr>
            <td><a href="#" style="color:#1a73e8">curl.exe</a></td>
            <td>Executables</td>
            <td>uesqa-w10-2</td>
            <td>elevation required</td>
            <td>May 12, 2025 11:40 AM</td>
            <td>uesqa-test11</td>
            <td>WORKGROUP</td>
            <td>Yes</td>
            <td>Approved</td>
          </tr>
          <tr>
            <td><a href="#" style="color:#1a73e8">bgupdater.exe</a></td>
            <td>Executables</td>
            <td>uesqa-w10-2</td>
            <td>elevation required</td>
            <td>May 12, 2025 11:40 AM</td>
            <td>uesqa-test11</td>
            <td>WORKGROUP</td>
            <td>Yes</td>
            <td>Approved</td>
          </tr>
          <tr>
            <td><a href="#" style="color:#1a73e8">dbeaver.exe</a></td>
            <td>Executables</td>
            <td>uesqa-w10-2</td>
            <td>elevation required</td>
            <td>May 12, 2025 11:40 AM</td>
            <td>uesqa-test11</td>
            <td>WORKGROUP</td>
            <td>No</td>
            <td>--</td>
          </tr>
          <tr>
            <td><a href="#" style="color:#1a73e8">git.exe</a></td>
            <td>Executables</td>
            <td>ues-w10-cloud1</td>
            <td>admin tool access</td>
            <td>May 11, 2025 09:15 AM</td>
            <td>admin-user01</td>
            <td>WORKGROUP</td>
            <td>Yes</td>
            <td>Approved</td>
          </tr>
          <tr>
            <td><a href="#" style="color:#1a73e8">powershell.exe</a></td>
            <td>Executables</td>
            <td>EC2AMAZ-DS25S0F</td>
            <td>script execution</td>
            <td>May 10, 2025 03:22 PM</td>
            <td>sysadmin</td>
            <td>WORKGROUP</td>
            <td>No</td>
            <td>--</td>
          </tr>
          <tr>
            <td><a href="#" style="color:#1a73e8">regedit.exe</a></td>
            <td>Executables</td>
            <td>uesqa-w10-2</td>
            <td>registry modification</td>
            <td>May 9, 2025 02:10 PM</td>
            <td>uesqa-test11</td>
            <td>WORKGROUP</td>
            <td>Yes</td>
            <td>Denied</td>
          </tr>
          <tr>
            <td><a href="#" style="color:#1a73e8">msiexec.exe</a></td>
            <td>System Components</td>
            <td>ues-w10-cloud1</td>
            <td>software install</td>
            <td>May 9, 2025 10:35 AM</td>
            <td>admin-user01</td>
            <td>WORKGROUP</td>
            <td>Yes</td>
            <td>Denied</td>
          </tr>
          <tr>
            <td><a href="#" style="color:#1a73e8">cmd.exe</a></td>
            <td>Executables</td>
            <td>EC2AMAZ-DS25S0F</td>
            <td>command prompt access</td>
            <td>May 8, 2025 04:48 PM</td>
            <td>sysadmin</td>
            <td>WORKGROUP</td>
            <td>Yes</td>
            <td>Approved</td>
          </tr>
          <tr>
            <td><a href="#" style="color:#1a73e8">taskmgr.exe</a></td>
            <td>System Components</td>
            <td>uesqa-w10-2</td>
            <td>process management</td>
            <td>May 8, 2025 11:20 AM</td>
            <td>uesqa-test11</td>
            <td>WORKGROUP</td>
            <td>Yes</td>
            <td>Denied</td>
          </tr>
          <tr>
            <td><a href="#" style="color:#1a73e8">diskpart.exe</a></td>
            <td>System Components</td>
            <td>ues-w10-cloud1</td>
            <td>disk management</td>
            <td>May 7, 2025 09:05 AM</td>
            <td>admin-user01</td>
            <td>WORKGROUP</td>
            <td>No</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-pagination">
      <span>1 - 11 of <a href="#" style="color:#1a73e8">Total Records</a></span>
      <select><option>25</option></select>
      <span class="page-btn">&lt;</span>
      <span class="page-btn">&gt;</span>
    </div>
    <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>`;

/* ================================================================
 *  INSIGHT — Admin Rights Summary
 * ================================================================ */

EC_PAGES['admin-rights-summary'] = () => `
    <div class="page-title-bar">
      <i class="fa fa-user-shield page-icon"></i>
      <h1>Admin Rights Summary</h1>
    </div>
    <div class="content-inner">
      <div class="toolbar">
        <div class="ars-view-toggle">
          <span class="ars-view-btn active" onclick="ecSwitchArsView('device',this)" title="Device view"><i class="fa fa-th"></i></span>
          <span class="ars-view-btn" onclick="ecSwitchArsView('user',this)" title="User view"><i class="fa fa-list"></i></span>
        </div>
        <div class="filter-group" style="margin-left:16px"><span class="filter-label">Filter By :</span>
          <select><option>Custom Group</option><option>All Computers Group</option><option>Developer group</option><option>Engineering group</option><option>Marketing Group</option><option>Remote Branch</option><option>Support Group</option></select>
          <select><option>User Type</option><option>Local Admin</option><option>Domain Admin</option><option>Built-in Admin</option></select>
        </div>
        <div class="toolbar-right">
          <span class="icon-btn" title="Advanced Filter" onclick="ecToggleArsAdvancedFilter()" id="arsAdvFilterBtn"><i class="fa fa-filter"></i></span>
          <span class="total-records">Total Records</span>
          <span class="icon-btn"><i class="fa fa-search"></i></span>
          <span class="icon-btn"><i class="fa fa-columns"></i></span>
          <span class="icon-btn"><i class="fa fa-download"></i></span>
        </div>
      </div>

      <!-- Advanced Filter Panel -->
      <div id="arsAdvancedFilter" style="display:none;background:#fafbfc;border:1px solid #e0e0e0;border-radius:8px;margin:0 0 12px;padding:16px 20px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
          <span class="icon-btn" style="font-size:13px"><i class="fa fa-pen" style="font-size:11px"></i></span>
          <span class="icon-btn" onclick="ecToggleArsAdvancedFilter()" style="cursor:pointer"><i class="fa fa-times"></i></span>
        </div>
        <div id="arsAdvFilterRows">
          <div class="ars-adv-row" style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
            <span style="min-width:24px;height:24px;border-radius:50%;background:#e8eaf6;display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;color:#3f51b5">1</span>
            <select class="filter-select" style="min-width:160px">
              <option>Computer Name</option><option>User Name</option><option>Domain</option><option>Operating System</option><option>Admin Type</option><option>Last Logon</option>
            </select>
            <select class="filter-select" style="min-width:140px">
              <option value="" disabled selected>Criteria</option><option>like</option><option>not like</option><option>starts with</option><option>ends with</option>
            </select>
            <input type="text" class="form-input" placeholder="Value" style="width:200px" />
          </div>
        </div>
        <div style="display:flex;gap:8px;margin-top:12px">
          <button class="btn btn-primary" style="font-size:12px;padding:6px 16px">Save &amp; Apply</button>
          <button class="btn-form" style="font-size:12px;padding:6px 16px">Apply</button>
        </div>
      </div>

      <!-- Device View (default) -->
      <div id="ars-view-device">
        <div class="ars-sub-tabs" style="display:flex;gap:0;border-bottom:2px solid #e8e8e8;margin:0 0 0 0">
          <span class="ars-sub-tab active" onclick="ecSwitchArsDeviceTab('dev-by-computer',this)">By Computer</span>
          <span class="ars-sub-tab" onclick="ecSwitchArsDeviceTab('dev-by-user',this)">By User</span>
        </div>

        <!-- Tab 1: Computer → User Count -->
        <div id="dev-by-computer">
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr>
                <th style="width:30px"><input type="checkbox" onclick="document.querySelectorAll('#dev-by-computer .ars-cb').forEach(c=>c.checked=this.checked)" /></th>
                <th>Computer Name <i class="fa fa-sort sort-icon"></i></th>
                <th>Domain Name</th><th>Operating System</th><th>Remarks</th><th>Local Admin Count</th>
              </tr></thead>
              <tbody>
                <tr><td><input type="checkbox" class="ars-cb" /></td><td>EC2AMAZ-DS25S0F</td><td>WORKGROUP</td><td>Windows Server 2022 Datacenter Edition (x64)</td><td>Admin user detected</td><td><a href="#" onclick="ecShowLocalAdmins('EC2AMAZ-DS25S0F');return false">2</a></td></tr>
                <tr><td><input type="checkbox" class="ars-cb" /></td><td>ues-w10-cloud1</td><td>WORKGROUP</td><td>Windows 11 Professional Edition (x64)</td><td>Admin user detected</td><td><a href="#" onclick="ecShowLocalAdmins('ues-w10-cloud1');return false">3</a></td></tr>
                <tr><td><input type="checkbox" class="ars-cb" /></td><td>uesqa-w10-2</td><td>WORKGROUP</td><td>Windows 10 Professional Edition (x64)</td><td>Admin user detected</td><td><a href="#" onclick="ecShowLocalAdmins('uesqa-w10-2');return false">1</a></td></tr>
                <tr><td><input type="checkbox" class="ars-cb" /></td><td>linux-build-srv1</td><td>WORKGROUP</td><td>Ubuntu 22.04 LTS (x64)</td><td>Admin user detected</td><td><a href="#" onclick="ecShowLocalAdmins('linux-build-srv1');return false">2</a></td></tr>
              </tbody>
            </table>
          </div>
          <div class="table-pagination">
            <span>1 - 4 of <a href="#" style="color:#1a73e8">Total Records</a></span>
            <select><option>25</option></select>
            <span class="page-btn">&lt;</span><span class="page-btn">&gt;</span>
          </div>
        </div>

        <!-- Tab 2: User → Computer Count -->
        <div id="dev-by-user" style="display:none">
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr>
                <th style="width:30px"><input type="checkbox" onclick="document.querySelectorAll('#dev-by-user .ars-cb').forEach(c=>c.checked=this.checked)" /></th>
                <th>User Name <i class="fa fa-sort sort-icon"></i></th>
                <th>User Domain</th><th>Admin Type</th><th>Remarks</th><th>Computer Count</th>
              </tr></thead>
              <tbody>
                <tr><td><input type="checkbox" class="ars-cb" /></td><td>test</td><td>WORKGROUP</td><td>Local Admin</td><td>Admin on multiple computers</td><td><a href="#" onclick="ecShowUserComputers('test');return false">3</a></td></tr>
                <tr><td><input type="checkbox" class="ars-cb" /></td><td>user</td><td>WORKGROUP</td><td>Local Admin</td><td>Admin on multiple computers</td><td><a href="#" onclick="ecShowUserComputers('user');return false">2</a></td></tr>
                <tr><td><input type="checkbox" class="ars-cb" /></td><td>admin</td><td>WORKGROUP</td><td>Local Admin</td><td>Admin on multiple computers</td><td><a href="#" onclick="ecShowUserComputers('admin');return false">2</a></td></tr>
                <tr><td><input type="checkbox" class="ars-cb" /></td><td>root</td><td>WORKGROUP</td><td>Local Admin</td><td>Admin on single computer</td><td><a href="#" onclick="ecShowUserComputers('root');return false">1</a></td></tr>
              </tbody>
            </table>
          </div>
          <div class="table-pagination">
            <span>1 - 4 of <a href="#" style="color:#1a73e8">Total Records</a></span>
            <select><option>25</option></select>
            <span class="page-btn">&lt;</span><span class="page-btn">&gt;</span>
          </div>
        </div>
      </div>

      <!-- User View — one row per user, machine names may repeat -->
      <div id="ars-view-user" style="display:none">
        <div style="padding:8px 0 0"><button class="btn btn-primary" onclick="ecRemoveAdminPrivilege()"><i class="fa fa-user-minus"></i> Move as Standard User</button></div>
        <div class="table-wrap">
          <table class="data-table">
            <thead><tr>
              <th style="width:30px"><input type="checkbox" onclick="document.querySelectorAll('#ars-view-user .ars-cb').forEach(c=>c.checked=this.checked)" /></th>
              <th>User Name <i class="fa fa-sort sort-icon"></i></th>
              <th>Computer Name</th><th>Domain</th><th>Operating System</th><th>Admin Type</th><th>Last Logon</th>
            </tr></thead>
            <tbody>
              <tr><td><input type="checkbox" class="ars-cb" /></td><td>test</td><td>EC2AMAZ-DS25S0F</td><td>WORKGROUP</td><td>Windows Server 2022 Datacenter Edition (x64)</td><td>Local Admin</td><td>Apr 1, 2026</td></tr>
              <tr><td><input type="checkbox" class="ars-cb" /></td><td>user</td><td>EC2AMAZ-DS25S0F</td><td>WORKGROUP</td><td>Windows Server 2022 Datacenter Edition (x64)</td><td>Local Admin</td><td>Mar 28, 2026</td></tr>
              <tr><td><input type="checkbox" class="ars-cb" /></td><td>test</td><td>ues-w10-cloud1</td><td>WORKGROUP</td><td>Windows 11 Professional Edition (x64)</td><td>Local Admin</td><td>Apr 2, 2026</td></tr>
              <tr><td><input type="checkbox" class="ars-cb" /></td><td>user</td><td>ues-w10-cloud1</td><td>WORKGROUP</td><td>Windows 11 Professional Edition (x64)</td><td>Local Admin</td><td>Mar 30, 2026</td></tr>
              <tr><td><input type="checkbox" class="ars-cb" /></td><td>admin</td><td>ues-w10-cloud1</td><td>WORKGROUP</td><td>Windows 11 Professional Edition (x64)</td><td>Local Admin</td><td>Apr 3, 2026</td></tr>
              <tr><td><input type="checkbox" class="ars-cb" /></td><td>test</td><td>uesqa-w10-2</td><td>WORKGROUP</td><td>Windows 10 Professional Edition (x64)</td><td>Local Admin</td><td>Mar 25, 2026</td></tr>
              <tr><td><input type="checkbox" class="ars-cb" /></td><td>root</td><td>linux-build-srv1</td><td>WORKGROUP</td><td>Ubuntu 22.04 LTS (x64)</td><td>Local Admin</td><td>Apr 2, 2026</td></tr>
              <tr><td><input type="checkbox" class="ars-cb" /></td><td>admin</td><td>linux-build-srv1</td><td>WORKGROUP</td><td>Ubuntu 22.04 LTS (x64)</td><td>Local Admin</td><td>Apr 1, 2026</td></tr>
            </tbody>
          </table>
        </div>
        <div class="table-pagination">
          <span>1 - 8 of <a href="#" style="color:#1a73e8">Total Records</a></span>
          <select><option>25</option></select>
          <span class="page-btn">&lt;</span><span class="page-btn">&gt;</span>
        </div>
      </div>
    </div>
    <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>`;

/* ================================================================
 *  POLICY CREATION — Full form matching standalone
 * ================================================================ */

/** Available application groups for the EC policy form tag pickers */
const EC_POLICY_APP_GROUPS = {
  allowlist: [
    { name: 'Allowed applications', platform: 'windows' },
    { name: 'Allowed Mac applications', platform: 'mac' },
    { name: 'Allowed Linux applications', platform: 'linux' },
  ],
  blocklist: [
    { name: 'Blocked applications', platform: 'windows' },
    { name: 'Blocked Mac Applications', platform: 'mac' },
    { name: 'Blocked Linux Applications', platform: 'linux' },
    { name: 'ManageEngine recommended blocklist for productivity', platform: 'windows' },
  ]
};

/* ================================================================
 *  APPLICATION CONTROL POLICY — Summary page
 *  Reuses the deploy-policy 6-tab layout (ecOpenDeployPolicySummary)
 * ================================================================ */
const EC_POLICY_GROUP_META = {
  'All Computers Group': { category: 'All', user: 'demo', modified: 'Apr 9, 2025, 06:29:31 PM' },
  'Developer group':     { category: 'Static Unique Group', user: 'demo', modified: 'Mar 20, 2026, 10:00:00 AM' },
  'Engineering group':   { category: 'Static Computer Group', user: 'demo', modified: 'Mar 12, 2026, 11:30:00 AM' },
  'Marketing Group':     { category: 'Static Computer Group', user: 'demo', modified: 'Mar 22, 2026, 03:00:00 PM' },
  'Remote Branch':       { category: 'Static Computer Group', user: 'demo', modified: 'Mar 24, 2026, 11:00:00 AM' },
  'Support Group':       { category: 'Static Computer Group', user: 'demo', modified: 'Mar 14, 2026, 02:15:00 PM' },
};

function ecOpenPolicySummary(groupName, platform, mode) {
  const meta = EC_POLICY_GROUP_META[groupName] || {
    category: 'All', user: 'admin', modified: '--'
  };
  ecOpenDeployPolicySummary(
    groupName, meta.category, mode || 'Audit Mode',
    meta.user, meta.modified, 'ac-policies'
  );
}

function ecOpenCreatePolicy(platform, title, backPage) {
  document.querySelectorAll('.btn-dropdown-wrap.open').forEach(e => e.classList.remove('open'));
  const content = document.getElementById('pageContent');
  if (!content) return;
  const pageTitle = title || 'Create Policy';
  const goBack = backPage || 'ac-policies';

  const platformLabels = { windows: 'Windows', mac: 'Mac', linux: 'Linux' };
  const platformIcons = { windows: 'fab fa-windows', mac: 'fab fa-apple', linux: 'fab fa-linux' };
  const pLabel = platformLabels[platform] || platform;
  const pIcon = platformIcons[platform] || 'fab fa-windows';

  const isWindows = platform === 'windows';
  const isLinux   = platform === 'linux';

  /* Build dropdown options for tag pickers */
  const allGroups = [...EC_POLICY_APP_GROUPS.allowlist, ...EC_POLICY_APP_GROUPS.blocklist];
  const allGroupOptions = allGroups
    .map(g => `<div class="ptag-dropdown-item" onclick="ecAddPolicyTag('ec-appgroup-tags','${g.name}')">${g.name}</div>`).join('');

  /* Strict mode sub-option — Windows & Linux only */
  const strictSubOption = (isWindows || isLinux) ? `
            <div class="mode-sub-option">
              <input type="checkbox" id="ec-strict-allow-request" />
              <label for="ec-strict-allow-request">Allow users to request applications which are unmanaged.${isWindows ? ' (Windows Only)' : ''}</label>
            </div>` : '';

  content.innerHTML = `
    <div class="form-page">
      <div class="form-page-header">
        <a href="#" class="back-arrow" onclick="ecShowSubReport('${goBack}');return false"><i class="fa fa-arrow-left"></i></a>
        <h1>${pageTitle}</h1>
        <span class="platform-badge"><i class="${pIcon}"></i> ${pLabel}</span>
      </div>

      <!-- Define Target -->
      <div class="form-section">
        <div class="form-section-title">Define Target</div>
        <div class="form-row">
          <span class="form-label">Custom Group to be associated <span class="req">*</span></span>
          <div class="form-control-group" style="gap:12px">
            <input type="text" class="form-input" placeholder="Select Custom Group" style="flex:1" />
            <a href="#" class="form-action-link">New Custom Group</a>
          </div>
        </div>
      </div>

      <!-- ===== Accordion 1: Configure Application Control Policy ===== -->
      <div class="dp-accordion open" id="dp-acc-ac">
        <div class="dp-accordion-header" onclick="ecToggleDpAccordion('dp-acc-ac')">
          <input type="checkbox" class="dp-acc-cb" checked onclick="event.stopPropagation();ecToggleDpAccordionCb(this,'dp-acc-ac')" />
          <span class="dp-accordion-title">Configure Application Control Policy</span>
          <i class="fa fa-chevron-down dp-acc-arrow"></i>
        </div>
        <div class="dp-accordion-body">
          <!-- Application Groups -->
          <div class="form-section">
            <div class="form-row">
              <span class="form-label">Application Group(s) Associated <span class="req">*</span></span>
              <div class="form-control-group" style="gap:12px">
                <div class="ptag-input-wrap" style="flex:1">
                  <div class="ptag-tags" id="ec-appgroup-tags"></div>
                  <input type="text" class="ptag-input" placeholder="Application Group(s) Associated" onfocus="this.parentElement.querySelector('.ptag-dropdown').style.display='block'" oninput="ecFilterPolicyDropdown(this)" />
                  <div class="ptag-dropdown">${allGroupOptions}</div>
                </div>
                <span class="form-icon-btn" onclick="document.getElementById('ec-appgroup-tags').parentElement.querySelector('input').focus()"><i class="fa fa-sync"></i></span>
                <div class="btn-dropdown-wrap" style="display:inline-block">
                  <a href="#" class="form-action-link" onclick="this.parentElement.classList.toggle('open');return false">Create Allowlist <i class="fa fa-caret-down" style="font-size:10px"></i></a>
                  <div class="btn-dropdown-menu" style="min-width:140px">
                    <a href="#" onclick="ecOpenCreateGroup('Allowlist','windows');return false"><i class="fab fa-windows"></i> Windows</a>
                    <a href="#" onclick="ecOpenCreateGroup('Allowlist','mac');return false"><i class="fab fa-apple"></i> Mac</a>
                    <a href="#" onclick="ecOpenCreateGroup('Allowlist','linux');return false"><i class="fab fa-linux"></i> Linux</a>
                  </div>
                </div>
                <div class="btn-dropdown-wrap" style="display:inline-block">
                  <a href="#" class="form-action-link" onclick="this.parentElement.classList.toggle('open');return false">Create Blocklist <i class="fa fa-caret-down" style="font-size:10px"></i></a>
                  <div class="btn-dropdown-menu" style="min-width:140px">
                    <a href="#" onclick="ecOpenCreateGroup('Blocklist','windows');return false"><i class="fab fa-windows"></i> Windows</a>
                    <a href="#" onclick="ecOpenCreateGroup('Blocklist','mac');return false"><i class="fab fa-apple"></i> Mac</a>
                    <a href="#" onclick="ecOpenCreateGroup('Blocklist','linux');return false"><i class="fab fa-linux"></i> Linux</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Mode Selection -->
          <div class="mode-options">
            <label class="mode-option selected" id="ec-mode-audit" onclick="ecSelectPolicyMode('audit')">
              <input type="radio" name="ec-mode" value="audit" checked />
              <div>
                <strong>Audit Mode</strong>
                <div class="mode-desc">Except blocked applications, all other applications will be allowed to run. This allows you to audit the unmanaged applications usage and redefine your allowlist/ blocklist</div>
              </div>
            </label>
            <label class="mode-option" id="ec-mode-strict" onclick="ecSelectPolicyMode('strict')">
              <input type="radio" name="ec-mode" value="strict" />
              <div>
                <strong>Strict Mode</strong>
                <div class="mode-desc">Enforce strict mode if you need to run only list of allowed applications.</div>
              </div>
${strictSubOption}
            </label>
          </div>
          <div class="form-note"><strong>Note :</strong> Blocked applications will not be allowed to run in any mode.</div>

          <!-- Settings -->
          <div class="form-section">
            <div class="form-section-title">Settings</div>
            <div class="form-row">
              <span class="form-label">Customize alert notification</span>
              <div class="form-control-group">
                <label class="radio-label"><input type="radio" name="ec-customalert" value="yes" onclick="document.getElementById('ec-alert-msg-row').style.display=''" /> Yes</label>
                <label class="radio-label"><input type="radio" name="ec-customalert" value="no" checked onclick="document.getElementById('ec-alert-msg-row').style.display='none'" /> No</label>
              </div>
            </div>
            <div class="form-row" id="ec-alert-msg-row" style="display:none">
              <span class="form-label">Alert message <i class="fa fa-circle-question" style="color:#999;font-size:11px"></i></span>
              <div class="form-control-group">
                <textarea class="form-textarea">This application has been blocked.\nContact your System Administrator.</textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== Accordion 2: Deploy EPM Policy (Windows only) ===== -->
      ${platform === 'windows' ? `
      <div class="dp-accordion open" id="dp-acc-epm">
        <div class="dp-accordion-header" onclick="ecToggleDpAccordion('dp-acc-epm')">
          <input type="checkbox" class="dp-acc-cb" checked onclick="event.stopPropagation();ecToggleDpAccordionCb(this,'dp-acc-epm')" />
          <span class="dp-accordion-title">Deploy EPM Policy</span>
          <i class="fa fa-chevron-down dp-acc-arrow"></i>
        </div>
        <div class="dp-accordion-body">
          <div class="form-section">
            <div class="form-row">
              <span class="form-label">EPM Policy <span class="req">*</span></span>
              <div class="form-control-group" style="gap:8px">
                <div class="custom-dropdown multi" id="epmPolicyDropdown" style="flex:1">
                  <div class="cd-trigger" onclick="ecToggleDropdown('epmPolicyDropdown')">
                    <div class="cd-chips" id="epmPolicyChips"><span class="cd-placeholder">Select EPM Policies</span></div>
                    <i class="fa fa-chevron-down cd-arrow"></i>
                  </div>
                  <div class="cd-menu">
                    <div class="cd-item" onclick="ecToggleMultiItem(this,'epmPolicyChips','epmPolicyDropdown');ecCheckEpmAdminRemoval()"><input type="checkbox" class="cd-item-cb" /> <span>Windows EPM Policy</span> <span style="font-size:10px;color:#d32f2f;margin-left:4px" title="Has Admin Privilege Removal enabled"><i class="fa fa-user-minus"></i></span></div>
                    <div class="cd-item" onclick="ecToggleMultiItem(this,'epmPolicyChips','epmPolicyDropdown');ecCheckEpmAdminRemoval()"><input type="checkbox" class="cd-item-cb" /> <span>EPM - Developer Workstations</span></div>
                    <div class="cd-item" onclick="ecToggleMultiItem(this,'epmPolicyChips','epmPolicyDropdown');ecCheckEpmAdminRemoval()"><input type="checkbox" class="cd-item-cb" /> <span>EPM - Admin Access Policy</span></div>
                  </div>
                </div>
                <span class="form-icon-btn" onclick="document.getElementById('epmPolicyChips').closest('.custom-dropdown').querySelector('.cd-trigger').click()"><i class="fa fa-sync"></i></span>
                <div class="btn-dropdown-wrap" style="display:inline-block">
                  <a href="#" class="form-action-link" onclick="this.parentElement.classList.toggle('open');return false">Create Policy <i class="fa fa-caret-down" style="font-size:10px"></i></a>
                  <div class="btn-dropdown-menu" style="min-width:140px">
                    <a href="#" onclick="ecOpenCreateEpmPolicy('windows');return false"><i class="fab fa-windows"></i> Windows</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Admin Removal Warning (hidden by default) -->
      <div id="epm-admin-removal-warning" style="display:none;margin:0 28px">
        <div style="background:#fef7e0;border:1px solid #f9d648;border-radius:8px;padding:16px 20px;margin-bottom:8px">
          <div style="display:flex;align-items:flex-start;gap:10px">
            <i class="fa fa-triangle-exclamation" style="color:#e37400;font-size:18px;margin-top:2px"></i>
            <div style="flex:1">
              <div style="font-size:13px;font-weight:600;color:#333;margin-bottom:4px"><span id="epm-zero-admin-count">3</span> computers will be left with no local admin accounts after deployment.</div>
              <a href="#" style="color:#1a73e8;font-size:12px" onclick="ecShowZeroAdminComputers();return false">View affected computers</a>
            </div>
          </div>
        </div>
        <div style="padding:8px 0">
          <label style="display:flex;align-items:flex-start;gap:8px;font-size:13px;color:#333;cursor:pointer">
            <input type="checkbox" id="epm-admin-consent-cb" style="accent-color:#1a73e8;width:16px;height:16px;margin-top:2px;flex-shrink:0" onchange="ecUpdateDeployButtons()" />
            <span>I understand that all existing local administrator accounts on applicable computers will be converted to standard user accounts after deployment, and I agree to proceed.</span>
          </label>
        </div>
      </div>
      ` : ''}

      <div class="form-actions">
        <button class="btn-form primary" id="epm-deploy-btn">Deploy</button>
        <button class="btn-form primary" id="epm-deploy-imm-btn" style="background:#4285f4">Deploy Immediately</button>
        <button class="btn-form" onclick="ecShowSubReport('${goBack}')">Cancel</button>
      </div>
      <div class="restricted-warning"><i class="fa fa-exclamation-circle"></i> [ Running in restricted mode. ]</div>
      <div class="form-note" style="text-align:center;margin-top:8px;color:#1a73e8;font-size:12px">The policy gets deployed only during the next refresh cycle (90 minutes). To deploy now, Click Deploy Immediately.</div>
      <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>
    </div>`;
  content.scrollTop = 0;
  ecInitPolicyFormListeners();
}

/** Add a tag chip to an EC policy tag container */
function ecAddPolicyTag(containerId, name, withInherit) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const existing = container.querySelectorAll('.ptag');
  for (const t of existing) {
    if (t.dataset.name === name) return;
  }
  const tag = document.createElement('span');
  tag.className = 'ptag';
  tag.dataset.name = name;
  let inner = `<span class="ptag-text">${name}</span>`;
  if (withInherit) {
    inner += `<label class="ptag-inherit" title="Inherit: allow all children and grandchildren in the chain"><input type="checkbox" onchange="ecToggleInherit(this)" /> Inherit</label>`;
  }
  inner += `<span class="ptag-remove" onclick="ecRemovePolicyTag(this)">&times;</span>`;
  tag.innerHTML = inner;
  container.appendChild(tag);
  const wrap = container.closest('.ptag-input-wrap');
  if (wrap) {
    const dd = wrap.querySelector('.ptag-dropdown');
    if (dd) dd.style.display = 'none';
    const inp = wrap.querySelector('.ptag-input');
    if (inp) { inp.value = ''; inp.blur(); }
  }
}

function ecRemovePolicyTag(el) {
  const tag = el.closest('.ptag');
  if (tag) tag.remove();
}

function ecToggleInherit(cb) {
  const tag = cb.closest('.ptag');
  if (!tag) return;
  tag.classList.toggle('inherited', cb.checked);
}

function ecFilterPolicyDropdown(input) {
  const dd = input.parentElement.querySelector('.ptag-dropdown');
  if (!dd) return;
  dd.style.display = 'block';
  const val = input.value.toLowerCase();
  dd.querySelectorAll('.ptag-dropdown-item').forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(val) ? '' : 'none';
  });
}

/* Toggle deploy accordion open/closed */
function ecToggleDpAccordion(accId) {
  const acc = document.getElementById(accId);
  if (!acc) return;
  acc.classList.toggle('open');
}

/* Toggle accordion checkbox — enable/disable the body */
function ecToggleDpAccordionCb(cb, accId) {
  const acc = document.getElementById(accId);
  if (!acc) return;
  const body = acc.querySelector('.dp-accordion-body');
  if (cb.checked) {
    acc.classList.add('open');
    body.classList.remove('dp-disabled');
  } else {
    body.classList.add('dp-disabled');
  }
}

function ecSelectPolicyMode(mode) {
  const audit  = document.getElementById('ec-mode-audit');
  const strict = document.getElementById('ec-mode-strict');
  if (!audit || !strict) return;
  if (mode === 'audit') {
    audit.classList.add('selected');
    strict.classList.remove('selected');
    audit.querySelector('input[type=radio]').checked = true;
  } else {
    strict.classList.add('selected');
    audit.classList.remove('selected');
    strict.querySelector('input[type=radio]').checked = true;
  }
}

function ecInitPolicyFormListeners() {
  document.addEventListener('click', function ecPolicyDocClick(e) {
    document.querySelectorAll('.ptag-input-wrap').forEach(wrap => {
      if (!wrap.contains(e.target)) {
        const dd = wrap.querySelector('.ptag-dropdown');
        if (dd) dd.style.display = 'none';
      }
    });
    if (!document.getElementById('ec-mode-audit')) {
      document.removeEventListener('click', ecPolicyDocClick);
    }
  });
}

/* EPM policies that have Admin Privilege Removal enabled */
const EC_EPM_ADMIN_REMOVAL_POLICIES = ['Windows EPM Policy'];

/* Computers per CG that would have 0 admins after removal */
const EC_ZERO_ADMIN_COMPUTERS = [
  { name: 'uesqa-w10-2', os: 'Windows 10 Professional Edition (x64)', domain: 'WORKGROUP', admins: 1 },
  { name: 'EC2AMAZ-DS25S0F', os: 'Windows Server 2022 Datacenter Edition (x64)', domain: 'WORKGROUP', admins: 2 },
  { name: 'ues-w10-cloud1', os: 'Windows 11 Professional Edition (x64)', domain: 'WORKGROUP', admins: 3 }
];

/* Check if any selected EPM policy has admin removal, show/hide warning */
function ecCheckEpmAdminRemoval() {
  const warning = document.getElementById('epm-admin-removal-warning');
  if (!warning) return;
  const chips = document.querySelectorAll('#epmPolicyChips .cd-chip');
  let hasRemoval = false;
  chips.forEach(chip => {
    const name = chip.textContent.replace('×', '').trim();
    if (EC_EPM_ADMIN_REMOVAL_POLICIES.includes(name)) hasRemoval = true;
  });
  if (hasRemoval) {
    warning.style.display = '';
    document.getElementById('epm-zero-admin-count').textContent = EC_ZERO_ADMIN_COMPUTERS.length;
    const consent = document.getElementById('epm-admin-consent-cb');
    if (consent) consent.checked = false;
    ecUpdateDeployButtons();
  } else {
    warning.style.display = 'none';
    const consent = document.getElementById('epm-admin-consent-cb');
    if (consent) consent.checked = false;
    ecUpdateDeployButtons();
  }
}

/* Enable/disable deploy buttons based on consent state */
function ecUpdateDeployButtons() {
  const warning = document.getElementById('epm-admin-removal-warning');
  const deployBtn = document.getElementById('epm-deploy-btn');
  const deployImmBtn = document.getElementById('epm-deploy-imm-btn');
  if (!deployBtn || !deployImmBtn) return;
  const needsConsent = warning && warning.style.display !== 'none';
  if (needsConsent) {
    const consent = document.getElementById('epm-admin-consent-cb');
    const allowed = consent && consent.checked;
    deployBtn.disabled = !allowed;
    deployBtn.style.opacity = allowed ? '1' : '0.5';
    deployBtn.style.pointerEvents = allowed ? '' : 'none';
    deployImmBtn.disabled = !allowed;
    deployImmBtn.style.opacity = allowed ? '1' : '0.5';
    deployImmBtn.style.pointerEvents = allowed ? '' : 'none';
  } else {
    deployBtn.disabled = false;
    deployBtn.style.opacity = '1';
    deployBtn.style.pointerEvents = '';
    deployImmBtn.disabled = false;
    deployImmBtn.style.opacity = '1';
    deployImmBtn.style.pointerEvents = '';
  }
}

/* Show modal with computers that will have 0 admins */
function ecShowZeroAdminComputers() {
  const rows = EC_ZERO_ADMIN_COMPUTERS.map(c =>
    '<tr><td>' + c.name + '</td><td>' + c.os + '</td><td>' + c.domain + '</td><td>' + c.admins + ' → 0</td></tr>'
  ).join('');
  const overlay = document.createElement('div');
  overlay.className = 'la-modal-overlay';
  overlay.innerHTML =
    '<div class="la-modal" style="width:750px;max-width:90vw">' +
      '<div class="la-modal-header"><h3>Computers with No Local Admin After Deployment</h3>' +
        '<button class="la-modal-close" onclick="this.closest(\'.la-modal-overlay\').remove()">&times;</button></div>' +
      '<div class="la-modal-body">' +
        '<div class="la-modal-info" style="background:#fef7e0;border-color:#f9d648"><i class="fa fa-triangle-exclamation" style="color:#e37400"></i> These computers will have all local admin accounts demoted to standard users. Ensure at least one account is retained in the EPM policy exclusion list.</div>' +
        '<table><thead><tr><th>Computer Name</th><th>Operating System</th><th>Domain</th><th>Admin Count Change</th></tr></thead>' +
        '<tbody>' + rows + '</tbody></table>' +
      '</div>' +
    '</div>';
  overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
}
