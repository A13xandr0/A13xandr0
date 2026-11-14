---
version: 1.2.0
status: reference
license: CC-BY-4.0
last_reviewed: 2026-11-14
description: "Answers to common questions on technology strategy governance, decision rights, prioritisation, benefits, enterprise AI and RAG, open source and digital infrastructure."
keywords: "technology governance FAQ, decision rights, prioritisation, RAG governance, open source dependency, benefits realisation, data centre capacity"
datePublished: "2026-11-14"
dateModified: "2026-11-14"
---

# Frequently Asked Questions — Technology Strategy, Execution & Governance

**Short, self-contained answers to the questions these frameworks are most often used to address. Each answer links to the framework or template that develops it.** Terms are defined in the [glossary](glossary.md).

## Strategy, decisions and prioritisation

### What is technology strategy and execution governance?

It is the management discipline that connects strategic outcomes to the technology choices, investments, delivery and benefits that are meant to achieve them. The operating chain is: strategic outcomes, required capabilities, technology choices, initiatives and investments, governed delivery, adoption and measured outcomes. Each transition should be an explicit decision rather than an automatic progression. See [Technology Strategy & Execution Governance](frameworks/technology-strategy-execution-governance.md).

### How do the framework, the playbook and portfolio governance differ?

The core framework explains how strategy becomes governed change. The [Executive Playbook](frameworks/strategy-execution-governance-playbook.md) is the operating method for individual initiatives: decision rights, prioritisation, mandates, forums, tolerances, escalation and benefits. [Digital Portfolio Governance](frameworks/digital-portfolio-governance.md) decides how limited funding and capacity are distributed across many initiatives and when to rebalance them.

### Who decides whether an initiative starts?

Decision classes should have named authority. In this model the **Executive sponsor** owns strategic direction and risk appetite and mandates initiatives, the **Portfolio authority** allocates investment within delegated limits, and the **Initiative lead** manages execution within tolerance. When authority is unclear, the decision should be reframed with options, evidence, a recommendation, the latest safe decision date and the person who has authority to decide. See [decision rights](frameworks/strategy-execution-governance-playbook.md) and the [RACI matrix](templates/raci-matrix.md).

### How should mandatory obligations be treated when prioritising?

Separately from discretionary options. Legal, regulatory, safety, security, resilience, contractual or time-critical obligations still consume scarce capacity, so their required capacity is reserved or explicitly planned first. If mandatory demand exceeds available capacity, the gap is made visible and escalated for an explicit decision on scope, timing, resources or risk. Obligations should not be disguised as discretionary initiatives with artificially high scores. See the [weighted scoring matrix](templates/weighted-scoring-matrix.md).

### Should a weighted score decide which initiative is funded?

No. A score structures the discussion but does not decide whether an initiative is mandatory, affordable, strategically coherent or deliverable with available capacity. The matrix uses six criteria: outcome contribution, feasibility and readiness, time to useful evidence, lifecycle cost, risk and dependency profile, and reversibility. Evidence and confidence should be recorded for every rating, and the weights and ratings in the worked example are illustrative assumptions, not observed data.

### What should happen when expected value is high but confidence is low?

That is usually a case for discovery or a bounded pilot rather than immediate scale investment. Sequencing commitments so that uncertainty is reduced before irreversible cost increases is a recurring principle across the repository. See the [fictional decision record](templates/decision-record-example.md) for an illustration.

### What should a decision record contain?

Context and intended outcome; decision owner and required-by date; realistic options, including deferring or doing nothing; evidence, assumptions and uncertainty; recommendation and rationale; cost, capacity, risk and dependency implications; dissenting or unresolved views; and the decision, conditions, action owners and review trigger. Use the blank [decision record template](templates/decision-record.md).

## Delivery, escalation and benefits

### When should an initiative be escalated?

Escalation should be triggered by forecast breach, not only after failure. Tolerances are set when the initiative is mandated. Typical triggers include a key milestone or cost forecast outside tolerance, a critical dependency without a credible recovery path, a material change to outcome or risk, unavailable operational ownership, or benefit assumptions that are no longer credible. See [escalation and status](templates/escalation-and-status.md).

### How many governance forums does an organisation need?

Only those that can make a decision or resolve an impediment. The model describes five: Executive strategy review, Portfolio review, Initiative review, Design / assurance review and Benefits review. Each needs a charter covering remit, delegated limits, membership, inputs, outputs and escalation. Forums that add no clear decision value should be redesigned or retired. See [governance forums](templates/governance-forums.md).

