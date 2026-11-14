---
version: 1.2.0
status: reference
license: CC-BY-4.0
last_reviewed: 2026-11-14
description: "Definitions of the governance roles, forums and terms used across the technology strategy, portfolio, AI and RAG, open-source and infrastructure frameworks."
keywords: "governance glossary, technology governance terms, decision rights, RACI, strategic dependency, RAG, benefit owner, tolerance"
datePublished: "2026-11-14"
dateModified: "2026-11-14"
---

# Glossary — Technology Strategy, Execution & Governance

**Definitions of the roles, forums and terms used consistently across the frameworks and templates in this repository.** Role and forum names are used with the same capitalisation everywhere. Questions are answered in the [FAQ](faq.md).

## Roles

- **Executive sponsor** — The role that owns strategic direction, risk appetite and the intended outcome of an initiative, and that mandates it. See the [Executive Playbook](frameworks/strategy-execution-governance-playbook.md).
- **Portfolio authority** — The role that allocates investment and capacity within delegated limits and decides to start, stop, defer, accelerate or rebalance initiatives. See [Digital Portfolio Governance](frameworks/digital-portfolio-governance.md).
- **Initiative lead** — The role that manages execution of an initiative within its agreed tolerances.
- **Service owner** — The role that owns the user outcome, adoption and operation of the service an initiative changes.
- **Architecture / assurance authority** — The designated authority for material architecture, security, privacy, resilience and operational decisions within its delegated remit. It provides evidence and challenge but does not inherit business accountability.
- **Benefit owner** — The role accountable for validating, after delivery, that the intended benefit has actually been realised.

## Forums

- **Executive strategy review** — The forum that confirms outcomes and direction.
- **Portfolio review** — The forum that balances investment and capacity across initiatives.
- **Initiative review** — The forum that addresses delivery within an initiative's mandate.
- **Design / assurance review** — The forum that deals with material architecture, security, privacy, resilience and operational questions.
- **Benefits review** — The forum that examines adoption and outcome evidence after delivery.

## Terms

