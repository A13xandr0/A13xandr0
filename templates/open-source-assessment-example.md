---
version: 1.2.0
status: example
license: CC-BY-4.0
last_reviewed: 2026-11-15
description: "A fictional worked example showing how an open-source product becomes a strategic dependency: governance health, supply chain, participation level, exit readiness and a conditional decision."
keywords: "open source assessment example, strategic dependency, governance health, participation, exit readiness, fork, fictional example"
---

# Open-Source Assessment — Fictional Worked Example

**Version:** 1.2.0 | **Licence:** CC BY 4.0

> **Illustrative example only.** The consortium, product, findings, ratings, figures and results below are fictional. No conclusion about a real project, supplier or organisation is implied, and every finding remains an assumption until measured.

This example applies the principal sections of the [Open-Source Assessment](open-source-assessment.md) template and [Open Source Strategy & Governance](../frameworks/open-source-strategy-governance.md). It treats an open-source technology as both a software choice and an ecosystem dependency, and shows how it moves from a technical component to a **strategic dependency**. Its scorecard is completed for the selected open-source option only.

## 1. Scenario, outcome and options

The **Regional Digital Services Consortium** is a fictional organisation providing shared digital services to 35 public-service organisations. Its current case and service-request platform is approaching end of support. An established fictional open-source platform, **CivicFlow**, is evaluated as one possible replacement.

The assessment rejects the simplistic rationale "move to open source to reduce licence costs and avoid vendor lock-in". Source availability alone does not demonstrate lower lifecycle cost or practical independence.

**Intended outcome.** Establish a sustainable shared-service platform that improves interoperability, adaptability, lifecycle transparency and the ability to change technology or supplier over time.

**Illustrative baseline.**

| Measure | Baseline |
|---|---:|
| Materially different local configurations | 11 |
| Custom integrations | 27 |
| Supplier-specific integrations | 6 |
| Five-year lifecycle cost | EUR 8.2m |
| Average major-change lead time | 14 weeks |

**Alternatives.**

1. Extend the incumbent proprietary platform.
2. Procure a new proprietary SaaS platform.
3. Build a new platform internally.
4. Adopt CivicFlow and participate upstream.

**Decision at this stage:** take CivicFlow to detailed assessment while retaining credible alternatives.

**Functional fit.** Illustratively, 76% of capabilities are available without material modification, 17% through configuration or upstream contribution, and 7% require architectural change or removal of legacy-specific behaviour. Only the last group counts against the option.

### Illustrative option scorecard

The following scores apply the seven dimensions and weights in the assessment template to the open-source option. They are provisional fictional judgements based on the scenario described here, not measured findings or a ranking against the other options. Confidence is low to medium because internal capability, the complete continuity exercise and ecosystem governance still require verification.

| Dimension | Weight | Rating (1–5) | Weighted contribution | Evidence and confidence |
|---|---:|---:|---:|---|
| Strategic and functional fit | 20% | 4 | 0.80 | 76% of capabilities available without material modification; requirements validation remains necessary — Medium |
| Ecosystem sustainability and governance health | 15% | 2 | 0.30 | Concentrated release authority and sponsors, informal succession, weak dispute resolution — Medium |
| Security and operational readiness | 15% | 3 | 0.45 | Security process exists; independent scanning and deployment readiness to be confirmed — Low |
| Legal and licence fit | 15% | 4 | 0.60 | Licence appears compatible; formal legal verification remains a condition — Medium |
| Interoperability and exit options | 10% | 3 | 0.30 | Legal forkability available; operational forkability initially weak; continuity exercise incomplete — Medium |
| Total lifecycle economics | 15% | 4 | 0.60 | Illustrative five-year total EUR 6.1m against EUR 8.2m and EUR 8.0m, including internal capability, contribution and exit readiness — Medium |
| Internal capability and stewardship | 10% | 2 | 0.20 | Internal engineering capability below target; independent emergency-release authority absent — Medium |
| **Weighted total** | **100%** |  | **3.25 / 5** | **Low–medium overall confidence** |

The weighted total is calculated as (4 × 0.20) + (2 × 0.15) + (3 × 0.15) + (4 × 0.15) + (3 × 0.10) + (4 × 0.15) + (2 × 0.10) = **3.25 / 5**. It is a structured summary, not an approval threshold and not a substitute for a decision gate. The ratings are provisional scenario judgements: the confidence label describes the strength of the illustrative evidence, not a statistical confidence interval. The low ratings for ecosystem health and internal capability remain visible and cannot be offset by functional fit or favourable economics. They explain why adoption is conditional on capability development, formalised emergency-release authority and a completed continuity exercise.

