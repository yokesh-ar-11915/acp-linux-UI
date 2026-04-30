HIGH LEVEL USE CASE DOCUMENT
Application Control — ManageEngine Endpoint Central
Version: 3.5 | Date: April 21, 2026

---

# USE CASE SUMMARY

| UC ID | Title | Persona | Source |
|-------|-------|---------|--------|
| UC-ACP-01 | Navigate to Application Control Module | IT Administrator | — |
| UC-ACP-02 | View Application Control Dashboard | IT Administrator | — |
| UC-ACP-03 | Create a Linux Allowlist Application Group | IT Administrator | — |
| UC-ACP-04 | Create a Linux Blocklist Application Group | IT Administrator | — |
| UC-ACP-05 | Create a Linux Application Control Policy (Audit Mode) | IT Administrator | — |
| UC-ACP-06 | Create a Linux Application Control Policy (Strict Mode) | IT Administrator | — |
| UC-ACP-07 | Associate Linux Policy with Custom Group | IT Administrator | — |
| UC-ACP-08 | Verify Linux Policy Deployment via Deploy Policy Summary | IT Administrator | — |
| UC-ACP-09 | View Linux Machines in Systems View | IT Administrator | — |
| UC-ACP-10 | View Reports for Linux Application Control | IT Administrator | — |
| UC-ACP-11 | Configure Alert Settings for Linux ACP | IT Administrator | — |
| UC-ACP-12 | View Application Group Summary | IT Administrator | — |
| UC-ACP-13 | View Saved Policies and Policy Summary | IT Administrator | — |
| UC-ACP-14 | Move Unmanaged / Requested Apps to Application Group | IT Administrator | — |
| UC-ACP-15 | Create JIT Access for Linux | IT Administrator | — |
| UC-ACP-16 | Configure Linux Child Process Control | IT Administrator | — |
| UC-ACP-17 | Manage JIT Deployments | IT Administrator | — |
| UC-ACP-18 | Manage JIT Requests (Approval Workflow) | IT Administrator | — |
| UC-EPM-01 | View EPM Policies List | IT Administrator | — |
| UC-EPM-02 | Create / Edit Windows EPM Policy (Privileged Application List) | IT Administrator | — |
| UC-EPM-03 | Deploy EPM Policy (Windows — Combined or EPM-Only) | IT Administrator | — |
| UC-EPM-04 | View EPM Policy Summary (Privilege Management Page) | IT Administrator | — |
| UC-EPM-05 | Privileged Activity Audit | IT Administrator | — |
| UC-EPM-06 | Admin Rights Summary | IT Administrator | — |

**Milestone:** M1 (all use cases)
**Agent Dependency:** Linux agent requires new capabilities for application discovery and policy enforcement.

---

# UC-ACP-01 · Source: —
## Navigate to Application Control Module
**Persona:** IT Administrator

---

### 1. Business Problem

Compliance audits fail because Linux endpoints cannot demonstrate application whitelisting. Today, Endpoint Central provides Application Control for Windows and Mac, but Linux machines remain unregulated. IT administrators have no centralized way to control, audit, or prove which applications are allowed on Linux endpoints, creating a compliance gap during security audits and exposing the organization to risk from uncontrolled software execution.

### 2. Proposed Solution

EC extends the Application Control module to fully support Linux endpoints. The IT administrator accesses the module via the existing 'Application Control' tab in the Endpoint Central top navigation. From there, the sidebar provides access to all Linux ACP capabilities — creating application groups, defining policies, deploying to Linux machines, and reviewing reports — using the same familiar UI patterns already available for Windows and Mac.

### 3. User Journey — How It Works

1. The IT admin opens the Endpoint Central web console and sees the top navigation bar: Home, Configurations, Threats & Patches, Software Deployment, Inventory, OS Deployment, MDM, Tools, Agent, Admin, **Application Control**.
2. The admin clicks the **'Application Control'** tab. The tab becomes active (highlighted). The left sidebar loads with sections: Overview, Manage, Policies, Insight, Reports, Settings.
3. The main content area shows the **Dashboard** page by default.
4. The sidebar displays the following items:
   - **Overview:** Dashboard
   - **Manage:** Application Groups, Child Process, Deploy Policy, Just In Time Access
   - **Policies:** EPM Policies
   - **Insight:** Admin Rights Summary, Systems View
   - **Reports:** Reports
   - **Settings:** Alert Settings
5. The admin can collapse the sidebar using the `«` button. Clicking `»` expands it back.
6. Top nav overflow menu ('•••') accommodates items that don't fit in narrow browser windows.

**Navigation Map:**
```
Endpoint Central (Top Bar)
  └─ Application Control (top nav tab)
       └─ Sidebar:
            ├─ Overview
            │    └─ Dashboard
            ├─ Manage
            │    ├─ Application Groups ──→ Create Allowlist/Blocklist (Linux)
            │    ├─ Child Process
            │    ├─ Deploy Policy ──→ Create Policy (Linux) ──→ Deploy / Deploy Immediately
            │    └─ Just In Time Access
            ├─ Policies
            │    └─ EPM Policies
            ├─ Insight
            │    ├─ Admin Rights Summary
            │    └─ Systems View
            ├─ Reports
            │    └─ Reports
            └─ Settings
                 └─ Alert Settings
```

**Alternate Scenarios:**
- Clicking any other top nav tab (Home, Configurations, etc.) deactivates the Application Control tab and navigates away.
- Directly entering a hash URL (e.g., `#ac-policies`) in the browser loads that page directly with correct sidebar highlighting.
- Using browser back/forward buttons navigates through hash-based routing history correctly.

**Edge Cases:**
- Resizing browser to narrow width moves top nav items into the overflow menu ('•••'). All items remain accessible.
- Collapsing the sidebar, then navigating to a different page — content updates normally, sidebar remains collapsed.

### 4. API Requirements

Not applicable for navigation.

### 5. Role Handling

Uses existing EC role/permission model. No new roles or feature permissions needed. Administrators with Application Control access can navigate to this module.

### 6. Scope Handling

Technicians only see Linux machines and associated data within their assigned scope. Sidebar navigation is available to all authorized users regardless of scope; scope filtering applies to the data displayed on each page.

### 7. MSP and Summary Server

MSP supported. The Application Control tab and sidebar are available in MSP mode. Data displayed is segmented per customer.

### 8. Notification and Alerts

Not applicable for navigation.

### 9. ME Tracking, MICS and Action Log

- **ME Track:** Track module access — count of admins navigating to the Application Control module (feature adoption).
- **Action Log:** Not applicable for navigation.

### 10. Existing Customer Handling

No default behaviour changes. The Application Control tab already exists for Windows/Mac users. Upon upgrade, Linux ACP capabilities become available within the same module. An in-product notification/banner should announce the new Linux Application Control support to existing customers.

---

# UC-ACP-02 · Source: —
## View Application Control Dashboard
**Persona:** IT Administrator

---

### 1. Business Problem

Without a centralized overview, IT administrators cannot quickly assess the state of application control across their Linux fleet — how many machines are unregulated, how many groups have pending app requests, or which applications are most used. They must manually check each sub-page, wasting time and risking oversight.

### 2. Proposed Solution

The Dashboard page provides an at-a-glance summary of application control status across all platforms (including Linux). Stat cards, a getting-started guide, and usage charts let the admin understand the current state within seconds.

### 3. User Journey — How It Works

1. The admin clicks **'Dashboard'** in the sidebar (or navigates to `#dashboard`).
2. The dashboard loads with **four stat cards**:
   - **'Unregulated Computers'** — shows count (e.g., `0`). Links to 'Associate Application Group(s)'.
   - **'Just in Time access policies'** — shows count (e.g., `0`). Links to 'Show Expiring Policies'.
   - **'Custom Groups with App Requests'** — shows count (e.g., `4`). Links to 'View Group(s)'.
   - **'Systems with Unmanaged Admin accounts'** — shows count (e.g., `1`). Links to 'View System(s)'.
3. Below the stat cards, a **'Getting Started'** panel shows:
   - Left column: Agent Installation, Application Group Creation, Custom Group Creation, Policy Deployment, Unmanaged applications Resolution.
   - Right column: 3-step visual — (1) Download and install Agent, (2) Data synced, (3) Applications discovered and ready to manage.
4. Below that, a **charts row** shows three chart cards:
   - 'Most used applications from Verified publishers' (horizontal bar chart, e.g., 'Brave VPN Wireguard Service': 90, 'Microsoft Edge': 80).
   - 'Most used applications from Non-verified publishers' (horizontal bar chart, e.g., 'Pages.app': 85, 'Keynote.app': 80).
   - 'Unmanaged Applications' (placeholder icon when no data).

**Edge Cases:**
- Zero state: all stat cards show `0` with appropriate links still functional.
- 'Unmanaged Applications' chart handles empty state gracefully (shows placeholder desktop icon).
- Stat card links must navigate to the correct filtered page/view.

### 4. API Requirements

- **GET /api/acp/dashboard/stats** — Returns stat card values (unregulated computers, JIT policies, custom groups with requests, systems with unmanaged admin accounts). Supports scope filtering.
- **GET /api/acp/dashboard/top-apps** — Returns top used applications by verified/non-verified publisher for chart rendering. Supports platform filter (Windows/Mac/Linux).

### 5. Role Handling

Uses existing EC role/permission model. Read-only access sufficient for dashboard viewing.

### 6. Scope Handling

Stat card values and chart data are filtered by technician scope. A technician sees only data for machines within their assigned scope.

### 7. MSP and Summary Server

MSP: Dashboard data is segmented per customer. Summary Server: [NEEDS CLARIFICATION] — confirm whether dashboard data should aggregate at the summary server level.

### 8. Notification and Alerts

Not applicable for the dashboard view.

### 9. ME Tracking, MICS and Action Log

- **ME Track:** Track dashboard page views (feature adoption metric).
- **Action Log:** Not applicable.

### 10. Existing Customer Handling

No changes for existing customers. Dashboard now includes Linux data alongside Windows/Mac data. If no Linux agents are installed, Linux-specific data simply shows zero.

---

# UC-ACP-03 · Source: —
## Create a Linux Allowlist Application Group
**Persona:** IT Administrator

---

### 1. Business Problem

To enforce application whitelisting on Linux endpoints, the admin must first define which applications are allowed. Without this capability, there is no way to build a centralized allowlist for Linux packages and executables — admins are forced to manage this at the OS level using AppArmor/SELinux without any visibility or audit trail in EC.

### 2. Proposed Solution

The admin creates a Linux Allowlist application group through the Application Groups page. The creation form provides Linux-specific selection criteria — Vendor, Package (not "Products"), Executables, File Hash, and File Path (not "Folder Path") — to define which applications are permitted on Linux endpoints.

### 3. User Journey — How It Works

1. The admin clicks **'Application Groups'** in the sidebar.
2. The Application Groups table loads. Columns: Application Group Name (with platform OS icon), Group Type, Created By, Last Modified By, Created Time, Last Modified. **Group names are clickable links** that open the Application Group Summary page (see UC-ACP-12). Existing groups are listed:
   - `Allowed applications` (Windows icon, Allowlist, admin, Oct 7, 2024)
   - `Allowed Mac applications` (Apple icon, Allowlist, admin, Oct 7, 2024)
   - `Allowed Linux applications` (Linux icon, Allowlist, admin, Mar 10, 2026)
   - `Blocked applications` (Windows icon, Blocklist, admin, Oct 7, 2024)
   - `Blocked Mac Applications` (Apple icon, Blocklist, admin, Oct 7, 2024)
   - `Blocked Linux Applications` (Linux icon, Blocklist, admin, Mar 12, 2026)
   - `ManageEngine recommended blocklist for productivity` (Windows icon, Blocklist, DC-SYSTEM-USER)
3. The admin clicks the **'Create Allowlist'** dropdown button. A dropdown appears with three platform options:
   - **Windows** (Windows icon)
   - **Mac** (Apple icon)
   - **Linux** (Linux/Tux icon)
4. The admin clicks **'Linux'**. The Allowlist Creation form loads.
   - Breadcrumb: `Application Groups > Allowlist Creation`
   - Platform badge: Linux icon + 'Linux'
5. The admin enters a name in the **'Allowlist Name'** text field (e.g., `Linux Prod Allowlist`). An 'Add Description' link is available for optional description.
6. The toolbar shows:
   - **Filter dropdown:** All, Vendor, **Package**, Executables, File Hash, **File Path**
     - *(Linux uses 'Package' instead of 'Products' and 'File Path' instead of 'Folder Path')*
     - *(Linux does NOT show 'Trusted Repository' — that is for non-Linux platforms only)*
   - **Search field:** filters vendor grid and package list in real-time
   - **Toolbar actions:** 'Add' (manually add entries), 'Import' (import from file)
   - **Selected (N):** counter showing total selected items
   - **View toggle:** Grid view (default) / List view
7. **Vendor section** — displays a grid of vendor cards. Each card shows:
   - Checkbox
   - Vendor name (e.g., 'Canonical Ltd.', 'Red Hat, Inc.', 'Google LLC', 'Mozilla Corporation')
   - 'Verified Publisher' or 'Unverified' badge
   - Info icon (ℹ)
   - Clicking **anywhere on the card** toggles selection (not just the checkbox).
8. **Package section** — grouped by vendor. Each vendor group has:
   - Vendor header with name and publisher credibility badge
   - A **group-level checkbox** in the table header that selects/deselects all packages under that vendor
   - Individual package rows with checkboxes:
     - Canonical Ltd.: `snap`, `apt-get`, `dpkg`
     - Red Hat, Inc.: `yum`, `dnf`, `rpm`
     - Google LLC: `Google Chrome`
     - Mozilla Corporation: `Firefox`
   - Checking individual items updates the group checkbox (indeterminate if partial, checked if all selected).
9. The **'Selected (N)'** counter updates as the admin selects vendors and packages. The count sums both vendor selections and individual package selections.
10. The admin clicks **'Create Allowlist'** at the bottom.
11. The allowlist is created. The admin is redirected back to the Application Groups table. The new group appears with the Linux icon, type 'Allowlist', created by 'admin', and the current timestamp.

**Alternate Scenarios:**
- Admin clicks 'Cancel' — navigates back to Application Groups list without creating the group. All selections are discarded.
- Admin uses 'Add' to manually add a package by name, executable by hash, or file path.
- Admin uses 'Import' to bulk-import application entries from a CSV/file.

**Edge Cases:**
- Empty name field: form validation prevents submission — name is required.
- Duplicate name: server-side error — 'Group name already exists'.
- Very long name (255+ characters): input truncated or max-length validation.
- No vendors or packages selected: validation warning — at least one item must be selected.
- Search with no matching results: vendor grid / package list shows empty state.
- Switch between Grid and List view with active selections: selections are preserved.
- Select a vendor, then deselect it: card returns to unselected state, count decreases.
- Select all packages via group checkbox, then deselect one: group checkbox changes to indeterminate.

### 4. API Requirements

- **POST /api/acp/app-groups** — Create a new application group. Payload: name, description, platform (`linux`), type (`allowlist`), selected vendors, packages, executables, file hashes, file paths. Returns: created group ID and metadata.
- **GET /api/acp/app-groups** — List all application groups. Supports filters: platform (`windows`/`mac`/`linux`), group type (`allowlist`/`blocklist`). Supports pagination and sorting.
- **GET /api/acp/discovered-vendors?platform=linux** — List discovered vendors for Linux endpoints for the vendor card grid. Supports search filter.
- **GET /api/acp/discovered-packages?platform=linux&vendor={vendorId}** — List discovered packages under a vendor for Linux. Supports search and pagination.
- **POST /api/acp/app-groups/import** — Bulk import application entries from file. Supports CSV format.

### 5. Role Handling

Uses existing EC role/permission model. Admin with Application Control write access can create groups. Read-only admins can view the list but not create.

### 6. Scope Handling

Application groups are global entities — they are not scope-bound. Any admin with write access can create groups visible across all scopes. The discovered vendor/package data shown in the creation form is aggregated from all Linux agents within the technician's scope.

### 7. MSP and Summary Server

MSP: Application groups are scoped per customer. An MSP technician creates groups visible only within their assigned customer's tenant. Summary Server: [NEEDS CLARIFICATION] — confirm whether application group metadata should be visible at the summary level.

### 8. Notification and Alerts

Not applicable for group creation.

### 9. ME Tracking, MICS and Action Log

- **ME Track:** Track group creation events (count of Linux allowlist/blocklist groups created — feature adoption).
- **API Usage:** Track API calls to group creation endpoints.
- **Action Log:** Log entry when an application group is created — who created it, what type (Allowlist/Blocklist), which platform (Linux), timestamp.

### 10. Existing Customer Handling

No impact on existing customers. Linux application groups are a new entity type. Existing Windows/Mac groups remain unchanged. The 'Create Allowlist' and 'Create Blocklist' dropdowns now include 'Linux' as a new option.

---

# UC-ACP-04 · Source: —
## Create a Linux Blocklist Application Group
**Persona:** IT Administrator

---

### 1. Business Problem

Same as UC-ACP-03. In addition to defining allowed applications, the admin needs to explicitly block known-dangerous or policy-violating applications on Linux endpoints. Without a centralized blocklist, these applications may run unchecked.

### 2. Proposed Solution

The admin creates a Linux Blocklist application group using the same interface as Allowlist creation. Blocklisted applications will be prevented from running when a policy is deployed in either Audit or Strict mode.

### 3. User Journey — How It Works

1. The admin navigates to the Application Groups page.
2. The admin clicks the **'Create Blocklist'** dropdown button. The dropdown shows: Windows, Mac, **Linux**.
3. The admin clicks **'Linux'**. The Blocklist Creation form loads.
   - Breadcrumb: `Application Groups > Blocklist Creation`
   - Platform badge: Linux icon + 'Linux'
4. The admin enters a name (e.g., `Linux Blocked Apps`).
5. The form layout, vendor grid, package section, filter, search, toolbar, and selection mechanics are **identical to the Allowlist creation form** (see UC-ACP-03, Steps 6–9).
6. The admin clicks **'Create Blocklist'** at the bottom.
7. The blocklist is created. The admin is redirected to the Application Groups table. The new group appears with type 'Blocklist'.

**Edge Cases:**
- All Allowlist creation validations (UC-ACP-03 edge cases) apply equally to Blocklist creation.
- The submit button label is 'Create Blocklist' (not 'Create Allowlist').
- The breadcrumb reads 'Blocklist Creation'.

### 4. API Requirements

Same as UC-ACP-03 — POST /api/acp/app-groups with type: `blocklist`.

### 5. Role Handling

Same as UC-ACP-03.

### 6. Scope Handling

Same as UC-ACP-03.

### 7. MSP and Summary Server

Same as UC-ACP-03.

### 8. Notification and Alerts

Not applicable for group creation.

### 9. ME Tracking, MICS and Action Log

- **Action Log:** Log entry when a blocklist group is created — who, type (Blocklist), platform (Linux), timestamp.

### 10. Existing Customer Handling

Same as UC-ACP-03.

---

# UC-ACP-05 · Source: —
## Create a Linux Application Control Policy (Audit Mode)
**Persona:** IT Administrator

---

### 1. Business Problem

Even after defining allowlists and blocklists, the admin needs a way to package these into a deployable policy and select the enforcement mode. For Linux endpoints entering application control for the first time, Audit Mode is critical — it allows the admin to observe which applications are being used without disrupting end users, so they can refine their allowlist/blocklist before moving to strict enforcement.

### 2. Proposed Solution

The admin creates a Linux Application Control policy in Audit Mode. In Audit Mode, all applications except those explicitly blocklisted are allowed to run, but unmanaged application usage is logged for audit. The policy is associated with application groups and deployed to a Custom Group of Linux machines.

### 3. User Journey — How It Works

1. The admin clicks **'Deploy Policy'** in the sidebar. The Deploy Policy page loads (see UC-ACP-07 for the redesigned page layout).
   - The page now shows a table of Custom Groups with their deployment data.
   - Table columns: Custom Group Name (clickable), Associated Application Group(s), Computer Count, Flexibility, Deployment Status, Action, Requested Apps.
   - A **'Watch Demo'** link appears in the title bar.

2. The admin clicks the **'Associate Group'** button. The Associate Policy form opens.
   - Header: back arrow (←), **'Associate Policy'** title, platform badge.
   - *(When accessed from the Saved Policies page, the form title reads 'Create Policy' instead.)*

