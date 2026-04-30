# Sample Use Case — For Reference

This is an example of a well-written use case to calibrate tone, depth, and structure.

---

## UC-BL-01 · Source: PP-BL-01
### View Encryption Timestamp for Any Managed Endpoint
**Persona:** IT Administrator, Compliance Officer

---

### 1. Business Problem

Auditors and compliance teams require proof that endpoints were encrypted within a required window — for example, within 24 hours of enrollment or before a certain regulatory deadline. Today, EC only shows whether a drive is encrypted (yes/no) but not when encryption was completed. This forces teams to manually chase down evidence or accept gaps in audit reports.

### 2. Proposed Solution

EC surfaces the date and time encryption was completed for each managed endpoint. This timestamp is visible in the individual device record and included in compliance reports, so admins and compliance officers can confirm encryption coverage without any manual investigation.

### 3. User Journey — How It Works

1. The compliance officer opens the BitLocker Management dashboard in EC.
2. They navigate to any managed device and view its encryption details.
3. Alongside the existing 'Encrypted' status, they now see a clear 'Encrypted On' timestamp — for example, '10 Mar 2026, 09:14 AM'.
4. They filter the device list to show all endpoints encrypted after a specific date to confirm a rollout met its SLA.
5. They export a compliance report that includes the encryption timestamp for every device in the organisation, ready for auditor review.

### 4. API Requirements

- Require API for pulling BitLocker managed devices with encryption status and encryption timestamp
- Require API for pulling per-device BitLocker details with the encryption status and encryption timestamp (agentic query needs)

### 5. Role Handling

Not applicable

### 6. Scope Handling

Not applicable

### 7. MSP and Summary Server

Not applicable

### 8. Notification and Alerts

Not applicable

### 9. ME Tracking, MICS and Action Log

Not applicable

### 10. Existing Customer Handling

Existing encryption status timestamp will be left with "--" since we haven't computed the time. (Could lead to support queries — consider adding an in-product tooltip explaining why the timestamp is missing for pre-existing encryptions.)
