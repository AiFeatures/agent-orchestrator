# agent-orchestrator — Claude Code Context

## Overview

- **Repository**: AiFeatures/agent-orchestrator
- **Enterprise**: iAiFy
- **Language**: TypeScript
- **Description**:  Agentic orchestrator for parallel coding agents — plans tasks, spawns agents, and autonomously handles CI    fixes, merge conflicts, and code reviews.

## Fork Notes

This is a fork maintained under iAiFy enterprise.
- Do NOT create PRs back to upstream
- Local changes live on the main branch
- Upstream sync managed by Ai-road-4-You/fork-sync

## Quick Start

```bash
npm ci && npm test
```

## Conventions

- Conventional commits: feat:, fix:, chore:, docs:
- Kebab-case file names
- Branch protection on main — PRs required
- CODEOWNERS: @AiFeatures/ai-engineering

## Shared Resources

| Asset | Location |
|---|---|
| CI/CD workflows | Ai-road-4-You/enterprise-ci-cd@v1 |
| Composite actions | Ai-road-4-You/github-actions@v1 |
| Governance | Ai-road-4-You/governance |
| Templates | Ai-road-4-You/repo-templates |

## AgentHub
- Central hub: `~/AgentHub/`
- Skills: `.agents/skills/` (symlinked to AgentHub shared skills)
- MCP: 12 servers synced across all agents
- Agents: 14 shared agents available
- Hooks: Safety, notification, and logging hooks