3. The form opens with the platform badge displayed. The admin proceeds to configure the Linux policy.
   - Header: back arrow (←), 'Associate Policy' title, Linux platform badge (Linux icon + 'Linux').

4. **'Define Target'** section:
   - Field: 'Custom Group to be associated' (required, marked with `*`)
   - Text input with a **'New Custom Group'** link to create a group inline.
   - The admin enters or selects a Custom Group (e.g., 'Linux Servers Group').

5. **'Deploy Application Control'** accordion (default: open, checkbox checked):
   - Checkbox in the accordion header enables/disables this section.
   - **'Application Group(s) Associated'** field (required, marked with `*`):
     - Tag picker with dropdown. Clicking into the field opens a dropdown listing all available Application Groups:
       - `Allowed applications` (Windows)
       - `Allowed Mac applications` (Mac)
       - `Allowed Linux applications` (Linux)
       - `Blocked applications` (Windows)
       - `Blocked Mac Applications` (Mac)
       - `ManageEngine recommended blocklist for productivity` (Windows)
     - The admin types to filter the list (e.g., typing 'Linux' filters to Linux groups).
     - Selected groups appear as **tag chips** with an `×` button to remove.
     - Duplicate groups cannot be added (selecting the same group twice does nothing).
   - Inline links to create new groups: **'Create Allowlist'** and **'Create Blocklist'**, each with a platform sub-menu (Windows/Mac/Linux).
   - Sync icon (`↻`) refreshes the available groups list.

6. **Mode Selection** (radio cards):
   - **Audit Mode** (selected by default, highlighted):
     - Description: 'Except blocked applications, all other applications will be allowed to run. This allows you to audit the unmanaged applications usage and redefine your allowlist/blocklist.'
   - **Strict Mode** (unselected):
     - Description: 'Enforce strict mode if you need to run only list of allowed applications.'
     - Sub-option (visible only when Strict selected): checkbox — 'Allow users to request applications which are unmanaged.'
   - Note below: 'Blocked applications will not be allowed to run in any mode.'

7. **Settings** section:
   - 'Customize alert notification': Radio — **Yes** / **No** (default: No).
   - If 'Yes' is selected, a textarea appears with default message: 'This application has been blocked.\nContact your System Administrator.' The message is editable.

8. **CRITICAL — Linux-specific:** The **'Deploy EPM Policy'** accordion is **NOT shown**. EPM (Endpoint Privilege Management) deployment is Windows-only. The Linux policy form does not render this section at all.

9. **Form actions:**
   - **'Deploy'** — creates the policy and schedules deployment for the next refresh cycle (90 minutes).
   - **'Deploy Immediately'** — creates the policy and deploys it instantly.
   - **'Cancel'** — navigates back without saving.
   - Note: 'The policy gets deployed only during the next refresh cycle (90 minutes). To deploy now, Click Deploy Immediately.'
   - Warning: 'Running in restricted mode.' is visible at the bottom.

10. The admin clicks **'Deploy'**. The policy is created with Audit Mode. The admin is redirected to the policies list where the new policy appears with: Platform = Linux (Linux icon), Mode = 'Audit' badge, correct group counts, and current timestamp.

**Edge Cases:**
- No Custom Group selected: validation error — field is required.
- No Application Groups associated: validation error — at least one group required.
- Uncheck 'Deploy Application Control' accordion checkbox: body becomes disabled/greyed out. Form cannot submit without at least one active section.
- Select 'Yes' for custom alert, then clear the textarea: validation — message cannot be empty when 'Yes' is selected.
- Add same Application Group twice: silently ignored, no duplicate chips.
- Remove all chips: field returns to placeholder. Validation catches it on submit.
- 'Deploy Immediately' targeting a group with 0 computers: warning or 0% status.
- Open 'Create Allowlist/Blocklist' inline from within the policy form: group creation form loads in the same content area. After creation, user returns to the policy form and can associate the new group.

### 4. API Requirements

- **POST /api/acp/policies** — Create a new Application Control policy. Payload: name (auto-generated or user-defined), platform (`linux`), custom_group_id, application_group_ids (array), mode (`audit` or `strict`), strict_allow_requests (boolean), custom_alert_enabled (boolean), custom_alert_message (string), deploy_immediately (boolean). Returns: policy ID and status.
- **GET /api/acp/policies** — List all policies. Filters: platform, mode. Pagination, sorting supported.
- **GET /api/acp/policies/{id}** — Get single policy details (for agentic queries/SIEM).
- **GET /api/acp/custom-groups** — List available Custom Groups for the selection dropdown.

### 5. Role Handling

Uses existing EC role/permission model. Admin with Application Control write access can create policies.

### 6. Scope Handling

Technicians only see Custom Groups within their scope. Policies created by a technician target machines within their scope. If a machine moves between scopes, the policy association remains but the source technician loses visibility.

### 7. MSP and Summary Server

MSP: Policies are scoped per customer. An MSP technician can only create policies targeting Custom Groups within their assigned customer. Data segmented per customer.

### 8. Notification and Alerts

Not applicable at policy creation time. Notifications trigger at enforcement time (see UC-ACP-08).

### 9. ME Tracking, MICS and Action Log

- **ME Track:** Track policy creation events (count of Linux policies, mode distribution: Audit vs Strict).
- **API Usage:** Track API calls to policy creation endpoints.
- **Action Log:** Log entry — admin created Application Control policy '[name]', platform: Linux, mode: Audit, associated groups: [list], target group: [name], timestamp.

### 10. Existing Customer Handling

No impact. Linux policies are a new entity type. The 'Create Policy' dropdown now includes 'Linux' as an option. Existing Windows/Mac policies unchanged.

---

# UC-ACP-06 · Source: —
## Create a Linux Application Control Policy (Strict Mode)
**Persona:** IT Administrator

---

### 1. Business Problem

After auditing application usage, the admin needs to enforce strict application control — only explicitly allowed applications should run on Linux endpoints. Any application not in the allowlist should be blocked. This is critical for compliance-sensitive environments (PCI-DSS, HIPAA, SOC 2) where auditors require proof of strict enforcement.

### 2. Proposed Solution

The admin creates a Linux Application Control policy in Strict Mode. Only allowlisted applications will be allowed to run. Blocklisted and unmanaged applications are blocked. An optional sub-setting allows end users to request access to unmanaged applications.

### 3. User Journey — How It Works

Steps 1–5 are identical to UC-ACP-05.

6. The admin clicks on the **'Strict Mode'** radio card. Strict Mode becomes highlighted/selected. Audit Mode becomes deselected.
7. A sub-option checkbox appears: **'Allow users to request applications which are unmanaged.'** (unchecked by default). The admin optionally checks it.
8. The admin configures custom alert settings (optional):
   - Selects 'Yes' for 'Customize alert notification'.
   - Edits the message in the textarea (e.g., 'This application is not authorized for this Linux server. Contact your IT security team at security@company.com').
9. The admin clicks **'Deploy Immediately'**. The policy is created and deployed instantly to the target machines.
10. The policy appears on the policies list with: Platform = Linux, Mode = 'Strict' badge.

**Edge Cases:**
- Only one mode can be active at a time (radio behaviour).
- Switching between Audit and Strict multiple times: only the last selection applies. Strict sub-option resets when switching away and back.
- 'Deploy Immediately' bypasses the 90-minute refresh cycle.

### 4. API Requirements

Same as UC-ACP-05. The `mode` field is `strict`, and `strict_allow_requests` boolean indicates if users can request unmanaged apps.

### 5. Role Handling

Same as UC-ACP-05.

### 6. Scope Handling

Same as UC-ACP-05.

### 7. MSP and Summary Server

Same as UC-ACP-05.

### 8. Notification and Alerts

Not applicable at policy creation time.

### 9. ME Tracking, MICS and Action Log

- **Action Log:** Log entry — admin created Application Control policy '[name]', platform: Linux, mode: Strict, allow_user_requests: true/false, timestamp.

### 10. Existing Customer Handling

Same as UC-ACP-05.

---

# UC-ACP-07 · Source: —
## Associate Linux Policy with Custom Group
**Persona:** IT Administrator

---

### 1. Business Problem

After creating application groups, the admin needs a way to associate them with specific groups of Linux machines and configure the enforcement mode. Without a centralized association view, there is no visibility into which custom groups have which application groups, what flexibility mode is active, or what percentage of machines have successfully received the policy.

### 2. Proposed Solution

The **Deploy Policy** page provides a unified view of all custom groups and their application control associations. The admin uses the **'Associate Group'** button to create a new policy association that links application groups to a custom group with a chosen mode (Audit/Strict). Each custom group row is clickable, leading to a 6-tab Deploy Policy Summary page (UC-ACP-08).

### 3. User Journey — How It Works

1. The admin navigates to the **'Deploy Policy'** page (sidebar, under Manage). The page loads.
   - Title bar: 'Deploy Policy' with info icon and a **'Watch Demo'** link (video icon).
2. The page displays a table of Custom Groups with their deployment data:
   - Table columns: **Custom Group Name** (clickable link), **Associated Application Group(s)** (count), **Computer Count**, **Flexibility** (mode badge), **Deployment Status** (progress bar + percentage), **Action** (link icon), **Requested Apps** (clickable count).
   - Example data:
     - `All Computers Group` | 8 | 161 | Strict Mode (●) | 1% (gray bar) | 🔗 | 0
     - `Developer group` | 8 | 1 | Audit Mode (🔍) | 100% (green bar) | 🔗 | 1
     - `Engineering group` | 5 | 0 | Strict Mode (●) | 0% (gray bar) | 🔗 | 0
     - `Marketing Group` | 7 | 5 | Audit Mode (🔍) | 20% (red bar) | 🔗 | 1
     - `Remote Branch` | 3 | 1 | Audit Mode (🔍) | 100% (green bar) | 🔗 | 1
     - `Support Group` | 6 | 1 | Audit Mode (🔍) | 100% (green bar) | 🔗 | 1
   - Flexibility badges: **Audit Mode** (blue badge with search icon) and **Strict Mode** (badge with dot icon).
   - Deployment Status colors: gray (low %), green (100%), red (partial/stalled).
   - Filter options: Flexibility, All.

3. The admin clicks the **'Associate Group'** button. The policy creation form opens (titled **'Associate Policy'**).
   - This is the same form described in UC-ACP-05/06, with:
     - Define Target (Custom Group), Deploy Application Control accordion (App Groups, Mode, Settings).
     - The form title reads 'Associate Policy' (instead of 'Create Policy' when accessed from Saved Policies page).
     - Back arrow returns to the Deploy Policy page.

4. The admin fills in the form:
   - Selects a Custom Group (e.g., 'Linux Servers Group').
   - Associates Linux application groups (e.g., 'Allowed Linux applications', 'Blocked Linux Applications').
   - Selects Audit or Strict mode.
   - Clicks **'Deploy'** or **'Deploy Immediately'**.

5. After deployment, the new custom group association appears in the Deploy Policy table with the configured application group count, flexibility mode, and deployment status progress bar.

6. The admin clicks a **Custom Group Name** link (e.g., 'All Computers Group'). The **Deploy Policy Summary** page opens (see UC-ACP-08), showing detailed 6-tab information for that group.

7. The admin clicks a **Requested Apps** count link. The Deploy Policy Summary opens directly on the **Requested Apps** tab.

**Alternate Scenarios:**
- Clicking 'Watch Demo' opens a video tutorial for the Deploy Policy workflow.
- Admin uses 'Filter By' dropdowns to narrow by Flexibility mode.
- Clicking the Action link icon performs the associated action for that group.

**Edge Cases:**
- Custom Group with 0 computers: Deployment Status shows 0%.
- Custom Group with 0 Requested Apps: link shows `0`.
- Pagination: '1 - N of Total Records', 25 per page, prev/next buttons.
- Search, column chooser, and download icons function as expected.
- 'Associate Group' with a group that already has a policy: existing association is updated, not duplicated.

### 4. API Requirements

- **GET /api/acp/deploy-policy/groups** — List custom groups with deployment data. Returns: group_name, associated_app_group_count, computer_count, flexibility_mode, deployment_status_percentage, requested_apps_count. Supports filters (flexibility). Pagination, sorting.
- **POST /api/acp/deploy-policy/associate** — Associate application groups with a custom group. Payload: custom_group_id, application_group_ids (array), mode (audit/strict), custom_alert_enabled, custom_alert_message, deploy_immediately (boolean). Returns: association ID and status.
- **GET /api/acp/deploy-policy/groups/{id}** — Get single group deployment detail for SIEM/agentic queries.

### 5. Role Handling

Uses existing EC role/permission model. Admin with Application Control write access can create associations.

### 6. Scope Handling

Technicians only see Custom Groups within their scope. Only machines within a technician's scope are targeted. If a machine moves out of scope post-deployment, the policy remains but the source technician loses visibility.

### 7. MSP and Summary Server

MSP: Custom groups and associations are scoped per customer. MSP technician can only associate within their assigned customer's machines.

### 8. Notification and Alerts

- **Email alert when a blocklisted application is accessed on a Linux machine** (M1). Triggered post-deployment when a deployed blocklist policy detects a violation.

### 9. ME Tracking, MICS and Action Log

- **ME Track:** Track association creation events, count of Linux machines targeted.
- **API Usage:** Track API calls to association endpoints.
- **Action Log:** Log entry — admin associated policy with custom group '[name]', app groups: [list], mode: [mode], timestamp.

### 10. Existing Customer Handling

No impact. The Deploy Policy page redesign replaces the older 'Create Deployment Task' workflow. Existing Window/Mac data is preserved in the new layout. The 'Associate Group' flow is the unified method for creating policy associations across all platforms.

---

# UC-ACP-08 · Source: —
## Verify Linux Policy Deployment via Deploy Policy Summary
**Persona:** IT Administrator

---

### 1. Business Problem

After deploying a policy, the admin needs to verify that it has been successfully applied to all target Linux machines, review the associated application groups, inspect allowed/blocked/unmanaged apps, and act on app requests. Without a comprehensive deployment detail view, the admin cannot confirm compliance, identify failed machines, or triage unmanaged applications discovered post-deployment.

### 2. Proposed Solution

The **Deploy Policy Summary** page provides a 6-tab detail view for each Custom Group. The admin clicks a Custom Group Name on the Deploy Policy page to drill down into Computers, Application Groups, Allowed Apps, Blocked Apps, Unmanaged Apps, and Requested Apps — all scoped to that group. The admin can filter by platform, manage unmanaged apps by moving them to existing application groups, and approve/reject requested apps.

### 3. User Journey — How It Works

1. The admin navigates to the **'Deploy Policy'** page and clicks a **Custom Group Name** link (e.g., 'All Computers Group'). The Deploy Policy Summary page opens.

2. **Header section:**
   - Back arrow (←) to return to the Deploy Policy list.
   - Group name as page title (e.g., 'All Computers Group').
   - Metadata bar: Computer Groups category (e.g., 'All'), Flexibility status (e.g., 'Strict Mode'), Association by user (e.g., 'demo'), Last Modified Time (e.g., 'Apr 9, 2025, 06:29:31 PM').

3. **Six navigation tabs** below the header:
   - **Computers** | **Application Groups** | **Allowed Apps** | **Blocked Apps** | **Unmanaged Apps** | **Requested Apps**

4. **Computers tab** (default, active):
   - Toolbar filters: Platform type (Windows/Mac/Linux), Deployment Status (In Progress/Completed/Failed).
   - Toolbar actions: Total Records link, search, column chooser, download.
   - Table columns: Computer Name (with OS icon), Domain Name, Last Contact Time, Deployment Status, Remarks.
   - Example Linux machines in 'All Computers Group':
     - `SureshKumar` (Linux icon) | WORKGROUP | Mar 15, 2026 10:20 AM | In Progress | Newly added device
     - `RajeshNair` (Linux icon) | WORKGROUP | Mar 16, 2026 09:45 AM | In Progress | Newly added device
     - `LinuxBuild-01` (Linux icon) | WORKGROUP | Mar 17, 2026 02:30 PM | In Progress | Newly added device
   - Also shows Windows and Mac machines (e.g., WilsonLawson, WilliamBassett, etc.).
   - Pagination: '1 - 25 of Total Records'.

5. **Application Groups tab:**
   - Toolbar filters: Platform type (Windows/Mac/Linux), Group Type (Allowlist/Blocklist).
   - Table columns: Application Group Name (with OS icon), Group Type, Created Time, Last Modified Time, Created By, Last Modified By.
   - Example data for 'All Computers Group':
     - `Allowed Linux apps` (Linux icon) | Allowlist | Mar 10, 2026 09:15 AM | Mar 10, 2026 | demo | demo
     - `Blocked Linux apps` (Linux icon) | Blocklist | Mar 12, 2026 11:30 AM | Mar 12, 2026 | demo | demo
     - Plus Windows and Mac groups (Allowed apps, Allowed apps mac, Blocked Apps, etc.).

6. **Allowed Apps tab:**
   - Left sidebar with **platform toggle buttons** (Windows / Mac / Linux icons), then filter tabs: Vendor, Package Name (Linux) / Product Name (Windows/Mac), Verified Executable, File Hash, File Path (Linux) / Folder Path (Windows/Mac), Store Apps.
   - Right pane: toolbar with Total Records, search, column chooser, download.
   - Table columns: Executable Name, Vendor Name, Publisher Credibility, Application Group Name.
   - Example Linux allowed apps:
     - `nginx` | F5, Inc. | Verified Publisher | Allowed Linux apps
     - `docker` | Docker, Inc. | Verified Publisher | Allowed Linux apps
     - `git` | Software Freedom Conservancy | Verified Publisher | Allowed Linux apps

7. **Blocked Apps tab:**
   - Same layout as Allowed Apps tab (platform toggle + filter sidebar).
   - Additional toolbar filter: Publisher Credibility (Verified/Unverified Publisher).
   - Table columns: Product Name, Vendor Name, Publisher Credibility, Application Group Name.
   - Example Linux blocked apps:
     - `nmap` | Nmap Project | Verified Publisher | Blocked Linux apps
     - `wireshark` | Wireshark Foundation | Verified Publisher | Blocked Linux apps

8. **Unmanaged Apps tab:**
   - Platform toggle buttons + filter sidebar (same as Allowed/Blocked tabs).
   - Toolbar actions:
     - **'Add'** button (disabled until checkbox selected).
     - **'Move to existing App group'** button (disabled until checkbox selected) — opens a modal (see UC-ACP-14).
     - Publisher Credibility filter.
   - Table columns: checkbox, Product Name, Vendor Name, Publisher Credibility, Resource Count.
   - Header checkbox selects/deselects all visible rows.
   - Example unmanaged apps: `htop` (Unverified, 3), `tmux` (Unverified, 2), plus Windows unmanaged apps.

9. **Requested Apps tab:**
   - **Info banner:** 'Application access request is currently available for Windows and Linux.' (with Windows + Linux icons).
   - Filter sidebar (no platform toggle — banner indicates Windows + Linux only).
   - Toolbar actions:
     - **'Add'** button, **'Move to existing App group'** button, **'Reject'** button (all disabled until checkbox selected).
     - Publisher Credibility filter.
   - Table columns: checkbox, Product Name, Vendor Name, Publisher Credibility, Request(s) raised.
   - Example data: Visual Studio Code (2 requests), IntelliJ IDEA (1 request), Microsoft® Visual Studio® (1 request).

**Alternate Scenarios:**
- Clicking back arrow returns to the Deploy Policy list.
- Admin can filter Computers tab by Platform = Linux to see only Linux machines.
- Admin can toggle the platform button on Allowed/Blocked/Unmanaged tabs to view platform-specific apps.
- Admin selects unmanaged apps → clicks 'Move to existing App group' → modal opens (UC-ACP-14).
- Admin selects requested apps → clicks 'Reject' to reject the request.

**Edge Cases:**
- Custom Group with 0 computers: Computers tab shows 'No data available'.
- Tabs with no data: table shows empty state.
- Selecting all via header checkbox, then deselecting one: header checkbox changes to indeterminate.
- Platform toggle: switching platforms refreshes filter sidebar labels (Package Name vs Product Name, File Path vs Folder Path).
- Pagination per tab: each tab maintains its own page state.
- Tab switching preserves selections on other tabs — selections are cleared when navigating away from the summary page.

### 4. API Requirements

