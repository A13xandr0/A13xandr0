# Open Source Strategy & Governance

**An executive reference framework for using, supporting, contributing to and stewarding open-source technologies and ecosystems as part of a wider technology strategy.**

## 1. Why open source is a strategic technology domain

Open source can create meaningful options through transparency, adaptability, interoperability, reuse and shared innovation. It can also create dependencies that are easy to underestimate. Access to source code does not by itself guarantee control, resilience or the ability to influence the direction of a project. An organisation can be deeply dependent on a project whose releases, administrative access or technical direction remain concentrated in a small group of maintainers or a dominant sponsor.

For that reason, open source should be governed as a technology and ecosystem choice rather than as a licensing preference. The relevant questions are not only whether software can be used, but whether the project fits an important outcome, who governs and maintains it, how sustainable that governance is, which security and licence obligations follow, what internal capability is required and what choices remain if the ecosystem changes.

This framework uses the same strategy-to-outcomes logic as the rest of the repository, but adds the controls needed for open-source dependencies and participation.

## 2. Participation is a deliberate choice

Organisations can participate at different levels: **Use → Enable → Support → Contribute → Collaborate → Steward**.

Use means consuming a component with appropriate ownership. Enable means making approved capabilities easier to discover and reuse. Support can include funding, testing, documentation or other resources. Contribute means returning work upstream. Collaborate means participating in roadmaps, specifications or shared initiatives. Stewardship means accepting sustained responsibility for governance, maintenance, releases or ecosystem continuity.

This is not a maturity ladder that every organisation should climb. The correct level depends on the value and criticality of the dependency, the health of the ecosystem, the organisation's capability and the expected return from deeper involvement.

## 3. Assess both the technology and its governance

Open-source assessment should consider strategic and functional fit, ecosystem and governance health, security and supply-chain readiness, licence fit, interoperability and portability, total lifecycle economics and internal capability.

A project can be technically excellent while creating governance risk. For material dependencies, examine maintainer concentration, organisational diversity, repository and release privileges, transparency of decision-making, openness to new contributors, change and deprecation practices, succession, release continuity and dispute resolution.

Popularity and commit activity are useful signals, but they do not prove sustainable governance. A small number of people may still control the decisions or infrastructure on which many organisations depend.

## 4. Strategic open-source dependencies

Not every library deserves executive attention. Governance should become more deliberate when an open-source component supports critical services, is reused across many products, underpins interoperability, has high replacement cost, has limited realistic alternatives or is governed in a way that creates concentration risk.

When a dependency becomes strategic, the organisation should decide deliberately how to respond. The available choices can range from **adopt**, to **influence**, **contribute**, **co-steward**, **mirror or fork**, and eventually **replace**. These are not sequential obligations. They are strategic responses whose value depends on risk, cost and capability.

The portfolio should make these dependencies visible across initiatives. A project that appears small inside one service can become strategically important when many services rely on it.

## 5. Operating model: capability before organisational label

Responsible open-source use requires capabilities for policy and enablement, inventory, legal and licence guidance, security and supply-chain governance, contribution, ecosystem engagement, procurement, reusable-asset discovery and strategic-dependency oversight.

A formal Open Source Program Office can provide these capabilities, but it is one organisational model rather than the objective itself. Functions may be centralised, federated or embedded in architecture, security, legal, procurement and engineering teams.

Measure success through responsible reuse, dependency visibility, effective contribution, ecosystem sustainability and lifecycle resilience rather than by the existence or number of OSPOs.

## 6. Lifecycle controls

Before adoption, understand the source, version, licence, dependencies, maintenance path, project governance, security process, support options, operational fit and lifecycle cost. For important dependencies, identify realistic replacement, mirror or fork choices before they are urgently needed.

During operation, keep component and dependency visibility proportionate to risk, monitor security and material governance changes, re-evaluate strategic dependencies and maintain enough internal knowledge to avoid unmanaged dependence on a single integrator or individual.

Public contribution requires clear authority, intellectual-property and security review, protection of confidential information and an agreed organisational interface with the upstream community. Contribution should be linked to a real strategic or operational rationale rather than treated as an end in itself.

## 7. Shared stewardship

Some open-source assets become important to many independent organisations. In those cases, a simple consumer-supplier model may not be enough. Shared stewardship can distribute responsibility across maintainers, users, contributors, sponsors and other ecosystem actors.

For strategically shared assets, consider multiple independent maintainers where practical, transparent decision rights, documented contribution and governance processes, sustainable release capability, succession, mechanisms for significant downstream users to surface requirements, proportionate representation and a way to resolve material disagreements.