### How do you show that a benefit has been realised?

Delivery output and realised outcome are not the same, so both are measured. Each material benefit needs a baseline, target, unit, date, measurement source, accountable owner, dependencies, disbenefits and attribution assumptions, and delivered, adopted and actually improved are kept distinct. A benefit is not closed merely because technology has gone live. See the [benefit profile](templates/benefit-profile.md) and the [KPI dictionary](templates/kpi-dictionary.md).

### What five questions should leadership answer before approving a significant initiative?

What outcome are we funding? Why is this option preferable to realistic alternatives? Which dependencies and lifecycle obligations are we accepting? Who is accountable for delivery, operation and benefits? What evidence will cause us to continue, change course or stop?

### Why should portfolios be rebalanced, and what is wrong with sunk cost?

Rebalancing is normal portfolio behaviour: if evidence weakens, a dependency becomes fragile, cost rises materially, a better option emerges or expected value is no longer credible, leadership should be prepared to reduce scope, pause, replace or stop. Sunk cost should not become a governance principle. See [Digital Portfolio Governance](frameworks/digital-portfolio-governance.md).

## Enterprise AI and RAG

### When is retrieval-augmented generation appropriate?

When there is a clear user and task, authoritative and accessible information, and measurable value. RAG should be compared with simpler alternatives such as better information architecture, conventional search, workflow redesign or targeted automation. Where errors can affect rights, safety or material financial decisions, stronger controls and specialist assessment are needed and autonomous generation may be inappropriate. See the [Enterprise AI & RAG Governance Blueprint](frameworks/enterprise-ai-rag-governance-blueprint.md).

### What must be governed before choosing a model?

The information. The quality of an AI assistant is bounded by its sources, so each source collection needs an owner, an authorised basis for use, classification and retention rules, freshness expectations, provenance, permission mapping and a process for resolving outdated or conflicting material. Technical accessibility is not the same as authority to index, process or disclose content.

### Does RAG make information more accurate or secure?

No. RAG does not make weak information authoritative, remove access-control requirements or guarantee accurate answers. Permissions must be enforced during retrieval, and retrieved documents should be treated as untrusted input.

### How should a RAG system be evaluated?

Retrieval and generation are evaluated separately and end-to-end, using a representative set that covers retrieval relevance, context coverage, faithfulness, citation quality, completeness, abstention, permission boundaries, robustness, latency and cost per accepted useful outcome. The set should include normal, ambiguous, unanswerable, conflicting and adversarial cases, and the corpus, configuration, model and settings should be recorded so changes can be compared. See the [AI/RAG use-case assessment](templates/ai-rag-use-case-assessment.md).

### What are the decision gates for an enterprise AI or RAG initiative?

Five questions: Is AI/RAG suitable for the task? Is the information ready and appropriately governed? Is the design acceptable from architecture, security, privacy and dependency perspectives? Does pilot evidence demonstrate acceptable value and quality? Is operational ownership funded and realistic? Each gate should produce a decision, conditions, an accountable owner, unresolved uncertainties and a review trigger.

### Is there a worked example of an AI/RAG decision?

Yes. The [fictional AI/RAG Use-Case Assessment example](templates/ai-rag-use-case-assessment-example.md) applies the five decision gates to a bounded knowledge-assistance use case, compares RAG with simpler alternatives, governs the sources first, evaluates retrieval and generation separately and ends with a conditional decision. All figures and thresholds are illustrative.

## Open source

### What does it mean for an open-source component to be a strategic dependency?

It means the component supports critical services, is reused across many products, underpins interoperability, has high replacement cost, has limited realistic alternatives or is governed in a way that creates concentration risk. For such dependencies the organisation should decide deliberately between adopting, influencing, contributing, co-stewarding, mirroring or forking, and replacing. These are strategic responses, not sequential obligations. See [Open Source Strategy & Governance](frameworks/open-source-strategy-governance.md) and the [strategic dependency register](templates/strategic-dependency-register.md).

### What are the levels of open-source participation?

Use, Enable, Support, Contribute, Collaborate and Steward. Participation is a deliberate choice that depends on the strategic importance of the dependency and the organisation's capacity.

### Is the legal right to fork the same as being able to exit?

No. The legal possibility of forking is not the same as the operational ability to sustain a fork. Rights, retained source and history, reproducible builds, understood dependencies, engineering skills and vulnerability response all need to be assessed, and a fork should not be treated as a symbolic declaration of independence.

### Is there a worked example of an open-source assessment?