- **GET /api/acp/deploy-policy/groups/{id}/computers** — Computers in the group with deployment status. Filters: platform, deployment_status. Pagination, sorting.
- **GET /api/acp/deploy-policy/groups/{id}/app-groups** — Associated application groups. Filters: platform, group_type. Pagination, sorting.
- **GET /api/acp/deploy-policy/groups/{id}/allowed-apps** — Allowed apps by platform. Filters: vendor, package_name, executable, file_hash, file_path, store_apps. Pagination, sorting.
- **GET /api/acp/deploy-policy/groups/{id}/blocked-apps** — Blocked apps by platform. Filters same as above + publisher_credibility. Pagination, sorting.
- **GET /api/acp/deploy-policy/groups/{id}/unmanaged-apps** — Unmanaged apps by platform. Same filters. Pagination, sorting.
- **GET /api/acp/deploy-policy/groups/{id}/requested-apps** — Requested apps. Same filters. Pagination, sorting.
- **POST /api/acp/deploy-policy/groups/{id}/requested-apps/reject** — Reject selected requested apps. Payload: app_ids (array).
- All endpoints support SIEM/agentic integration.

### 5. Role Handling

Uses existing EC role/permission model.

### 6. Scope Handling

Technicians see only computers and apps within their assigned scope.

### 7. MSP and Summary Server

MSP: Deployment summary data segmented per customer. Summary Server: [NEEDS CLARIFICATION] — confirm whether cross-site deployment summary is needed.

### 8. Notification and Alerts

- **Email alert when a blocklisted app is accessed on a Linux machine** — triggered when a blocked application execution event is detected post-deployment.

### 9. ME Tracking, MICS and Action Log

- **ME Track:** Track Deploy Policy Summary page views, tab usage, platform filter usage.
- **Action Log:** Log entry when apps are moved from unmanaged to a group, or when requested apps are rejected.

### 10. Existing Customer Handling

New page — no impact on existing customers. The Deploy Policy Summary replaces the previous approach of only viewing deployment percentage on the list page.

---

# UC-ACP-09 · Source: —
## View Linux Machines in Systems View
**Persona:** IT Administrator

---

### 1. Business Problem

The admin needs a centralized view of all Linux machines to understand their application control state — which groups and policies are associated, which machines are unregulated, and basic machine metadata. Without this, they must manually check each machine.

### 2. Proposed Solution

The Systems View page under Insight lists all managed endpoints. The admin can filter by 'Platform type: Linux' to see only Linux machines with their association counts and metadata.

### 3. User Journey — How It Works

1. The admin clicks **'Systems View'** in the sidebar (under Insight).
2. The Systems View page loads with a table. Columns: checkbox, Computer Name (with OS icon), Domain, Agent Version, Associated Application Group(s), Operating System, IP Address, Associated Policies count.
   - Example data:
     - `ues-w10-cloud1` (Windows icon) | WORKGROUP | 11.3.2432.1.W | 4 | Windows 11 Professional Edition (x64) | 192.168.140.39 | 2
     - `uesqa-test11` (Apple icon) | WORKGROUP | 11.3.2432.1.M | 5 | macOS - Sonoma | 172.24.103.202 | 0
     - `uesqa-w10-2` (Windows icon) | WORKGROUP | 11.4.2514.01.W | 5 | Windows 10 Professional Edition (x64) | 10.71.31.209 | 4
     - `linux-build-srv1` (Linux icon) | WORKGROUP | 11.4.2514.01.L | 3 | Ubuntu 22.04 LTS (x64) | 10.71.32.105 | 2
3. The admin uses **'Filter By: Platform type'** and selects **'Linux'**. The table filters to show only Linux machines.
4. For each Linux machine, the row shows: Linux/Tux icon, computer name, domain, agent version (ending in `.L` for Linux), associated application group count (e.g., `3`), OS name (e.g., 'Ubuntu 22.04 LTS (x64)'), IP address (e.g., `10.71.32.105`), associated policy count (e.g., `2`).
5. The admin uses the header checkbox to select all visible rows.
6. Available filters: Platform type, Custom Group, Association Status.

**Edge Cases:**
- No Linux machines managed: table shows empty state.
- Combination filters: Platform type + Custom Group + Association Status all work together.
- Pagination, search, column chooser, download function as expected.

### 4. API Requirements

- **GET /api/acp/systems** — List managed endpoints with application control metadata. Filters: platform (`linux`), custom_group, association_status. Includes: computer_name, domain, agent_version, os_name, ip_address, associated_group_count, associated_policy_count. Pagination, sorting.
- **GET /api/acp/systems/{id}** — Single machine detail for agentic queries.

### 5. Role Handling

Uses existing EC role/permission model.

### 6. Scope Handling

Technicians only see machines within their assigned scope.

### 7. MSP and Summary Server

MSP: Machine list segmented per customer. Summary Server: cross-site aggregation of machine lists may be useful for overview.

### 8. Notification and Alerts

Not applicable for viewing.

### 9. ME Tracking, MICS and Action Log

- **ME Track:** Track Systems View page views, Linux filter usage.
- **Action Log:** Not applicable.

### 10. Existing Customer Handling

Upon upgrade, existing Linux machines appear in Systems View with association counts of 0 (no policies/groups associated yet). No disruption.

---

# UC-ACP-10 · Source: —
## View Reports for Linux Application Control
**Persona:** IT Administrator

---

### 1. Business Problem

Compliance audits require documented evidence of application control enforcement on Linux endpoints — which applications were discovered, which were unmanaged, which blocklisted apps were accessed, and when. Without platform-filtered reports, the admin cannot produce Linux-specific evidence.

### 2. Proposed Solution

The Reports page provides 11 report types across three categories. Each sub-report supports a 'Platform type' filter so the admin can isolate Linux-specific data. Reports retain the last 90 days of data.

### 3. User Journey — How It Works

1. The admin clicks **'Reports'** in the sidebar. The Reports page loads.
2. An info banner appears: 'Application Control reports will include data from the last 90 days, with older data automatically cleaned up. To retain historical data, use scheduled reports to back up the events periodically.'
3. Three report categories are displayed in a grid:

   **Discovered Applications Reports:**
   - Discovered Products (columns: Product Name, Vendor, Publisher Credibility, Resource Count)
   - Discovered Unverified Executables (columns: Executable Name, Vendor, Product Name)
   - Discovered Store Applications (columns: Application Name, Publisher, Platform, Resource Count)
   - Discovered Child Process (columns: Parent Application, Child Process, Computer Name, Detected Time)

   **Unmanaged Application Reports:**
   - Unmanaged Products (columns: Product Name, Vendor, Publisher Credibility, Resource Count)
   - Unmanaged Executables (columns: Executable Name, Vendor, Product Name, Resource Count)
   - Unmanaged Store Applications (columns: Application Name, Publisher, Platform, Resource Count)

   **Event Audit Reports:**
   - Blocklisted Application Access (columns: Product Name, Vendor, Publisher Credibility, Resource Count, Executable Name, File Hash)
   - Blocklisted Store Applications Access (columns: Application Name, Publisher, Platform, Access Count, Last Accessed)
   - Applications Elevated with Reason (columns: Executable Name, Vendor, Product Name, Reason, Elevation Count, Last Elevated)
   - Applications running with Administrator Privileges (columns: Executable Name, Vendor, Product Name, Computer Name, Run Count)

4. The admin clicks **'Discovered Products'**. A sub-report page opens.
   - Breadcrumb: `Application Control Reports > Discovered Products`
   - Toolbar: Filter By (Platform type), search, column chooser, download.
5. The admin selects **'Linux'** in the Platform type filter. Table filters to show only Linux-discovered products.
6. The admin clicks the breadcrumb link 'Application Control Reports' to return to the main reports page.

**Edge Cases:**
- Each sub-report has breadcrumb, platform filter, toolbar, data table, and pagination.
- Pagination format: '1 - N of Total Records'.
- No data for Linux: reports show empty state.
- 'Scheduled reports' link is functional for automated backup.

### 4. API Requirements

- **GET /api/acp/reports/discovered-products?platform=linux** — Discovered products report. Pagination, sorting.
- **GET /api/acp/reports/discovered-unverified-executables?platform=linux** — Unverified executables.
- **GET /api/acp/reports/discovered-store-apps?platform=linux**
- **GET /api/acp/reports/discovered-child-process?platform=linux**
- **GET /api/acp/reports/unmanaged-products?platform=linux**
- **GET /api/acp/reports/unmanaged-executables?platform=linux**
- **GET /api/acp/reports/unmanaged-store-apps?platform=linux**
- **GET /api/acp/reports/blocklisted-app-access?platform=linux** — For SIEM integration: blocklisted application access events on Linux machines.
- **GET /api/acp/reports/blocklisted-store-access?platform=linux**
- **GET /api/acp/reports/elevated-with-reason?platform=linux**
- **GET /api/acp/reports/admin-privileges?platform=linux**

All report APIs support: platform filter, pagination, sorting, export (CSV/PDF).

### 5. Role Handling

Uses existing EC role/permission model. Read-only access sufficient for viewing reports.

### 6. Scope Handling

Reports show data only for machines within the technician's scope.

### 7. MSP and Summary Server

MSP: Report data segmented per customer.

### 8. Notification and Alerts

Not applicable for report viewing. (Scheduled report delivery via email is an existing EC capability.)

### 9. ME Tracking, MICS and Action Log

- **ME Track:** Track report access by type and platform filter used (Linux adoption metric).
- **API Usage:** Track external API calls to report endpoints (SIEM/agentic usage).
- **Action Log:** Not applicable for viewing.

### 10. Existing Customer Handling

Upon upgrade, reports will show Linux data only from the point the Linux agent starts collecting. Historical data prior to upgrade will not be available — no '--' values needed since reports are time-bounded (last 90 days) and Linux data simply starts from the upgrade date.

---

# UC-ACP-11 · Source: —
## Configure Alert Settings for Linux ACP
**Persona:** IT Administrator

---

### 1. Business Problem

When a blocklisted application is executed on a Linux machine, the admin needs to be notified promptly to investigate and respond. Without configured alerts, these events go unnoticed until the admin manually checks reports.

### 2. Proposed Solution

The Alert Settings page allows the admin to configure email alerts for application control events, including blocklisted application access on Linux machines. Requires mail server configuration as a prerequisite.

### 3. User Journey — How It Works

1. The admin clicks **'Alert Settings'** in the sidebar (under Settings).
2. The page loads. If no mail server is configured, an **error banner** (red) appears: 'No mail server configuration found. Configure mail server details to send alert notifications.' with a **'Configure Now'** link.
3. The form shows:
   - **'Alert for Requested Apps'** — with an info tooltip (ℹ). Email input field (placeholder: 'Enter email address').
   - **'Running in restricted mode'** warning with exclamation icon.
4. The admin enters an email address and clicks **'Save'**.
5. Alerts are now active. When a blocklisted application is accessed on any managed Linux machine, an email notification is sent to the configured address.

**Edge Cases:**
- Missing mail server: error banner visible, 'Configure Now' link navigates to mail server settings.
- Invalid email format: input validation.
- Empty email: validation prevents saving.

### 4. API Requirements

- **POST /api/acp/settings/alerts** — Save alert settings. Payload: email address. Returns: success/failure.
- **GET /api/acp/settings/alerts** — Get current alert settings (for form population).
- **GET /api/acp/settings/mail-server-status** — Check if mail server is configured (for banner visibility).

### 5. Role Handling

Uses existing EC role/permission model. Only admins with write access to Application Control settings can save alert configurations.

### 6. Scope Handling

Alert settings are global (not scope-bound). Alerts trigger for any Linux machine within the admin's scope that violates a blocklist policy.

### 7. MSP and Summary Server

MSP: Alert settings are per-customer. Each MSP customer can configure their own alert email.

### 8. Notification and Alerts

- **Email alert when a blocklisted app is accessed on a Linux machine** (M1). This is the core alert configured in this use case.
- Notifications are configurable (opt-in by entering email address).

### 9. ME Tracking, MICS and Action Log

- **ME Track:** Track alert settings configuration events.
- **Action Log:** Log entry — admin configured alert settings, email: [address], timestamp.

### 10. Existing Customer Handling

No impact. Alert settings for Linux ACP are new. Existing Windows/Mac alert configurations remain unchanged.

---

# UC-ACP-12 · Source: —
## View Application Group Summary
**Persona:** IT Administrator

---

### 1. Business Problem

After creating application groups, the admin needs to review the rules applied within each group and understand which custom groups are associated. Without a summary view, the admin must open the edit form to inspect the group contents — which is error-prone and doesn't provide the read-only overview needed for quick verification.

### 2. Proposed Solution

The **Application Group Summary** page provides a read-only detail view for each application group. The admin clicks a group name in the Application Groups table to see a summary with three metric cards, a Rule Details tab (with platform-aware filter sidebar), and an Associated Custom Groups tab.

### 3. User Journey — How It Works

1. The admin navigates to the **'Application Groups'** page and clicks a **group name link** (e.g., 'Allowed Linux applications'). The Application Group Summary page opens.

2. **Header:**
   - Back arrow (←) to return to the Application Groups list.
   - Group icon + group name as title (e.g., 'Allowed Linux applications').
   - **'Modify'** button (pen icon) on the right to edit the group.

3. **Three summary cards:**
   - **Total Rules Applied** — count of rules in the group (e.g., `3` for Allowed Linux applications; `2` for Blocked Linux Applications).
   - **Group type** — Allowlist (green check circle icon) or Blocklist (red ban icon).
   - **Custom Group(s) Associated** — count of custom groups using this application group (e.g., `2`).

4. **Two tabs:** Rule Details | Associated Custom Group(s)

5. **Rule Details tab** (default, active):
   - Left filter sidebar with platform-aware tabs:
     - For Linux groups: **Vendor**, **Package Name**, **Verified Executable**, **File Hash**, **File Path**, **Store Apps**
     - For Windows/Mac groups: Vendor, Product Name, Verified Executable, File Hash, Folder Path, Store Apps
   - Right pane — toolbar with Publisher Credibility filter, Total Records, search, column chooser, download.
   - Table columns: Publisher Credibility, Application Group Name, Vendor Name.
   - **Example data — 'Allowed Linux applications':**
     - Verified Publisher | Allowed Linux applications | Canonical Ltd.
     - Verified Publisher | Allowed Linux applications | Red Hat, Inc.
     - Verified Publisher | Allowed Linux applications | Google LLC
   - **Example data — 'Blocked Linux Applications':**
     - Verified Publisher | Blocked Linux Applications | Nmap Project
     - Verified Publisher | Blocked Linux Applications | Wireshark Foundation

6. **Associated Custom Group(s) tab:**
   - Toolbar with Total Records, search, column chooser, download.
   - Table columns: Custom Group Name (clickable link), Group Category, Created By.
   - **Example data — 'Allowed Linux applications':**
     - All Computers Group | All Computers Group | demo
     - Developer group | Static Unique Group | demo
   - **Example data — 'Blocked Linux Applications':**
     - All Computers Group | All Computers Group | demo
     - Developer group | Static Unique Group | demo

**Alternate Scenarios:**
- Clicking 'Modify' opens the edit form for the application group (pre-filled with existing data).
- Clicking a Custom Group Name in the Associated Custom Groups tab navigates to that group's detail (e.g., Deploy Policy Summary).
- Clicking back arrow returns to the Application Groups list.

**Edge Cases:**
- Group with 0 rules: Rule Details table shows 'No data available'.
- Group with 0 associated custom groups: Associated Custom Groups table shows 'No data available'. Count card shows `0`.
- Switching filter sidebar tabs changes the filter context but preserves the table data.
- Pagination per tab: each tab maintains its own page state.

### 4. API Requirements

- **GET /api/acp/app-groups/{id}/summary** — Returns: group name, type, rules_count, custom_groups_count, platform.
- **GET /api/acp/app-groups/{id}/rules** — Rule details. Filters: filter_type (vendor, package, executable, hash, path, store_apps), publisher_credibility. Pagination, sorting.
- **GET /api/acp/app-groups/{id}/associated-groups** — Associated custom groups. Pagination, sorting.

### 5. Role Handling

Uses existing EC role/permission model. Read-only access sufficient for viewing. Write access required for 'Modify'.

### 6. Scope Handling

Application group summary is visible to all admins with access. Associated custom groups shown may be filtered by technician scope.

### 7. MSP and Summary Server

MSP: Application group data is scoped per customer.

### 8. Notification and Alerts

Not applicable for viewing.

### 9. ME Tracking, MICS and Action Log

- **ME Track:** Track Application Group Summary page views.
- **Action Log:** Not applicable for viewing.

### 10. Existing Customer Handling

New page — no impact. Group summary is a read-only view of existing group data.

---

# UC-ACP-13 · Source: —
## View Saved Policies and Policy Summary
**Persona:** IT Administrator

---

### 1. Business Problem

The admin needs a centralized list of all saved application control policies to review their configurations, mode, and associated groups at a glance. Without this, the admin must navigate to each deployment individually to understand policy configurations.

### 2. Proposed Solution

The **Saved Policies** page (accessible via Policies → EPM Policies in the sidebar) lists all saved policies with metadata. Clicking a policy name opens the **Deploy Policy Summary** page (same 6-tab view as UC-ACP-08) scoped to that policy's associated custom group.

### 3. User Journey — How It Works

1. The admin clicks **'EPM Policies'** in the sidebar (under Policies). The **Saved Policies** page loads.

2. The page displays:
   - Title: 'Saved Policies'
   - Toolbar filters: Platform (Windows/Mac/Linux), Mode (Audit/Strict).
   - Toolbar actions: Total Records, search, column chooser, download.

3. Table columns: **Policy Name** (clickable link), **Platform** (OS icon + label), **Mode** (badge), **Allowlist Groups** (count), **Blocklist Groups** (count), **Created Time**, **Last Modified**, **Action** (ellipsis menu).

4. Example policy data:
   - `Windows Strict Policy` | Windows | Strict (●) | 2 | 1 | Mar 10, 2026 | Mar 16, 2026 | ⋯
   - `Windows Audit Policy` | Windows | Audit (🔍) | 3 | 1 | Mar 12, 2026 | Mar 16, 2026 | ⋯
   - `Mac Audit Policy` | Mac | Audit (🔍) | 1 | 1 | Mar 14, 2026 | Mar 16, 2026 | ⋯
   - `Linux Strict Policy` | Linux (Tux icon) | Strict (●) | 1 | 0 | Mar 15, 2026 | Mar 17, 2026 | ⋯
   - `Linux Audit Policy` | Linux (Tux icon) | Audit (🔍) | 2 | 1 | Mar 16, 2026 | Mar 17, 2026 | ⋯

5. The admin filters by **Platform = Linux**. Only Linux policies remain visible.

6. The admin clicks a **policy name** (e.g., 'Linux Strict Policy'). The **Deploy Policy Summary** page opens (same 6-tab view as UC-ACP-08), showing the associated custom group's Computers, Application Groups, Allowed/Blocked/Unmanaged/Requested Apps. The back arrow returns to the Saved Policies page (not Deploy Policy).

**Edge Cases:**
- No policies: table shows empty state.
- Both Platform and Mode filters work in combination (e.g., 'Linux' + 'Strict').
- Pagination: '1 - N of Total Records', 25 per page.

### 4. API Requirements

- **GET /api/acp/policies** — List saved policies. Filters: platform, mode. Returns: name, platform, mode, allowlist_count, blocklist_count, timestamps. Pagination, sorting.
- **GET /api/acp/policies/{id}** — Single policy detail for agentic queries.

### 5. Role Handling

Uses existing EC role/permission model. Read-only access sufficient for viewing.

### 6. Scope Handling

Policies are visible to all admins with Application Control access. The policy summary data (machines, apps) is filtered by scope.

### 7. MSP and Summary Server

MSP: Policies scoped per customer.

### 8. Notification and Alerts

Not applicable for viewing.

### 9. ME Tracking, MICS and Action Log

- **ME Track:** Track Saved Policies page views, Linux filter usage.
- **Action Log:** Not applicable for viewing.

### 10. Existing Customer Handling

New page — no impact. Previously, policies were accessed only through the Deploy Policy page.

---

# UC-ACP-14 · Source: —
## Move Unmanaged / Requested Apps to Application Group
**Persona:** IT Administrator

---

### 1. Business Problem

After policy deployment, unmanaged and requested applications are discovered on Linux endpoints. The admin needs a streamlined way to triage these — either moving them into an existing allowlist or blocklist group — without leaving the Deploy Policy Summary page. Without this, the admin must manually note the app details and navigate to the Application Groups page to add them.

### 2. Proposed Solution