Funding does not automatically buy control, and a large user should not automatically gain a veto. The objective is to avoid preventable single points of governance failure while preserving a viable community and clear technical responsibility.

## 8. Fork, mirror and exit readiness

The legal possibility of forking a project is not the same as the operational ability to sustain one. For strategic dependencies, assess whether rights are sufficient, source and history can be retained appropriately, builds are reproducible, critical dependencies are understood, engineering skills are available, vulnerabilities and releases can be managed, governance authority is clear and long-term maintenance is economically realistic.

A mirror or fork can be a resilience instrument when continuity value justifies the responsibility it creates. It should not be treated as a symbolic declaration of independence. Good governance also defines the conditions for returning upstream, replacing the fork or retiring it.

**Forkability contributes to resilience only when it is operationally credible.**

## 9. Procurement and lifecycle economics

Open-source procurement should focus on the service and lifecycle around the software, not on the absence of a licence fee. Evaluate functional fit, licence obligations, project governance, maintenance, security response, supply-chain evidence such as SBOM where appropriate, interoperability, portability, ecosystem concentration, support arrangements, lifecycle cost and exit.

Particular attention is needed when an open-source solution is effectively controlled through a single system integrator. The source may be open while skills, deployment knowledge, operational tooling or contractual arrangements create a practical lock-in. Make that dependency visible and assess whether it is proportionate.

Procurement criteria should remain objective, verifiable and connected to the actual outcome and risk.

## 10. Federated discovery and reusable assets

Reuse depends on discoverability, but discoverability does not always require a new central catalogue. Where multiple registries or repositories already exist, prefer shared metadata, persistent identifiers, documented APIs, machine-readable formats, provenance and automated harvesting where this is feasible.

The principle is to **federate metadata where possible rather than duplicate authoritative records**. Source systems can remain accountable for their own data while higher-level discovery services help users identify reusable assets and understand maturity, governance, quality and sustainability.

This approach also helps connect open-source software with a wider family of reusable digital assets such as APIs, shared components, documentation and, where appropriate, AI-related assets without pretending that they all have identical governance requirements.

## 11. Change governance for shared specifications and components

A technically reasonable change can have a material downstream impact when a specification or component is widely reused. Versioning, deprecation and migration therefore deserve governance in their own right.

Material changes should consider backwards compatibility, published deprecation policy, migration windows, stakeholder consultation, machine-readable schemas where applicable, documentation for supported versions and the operational burden placed on downstream adopters.

The purpose is not to freeze an ecosystem. It is to make evolution predictable enough that independent organisations can adapt without turning every upstream change into an unmanaged operational risk.

## 12. Measures

Use measures that show whether governance is working rather than simply whether activity exists. Useful examples include approved-component coverage, remediation timeliness, lifecycle-cost variance, governance-health coverage for strategic dependencies, strategic-dependency ownership, contribution follow-through, reuse where reuse is an intended outcome, continuity readiness and procurement exit coverage.

Do not use stars, downloads, commit count, catalogue size or number of OSPOs as standalone measures of strategic value.

## 13. Executive checklist

Before adoption, confirm the outcome, viable alternatives, project and source, strategic-dependency status, governance health, licence and security questions, lifecycle cost, internal owners and realistic exit choices.

Before contribution or stewardship, confirm the strategic rationale, participation mode, organisational mandate, capacity, legal and security checks, expected ecosystem value and conditions to pause or change approach.

For critical dependencies, confirm that maintainers and governance concentration are understood, continuity options are credible and the organisation knows whether it intends to remain a user, become a contributor, participate in stewardship or eventually replace the dependency.

## 14. Connections to the wider repository

Use [Technology Strategy & Execution Governance](technology-strategy-execution-governance.md) for the overall strategy-to-outcomes model, [Digital Portfolio Governance](digital-portfolio-governance.md) for investment and cross-portfolio dependency decisions, and the [Strategy & Execution Governance — Executive Playbook](strategy-execution-governance-playbook.md) for common decision rights, escalation and benefits methods.

Open-source software used in AI solutions should be assessed here, while model behaviour, AI evaluation, data and retrieval governance remain within [Enterprise AI & RAG Governance Blueprint](enterprise-ai-rag-governance-blueprint.md). Infrastructure and resource impacts belong in [Digital Sustainability and Data Centre Energy Governance](digital-sustainability-data-centre-governance.md).

## 15. Boundaries

This framework does not prescribe a licence, legal interpretation, security standard, technology stack, catalogue, procurement model, contribution model or organisational design. It is independent professional guidance and should be adapted with qualified specialist input.
