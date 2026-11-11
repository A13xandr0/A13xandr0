# Digital Sustainability and Data Centre Energy Governance

**An executive framework for making energy, water, environmental and resilience considerations part of digital infrastructure decisions.**

> **How to use this framework.** This is independent guidance, not a policy or regulatory interpretation. Recommendations should be tailored and validated by energy, engineering, environmental, finance, security and operational specialists. The fictional example in Section 8 is illustrative only; no implementation or results are claimed.

## 1. Executive purpose

Digital infrastructure enables cloud services, data platforms, artificial intelligence and public and commercial services. Its sustainability depends on the choices made across infrastructure, software, data, procurement, operations and service demand.

A data centre decision should therefore consider more than facility efficiency. It should consider:

- Energy demand, availability, cost, carbon intensity and grid impacts.
- Water use and local water stress.
- Site conditions, land use, existing infrastructure and community impacts.
- Service criticality, resilience, security and continuity.
- Equipment manufacturing, lifetime, reuse, repair and end-of-life.
- The efficiency of software, data flows and workload scheduling.
- The usefulness and quality of the digital service delivered.

Energy efficiency is a means, not the outcome by itself. The decision should seek reliable services and useful outcomes with measured resource use, transparent trade-offs and funded ownership.

## 2. Decision model

### 2.1 Frame the service need

Before considering a new facility, capacity expansion or cloud move, define:

- Which service or user need requires capacity?
- What are the current and forecast workloads, and how reliable is that forecast?
- Can process simplification, data reduction, reuse, workload optimisation or existing capacity meet the need?
- What latency, availability, security, sovereignty and recovery requirements apply?
- What environmental and energy constraints matter at the candidate locations?
- What will be measured before and after the change?

Demand growth should be justified by service need and credible evidence. Capacity requests, reserved capacity and actual utilisation should be distinguished.

### 2.2 Compare options on a common basis

Consider, where suitable: optimise existing facilities; consolidate or retire underused capacity; reuse a brownfield site; use colocation or cloud services; build or expand a facility; distribute workloads; defer; or redesign the service.

| Decision dimension | Questions |
|---|---|
| Service value and demand | Is the capacity linked to a defined service outcome and evidenced demand? |
| Energy and grid | What is the expected load profile, connection readiness, energy source, price exposure and flexibility? |
| Climate and site | What are ambient conditions, land-use effects, local energy constraints and relevant community impacts? |
| Water | What are direct and indirect water needs, local conditions, seasonal constraints and water-reduction options? |
| Carbon and lifecycle | What are operational emissions and material/equipment impacts over the relevant lifecycle? |
| Resilience and security | Does the option meet continuity, redundancy, recovery and security needs? |
| Economics | What are total lifecycle costs, including energy, water, cooling, equipment, maintenance and exit? |
| Delivery maturity | Are planning, connection, equipment, skills and operating plans credible and appropriately sequenced? |
| Reversibility | Can the organisation scale, migrate or retire the capability if assumptions change? |

Do not collapse non-negotiable service, safety, environmental or legal constraints into a single average score. Record evidence, assumptions, confidence and the accountable decision-maker.

### 2.3 Sequence decisions through gates

1. **Need and alternatives:** validate demand and service outcome; assess optimisation and reuse first.
2. **Feasibility:** examine site, grid, energy, water, resilience and delivery maturity.
3. **Investment:** compare lifecycle cost and resource scenarios; identify trade-offs and owners.
4. **Design assurance:** confirm facility, workload, security, environmental and operational requirements.
5. **Operational readiness:** confirm monitoring, energy procurement, water plans, incident response and reporting.
6. **Benefits review:** compare actual service and environmental outcomes with the baseline; adapt or retire as warranted.

A decision record should include the outcome, options, assumptions, evidence, environmental boundary, capacity forecast, decision owner, conditions, review trigger and exit path.

## 3. Data centre energy and environmental controls

### Energy and grid
- Measure actual demand and load profile; separate IT load from facility overhead where data permits.
- Forecast capacity in phases and connect requests to credible project and service milestones.
- Assess energy availability, emissions profile, price exposure and procurement options.
- Consider renewable procurement arrangements only with transparent scope, timing and accounting.
- Assess whether workload shifting or demand response is technically and operationally appropriate; preserve service commitments and critical workloads.
- Review cooling and power-system design with qualified specialists and local climate conditions.

