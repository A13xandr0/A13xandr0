---
version: 1.1.0
status: template
license: CC-BY-4.0
last_reviewed: 2026-11-14
---

# Open-Source Assessment — Template

**Version:** 1.1.0 | **Licence:** CC BY 4.0

Tools for deciding how to use, support, contribute to or exit an open-source dependency. A score structures discussion; it never replaces expert review, delegated decisions or a critical legal, security or operational concern.

Related: [Open Source Strategy & Governance](../frameworks/open-source-strategy-governance.md).

## 1. Option scorecard

Compare open-source and non-open-source options (existing capability, process change, commercial, managed service, build, defer) against the same outcome and lifecycle assumptions. Rate each dimension 1 (weak) to 5 (strong), and record evidence and confidence.

| Dimension | Weight | Consider |
|---|---:|---|
| Strategic and functional fit | 20% | Does the capability support an agreed outcome and user need? |
| Ecosystem sustainability and governance health | 15% | Project activity, governance clarity, maintainer diversity, release practices, succession signals |
| Security and operational readiness | 15% | Vulnerability handling, update path, dependency transparency, support, service fit |
| Legal and licence fit | 15% | Licence obligations, intended use and distribution, notices; review by qualified counsel |
| Interoperability and exit options | 10% | Standards, portability, data access, practical migration path |
| Total lifecycle economics | 15% | Adoption, integration, assurance, support, upgrades, training, exit costs |
| Internal capability and stewardship | 10% | Skills, accountable owners, contribution capacity, ability to sustain the choice |

**Weighted total = sum of (rating × weight)**, on a 1–5 scale, as in the [weighted scoring matrix](weighted-scoring-matrix.md). Do not average away a critical concern. A high score with low confidence should trigger due diligence or a bounded evaluation. Weights are a starting point, not a standard.

| Option | Fit (20) | Ecosystem (15) | Security (15) | Legal (15) | Exit (10) | Economics (15) | Capability (10) | Weighted | Confidence |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| | | | | | | | | | |

## 2. Decision outcomes

| Evidence and fit | Suggested outcome |
|---|---|
| Strong fit, adequate evidence, funded operating ownership | Adopt with standard controls and a named lifecycle owner |
| Potentially strong fit, material uncertainty | Time-box due diligence or a bounded evaluation with exit criteria |
| Valuable strategic dependency, under-supported upstream project | Assess proportionate support, contribution, mirror or fork, or an alternative; none is automatically right |
| Weak fit, unacceptable obligation or no credible maintenance path | Reject, replace, isolate or plan exit with accountable authority |
| Internal use is valuable but public contribution is not authorised or practical | Use within policy and document why contribution is not selected |

## 3. Governance-health checklist (for material dependencies)

Technical quality is not governance health. A technically excellent project can still concentrate control in a few people.

- [ ] Maintainer concentration is understood (how many people can release or decide).
- [ ] Organisational diversity of maintainers and sponsors is understood.
- [ ] Repository and release privileges are known and not held by a single person or organisation.
- [ ] Decision-making is transparent and documented.
- [ ] The project is open to new contributors, with a clear path to maintainership.
- [ ] Change, deprecation and migration practices are published.
- [ ] Succession and release continuity are credible.
- [ ] A dispute-resolution route exists.

Popularity and commit activity are useful signals but do not prove sustainable governance.

## 4. Choosing a participation mode

Participation is a deliberate choice, not a ladder every organisation should climb.

| Mode | Organisational activity | Governance question |
|---|---|---|
| Use | Consume a component with appropriate ownership | Is it suitable, authorised, maintained and supportable? |
| Enable | Make approved capabilities discoverable through policy, catalogues or platforms | Are guardrails and support paths clear to teams? |
| Support | Fund, sponsor, test, document or otherwise support a project | Is support aligned to a strategic dependency and governed transparently? |
| Contribute | Return code, documentation, testing or design work upstream | Are rights, review, security and time allocation clear? |
| Collaborate | Take part in roadmaps, specifications or shared initiatives | Is there a mandate, a representative and a decision process? |
| Steward | Accept sustained responsibility for governance, releases or maintenance | Are long-term accountability, resources and succession explicit? |

## 5. Contribution plan

| Field | Entry |
|---|---|
| Project and capability dependency | |
| Participation mode and expected organisational value | |
| Contribution scope (testing, documentation, issue triage, code, funding, governance) | |
| Organisational sponsor and authorised representative | |
| Staff time, funding, review capacity and continuity plan | |
| Security, legal, IP and communications checks | |
| Measures of upstream engagement and internal value | |
| Conditions to pause, change mode or exit | |

Funding does not automatically buy control, a submitted change is not guaranteed to be accepted, and a large user should not automatically gain a veto.

### Before public contribution

- [ ] Contributor authority, intellectual-property rights and organisational policy are confirmed.
- [ ] The contribution channel and review process are selected.
- [ ] Secrets, personal data, confidential material, security issues and third-party rights are checked.
- [ ] Engineering, security, legal and communications reviews are complete.
- [ ] Who may speak for the organisation, and how maintenance will continue, are agreed.
- [ ] Authorised accounts are used.

## 6. Fork, mirror and exit readiness

The legal possibility of forking is not the same as the operational ability to sustain a fork. Forkability contributes to resilience only when it is operationally credible.

- [ ] Rights under the licence are sufficient for the intended continuity approach.
- [ ] Source and history can be retained appropriately.
- [ ] Builds are reproducible.
- [ ] Critical dependencies are understood.
- [ ] Engineering skills are available.
- [ ] Vulnerabilities and releases can be managed.
- [ ] Governance authority for the mirror or fork is clear.
- [ ] Long-term maintenance is economically realistic.
- [ ] Conditions for returning upstream, replacing or retiring the fork are defined.

## 7. Procurement checks

Focus on the service and lifecycle around the software, not on the absence of a licence fee.

- [ ] Functional fit, licence obligations and project governance are assessed.
- [ ] Maintenance, security response and supply-chain evidence (for example an SBOM, where appropriate) are available. Common formats include SPDX and CycloneDX.
- [ ] Interoperability, portability and ecosystem concentration are understood.
- [ ] Support arrangements, lifecycle cost and exit are defined.
- [ ] Effective control by a single system integrator is made visible: open source can still lock you in through skills, deployment knowledge, tooling or contracts.

## 8. Fictional decision record

> Illustrative only. "the fictional transit authority" and its findings are invented; no conclusion about a real project is implied.

| Field | Entry |
|---|---|
| Decision | Approve a bounded hardening and support assessment; do not commit to long-term support or public contribution yet |
| Rationale | Strong functional fit and an active project, but gaps in internal ownership and vulnerability response |
| Conditions | Named service and technical owners; advisory intake and patch process in place; licence review by qualified counsel |
| Revisit when | Assessment results are available, a critical advisory affects the service, or project health changes materially |
| Evidence status | All findings remain assumptions until measured |

*Template for adaptation. Independent professional guidance, not legal advice or a security certification.*
