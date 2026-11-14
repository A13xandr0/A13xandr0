---
version: 1.1.0
status: template
license: CC-BY-4.0
last_reviewed: 2026-11-14
---

# AI/RAG Use-Case Assessment — Template

**Version:** 1.1.0 | **Licence:** CC BY 4.0

Tools for deciding when enterprise AI or retrieval-augmented generation is the right answer, and for governing the information, technology and lifecycle dependencies it creates. The governance problem begins before model selection.

Related: [Enterprise AI & RAG Governance Blueprint](../frameworks/enterprise-ai-rag-governance-blueprint.md). Evaluation measures are in the [KPI reference](kpi-reference.md), Section 3.

## 1. Use-case assessment

| Assessment area | Questions | Entry |
|---|---|---|
| User and task | Who needs help, with which task and in what context? | |
| Current friction | What is slow, costly, inconsistent or difficult today? | |
| Knowledge sources | Which authoritative sources hold the required information? | |
| Consequence of error | What happens if an answer is incomplete or wrong? | |
| Human oversight | Which decisions need review or must stay with a person? | |
| Value | What measurable improvement is expected? | |
| Feasibility | Are content, permissions, metadata and ownership adequate? | |
| Alternatives compared | Better information architecture, conventional search, workflow redesign, targeted automation | |

Where errors can affect rights, safety, material financial decisions or other high-impact outcomes, stronger controls and specialist assessment are needed, and autonomous generation may be inappropriate.

## 2. Source collection register

A document being technically accessible does not mean it is appropriate to index or disclose through an AI assistant.

| Field | Entry |
|---|---|
| Source collection | |
| Named owner | |
| Authorised basis for use | |
| Classification, retention and deletion rules | |
| Version and freshness expectations | |
| Provenance and metadata quality | |
| Permission mapping and revocation behaviour | |
| Handling of outdated, duplicated or conflicting content | |

## 3. Strategic dependencies

For each material dependency (model provider, open-weight or open-source component, embedding service, vector or lexical index, proprietary API, data platform, cloud infrastructure, scarce expertise), ask:

| Question | Answer |
|---|---|
| What can be substituted? | |
| What data or configuration can be moved? | |
| Which change would require re-evaluation? | |
| What would exit realistically involve? | |
| What are the data-handling, retention and service-change terms? | |

Open-source software, open weights, open model architectures and accessible training information are not interchangeable and do not carry identical rights, risks or governance consequences. Assess software and ecosystem dependencies with the [Open-source assessment](open-source-assessment.md) and keep AI-specific evaluation and responsible-use controls here. Open models do not remove internal ownership of security, evaluation and lifecycle maintenance. Register material dependencies in the [Strategic dependency register](strategic-dependency-register.md).

## 4. Threat-modelling prompts

Cover the complete workflow, not only the model.

- [ ] Identity, authentication and role- or attribute-based access
- [ ] Tenant and data segregation
- [ ] Personal and sensitive data
- [ ] Prompt injection in user input and in retrieved documents
- [ ] Data exfiltration and unauthorised disclosure
- [ ] Secrets and connector security
- [ ] Provider data handling and contract terms
- [ ] Logging minimisation, retention and auditability
- [ ] Human review, escalation and incident response

Enforce permissions at retrieval time; do not rely on prompts to protect restricted content. Review with the relevant security, privacy and legal specialists.

## 5. Evaluation plan

Test retrieval, generation and the end-to-end flow separately.

| Evaluation area | Example test | Evidence | Result |
|---|---|---|---|
| Retrieval relevance | Are the right passages retrieved? | | |
| Context coverage | Does retrieved context contain the needed evidence? | | |
| Faithfulness | Is the answer supported by the retrieved evidence? | | |
| Citation quality | Do citations lead to the supporting passage? | | |
| Answer completeness | Are the material parts of the question addressed? | | |
| Abstention | Does the system decline when evidence is insufficient? | | |
| Access control | Can users retrieve only what they are authorised to see? | | |
| Robustness | How does it handle ambiguity, conflicting sources, malicious content? | | |
| Performance | Are latency and availability acceptable for the task? | | |
| Cost | What is the cost per useful, accepted outcome? | | |

Evaluation set: include normal, ambiguous, unanswerable, conflicting and adversarial cases, plus permission-boundary tests. Record the corpus, configuration, model, retrieval settings and evaluation version. Evaluation is not a one-time gate: repeat it when models, prompts, indexes, sources, permissions or orchestration change.

## 6. Decision gates

| Gate | Question | Decision, conditions, owner, unresolved uncertainties, review trigger |
|---|---|---|
| 1. Suitability | Is AI/RAG suitable for the task? | |
| 2. Information readiness | Is the information ready and appropriately governed? | |
| 3. Design assurance | Is the design acceptable on architecture, security, privacy and dependency grounds? | |
| 4. Pilot acceptance | Does pilot evidence show acceptable value and quality? | |
| 5. Operational readiness | Is operational ownership funded and realistic? | |

## 7. Lifecycle checkpoints

- **Discover:** user problem, value, risk class, authoritative sources and baseline defined.
- **Design:** architecture, permissions, data flows, evaluation and human oversight agreed.
- **Pilot:** bounded content and representative users; quality and failure modes tested.
- **Deploy:** proportionate assurance done; support, monitoring, change control and rollback in place; limits communicated to users.
- **Operate:** quality, adoption, cost, incidents, source freshness and dependency changes monitored.
- **Retire:** sources, models, indexes, integrations or the whole capability removed when no longer authorised, useful, supportable or proportionate.

## 8. Sustainability and cost

Model size, retrieval design, data movement and workload patterns affect cost, capacity and resource use. Prefer the least complex approach that meets the task, and measure cost or resource use per useful accepted outcome where feasible. For material compute or infrastructure impacts, use the [Infrastructure capacity decision](infrastructure-capacity-decision.md).

*Template for adaptation. Independent professional guidance; not legal advice, a security certification or a vendor endorsement.*
