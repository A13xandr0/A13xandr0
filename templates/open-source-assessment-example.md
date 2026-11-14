---
version: 1.2.0
status: example
license: CC-BY-4.0
last_reviewed: 2026-11-14
description: "A fictional worked example showing how an open-source product becomes a strategic dependency: governance health, supply chain, participation level, exit readiness and a conditional decision."
keywords: "open source assessment example, strategic dependency, governance health, participation, exit readiness, fork, fictional example"
---

# Open-Source Assessment — Fictional Worked Example

**Version:** 1.2.0 | **Licence:** CC BY 4.0

> **Illustrative example only.** The consortium, product, findings, ratings and results below are fictional. No conclusion about a real project, supplier or organisation is implied, and every finding remains an assumption until measured.

This example applies the principal sections of the [Open-Source Assessment](open-source-assessment.md) template and [Open Source Strategy & Governance](../frameworks/open-source-strategy-governance.md). Its scorecard is completed for the selected open-source option; the alternative options remain qualitatively assessed pending comparable lifecycle and operational evidence. It deliberately avoids a simple library choice. It shows how an open-source product moves from a technical component to a **strategic dependency**.

## 1. Scenario and options

A fictional **Regional Digital Services Consortium** must choose the platform for managing requests and communications used by 35 public bodies. The options are:

1. extend an open-source solution already used by some of the bodies;
2. acquire a proprietary software-as-a-service platform;
3. build a new solution;
4. keep the existing systems temporarily.

The open-source solution shows good functional fit, a compatible licence, documented APIs and an active but concentrated community. Against that, it has two principal maintainers; releases and the repository are administered by a single organisation; deployment documentation is incomplete; there is no formal succession plan; and the bodies' internal capacity is limited.

**Strategic and functional fit.** The assessment separates requirements that are met immediately, requirements met through configuration, requirements that need development, and requirements that would alter the product in an unsustainable way. Only the last group counts against the option.

| Option | Fit | Lifecycle cost (relative) | Dependency profile | Reversibility |
|---|---|---|---|---|
| Extend the open-source solution | Good | Moderate; depends on funded maintenance and skills | Concentrated upstream governance; no vendor contract | Moderate if continuity is prepared |
| Proprietary SaaS | Good | Higher recurring cost | Supplier concentration; data and contract exit to be tested | Lower once adopted |
| Build a new solution | Uncertain | Highest and least predictable | Internal capacity becomes the dependency | Low |
| Keep existing systems | Declining | Rising support cost | Ageing components | High but time-limited |

The comparison is qualitative and illustrative. Open source is not treated as automatically free of lock-in: dependence can arise through concentrated maintainers, release control, skills and tooling.

### Illustrative option scorecard

The following scores apply the seven dimensions and weights in the assessment template to the open-source option. They are provisional fictional judgements based on the scenario described here, not measured findings or a ranking against the other options. Confidence is low to medium because lifecycle cost, internal capability and exit readiness still require verification.

| Dimension | Weight | Rating (1–5) | Weighted contribution | Evidence and confidence |
|---|---:|---:|---:|---|
| Strategic and functional fit | 20% | 4 | 0.80 | Good fit against stated needs; requirements validation remains necessary — Medium |
| Ecosystem sustainability and governance health | 15% | 2 | 0.30 | Maintainer and organisational concentration, weak succession — Medium |
| Security and operational readiness | 15% | 3 | 0.45 | Upstream process exists, but independent scanning and deployment readiness are incomplete — Low |
| Legal and licence fit | 15% | 4 | 0.60 | Licence appears compatible; formal legal verification remains a condition — Medium |
| Interoperability and exit options | 10% | 2 | 0.20 | APIs and data export exist, but continuity exercise is only partial — Medium |
| Total lifecycle economics | 15% | 2 | 0.30 | Five-year cost has not been estimated — Low |
| Internal capability and stewardship | 10% | 2 | 0.20 | Internal skills and autonomous release capability are insufficient — Medium |
| **Weighted total** | **100%** |  | **2.85 / 5** | **Low–medium overall confidence** |

The weighted total is a structured summary, not an approval threshold. The low scores for ecosystem health, lifecycle economics and internal capability remain visible and cannot be offset by functional fit. They explain why adoption is conditional on funded maintenance, capability development, independent security work and a successful follow-up continuity test. The proprietary, build and keep-existing options remain qualitatively described above; they are not numerically ranked because equivalent evidence has not been established.

## 2. Governance-health assessment

A technically sound project can still carry a high governance risk.

