---
version: 1.1.0
status: template
license: CC-BY-4.0
last_reviewed: 2026-11-14
description: "A portfolio register for identifying material cross-initiative dependencies, owners, impacts, responses and review triggers."
keywords: "strategic dependency register, portfolio risk, dependencies, governance"
---

# Strategic Dependency Register — Template

**Version:** 1.1.0 | **Licence:** CC BY 4.0

A portfolio view should reveal dependencies that are invisible when initiatives are reviewed one by one: common suppliers, fragile open-source projects, a single system integrator, shared AI or data platforms, standards, capacity constraints, grid or site dependencies and scarce skills.

Related: [Digital Portfolio Governance](../frameworks/digital-portfolio-governance.md), Section 6, and [Open Source Strategy & Governance](../frameworks/open-source-strategy-governance.md), Section 4.

## When to add a dependency

Not every library deserves executive attention. Add a dependency when it:

- supports critical services;
- is reused across many products or initiatives;
- underpins interoperability;
- has a high replacement cost or limited realistic alternatives;
- is governed in a way that creates concentration risk.

## Register

| Field | Entry |
|---|---|
| ID | |
| Dependency | |
| Type (supplier / open source / AI model or data provider / platform / energy or infrastructure / standard / skills) | |
| Initiatives and services relying on it | |
| Criticality and reversibility | |
| Concentration and governance health (maintainers, sponsors, privileges, succession) | |
| Dependency risk owner (one named person) | |
| Alternatives that exist today | |
| Exit, mirror or fork option and indicative cost | |
| Chosen response: adopt / influence / contribute / co-steward / mirror or fork / replace | |
| Investment required to sustain, influence or exit | |
| Review date and trigger | |

These responses are not sequential obligations. They are strategic choices whose value depends on risk, cost and capability.

## Fictional example row

> Illustrative only.

| Field | Entry |
|---|---|
| ID | SD-007 |
| Dependency | Open-source data processing component (fictional) |
| Type | Open source |
| Initiatives and services relying on it | Customer information service; two planned analytics initiatives |
| Criticality and reversibility | High criticality; moderate reversibility |
| Concentration and governance health | Small maintainer group; review pending |
| Dependency risk owner | Fictional platform owner |
| Alternatives that exist today | One managed service; one replacement path |
| Exit, mirror or fork option and indicative cost | Mirror feasible; fork not yet assessed |
| Chosen response | Adopt with a bounded hardening assessment |
| Investment required | Assessment effort; support budget to be decided |
| Review date and trigger | After assessment, or on a critical advisory |

*Template for adaptation. Independent professional reference material.*