- **Abstention** — The behaviour of an AI or RAG service declining to answer, or asking for clarification, when the available evidence is insufficient, ambiguous or not authorised. Appropriate abstention can be a successful outcome.
- **Benefit** — A measurable change in outcome, not a delivered feature. A benefit needs a baseline, target, date, owner, measurement source and explicit assumptions. See the [benefit profile](templates/benefit-profile.md).
- **Decision record** — A concise record of a material decision: context, options, evidence, authority, rationale, conditions, action owners and review trigger. See the [decision record template](templates/decision-record.md).
- **Decision rights** — The named authority to decide each class of decision, with defined evidence, delegated limits and a review trigger.
- **Disbenefit** — An unintended negative effect of a change, recorded alongside the intended benefit.
- **Exit readiness** — The practical ability to leave or replace a dependency, including rights, skills, retained source, reproducible builds and a continuity plan, as distinct from a merely legal right to do so.
- **Federated discovery** — Helping users find reusable assets by sharing metadata across existing registries and repositories, rather than duplicating authoritative records in a new central catalogue.
- **Governance health** — The extent to which an open-source project's governance supports continuity, in dimensions such as maintainer and organisational diversity, release and repository privileges, decision transparency, succession and dispute resolution. Technical quality does not by itself show governance health.
- **Governed pilot** — A time-boxed, bounded application of a method or technology with a baseline, acceptance criteria, named owners, decision gates, measurement and stop conditions agreed in advance. A successful pilot does not automatically justify roll-out.
- **Information readiness** — The degree to which source content for an AI or RAG service has an owner, an authorised basis for use, classification, provenance, freshness expectations and permission mapping.
- **Initiative canvas** — A one-page record of an initiative's problem, outcome, baseline, options, ownership, dependencies, risks and requested decision. See the [initiative canvas](templates/initiative-canvas.md).
- **Initiative cycle** — The sequence Frame outcome, Assess options, Prioritise and decide, Mandate initiative, Steer within tolerances, Measure adoption and benefits, then Learn, continue, change or stop.
- **Intensity measure** — A ratio such as energy per unit of useful service output. It should be reported alongside absolute consumption, because a falling ratio can coexist with rising total demand.
- **Lifecycle cost** — The full cost of a capability across its life, including operation, support, change and exit, not only acquisition.
- **Mandatory obligation** — A legal, regulatory, safety, security, resilience, contractual or time-critical requirement. It is recorded and resourced separately from discretionary initiatives and is not scored against them.
- **Mirror or fork** — A resilience response for a strategic open-source dependency, in which the organisation keeps or maintains its own copy. It carries responsibilities and should have conditions for returning upstream, replacing or retiring it.
- **Non-compensable criterion** — A requirement that must be met whatever the performance elsewhere, such as zero permission-boundary violations in an AI/RAG evaluation. A strong result on other measures cannot offset a failure.
- **Open Source Program Office (OSPO)** — One organisational model for open-source capabilities such as policy, inventory, licence and security guidance and ecosystem engagement. The capabilities matter more than the organisational label.
- **Open-source participation levels** — The deliberate range of engagement: Use, Enable, Support, Contribute, Collaborate and Steward.
- **Portfolio cycle** — The sequence Frame, Assess, Select, Mobilise, Steer, Realise and Rebalance.
- **Portfolio rebalancing** — Changing the mix of initiatives when evidence, cost, dependencies or expected value change, including reducing scope, pausing, replacing or stopping.
- **RACI matrix** — A table assigning Responsible, Accountable, Consulted and Informed roles to activities, with one Accountable role per row. It clarifies participation and does not replace named ownership. See the [RACI matrix](templates/raci-matrix.md).
- **Readiness profile** — An assessment of an organisation's position across several dimensions (strategy and outcomes, decision rights, information and evidence, technology and architecture, risk and compliance, skills, measurement and learning), read as a whole rather than reduced to a single score. See [Adopting the Frameworks](guides/adopting-the-frameworks.md).
- **Retrieval-augmented generation (RAG)** — An approach that combines retrieval of organisational information with a generative model. It does not by itself make weak information authoritative, remove access-control requirements or guarantee accurate answers. See the [Enterprise AI & RAG Governance Blueprint](frameworks/enterprise-ai-rag-governance-blueprint.md).
- **Shared stewardship** — Distributing responsibility for an important open-source asset across maintainers, users, contributors, sponsors and other ecosystem actors.
- **Software bill of materials (SBOM)** — A record of the components that make up a piece of software, used as supply-chain evidence where appropriate.
- **Stop condition** — A condition, agreed before work starts, under which an initiative or pilot is reconsidered, paused or ended.
- **Strategic dependency** — A supplier, ecosystem, platform, standard, skill, infrastructure or resource whose loss or change would materially affect future options. Examples include an open-source project with concentrated governance, an AI model provider, or energy and grid capacity. See the [strategic dependency register](templates/strategic-dependency-register.md).
- **Strategic outcome** — The measurable change an organisation wants to achieve, from which capabilities, technology choices and investments are derived.
- **Technology sovereignty / strategic autonomy** — The organisational capability to preserve credible options and decision-making power over technology choices and dependencies over time. It is not technological self-sufficiency or the absence of external providers. It depends on understanding and governing critical assets and dependencies, retaining meaningful alternatives and option value, and maintaining practical exit readiness: the ability to replace or leave a technology, supplier or ecosystem without unacceptable disruption to service continuity or strategic outcomes.
- **Technology-neutral** — Not tied to a particular technology, product or delivery methodology. The frameworks apply a common governance logic across technology domains.
- **Tolerance** — An agreed limit, set when an initiative is mandated, beyond which a forecast triggers escalation. Tolerances apply to matters such as milestones, cost, dependencies, risk and benefits.
- **Weighted scoring matrix** — A structured comparison of discretionary options using explicit criteria, weights and evidence. The score informs judgement and does not replace it. See the [weighted scoring matrix](templates/weighted-scoring-matrix.md).
