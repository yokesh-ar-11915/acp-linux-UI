/** Page content generators — keyed by module or sidebar-item id. */
const PAGES = {

  /* =================== HOME =================== */
  home: () => `
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
        ${hBar([
          {label:'Brave VPN Wireguard Service',pct:90,color:'blue'},
          {label:'Microsoft Edge',pct:80,color:'blue'},
        ])}
      </div>
      <div class="chart-card">
        <h4>Most used applications from Non-verified publishers</h4>
        ${hBar([
          {label:'Pages.app',pct:85,color:'orange',count:1},
          {label:'Keynote.app',pct:80,color:'orange',count:1},
        ])}
      </div>
      <div class="chart-card">
        <h4>Unmanaged Applications</h4>
        <div style="text-align:center;padding:40px;color:#ccc">
          <i class="fa fa-desktop" style="font-size:48px;margin-bottom:8px;display:block"></i>
        </div>
      </div>
    </div>`,

  /* Dashboard = alias for home */
  dashboard: null, /* set below after PAGES object */

  /* =================== APPLICATION GROUPS =================== */
  'app-groups': () => `
    <div class="page-title-bar">
      <i class="fa fa-copy page-icon"></i>
      <h1>Application Groups</h1>
      <span class="tip-link"><i class="fa fa-gear"></i> Want to customize application control rules?</span>
    </div>
    <div class="toolbar">
      <div class="btn-dropdown-wrap">
        <button class="btn btn-primary" onclick="this.parentElement.classList.toggle('open')"><i class="fa fa-plus"></i> Create Application Group <i class="fa fa-caret-down" style="font-size:10px"></i></button>
        <div class="btn-dropdown-menu">
          <a href="#" onclick="openCreateGroup('Application Group','windows');return false"><i class="fab fa-windows"></i> Windows</a>
          <a href="#" onclick="openCreateGroup('Application Group','mac');return false"><i class="fab fa-apple"></i> Mac</a>
          <a href="#" onclick="openCreateGroup('Application Group','linux');return false"><i class="fab fa-linux"></i> Linux</a>
        </div>
      </div>
      <div class="btn-dropdown-wrap">
        <button class="btn" onclick="this.parentElement.classList.toggle('open')"><i class="fa fa-plus"></i> Create Allowlist <i class="fa fa-caret-down" style="font-size:10px"></i></button>
        <div class="btn-dropdown-menu">
          <a href="#" onclick="openCreateGroup('Allowlist','windows');return false"><i class="fab fa-windows"></i> Windows</a>
          <a href="#" onclick="openCreateGroup('Allowlist','mac');return false"><i class="fab fa-apple"></i> Mac</a>
          <a href="#" onclick="openCreateGroup('Allowlist','linux');return false"><i class="fab fa-linux"></i> Linux</a>
        </div>
      </div>
      <div class="btn-dropdown-wrap">
        <button class="btn" onclick="this.parentElement.classList.toggle('open')"><i class="fa fa-plus"></i> Create Blocklist <i class="fa fa-caret-down" style="font-size:10px"></i></button>
        <div class="btn-dropdown-menu">
          <a href="#" onclick="openCreateGroup('Blocklist','windows');return false"><i class="fab fa-windows"></i> Windows</a>
          <a href="#" onclick="openCreateGroup('Blocklist','mac');return false"><i class="fab fa-apple"></i> Mac</a>
          <a href="#" onclick="openCreateGroup('Blocklist','linux');return false"><i class="fab fa-linux"></i> Linux</a>
        </div>
      </div>
      <div class="filter-group"><span class="filter-label">Filter By :</span>
        <select><option>Platform type</option><option>Windows</option><option>Mac</option><option>Linux</option></select>
        <select><option>Group type</option><option>Application Group</option><option>Allowlist</option><option>Blocklist</option></select>
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
          <tr><td><i class="fab fa-windows os-icon"></i><a href="#">Allowed applications</a></td><td>Allowlist</td><td>admin</td><td>admin</td><td>Oct 7, 2024 01:2...</td><td>Oct 7, 20...</td></tr>
          <tr><td><i class="fab fa-apple os-icon"></i><a href="#">Allowed Mac applications</a></td><td>Allowlist</td><td>admin</td><td>admin</td><td>Oct 7, 2024 02:4...</td><td>Oct 7, 20...</td></tr>
          <tr><td><i class="fab fa-linux os-icon"></i><a href="#">Allowed Linux applications</a></td><td>Allowlist</td><td>admin</td><td>admin</td><td>Mar 10, 2026 09:1...</td><td>Mar 10, 20...</td></tr>
          <tr><td><i class="fab fa-windows os-icon"></i><a href="#">Blocked applications</a></td><td>Blocklist</td><td>admin</td><td>admin</td><td>Oct 7, 2024 01:2...</td><td>Oct 7, 20...</td></tr>
          <tr><td><i class="fab fa-apple os-icon"></i><a href="#">Blocked Mac Applications</a></td><td>Blocklist</td><td>admin</td><td>admin</td><td>Oct 7, 2024 02:4...</td><td>Oct 7, 20...</td></tr>
          <tr><td><i class="fab fa-windows os-icon"></i><a href="#">ManageEngine recommended blocklist for productivity</a></td><td>Blocklist</td><td>DC-SYSTEM-USER</td><td>DC-SYSTEM-US...</td><td>--</td><td>--</td></tr>
          <tr><td><i class="fab fa-windows os-icon"></i><a href="#">Development Tools</a></td><td><span class="group-badge generic">Application Group</span></td><td>admin</td><td>admin</td><td>Mar 10, 2026 09:1...</td><td>Mar 15, 20...</td></tr>
          <tr><td><i class="fab fa-apple os-icon"></i><a href="#">Communication Apps</a></td><td><span class="group-badge generic">Application Group</span></td><td>admin</td><td>admin</td><td>Mar 12, 2026 11:3...</td><td>Mar 16, 20...</td></tr>
          <tr><td><i class="fab fa-linux os-icon"></i><a href="#">Server Utilities</a></td><td><span class="group-badge generic">Application Group</span></td><td>admin</td><td>admin</td><td>Mar 14, 2026 02:4...</td><td>Mar 16, 20...</td></tr>
        </tbody>
      </table>
    </div>
    <div class="table-pagination">
      <span>1 - 9 of <a href="#" style="color:#1a73e8">Total Records</a></span>
      <select><option>25</option></select>
      <span class="page-btn">&lt;</span>
      <span class="page-btn">&gt;</span>
    </div>
    ${quickLinks('app-groups')}`,

  'child-process': () => `
    <div class="alert-banner info">
      <i class="fa fa-th"></i> Child Process control is currently available only for Windows.
    </div>
    <div class="child-proc-config">
      <div class="cp-header">
        <input type="checkbox" checked /> Global Child Process Configuration
      </div>
      <div class="cp-desc">All discovered endpoints will be allowed to run child processes only for applications included here.</div>
      <div class="cp-apps-row">
        <label>Select applications :</label>
        <div class="cp-tags">
          <span class="cp-tag">git-credential-manager.exe</span>
          <span class="cp-tag">git-lfs.exe</span>
          <span class="cp-tag">backgroundTaskHost.exe</span>
          <span class="cp-tag">chrome_pwa_launcher.exe</span>
          <span class="cp-tag">notepad++.exe</span>
          <span class="cp-tag">ms-teams.exe</span>
          <span class="cp-tag">Google Chrome</span>
          <span class="cp-tag">Google Chrome Installer</span>
          <span class="cp-tag">Notepad++</span>
          <span class="cp-tag">WinGup for Notepad++</span>
          <span class="cp-tag">Git</span>
          <span class="cp-tag">Git</span>
        </div>
        <button class="btn" style="margin-left:8px">Browse</button>
      </div>
      <div class="cp-actions">
        <button class="btn">Apply</button>
        <button class="btn">Reset</button>
      </div>
    </div>
    <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>`,

  /* =================== POLICIES =================== */
  'deploy-policy': () => `
    <div class="page-title-bar">
      <i class="fa fa-shield-halved page-icon"></i>
      <h1>Deploy Policy <i class="fa fa-circle-info info-icon"></i></h1>
      <span class="tip-link"><i class="fa fa-lightbulb"></i> Have suggestions to enhance policy deployment?</span>
    </div>
    <div class="toolbar">
      <button class="btn btn-primary" onclick="openAssociateGroup()"><i class="fa fa-plus"></i> Associate Group</button>
      <div class="filter-group"><span class="filter-label">Filter By :</span>
        <select><option>Flexibility</option></select>
        <select><option>All</option></select>
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
          <th>Custom Group Name <i class="fa fa-sort sort-icon"></i></th>
          <th>Flexibility</th><th>Computer Count</th><th>Associated Policies</th><th>Deployment Status</th><th>Action</th>
        </tr></thead>
        <tbody>
          <tr><td><a href="#">All Computers Group</a></td><td><span class="flex-badge audit"><i class="fa fa-search" style="font-size:10px"></i> Audit Mode</span></td><td>3</td><td>2</td><td><span class="deploy-bar"><span class="fill blue" style="width:67%"></span></span>67%</td><td><i class="fa fa-ellipsis"></i></td></tr>
          <tr><td><a href="#">Engineering Group</a></td><td><span class="flex-badge audit"><i class="fa fa-search" style="font-size:10px"></i> Audit Mode</span></td><td>2</td><td>3</td><td><span class="deploy-bar"><span class="fill green" style="width:100%"></span></span>100%</td><td><i class="fa fa-ellipsis"></i></td></tr>
          <tr><td><a href="#">Support Group</a></td><td><span class="flex-badge strict"><i class="fa fa-circle" style="font-size:6px"></i> Strict Mode</span></td><td>2</td><td>1</td><td><span class="deploy-bar"><span class="fill orange" style="width:50%"></span></span>50%</td><td><i class="fa fa-ellipsis"></i></td></tr>
          <tr><td><a href="#">Windows Machines</a></td><td><span class="flex-badge audit"><i class="fa fa-search" style="font-size:10px"></i> Audit Mode</span></td><td>2</td><td>2</td><td><span class="deploy-bar"><span class="fill green" style="width:100%"></span></span>100%</td><td><i class="fa fa-ellipsis"></i></td></tr>
        </tbody>
      </table>
    </div>
    <div class="table-pagination">
      <span>1 - 4 of <a href="#" style="color:#1a73e8">Total Records</a></span>
      <select><option>25</option></select>
      <span class="page-btn">&lt;</span>
      <span class="page-btn">&gt;</span>
    </div>
    ${quickLinks('deploy-policy')}`,

  /* Saved policies — shown in the create-policy table view */
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
          <tr><td><a href="#" onclick="openCreatePolicy('windows');return false">Windows Strict Policy</a></td><td><i class="fab fa-windows os-icon"></i>Windows</td><td><span class="flex-badge strict"><i class="fa fa-circle" style="font-size:6px"></i> Strict</span></td><td>2</td><td>1</td><td>Mar 10, 2026 09:1...</td><td>Mar 16, 20...</td><td><i class="fa fa-ellipsis"></i></td></tr>
          <tr><td><a href="#" onclick="openCreatePolicy('windows');return false">Windows Audit Policy</a></td><td><i class="fab fa-windows os-icon"></i>Windows</td><td><span class="flex-badge audit"><i class="fa fa-search" style="font-size:10px"></i> Audit</span></td><td>3</td><td>1</td><td>Mar 12, 2026 11:3...</td><td>Mar 16, 20...</td><td><i class="fa fa-ellipsis"></i></td></tr>
          <tr><td><a href="#" onclick="openCreatePolicy('mac');return false">Mac Audit Policy</a></td><td><i class="fab fa-apple os-icon"></i>Mac</td><td><span class="flex-badge audit"><i class="fa fa-search" style="font-size:10px"></i> Audit</span></td><td>1</td><td>1</td><td>Mar 14, 2026 02:4...</td><td>Mar 16, 20...</td><td><i class="fa fa-ellipsis"></i></td></tr>
          <tr><td><a href="#" onclick="openCreatePolicy('linux');return false">Linux Strict Policy</a></td><td><i class="fab fa-linux os-icon"></i>Linux</td><td><span class="flex-badge strict"><i class="fa fa-circle" style="font-size:6px"></i> Strict</span></td><td>1</td><td>0</td><td>Mar 15, 2026 10:0...</td><td>Mar 17, 20...</td><td><i class="fa fa-ellipsis"></i></td></tr>
          <tr><td><a href="#" onclick="openCreatePolicy('linux');return false">Linux Audit Policy</a></td><td><i class="fab fa-linux os-icon"></i>Linux</td><td><span class="flex-badge audit"><i class="fa fa-search" style="font-size:10px"></i> Audit</span></td><td>2</td><td>1</td><td>Mar 16, 2026 08:2...</td><td>Mar 17, 20...</td><td><i class="fa fa-ellipsis"></i></td></tr>
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

  'jit-access': () => `
    <div class="page-title-bar">
      <i class="fa fa-clock page-icon"></i>
      <h1>Just In Time Access <i class="fa fa-circle-info info-icon"></i></h1>
      <span class="tip-link"><i class="fa fa-gear"></i> Want to customize application control rules?</span>
    </div>
    <div class="toolbar">
      <button class="btn btn-primary"><i class="fa fa-plus"></i> Create <i class="fa fa-caret-down" style="font-size:10px"></i></button>
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
          <th>Policy Name</th><th>Computer Name</th><th>Status</th><th>Duration Type</th><th>Applied Time</th><th>Expiry Date</th><th>Action</th>
        </tr></thead>
        <tbody>
          <tr><td><input type="checkbox" /></td><td><a href="#">JIT Window</a></td><td><i class="fa fa-th os-icon"></i>ues-w10-cloud1</td><td>Failed</td><td>Window</td><td>--</td><td>Feb 27, 2026 0...</td><td><i class="fa fa-ellipsis"></i></td></tr>
          <tr><td><input type="checkbox" /></td><td><a href="#">JIT All elevation with data</a></td><td><i class="fa fa-th os-icon"></i>ues-w10-cloud1</td><td>Succeeded</td><td>Fixed</td><td>Oct 7, 2024 04:1...</td><td>Dec 2, 2025 02...</td><td><i class="fa fa-ellipsis"></i></td></tr>
          <tr><td><input type="checkbox" /></td><td><a href="#">JIT Mac</a></td><td><i class="fa fa-apple-whole os-icon"></i>uesqa-test11</td><td>Succeeded</td><td>Fixed</td><td>Oct 7, 2024 04:1...</td><td>Dec 2, 2025 12...</td><td><i class="fa fa-ellipsis"></i></td></tr>
          <tr><td><input type="checkbox" /></td><td><a href="#">JIT ALL Allowed and blocked</a></td><td><i class="fa fa-th os-icon"></i>ues-w10-cloud1</td><td>Succeeded</td><td>Fixed</td><td>Oct 7, 2024 04:1...</td><td>Dec 2, 2025 12...</td><td><i class="fa fa-ellipsis"></i></td></tr>
          <tr><td><input type="checkbox" /></td><td><a href="#">JIT Specific elevation</a></td><td><i class="fa fa-th os-icon"></i>ues-w10-cloud1</td><td>Succeeded</td><td>Fixed</td><td>Oct 7, 2024 04:1...</td><td>Dec 2, 2025 12...</td><td><i class="fa fa-ellipsis"></i></td></tr>
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
    ${quickLinks('priv-mgmt')}`,

  'remove-admin': () => `
    <div class="page-title-bar"><i class="fa fa-user-shield page-icon"></i><h1>Remove Admin Rights</h1></div>
    <div class="content-inner">
      <div class="summary-panel">
        <div class="summary-header"><span>Admin Rights Removal</span></div>
        <div style="padding:40px;text-align:center;color:#999"><i class="fa fa-users" style="font-size:48px;margin-bottom:12px;display:block"></i><p>No data available</p></div>
      </div>
    </div>`,

  /* =================== SYSTEMS =================== */
  systems: () => `
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
          <thead><tr><th>Computer Name <i class="fa fa-sort sort-icon"></i></th><th>Domain</th><th>Agent Version</th><th>Associated Application Group(s)</th><th>Operating System</th><th>IP Address</th><th>Associated...</th></tr></thead>
          <tbody>
            <tr><td><i class="fa fa-th os-icon"></i>ues-w10-cloud1</td><td>WORKGROUP</td><td>11.3.2432.1.W</td><td>4</td><td>Windows 11 Professional Edition (x64)</td><td>192.168.140.39</td><td>2</td></tr>
            <tr><td><i class="fa fa-apple-whole os-icon"></i>uesqa-test11</td><td>WORKGROUP</td><td>11.3.2432.1.M</td><td>5</td><td>macOS - Sonoma</td><td>172.24.103.202</td><td>0</td></tr>
            <tr><td><i class="fa fa-th os-icon"></i>uesqa-w10-2</td><td>WORKGROUP</td><td>11.4.2514.01.W</td><td>5</td><td>Windows 10 Professional Edition (x64)</td><td>10.71.31.209,192.168....</td><td>4</td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-pagination">
        <span>1 - 3 of <a href="#" style="color:#1a73e8">Total Records</a></span>
        <select><option>25</option></select>
        <span class="page-btn">&lt;</span><span class="page-btn">&gt;</span>
      </div>
    </div>
    <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>`,

  /* =================== SETTINGS =================== */
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

  /* =================== REPORTS =================== */
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

  'ac-reports': () => `
    <div class="alert-banner info" style="border-radius:0;border-bottom:1px solid #c8dafe">
      <i class="fa fa-circle-info"></i>
      <span>Application Control reports will include data from the last 90 days, with older data automatically cleaned up. To retain historical data, use <a href="#" style="color:#1a73e8">scheduled reports to back up the events periodically</a></span>
    </div>
    <div class="reports-grid">
      <div class="report-category">
        <h3 class="report-cat-title">Discovered Applications Reports</h3>
        <a class="report-link" onclick="showSubReport('rpt-discovered-products')">&rsaquo; Discovered Products</a>
        <a class="report-link" onclick="showSubReport('rpt-discovered-unverified-exe')">&rsaquo; Discovered Unverified Executables</a>
        <a class="report-link" onclick="showSubReport('rpt-discovered-store-apps')">&rsaquo; Discovered Store Applications</a>
        <a class="report-link" onclick="showSubReport('rpt-discovered-child-process')">&rsaquo; Discovered Child Process</a>
      </div>
      <div class="report-category">
        <h3 class="report-cat-title">Unmanaged Application Reports</h3>
        <a class="report-link" onclick="showSubReport('rpt-unmanaged-products')">&rsaquo; Unmanaged Products</a>
        <a class="report-link" onclick="showSubReport('rpt-unmanaged-executables')">&rsaquo; Unmanaged Executables</a>
        <a class="report-link" onclick="showSubReport('rpt-unmanaged-store-apps')">&rsaquo; Unmanaged Store Applications</a>
      </div>
      <div class="report-category">
        <h3 class="report-cat-title">Event Audit Reports</h3>
        <a class="report-link" onclick="showSubReport('rpt-blocklisted-app-access')">&rsaquo; Blocklisted Application Access</a>
        <a class="report-link" onclick="showSubReport('rpt-blocklisted-store-access')">&rsaquo; Blocklisted Store Applications Access</a>
        <a class="report-link" onclick="showSubReport('rpt-elevated-with-reason')">&rsaquo; Applications Elevated with Reason</a>
        <a class="report-link" onclick="showSubReport('rpt-admin-privileges')">&rsaquo; Applications running with Administrator Privileges</a>
      </div>
    </div>
    <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>`,

  /* --- Sub-report pages --- */
  'rpt-discovered-products': () => reportPage('Discovered Products',
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

  'rpt-discovered-unverified-exe': () => reportPage('Discovered Unverified Executables',
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

  'rpt-discovered-store-apps': () => reportPage('Discovered Store Applications',
    ['Application Name','Publisher','Platform','Resource Count'],
    [
      ['Microsoft Edge WebView2 Runtime','Microsoft Corporation','Windows','1'],
      ['App Installer','Microsoft Corporation','Windows','1'],
    ], '1 - 2 of'),

  'rpt-discovered-child-process': () => reportPage('Discovered Child Process',
    ['Parent Application','Child Process','Computer Name','Detected Time'],
    [
      ['chrome.exe','chrome_pwa_launcher.exe','ues-w10-cloud1','Mar 16, 2026 10:15 AM'],
      ['notepad++.exe','gup.exe','ues-w10-cloud1','Mar 15, 2026 04:32 PM'],
      ['ms-teams.exe','msedgewebview2.exe','uesqa-w10-2','Mar 15, 2026 02:18 PM'],
      ['git.exe','git-credential-manager.exe','ues-w10-cloud1','Mar 14, 2026 11:45 AM'],
      ['git.exe','git-lfs.exe','uesqa-w10-2','Mar 14, 2026 09:20 AM'],
      ['backgroundTaskHost.exe','RuntimeBroker.exe','ues-w10-cloud1','Mar 13, 2026 03:55 PM'],
    ], '1 - 6 of'),

  'rpt-unmanaged-products': () => reportPage('Unmanaged Products',
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

  'rpt-unmanaged-executables': () => reportPage('Unmanaged Executables',
    ['Executable Name','Vendor','Product Name','Resource Count'],
    [
      ['CocoaApplet','--','Cocoa-AppleScript Applet.app','1'],
      ['GarageBand','Apple Mac OS Application Signing','GarageBand.app','1'],
      ['java','Eclipse Foundation, Inc.','--','1'],
      ['Keynote','Apple Mac OS Application Signing','Keynote.app','1'],
    ], '1 - 4 of'),

  'rpt-unmanaged-store-apps': () => reportPage('Unmanaged Store Applications',
    ['Application Name','Publisher','Platform','Resource Count'],
    [
      ['Microsoft Edge WebView2 Runtime','Microsoft Corporation','Windows','1'],
    ], '1 - 1 of'),

  'rpt-blocklisted-app-access': () => reportPage('Blocklisted Application Access',
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

  'rpt-blocklisted-store-access': () => reportPage('Blocklisted Store Applications Access',
    ['Application Name','Publisher','Platform','Access Count','Last Accessed'],
    [
      ['Microsoft Edge WebView2 Runtime','Microsoft Corporation','Windows','<a href="#">3</a>','Mar 15, 2026 10:32 AM'],
      ['App Installer','Microsoft Corporation','Windows','<a href="#">2</a>','Mar 14, 2026 03:18 PM'],
      ['Windows Terminal','Microsoft Corporation','Windows','<a href="#">1</a>','Mar 12, 2026 09:45 AM'],
      ['Snipping Tool','Microsoft Corporation','Windows','<a href="#">1</a>','Mar 10, 2026 02:21 PM'],
    ], '1 - 4 of'),

  'rpt-elevated-with-reason': () => reportPage('Applications Elevated with Reason',
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

  'rpt-admin-privileges': () => reportPage('Applications running with Administrator Privileges',
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

  /* =================== AGENT =================== */
  'agent-summary': () => `
    <div class="agent-summary">
      <div class="agent-box">
        <div class="agent-count managed">3</div>
        <div class="agent-text">Managed computers</div>
        <div class="agent-icon"><i class="fa fa-desktop"></i> <i class="fa fa-check-circle" style="color:#43a047;font-size:20px;position:relative;top:-10px"></i></div>
      </div>
      <div class="agent-box">
        <div class="agent-count waiting">0</div>
        <div class="agent-text">Waiting computers <i class="fa fa-circle-question" style="color:#999;font-size:11px"></i></div>
        <div class="agent-icon"><i class="fa fa-desktop"></i></div>
      </div>
    </div>
    <div class="agent-panels">
      <div class="agent-panel">
        <h4>OS Platform <i class="fa fa-copy" style="float:right;color:#999;cursor:pointer"></i></h4>
        <div class="os-chart">
          <div class="os-bar-col"><div class="os-bar windows" style="height:60px"></div><div class="os-bar-label">Windows</div></div>
          <div class="os-bar-col"><div class="os-bar mac" style="height:30px"></div><div class="os-bar-label">Mac</div></div>
          <div class="os-bar-col"><div class="os-bar linux" style="height:0px;min-height:2px"></div><div class="os-bar-label">Linux</div></div>
        </div>
      </div>
      <div class="agent-panel">
        <h4>Agent Installation/Uninstallation Summary</h4>
        <div class="summary-row"><span class="sum-label">Total Computers</span><span class="sum-sep">:</span><span class="sum-value"><a href="#">3</a></span></div>
        <div class="summary-row"><span class="sum-label">Installation Succeeded</span><span class="sum-sep">:</span><span class="sum-value"><a href="#">3</a></span></div>
        <div class="summary-row"><span class="sum-label">Installation Failed</span><span class="sum-sep">:</span><span class="sum-value">0</span></div>
        <div class="summary-row"><span class="sum-label">Yet to Install</span><span class="sum-sep">:</span><span class="sum-value">0</span></div>
        <div class="summary-row"><span class="sum-label">Uninstallation Succeeded</span><span class="sum-sep">:</span><span class="sum-value">0</span></div>
        <div class="summary-row"><span class="sum-label">Uninstallation Failed</span><span class="sum-sep">:</span><span class="sum-value">0</span></div>
        <div class="summary-row"><span class="sum-label">Re-Installation Failed</span><span class="sum-sep">:</span><span class="sum-value">0</span></div>
      </div>
    </div>
    <div class="agent-panels">
      <div class="agent-panel">
        <h4>Agent Installation Failed</h4>
        <table class="data-table"><thead><tr><th>Reason for Failure <i class="fa fa-sort sort-icon"></i></th><th>Computers</th></tr></thead>
        <tbody><tr><td colspan="2" style="text-align:center;color:#999;padding:16px">No data available</td></tr></tbody></table>
      </div>
      <div class="agent-panel">
        <h4>Agent Version</h4>
        <table class="data-table"><thead><tr><th>Agent Version <i class="fa fa-sort sort-icon"></i></th><th>Computers</th></tr></thead>
        <tbody>
          <tr><td>11.4.2514.01.W</td><td><a href="#">1</a></td></tr>
          <tr><td>11.3.2432.1.W</td><td><a href="#">1</a></td></tr>
        </tbody></table>
      </div>
    </div>`,

  'agent-domain': () => stubPage('Domain', 'No domains configured.'),
  'agent-remote-offices': () => stubPage('Remote Offices', 'No remote offices configured.'),
  'agent-computers': () => stubPage('Computers', 'View managed computers from the Systems module.'),
  'agent-installation': () => stubPage('Agent Installation', 'Configure agent installation settings.'),
  'ad-sync': () => stubPage('Active Directory Sync', 'Configure Active Directory synchronization.'),
  'inactive-policy': () => stubPage('Inactive Computer Policy', 'Configure policies for inactive computers.'),
  'agent-settings': () => stubPage('Agent Settings', 'Configure agent communication settings.'),
  'ip-scope': () => stubPage('IP Scope', 'Define IP address ranges for agent discovery.'),
  'som-settings': () => stubPage('SoM Settings', 'Configure Scope of Management settings.'),
  'replication-policy': () => stubPage('Replication Policy', 'Configure replication policies for remote offices.'),

  /* =================== ADMIN =================== */
  admin: () => `
    <div class="content-inner">
      <div class="admin-search"><input type="text" placeholder="Search Settings" /></div>
      <div class="admin-grid">
        <div class="admin-card">
          <h3><i class="fa fa-gear"></i> Global Settings</h3>
          <div class="admin-links">
            <a href="#">Custom Group</a><span class="sep">|</span>
            <a href="#">Rebranding</a><span class="sep">|</span>
            <a href="#">Credential Manager</a><span class="sep">|</span><br/>
            <a href="#">Add Custom Data for Computers</a>
          </div>
        </div>
        <div class="admin-card">
          <h3><i class="fa fa-user"></i> User Administration</h3>
          <div class="admin-links">
            <a href="#">Users</a><span class="sep">|</span>
            <a href="#">Role</a><span class="sep">|</span>
            <a href="#">SAML Authentication</a>
          </div>
        </div>
        <div class="admin-card">
          <h3><i class="fa fa-robot"></i> Agent</h3>
          <div class="admin-links">
            <a href="#">Agent Settings</a><span class="sep">|</span>
            <a href="#">SoM Settings</a>
          </div>
        </div>
        <div class="admin-card">
          <h3><i class="fa fa-server"></i> Server Settings</h3>
          <div class="admin-links">
            <a href="#">NAT Settings</a><span class="sep">|</span>
            <a href="#">Mail Server</a><span class="sep">|</span><br/>
            <a href="#">Central Server Maintenance</a><span class="sep">|</span><br/>
            <a href="#">Central Server Settings</a><span class="sep">|</span>
            <a href="#">Failover Server</a> <span class="new-badge">✨</span><span class="sep">|</span><br/>
            <a href="#">Central Server Migration</a>
          </div>
        </div>
        <div class="admin-card">
          <h3><i class="fa fa-plug"></i> Integrations</h3>
          <div class="admin-links">
            <a href="#">ServiceDesk Plus Settings</a><span class="sep">|</span><br/>
            <a href="#">API Key Management</a> <span class="new-badge">✨</span><span class="sep">|</span>
            <a href="#">API Explorer</a><span class="sep">|</span><br/>
            <a href="#">PAM360 Settings</a><span class="sep">|</span>
            <a href="#">Syslog</a> <span class="new-badge">✨</span><span class="sep">|</span><br/>
            <a href="#" style="color:#1a73e8">Need More Integrations?</a>
          </div>
        </div>
        <div class="admin-card">
          <h3><i class="fa fa-shield-halved"></i> Security &amp; Privacy</h3>
          <div class="admin-links">
            <a href="#">Manage SSL Certificate</a><span class="sep">|</span>
            <a href="#">Security Settings</a><span class="sep">|</span><br/>
            <a href="#">Privacy Settings</a><span class="sep">|</span>
            <a href="#">Export Settings</a>
          </div>
        </div>
        <div class="admin-card">
          <h3><i class="fa fa-database"></i> Database Settings</h3>
          <div class="admin-links"><a href="#">Database Settings</a></div>
        </div>
        <div class="admin-card">
          <h3><i class="fa fa-clipboard-list"></i> Audit</h3>
          <div class="admin-links"><a href="#">Audit Logs</a></div>
        </div>
      </div>
    </div>`,

  /* =================== SUPPORT =================== */
  support: () => `
    <div class="content-inner" style="padding:40px;text-align:center">
      <i class="fa fa-headset" style="font-size:64px;color:#1a73e8;margin-bottom:16px;display:block"></i>
      <h2 style="margin-bottom:8px">Support</h2>
      <p style="color:#666;margin-bottom:24px">Get help with Application Control Plus</p>
      <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap">
        <div class="stat-card" style="min-width:200px"><div class="stat-label">Knowledge Base</div><a class="stat-link" href="#">Visit Help Center</a></div>
        <div class="stat-card" style="min-width:200px"><div class="stat-label">Community</div><a class="stat-link" href="#">Join Forum</a></div>
        <div class="stat-card" style="min-width:200px"><div class="stat-label">Contact</div><a class="stat-link" href="#">Submit Ticket</a></div>
      </div>
    </div>`,
};

/* === HELPERS === */
function hBar(items) {
  return items.map(it =>
    `<div class="bar-row">
      <span class="bar-label">${it.label}</span>
      <span class="bar-track"><span class="bar-fill ${it.color}" style="width:${it.pct}%"></span></span>
      ${it.count !== undefined ? `<span class="bar-count">${it.count}</span>` : ''}
    </div>`
  ).join('');
}

function quickLinks(ctx) {
  const items = {
    'app-groups': ['How to create an application group (allowlist/blocklist)?','How to check if the Vendor/Product/EXE is verified or not?'],
    'deploy-policy': ['How to create Custom Group?','How to deploy policy?','What are the different flexibility modes and how to enable them?','How to modify or delete an existing application control policy?'],
    'priv-mgmt': ['How to configure Privilege Management?','How to create elevation rules?'],
  };
  const list = items[ctx] || ['Documentation coming soon.'];
  return `<div class="quick-links">
    <div class="quick-links-header"><h3>Quick Links</h3><span class="toggle"><i class="fa fa-chevron-up"></i> Hide</span></div>
    <div class="ql-tabs"><div class="ql-tab active">How Tos</div><div class="ql-tab">FAQ</div></div>
    <div class="ql-content"><ol>${list.map((q,i) => `<li>${q}</li>`).join('')}</ol></div>
  </div>`;
}

function stubPage(title, desc) {
  return `<div class="page-title-bar"><i class="fa fa-file page-icon"></i><h1>${title}</h1></div>
    <div class="content-inner" style="text-align:center;padding:60px;color:#999">
      <i class="fa fa-folder-open" style="font-size:48px;margin-bottom:12px;display:block"></i>
      <p>${desc}</p>
    </div>`;
}

/** Generic sub-report page generator with breadcrumb, filter, table */
function reportPage(title, headers, rows, paginationText) {
  const empty = rows.length === 0;
  return `
    <div class="report-breadcrumb">
      <a href="#" onclick="showSubReport('ac-reports');return false">Application Control Reports</a>
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
        <span class="sep" style="color:#ccc;margin:0 2px">|</span>
        <span class="icon-btn"><i class="fa fa-search"></i></span>
        <span class="icon-btn"><i class="fa fa-columns"></i></span>
        <span class="icon-btn"><i class="fa fa-download"></i></span>
      </div>
    </div>
    <div class="table-wrap">
      <table class="data-table">
        <thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
        <tbody>${empty
          ? `<tr><td colspan="${headers.length}" style="text-align:center;color:#999;padding:24px">No data available</td></tr>`
          : rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')
        }</tbody>
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

/** Open the Create Group form for a given type and platform */
function openCreateGroup(type, platform) {
  document.querySelectorAll('.btn-dropdown-wrap.open').forEach(e => e.classList.remove('open'));
  const content = document.getElementById('pageContent');
  if (content) {
    content.innerHTML = createGroupForm(type, platform);
    content.scrollTop = 0;
  }
}

/** Generate the Create Group form page — matches demo layout */
function createGroupForm(type, platform) {
  const platformLabels = { windows: 'Windows', mac: 'Mac', linux: 'Linux' };
  const platformIcons = { windows: 'fab fa-windows', mac: 'fab fa-apple', linux: 'fab fa-linux' };
  const pLabel = platformLabels[platform] || platform;
  const pIcon = platformIcons[platform] || 'fab fa-windows';
  const isBlock = type === 'Blocklist';
  const isAllow = type === 'Allowlist';
  const isGeneric = type === 'Application Group';
  const breadcrumb = isGeneric ? 'Application Group Creation'
                   : isAllow  ? 'Allowlist Creation'
                              : 'Blocklist Creation';

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
    {vendor:'.NET', verified:true, items:['.NET','Microsoft® .NET']},
    {vendor:'Avast Software s.r.o.', verified:true, items:['Avast Antivirus','Avast','Antivirus Installer','Avast Antivirus','MDES SDK V4']},
    {vendor:'Brave Software, Inc.', verified:true, items:['Brave Browser','Brave Installer','Brave VPN Wireguard Service']},
    {vendor:'Google LLC', verified:true, items:['Google Chrome','Google Chrome Installer','Google Update Helper']},
    {vendor:'JetBrains s.r.o.', verified:true, items:['IntelliJ Platform','IntelliJ IDEA']},
    {vendor:'Microsoft Corporation', verified:true, items:['Microsoft 365 and Office','Microsoft Edge','Microsoft Remote Desktop','Windows Terminal']},
    {vendor:'Mozilla Corporation', verified:true, items:['Firefox']},
    {vendor:'VideoLAN', verified:true, items:['VLC media player']},
  ];

  /* Linux-only extra rule type */
  const linuxTrustedRepo = platform === 'linux' ? `
    <div class="cg-rule-section">
      <div class="cg-rule-tab active" onclick="switchRuleTab(this, 'trustedrepo')">Trusted Repository</div>
    </div>
    <div class="cg-rule-content" id="trustedrepo-content">
      <div class="alert-banner info" style="margin:0;border-radius:0;border-bottom:1px solid #c8dafe">
        <i class="fa fa-circle-info"></i>
        <span>Add trusted package repositories (APT/YUM/DNF). Applications from these repositories will be automatically trusted.</span>
      </div>
      <div style="padding:16px 28px">
        <div style="display:flex;gap:8px;margin-bottom:12px">
          <input type="text" class="form-input" placeholder="e.g. https://packages.microsoft.com/repos/code" style="flex:1;min-width:auto" />
          <button class="btn" style="padding:7px 14px;font-size:13px;border:1px solid #dadce0;border-radius:4px;background:#fff;cursor:pointer"><i class="fa fa-plus"></i> Add Repository</button>
        </div>
        <div class="app-list-empty" style="padding:20px"><i class="fa fa-server" style="font-size:28px;color:#ccc;display:block;margin-bottom:6px"></i>No trusted repositories added yet.</div>
      </div>
    </div>` : '';

  const vendorCards = vendors.map(v =>
    `<div class="vendor-card">
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
      <div class="product-cards">
        ${g.items.map(p => `<div class="product-card"><span>${p}</span><span class="vendor-info"><i class="fa fa-circle-info"></i></span></div>`).join('')}
      </div>
    </div>`
  ).join('');

  return `
    <div class="cg-page">
      <div class="cg-breadcrumb">
        <a href="#" onclick="showSubReport('app-groups');return false">Application Groups</a>
        <span class="bc-sep">&rsaquo;</span>
        <span class="bc-current">${breadcrumb}</span>
        <span class="platform-badge"><i class="${pIcon}"></i> ${pLabel}</span>
      </div>

      <div class="cg-header">
        <i class="fa fa-th-large cg-icon"></i>
        <input type="text" class="cg-name-input" placeholder="Application Group Name" />
        <a href="#" class="form-action-link">Add Description</a>
      </div>

      <div class="cg-toolbar">
        <select class="cg-filter-select"><option>All</option><option>Vendor</option><option>Products</option><option>Executables</option><option>File Hash</option><option>Folder Path</option>${platform === 'linux' ? '<option>Trusted Repository</option>' : ''}</select>
        <div class="cg-search-wrap">
          <i class="fa fa-search cg-search-icon"></i>
          <input type="text" class="cg-search-input" placeholder="Search" />
        </div>
        <div class="cg-toolbar-right">
          <a href="#" class="cg-action"><i class="fa fa-plus"></i> Add</a>
          <span class="cg-sep">|</span>
          <a href="#" class="cg-action"><i class="fa fa-download"></i> Import</a>
          <span class="cg-sep">|</span>
          <span class="cg-selected">Selected (0)</span>
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
        <div class="cg-section-header">Vendor</div>
        <div class="vendor-grid">${vendorCards}</div>

        <div class="cg-section-header" style="border-top:1px solid #e8e8e8">Products</div>
        ${productList}
      </div>

      ${linuxTrustedRepo}

      <div class="form-actions" style="background:#fff">
        <button class="btn-form">Create</button>
        <button class="btn-form" onclick="showSubReport('app-groups')">Cancel</button>
      </div>
      <div class="restricted-warning"><i class="fa fa-exclamation-circle"></i> [ Running in restricted mode. ]</div>
      <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>
    </div>`;
}

/** Switch between Vendor / Products tab in create group */
function switchCgView(tab, view) {
  document.querySelectorAll('.cg-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  document.querySelectorAll('.cg-view').forEach(v => v.style.display = 'none');
  const el = document.getElementById('cg-' + view + '-view');
  if (el) el.style.display = '';
}

/** Switch rule tab (for Linux Trusted Repository) */
function switchRuleTab(tab, view) {
  document.querySelectorAll('.cg-rule-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
}

/** Navigate to a sub-report page within Application Control Reports */
function showSubReport(pageId) {
  const gen = PAGES[pageId];
  if (!gen) return;
  const content = document.getElementById('pageContent');
  if (content) {
    content.innerHTML = gen();
    content.scrollTop = 0;
  }
}

/* ================================================================
 *  POLICY CREATION — Platform-aware form
 * ================================================================ */

/** Available application groups for the policy form tag pickers */
const POLICY_APP_GROUPS = {
  allowlist: [
    { name: 'Allowed applications', platform: 'windows' },
    { name: 'Allowed Mac applications', platform: 'mac' },
    { name: 'Allowed Linux applications', platform: 'linux' },
  ],
  blocklist: [
    { name: 'Blocked applications', platform: 'windows' },
    { name: 'Blocked Mac Applications', platform: 'mac' },
    { name: 'ManageEngine recommended blocklist for productivity', platform: 'windows' },
  ],
  generic: [
    { name: 'Development Tools', platform: 'windows' },
    { name: 'Communication Apps', platform: 'mac' },
    { name: 'Server Utilities', platform: 'linux' },
  ]
};

/** Open the create-policy form for a given platform */
function openCreatePolicy(platform) {
  document.querySelectorAll('.btn-dropdown-wrap.open').forEach(e => e.classList.remove('open'));
  const content = document.getElementById('pageContent');
  if (content) {
    content.innerHTML = createPolicyForm(platform);
    content.scrollTop = 0;
    initPolicyFormListeners(platform);
  }
}

/** Generate the policy creation form based on selected platform */
function createPolicyForm(platform) {
  const platformLabels = { windows: 'Windows', mac: 'Mac', linux: 'Linux' };
  const platformIcons  = { windows: 'fab fa-windows', mac: 'fab fa-apple', linux: 'fab fa-linux' };
  const pLabel = platformLabels[platform] || platform;
  const pIcon  = platformIcons[platform]  || 'fab fa-windows';

  const isWindows = platform === 'windows';
  const isLinux   = platform === 'linux';
  const isMac     = platform === 'mac';

  /* Build dropdown options for each tag picker */
  const allowlistOptions = [...POLICY_APP_GROUPS.allowlist, ...POLICY_APP_GROUPS.generic]
    .map(g => `<div class="ptag-dropdown-item" onclick="addPolicyTag('allowlist-tags','${g.name}')">${g.name}</div>`).join('');

  const blocklistOptions = [...POLICY_APP_GROUPS.blocklist, ...POLICY_APP_GROUPS.generic]
    .map(g => `<div class="ptag-dropdown-item" onclick="addPolicyTag('blocklist-tags','${g.name}')">${g.name}</div>`).join('');

  const genericOptions = POLICY_APP_GROUPS.generic
    .map(g => `<div class="ptag-dropdown-item" onclick="addPolicyTag('childproc-tags','${g.name}', true)">${g.name}</div>`).join('');

  const privilegedOptions = [...POLICY_APP_GROUPS.allowlist, ...POLICY_APP_GROUPS.blocklist, ...POLICY_APP_GROUPS.generic]
    .map(g => `<div class="ptag-dropdown-item" onclick="addPolicyTag('privileged-tags','${g.name}')">${g.name}</div>`).join('');

  /* Privileged Application List — Windows only */
  const privilegedSection = isWindows ? `
        <div class="form-row">
          <span class="form-label">Associate Privileged Application List <i class="fa fa-circle-question" style="color:#999;font-size:11px"></i></span>
          <div class="form-control-group">
            <label class="radio-label"><input type="radio" name="privlist" value="yes" onclick="document.getElementById('privileged-picker').style.display=''"/> Yes</label>
            <label class="radio-label"><input type="radio" name="privlist" value="no" checked onclick="document.getElementById('privileged-picker').style.display='none'"/> No</label>
            <a href="#" class="form-action-link">Update Privileged List</a>
          </div>
        </div>
        <div id="privileged-picker" class="form-row" style="display:none">
          <span class="form-label">Privileged Application Group(s)</span>
          <div class="form-control-group" style="flex-direction:column;align-items:flex-start;gap:8px">
            <div class="ptag-input-wrap">
              <div class="ptag-tags" id="privileged-tags"></div>
              <input type="text" class="ptag-input" placeholder="Search application groups..." onfocus="this.parentElement.querySelector('.ptag-dropdown').style.display='block'" oninput="filterPolicyDropdown(this)" />
              <div class="ptag-dropdown">${privilegedOptions}</div>
            </div>
          </div>
        </div>` : '';

  /* Strict mode sub-option — Windows & Linux only */
  const strictSubOption = (isWindows || isLinux) ? `
            <div class="mode-sub-option">
              <input type="checkbox" id="strict-allow-request" />
              <label for="strict-allow-request">Allow users to request applications which are unmanaged.${isWindows ? ' (Windows Only)' : ''}</label>
            </div>` : '';

  return `
    <div class="form-page">
      <div class="form-page-header">
        <a href="#" class="back-arrow" onclick="showSubReport('deploy-policy');return false"><i class="fa fa-arrow-left"></i></a>
        <h1>Create Policy</h1>
        <span class="platform-badge"><i class="${pIcon}"></i> ${pLabel}</span>
      </div>

      <!-- Configure Association Policy -->
      <div class="form-section">
        <div class="form-section-title">Configure Association Policy</div>

        <div class="form-row">
          <span class="form-label">Application Group(s) Associated <span class="req">*</span></span>
          <div class="form-control-group" style="flex-direction:column;align-items:flex-start;gap:12px;width:100%">
            <!-- Allowlist -->
            <div style="width:100%">
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:6px">
                <span style="font-size:13px;color:#555;min-width:80px">Allowlist</span>
                <div class="ptag-input-wrap" style="flex:1">
                  <div class="ptag-tags" id="allowlist-tags"></div>
                  <input type="text" class="ptag-input" placeholder="Add allowlist application groups..." onfocus="this.parentElement.querySelector('.ptag-dropdown').style.display='block'" oninput="filterPolicyDropdown(this)" />
                  <div class="ptag-dropdown">${allowlistOptions}</div>
                </div>
                <span class="form-icon-btn" onclick="document.getElementById('allowlist-tags').parentElement.querySelector('input').focus()"><i class="fa fa-sync"></i></span>
                <div class="btn-dropdown-wrap" style="display:inline-block">
                  <a href="#" class="form-action-link" onclick="this.parentElement.classList.toggle('open');return false">Create Allowlist <i class="fa fa-caret-down" style="font-size:10px"></i></a>
                  <div class="btn-dropdown-menu" style="min-width:140px">
                    <a href="#" onclick="openCreateGroup('Allowlist','windows');return false"><i class="fab fa-windows"></i> Windows</a>
                    <a href="#" onclick="openCreateGroup('Allowlist','mac');return false"><i class="fab fa-apple"></i> Mac</a>
                    <a href="#" onclick="openCreateGroup('Allowlist','linux');return false"><i class="fab fa-linux"></i> Linux</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- Blocklist -->
            <div style="width:100%">
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:6px">
                <span style="font-size:13px;color:#555;min-width:80px">Blocklist</span>
                <div class="ptag-input-wrap" style="flex:1">
                  <div class="ptag-tags" id="blocklist-tags"></div>
                  <input type="text" class="ptag-input" placeholder="Add blocklist application groups..." onfocus="this.parentElement.querySelector('.ptag-dropdown').style.display='block'" oninput="filterPolicyDropdown(this)" />
                  <div class="ptag-dropdown">${blocklistOptions}</div>
                </div>
                <span class="form-icon-btn" onclick="document.getElementById('blocklist-tags').parentElement.querySelector('input').focus()"><i class="fa fa-sync"></i></span>
                <div class="btn-dropdown-wrap" style="display:inline-block">
                  <a href="#" class="form-action-link" onclick="this.parentElement.classList.toggle('open');return false">Create Blocklist <i class="fa fa-caret-down" style="font-size:10px"></i></a>
                  <div class="btn-dropdown-menu" style="min-width:140px">
                    <a href="#" onclick="openCreateGroup('Blocklist','windows');return false"><i class="fab fa-windows"></i> Windows</a>
                    <a href="#" onclick="openCreateGroup('Blocklist','mac');return false"><i class="fab fa-apple"></i> Mac</a>
                    <a href="#" onclick="openCreateGroup('Blocklist','linux');return false"><i class="fab fa-linux"></i> Linux</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

${privilegedSection}

        <!-- Mode Selection -->
        <div class="mode-options">
          <label class="mode-option selected" id="mode-audit" onclick="selectPolicyMode('audit')">
            <input type="radio" name="mode" value="audit" checked />
            <div>
              <strong>Audit Mode</strong>
              <div class="mode-desc">Except blocked applications, all other applications will be allowed to run. This allows you to audit the unmanaged applications usage and redefine your allowlist/ blocklist</div>
            </div>
          </label>
          <label class="mode-option" id="mode-strict" onclick="selectPolicyMode('strict')">
            <input type="radio" name="mode" value="strict" />
            <div>
              <strong>Strict Mode</strong>
              <div class="mode-desc">Enforce strict mode if you need to run only list of allowed applications.</div>
            </div>
${strictSubOption}
          </label>
        </div>
        <div class="form-note"><strong>Note :</strong> Blocked applications will not be allowed to run in any mode.</div>
      </div>

      <!-- Child Process Application List -->
      <div class="form-section">
        <div class="form-section-title">Child Process Application List</div>
        <div class="form-row">
          <span class="form-label">Application Group(s) <i class="fa fa-circle-question" style="color:#999;font-size:11px" title="Select application groups whose child processes should be allowed. Enable Inherit to allow the entire child/grandchild chain, otherwise only the 1st child is allowed."></i></span>
          <div class="form-control-group" style="flex-direction:column;align-items:flex-start;gap:8px">
            <div class="ptag-input-wrap">
              <div class="ptag-tags" id="childproc-tags"></div>
              <input type="text" class="ptag-input" placeholder="Search generic application groups..." onfocus="this.parentElement.querySelector('.ptag-dropdown').style.display='block'" oninput="filterPolicyDropdown(this)" />
              <div class="ptag-dropdown">${genericOptions}</div>
            </div>
            <div class="childproc-hint"><i class="fa fa-circle-info" style="color:#1a73e8"></i> Use the <strong>Inherit</strong> checkbox on each group to allow the entire child/grandchild chain. When unchecked, only the immediate child process is allowed.</div>
          </div>
        </div>
      </div>

      <!-- Settings -->
      <div class="form-section">
        <div class="form-section-title">Settings</div>
        <div class="form-row">
          <span class="form-label">Customize alert notification</span>
          <div class="form-control-group">
            <label class="radio-label"><input type="radio" name="customalert" value="yes" onclick="document.getElementById('alert-msg-row').style.display=''" /> Yes</label>
            <label class="radio-label"><input type="radio" name="customalert" value="no" checked onclick="document.getElementById('alert-msg-row').style.display='none'" /> No</label>
          </div>
        </div>
        <div class="form-row" id="alert-msg-row" style="display:none">
          <span class="form-label">Alert message <i class="fa fa-circle-question" style="color:#999;font-size:11px"></i></span>
          <div class="form-control-group">
            <textarea class="form-textarea">This application has been blocked.\nContact your System Administrator.</textarea>
          </div>
        </div>
      </div>

      <div class="form-actions">
        <button class="btn-form primary">Save</button>
        <button class="btn-form" onclick="showSubReport('deploy-policy')">Cancel</button>
      </div>
      <div class="restricted-warning"><i class="fa fa-exclamation-circle"></i> [ Running in restricted mode. ]</div>
      <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>
    </div>`;
}

/** Add a tag chip to a policy tag container */
function addPolicyTag(containerId, name, withInherit) {
  const container = document.getElementById(containerId);
  if (!container) return;
  /* Prevent duplicates */
  const existing = container.querySelectorAll('.ptag');
  for (const t of existing) {
    if (t.dataset.name === name) return;
  }
  const tag = document.createElement('span');
  tag.className = 'ptag';
  tag.dataset.name = name;
  let inner = `<span class="ptag-text">${name}</span>`;
  if (withInherit) {
    inner += `<label class="ptag-inherit" title="Inherit: allow all children and grandchildren in the chain"><input type="checkbox" onchange="toggleInherit(this)" /> Inherit</label>`;
  }
  inner += `<span class="ptag-remove" onclick="removePolicyTag(this)">&times;</span>`;
  tag.innerHTML = inner;
  container.appendChild(tag);
  /* Close dropdown */
  const wrap = container.closest('.ptag-input-wrap');
  if (wrap) {
    const dd = wrap.querySelector('.ptag-dropdown');
    if (dd) dd.style.display = 'none';
    const inp = wrap.querySelector('.ptag-input');
    if (inp) { inp.value = ''; inp.blur(); }
  }
}

/** Remove a tag chip */
function removePolicyTag(el) {
  const tag = el.closest('.ptag');
  if (tag) tag.remove();
}

/** Toggle inherit state on a child-proc tag */
function toggleInherit(cb) {
  const tag = cb.closest('.ptag');
  if (!tag) return;
  tag.classList.toggle('inherited', cb.checked);
}

/** Filter dropdown items as user types */
function filterPolicyDropdown(input) {
  const dd = input.parentElement.querySelector('.ptag-dropdown');
  if (!dd) return;
  dd.style.display = 'block';
  const val = input.value.toLowerCase();
  dd.querySelectorAll('.ptag-dropdown-item').forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(val) ? '' : 'none';
  });
}

/** Select policy mode (audit/strict) and update UI */
function selectPolicyMode(mode) {
  const audit  = document.getElementById('mode-audit');
  const strict = document.getElementById('mode-strict');
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

/** Initialize event listeners for the policy form (close dropdowns on outside click) */
function initPolicyFormListeners(platform) {
  document.addEventListener('click', function policyDocClick(e) {
    /* Close tag-picker dropdowns when clicking outside */
    document.querySelectorAll('.ptag-input-wrap').forEach(wrap => {
      if (!wrap.contains(e.target)) {
        const dd = wrap.querySelector('.ptag-dropdown');
        if (dd) dd.style.display = 'none';
      }
    });
    /* Self-cleanup when form is gone */
    if (!document.getElementById('mode-audit')) {
      document.removeEventListener('click', policyDocClick);
    }
  });
}

/* ================================================================
 *  DEPLOY POLICY — Associate Group form
 * ================================================================ */

/** Open the Associate Group form in the deploy-policy page */
function openAssociateGroup() {
  const content = document.getElementById('pageContent');
  if (!content) return;
  content.innerHTML = `
    <div class="form-page">
      <div class="form-page-header">
        <a href="#" class="back-arrow" onclick="showSubReport('deploy-policy');return false"><i class="fa fa-arrow-left"></i></a>
        <h1>Associate Group</h1>
      </div>

      <div class="form-section">
        <div class="form-section-title">Define Target</div>
        <div class="form-row">
          <span class="form-label">Custom Group to be associated <span class="req">*</span></span>
          <div class="form-control-group">
            <select class="form-select">
              <option value="">Select Custom Group</option>
              <option>All Computers Group</option>
              <option>Engineering Group</option>
              <option>Support Group</option>
              <option>Windows Machines</option>
            </select>
            <a href="#" class="form-action-link">New Custom Group</a>
          </div>
        </div>
      </div>

      <div class="form-section">
        <div class="form-section-title">Select Policies to Associate</div>
        <div style="padding:12px 28px">
          <div class="toolbar" style="padding:0 0 12px">
            <div class="filter-group"><span class="filter-label">Filter By :</span>
              <select><option>Platform</option><option>Windows</option><option>Mac</option><option>Linux</option></select>
              <select><option>Mode</option><option>Audit</option><option>Strict</option></select>
            </div>
            <div class="toolbar-right">
              <span class="icon-btn"><i class="fa fa-search"></i></span>
            </div>
          </div>
          <div class="table-wrap" style="border:1px solid #e8e8e8;border-radius:6px">
            <table class="data-table">
              <thead><tr>
                <th style="width:30px"><input type="checkbox" onclick="toggleAllAssocPolicies(this)" /></th>
                <th>Policy Name <i class="fa fa-sort sort-icon"></i></th>
                <th>Platform</th><th>Mode</th><th>Allowlist Groups</th><th>Blocklist Groups</th>
              </tr></thead>
              <tbody>
                <tr><td><input type="checkbox" class="assoc-policy-cb" /></td><td>Windows Strict Policy</td><td><i class="fab fa-windows os-icon"></i>Windows</td><td><span class="flex-badge strict"><i class="fa fa-circle" style="font-size:6px"></i> Strict</span></td><td>2</td><td>1</td></tr>
                <tr><td><input type="checkbox" class="assoc-policy-cb" /></td><td>Windows Audit Policy</td><td><i class="fab fa-windows os-icon"></i>Windows</td><td><span class="flex-badge audit"><i class="fa fa-search" style="font-size:10px"></i> Audit</span></td><td>3</td><td>1</td></tr>
                <tr><td><input type="checkbox" class="assoc-policy-cb" /></td><td>Mac Audit Policy</td><td><i class="fab fa-apple os-icon"></i>Mac</td><td><span class="flex-badge audit"><i class="fa fa-search" style="font-size:10px"></i> Audit</span></td><td>1</td><td>1</td></tr>
                <tr><td><input type="checkbox" class="assoc-policy-cb" /></td><td>Linux Strict Policy</td><td><i class="fab fa-linux os-icon"></i>Linux</td><td><span class="flex-badge strict"><i class="fa fa-circle" style="font-size:6px"></i> Strict</span></td><td>1</td><td>0</td></tr>
                <tr><td><input type="checkbox" class="assoc-policy-cb" /></td><td>Linux Audit Policy</td><td><i class="fab fa-linux os-icon"></i>Linux</td><td><span class="flex-badge audit"><i class="fa fa-search" style="font-size:10px"></i> Audit</span></td><td>2</td><td>1</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="form-actions">
        <button class="btn-form primary">Deploy</button>
        <button class="btn-form">Deploy Immediately</button>
        <button class="btn-form" onclick="showSubReport('deploy-policy')">Cancel</button>
      </div>
      <div class="restricted-warning"><i class="fa fa-exclamation-circle"></i> [ Running in restricted mode. ]</div>
      <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>
    </div>`;
  content.scrollTop = 0;
}

/** Toggle all policy checkboxes in the Associate Group list */
function toggleAllAssocPolicies(masterCb) {
  document.querySelectorAll('.assoc-policy-cb').forEach(cb => {
    cb.checked = masterCb.checked;
  });
}

/* ================================================================
 *  DASHBOARD ALIAS — reuses home page content
 * ================================================================ */
PAGES.dashboard = PAGES.home;

/* ================================================================
 *  APPLICATION CONTROL POLICIES — per-platform saved policy views
 * ================================================================ */

function acpAllPoliciesPage() {
  const allPolicies = [
    { name: 'Windows Strict Policy', platform: 'windows', platformLabel: 'Windows', platformIcon: 'fab fa-windows', mode: 'strict', modeLabel: 'Strict', allowlist: 2, blocklist: 1, created: 'Mar 10, 2026 09:1...', modified: 'Mar 16, 20...' },
    { name: 'Windows Audit Policy', platform: 'windows', platformLabel: 'Windows', platformIcon: 'fab fa-windows', mode: 'audit', modeLabel: 'Audit', allowlist: 3, blocklist: 1, created: 'Mar 12, 2026 11:3...', modified: 'Mar 16, 20...' },
    { name: 'Mac Audit Policy', platform: 'mac', platformLabel: 'Mac', platformIcon: 'fab fa-apple', mode: 'audit', modeLabel: 'Audit', allowlist: 1, blocklist: 1, created: 'Mar 14, 2026 02:4...', modified: 'Mar 16, 20...' },
    { name: 'Linux Strict Policy', platform: 'linux', platformLabel: 'Linux', platformIcon: 'fab fa-linux', mode: 'strict', modeLabel: 'Strict', allowlist: 1, blocklist: 0, created: 'Mar 15, 2026 10:0...', modified: 'Mar 17, 20...' },
    { name: 'Linux Audit Policy', platform: 'linux', platformLabel: 'Linux', platformIcon: 'fab fa-linux', mode: 'audit', modeLabel: 'Audit', allowlist: 2, blocklist: 1, created: 'Mar 16, 2026 08:2...', modified: 'Mar 17, 20...' },
  ];
  const rows = allPolicies.map(p => {
    const modeIcon = p.mode === 'strict'
      ? '<i class="fa fa-circle" style="font-size:6px"></i>'
      : '<i class="fa fa-search" style="font-size:10px"></i>';
    return `<tr>
      <td><a href="#" onclick="openCreatePolicy('${p.platform}');return false">${p.name}</a></td>
      <td><i class="${p.platformIcon} os-icon"></i>${p.platformLabel}</td>
      <td><span class="flex-badge ${p.mode}">${modeIcon} ${p.modeLabel}</span></td>
      <td>${p.allowlist}</td><td>${p.blocklist}</td>
      <td>${p.created}</td><td>${p.modified}</td>
      <td><i class="fa fa-ellipsis"></i></td>
    </tr>`;
  }).join('');

  return `
    <div class="page-title-bar">
      <i class="fa fa-shield-halved page-icon"></i>
      <h1>Application Control Policies</h1>
    </div>
    <div class="toolbar">
      <div class="btn-dropdown-wrap">
        <button class="btn btn-primary" onclick="this.parentElement.classList.toggle('open')"><i class="fa fa-plus"></i> Create Policy <i class="fa fa-caret-down" style="font-size:10px"></i></button>
        <div class="btn-dropdown-menu">
          <a href="#" onclick="openCreatePolicy('windows');return false"><i class="fab fa-windows"></i> Windows</a>
          <a href="#" onclick="openCreatePolicy('mac');return false"><i class="fab fa-apple"></i> Mac</a>
          <a href="#" onclick="openCreatePolicy('linux');return false"><i class="fab fa-linux"></i> Linux</a>
        </div>
      </div>
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
        <tbody>${rows}</tbody>
      </table>
    </div>
    <div class="table-pagination">
      <span>1 - ${allPolicies.length} of <a href="#" style="color:#1a73e8">Total Records</a></span>
      <select><option>25</option></select>
      <span class="page-btn">&lt;</span>
      <span class="page-btn">&gt;</span>
    </div>
    <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>`;
}

PAGES['ac-policies'] = acpAllPoliciesPage;

function epmAllPoliciesPage() {
  return `
    <div class="page-title-bar">
      <i class="fa fa-user-shield page-icon"></i>
      <h1>Endpoint Privilege Management</h1>
    </div>
    <div class="toolbar">
      <div class="filter-group"><span class="filter-label">Filter By :</span>
        <select><option>Platform</option><option>Windows</option><option>Mac</option><option>Linux</option></select>
      </div>
    </div>
    <div class="content-inner" style="padding-top:0">
      <div class="summary-panel">
        <div class="summary-header">
          <span><i class="fab fa-windows" style="margin-right:6px;color:#1a73e8"></i> Windows</span>
          <button class="btn-modify"><i class="fa fa-pen"></i> Modify</button>
        </div>
        <div class="summary-row"><span class="sum-label">Elevate applications in Audit only mode</span><span class="sum-sep">:</span><span class="sum-value">Allowed</span></div>
        <div class="summary-row"><span class="sum-label">Privileges Elevated</span><span class="sum-sep">:</span><span class="sum-value">Specific applications selected</span></div>
        <div class="summary-row"><span class="sum-label">Auto Elevation</span><span class="sum-sep">:</span><span class="sum-value">Yes</span></div>
        <div class="summary-row"><span class="sum-label">Vendor(s) added to the list</span><span class="sum-sep">:</span><span class="sum-value"><a href="#">2</a></span></div>
        <div class="summary-row"><span class="sum-label">Product(s) added to the list</span><span class="sum-sep">:</span><span class="sum-value"><a href="#">2</a></span></div>
        <div class="summary-row"><span class="sum-label">Created Time</span><span class="sum-sep">:</span><span class="sum-value">Oct 7, 2024, 02:47 PM</span></div>
      </div>
      <div class="summary-panel" style="margin-top:16px">
        <div class="summary-header">
          <span><i class="fab fa-linux" style="margin-right:6px;color:#1a73e8"></i> Linux</span>
          <button class="btn-modify"><i class="fa fa-pen"></i> Modify</button>
        </div>
        <div class="summary-row"><span class="sum-label">Status</span><span class="sum-sep">:</span><span class="sum-value">No privilege management policy configured yet for Linux.</span></div>
      </div>
      <div class="summary-panel" style="margin-top:16px">
        <div class="summary-header">
          <span><i class="fab fa-apple" style="margin-right:6px;color:#1a73e8"></i> Mac</span>
          <button class="btn-modify"><i class="fa fa-pen"></i> Modify</button>
        </div>
        <div class="summary-row"><span class="sum-label">Status</span><span class="sum-sep">:</span><span class="sum-value">No privilege management policy configured yet for Mac.</span></div>
      </div>
    </div>
    <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>`;
}

PAGES['epm-policies'] = epmAllPoliciesPage;

/* ================================================================
 *  ENDPOINT PRIVILEGE MANAGEMENT POLICY — per-platform
 * ================================================================ */

/* ================================================================
 *  INSIGHT — Admin Rights Summary & Systems View
 * ================================================================ */

PAGES['admin-rights-summary'] = () => `
    <div class="page-title-bar">
      <i class="fa fa-user-shield page-icon"></i>
      <h1>Admin Rights Summary</h1>
    </div>
    <div class="content-inner">
      <div class="summary-panel">
        <div class="summary-header"><span>Admin Rights Overview</span><button class="btn-modify"><i class="fa fa-pen"></i> Modify</button></div>
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
      <div class="summary-panel" style="margin-top:20px">
        <div class="summary-header"><span>Admin Rights Removal</span></div>
        <div style="padding:40px;text-align:center;color:#999"><i class="fa fa-users" style="font-size:48px;margin-bottom:12px;display:block"></i><p>No data available</p></div>
      </div>
    </div>
    <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>`;

PAGES['systems-view'] = () => `
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
          <thead><tr><th>Computer Name <i class="fa fa-sort sort-icon"></i></th><th>Domain</th><th>Agent Version</th><th>Associated Application Group(s)</th><th>Operating System</th><th>IP Address</th><th>Associated...</th></tr></thead>
          <tbody>
            <tr><td><i class="fa fa-th os-icon"></i>ues-w10-cloud1</td><td>WORKGROUP</td><td>11.3.2432.1.W</td><td>4</td><td>Windows 11 Professional Edition (x64)</td><td>192.168.140.39</td><td>2</td></tr>
            <tr><td><i class="fa fa-apple-whole os-icon"></i>uesqa-test11</td><td>WORKGROUP</td><td>11.3.2432.1.M</td><td>5</td><td>macOS - Sonoma</td><td>172.24.103.202</td><td>0</td></tr>
            <tr><td><i class="fa fa-th os-icon"></i>uesqa-w10-2</td><td>WORKGROUP</td><td>11.4.2514.01.W</td><td>5</td><td>Windows 10 Professional Edition (x64)</td><td>10.71.31.209,192.168....</td><td>4</td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-pagination">
        <span>1 - 3 of <a href="#" style="color:#1a73e8">Total Records</a></span>
        <select><option>25</option></select>
        <span class="page-btn">&lt;</span><span class="page-btn">&gt;</span>
      </div>
    </div>
    <div class="app-footer-inline">&copy; 2026 Zoho Corporation Private Limited. All rights reserved.</div>`;