From the Unmanaged Apps or Requested Apps tab on the Deploy Policy Summary page, the admin selects one or more apps and clicks **'Move to existing App group'**. A modal dialog opens where the admin chooses the target group type (Allowlist/Blocklist) and selects from available groups. The available groups include Linux-specific groups (e.g., 'Allowed Linux apps', 'Blocked Linux apps').

### 3. User Journey — How It Works

1. The admin is on the **Deploy Policy Summary** page (UC-ACP-08), viewing the **Unmanaged Apps** tab or **Requested Apps** tab.

2. The admin checks one or more app rows using the checkboxes. The **'Add'** and **'Move to existing App group'** buttons become enabled. (For Requested Apps, the **'Reject'** button also becomes enabled.)

3. The admin clicks **'Move to existing App group'**. A modal dialog opens.

4. **Modal: 'Move to existing Application Group'**
   - **Application Group Type** (required, `*`): Dropdown — Allowlist / Blocklist.
   - **Select the Application Group** (required, `*`): Dropdown populated based on the selected type.
     - If Allowlist selected: Allowed apps, Allowed Store Apps, **Allowed Linux apps**.
     - If Blocklist selected: Block E Drive, Block firefox, Blocked Apps, **Blocked Linux apps**, Screening Application Group.
   - Changing the Application Group Type repopulates the group dropdown.

5. The admin selects type (e.g., 'Blocklist') and group (e.g., 'Blocked Linux apps'). Clicks **'Move'**.

6. The selected apps are moved to the target group. The modal closes. The Unmanaged/Requested Apps table refreshes — moved apps are no longer listed.

**Alternate Scenarios:**
- Admin clicks 'Cancel' — modal closes, no changes made.
- Admin uses 'Add' button instead — creates a new app group and adds the selected apps to it.
- For Requested Apps: admin clicks 'Reject' — selected app requests are rejected, entries removed from table.

**Edge Cases:**
- No apps selected: buttons remain disabled.
- All apps moved: table shows empty state.
- Moving an app already in the target group: no duplicate created (silently ignored or error message).
- Selecting header checkbox selects all visible rows on the current page.

### 4. API Requirements

- **POST /api/acp/app-groups/{id}/move-apps** — Move apps to an existing group. Payload: app_ids (array), source_type ('unmanaged' | 'requested'). Returns: success count.
- **POST /api/acp/deploy-policy/groups/{id}/requested-apps/reject** — Reject selected requested apps.

### 5. Role Handling

Uses existing EC role/permission model. Write access required.

### 6. Scope Handling

Admin can only move apps discovered within their scope.

### 7. MSP and Summary Server

MSP: App group membership changes are scoped per customer.

### 8. Notification and Alerts

Not applicable.

### 9. ME Tracking, MICS and Action Log

- **ME Track:** Track move-to-group events (count, platform).
- **Action Log:** Log entry — admin moved [N] apps from [source] to group '[group name]', type: [Allowlist/Blocklist], timestamp.

### 10. Existing Customer Handling

New feature. No impact on existing data.

---

# UC-ACP-15 · Source: —
## Create JIT Access for Linux
**Persona:** IT Administrator

---

### 1. Business Problem

In certain scenarios, a Linux endpoint user needs temporary access to applications that are blocked or unmanaged under the current policy. Without a Just-In-Time (JIT) access mechanism for Linux, the admin must either modify the policy permanently (security risk) or tell the user to wait for a policy change cycle.

### 2. Proposed Solution

The **Just In Time Access** page allows the admin to create time-bound access policies for Linux endpoints. The admin can grant temporary allowlisting (all apps or specific apps) for a fixed duration or a time window. JIT policies for Linux follow the same workflow as Windows and Mac, with platform-appropriate computer name suggestions.

### 3. User Journey — How It Works

1. The admin clicks **'Just In Time Access'** in the sidebar (under Manage). The JIT Access page loads.
   - Title bar: 'Just In Time Access' with info icon and a **'Watch Demo'** link.
   - Toolbar: **'Create'** dropdown button, **'Delete'** button, filters (Platform type, Access Type, Status, Timeline, Duration Type).

2. The JIT table shows existing policies. Columns: checkbox, Policy Name (clickable), Applied Time, Duration Type, Computer Name (with OS icon), Status, Action, Access Type, Expiry Date.
   - Linux entries:
     - `Linux Allow all Apps` | -- | Fixed | 0209099VaetS (Linux icon) | Failed | 🔗 | Allowlist | Mar 15, 2026
     - `Linux specific app access` | Mar 16, 2026 02:15 PM | Fixed | LinuxBuild-01 (Linux icon) | Succeeded | 🔗 | Allowlist | Mar 16, 2026

3. The admin clicks the **'Create'** dropdown. Two options appear:
   - **Application Allowlisting** — temporary allowlisting access.
   - **Application Elevation** — temporary privilege elevation (Windows/Linux only).

4. The admin clicks **'Application Allowlisting'**. The JIT creation form opens.

5. **Name and Description section:**
   - Policy Name (required, `*`): text input.
   - 'Add Description' link for optional description.

6. **Define Target section:**
   - **Computer Name** (required, `*`): text input with **autocomplete suggestion dropdown**. Typing filters the list. Available computers include Linux machines (e.g., '0209099VaetS'). The dropdown shows computer name + device identifier with OS icon.
   - **Duration Type**: Radio — Fixed (default) / Window.
   - **Access Duration**: Dropdown — 1 Hour, 2 Hours, 4 Hours, 8 Hours, 12 Hours, 24 Hours, 1 Week.

7. **Access Settings section:**
   - **Access type**: Radio — **All Applications** (default) / **Specific applications**.
   - When 'Specific applications' is selected, a **'Select specific applications'** button appears, opening a modal with tabs: Vendor, Products, Verified Executable, File Hash, Store Apps, Folder Path. Each tab has a searchable list with selectable items and a running 'Selected (N)' counter. A **'Save (N)'** button confirms selection.
   - Checkbox: **'Include Blocklisted applications'** (only for Allowlisting, not Elevation).

8. **Form actions:**
   - **'Deploy Immediately'** — creates the JIT policy and deploys it instantly.
   - **'Cancel'** — returns to JIT Access list.

9. After creation, the new JIT policy appears in the table with the Linux icon, configured duration, and status.

10. The admin clicks a **policy name** (e.g., 'Linux Allow all Apps'). The **JIT Summary** page opens.

11. **JIT Summary page:**
    - Header: back arrow + policy name.
    - Two tabs: **Summary** | **Audit**.
    - **Summary tab** has four sections:
      - **Summary**: Policy Name, Description, Created by, Created Time, Last Modified by, Modified Time.
      - **Target Details**: Computer Name (with OS icon), Device Friendly Name, User Name, Domain Name, Duration Type, Access Duration, Applied Time.
      - **Allowlisting overview**: Access type, Vendor(s)/Product(s)/Executable(s)/FileHash/Store App(s)/Folder Path added counts (as links).
      - **Self-elevation overview**: Access type.
    - **Audit tab**: Two views — Grid (table: Application Name, Application Type, Event Time, User Name, User Domain) and List (sidebar with Executable Event / Store Application Event filters, detailed table).
    - **Example Linux JIT data:**
      - 'Linux Allow all Apps': computer = 0209099VaetS, All Applications, Fixed, 2 Hours.
      - 'Linux specific app access': computer = LinuxBuild-01, Specific applications, Fixed, 4 Hours, 1 vendor, 2 products, 1 executable, 1 folder path.

**Edge Cases:**
- Computer name not found: no suggestions shown.
- Duration Type 'Window' changes the duration format to date-based.
- Selecting 'Specific applications' with 0 apps selected: validation error on submit.
- JIT policy for offline machine: policy created with status 'Failed' until machine comes online.

### 4. API Requirements

- **GET /api/acp/jit-policies** — List JIT policies. Filters: platform, access_type, status, timeline, duration_type. Pagination, sorting.
- **POST /api/acp/jit-policies** — Create JIT policy. Payload: name, description, computer_name, duration_type, access_duration, access_type, app_ids (for specific), include_blocklisted, deploy_type ('allowlisting'|'elevation'). Returns: policy ID and status.
- **GET /api/acp/jit-policies/{id}** — JIT policy detail and summary.
- **GET /api/acp/jit-policies/{id}/audit** — Audit events for a JIT policy.
- **DELETE /api/acp/jit-policies** — Delete selected JIT policies. Payload: policy_ids (array).

### 5. Role Handling

Uses existing EC role/permission model. Admin with Application Control write access can create JIT policies.

### 6. Scope Handling

Admin can only target computers within their scope. JIT policies are visible only to admins with access to the associated machine's scope.

### 7. MSP and Summary Server

MSP: JIT policies scoped per customer.

### 8. Notification and Alerts

Not applicable at JIT creation time.

### 9. ME Tracking, MICS and Action Log

- **ME Track:** Track JIT policy creation events (count, platform, access type).
- **Action Log:** Log entry — admin created JIT policy '[name]', computer: [name], access: [type], duration: [duration], timestamp.

### 10. Existing Customer Handling

JIT Access existed for Windows and Mac. Linux is a new platform option. Existing JIT policies unchanged.

---

# UC-ACP-16 · Source: —
## Configure Linux Child Process Control
**Persona:** IT Administrator

---

### 1. Business Problem

On Linux endpoints, parent applications frequently spawn child processes (e.g., `apt-get` spawning `dpkg`, package managers launching post-install scripts). Without centralized child process control, these chains run unchecked — a blocklisted application could bypass policy by being invoked as a child of an allowed parent. The admin needs a way to define which applications are permitted to spawn child processes on Linux endpoints.

### 2. Proposed Solution

The **Child Process** page under Manage provides a **Global Child Process Configuration** that applies to all discovered endpoints. The admin selects applications that are allowed to spawn child processes. The page has three platform tabs — Windows, Mac, and Linux. The Linux tab provides Package-based and Executable-based selection with a **'Whole Process Tree'** toggle per application to control whether the entire process chain is permitted.

### 3. User Journey — How It Works

1. The admin clicks **'Child Process'** in the sidebar (under Manage). The Child Process page loads.

2. **Info banner** (blue): 'Child Process control is currently available only for Windows.'
   - *(Note: Despite this banner text, the wireframe shows Mac and Linux tabs are functional. This banner text may need updating.)*

3. **Global Child Process Configuration** — a container with a checkbox header:
   - Checkbox: **Global Child Process Configuration** (checked by default).
   - Description: 'All discovered endpoints will be allowed to run child processes only for applications included here.'

4. **Three platform tabs** below the header:
   - **Windows** (default, active) — Windows icon
   - **Mac** — Apple icon
   - **Linux** — Linux/Tux icon

5. The admin clicks the **'Linux'** tab. The Linux platform panel loads.

6. **Linux toolbar:**
   - **Filter dropdown:** All, **Package**, Executables, File Hash.
     - *(Linux does NOT have Vendor or File Path filters in Child Process — unlike the Application Group creation form.)*
   - **Search field:** filters the package list in real-time.
   - **Selected (N):** counter showing total selected items.

7. **Package section** — grouped by vendor. Each vendor group has:
   - Vendor header with name and 'Verified Publisher' badge.
   - A **group-level checkbox** in the table header that selects/deselects all packages under that vendor.
   - Table columns: checkbox, **Application** (package name), **Child Process** ('Whole Process Tree' button), info icon.
   - **Linux vendor/package data:**
     - **Canonical Ltd.** (Verified Publisher): `snap`, `apt-get`, `dpkg`
     - **Red Hat, Inc.** (Verified Publisher): `yum`, `dnf`, `rpm`
     - **Google LLC** (Verified Publisher): `Google Chrome`
     - **Mozilla Corporation** (Verified Publisher): `Firefox`

8. For each package row:
   - Clicking **anywhere on the row** toggles the checkbox (same as App Group creation).
   - The **'Whole Process Tree'** button is **disabled** (greyed) until the row is selected.
   - Once the row is checked, the 'Whole Process Tree' button becomes **active/clickable**. Clicking it toggles the entire process tree control — when active, all child and grandchild processes spawned by the application are allowed.
   - Deselecting the row disables the 'Whole Process Tree' button and resets it.

9. The group-level checkbox selects/deselects all packages under that vendor. Partial selection shows indeterminate state.

10. The **Selected (N)** counter updates as the admin selects packages.

11. The admin clicks **'Apply'** at the bottom to save the child process configuration.
    - **'Reset'** discards all changes and reverts to the previously saved state.

**Platform Tab Differences:**

| Feature | Windows | Mac | Linux |
|---------|---------|-----|-------|
| Filter options | All, Products, Executables | All, Vendor, Products, Executables, File Hash, Folder Path | All, **Package**, Executables, File Hash |
| Vendor card grid | No | Yes | **No** |
| Package/Product section | Products (by vendor) | Products (by vendor) | **Package** (by vendor) |
| Whole Process Tree | Yes (per product) | Yes (per product) | **Yes (per package)** |
| View toggle (Grid/List) | Yes | No | **No** |

**Alternate Scenarios:**
- Admin unchecks the 'Global Child Process Configuration' checkbox: entire configuration is disabled. No child process rules apply.
- Admin switches between platform tabs: selections on each tab are independent and preserved.
- Admin clicks 'Apply' without selecting any packages on the Linux tab: valid — no Linux child process rules are active.

**Edge Cases:**
- Zero packages selected on Linux tab: 'Selected (0)' counter. Apply saves empty configuration for Linux.
- Select a package, enable 'Whole Process Tree', then deselect the package: 'Whole Process Tree' resets to disabled.
- Select all packages via group checkbox, then deselect one: group checkbox changes to indeterminate.
- Search with no matching results: package list shows empty state.
- Switching tabs preserves state — navigating away from Child Process page without clicking 'Apply' discards unsaved changes.

### 4. API Requirements

- **GET /api/acp/child-process/config** — Get current child process configuration for all platforms. Returns: global_enabled (boolean), per-platform selected applications with process_tree flags.
- **PUT /api/acp/child-process/config** — Save child process configuration. Payload: global_enabled, platforms object with selected_apps (array of { app_id, whole_process_tree: boolean }) per platform.
- **GET /api/acp/child-process/available-apps?platform=linux** — List available applications for child process selection on Linux. Grouped by vendor. Supports search, filter by type (package, executable, hash).

### 5. Role Handling

Uses existing EC role/permission model. Admin with Application Control write access can modify child process configuration. Read-only admins can view but not apply changes.

### 6. Scope Handling

Child process configuration is **global** — it applies to all discovered endpoints across all scopes. The available applications shown are aggregated from all agents within the technician's scope.

### 7. MSP and Summary Server

MSP: Child process configuration is per-customer. Each MSP customer has independent settings.

### 8. Notification and Alerts

Not applicable for configuration.

### 9. ME Tracking, MICS and Action Log

- **ME Track:** Track child process configuration changes (platform, count of apps selected, process tree toggles).
- **Action Log:** Log entry — admin updated child process configuration, platform: Linux, selected: [N] packages, whole_process_tree: [N] enabled, timestamp.

### 10. Existing Customer Handling

Child Process configuration existed for Windows and Mac. The Linux tab is new. Existing Windows/Mac configurations remain unchanged. If no Linux packages are selected, Linux child process control is effectively not configured.

---

# UC-ACP-17 · Source: —
## Manage JIT Deployments
**Persona:** IT Administrator

---

### 1. Business Problem

After creating JIT (Just-In-Time) access policies, the administrator needs a centralized view to monitor, filter, and manage all deployed JIT policies across platforms. Without this, the admin has no visibility into which policies are active, failed, expiring, or which computers are covered — making lifecycle management impossible.

### 2. Proposed Solution

The **JIT Deployments** page provides a master list of all admin-created JIT policies. The admin can create new policies (Allowlisting or Elevation), delete existing ones, filter by platform / access type / status / timeline / duration type, and take row-level actions (Modify / Delete). Clicking a policy name opens the JIT Summary detail page. **Approved JIT Requests also appear here as deployments** — when an end-user request is approved, it is automatically reflected in this list.

### 3. User Journey — How It Works

1. The admin clicks **'Just In Time Access' → 'JIT Deployments'** in the sidebar. The JIT Deployments page loads.

2. **Page header:** Clock icon, title **'JIT Deployments'**, info icon, and a **'Watch Demo'** link.

3. **Toolbar:**
   - **Create** dropdown button (primary) with two options:
     - **Application Allowlisting** — opens JIT creation form for allowlisting.
     - **Application Elevation** — opens JIT creation form for elevation.
   - **Delete** button (danger) — deletes selected policies.
   - **5 filter dropdowns:** Platform type, Access Type, Status, Timeline, Duration Type.
   - **Toolbar right:** Total Records link, Search icon, Column chooser icon, Download/Export icon.

4. **Data table columns:**
   - Checkbox (bulk select)
   - **Policy Name** — clickable link, opens JIT Summary page (Summary + Audit tabs).
   - **Applied Time** — timestamp or `--` if not yet applied.
   - **Duration Type** — Fixed or Window.
   - **Computer Name** — with OS icon (Windows / Mac / Linux).
   - **Status** — Failed or Succeeded.
   - **Access Type** — Elevation or Allowlisting.
   - **Expiry Date** — sortable column.
   - **Action** — ellipsis menu with **Modify** and **Delete** options.

5. **Sample data (11 rows):**
   - Windows machines: Florina (Failed/Elevation), EC2AMAZ-DS25S0F (Succeeded/Elevation), EC2AMAZ-DS25S0F (Succeeded/Allowlisting), EC2AMAZ-DS25S0F (Succeeded/Allowlisting — Window duration), 001679907n4O (Failed/Elevation), 0041000ePUlH (Failed/Allowlisting), EC2AMAZ-DS25S0F (Failed/Allowlisting).
   - Mac machines: 010780015ksR (Failed/Allowlisting), 0052200WJVMv (Failed/Allowlisting).
   - Linux machines: 0209099VaetS (Failed/Allowlisting), LinuxBuild-01 (Succeeded/Allowlisting).

6. The admin clicks a **Policy Name** link. The JIT Summary page opens with Summary and Audit tabs.

7. The admin selects one or more rows via checkboxes. Clicks **'Delete'**. Selected policies are removed.

8. The admin uses filters to narrow the list (e.g., Platform type = Linux, Status = Succeeded). Only matching rows display.

9. **Pagination:** `1 - 11 of Total Records`, page size = 25, prev/next buttons.

**Cross-Page Relationship — JIT Requests:**
- When the admin **approves** a JIT Request on the JIT Requests page, the approved request is **automatically deployed** and appears as a new row in the JIT Deployments table.
- The deployment row reflects the request's policy name, computer, access type, and duration.
- This ensures a single source of truth: all active JIT access — whether admin-created or user-requested-and-approved — is visible in JIT Deployments.

**Alternate Scenarios:**
- No JIT policies exist: table shows empty state.
- All policies are expired: Status filter can isolate them.
- Admin clicks Create → Application Elevation: JIT creation form opens (covered in UC-ACP-15).
- Admin exports the list via Download icon: CSV/PDF export initiates.

**Edge Cases:**
- Bulk delete with no rows selected: Delete button has no effect (no confirmation dialog).
- Policy with `--` Applied Time: policy was created but not yet applied to the endpoint.
- Mixed platform selection: Delete applies to all selected regardless of platform.

### 4. API Requirements

- **GET /api/acp/jit/deployments** — List all JIT deployment policies. Supports filters: platform, access_type, status, timeline, duration_type. Supports pagination and sorting (by expiry_date).
- **DELETE /api/acp/jit/deployments** — Bulk delete selected policies. Payload: array of policy IDs.
- **GET /api/acp/jit/deployments/{id}/summary** — Get JIT policy summary (Summary + Audit tabs).

### 5. Role Handling

Uses existing EC role/permission model. Admin with Application Control write access can create, modify, and delete JIT deployments. Read-only admins can view the list and summary but cannot create, modify, or delete.

### 6. Scope Handling

JIT Deployments are scoped to the technician's accessible custom groups. The admin sees only deployments targeting computers within their scope. Cross-scope policies are hidden.

### 7. MSP and Summary Server

MSP: JIT Deployments are per-customer. Each MSP customer has independent deployment lists.

### 8. Notification and Alerts

Not applicable for the list view. Notifications are triggered at creation/approval time (covered in UC-ACP-15 and UC-ACP-18).

### 9. ME Tracking, MICS and Action Log

- **ME Track:** Track JIT deployment list views, filter usage, delete actions.
- **Action Log:** Log entry — admin deleted JIT policy '[name]', computer: [name], access: [type], timestamp.

