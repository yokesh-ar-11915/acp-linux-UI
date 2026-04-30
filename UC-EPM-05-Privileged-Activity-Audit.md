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

## Field-Level Validation — Privileged Activity Audit

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

---

## E2E Test Steps — Privileged Activity Audit

> Insert after the last E2E phase in the main document.

### Phase N: Verify Privileged Activity Audit
1. Click **'Privileged Activity Audit'** in sidebar (under Insight).
2. Verify page loads with title **'Privileged Activity Audit'** and clipboard-list icon.
3. Verify toolbar shows three filter dropdowns: Application Type, Elevated by ManageEngine, Elevation Decision.
4. Verify table has 9 columns: Application Name, Application Type, Elevated Endpoint, Reason stated, Date & Time of elevation, Elevated by (User), User Domain, Elevated by ManageEngine, Elevation Decision.
5. Verify sample data: `curl.exe` | Executables | uesqa-w10-2 | elevation required | May 12, 2025 | uesqa-test11 | WORKGROUP | Yes | Approved.
6. Verify `dbeaver.exe` row shows: Elevated by ManageEngine = **No**, Elevation Decision = **Denied**.
7. Set filter **Elevation Decision = Denied**. Verify only denied rows visible (dbeaver.exe, powershell.exe).
8. Set filter **Elevated by ManageEngine = Yes**. Verify only ManageEngine-managed rows visible.
9. Clear all filters. Verify full table restores.
10. Click **Application Name** link (e.g., `curl.exe`). Verify detail view opens.
11. Verify pagination: '1 - 5 of Total Records', page size = 25, prev/next buttons.
12. Click **download** icon. Verify export initiates (CSV/PDF).