**Rating interpretation used in this example:** 1 = materially inadequate; 2 = significant gaps; 3 = partially adequate / material controls still required; 4 = good fit with limited, manageable gaps; 5 = strong fit supported by verified evidence. A rating of 4 for economics means the scenario is comparatively favourable under the stated assumptions; it does not mean the cost estimate is procurement-ready. No minimum weighted score automatically authorises adoption.

## 2. Ecosystem and governance health

A technically sound project can still carry a high governance risk.

| Aspect | Assessment |
|---|---|
| Public contribution process | Strength |
| External contributions | Strength |
| Release predictability | Strength |
| Security process | Strength |
| Contributor onboarding | Strength |
| Release authority | Weakness: concentrated |
| Sponsorship | Weakness: concentrated |
| Succession planning | Weakness: informal |
| Dispute resolution | Weakness: weak mechanisms |

Popularity and commit activity are not offered as evidence of sustainable governance. CivicFlow is treated as a **strategic open-source dependency** because of service criticality, integration depth, switching cost and governance concentration; it belongs in the [strategic dependency register](strategic-dependency-register.md).

## 3. Security, supply chain, skills and suppliers

**Security and supply chain.** The assessment covers the software bill of materials (SBOM), release signing, reproducible builds, vulnerability reporting, dependency scanning, provenance, container integrity and patch responsibilities. Open-source transparency complements security governance. It does not replace it.

**Skills and suppliers.** Four service providers are identified, but specialist knowledge is concentrated. The Consortium therefore requires supplier diversity, internal architecture ownership, deployment automation, knowledge transfer and at least four engineers able to build and deploy independently.

Distinguishing automated checks, self-declarations and manual verification matters: the assessment favours criteria that can be verified and records the level of evidence for each.

**Illustrative evidence and verification register.** The following separates scenario assumptions from evidence that would be required before a real decision. No item below should be read as an independently verified CivicFlow finding.

| Control area | Evidence assumed in this scenario | Verification required before commitment | Status |
|---|---|---|---|
| SBOM and dependency transparency | SBOM can be produced for the assessed release | Generate and inspect an SBOM; reconcile direct and transitive dependencies | To verify |
| Release signing and provenance | Release-signing process is described by the project | Verify signatures, key ownership, rotation and provenance for a selected release | To verify |
| Reproducible builds | Build process is documented | Independently reproduce a clean build and compare artefacts | Not yet demonstrated |
| Vulnerability handling | A security-reporting process exists | Review disclosure policy, response history, patch timelines and escalation route | To verify |
| Dependency scanning | Automated scanning is available | Run scans against the pinned release and record findings, severity and remediation | To verify |
| Container integrity | Container images are available | Verify image provenance, digest pinning, base-image maintenance and scanning | To verify |
| Patch responsibility | Responsibilities can be allocated across consortium and suppliers | Approve a RACI, response targets and tested patch deployment procedure | To define |
| Deployment and recovery | Deployment automation is a target capability | Perform an independent deployment and recovery exercise using documented artefacts | Not yet demonstrated |

A control is not marked as passed merely because a tool, policy or process is said to exist. Evidence must be produced for the selected version and operating context.

## 4. Participation decision

The decision is not limited to "adopt or reject". It selects a participation level, as a deliberate choice rather than a ladder to climb.

| Level | Decision |
|---|---|
| Use | Yes |
| Enable | Yes |
| Support | Yes |
| Contribute | Yes |
| Collaborate | Conditional |
| Steward | Not initially |

The participation levels are strategic choices, not a maturity ladder.

## 5. Exit readiness and continuity exercise

The legal right to fork is not the same as the operational ability to sustain a fork. Legal forkability is available, but operational forkability initially remains weak. Required capabilities include repository mirroring, reproducible builds, internal engineering, release management, independent security response, data export and governance authority for emergency releases.

**Continuity exercise (fictional).** The test assumes six months without upstream security or maintenance releases. Most technical tests pass, but **independent emergency-release authority fails**. The principal continuity weakness is therefore organisational rather than technical.

## 6. Lifecycle economics