### 10. Existing Customer Handling

JIT Deployments page is existing functionality. No migration needed. Approved JIT Requests appearing as deployments is the new cross-page integration.

---

# UC-ACP-18 · Source: —
## Manage JIT Requests (Approval Workflow)
**Persona:** IT Administrator

---

### 1. Business Problem

When EPM policies are configured with 'Require administrator approval via a formal elevation request' (UC-EPM-02, Step 2), end-users submit JIT elevation or allowlisting requests from their endpoints. The administrator needs an inbox-style interface to review, approve, or decline these requests efficiently. Without this, requests pile up with no centralized management, and users are blocked from performing time-sensitive tasks.

### 2. Proposed Solution

The **JIT Requests** page provides an inbox-style list of all incoming JIT requests with a **pending count badge** in the sidebar and page header. The admin can bulk-approve or bulk-decline requests, filter by status and request type, and take per-row actions. **When a request is approved, it is automatically deployed and appears in the JIT Deployments page (UC-ACP-17).** Declined requests remain in the list for audit purposes.

### 3. User Journey — How It Works

1. The admin clicks **'JIT Requests'** in the sidebar. A **red badge (5)** on the sidebar item indicates 5 pending requests. The JIT Requests page loads.

2. **Page header:** Inbox icon, title **'JIT Requests'**, red pending count badge showing the number of pending requests (e.g., `5`), info icon.

3. **Toolbar:**
   - **Approve** button (green, disabled until rows selected) — bulk-approves selected pending requests.
   - **Decline** button (red, disabled until rows selected) — bulk-declines selected pending requests.
   - **JIT Requests** status filter: All, **Pending** (default / selected), Approved, Declined.
   - **Request Type** filter: All, Elevation, Allowlisting.
   - **Toolbar right:** Total Records link, Search icon, Column chooser icon, Download/Export icon.

4. **Data table columns (12):**
   - Checkbox (bulk select)
   - **Requested By** — username of the end-user who submitted the request.
   - **Policy Name** — clickable link, opens JIT Summary page.
   - **Request Type** — badge with icon: Elevation (arrow-up icon, blue) or Allowlisting (list-check icon, teal).
   - **Computer Name** — with OS icon (Windows / Mac / Linux).
   - **Requested On** — sortable timestamp.
   - **Duration** — requested access duration (e.g., 2 hours, 30 minutes).
   - **Reason** — truncated with ellipsis; full text on hover tooltip.
   - **Request Status** — color-coded badge: Pending (amber), Approved (green), Declined (red).
   - **Actioned By** — admin who approved/declined, or `--` if pending.
   - **Actioned On** — timestamp of approval/decline, or `--` if pending.
   - **Action** — ellipsis menu (context-sensitive, see below).

5. **Default view:** Status filter defaults to **Pending**. Only pending requests are visible on page load. Pending rows have **bold/unread styling** (`jit-req-unread`). Actioned rows have **normal/read styling** (`jit-req-read`).

6. **Sample data (10 rows):**
   - **5 Pending** (visible by default):
     - john.doe — 'Temp Elevation - VS Code', Elevation, EC2AMAZ-DS25S0F (Windows), 2 hours, 'Need admin access to debug production issue'.
     - sarah.kim — 'Allow Docker Desktop', Allowlisting, EngPC-01 (Windows), 4 hours, 'Docker required for container testing'.
     - mike.chen — 'Elevate Wireshark', Elevation, LinuxBuild-01 (Linux), 1 hour, 'Network packet capture for troubleshooting'.
     - lisa.wang — 'Allow Postman', Allowlisting, SupportPC-01 (Windows), 8 hours, 'API testing for client integration'.
     - raj.patel — 'Temp Access - npm install', Allowlisting, LinuxSrv-02 (Linux), 30 minutes, 'Installing node dependencies for build'.
   - **3 Approved** (hidden, shown when filter = All or Approved):
     - amy.zhang — 'Elevate IntelliJ IDEA', Elevation, DevPC-01 (Windows), 4 hours, approved by admin.
     - tom.wilson — 'Allow VPN Client', Allowlisting, RemotePC-01 (Windows), 24 hours, approved by admin.
     - nina.garcia — 'Elevate PowerShell', Elevation, WinPC-01 (Windows), 1 hour, approved by admin.
   - **2 Declined** (hidden, shown when filter = All or Declined):
     - kevin.lee — 'Allow BitTorrent', Allowlisting, MktPC-02 (Windows), declined by admin.
     - david.brown — 'Allow Spotify', Allowlisting, MktPC-05 (Windows), declined by admin.

7. **Bulk approve/decline:**
   - Admin selects one or more pending rows via checkboxes.
   - Approve/Decline buttons become **enabled**.
   - Admin clicks **'Approve'**. Selected rows update: status badge changes to 'Approved' (green), Actioned By = 'admin', Actioned On = current timestamp, row style changes to read. **The approved requests are simultaneously deployed and appear in JIT Deployments (UC-ACP-17).**
   - Admin clicks **'Decline'**. Same update flow but status = 'Declined' (red). No deployment is created.
   - Pending count badge decrements accordingly.

8. **Per-row action menu (ellipsis):**
   - **For Pending requests:** Approve, Decline, Modify, Delete.
   - **For Approved/Declined requests:** Modify, Delete only (no re-approve/re-decline).
   - Clicking **Approve** on a single row: same effect as bulk approve for that row.
   - Clicking **Delete**: removes the request row entirely.

9. **Filtering:**
   - Change status filter to **'All'**: all 10 rows visible (pending + approved + declined).
   - Change status filter to **'Approved'**: only 3 approved rows visible.
   - Change Request Type to **'Elevation'**: only elevation-type rows visible.
   - Filters combine: Status = Pending + Type = Allowlisting shows only pending allowlisting requests.

10. **Pending count badge** updates in real-time:
    - Header badge and sidebar badge both show current pending count.
    - Approving/declining a request decrements the count.
    - When all pending requests are actioned, badge shows `0`.

11. **Pagination:** `1 - 10 of Total Records`, page size = 25, prev/next buttons.

**Cross-Page Relationship — JIT Deployments:**
- **Approved requests flow to JIT Deployments.** When the admin approves a request, a corresponding deployment entry is created in the JIT Deployments page (UC-ACP-17). The deployment inherits the policy name, computer name, access type, and duration from the request.
- **In JIT Requests, the approved request remains** with status = Approved for audit trail purposes.
- **Declined requests do NOT create deployments.** They remain only in JIT Requests with status = Declined.

**Alternate Scenarios:**
- No pending requests: badge shows `0`, table shows empty state when filtered to Pending.
- Admin switches to 'All' filter: sees complete request history across all statuses.
- Admin modifies an approved request: opens the JIT edit form with pre-populated values.
- Admin deletes a declined request: row is removed permanently.

**Edge Cases:**
- Bulk approve with mixed selection (pending + approved rows): only pending rows are affected; already-approved rows are unchanged.
- Select-all checkbox: selects only visible (non-disabled) rows based on current filter.
- Approve last pending request: badge updates to `0`, if filter is 'Pending' the table shows empty state.
- Reason column overflow: text truncated with ellipsis, full text visible on hover tooltip.

### 4. API Requirements

- **GET /api/acp/jit/requests** — List all JIT requests. Supports filters: status (pending/approved/declined), request_type (elevation/allowlisting). Supports pagination and sorting (by requested_on).
- **POST /api/acp/jit/requests/approve** — Bulk approve. Payload: array of request IDs. Side effect: creates deployment entries in JIT Deployments.
- **POST /api/acp/jit/requests/decline** — Bulk decline. Payload: array of request IDs.
- **PUT /api/acp/jit/requests/{id}** — Modify a request (change duration, etc.).
- **DELETE /api/acp/jit/requests/{id}** — Delete a request.
- **GET /api/acp/jit/requests/pending-count** — Returns count of pending requests for badge display.

### 5. Role Handling

Uses existing EC role/permission model. Admin with Application Control write access can approve, decline, modify, and delete JIT requests. Read-only admins can view the list but cannot take any action. Approve/Decline/Delete buttons are hidden for read-only admins.

### 6. Scope Handling

JIT Requests are scoped to the technician's accessible custom groups. The admin sees only requests targeting computers within their scope. Requests for out-of-scope computers are hidden.

### 7. MSP and Summary Server

MSP: JIT Requests are per-customer. Each MSP customer has independent request queues. The pending count badge reflects only the current customer's pending requests.

### 8. Notification and Alerts

- On approval: end-user receives notification that their JIT request was approved, with access details (duration, expiry).
- On decline: end-user receives notification that their request was declined.
- Admin receives no notification for new requests in the wireframe — the badge count serves as the indicator.

### 9. ME Tracking, MICS and Action Log

- **ME Track:** Track JIT request approve/decline counts, response time (request → action), request type distribution.
- **Action Log:** Log entry — admin [approved/declined] JIT request from '[user]', policy: '[name]', computer: [name], access: [type], timestamp.

### 10. Existing Customer Handling

JIT Requests is a new page introduced alongside the EPM approval workflow. No migration needed. Existing JIT deployments (admin-created) are unaffected. The page only shows end-user-initiated requests.

---

# UC-EPM-01 · Source: —
## View EPM Policies List
**Persona:** IT Administrator

---

### 1. Business Problem

IT administrators need a centralized place to view and manage all Endpoint Privilege Management policies across platforms. Without this, there is no way to assess which EPM policies exist, their elevation configuration, and how they map to platforms — forcing the admin to check each deployment individually.

### 2. Proposed Solution

The **Endpoint Privilege Management Policies** page (accessible via Policies → EPM Policies in the sidebar) lists all EPM policies — Windows, Linux, and Mac — with metadata including platform, elevation scope, auto-elevation status, and vendor/product counts. The admin can filter by platform and drill into each policy to view or edit. Currently, **only Windows** EPM policies can be created from this page; Linux and Mac policies appear as read-only placeholder rows.

### 3. User Journey — How It Works

1. The admin clicks **'EPM Policies'** in the sidebar (under Policies). The **Endpoint Privilege Management Policies** page loads.

2. Title bar: shield icon + **'Endpoint Privilege Management Policies'**.

3. Toolbar:
   - **'Create Policy'** dropdown button. Clicking reveals **one** option:
     - **Windows** (Windows icon).
     - *(Mac and Linux are NOT available in the create dropdown.)*
   - **Filter By:** Platform dropdown (Platform / Windows / Mac / Linux).
   - Toolbar actions: Total Records link, search icon, column chooser icon, download icon.

4. Table columns: **Policy Name** (clickable link), **Platform** (OS icon + label), **Elevation** (scope text), **Auto Elevate** (Yes/No), **Vendors** (count), **Products** (count), **Created Time**, **Last Modified**, **Action** (ellipsis menu).

5. Pre-existing EPM policy data (three rows):

   | Policy Name | Platform | Elevation | Auto Elevate | Vendors | Products | Created | Modified |
   |---|---|---|---|---|---|---|---|
   | Windows EPM Policy | Windows | Specific Apps | Yes | 2 | 2 | Oct 7, 2024 | Oct 7, 2024 |
   | Linux EPM Policy | Linux | Not Configured | No | 0 | 0 | Mar 14, 2026 | Mar 16, 2026 |
   | Mac EPM Policy | Mac | Not Configured | No | 0 | 0 | Mar 15, 2026 | Mar 17, 2026 |

6. The admin clicks a **policy name** (e.g., 'Windows EPM Policy'). The **Privileged Application List** form opens pre-populated with existing settings (see UC-EPM-02).

7. Pagination: '1 – 3 of Total Records', 25 per page, prev/next buttons.

**Edge Cases:**
- No EPM policies: table shows empty state.
- Platform filter applied: only matching policies visible (e.g., selecting 'Linux' shows only the Linux row).
- Clicking a Linux or Mac policy name opens the form for that platform, but those policies currently show 'Not Configured'.

### 4. API Requirements

- **GET /api/epm/policies** — List EPM policies. Filters: platform. Returns: name, platform, elevation, auto_elevate, vendors_count, products_count, timestamps. Pagination, sorting.
- **DELETE /api/epm/policies/{id}** — Delete an EPM policy (via Action menu).

### 5. Role Handling

Uses existing EC role/permission model. Read-only access for viewing; write access for create/edit/delete.

### 6. Scope Handling

EPM policies are global entities — not scope-bound. Visible to all admins with EPM access.

### 7. MSP and Summary Server

MSP: EPM policies scoped per customer.

### 8. Notification and Alerts

Not applicable for viewing.

### 9. ME Tracking, MICS and Action Log

- **ME Track:** Track EPM Policies page views.
- **Action Log:** Log entry when an EPM policy is deleted.

### 10. Existing Customer Handling

Existing page — Windows EPM Policy already exists for current customers. Linux and Mac rows are new additions (placeholder status). No migration required.

---

# UC-EPM-02 · Source: —
## Create / Edit Windows EPM Policy (Privileged Application List)
**Persona:** IT Administrator

---

### 1. Business Problem

Windows endpoints frequently require applications to run with elevated (administrator) privileges — installers, development tools, system utilities. Without centralized privilege management, end users either run as local admins permanently (security risk) or raise IT tickets for every elevation (productivity loss). The admin needs a way to define which applications can self-elevate, what happens when an out-of-scope application needs elevation, and optionally remove unnecessary local admin accounts — all from a single, structured policy form.

### 2. Proposed Solution

The **Privileged Application List** form (accessible via Create Policy → Windows on the EPM Policies page, or by clicking an existing policy name) uses a **step-based wizard** to guide the admin through privilege elevation configuration:

- **Step 1:** Define the scope of applications permitted for privilege elevation (specific curated list OR all applications approved in Application Control, with an exclusion option).
- **Step 2:** Configure the elevation behaviour for applications *outside* the defined scope (formal approval workflow OR self-service business justification).
- **Auto Admin Removal:** Optionally remove local admin accounts from targeted machines.

The policy is saved and can later be associated with a deployment via the Deploy Policy form (UC-EPM-03).

### 3. User Journey — How It Works

1. The admin navigates to the EPM Policies page (UC-EPM-01) and clicks **'Create Policy'** → **'Windows'**. The **Privileged Application List** form opens.
   - Header: back arrow (← returns to EPM Policies list), shield icon, title **'Privileged Application List'**, subtitle: *'Control usage of local admin accounts by allowing standard users to self-elevate their privileges to specific applications.'*
   - Tip link (top-right): *'Have suggestions to enhance privilege management?'* (lightbulb icon).

2. **Policy Name** (required, `*`): text input, placeholder *'Enter a policy name'*. The admin enters a name (e.g., `Windows Developer Elevation Policy`).

#### Step 1 — Define the scope of applications permitted for privilege elevation

3. **Step 1 header:**
   - Step number badge `1`.
   - Title: *'Define the scope of applications permitted for privilege elevation'*.
   - Description: *'Applications within this scope will be elevated without requiring administrator approval. All elevation events are recorded in the audit trail irrespective of the scope selection.'*
   - **Toggle switch** (right side): ON by default. Turning OFF collapses the step body and disables scope configuration.

4. **Radio card A — "Specific applications defined by policy"** (default selected, **Recommended** badge):
   - Description: *'Elevation is restricted to a manually curated list of applications. Each entry may be identified by file hash, product name, publisher, or installation path. Provides the highest degree of control over which executables may acquire elevated privileges.'*
   - When selected, the **Specific applications panel** appears below:
     - Header: *'Specific applications selected'* + **Auto Elevation** checkbox (checked by default, with help `?` icon).
     - Read-only chip display organised by category:
       - **Vendor (2):** Google Inc, Google LLC.
       - **Products (9):** 7-Zip, PostgreSQL, Docker Engine, DockerCli, Git, OpenJDK Platform 8, Microsoft SQL Server, Microsoft® Visual Studio® 2017, Notepad++.
       - **Verified Executable (4):** jabswitch.exe, DocumentCollector.exe, zendwin32.exe, PrintUtil.exe.
       - **File Hash (4):** 7za.exe, Dell.TechHub.Instrumentation.SubAgent.exe, createdump.exe, createdump.exe.
       - **Folder Path (1):** C:\Program Files\Custom.
     - **'Modify'** button at the bottom opens the application selection form to edit selections.

5. **Radio card B — "All applications approved in Application Control":**
   - Description: *'Elevation is permitted for every application present in the Application Control allowlist. This selection maintains consistency between the application access policy and the privilege elevation policy without requiring additional configuration.'*
   - When selected, the **Exclusion list panel** appears below:
     - Header: *'Excluded applications'* — *(These will NOT be elevated even though they are in the allowlist)*.
     - Read-only chip display:
       - **Vendor (1):** Unknown Publisher.
       - **Products (2):** AutoHotkey, WinRAR archiver.
       - **Verified Executable (1):** powershell_ise.exe.
     - **'Modify'** button to edit exclusions.

#### Step 2 — Configure elevation behaviour for applications outside the defined scope

6. **Step 2 header:**
   - Step number badge `2`.
   - Title: *'Configure the elevation behavior for applications outside the defined scope'*.
   - Description: *'This setting governs how the system responds when an end user attempts to execute an application with elevated privileges and that application is not covered by the scope defined in Step 1.'*
   - **Toggle switch** (right side): ON by default. Turning OFF collapses the step body.

7. **Radio card A — "Require administrator approval via a formal elevation request"** (**Recommended** badge):
   - Description: *'The end user submits a formal elevation request specifying a justification and a requested access duration. The request is routed to a designated technician or administrator for review. Elevation is granted only upon explicit approval and is automatically revoked upon expiry of the approved duration. All request, approval, and revocation events are recorded in the audit trail.'*

8. **Radio card B — "Permit elevation upon submission of a business justification"** (default selected, **Self-service** badge):
   - Description: *'The end user is prompted to enter a justification before elevation proceeds. No administrator approval is required — elevation is granted immediately upon a valid submission. The justification and the identity of the requesting user are recorded in the audit trail. Suited to environments where end users are trusted but a verifiable accountability record is required.'*

#### Enable Automatic Local Admin Removal

9. **'Enable Automatic Local Admin Removal'** — Checkbox toggle section:
   - **Unchecked (default):** Section is collapsed. No admin removal.
   - **Checked:** Section expands, revealing:
     - Subtitle (blue): *'Except for the accounts retained, all other local admin accounts will be automatically removed from the computer groups chosen.'*
     - **'Select Admin Account(s) to be retained'** (red label):
       - Tag/chip input showing retained accounts (e.g., `sysadmin`, `emsadmin`, `Administrator`). Each chip has `×` to remove.
       - **'Browse'** button to select accounts from Active Directory or local accounts.

#### Form Actions

10. **'Save list'** — saves the EPM policy. The admin is returned to the EPM Policies list.
11. **'Cancel'** — returns to the EPM Policies list without saving.
12. Footer: *'Running in restricted mode.'* warning + copyright.

13. When **editing** an existing policy, the form is pre-populated with all current settings. Clicking the policy name on the EPM Policies list opens this same form in edit mode.

**Alternate Scenarios:**
- Admin selects 'All applications approved in Application Control': the specific apps panel is hidden; the exclusion list panel appears.
- Admin toggles Step 1 OFF: scope configuration is disabled — no applications are explicitly elevated via policy.
- Admin toggles Step 2 OFF: no out-of-scope elevation behaviour is configured; out-of-scope apps are simply blocked.
- Admin selects 'Require administrator approval' in Step 2: formal approval workflow is enforced for all out-of-scope elevation attempts.
- Admin enables 'Auto Elevation' checkbox inside the specific apps panel: selected applications are elevated silently without user prompt.
- Admin unchecks 'Auto Elevation': user still needs to trigger the elevation manually for in-scope apps.
- Admin enables local admin removal without retaining any accounts: all local admin accounts are removed (dangerous — should show confirmation warning).

**Edge Cases:**
- Empty policy name: validation error — required field.
- Duplicate policy name: server-side error.
- Both Step 1 and Step 2 toggled OFF: policy effectively does nothing — [NEEDS CLARIFICATION] should this be allowed or show a warning?
- No applications selected when 'Specific applications' is chosen and Modify has not been used: the panel displays the default/pre-existing selection set.
- Removing all retained admin accounts when removal is enabled: warning about removing all local admins.
- Clicking 'Modify' opens the application selection form; cancelling returns without changes.

### 4. API Requirements