| Dimension | Evidence | Assessment |
|---|---|---|
| Maintainer diversity | Two people control most releases | Weak |
| Organisational diversity | One dominant organisation | Weak |
| Contribution process | Documented and used | Adequate |
| Release continuity | Regular over the last 18 months | Adequate |
| Decision transparency | Decisions partly documented | Partial |
| Succession planning | Not available | Weak |
| Security process | Reporting channel and policy in place | Adequate |
| Dispute resolution | Not formalised | Weak |

Popularity and commit activity are not offered as evidence of sustainable governance.

## 3. Supply chain, lifecycle and procurement checks

| Check | Fictional finding |
|---|---|
| Software bill of materials (SBOM) | Available for releases; format and completeness to be verified |
| Dependency scanning | Run by upstream; the consortium has no independent scan yet |
| Reproducible builds | Partial |
| Maintainer and release keys | Held by the upstream organisation only |
| Known vulnerabilities | None critical at the time of assessment |
| Update process | Documented, but dependent on upstream cadence |
| Deployment documentation | Incomplete |
| Availability of skills | Insufficient inside the bodies |
| Five-year lifecycle cost | Not estimated; to be completed before the second decision gate |
| Support arrangements | Community only; no service agreement |
| Data portability | Export available |
| Operational continuity | Depends on upstream releases |

Distinguishing automated checks, self-declarations and manual verification matters: the assessment favours criteria that can be verified and are directly useful to those who must reuse the software, and records the level of evidence for each.

## 4. Participation decision

The decision is not limited to "adopt or reject". It selects a participation level, as a deliberate choice rather than a ladder to climb.

| Level | Decision |
|---|---|
| Use | Yes |
| Enable | Yes, with a reusable deployment package |
| Support | Yes, funding documentation and security maintenance |
| Contribute | Yes, upstream first |
| Collaborate | Conditional: selected roadmap topics, with a named representative and mandate |
| Steward | Not yet; reassess after 18 months |

**Contribution plan.** Contributions are limited to documentation, deployment tooling and security fixes. Two bodies appoint an authorised representative; staff time and review capacity are funded for 24 months; and the usual checks on authority, rights, confidentiality and communications are completed before any public contribution.

## 5. Exit-readiness and continuity test

The legal right to fork is not the same as the operational ability to sustain a fork. Forkability contributes to resilience only when it is operationally credible.

| Requirement | Initial state | Action |
|---|---|---|
| Right to fork | Available | Legal verification |
| Complete copy of history | Available | Periodic mirror |
| Reproducible build | Partial | Correct the pipeline |
| Internal skills | Insufficient | Train four technical staff |
| Release management | Dependent on upstream | Document |
| Vulnerability response | Not autonomous | Support agreement |
| Data export | Available | Test every six months |
| Replacement cost | Not estimated | Analyse before the second decision gate |

**Continuity exercise (fictional).** The consortium rebuilds and deploys the product from a verified mirror in an isolated environment. Result: **Partial.** The build completes, but two manual steps are undocumented; release signing keys exist only upstream; three deployment steps are reconstructed from individual knowledge; data export and restore pass. The exercise shows that the right to fork exists but fork readiness does not yet.

## 6. Decision

**Adopt and contribute, with conditional collaboration.**

Conditions:

- two public bodies jointly take ownership;
- maintenance is funded for 24 months;
- changes are proposed upstream;
- a verified mirror is maintained;
- a recovery test is run every year;
- the case for shared stewardship is reassessed after 18 months;
- forking remains a contingency option, not the initial objective.

**Review trigger.** Revisit if the upstream maintainer base narrows further, a critical advisory affects the service, release practice changes, the continuity exercise does not improve, or a funding commitment lapses. Record the decision in a [decision record](decision-record.md) and the dependency in the [strategic dependency register](strategic-dependency-register.md).

## 7. Lessons from the example

- **Open source is not the same as no lock-in.** Concentrated maintainers, releases, skills or tooling still create dependence.
- **Contribution is not stewardship.** The example reaches Use, Enable, Support and Contribute, admits selective collaboration, and stops before Steward.
- **The right to fork is not fork readiness.** The partial result of the continuity exercise is the honest one.

Publishing or adopting source code is not enough. Sustainable reuse requires ownership, maintenance, deployment knowledge, verifiable quality, community participation and a credible continuity path. Sharing code is like sharing a recipe: by itself it does not guarantee that others can produce and sustain the result.

## Related resources

[Open Source Strategy & Governance](../frameworks/open-source-strategy-governance.md) · [Open-Source Assessment (template)](open-source-assessment.md) · [Strategic dependency register](strategic-dependency-register.md) · [Decision record](decision-record.md) · [KPI reference](kpi-reference.md) · [Executive checklists](executive-checklists.md) · [Adopting the Frameworks](../guides/adopting-the-frameworks.md)

*Fictional worked example for illustration. Independent professional guidance; not legal advice or a security certification.*
