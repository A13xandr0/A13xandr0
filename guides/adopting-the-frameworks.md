---
version: 1.1.0
status: reference
license: CC-BY-4.0
last_reviewed: 2026-11-14
description: "A practical guide for adopting the Technology Strategy, Execution & Governance frameworks progressively, proportionately and with measurable evidence."
keywords: "technology governance adoption, governance readiness, technology strategy, AI governance, open source governance, portfolio governance, operating model, pilot"
datePublished: "2026-11-14"
dateModified: "2026-11-14"
---

# Adopting the Frameworks

**A practical guide for introducing the Technology Strategy, Execution & Governance frameworks without turning governance into bureaucracy.**

The frameworks in this repository are designed to work together, but they are not intended to be implemented all at once. They explain what to govern; this guide explains how to start, how to apply the method in proportion to the decision, and when to expand. Start with one real decision, initiative or recurring management problem rather than designing a governance system. Choose the entry point that best fits the situation, then progress through a proportionate adoption cycle: establish the mandate, baseline readiness, select a bounded application, run a governed pilot, operationalise the result and decide whether to scale, reuse or stop. Readiness should be assessed across seven dimensions rather than reduced to a single score. The objective is not framework compliance, but better technology decisions, more credible execution and measurable outcomes.

## 1. What adoption means

Adopting these frameworks does not mean reproducing every role, forum, template or control described in the repository. It means establishing enough organisational capability to:

- connect technology decisions to measurable outcomes;
- compare realistic alternatives before committing;
- make ownership and decision authority explicit;
- identify strategic dependencies before they become difficult to change;
- distinguish mandatory obligations from discretionary investment;
- govern initiatives within agreed tolerances;
- treat information, skills and operational capability as part of technology readiness;
- measure adoption and realised benefits rather than delivery alone;
- learn from implementation and change course when evidence changes.

The frameworks provide a common governance language. Their application should remain proportionate to the materiality, criticality and reversibility of the decision. A low-risk experiment does not require the same controls as a strategic infrastructure commitment. A small internal AI prototype does not require the same operating model as an enterprise AI service. Using a mature open-source component does not automatically require an Open Source Program Office. Governance should become stronger as consequences, dependencies and irreversibility increase.

## 2. Do not adopt the whole repository at once

A common implementation mistake is to start by designing the governance system itself: committees, templates, reporting structures, maturity assessments and approval processes. Start instead with one material question. For example:

- Should an organisation replace an ageing technology platform?
- Should an initiative receive additional investment?
- Is an AI or RAG use case sufficiently ready for a pilot?
- Is an open-source component becoming a strategic dependency?
- Is new infrastructure capacity actually required?
- Should an initiative continue when expected benefits are weakening?

Apply the relevant framework and only the working artefacts required to make that decision better. A useful first adoption may involve only an [Initiative Canvas](../templates/initiative-canvas.md), an options assessment, a [Decision Record](../templates/decision-record.md), a small number of explicit measures, named decision and benefit owners and a review trigger. If these improve decision quality, expand from there. This is consistent with the implementation principle in the [core framework](../frameworks/technology-strategy-execution-governance.md): begin with a small number of representative initiatives and retain only the controls that improve decisions.

## 3. Choose the right entry point

Organisations do not all enter the frameworks from the same place. Three starting paths cover most situations.

### Path A — Start from a strategic decision

Use this path when the organisation needs to decide whether to create or acquire a capability, make a material technology investment, replace a platform, adopt a new technology, change an operating model or accept a strategic dependency.

**Strategic outcome → Required capability → Options → Dependencies → Investment decision → Initiative mandate → Benefits**

Start with the [Technology Strategy & Execution Governance Framework](../frameworks/technology-strategy-execution-governance.md), then use the [Initiative Canvas](../templates/initiative-canvas.md), the [Weighted Scoring Matrix](../templates/weighted-scoring-matrix.md) where useful, the [Strategic Dependency Register](../templates/strategic-dependency-register.md), the [Decision Record](../templates/decision-record.md) and the [Benefit Profile](../templates/benefit-profile.md). Do not allow scoring to make the decision automatically: scores structure evidence, and accountable leaders still decide.

### Path B — Start from an initiative already in progress