- **POST /api/epm/policies** — Create EPM policy. Payload: name, platform (`windows`), step1_enabled (boolean), scope_type (`specific_policy` | `all_approved`), selected_vendors (array), selected_products (array), selected_executables (array), selected_hashes (array), selected_folder_paths (array), auto_elevation (boolean), excluded_vendors (array), excluded_products (array), excluded_executables (array), step2_enabled (boolean), outside_scope_behavior (`approval` | `justification`), auto_admin_removal (boolean), retained_admin_accounts (array). Returns: policy ID.
- **PUT /api/epm/policies/{id}** — Update existing EPM policy. Same payload.
- **GET /api/epm/policies/{id}** — Retrieve single EPM policy for edit form population.
- **GET /api/epm/discovered-vendors?platform=windows** — Vendors for the application selection form.
- **GET /api/epm/discovered-products?platform=windows&vendor={vendorId}** — Products under a vendor.

### 5. Role Handling

Uses existing EC role/permission model. Admin with EPM write access can create and edit. Read-only admins can view the list but not create/edit.

### 6. Scope Handling

EPM policies are global entities — not scope-bound. The selected applications (vendors, products, executables) are discovered from agents across all scopes.

### 7. MSP and Summary Server

MSP: EPM policies scoped per customer. MSP technician creates/edits within their assigned customer's tenant.

### 8. Notification and Alerts

Not applicable at policy creation time.

### 9. ME Tracking, MICS and Action Log

- **ME Track:** Track EPM policy creation/edit events (platform, scope_type, Step 1 on/off, Step 2 on/off, outside_scope_behavior, auto_elevation, admin_removal).
- **API Usage:** Track API calls to EPM policy endpoints.
- **Action Log:** Log entry — admin created/edited EPM policy '[name]', platform: Windows, scope: [specific_policy|all_approved], outside_scope: [approval|justification], auto_elevation: [on/off], admin_removal: [enabled/disabled], timestamp.

### 10. Existing Customer Handling

Existing Windows EPM policies are migrated to the new step-based form. Legacy toggle settings (allow all elevation, configure specific app, auto elevation radio) are mapped to the new Step 1 scope type and auto-elevation checkbox. Step 2 defaults to 'Permit elevation upon submission of a business justification' for existing policies. Admin removal settings carry over unchanged.

---

# UC-EPM-03 · Source: —
## Deploy EPM Policy (Windows — Combined or EPM-Only)
**Persona:** IT Administrator

---

### 1. Business Problem

After creating an EPM policy, the admin needs to deploy it to specific Windows machine groups. Two deployment modes are needed: (a) combined deployment alongside Application Control policies, and (b) deploying **only** EPM without any ACP configuration — for example when privilege management is rolled out independently to machines that already have ACP applied.

### 2. Proposed Solution

The policy association form (accessible via 'Associate Group' on Deploy Policy or 'Create Policy' from Saved Policies) includes a **'Deploy EPM Policy'** accordion that appears **only for Windows**. Two deployment workflows are supported:

- **Combined ACP + EPM:** Both accordions checked — the admin configures application control groups/mode AND selects EPM policies in a single deployment.
- **EPM-Only:** The admin unchecks the 'Deploy Application Control' accordion and deploys only the EPM policy to the target group.

### 3. User Journey — How It Works

#### Scenario A: Combined ACP + EPM deployment

1. The admin clicks **'Associate Group'** on the Deploy Policy page. The **Associate Policy** form opens.

2. The admin selects **Windows** as the platform.

3. The form shows **two accordions**:
   - **'Deploy Application Control'** (accordion 1, checkbox checked, open by default) — same as UC-ACP-05.
   - **'Deploy EPM Policy'** (accordion 2, checkbox checked, open by default) — **Windows only**.
   
   *(For Mac and Linux, only the 'Deploy Application Control' accordion appears. The 'Deploy EPM Policy' accordion is NOT rendered.)*

4. **'Deploy EPM Policy' accordion:**
   - Accordion header: checkbox + **'Deploy EPM Policy'** title + collapse/expand arrow.
   - Unchecking the accordion checkbox collapses and greys out the body. EPM will not be deployed.
   - **'EPM Policy'** field (required when accordion checked, `*`): Multi-select dropdown with chip display.
     - Clicking the dropdown trigger opens a list of available EPM policies:
       - `Windows EPM Policy`
       - `EPM - Developer Workstations`
       - `EPM - Admin Access Policy`
     - The admin selects one or more. Selected policies appear as **chips** inside the trigger. Each chip has `×` to remove.
   - **Refresh** icon button (sync icon) next to the dropdown — refreshes the available policies list.
   - **'Create Policy'** dropdown link — opens create EPM policy form (UC-EPM-02) inline. Only Windows option available.

5. The admin fills in both sections:
   - **Define Target:** Computer/Custom Group.
   - **Deploy Application Control:** Application Groups, Mode (Audit/Strict), Settings.
   - **Deploy EPM Policy:** Selected EPM policies.

6. The admin clicks **'Deploy'** or **'Deploy Immediately'**.
   - Both the ACP and EPM policies are deployed to the target group.
   - Deploy note: *'The policy gets deployed only during the next refresh cycle (90 minutes). To deploy now, Click Deploy Immediately.'*
   - The deployment appears on the Deploy Policy list.

#### Scenario B: EPM-Only deployment (no ACP)

7. The admin follows the same entry path: **'Associate Group'** on Deploy Policy, selects Windows.

8. The admin **unchecks** the **'Deploy Application Control'** accordion checkbox.
   - The ACP accordion body collapses and becomes greyed out/disabled.
   - No Application Control groups, mode, or settings need to be configured.

9. The **'Deploy EPM Policy'** accordion remains checked and active. The admin selects EPM policies from the dropdown (e.g., `Windows EPM Policy`).

10. The admin fills in **Define Target** with a Windows Custom Group.

11. The admin clicks **'Deploy'** or **'Deploy Immediately'**.
    - **Only** the EPM policy is deployed to the target group. No ACP policy is associated.
    - The deployment appears on the Deploy Policy list with EPM association only.

**Alternate Scenarios:**
- Admin unchecks 'Deploy EPM Policy' accordion but keeps ACP checked: only ACP is deployed.
- Admin unchecks both accordions: validation error — at least one must be active.
- Admin selects multiple EPM policies: all selected policies are associated with the deployment.
- Admin uses 'Create Policy' link inside the EPM accordion to create a new policy inline, then selects it.
- Editing an existing deployment: EPM policy associations can be modified.

**Edge Cases:**
- No EPM policies available: dropdown shows empty placeholder *'Select EPM Policies'*. Admin must create one first (UC-EPM-02) or use the 'Create Policy' link.
- Removing all EPM chips when EPM accordion is checked: validation requires at least one policy selected.
- EPM accordion visible but unchecked: EPM section greyed out; deployment proceeds without EPM.
- Switching platform from Windows to Mac/Linux: the EPM accordion disappears entirely from the form.
- Creating a new EPM policy inline: after saving, the new policy appears in the dropdown for immediate selection.

### 4. API Requirements

- **POST /api/acp/deploy-policy/associate** — Deploy payload. Fields: target_group_id, platform, acp_enabled (boolean), acp_groups (array), acp_mode, epm_enabled (boolean), epm_policy_ids (array, optional). When `acp_enabled=false` and `epm_enabled=true`, only EPM is deployed.
- **GET /api/epm/policies?platform=windows** — List available EPM policies for the dropdown.

### 5. Role Handling

Uses existing EC role/permission model. Admin with EPM write access can deploy EPM policies. Combined deployments require both ACP and EPM write access.

### 6. Scope Handling

Same as UC-ACP-07. Technicians only see Custom Groups within their scope. EPM policies are applied to machines within the group.

### 7. MSP and Summary Server

MSP: Combined or EPM-only deployment scoped per customer.

### 8. Notification and Alerts

Not applicable at deployment time.

### 9. ME Tracking, MICS and Action Log

- **ME Track:** Track ACP-only, EPM-only, and combined ACP+EPM deployments separately (count, platform).
- **Action Log:** Log entry — admin deployed to custom group '[name]': ACP groups: [list or 'none'], EPM policies: [list or 'none'], mode: [mode], deploy_type: [combined|epm_only|acp_only], timestamp.

### 10. Existing Customer Handling

No change. The 'Deploy EPM Policy' accordion already existed for Windows deployments. EPM-only deployment is a new workflow supported by unchecking the ACP accordion.

---

# UC-EPM-04 · Source: —
## View EPM Policy Summary (Privilege Management Page)
**Persona:** IT Administrator

---

### 1. Business Problem

After creating and deploying EPM policies, the admin needs a quick read-only summary showing the current privilege management configuration — elevation scope, auto-elevation status, selected applications, and admin removal settings. Without this, the admin must open the edit form to review policy details.

### 2. Proposed Solution

The **Privilege Management** page (accessible from the sidebar) provides a read-only summary panel of the active EPM policy configuration. It includes an info banner indicating platform availability, a summary with all key settings, and a 'Modify' button to edit. An 'Audit of Elevated Applications' link provides visibility into which applications have been elevated.

### 3. User Journey — How It Works

1. The admin clicks the navigation item in the sidebar that leads to the Privilege Management summary. The page loads.

2. **Info banner** (blue): *'Privilege Management is currently available only for Windows.'*

3. **Summary panel** with header: 'Summary' title + **'Modify'** button (pen icon).

4. Summary rows (label : value format):
   - **Elevate applications in Audit only mode** (with help `?` icon): `Allowed`
   - **Privileges Elevated**: `Specific applications selected`
   - **Auto Elevation**: `Yes`
   - **Vendor(s) added to the list**: `2` (clickable link)
   - **Product(s) added to the list**: `2` (clickable link)
   - **Verified Executable(s) added to the list**: `2` (clickable link)
   - **FileHash added to the list**: `2` (clickable link)
   - **Folder Path added to the list**: `1` (clickable link)
   - **Audit of Elevated Applications**: `View Audit Applications` (clickable link)
   - **Created Time**: `Oct 7, 2024, 02:47 PM`
   - **Modified Time**: `Oct 7, 2024, 02:47 PM`

5. Clicking the count links (e.g., Vendor(s): `2`) opens a detail view showing the specific vendors/products/executables/hashes/paths.

6. Clicking **'View Audit Applications'** navigates to the audit log of elevated application events.

7. Clicking **'Modify'** opens the EPM policy edit form (UC-EPM-02) pre-populated with current settings.

8. **Quick Links** section below the summary:
   - 'How to configure Privilege Management?'
   - 'How to create elevation rules?'

**Edge Cases:**
- No EPM policy configured: summary panel shows default values or empty state.
- All counts are 0: links show `0` but remain clickable (navigating to an empty list).
- 'View Audit Applications' with no events: shows empty table/state.

### 4. API Requirements

- **GET /api/epm/summary** — Returns the current EPM policy summary: elevation_mode, privileges_elevated, auto_elevation, vendor_count, product_count, executable_count, hash_count, folder_path_count, created_time, modified_time.
- **GET /api/epm/summary/vendors** — List vendors in the EPM policy (for the drill-down link).
- **GET /api/epm/summary/products** — List products.
- **GET /api/epm/summary/executables** — List executables.
- **GET /api/epm/summary/hashes** — List file hashes.
- **GET /api/epm/summary/folder-paths** — List folder paths.
- **GET /api/epm/summary/audit** — Audit log of elevated application events. Pagination, sorting, export.

### 5. Role Handling

Uses existing EC role/permission model. Read-only access sufficient for viewing. Write access needed for 'Modify'.

### 6. Scope Handling

EPM summary is global (not scope-bound). Audit data may be filtered by scope.

### 7. MSP and Summary Server

MSP: EPM summary scoped per customer.

### 8. Notification and Alerts

Not applicable for viewing.

### 9. ME Tracking, MICS and Action Log

- **ME Track:** Track Privilege Management summary page views, 'View Audit Applications' clicks.
- **Action Log:** Not applicable for viewing.

### 10. Existing Customer Handling

Existing page — no change. Documents the current Windows EPM summary for reference.

---

# UC-EPM-05 · Source: —
## Privileged Activity Audit
**Persona:** IT Administrator

---

### 1. Business Problem

After deploying EPM policies that allow end users to self-elevate applications, the IT administrator lacks a centralised audit trail to review *who* elevated *which* application, *when*, *from which endpoint*, and *whether the elevation was approved or denied*. Without this visibility, the organisation cannot satisfy compliance requirements (e.g., SOC 2, ISO 27001), investigate security incidents involving elevated processes, or assess whether the current EPM scope is too broad or too narrow.

### 2. Proposed Solution

The **Privileged Activity Audit** page (accessible via Insight → Privileged Activity Audit in the sidebar) provides a filterable, sortable, exportable table of every privilege elevation event across managed endpoints. Each row captures the application name, type, endpoint, reason stated by the user, timestamp, user identity, domain, whether the elevation was managed by ManageEngine, and the final elevation decision (Approved / Denied). Filters allow the admin to narrow by application type, ManageEngine-managed status, and elevation decision.

### 3. User Journey — How It Works

1. The admin clicks **'Privileged Activity Audit'** in the sidebar (under **Insight**). The page loads.

2. **Title bar:** clipboard-list icon + **'Privileged Activity Audit'**.

3. **Toolbar — Filter row:**
   - **Filter By: Application Type** — Dropdown: `Application Type` (default/all) | `Executables` | `System Components`.
   - **Elevated by ManageEngine** — Dropdown: `Elevated by ManageEngine` (default/all) | `Yes` | `No`.
   - **Elevation Decision** — Dropdown: `Elevation Decision` (default/all) | `Approved` | `Denied`.
   - **Toolbar-right actions:** Total Records link, search icon, column chooser icon, download/export icon.

4. **Data table columns:**

   | Column | Sortable | Description |
   |--------|----------|-------------|
   | **Application Name** | Yes | Clickable link (blue) — opens application detail view. |
   | **Application Type** | No | Category: `Executables`, `System Components`, etc. |
   | **Elevated Endpoint** | No | Machine hostname where the elevation occurred. |
   | **Reason stated** | No | Free-text justification entered by the user at elevation time. |
   | **Date & Time of elevation** | Yes | Timestamp of the elevation event. |
   | **Elevated by (User)** | No | Username who performed/requested the elevation. |
   | **User Domain** | No | Domain of the user (e.g., `WORKGROUP`, AD domain). |
   | **Elevated by ManageEngine** | No | `Yes` if the elevation was handled through the ManageEngine EPM workflow; `No` if it was a standalone/manual elevation. |
   | **Elevation Decision** | No | `Approved` or `Denied`. |

5. **Sample audit data:**

   | Application Name | Application Type | Elevated Endpoint | Reason stated | Date & Time | Elevated by (User) | User Domain | Elevated by ME | Decision |
   |---|---|---|---|---|---|---|---|---|
   | curl.exe | Executables | uesqa-w10-2 | elevation required | May 12, 2025 11:40 AM | uesqa-test11 | WORKGROUP | Yes | Approved |
   | bgupdater.exe | Executables | uesqa-w10-2 | elevation required | May 12, 2025 11:40 AM | uesqa-test11 | WORKGROUP | Yes | Approved |
   | dbeaver.exe | Executables | uesqa-w10-2 | elevation required | May 12, 2025 11:40 AM | uesqa-test11 | WORKGROUP | No | Denied |
   | git.exe | Executables | ues-w10-cloud1 | admin tool access | May 11, 2025 09:15 AM | admin-user01 | WORKGROUP | Yes | Approved |
   | powershell.exe | Executables | EC2AMAZ-DS25S0F | script execution | May 10, 2025 03:22 PM | sysadmin | WORKGROUP | No | Denied |

6. Clicking an **Application Name** link (e.g., `curl.exe`) opens a detail view for that specific elevation event or application profile.

7. **Pagination:** `1 - 5 of Total Records`, page size dropdown (default: 25), prev/next buttons.

8. The admin uses filters to investigate:
   - **Denied elevations:** Set `Elevation Decision = Denied` to review blocked attempts — identify if legitimate tools are being blocked and need to be added to the EPM policy.
   - **Non-ManageEngine elevations:** Set `Elevated by ManageEngine = No` to find elevations occurring outside the EPM framework — potential policy gaps or shadow admin activity.
   - **System Components:** Set `Application Type = System Components` to audit OS-level elevation events.

**Alternate Scenarios:**
- Admin applies multiple filters simultaneously (e.g., `Executables` + `Yes` + `Denied`): table shows only matching rows.
- Admin clicks the **download** icon: exports the current filtered/sorted view as CSV/PDF for compliance reporting.
- Admin clicks the **column chooser** icon: toggles column visibility (e.g., hide User Domain if not relevant).
- Admin sorts by **Date & Time of elevation** descending: most recent events first (useful for incident investigation).

**Edge Cases:**
- No elevation events recorded: table shows empty state — "No data available" or equivalent.
- All filters set to specific values with no matching data: empty table with active filter indicators.
- Very large result set (thousands of events): pagination controls, server-side pagination. Export may generate a background job.
- Application Name link for a deleted/uninstalled application: detail view may show limited info or "Application no longer present on endpoint."
- User domain is empty/null (e.g., local-only machine): column shows blank or `(local)`.

### 4. API Requirements

- **GET /api/epm/audit/privileged-activity** — List privilege elevation events. Query parameters:
  - `application_type` (optional): `executables` | `system_components`
  - `elevated_by_me` (optional): `true` | `false`
  - `elevation_decision` (optional): `approved` | `denied`
  - `sort_by` (optional): `application_name` | `date_time` (default: `date_time` desc)
  - `page`, `page_size` — Pagination.
  - Returns: array of `{ application_name, application_type, elevated_endpoint, reason_stated, date_time, elevated_by_user, user_domain, elevated_by_me, elevation_decision }`.
- **GET /api/epm/audit/privileged-activity/{id}** — Detail of a specific elevation event (for the application name drill-down).
- **GET /api/epm/audit/privileged-activity/export** — Export filtered results as CSV/PDF. Same filter params as the list endpoint.

### 5. Role Handling

Uses existing EC role/permission model. Read-only access sufficient for viewing audit data. No write operations on this page.

### 6. Scope Handling

Technicians with scope restrictions see only elevation events from endpoints within their assigned scope (Computer/Custom Groups). Full admins see all events.

### 7. MSP and Summary Server

MSP: Audit data scoped per customer. MSP technician sees only their assigned customer's elevation events. Summary Server aggregates audit data from probe servers.

### 8. Notification and Alerts

Not directly applicable on this page. However, this page complements the alert configuration (UC-ACP-11) — admins can cross-reference alert triggers with the audit trail to investigate specific elevation events that triggered notifications.

### 9. ME Tracking, MICS and Action Log

- **ME Track:** Track Privileged Activity Audit page views, filter usage (which filters are most used), export actions, drill-down clicks.
- **MICS:** Feature adoption — percentage of EPM-enabled customers who visit the audit page regularly (weekly/monthly).
- **Action Log:** Not applicable (read-only page). However, export actions may be logged: admin exported privileged activity audit (filter: [params], record_count: [N], format: [CSV/PDF], timestamp).

### 10. Existing Customer Handling

New page — not present in prior versions. Existing customers with EPM policies will see historical elevation events retroactively populated (if the agent was already collecting elevation telemetry). Customers without EPM policies will see an empty table until EPM is configured and elevation events occur.

---

# UC-EPM-06 · Source: —
## Admin Rights Summary
**Persona:** IT Administrator

---

### 1. Business Problem

Organisations struggle to maintain visibility into which user accounts hold local administrator privileges across their managed endpoints. Over time, local admin accounts proliferate — from initial setup, domain joins, or ad-hoc elevation — creating a significant attack surface. Without a consolidated view the IT administrator cannot answer basic questions: *How many machines have local admins? Which users are admins on multiple machines? Are there admin accounts on Linux endpoints?* This makes it impossible to enforce least-privilege policies or prepare for compliance audits.

### 2. Proposed Solution

The **Admin Rights Summary** page (accessible via Insight → Admin Rights Summary in the sidebar) provides two high-level views:

- **Device View** — with two sub-tabs:
  - **By Computer:** Lists each managed endpoint with its domain name, OS, and the count of local admin accounts (clickable to drill down).
  - **By User:** Lists each admin user with their domain, admin type, and the count of computers where they hold admin rights (clickable to drill down).
- **User View** — a flat table of every user–computer admin relationship with full detail (user, computer, domain, OS, admin type, last logon) and a **'Move as Standard User'** button to demote selected admins.

Filters include Custom Group and User Type, plus an **Advanced Filter** panel supporting criteria-based queries on Computer Name, User Name, Domain, Operating System, Admin Type, and Last Logon.