Illustrative five-year totals, using the same service scope and planning horizon:

| Option | Five-year total | Estimate status |
|---|---:|---|
| Current platform | EUR 8.2m | Illustrative baseline estimate |
| Proprietary SaaS | EUR 8.0m | Illustrative comparative estimate |
| CivicFlow | EUR 6.1m | Illustrative comparative estimate |
| Internal build | Not estimated | Excluded from the cost comparison and any economic ranking |

**Illustrative cost composition (EUR million, five years).** These allocations are invented to make the arithmetic inspectable; they are not supplier quotations, audited accounts or market benchmarks.

| Cost component | Current platform | Proprietary SaaS | CivicFlow |
|---|---:|---:|---:|
| Licence / subscription / supplier support | 2.4 | 3.4 | 0.5 |
| Implementation, migration and transition | 0.8 | 0.9 | 1.3 |
| Integration, configuration and change | 1.2 | 0.5 | 1.0 |
| Infrastructure and hosting | 1.1 | 0.4 | 0.8 |
| Internal operations and engineering capability | 1.5 | 1.2 | 1.6 |
| Security, assurance and compliance | 0.5 | 0.5 | 0.4 |
| Training and organisational change | 0.4 | 0.3 | — |
| Ecosystem contribution | — | — | 0.2 |
| Exit readiness and portability | 0.3 | 0.8 | 0.3 |
| **Total** | **8.2** | **8.0** | **6.1** |

The component allocations reconcile to the stated totals. The comparison assumes equivalent service scope, five-year horizon, comparable treatment of internal labour and no discounting or inflation adjustment. Those assumptions would need to be replaced with a documented cost model before procurement or investment approval. The CivicFlow estimate includes internal capability, contribution and exit-readiness costs; excluding them would materially overstate its advantage. Conversely, the internal-build alternative has not been costed and cannot be described as economically inferior or superior on the evidence shown.

The illustrative CivicFlow difference is EUR 2.1m against the current platform and EUR 1.9m against SaaS over five years. These are scenario deltas, not validated savings or a business-case commitment. The economics rating of 4/5 is therefore provisional and must be revisited when estimates are supported by supplier inputs, internal effort estimates, risk allowances and sensitivity analysis.

## 7. Assessment result and decision

The scorecard does not support a blanket statement that "most criteria pass": it contains provisional ratings, while several controls and the continuity exercise remain unverified or incomplete. The decision is therefore a **conditional direction for further adoption**, not an unconditional approval to deploy.

**Decision: proceed with a bounded adoption and contribution phase. Do not yet assume stewardship responsibility or migrate the highest-criticality services.** The decision is conditional on closing the capability and continuity gaps and completing the verification activities below. The comparative TCO is indicative only and is not, by itself, a basis for procurement approval.

Conditions:

- increase internal engineering capability;
- formalise emergency-release authority;
- complete the continuity exercise;
- maintain an independent mirror and reproducible deployment;
- validate multiple suppliers;
- upstream appropriate changes;
- reassess ecosystem governance annually.

**Review trigger.** Revisit if the upstream release or sponsor base narrows further, a critical advisory affects the service, release practice changes, the continuity exercise does not improve, or a funding commitment lapses. Record the decision in a [decision record](decision-record.md).

## 8. Lessons from the example

The organisation does not adopt CivicFlow because it is open source. It adopts and contributes because evidence shows that functional fit, interoperability, ecosystem participation, supplier diversity and credible continuity options can support the required service outcome, provided that governance concentration, internal capability and exit readiness are actively managed.

- **Open source is not the same as no lock-in.** Concentrated release authority, sponsors, skills or tooling still create dependence.
- **Contribution is not stewardship.** The example reaches Use, Enable, Support and Contribute, admits conditional collaboration, and stops before Steward.
- **The right to fork is not fork readiness.** The failed emergency-release test is the honest result.

## Related resources

[Open Source Strategy & Governance](../frameworks/open-source-strategy-governance.md) · [Open-Source Assessment (template)](open-source-assessment.md) · [Strategic dependency register](strategic-dependency-register.md) · [Decision record](decision-record.md) · [KPI reference](kpi-reference.md) · [Executive checklists](executive-checklists.md) · [Adopting the Frameworks](../guides/adopting-the-frameworks.md)

*Fictional worked example for illustration. Independent professional guidance; not legal advice or a security certification.*