Sometimes the technology choice or project already exists but its governance is weak. Typical symptoms include unclear ownership, milestones without measurable outcomes, decisions that are repeatedly reopened, dependencies managed within workstreams but not across them, status reporting without decision triggers, escalation based on hierarchy rather than agreed tolerances, and unclear benefits after delivery.

Do not restart the initiative merely to make it fit the framework. Establish a governance baseline instead:

1. reconstruct the intended outcome;
2. identify the Executive sponsor, Initiative lead, Service owner and Benefit owner;
3. document the material decisions already taken;
4. identify strategic dependencies and assumptions;
5. define tolerances and escalation triggers;
6. establish baseline and benefit measures;
7. identify the next meaningful decision point.

Use the [Executive Playbook](../frameworks/strategy-execution-governance-playbook.md), the [RACI Matrix](../templates/raci-matrix.md), [Escalation and Status](../templates/escalation-and-status.md), the Decision Record and the Benefit Profile. The objective is not to reconstruct perfect historical documentation. It is to create enough clarity to govern the next decision better.

### Path C — Start from a technology domain

Use this path where the immediate question concerns a domain with distinctive dependencies or risks.

- **Enterprise AI and RAG.** Start with the [Enterprise AI & RAG Governance Blueprint](../frameworks/enterprise-ai-rag-governance-blueprint.md) and work through **Task → Information → Authority and access → Architecture, model and retrieval → Evaluation → Operation**. Define the intended task and information requirements first, establish lawful and authorised access, select and configure the retrieval and model architecture, and then evaluate its performance, risks and operational readiness. Use the [AI/RAG Use-Case Assessment](../templates/ai-rag-use-case-assessment.md) before larger commitments are made; the [fictional worked example](../templates/ai-rag-use-case-assessment-example.md) shows the method applied.
- **Open source.** Start with [Open Source Strategy & Governance](../frameworks/open-source-strategy-governance.md) and assess not only licence and code but **Fit → Ecosystem → Governance → Supply chain → Skills → Participation → Continuity → Exit readiness**. Use the [Open-Source Assessment](../templates/open-source-assessment.md); the [fictional worked example](../templates/open-source-assessment-example.md) shows how a component becomes a strategic dependency.
- **Digital infrastructure and sustainability.** Start with [Digital Sustainability and Data Centre Energy Governance](../frameworks/digital-sustainability-data-centre-governance.md) and work from **Service demand → Workload demand → Compute and capacity requirements → Infrastructure and resource dependencies → Options → Lifecycle decision**. This keeps the service need, the workload it generates, the compute required to support it and the infrastructure and resources that provide that compute analytically distinct. Use the [Infrastructure Capacity Decision](../templates/infrastructure-capacity-decision.md).

Domain-specific governance complements the common framework. It does not replace it.

## 4. A six-phase adoption approach

A practical adoption can progress through six phases. The durations are indicative and should be scaled to the materiality and complexity of the decision; a small application may compress several phases.

| Phase | Indicative duration | Purpose | Main outputs |
|---|---|---|---|
| 0. Establish the mandate | 1–2 weeks | Agree what is being decided and who is accountable | Problem, scope, inclusions and exclusions, sponsor, decision required, ownership, deliverables, conditions to proceed |
| 1. Baseline and readiness | 2–4 weeks | Gather evidence on where the organisation actually stands | Outcome baseline, process and information review, skills, architecture, dependencies, security and compliance position, operating capacity, existing measures |
| 2. Select a bounded application | 1–2 weeks | Choose a real, limited case in which the method can be tested | A real initiative with a limited perimeter, identifiable users, knowable sources and dependencies, manageable risk, fast learning and reversibility |
| 3. Run a governed pilot | 8–16 weeks | Generate evidence under explicit controls | Baseline, acceptance criteria, owners, decision gates, measurement tools, issue log, stop conditions |
| 4. Operationalise | 3–6 months | Establish that the result can be sustained, not only demonstrated | Support, updates, ownership, skills, monitoring, incident handling, procurement, continuity, change management, operating budget |
| 5. Scale, reuse or stop | At review | Decide what the evidence justifies | Extend, reuse, replicate with adaptation, keep limited, correct, suspend or retire |

### Phase 0 — Establish the mandate