### 3. User Journey — How It Works

1. The admin clicks **'Admin Rights Summary'** in the sidebar (under **Insight**). The page loads.

2. **Title bar:** user-shield icon + **'Admin Rights Summary'**.

3. **Toolbar:**
   - **View toggle** (icon buttons): Grid icon (Device view, default active) / List icon (User view).
   - **Filter By:**
     - **Custom Group** — Dropdown: Custom Group (default/all) | All Computers Group | Developer group | Engineering group | Marketing Group | Remote Branch | Support Group.
     - **User Type** — Dropdown: User Type (default/all) | Local Admin | Domain Admin | Built-in Admin.
   - **Toolbar-right actions:**
     - **Advanced Filter** icon (filter icon) — toggles the advanced filter panel.
     - Total Records link, search icon, column chooser icon, download/export icon.

4. **Advanced Filter Panel** (collapsed by default, toggled by filter icon):
   - Edit icon (pen) + close button (×).
   - Filter row with numbered badge `1`:
     - **Field** dropdown: Computer Name | User Name | Domain | Operating System | Admin Type | Last Logon.
     - **Criteria** dropdown: like | not like | starts with | ends with.
     - **Value** text input.
   - **'Save & Apply'** button (primary) and **'Apply'** button.

#### Device View (default)

5. **Sub-tabs:** **'By Computer'** (default active) | **'By User'**.

6. **By Computer tab** — table columns:
   - Checkbox (select all/individual).
   - **Computer Name** (sortable).
   - **Domain Name**.
   - **Operating System**.
   - **Remarks** (e.g., 'Admin user detected').
   - **Local Admin Count** — clickable link that opens a modal showing the local admin user names and last logon dates for that machine.

7. **By Computer sample data:**

   | Computer Name | Domain Name | Operating System | Remarks | Local Admin Count |
   |---|---|---|---|---|
   | EC2AMAZ-DS25S0F | WORKGROUP | Windows Server 2022 Datacenter (x64) | Admin user detected | 2 |
   | ues-w10-cloud1 | WORKGROUP | Windows 11 Professional (x64) | Admin user detected | 3 |
   | uesqa-w10-2 | WORKGROUP | Windows 10 Professional (x64) | Admin user detected | 1 |
   | linux-build-srv1 | WORKGROUP | Ubuntu 22.04 LTS (x64) | Admin user detected | 2 |

8. Clicking a **Local Admin Count** link (e.g., `2` for EC2AMAZ-DS25S0F) opens a **modal dialog**:
   - Header: **'Local Admin Users'** + close button.
   - Info banner: *'Local Admin Accounts retained in the Exclusion Policy will not be displayed here.'*
   - Table: **User Name**, **Last Logon**.
   - Example for EC2AMAZ-DS25S0F: test (Apr 1, 2026), user (Mar 28, 2026).

9. **By User tab** — table columns:
   - Checkbox (select all/individual).
   - **User Name** (sortable).
   - **User Domain**.
   - **Admin Type** (e.g., Local Admin).
   - **Remarks** (e.g., 'Admin on multiple computers').
   - **Computer Count** — clickable link that opens a modal showing the computers and last logon dates for that user.

10. **By User sample data:**

    | User Name | User Domain | Admin Type | Remarks | Computer Count |
    |---|---|---|---|---|
    | test | WORKGROUP | Local Admin | Admin on multiple computers | 3 |
    | user | WORKGROUP | Local Admin | Admin on multiple computers | 2 |
    | admin | WORKGROUP | Local Admin | Admin on multiple computers | 2 |
    | root | WORKGROUP | Local Admin | Admin on single computer | 1 |

11. Clicking a **Computer Count** link (e.g., `3` for 'test') opens a **modal dialog**:
    - Header: **'Computers for \'test\''** + close button.
    - Table: **Computer Name**, **Last Logon**.
    - Example: EC2AMAZ-DS25S0F (Apr 1, 2026), ues-w10-cloud1 (Apr 2, 2026), uesqa-w10-2 (Mar 25, 2026).

#### User View

12. The admin clicks the **List icon** in the view toggle. The page switches to **User View** — a flat, detailed table of every user–computer admin relationship.

13. **'Move as Standard User'** button (primary, top of the table area):
    - Enabled only when one or more checkboxes are selected.
    - Clicking it shows a confirmation dialog listing the selected user(s) and their machine(s), then demotes them to standard users (removes local admin privilege).

14. **User View table columns:**
    - Checkbox (select all/individual).
    - **User Name** (sortable).
    - **Computer Name**.
    - **Domain**.
    - **Operating System**.
    - **Admin Type** (e.g., Local Admin).
    - **Last Logon**.

15. **User View sample data (8 rows):**

    | User Name | Computer Name | Domain | Operating System | Admin Type | Last Logon |
    |---|---|---|---|---|---|
    | test | EC2AMAZ-DS25S0F | WORKGROUP | Windows Server 2022 Datacenter (x64) | Local Admin | Apr 1, 2026 |
    | user | EC2AMAZ-DS25S0F | WORKGROUP | Windows Server 2022 Datacenter (x64) | Local Admin | Mar 28, 2026 |
    | test | ues-w10-cloud1 | WORKGROUP | Windows 11 Professional (x64) | Local Admin | Apr 2, 2026 |
    | user | ues-w10-cloud1 | WORKGROUP | Windows 11 Professional (x64) | Local Admin | Mar 30, 2026 |
    | admin | ues-w10-cloud1 | WORKGROUP | Windows 11 Professional (x64) | Local Admin | Apr 3, 2026 |
    | test | uesqa-w10-2 | WORKGROUP | Windows 10 Professional (x64) | Local Admin | Mar 25, 2026 |
    | root | linux-build-srv1 | WORKGROUP | Ubuntu 22.04 LTS (x64) | Local Admin | Apr 2, 2026 |
    | admin | linux-build-srv1 | WORKGROUP | Ubuntu 22.04 LTS (x64) | Local Admin | Apr 1, 2026 |

16. The admin selects `test` on `EC2AMAZ-DS25S0F` and `user` on `EC2AMAZ-DS25S0F`, clicks **'Move as Standard User'**. Confirmation dialog: *'Move the following users to standard user? test (EC2AMAZ-DS25S0F), user (EC2AMAZ-DS25S0F). They will be demoted to standard users.'* On confirm, the rows are removed.

**Alternate Scenarios:**
- Admin uses Advanced Filter: sets Field = 'Operating System', Criteria = 'like', Value = 'Ubuntu'. Only the linux-build-srv1 row(s) appear.
- Admin clicks 'Save & Apply' in the advanced filter: the filter query is saved for reuse.
- Admin filters by Custom Group = 'Developer group': only machines in that group are shown.
- Admin filters by User Type = 'Domain Admin': only domain-level admin accounts are visible.
- Admin applies multiple filters (Custom Group + User Type + Advanced Filter): all filters combine.

**Edge Cases:**
- No admin accounts detected across any machine: all views show empty state.
- A machine has 0 local admins: it does not appear in the By Computer tab.
- A user account exists on 100+ machines: Computer Count shows `100` — modal lists all with pagination.
- User clicks 'Move as Standard User' without selecting anyone: alert — 'Please select at least one admin user to move to standard user.'
- Linux endpoint (linux-build-srv1) appears with `root` and `admin` — confirms cross-platform visibility.
- Clicking close (×) or clicking outside the modal dismisses it.

### 4. API Requirements

- **GET /api/epm/admin-rights/by-computer** — List endpoints with admin counts. Filters: custom_group, user_type. Pagination, sorting by computer_name. Returns: computer_name, domain_name, os, remarks, admin_count.
- **GET /api/epm/admin-rights/by-computer/{computerId}/admins** — List local admin users for a specific machine. Returns: user_name, last_logon.
- **GET /api/epm/admin-rights/by-user** — List admin users with computer counts. Filters: custom_group, user_type. Pagination, sorting by user_name. Returns: user_name, user_domain, admin_type, remarks, computer_count.
- **GET /api/epm/admin-rights/by-user/{userName}/computers** — List computers for a specific admin user. Returns: computer_name, last_logon.
- **GET /api/epm/admin-rights/user-view** — Flat user–computer admin relationship list. Filters: custom_group, user_type. Advanced filter: field, criteria, value. Pagination, sorting. Returns: user_name, computer_name, domain, os, admin_type, last_logon.
- **POST /api/epm/admin-rights/move-standard** — Demote selected users to standard. Payload: array of { user_name, computer_name }. Returns: success/failure per entry.
- **GET /api/epm/admin-rights/advanced-filter/saved** — List saved advanced filter queries.
- **POST /api/epm/admin-rights/advanced-filter/save** — Save an advanced filter query.

### 5. Role Handling

Uses existing EC role/permission model. Read-only access for viewing admin rights data. Write access required for 'Move as Standard User' action.

### 6. Scope Handling

Technicians with scope restrictions see only endpoints within their assigned scope (Computer/Custom Groups). Admin user lists are filtered accordingly. Full admins see all endpoints.

### 7. MSP and Summary Server

MSP: Admin rights data scoped per customer. MSP technician sees only their assigned customer's endpoints and admin users. Summary Server aggregates admin rights data from probe servers.

### 8. Notification and Alerts

Not directly applicable on this page. However, the 'Move as Standard User' action could trigger an email notification to the affected user or their manager (configurable in alert settings).

### 9. ME Tracking, MICS and Action Log

- **ME Track:** Track Admin Rights Summary page views, view toggle usage (Device vs User), sub-tab usage (By Computer vs By User), drill-down modal opens, advanced filter usage, filter combinations.
- **MICS:** Feature adoption — percentage of customers who visit Admin Rights Summary, percentage who use 'Move as Standard User'.
- **Action Log:** Log entry when admin demotes a user — admin moved '[user_name]' on '[computer_name]' to standard user, timestamp. Log entry for advanced filter save.

### 10. Existing Customer Handling

Existing page with updates. The page previously had filters (Device Type, Domain, All Period, Last Action, OS Platform) that have been replaced with Custom Group + User Type + Advanced Filter. The Domain column has been renamed: 'Domain Name' in By Computer, 'User Domain' in By User. The 'Remove Local Admin Privilege' button has been renamed to **'Move as Standard User'**. Existing customers will see the updated layout on upgrade — no data migration needed.

---

# FIELD-LEVEL VALIDATION MATRIX

### Application Group (Allowlist / Blocklist) Form

| Field | Required | Type | Validation | Linux-Specific Notes |
|-------|----------|------|------------|---------------------|
| Group Name | Yes | Text input | Non-empty; unique; max 255 chars | — |
| Description | No | Text | — | Optional, via 'Add Description' link |
| Filter | No | Dropdown | — | Options: All, Vendor, **Package**, Executables, File Hash, **File Path**. Linux uses 'Package' not 'Products', 'File Path' not 'Folder Path'. No 'Trusted Repository'. |
| Search | No | Text input | — | Real-time filtering |
| Vendor Selection | No* | Checkbox cards | *Min 1 vendor OR 1 package | Click-anywhere-to-toggle on card |
| Package Selection | No* | Checkbox rows | Group CB: indeterminate supported | — |
| View Toggle | No | Grid / List icons | — | Default: Grid |

### Application Control Policy Form

| Field | Required | Type | Validation | Linux-Specific Notes |
|-------|----------|------|------------|---------------------|
| Custom Group | Yes | Text input / Dropdown | Non-empty | 'New Custom Group' link to create inline |
| Deploy ACP (accordion CB) | — | Checkbox | Must be checked to submit | Default: checked and open |
| App Group(s) Associated | Yes | Tag picker + dropdown | Min 1 group; no duplicates | Dropdown filterable by typing |
| Mode | Yes | Radio cards | One must be selected | Default: Audit. Linux supports both modes. |
| Strict: Allow requests | No | Checkbox | — | Visible only when Strict selected. **Available for Linux.** |
| Custom alert | No | Radio (Yes/No) | — | Default: No |
| Alert message | Conditional | Textarea | Non-empty when alert = Yes | Default message provided |
| Deploy EPM Policy | — | — | — | **NOT rendered for Linux** (Windows only) |

### Deployment Task Form *(replaced by Associate Group flow)*

| Field | Required | Type | Validation | Notes |
|-------|----------|------|------------|-------|
| Custom Group to be associated | Yes | Text input / Dropdown | Non-empty | 'New Custom Group' link to create inline |
| Application Group(s) Associated | Yes | Tag picker + dropdown | Min 1 group; no duplicates | Same as Policy form — shared form |
| Mode | Yes | Radio cards | One selected | Same as Policy form |

### Deploy Policy Summary — Move to App Group Modal

| Field | Required | Type | Validation | Notes |
|-------|----------|------|------------|-------|
| Application Group Type | Yes | Dropdown | — | Options: Allowlist, Blocklist |
| Select the Application Group | Yes | Dropdown | Non-empty | Populated dynamically based on type. Includes Linux groups. |

### JIT Access Creation Form

| Field | Required | Type | Validation | Notes |
|-------|----------|------|------------|-------|
| Policy Name | Yes | Text input | Non-empty | — |
| Computer Name | Yes | Text input + autocomplete | Non-empty; must match known computer | Dropdown with OS icons. Includes Linux machines. |
| Duration Type | No | Radio (Fixed/Window) | — | Default: Fixed |
| Access Duration | No | Dropdown | — | Options: 1h, 2h, 4h, 8h, 12h, 24h, 1 Week |
| Access type | No | Radio | — | All Applications (default) / Specific applications |
| Include Blocklisted applications | No | Checkbox | — | Only for Allowlisting (not Elevation) |

### JIT Deployments Page

| Field / Control | Required | Type | Validation | Notes |
|-----------------|----------|------|------------|-------|
| Checkbox (row select) | No | Checkbox | — | Enables Delete bulk action |
| Policy Name | — | Link | — | Clickable → JIT Summary page |
| Platform type filter | No | Dropdown | — | Windows / Mac / Linux |
| Access Type filter | No | Dropdown | — | Elevation / Allowlisting |
| Status filter | No | Dropdown | — | Failed / Succeeded |
| Timeline filter | No | Dropdown | — | — |
| Duration Type filter | No | Dropdown | — | Fixed / Window |
| Action menu | — | Ellipsis dropdown | — | Modify, Delete |

### JIT Requests Page

| Field / Control | Required | Type | Validation | Notes |
|-----------------|----------|------|------------|-------|
| JIT Requests status filter | No | Dropdown | — | All / **Pending** (default) / Approved / Declined |
| Request Type filter | No | Dropdown | — | All / Elevation / Allowlisting |
| Checkbox (row select) | No | Checkbox | — | Enables Approve / Decline bulk buttons |
| Approve button | — | Button | Min 1 row selected | Green; disabled until selection. Creates deployment on approve. |
| Decline button | — | Button | Min 1 row selected | Red; disabled until selection |
| Request Status badge | — | Badge | — | Pending (amber) / Approved (green) / Declined (red) |
| Request Type badge | — | Badge | — | Elevation (arrow-up) / Allowlisting (list-check) |
| Reason | — | Text (truncated) | — | Full text on hover tooltip; max-width 180px |
| Action menu (Pending) | — | Ellipsis dropdown | — | Approve, Decline, Modify, Delete |
| Action menu (Actioned) | — | Ellipsis dropdown | — | Modify, Delete only |

### EPM Policy Form — Privileged Application List (Windows Only)

| Field | Required | Type | Validation | Notes |
|-------|----------|------|------------|-------|
| Policy Name | Yes | Text input | Non-empty | Placeholder: 'Enter a policy name'. |
| **Step 1 toggle** | — | Toggle switch | — | Default: ON. Disables scope section when OFF. |
| Step 1 scope: Specific apps by policy | — | Radio card | — | Default selected. **Recommended** badge. Shows specific apps panel. |
| Step 1 scope: All approved in ACP | — | Radio card | — | Shows exclusion list panel instead. |
| Auto Elevation (inside specific apps panel) | No | Checkbox | — | Default: checked. Controls silent elevation for in-scope apps. |
| Specific apps (Vendors) | No | Chip display | — | Editable via 'Modify' button. |
| Specific apps (Products) | No | Chip display | — | Editable via 'Modify' button. |
| Specific apps (Verified Exe) | No | Chip display | — | Editable via 'Modify' button. |
| Specific apps (File Hash) | No | Chip display | — | Editable via 'Modify' button. |
| Specific apps (Folder Path) | No | Chip display | — | Editable via 'Modify' button. |
| Excluded apps (Vendors) | No | Chip display | — | Shown when 'All approved in ACP' scope is selected. |
| Excluded apps (Products) | No | Chip display | — | Shown when 'All approved in ACP' scope is selected. |
| Excluded apps (Verified Exe) | No | Chip display | — | Shown when 'All approved in ACP' scope is selected. |
| **Step 2 toggle** | — | Toggle switch | — | Default: ON. Disables out-of-scope section when OFF. |
| Step 2: Require admin approval | — | Radio card | — | **Recommended** badge. Formal approval workflow. |
| Step 2: Business justification | — | Radio card | — | Default selected. **Self-service** badge. |
| Auto Local Admin Removal | No | Checkbox + expand | — | Default: OFF. Expanding shows retained accounts + blue warning. |
| Retained Admin Accounts | Conditional | Tag/chip input + Browse | Non-empty when removal enabled | Pre-populated: sysadmin, emsadmin, Administrator. |

### Child Process Configuration Form

| Field | Required | Type | Validation | Notes |
|-------|----------|------|------------|-------|
| Global (apply to all platforms) | No | Checkbox | — | Default: OFF. When checked, selection propagates to all platform tabs. |
| Platform tab | — | Tab selector | — | Windows (default) / Mac / Linux. Each tab has its own filter set. |
| Filter dropdown (Linux) | — | Dropdown | — | All / Package / Executables / File Hash. **No Vendor, No File Path.** |
| Package selection (Linux) | Conditional | Checkbox rows per vendor group | At least 1 when applying | Grouped by vendor: Canonical Ltd., Red Hat Inc., Google LLC, Mozilla Corporation. |
| Whole Process Tree (Linux) | No | Toggle button per row | — | Default: inactive. Click toggles active/inactive. |
| Apply button | — | Button | At least 1 item selected | Commits child-process selections for the active platform. |
| Reset button | — | Button | — | Clears all selections on the active platform tab. |

### Deploy EPM Policy Accordion (in Associate Policy form, Windows only)

| Field | Required | Type | Validation | Notes |
|-------|----------|------|------------|-------|
| Deploy EPM (accordion CB) | — | Checkbox | At least one accordion (ACP or EPM) must be checked | Default: checked and open |
| EPM Policy | Conditional | Multi-select + chips | Min 1 when accordion is checked | Available: Windows EPM Policy, EPM - Developer Workstations, EPM - Admin Access Policy |

### Privileged Activity Audit Page

| Field / Control | Type | Validation | Notes |
|-----------------|------|------------|-------|
| Application Type filter | Dropdown | — | Default: 'Application Type' (all). Options: Executables, System Components. |
| Elevated by ManageEngine filter | Dropdown | — | Default: 'Elevated by ManageEngine' (all). Options: Yes, No. |
| Elevation Decision filter | Dropdown | — | Default: 'Elevation Decision' (all). Options: Approved, Denied. |
| Search | Icon button → text input | — | Searches across Application Name, Elevated Endpoint, User. |
| Column Chooser | Icon button → checkbox list | — | Toggle visibility of any column. |
| Export / Download | Icon button | — | Exports current filtered view. Format: CSV or PDF. |
| Pagination: Page Size | Dropdown | — | Default: 25. |
| Pagination: Prev / Next | Buttons | — | Disabled at boundaries (first page / last page). |

### Admin Rights Summary Page