### Water and heat
- Track direct water use and identify the boundary of any reported metric.
- Assess water availability and local conditions before selecting cooling approaches.
- Identify opportunities to recover and use waste heat where there is a viable nearby demand and the energy, infrastructure and commercial case supports it.
- Do not treat heat reuse or water reduction as established benefits until measured.

### Site and infrastructure
- Compare existing, brownfield and new-build options; account for land, grid, connectivity, resilience, water and community context.
- Plan for phased growth and credible delivery milestones.
- Coordinate infrastructure dependencies early, including electricity, network connectivity, cooling, backup power and operations.
- Evaluate resilience and security without assuming that sustainability and continuity are opposing goals; make any trade-off explicit.

## 4. Software, data and open source

Facility performance is only one part of digital sustainability. Workload demand, data retention, duplication, software design, model selection, service quality and usage patterns also affect required capacity.

Guidance for technology and service leaders:

- Simplify and optimise processes before automating them.
- Reduce unnecessary data collection, retention, movement and duplication.
- Reuse existing platforms and open-source or shared components where they fit the need and can be responsibly operated.
- Compare software options on useful service output, performance, energy demand, lifecycle cost, security and maintainability.
- Consider efficient model and workload choices, including whether a smaller or less compute-intensive approach meets the task.
- Measure energy or resource use per meaningful service outcome where measurement is feasible.

Open source can support reuse, interoperability and shared maintenance, but it does not guarantee lower energy consumption. Include operating and lifecycle ownership in the decision; see [Open Source Strategy & Governance](open-source-strategy-governance.md).

## 5. Governance and accountability

| Role | Accountability |
|---|---|
| Executive sponsor | Outcome, investment mandate, material trade-offs and accepted risk |
| Digital / technology leader | Service and architecture choices, demand assumptions and technology roadmap |
| Data centre or infrastructure owner | Facility performance, capacity, energy and water data, operating controls |
| Energy specialist | Load, supply, grid and procurement analysis |
| Sustainability / environmental specialist | Impact boundary, methods, local conditions and environmental evidence |
| Service or product owner | User outcome, service demand, adoption and quality measures |
| Finance / procurement | Lifecycle economics and sustainability requirements in sourcing |
| Security / resilience specialist | Continuity, recovery and security assurance |
| Delivery lead | Integrated milestones, dependencies, risks, forecast and escalation |

One person may hold more than one role in a smaller organisation, but assign one accountable owner for each decision and measure. Specialist functions provide evidence and challenge; the designated decision-maker remains accountable for the investment decision.

### Review forums

- **Portfolio review:** prioritise demand, capacity, investment and cross-service dependencies.
- **Infrastructure design review:** assess site, energy, water, resilience, security and operating design.
- **Operational review:** monitor actual use, service performance, incidents and exceptions.
- **Benefits and sustainability review:** compare baselines with service and environmental outcomes and agree corrective action.

Use risk-proportionate governance. Record decision authority, thresholds, evidence required and review dates.

## 6. KPI dictionary

Define a consistent boundary, measurement period, data source, owner and baseline for each indicator. Targets should be locally set and should not be inferred from this list.

| KPI | Suggested definition | Interpretation |
|---|---|---|
| Facility energy use | Metered energy consumed within the stated facility boundary per period (kWh) | Show boundary, period, weather and material capacity changes |
| Energy per useful output | Metered energy attributable to a workload or service ÷ defined completed service units | Define service unit and allocation method; compare like with like |
| Facility efficiency ratio | Facility energy ÷ IT equipment energy, when both are measured on compatible boundaries | Use as a facility indicator; it does not alone describe total sustainability |
| Water-use intensity | Direct water consumed within the stated boundary ÷ chosen IT energy or other disclosed denominator | State water source, boundary, period and local context |
| Operational emissions | Emissions associated with energy and other operational sources within a stated boundary (tCO₂e) | State factors, scope, location/market method and period |
| Renewable electricity share | Eligible renewable electricity accounted for ÷ total electricity in the stated boundary | Explain procurement instrument and accounting method |
| IT equipment utilisation | Used compute capacity ÷ available capacity over a stated interval | Segment by workload; low utilisation may indicate consolidation potential, but not automatically |
| Capacity forecast accuracy | Actual peak or average demand compared with forecast for the same period | Review forecast error and connection/capacity assumptions |
| Heat reuse | Metered useful heat delivered to an identified recipient | Report actual useful energy, not theoretical recoverable heat |
| Service efficiency | Energy or emissions per successful user task or service transaction | Pair with service quality, accessibility and completion rate |
| Equipment circularity | Reused, repaired or responsibly recovered equipment ÷ equipment retired in scope | State scope, disposition evidence and period |