Yes. The [fictional Open-Source Assessment example](templates/open-source-assessment-example.md) shows an open-source product becoming a strategic dependency: governance-health findings, supply-chain checks, a participation-level decision and a continuity exercise whose partial result shows that the right to fork is not the same as fork readiness.

### Which measures should not be used on their own to judge open-source value?

Stars, downloads, commit count, catalogue size and the number of open source programme offices. Use measures that show whether governance is working, such as approved-component coverage, remediation timeliness, governance-health coverage for strategic dependencies and strategic-dependency ownership. See the [KPI reference](templates/kpi-reference.md).

## Digital infrastructure and sustainability

### How should new data-centre or cloud capacity be decided?

Start with service demand. Before approving new capacity, define the service need, current and forecast workload, forecast quality, latency and availability requirements, and the evidence that new capacity is necessary. Consider optimisation, consolidation, data reduction, reuse, shared capacity, cloud or colocation, phased expansion and deferment first. Reserved capacity, forecast demand and actual utilisation must never be treated as the same thing. See [Digital Sustainability and Data Centre Energy Governance](frameworks/digital-sustainability-data-centre-governance.md) and the [infrastructure capacity decision](templates/infrastructure-capacity-decision.md) template.

### Why report absolute consumption as well as intensity?

A falling ratio can coexist with rapidly rising total demand. Absolute figures should be reported alongside intensity measures, measurements distinguished from estimates, allocation methods disclosed and like compared with like.

## Adopting the frameworks

### Where should an organisation start?

With one real decision, initiative or recurring management problem, not with a governance system. There are three entry points: a strategic decision (Path A), an initiative already in progress that lacks clear outcomes, owners or tolerances (Path B), or a technology domain such as AI/RAG, open source or infrastructure (Path C). See [Adopting the Frameworks](guides/adopting-the-frameworks.md).

### Does an organisation need to implement every role, forum and template?

No. Adoption means establishing enough capability to connect decisions to outcomes, compare alternatives, make ownership explicit and measure benefits. A useful first adoption may need only an initiative canvas, an options assessment, a decision record, a few explicit measures, named decision and benefit owners and a review trigger. Governance should become stronger as consequences, dependencies and irreversibility increase.

### What are the phases of a governed adoption?

Six phases: establish the mandate, baseline and readiness, select a bounded application, run a governed pilot, operationalise, and then scale, reuse or stop. Indicative durations range from one or two weeks for the mandate to three to six months for operationalisation, and should be scaled to the materiality of the decision. A successful pilot should not automatically become a roll-out.

### How can an organisation tell whether it is ready to scale?

By assessing seven dimensions separately instead of using a single score: strategy and outcomes, decision rights and accountability, information and evidence, technology and architecture, risk, security and compliance, skills and operating capability, and measurement, learning and reuse. The lowest level on a critical dimension should limit how far to scale: an advanced architecture does not make an organisation ready for a RAG service if its information readiness is low.

### What are the most common adoption mistakes?

Starting from the technology, copying the whole governance model, confusing a pilot with production, treating technical accessibility as authorisation, adopting AI/RAG without comparing alternatives, using open source only to cut licence cost, scaling without operational ownership, and not defining when to stop. The guide pairs each mistake with a correction.

## Using this repository

### Can the frameworks and templates be reused and adapted?

Yes. Unless otherwise stated, the original written materials and templates are licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). They may be shared and adapted for any purpose, including commercial use, provided appropriate credit is given, a link to the licence is supplied and changes are indicated. See the [templates](templates/README.md).

### Are the worked examples real?

No. Worked examples, ratings, thresholds and scenarios identified as illustrative or fictional are not evidence of actual implementations, decisions, measured performance or results. Scores, thresholds and targets must be validated in the relevant organisational context.

### Is this legal, financial, security or regulatory advice?

No. The material is independent professional guidance and should be adapted with qualified specialist input. It does not prescribe a delivery methodology, organisational structure, technology stack, procurement model or regulatory interpretation.

### How should the repository be cited?

Cite the exact version used. Version 1.2.0 is archived at [10.5281/zenodo.24230274](https://doi.org/10.5281/zenodo.24230274). The previous version 1.1.0 is archived at [10.5281/zenodo.24222330](https://doi.org/10.5281/zenodo.24222330). The [concept DOI](https://doi.org/10.5281/zenodo.24222329) refers to the project across versions. A ready-made BibTeX entry is in the [citation section of the README](https://github.com/A13xandr0/A13xandr0#citation). The author is Alexandro Sances; see [About the author](about-the-author.md).
