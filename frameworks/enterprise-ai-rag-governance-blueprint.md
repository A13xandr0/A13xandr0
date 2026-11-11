---
version: 1.0.0
status: reference
license: CC-BY-4.0
last_reviewed: 2026-11-12
---

# Enterprise AI & RAG — Strategic and Governance Blueprint

**An executive blueprint for deciding when enterprise AI and retrieval-augmented generation are useful, and for governing the information, technology and lifecycle dependencies they create.**

## 1. Purpose

RAG can make organisational knowledge easier to discover and use by combining retrieval with a generative model. It does not make weak information authoritative, remove access-control requirements or guarantee accurate answers. The governance problem therefore begins before model selection.

This blueprint applies the repository's common sequence to AI: define the user outcome, assess realistic options, understand the information and technology dependencies, establish accountable ownership, test with evidence and govern the solution over its lifecycle.

## 2. Start with the task, not the model

For each candidate use case, describe the user, task, current friction, authoritative sources, consequence of error, required human oversight, measurable value and information readiness. Compare RAG with simpler alternatives such as better information architecture, conventional search, workflow redesign or targeted automation.

Use cases with clear users, authoritative accessible information and measurable value are easier to govern. Where errors can affect rights, safety, material financial decisions or other high-impact outcomes, stronger controls and specialist assessment are needed and autonomous generation may be inappropriate.

## 3. Information before generation

The quality of an AI assistant is bounded by its sources. Each source collection should have an owner, an authorised basis for use, classification and retention rules, version and freshness expectations, provenance, permission mapping and a process for resolving outdated or conflicting material.

Technical accessibility is not equivalent to authority to index, process or disclose. Content governance should therefore be treated as part of the service design, not as a preparatory data-cleaning exercise.

## 4. Architecture and strategic dependencies

A typical RAG service includes source systems, ingestion, content preparation, indexes, retrieval, model orchestration, user experience and governance or observability. Preserve source identifiers and versions, enforce permissions during retrieval, treat retrieved documents as untrusted input, provide an abstention path and retain traceability across content, retrieval and model versions.

The architecture should also expose strategic dependencies. A solution may depend on model providers, open-weight or open-source components, embedding services, vector or lexical indexes, proprietary APIs, data platforms, cloud infrastructure and scarce expertise. For each material dependency, ask what can be substituted, what data or configuration can be moved, which change would require re-evaluation and what exit would realistically involve.

Open source and open models require careful distinction. Open-source software, open weights, open model architectures and accessible training information are not interchangeable concepts and do not carry identical rights, risks or governance consequences. Apply [Open Source Strategy & Governance](open-source-strategy-governance.md) to software and ecosystem dependencies while retaining AI-specific evaluation and responsible-use controls here.

## 5. Security, privacy and responsible use

Threat modelling should cover the complete workflow. Consider identity, access control, tenant and data segregation, personal or sensitive data, prompt injection, malicious retrieved content, data exfiltration, secrets, connector security, provider data handling, logging, human review and incident response.

Where third-party models or services are used, contract terms and operational design should make material data handling, retention, service changes and exit constraints visible. Where open models are used, internal ownership of security, evaluation and lifecycle maintenance does not disappear.

## 6. Evaluation

Evaluate retrieval and generation separately and end-to-end. A representative evaluation set should test retrieval relevance, context coverage, faithfulness, citation quality, completeness, abstention, permission boundaries, robustness, latency and cost per accepted useful outcome.

Include normal, ambiguous, unanswerable, conflicting and adversarial cases. Record the corpus, configuration, model, retrieval settings and evaluation version so that changes can be compared rather than judged impressionistically.

Evaluation is not a one-time acceptance gate. Re-evaluate when models, prompts, indexes, source collections, permissions or material orchestration logic change.

## 7. Operating model

The executive sponsor owns purpose and investment; the product or service owner owns user value and prioritisation; knowledge owners remain accountable for source authority and lifecycle; architecture and AI/data specialists own technical design; security and privacy specialists provide assurance; delivery integrates change; and operations owns continuity, monitoring and incidents.

One person may hold several roles, but accountability for content, access, model behaviour and service operation should remain explicit.

## 8. Lifecycle governance

During discovery, define the user problem, value, risk, authoritative sources and baseline. During design, agree architecture, permissions, data flows, evaluation and human oversight. During a pilot, use bounded content and representative users to test quality and failure modes. Before deployment, complete proportionate assurance and establish support, monitoring and rollback. During operation, monitor quality, adoption, cost, incidents, source freshness and dependency changes.

Retirement is also part of lifecycle governance. Sources, models, indexes, integrations and whole capabilities should be removed when they are no longer authorised, useful, supportable or proportionate to the outcome.

## 9. Decision gates

A useful sequence asks five questions. Is AI/RAG suitable for the task? Is the information ready and appropriately governed? Is the design acceptable from architecture, security, privacy and dependency perspectives? Does pilot evidence demonstrate acceptable value and quality? Is operational ownership funded and realistic?

Each gate should result in a decision, conditions, accountable owner, unresolved uncertainties and a review trigger.

## 10. Sustainability and portfolio fit

AI is also a portfolio and infrastructure choice. Model size, retrieval design, data movement, workload patterns and provider architecture influence cost, capacity and resource use. Prefer the least complex approach that meets the task and measure cost or resource use against useful accepted outcomes where feasible.

Use [Digital Portfolio Governance](digital-portfolio-governance.md) for investment sequencing and [Digital Sustainability and Data Centre Energy Governance](digital-sustainability-data-centre-governance.md) where compute, cloud or infrastructure capacity and environmental impacts are material.

## 11. Executive checklist

Before deployment, confirm that the user, task and intended outcome are clear; simpler options were considered; authoritative sources and permissions are known; access control is enforced before content reaches the model; provenance and citations can be tested; injection and disclosure risks are assessed; evaluation includes adverse cases; human oversight is explicit; strategic dependencies and exit implications are understood; and operations, monitoring and benefits review are funded.

## 12. Boundaries

This is independent professional reference material. It is a strategic and governance blueprint, not an implementation specification, legal opinion, security certification or endorsement of a vendor, model or technology stack.