Before technical work starts, define the problem, the perimeter, the sponsor, the decision required, what is included and excluded, ownership, deliverables and the conditions for proceeding. Separate the mandate to enable a capability from ownership of the business process it affects, and record scope, [RACI](../templates/raci-matrix.md), risks and an initial gate. The [Initiative Canvas](../templates/initiative-canvas.md) and [Decision Record](../templates/decision-record.md) support this phase.

### Phase 1 — Baseline and readiness

Collect evidence on outcomes, processes, information and data, skills, architecture, dependencies, security and compliance, operating capacity and existing measures. The [readiness profile](#6-assess-readiness-across-seven-dimensions) in this guide structures the findings. Without a baseline, later claims of improvement cannot be verified.

### Phase 2 — Select a bounded application

Choose one real initiative with a limited perimeter, identifiable users, knowable sources and dependencies, manageable risks, the possibility of learning quickly and reversibility. Progressive approaches that move from discovery to pilot, then to industrialisation and consolidation tend to work better than a single large commitment. Record the choice in a Decision Record.

### Phase 3 — Run a governed pilot

A governed pilot has a baseline, acceptance criteria, named owners, decision gates, measurement tools, an issue log and stop conditions agreed in advance. A practical rhythm is a weekly operational review and a monthly decision review, using [Escalation and Status](../templates/escalation-and-status.md) and the [KPI Dictionary](../templates/kpi-dictionary.md). The pilot tests whether the organisation can govern the service, not only whether the technology works.

### Phase 4 — Operationalise

Demonstrating that technology works is not enough. Before declaring a result operational, verify support, updates, ownership, skills, monitoring, incident handling, procurement, continuity, change management and operating budget. Confirm that a Benefit owner is named (see the [benefit profile](../templates/benefit-profile.md)) and that the [executive checklists](../templates/executive-checklists.md) have been applied.

### Phase 5 — Scale, reuse or stop

Possible decisions include extending the solution, reusing it elsewhere, replicating it with adaptations, keeping it limited, correcting it, suspending it or retiring it. A successful pilot should not automatically become a roll-out. Record the decision, the evidence and the review trigger in a new Decision Record, and feed the result into [portfolio review](../frameworks/digital-portfolio-governance.md).

## 5. Common mistakes and how to correct them

| Mistake | Correction |
|---|---|
| Starting from the technology | Start from the problem, users and outcome |
| Copying the entire governance model | Apply controls in proportion to risk, criticality and reversibility |
| Confusing a pilot with production | Define the industrialisation gate explicitly |
| Treating technical accessibility as authorisation | Verify ownership, classification and basis for use |
| Selecting AI/RAG without comparing alternatives | Assess search, process change, workflow redesign and conventional automation |
| Measuring only average accuracy | Separate retrieval, generation, permissions, abstention and outcome |
| Using open source only to reduce licence cost | Assess ecosystem, governance, skills and lifecycle cost |
| Publishing code without an adoption package | Add documentation, deployment guidance, support and an owner |
| Confusing self-declaration with verification | Show the level of evidence behind each control |
| Designing too many badges or levels | Use only levels supported by verifiable data |
| Scaling without operational ownership | Fund support, security, maintenance and benefit ownership |
| Not defining when to stop | Set stop conditions and review triggers before the pilot starts |

## 6. Assess readiness across seven dimensions

Avoid a single overall score. Assess seven dimensions separately and read the profile as a whole.

1. **Strategy and outcomes**
2. **Decision rights and accountability**
3. **Information and evidence**
4. **Technology and architecture**
5. **Risk, security and compliance**
6. **Skills and operating capability**
7. **Measurement, learning and reuse**

For each dimension, assess the current level:

| Level | Name | Typical characteristics |
|---|---|---|
| 0 | Unstructured | Initiatives start from opportunity or pressure; ownership is unclear; supplier dependence is high; evidence and metrics are absent; documentation is ungoverned |
| 1 | Aware | Principles are recognised; first owners exist; initiatives and dependencies are inventoried; controls are applied case by case; initial training is under way |
| 2 | Repeatable | Common templates and repeatable assessments; decision records; pilots with predefined criteria; baselines and owners; minimum procedures for security and lifecycle |
| 3 | Governed | A visible portfolio; formalised roles and decision rights; sources and assets with owners; governed dependencies; verifiable controls; operational ownership and benefit review |
| 4 | Adaptive | Systematic reuse of evidence; portfolio rebalancing; benchmarking between options; participation in ecosystems; metrics used to change decisions; documented ability to replace or exit |

**The profile matters more than any single level.** An organisation should not be described simply as "Level 3". It may, for example, be at level 3 on strategy and architecture, level 2 on decision rights and risk, and level 1 on information readiness, skills and measurement. The lowest level on a critical dimension should limit adoption: an organisation with an advanced architecture but information readiness at level 1 is not ready to scale a RAG service.

| Situation | Dimensions that most often constrain scaling |
|---|---|
| Scaling an AI/RAG service | Information and evidence; risk, security and compliance; skills and operating capability |
| Taking a strategic open-source dependency | Skills and operating capability; decision rights and accountability; technology and architecture |
| Committing infrastructure capacity | Technology and architecture; measurement, learning and reuse; strategy and outcomes |

The table is a guide, not a rule: the critical dimensions depend on the decision. This readiness profile is distinct from the progression described for [portfolio governance](../frameworks/digital-portfolio-governance.md) (visibility, control, value management, continuous optimisation); it is broader and is used to decide where to start and what to strengthen before expanding.

## 7. Short self-assessment

Answer each question with evidence rather than opinion, using one of four responses: **No evidence**, **Partially in place**, **Consistently applied** or **Measured and improved**. Three questions per dimension give 21 in total.

| Dimension | Question |
|---|---|
| Strategy and outcomes | Does every initiative start from a measurable outcome? |
| | Are realistic alternatives compared? |
| | Is it defined what would cause a stop or a change of direction? |
| Decision rights and accountability | Is there a named authority, with delegated limits, for each material decision class? |
| | Does each initiative have a named Executive sponsor, Initiative lead, Service owner and Benefit owner? |
| | Is escalation based on agreed tolerances rather than hierarchy alone? |
| Information and evidence | Does every relevant source have an owner? |
| | Are classification, freshness and authorisations known? |
| | Do decisions distinguish evidence, assumptions and uncertainty? |
| Technology and architecture | Are strategic dependencies recorded with owners and exit options? |
| | Are interoperability, portability and lifecycle cost considered before commitment? |
| | Are material architecture and assurance decisions taken by a designated authority within its remit? |
| Risk, security and compliance | Are mandatory obligations identified separately from discretionary choices? |
| | Are security, privacy and legal specialists involved early and in proportion? |
| | Are controls backed by verifiable evidence rather than self-declaration alone? |
| Skills and operating capability | Are internal skills sufficient to evaluate the supplier or project? |
| | Are maintenance and operations funded? |
| | Do skills remain in the organisation after the pilot? |
| Measurement, learning and reuse | Are baselines and targets defined? |
| | Is adoption measured separately from delivery? |
| | Do lessons learned produce reusable templates, components or practices? |

Skills development should cover literacy, technical and operational capability, governance, compliance and ecosystem engagement, and should be tied to use cases, roadmaps and measurement of impact rather than to isolated training.

## 8. Patterns that recur

Experience of applying the method tends to converge on a small number of reusable patterns:

- **Mandate before solution.**
- **Discovery before investment.**
- **Sources and ownership before RAG.**
- **A bounded pilot before scale.**
- **Verifiable evidence before badges or levels.**
- **Community and maintenance before reuse.**
- **Internal capability before dependency.**
- **Operational ownership before go-live.**
- **Measurement and stop conditions before extension.**

## 9. Related resources

- Frameworks: [Technology Strategy & Execution Governance](../frameworks/technology-strategy-execution-governance.md), [Executive Playbook](../frameworks/strategy-execution-governance-playbook.md), [Digital Portfolio Governance](../frameworks/digital-portfolio-governance.md).
- Worked examples: [Initiative Canvas](../templates/initiative-canvas-example.md), [Decision Record](../templates/decision-record-example.md), [AI/RAG Use-Case Assessment](../templates/ai-rag-use-case-assessment-example.md) and [Open-Source Assessment](../templates/open-source-assessment-example.md), all fictional.
- Quick answers: the [Frequently Asked Questions](../faq.md) and the [Glossary](../glossary.md).

## 10. Boundaries

This guide is independent professional guidance. Durations, levels and thresholds are indicative and must be adapted to context rather than copied mechanically. It is not a maturity certification, an assessment scheme or an official standard, and it does not constitute legal, financial, security or regulatory advice.