Avoid treating one ratio as a complete sustainability score. Report absolute consumption alongside intensity measures so growth in demand remains visible. Distinguish measured values from estimates and disclose allocation methods when shared infrastructure serves multiple workloads.

## 7. Portfolio and procurement controls

For every material infrastructure or cloud initiative, include:

- Service outcome, demand evidence and capacity forecast.
- Options assessed, including optimisation, reuse and phased delivery.
- Site, grid, energy, water, carbon, equipment and resilience considerations.
- Total lifecycle costs and sensitivity to energy-price or demand changes.
- Supplier evidence and measurement rights for relevant resource and service metrics.
- Data boundaries, reporting frequency, source systems and verification approach.
- Architecture and exit considerations, including portability and service continuity.
- Benefit owner, baseline, target, review date and corrective-action triggers.

Procurement requirements should be specific, measurable, proportionate and verifiable. Prefer evidence and reporting duties that support operational decisions over unsupported environmental claims.

## 8. Worked example — fictional capacity decision

> **Illustrative assumptions only.** “Pinebridge Services”, its workloads, locations, measurements, costs and decisions below are invented. This example is not a real data centre project or a claim of achieved energy or environmental savings.

A fictional service organisation forecasts a substantial increase in digital transactions and considers expanding its infrastructure footprint. Before approving new capacity, the executive sponsor asks the service owner to validate demand and compare three options: optimise the current environment; use an existing shared facility; or pursue phased expansion at a previously developed site.

The team defines an outcome measure based on successful service transactions and service availability, then establishes a baseline for energy, capacity, utilisation, water and cost. Specialists assess site and grid feasibility, operational resilience, lifecycle costs and measurement quality. The portfolio board approves a time-bounded optimisation and feasibility phase, with a later investment decision conditional on credible demand, capacity evidence and an operating plan. No energy saving is assumed in advance.

At review, leaders compare measured energy per successful transaction, absolute energy use, service quality, cost and capacity forecast accuracy. If demand evidence changes or an option cannot meet service requirements, the board revises the sequence and records the trade-off.

## 9. Executive checklist

### Before approving an initiative
- [ ] The service need, user outcome and demand forecast are evidenced.
- [ ] Optimisation, reuse, shared capacity and phased options were considered.
- [ ] Energy, grid, water, carbon, site and equipment impacts are visible.
- [ ] Resilience, security, service quality and local constraints are assessed.
- [ ] Lifecycle cost and key assumptions are explicit.
- [ ] Data boundaries, baseline, measure owner and review date are agreed.
- [ ] Delivery maturity, ownership, dependencies and exit approach are credible.

### During delivery and operations
- [ ] Actual load and forecast are reviewed against the approved mandate.
- [ ] Environmental and service indicators use stable, documented boundaries.
- [ ] Procurement and supplier evidence is available and reviewable.
- [ ] Material variances trigger an accountable decision.
- [ ] Benefits are assessed using measured service output and resource use.
- [ ] Unused capacity, equipment and data are periodically reviewed.

## 10. Boundaries and tailoring

This framework is independent executive guidance, not an engineering design, environmental assessment, legal interpretation, procurement specification or regulatory compliance opinion. Validate methods, targets, local conditions and obligations with qualified specialists. Adapt decision rights and measures to the scale, criticality, geography and maturity of the service.

All examples are fictional. No project results or employer-specific information are represented.
