# Question Bank — Pain Problem Discovery Interview

This reference contains the full set of discovery questions organized by section. Use this to ensure thorough coverage during the interview phase.

## Table of Contents
1. [Problem Clarity](#1-problem-clarity)
2. [Solution Direction](#2-solution-direction)
3. [User Journey](#3-user-journey)
4. [API Requirements](#4-api-requirements)
5. [Role & Access](#5-role--access)
6. [Scope](#6-scope)
7. [MSP & Summary Server](#7-msp--summary-server)
8. [Notifications](#8-notifications)
9. [Analytics & Tracking](#9-analytics--tracking)
10. [Existing Customers](#10-existing-customers)

---

## 1. Problem Clarity
- Who exactly experiences this pain? (IT admin, security analyst, compliance officer, CISO, end user, MSP technician?)
- Can you describe the current workaround, if any?
- What's the frequency of this pain — daily annoyance, periodic audit pressure, incident-triggered?
- What's the worst-case business outcome if this isn't solved? (Audit failure? Security breach? Compliance fine?)
- Is this reported by specific customers or a known industry-wide gap?
- Which EC module does this fall under? (BitLocker, Patch Management, OS Deployment, Software Deployment, etc.)

## 2. Solution Direction
- Do you have a specific approach in mind, or should I propose one?
- Where should the solution be visible in EC? (Dashboard card, table column, drill-down view, dedicated page, report?)
- Should this be a new view or an enhancement to an existing one?
- Real-time, near-real-time (next agent check-in), or periodic (daily batch)?
- Any dependencies on agent-side changes vs. purely server-side?
- Are there any mockups or wireframes available?

## 3. User Journey
- Who is the primary actor for the main flow? (e.g., "The IT admin opens...")
- What triggers the journey? (A scheduled review, an incident, a routine check, a policy deployment?)
- Walk me through the ideal happy path — step by step.
- Are there alternate scenarios? (e.g., device offline, policy mismatch, user doesn't act)
- What are the edge cases? (e.g., older OS, multiple protectors, device migration between groups)
- Should any step produce a downloadable report or export?

## 4. API Requirements
- Does this need external-facing APIs for integrations or just internal use?
- Should the API support: filtering, pagination, date ranges, bulk operations?
- Are there existing APIs that can be extended, or do we need entirely new endpoints?
- Are there agentic query needs (i.e., APIs that AI assistants or automation tools will call)?
- Per-device API vs. aggregate/list API — or both?

## 5. Role & Access
- Who should have access? (All EC admins? Only specific roles?)
- Is this a read-only feature, or does it include actions (e.g., initiate rotation, acknowledge alert)?
- If it includes actions, does it need a separate feature permission?
- Does it fit under an existing role (e.g., "BitLocker Manager Read") or need a new one?
- Should the feature be visible but greyed-out for unauthorized users, or completely hidden?

## 6. Scope
- Should technicians only see data for devices within their assigned scope?
- If a device moves from Scope A to Scope B, what happens to its historical data?
  - Option A: Old data stays visible to Scope A technicians
  - Option B: All data moves with the device to Scope B
  - Option C: Historical data visible to both
- Are there any scope-filtered views (e.g., reports, dashboards) that need special handling?

## 7. MSP & Summary Server
- Is this feature relevant in MSP (multi-tenant) environments?
- Should the data be segmented per customer in MSP mode?
- Does it need to appear on the Summary Server for cross-site aggregation?
- Any special handling for MSP technicians vs. MSP admins?
- Same scope rules as single-tenant, or different?

## 8. Notifications
- Should any events trigger notifications? Which events specifically?
- Notification channels: Email? In-app? Webhook? Push?
- Who gets notified — the policy creator, the security team, all admins?
- Should notifications be configurable (opt-in/opt-out) or always-on?
- Is this M1 (first milestone) or can it be deferred to M2?
- Any notification bundling needed? (e.g., digest of all decryption events in the last hour)

## 9. Analytics & Tracking
- What feature usage data should ME Track capture? (API calls, page views, actions taken?)
- Should there be a MICS (ManageEngine Intelligence & Customer Success) dashboard?
- What filters should the dashboard support? (Region, industry, SMB/EBS, customer size?)
- Are there any sensitive actions that need Action Log entries? (Who did what, when?)
- Any computed metrics? (e.g., mean time to encryption, rotation completion rate, adoption percentage?)
- Should analytics distinguish between MSP and non-MSP usage?

## 10. Existing Customers
- When existing customers upgrade, what is their immediate experience?
- Will there be data gaps? (e.g., historical timestamps showing "--" because they weren't collected before)
- Does this change any default behaviour? (e.g., "encrypt first, add protector later" changes the deployment flow)
- Risk of support queries from the transition? How should we mitigate?
- Do we need a migration script, or is it handled automatically?
- Should there be an in-product notification explaining the new feature/changed behaviour?
