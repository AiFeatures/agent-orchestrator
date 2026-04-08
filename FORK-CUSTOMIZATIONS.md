# Fork Customizations

> Upstream: [ComposioHQ/agent-orchestrator](https://github.com/ComposioHQ/agent-orchestrator)
> Fork maintained by: @ashsolei
> Last reviewed: 2026-04-08
> Fork type: **active-dev**
> Sync cadence: **monthly**

## Purpose of Fork

ComposioHQ agent orchestrator fork extended with openclaw and iAiFy plugin divergence.

## Upstream Source

| Property | Value |
|---|---|
| Upstream | [ComposioHQ/agent-orchestrator](https://github.com/ComposioHQ/agent-orchestrator) |
| Fork org | AiFeatures |
| Fork type | active-dev |
| Sync cadence | monthly |
| Owner | @ashsolei |

## Carried Patches

Local commits ahead of `upstream/main` at last review:

- `59e20721 chore: sync CLAUDE.md and copilot-instructions docs`
- `32a902f2 ci: add github-actions ecosystem to dependabot`
- `69cb7a6e docs: update FORK-CUSTOMIZATIONS.md with upstream source`
- `413ccbe5 docs: add FORK-CUSTOMIZATIONS.md per enterprise fork governance`
- `c64bee0f ci: add copilot-setup-steps.yml for Copilot Workspace`
- `6f48d4f3 chore: add AGENTS.md`
- `71f153b3 chore: add CLAUDE.md`
- `ecd4e8c7 chore: add copilot-instructions.md`
- `b23ac0eb chore: add Copilot Coding Agent setup steps`
- `c26e369d chore: remove misplaced agent files from .github/copilot/agents/`
- `4a37d9b0 chore: deploy core custom agents from AgentHub`
- `74389de7 chore: deploy core Copilot agents from AgentHub`
- `0da34089 docs: add FORK-CUSTOMIZATIONS.md`
- `25df75cb chore: add dependabot.yml [governance-orchestrator]`
- `3baabf17 chore: add CODEOWNERS [governance-orchestrator]`
- `bb3a3089 chore: remove workflow security.yml — enterprise cleanup`
- `4bed465e chore: remove workflow release.yml — enterprise cleanup`
- `9e328363 chore: remove workflow onboarding-test.yml — enterprise cleanup`
- `25862a0d chore: remove workflow integration-tests.yml — enterprise cleanup`
- `d36452bc chore: remove workflow ci.yml — enterprise cleanup`

## Supported Components

- openclaw plugin integration layer
- iAiFy plugin divergence in `plugins/` (when present)
- Governance and CI overlays

## Out of Support

- ComposioHQ core orchestration engine - upstream-of-record
- Upstream reference examples

## Breaking-Change Policy

1. On upstream sync, classify per `governance/docs/fork-governance.md`.
2. Breaking API/license/security changes auto-classify as `manual-review-required`.
3. Owner triages within 5 business days; conflicts are logged to the `fork-sync-failure` issue label.
4. Revert local customizations only after stakeholder sign-off.

## Sync Strategy

This fork follows the [Fork Governance Policy](https://github.com/Ai-road-4-You/governance/blob/main/docs/fork-governance.md)
and the [Fork Upstream Merge Runbook](https://github.com/Ai-road-4-You/governance/blob/main/docs/runbooks/fork-upstream-merge.md).

- **Sync frequency**: monthly
- **Conflict resolution**: Prefer upstream; reapply iAiFy customizations on a sync branch
- **Automation**: [`Ai-road-4-You/fork-sync`](https://github.com/Ai-road-4-You/fork-sync) workflows
- **Failure handling**: Sync failures create issues tagged `fork-sync-failure`

## Decision: Continue, Rebase, Refresh, or Replace

| Option | Current Assessment |
|---|---|
| Continue maintaining fork | yes - active iAiFy product scope |
| Full rebase onto upstream | feasible on request |
| Fresh fork (discard local changes) | not acceptable without owner review |
| Replace with upstream directly | not possible (local product value) |

## Maintenance

- **Owner**: @ashsolei
- **Last reviewed**: 2026-04-08
- **Reference runbook**: `ai-road-4-you/governance/docs/runbooks/fork-upstream-merge.md`