| Field / Control | Type | Validation | Notes |
|-----------------|------|------------|-------|
| Device / User view toggle | Icon buttons (grid / list) | — | Default: Device view (grid). |
| Custom Group filter | Dropdown | — | Default: 'Custom Group' (all). Options: All Computers Group, Developer group, Engineering group, Marketing Group, Remote Branch, Support Group. |
| User Type filter | Dropdown | — | Default: 'User Type' (all). Options: Local Admin, Domain Admin, Built-in Admin. |
| Advanced Filter toggle | Icon button (filter) | — | Toggles the advanced filter panel. |
| Advanced Filter: Field | Dropdown | — | Options: Computer Name, User Name, Domain, Operating System, Admin Type, Last Logon. |
| Advanced Filter: Criteria | Dropdown | Must select a criteria | Options: like, not like, starts with, ends with. |
| Advanced Filter: Value | Text input | Non-empty when applying | Free-text value for the criteria. |
| Save & Apply | Button | At least 1 complete filter row | Saves the filter query and applies it. |
| Apply | Button | At least 1 complete filter row | Applies without saving. |
| By Computer sub-tab | Tab selector | — | Default active in Device view. |
| By User sub-tab | Tab selector | — | — |
| Move as Standard User | Button | At least 1 checkbox selected | User View only. Confirmation dialog before action. |
| Search | Icon button → text input | — | Searches across all visible columns. |
| Column Chooser | Icon button → checkbox list | — | Toggle visibility of any column. |
| Export / Download | Icon button | — | Exports current filtered view. |
| Pagination: Page Size | Dropdown | — | Default: 25. |
| Pagination: Prev / Next | Buttons | — | Disabled at boundaries. |

---

# COMPLETE END-TO-END HAPPY PATH

> Full sequence for testers to validate the entire Linux Application Control policy deployment flow.

### Phase 1: Enter Application Control Module
1. Log into Endpoint Central as admin.
2. Click **'Application Control'** in the top nav bar.
3. Confirm Dashboard loads with four stat cards and three chart cards.

### Phase 2: Create Linux Allowlist
4. Click **'Application Groups'** in the sidebar.
5. Click **'Create Allowlist'** → **'Linux'**.
6. Verify: breadcrumb says 'Allowlist Creation', platform badge shows Linux icon.
7. Enter name: `Linux Prod Allowlist`.
8. Verify filter dropdown has: All, Vendor, Package, Executables, File Hash, File Path (no 'Trusted Repository').
9. Select vendors: `Canonical Ltd.`, `Mozilla Corporation`.
10. Under Package, select: `apt-get`, `dpkg` (Canonical), `Firefox` (Mozilla).
11. Verify **Selected (5)** counter.
12. Click **'Create Allowlist'**.
13. Confirm group appears in table with Linux icon, 'Allowlist' type, 'admin', current timestamp.
14. **Click the group name** ('Linux Prod Allowlist'). Verify App Group Summary opens with 3 summary cards and Rule Details tab showing selected vendors.

### Phase 3: Create Linux Blocklist
15. Return to Application Groups. Click **'Create Blocklist'** → **'Linux'**.
16. Verify: breadcrumb says 'Blocklist Creation', button label says 'Create Blocklist'.
17. Enter name: `Linux Blocked Apps`.
18. Select vendor: `Google LLC`. Under Package: `Google Chrome`.
19. Click **'Create Blocklist'**.
20. Confirm group appears with 'Blocklist' type.

### Phase 4: Associate Linux Policy — Audit Mode
21. Click **'Deploy Policy'** in sidebar.
22. Verify redesigned Deploy Policy page with columns: Custom Group Name, Associated Application Group(s), Computer Count, Flexibility, Deployment Status, Action, Requested Apps.
23. Verify **'Watch Demo'** link in title bar.
24. Click **'Associate Group'** button. Verify form opens with title **'Associate Policy'**.
25. Verify: **No 'Deploy EPM Policy' accordion** is shown for Linux.
26. In 'Define Target', enter Custom Group: `Linux Servers Group`.
27. In 'Application Group(s) Associated', add: `Linux Prod Allowlist` and `Linux Blocked Apps` (as tag chips).
28. Verify **Audit Mode** is selected by default.
29. Leave 'Customize alert notification' as 'No'.
30. Click **'Deploy'**.
31. Confirm association in Deploy Policy table with Audit Mode badge and progress bar.

### Phase 5: Associate Linux Policy — Strict Mode
32. Click **'Associate Group'** again.
33. Fill Custom Group and Application Groups.
34. Select **'Strict Mode'**. Verify sub-option appears: 'Allow users to request applications which are unmanaged.'
35. Check the sub-option.
36. Select 'Yes' for custom alert. Edit the alert message.
37. Click **'Deploy Immediately'**.
38. Confirm association in Deploy Policy table with Strict Mode badge.

### Phase 6: Verify Deploy Policy Summary
39. Click a **Custom Group Name** (e.g., 'All Computers Group'). Verify Deploy Policy Summary opens.
40. **Computers tab**: Filter by Platform = Linux. Verify Linux machines: SureshKumar, RajeshNair, LinuxBuild-01. Check deployment status and remarks.
41. **Application Groups tab**: Filter by Platform = Linux. Verify Linux groups: Allowed Linux apps (Allowlist), Blocked Linux apps (Blocklist).
42. **Allowed Apps tab**: Click Linux platform toggle. Verify: nginx, docker, git in Allowed Linux apps group. Verify filter sidebar shows Package Name (not Product Name) and File Path (not Folder Path).
43. **Blocked Apps tab**: Click Linux platform toggle. Verify: nmap, wireshark in Blocked Linux apps group.
44. **Unmanaged Apps tab**: Click Linux platform toggle. Verify unmanaged Linux apps (e.g., htop, tmux). Select one, verify 'Move to existing App group' button enables.
45. Click **'Move to existing App group'**. Verify modal shows. Select Blocklist → 'Blocked Linux apps'. Click Move.
46. **Requested Apps tab**: Verify info banner 'Application access request is currently available for Windows and Linux.' Verify request entries.

### Phase 7: Verify Deployment Status on List
47. Return to Deploy Policy page. Confirm deployment status shows percentage and appropriate color (gray/green/red).
48. Verify Flexibility badge (Audit/Strict).
49. Use 'Filter By' to filter by mode.

### Phase 8: Verify Saved Policies
50. Click **'EPM Policies'** in sidebar.
51. Verify Saved Policies page shows Linux Strict Policy and Linux Audit Policy.
52. Filter by **Platform = Linux**. Verify only Linux policies shown.
53. Click a policy name. Verify Deploy Policy Summary opens with back arrow returning to Saved Policies.

### Phase 9: Verify Systems View
54. Click **'Systems View'** in sidebar.
55. Filter by **Platform type: Linux**.
56. Confirm Linux machine: `linux-build-srv1`, WORKGROUP, `11.4.2514.01.L`, 3 app groups, Ubuntu 22.04 LTS (x64), `10.71.32.105`, 2 associated policies.

### Phase 10: Verify Reports
57. Click **'Reports'** in sidebar.
58. Open **'Discovered Products'**. Filter by **Platform type: Linux**.
59. Confirm Linux product data visible.
60. Navigate back via breadcrumb. Open **'Blocklisted Application Access'**. Filter by Linux.
61. Spot-check 2-3 additional reports.

### Phase 11: Configure Alerts
62. Click **'Alert Settings'** in sidebar.
63. If mail server not configured, verify red error banner and 'Configure Now' link.
64. Enter email address. Click **'Save'**.

### Phase 12: Create JIT Access for Linux
65. Click **'Just In Time Access'** in sidebar.
66. Verify existing Linux entries in table: 'Linux Allow all Apps' (0209099VaetS, Failed) and 'Linux specific app access' (LinuxBuild-01, Succeeded).
67. Click **'Create'** dropdown → **'Application Allowlisting'**.
68. Enter policy name. In Computer Name, type and select a Linux machine from suggestions.
69. Set Duration Type = Fixed, Access Duration = 4 Hours.
70. Select 'All Applications'. Check 'Include Blocklisted applications'.
71. Click **'Deploy Immediately'**.
72. Verify new JIT policy in table with Linux icon.
73. Click the policy name. Verify JIT Summary page with Summary and Audit tabs.

### Phase 12a: Verify JIT Deployments List
74. On the JIT Deployments page, verify 11 rows are listed. Verify columns: Policy Name, Applied Time, Duration Type, Computer Name, Status, Access Type, Expiry Date, Action.
75. Verify Linux rows: 'Linux Allow all Apps' (0209099VaetS, Failed) and 'Linux specific app access' (LinuxBuild-01, Succeeded).
76. Set filter **Platform type = Linux**. Verify only the 2 Linux rows are visible.
77. Clear filter. Click **Expiry Date** column header. Verify rows sort by expiry date.
78. Select first row checkbox. Verify Delete button is active. Click ellipsis on a row → verify **Modify** and **Delete** options.

### Phase 12b: Verify JIT Requests (Approval Workflow)
79. Click **'JIT Requests'** in sidebar. Verify page loads with red pending badge **5** in header and sidebar.
80. Verify default filter is **Pending**. Verify 5 pending rows visible (john.doe, sarah.kim, mike.chen, lisa.wang, raj.patel). All rows have bold/unread styling.
81. Verify Approve and Decline buttons are **disabled** (no rows selected).
82. Select **mike.chen** row (Elevate Wireshark, LinuxBuild-01). Verify Approve and Decline buttons become **enabled**.
83. Click **'Approve'**. Verify: row status changes to 'Approved' (green badge), Actioned By = 'admin', Actioned On = timestamp, row style changes to read. Pending badge updates to **4**.
84. Navigate to **JIT Deployments**. Verify the approved request ('Elevate Wireshark', LinuxBuild-01) now appears in the deployments table.
85. Navigate back to **JIT Requests**. Select **kevin.lee** row... set status filter to **'All'** first. Find 'Allow BitTorrent' row (Declined). Verify ellipsis menu shows only **Modify** and **Delete** (no Approve/Decline).
86. Set filter **Request Type = Elevation**. Verify only elevation-type rows are visible.
87. Set filter **JIT Requests = All**, **Request Type = All**. Verify all 10 rows visible.
88. Select **raj.patel** and **lisa.wang** rows. Click **'Decline'**. Verify both rows update to Declined. Badge updates to **2**.

### Phase 13: Verify App Group Summary
89. Click **'Application Groups'** in sidebar.
90. Click **'Allowed Linux applications'** name link.
91. Verify App Group Summary: 3 Total Rules Applied, Allowlist type, 2 Custom Groups Associated.
92. **Rule Details tab**: Verify filter sidebar has Package Name (not Product Name). Verify vendors: Canonical Ltd., Red Hat Inc., Google LLC.
93. **Associated Custom Groups tab**: Verify: All Computers Group, Developer group.

### Phase 14: Configure Linux Child Process Control
94. Click **'Child Process'** in sidebar (under Policies).
95. Verify Child Process page loads with three platform tabs: Windows (default), Mac, Linux.
96. Click **Linux** tab. Verify filter dropdown shows: All, Package, Executables, File Hash (NO Vendor, NO File Path).
97. Verify Package section lists vendor groups: Canonical Ltd., Red Hat Inc., Google LLC, Mozilla Corporation.
98. Under **Canonical Ltd.**, check `snap`, `apt-get`. Verify checkboxes are selected.
99. Click **'Whole Process Tree'** button on the `snap` row. Verify button toggles to active (highlighted) state.
100. Under **Google LLC**, check `Google Chrome`. Click its **Whole Process Tree** button.
101. Click **'Apply'**. Verify selections are saved for the Linux tab.
102. Click **'Global'** checkbox at the top. Verify a confirmation that global applies to all platforms.
103. Click **'Reset'**. Verify all Linux selections are cleared.

### Phase 15: EPM — View EPM Policies List
104. Click **'EPM Policies'** in sidebar (under Policies).
105. Verify **Endpoint Privilege Management Policies** page loads with table: Policy Name, Platform, Elevation, Auto Elevate, Vendors, Products, Created Time, Last Modified, Action.
106. Verify **three rows**: 'Windows EPM Policy' (Specific Apps/Yes/2/2), 'Linux EPM Policy' (Not Configured/No/0/0), 'Mac EPM Policy' (Not Configured/No/0/0).
107. Verify **'Create Policy'** dropdown shows only **Windows** option (no Mac/Linux).
108. Filter by **Platform = Windows**. Verify only Windows policy shown.

### Phase 16: EPM — Create Windows EPM Policy (Step-Based)
109. Click **'Create Policy'** → **'Windows'**.
110. Verify: header shows **'Privileged Application List'** with shield icon, subtitle about self-elevating privileges. Tip link: 'Have suggestions to enhance privilege management?'
111. Enter policy name: `Windows Dev Elevation Policy`.
112. **Step 1** — Verify toggle ON, step number badge `1`, title: 'Define the scope of applications permitted for privilege elevation'.
113. Verify radio card **'Specific applications defined by policy'** is selected (Recommended badge).
114. Verify **Specific applications selected** panel shows: Vendor (2), Products (9), Verified Executable (4), File Hash (4), Folder Path (1) as chips. Verify **Auto Elevation** checkbox is checked.
115. Click radio card **'All applications approved in Application Control'**. Verify specific apps panel hides and **Excluded applications** panel appears: Vendor (1) Unknown Publisher, Products (2) AutoHotkey/WinRAR, Verified Executable (1) powershell_ise.exe.
116. Switch back to **'Specific applications defined by policy'**. Verify panel restores.
117. **Step 2** — Verify toggle ON, step number badge `2`, title: 'Configure the elevation behavior for applications outside the defined scope'.
118. Verify radio card **'Permit elevation upon submission of a business justification'** is selected (Self-service badge).
119. Click radio card **'Require administrator approval via a formal elevation request'** (Recommended badge). Verify it becomes selected.
120. Switch back to **'Permit elevation upon submission of a business justification'**.
121. Check **'Enable Automatic Local Admin Removal'**. Verify expansion shows blue warning + retained accounts: sysadmin, emsadmin, Administrator. Verify 'Browse' button.
122. Click **'Save list'**. Verify policy appears in EPM Policies list.

### Phase 17: EPM — Deploy Combined ACP + EPM (Windows)
123. Click **'Deploy Policy'** in sidebar. Click **'Associate Group'**.
124. Verify form shows **two accordions**: 'Deploy Application Control' and **'Deploy EPM Policy'** (Windows only).
125. In Define Target, enter a Windows Custom Group.
126. In Deploy Application Control, add Windows application groups, select Audit Mode.
127. In **Deploy EPM Policy** accordion, click EPM Policy dropdown. Select 'Windows EPM Policy'. Verify chip appears.
128. Click **'Deploy'**. Verify combined ACP+EPM deployment in Deploy Policy table.

### Phase 18: EPM — Deploy EPM-Only (Without ACP)
129. Click **'Associate Group'** again on Deploy Policy. Select Windows.
130. **Uncheck** the **'Deploy Application Control'** accordion checkbox. Verify ACP body collapses and is greyed out.
131. Verify **'Deploy EPM Policy'** accordion remains checked and active.
132. Select `Windows EPM Policy` from EPM Policy dropdown.
133. In Define Target, enter a different Windows Custom Group.
134. Click **'Deploy'**. Verify EPM-only deployment appears in Deploy Policy table (no ACP association).

### Phase 19: EPM — Verify Privilege Management Summary
135. Navigate to the Privilege Management summary page.
136. Verify info banner: 'Privilege Management is currently available only for Windows.'
137. Verify Summary panel: Elevate in Audit = Allowed, Privileges Elevated = Specific apps, Auto Elevation = Yes.
138. Verify counts: Vendor(s) = 2, Product(s) = 2, Verified Executable(s) = 2, FileHash = 2, Folder Path = 1.
139. Click **'View Audit Applications'** link. Verify audit view opens.
140. Click **'Modify'** button. Verify EPM edit form (Privileged Application List) opens pre-populated with step-based layout.

### Phase 20: EPM — Verify Privileged Activity Audit
141. Click **'Privileged Activity Audit'** in sidebar (under Insight).
142. Verify page loads with title **'Privileged Activity Audit'** and clipboard-list icon.
143. Verify toolbar shows three filter dropdowns: Application Type, Elevated by ManageEngine, Elevation Decision.
144. Verify table has 9 columns: Application Name, Application Type, Elevated Endpoint, Reason stated, Date & Time of elevation, Elevated by (User), User Domain, Elevated by ManageEngine, Elevation Decision.
145. Verify sample data: `curl.exe` | Executables | uesqa-w10-2 | elevation required | May 12, 2025 | uesqa-test11 | WORKGROUP | Yes | Approved.
146. Verify `dbeaver.exe` row shows: Elevated by ManageEngine = **No**, Elevation Decision = **Denied**.
147. Set filter **Elevation Decision = Denied**. Verify only denied rows visible (dbeaver.exe, powershell.exe).
148. Set filter **Elevated by ManageEngine = Yes**. Verify only ManageEngine-managed rows visible.
149. Clear all filters. Verify full table restores.
150. Click **Application Name** link (e.g., `curl.exe`). Verify detail view opens.
151. Verify pagination: '1 - 5 of Total Records', page size = 25, prev/next buttons.
152. Click **download** icon. Verify export initiates (CSV/PDF).

### Phase 21: Verify Admin Rights Summary
153. Click **'Admin Rights Summary'** in sidebar (under Insight).
154. Verify page loads with title **'Admin Rights Summary'** and user-shield icon.
155. Verify toolbar: Device/User view toggle icons, Custom Group filter, User Type filter, Advanced Filter icon.
156. Verify Device view is default with sub-tabs: **By Computer** (active) and **By User**.
157. **By Computer tab:** Verify columns: checkbox, Computer Name, Domain Name, Operating System, Remarks, Local Admin Count.
158. Verify 4 rows: EC2AMAZ-DS25S0F (2), ues-w10-cloud1 (3), uesqa-w10-2 (1), linux-build-srv1 (2).
159. Click Local Admin Count `2` on EC2AMAZ-DS25S0F. Verify modal: 'Local Admin Users', info banner, table with test/user.
160. Close modal. Click **By User** sub-tab.
161. **By User tab:** Verify columns: checkbox, User Name, User Domain, Admin Type, Remarks, Computer Count.
162. Verify 4 rows: test (3), user (2), admin (2), root (1).
163. Click Computer Count `3` on 'test'. Verify modal: 'Computers for \'test\'', 3 machines listed.
164. Close modal. Click **List icon** to switch to User View.
165. **User View:** Verify columns: checkbox, User Name, Computer Name, Domain, Operating System, Admin Type, Last Logon.
166. Verify 8 rows including linux-build-srv1 entries (root, admin).
167. Verify **'Move as Standard User'** button is present.
168. Select `test` on EC2AMAZ-DS25S0F. Click **'Move as Standard User'**. Verify confirmation dialog. Confirm. Verify row removed.
169. Click **Advanced Filter** icon. Verify panel opens with Field/Criteria/Value row + Save & Apply / Apply buttons.
170. Set Field = 'Operating System', Criteria = 'like', Value = 'Ubuntu'. Click **Apply**. Verify only linux-build-srv1 rows shown.
171. Close advanced filter. Set Custom Group = 'Developer group'. Verify filtered results.
172. Set User Type = 'Local Admin'. Verify combined filter result.
173. Reset all filters. Verify full data restores.

---

# LINUX vs. WINDOWS/MAC — KEY DIFFERENCES

| Feature | Windows | Mac | Linux |
|---------|---------|-----|-------|
| Filter: Product column label | Products | Products | **Package** |
| Filter: Path column label | Folder Path | Folder Path | **File Path** |
| Trusted Repository filter | Yes | Yes | **No** |
| Deploy EPM Policy accordion (in policy form) | **Yes** | No | **No** |
| Strict Mode sub-option (allow user requests) | Yes | No | **Yes** |
| Child Process platform tab | Windows (default, Products/Executables) | Mac (Vendor/Products/Executables/File Hash/Folder Path) | Linux (**Package**/Executables/File Hash — no Vendor grid, no File Path) |
| Platform icon | Windows icon | Apple icon | **Tux/Linux icon** |
| Agent version suffix | `.W` | `.M` | **`.L`** |
| App Group Summary filter sidebar | Vendor, Product Name, Verified Exe, File Hash, Folder Path, Store Apps | Vendor, Product Name, Verified Exe, File Hash, Folder Path, Store Apps | Vendor, **Package Name**, Verified Exe, File Hash, **File Path**, Store Apps |
| Deploy Policy Summary: Requested Apps | Windows only banner | Not available | **Windows and Linux** |
| JIT Access: Application Elevation | Yes | No | **Yes** |
| JIT Access: Application Allowlisting | Yes | Yes | **Yes** |
| Deploy Policy page: button label | Associate Group | Associate Group | **Associate Group** (same) |
| Deploy Policy form: title | Associate Policy | Associate Policy | **Associate Policy** (same) |

---

*Document Version: 3.6 | Created: April 7, 2026 | Updated: April 22, 2026 | Scope: Linux Application Control Policy Deployment + Windows EPM — M1*
*Format: High-Level Use Case Document per ManageEngine Endpoint Central standards*
