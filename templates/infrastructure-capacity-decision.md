---
version: 1.1.0
status: template
license: CC-BY-4.0
last_reviewed: 2026-11-14
description: "A decision template for assessing digital infrastructure capacity, service demand, energy, water, resilience, lifecycle cost and investment gates."
keywords: "infrastructure capacity, data centre, cloud, energy, water, lifecycle cost"
---

# Infrastructure Capacity Decision — Template

**Version:** 1.1.0 | **Licence:** CC BY 4.0

Tools for deciding whether new digital infrastructure capacity, expansion or a cloud move is justified, and for making energy, water, resilience and lifecycle assumptions visible. Capacity should follow a governed service need.

Related: [Digital Sustainability and Data Centre Energy Governance](../frameworks/digital-sustainability-data-centre-governance.md). Definitions are in the [KPI reference](kpi-reference.md), Section 2.

## 1. Frame the service need

| Question | Entry |
|---|---|
| Which service or user need requires capacity? | |
| Current and forecast workload, and how reliable is the forecast? | |
| Evidence that new capacity is actually necessary | |
| Latency and availability requirements | |
| Security, sovereignty and recovery constraints | |
| Can optimisation, consolidation, data reduction, reuse or workload redesign meet the need? | |
| What will be measured before and after the change? | |

Keep three things distinct: reserved capacity, forecast demand and actual utilisation.

## 2. Options comparison

Options to consider where realistic: optimise existing facilities; consolidate or retire underused capacity; reuse a brownfield site; colocation or cloud; build or expand; distribute workloads; defer; redesign the service.

| Decision dimension | Question | Option A | Option B | Option C |
|---|---|---|---|---|
| Service value and demand | Linked to a defined outcome and evidenced demand? | | | |
| Energy and grid | Load profile, connection readiness, energy source, price exposure, flexibility | | | |
| Climate and site | Ambient conditions, land use, local constraints, community impacts | | | |
| Water | Direct and indirect needs, local conditions, seasonal constraints | | | |
| Carbon and lifecycle | Operational emissions and equipment impacts over the lifecycle | | | |
| Resilience and security | Continuity, redundancy, recovery, security needs met? | | | |
| Economics | Total lifecycle cost: energy, water, cooling, equipment, maintenance, exit | | | |
| Delivery maturity | Planning, connection, equipment, skills and operating plans credible? | | | |
| Reversibility | Can it be scaled, migrated or retired if assumptions change? | | | |

Do not collapse non-negotiable service, safety, environmental or legal constraints into a single average score. Record evidence, assumptions, confidence and the accountable decision-maker. Where an infrastructure choice is hard to reverse, make portability, workload placement, phased growth and service continuity explicit, and register material resource and infrastructure dependencies in the [Strategic dependency register](strategic-dependency-register.md).

## 3. Measurement boundary sheet

| Field | Entry |
|---|---|
| Measure | |
| Boundary (what is in and out) | |
| Period and baseline | |
| Source system and owner | |
| Method: measured or estimated; allocation method for shared infrastructure | |
| Emissions factors and accounting method (location or market), if relevant | |
| Denominator (for intensity measures) | |
| Reporting frequency and verification approach | |

Report absolute consumption alongside intensity measures. Do not treat heat reuse or water reduction as established benefits until measured.

## 4. Decision gates

| Gate | Focus | Decision, conditions, owner, review trigger |
|---|---|---|
| 1. Need and alternatives | Validate demand and service outcome; assess optimisation and reuse first | |
| 2. Feasibility | Site, grid, energy, water, resilience, delivery maturity | |
| 3. Investment | Lifecycle cost and resource scenarios; trade-offs and owners | |
| 4. Design assurance | Facility, workload, security, environmental and operational requirements | |
| 5. Operational readiness | Monitoring, energy procurement, water plans, incident response, reporting | |
| 6. Benefits review | Actual service and environmental outcomes against baseline; adapt or retire | |

A decision record should include outcome, options, assumptions, evidence, environmental boundary, capacity forecast, decision owner, conditions, review trigger and exit path. Use the [Decision record example](decision-record-example.md).

## 5. Procurement requirements

Requirements should be specific, measurable, proportionate and verifiable. Prefer evidence and reporting duties that support operational decisions over unsupported environmental claims.

- [ ] Service outcome, demand evidence and capacity forecast
- [ ] Site, grid, energy, water, carbon, equipment and resilience assumptions
- [ ] Total lifecycle cost and sensitivity to energy-price or demand changes
- [ ] Supplier evidence and measurement rights for relevant resource and service metrics
- [ ] Data boundaries, reporting frequency, source systems and verification
- [ ] Architecture and exit considerations, including portability and continuity
- [ ] Benefit owner, baseline, target, review date and corrective-action triggers

## 6. Fictional decision record

> Illustrative only. "the fictional services organisation" and its decision are invented; no saving is assumed.

| Field | Entry |
|---|---|
| Decision | Approve a time-bounded optimisation and feasibility phase; defer the expansion decision |
| Rationale | Demand evidence and capacity forecast are not yet credible enough to justify new capacity |
| Conditions | Baseline for energy, utilisation, water and cost agreed; named infrastructure and service owners; defined measurement boundary |
| Revisit when | Demand evidence changes, measured energy per successful transaction is available, or an option cannot meet service requirements |
| Evidence status | All results remain to be measured |

*Template for adaptation. Independent professional guidance; not an engineering design, environmental assessment or regulatory opinion.*
