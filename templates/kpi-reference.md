---
version: 1.1.0
status: template
license: CC-BY-4.0
last_reviewed: 2026-11-14
---

# KPI Reference — Template

**Version:** 1.0.0 | **Licence:** CC BY 4.0

Reference definitions for the measures used by the strategic technology domains. The common execution and portfolio measures are in the [KPI dictionary](kpi-dictionary.md) template; use the specification fields there for every measure below. Targets and thresholds must be set from your own baseline and context; this reference defines measures, not universal targets.

## Rules that apply to every measure

- Define a boundary, measurement period, data source, owner and baseline before reporting.
- Report absolute values alongside intensity ratios; a falling ratio can coexist with rapidly rising total demand.
- Distinguish measurements from estimates and disclose allocation methods.
- Compare like with like and do not hide re-baselining.
- Do not use a single ratio, or activity counts such as stars, downloads or commits, as a complete score of strategic value.

## 1. Open source

Used with [Open Source Strategy & Governance](../frameworks/open-source-strategy-governance.md).

| Measure | Definition | Owner and source | Use |
|---|---|---|---|
| Approved component coverage | Components in scope with recorded owner, source, version and review status ÷ components identified in scope | Programme owner; component inventory | Shows visibility; interpret against inventory completeness |
| Vulnerability remediation timeliness | In-scope vulnerabilities remediated within policy time ÷ in-scope vulnerabilities due | Security owner; vulnerability and remediation records | Review by severity and exposure; show overdue exceptions |
| Lifecycle cost variance | (Actual plus forecast lifecycle cost − approved lifecycle estimate) ÷ approved estimate | Service owner with finance; cost records | Reveals hidden integration, support or upgrade burden |
| Governance-health coverage | Strategic dependencies with a current governance-health review and credible maintenance path ÷ strategic dependencies | Technical owner; project and dependency review | Highlights concentration and continuity risk |
| Strategic-dependency ownership | Strategic dependencies with a named owner and decided response ÷ strategic dependencies | Portfolio authority; dependency register | Shows whether dependencies are managed, not just known |
| Contribution follow-through | Approved contributions with an assigned owner and completed status review ÷ approved contributions due for review | Programme owner; contribution register | Measures governance follow-through, not community acceptance |
| Reuse / adoption | Eligible teams using the approved component or capability ÷ eligible teams, where reuse is the intended outcome | Product / platform owner; service records | Shows internal use; pair with quality and fit |
| Exit / continuity readiness | Critical components with a documented and reviewed exit, mirror or fork approach ÷ critical components | Service / architecture owner; continuity records | Focuses on practical, not merely theoretical, portability |
| Procurement exit coverage | Material contracts with defined exit, data return and continuity terms ÷ material contracts | Procurement; contract register | Makes integrator and supplier dependence visible |

## 2. Digital sustainability and data centres

Used with [Digital Sustainability and Data Centre Energy Governance](../frameworks/digital-sustainability-data-centre-governance.md). Where relevant, align with recognised data centre metrics (for example PUE, WUE and CUE, and the ISO/IEC 30134 series) and state any deviation.

| KPI | Suggested definition | Interpretation |
|---|---|---|
| Facility energy use | Metered energy consumed within the stated facility boundary per period (kWh) | Show boundary, period, weather and material capacity changes |
| Energy per useful output | Metered energy attributable to a workload or service ÷ defined completed service units | Define the service unit and allocation method |
| Facility efficiency ratio (commonly PUE) | Facility energy ÷ IT equipment energy, on compatible boundaries | A facility indicator; not a total sustainability score |
| Water-use intensity (commonly WUE) | Direct water consumed within the stated boundary ÷ a disclosed denominator | State water source, boundary, period and local context |
| Operational emissions | Emissions from energy and other operational sources within a stated boundary (tCO₂e) | State factors, scope, location or market method, period |
| Renewable electricity share | Eligible renewable electricity accounted for ÷ total electricity in the stated boundary | Explain the procurement instrument and accounting method |
| IT equipment utilisation | Used compute capacity ÷ available capacity over a stated interval | Segment by workload; low utilisation is not automatically consolidation potential |
| Capacity forecast accuracy | Actual peak or average demand compared with forecast for the same period | Review forecast error and connection or capacity assumptions |
| Heat reuse | Metered useful heat delivered to an identified recipient | Report actual useful energy, not theoretical recoverable heat |
| Service efficiency | Energy or emissions per successful user task or service transaction | Pair with service quality, accessibility and completion rate |
| Equipment circularity | Reused, repaired or responsibly recovered equipment ÷ equipment retired in scope | State scope, disposition evidence and period |

## 3. Enterprise AI and RAG

Used with the [Enterprise AI & RAG Governance Blueprint](../frameworks/enterprise-ai-rag-governance-blueprint.md). Evaluate retrieval, generation and the end-to-end flow separately, against a representative evaluation set.

| Area | Suggested measure | Notes |
|---|---|---|
| Retrieval relevance | Test questions where the required passage is among retrieved results ÷ test questions | Report by question type |
| Context coverage | Test questions whose retrieved context contains the evidence needed to answer ÷ answerable test questions | |
| Faithfulness | Answers fully supported by retrieved evidence ÷ answers reviewed | Define the review method and reviewer independence |
| Citation quality | Citations that lead to a passage supporting the claim ÷ citations checked | |
| Answer completeness | Answers addressing the material parts of the question ÷ answers reviewed | |
| Abstention | Unanswerable or insufficient-evidence questions where the system declines ÷ such questions | Also track unwarranted refusals |
| Access control | Permission-boundary tests passed ÷ permission-boundary tests run | Any failure is a release blocker unless formally accepted |
| Robustness | Ambiguous, conflicting and adversarial cases handled acceptably ÷ such cases run | Include prompt-injection cases in retrieved documents |
| Performance | Latency and availability against the agreed task requirement | |
| Cost per accepted outcome | Total run cost ÷ useful, accepted outcomes in the period | Include model, retrieval, infrastructure and review effort |

Record the corpus, configuration, model, retrieval settings and evaluation version so that changes can be compared. Re-evaluate when models, prompts, indexes, sources, permissions or orchestration change.

*Reference material for adaptation. Independent professional guidance; not an official standard.*
