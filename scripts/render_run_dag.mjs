#!/usr/bin/env node
/*
 * Wave 4 P1 (category: UX/UI) — execution graph DAG renderer.
 *
 * Minimal vertical slice for the "render orchestration runs as a navigable
 * DAG with timing, retries, and tool outputs" backlog item. Reads a run
 * trace from JSON (or stdin) and emits an ASCII DAG plus a Mermaid graph
 * that can be pasted into docs/PRs/issues.
 *
 * Trace input shape (minimal):
 *   {
 *     "run_id": "abc",
 *     "nodes": [
 *       { "id": "n1", "name": "plan", "duration_ms": 120, "status": "ok" },
 *       { "id": "n2", "name": "tool:web", "duration_ms": 450, "status": "ok",
 *         "depends_on": ["n1"] }
 *     ]
 *   }
 *
 * Usage:
 *   node scripts/render_run_dag.mjs --in trace.json [--mermaid] [--ascii]
 *   cat trace.json | node scripts/render_run_dag.mjs --stdin
 */

import fs from "node:fs";
import process from "node:process";

function parseArgs(argv) {
  const args = { in: null, stdin: false, mermaid: true, ascii: true };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--in") args.in = argv[++i];
    else if (a === "--stdin") args.stdin = true;
    else if (a === "--mermaid-only") args.ascii = false;
    else if (a === "--ascii-only") args.mermaid = false;
  }
  return args;
}

function readTrace(args) {
  if (args.stdin) return JSON.parse(fs.readFileSync(0, "utf8"));
  if (!args.in) throw new Error("must pass --in <file> or --stdin");
  return JSON.parse(fs.readFileSync(args.in, "utf8"));
}

export function toMermaid(trace) {
  const lines = ["graph TD"];
  for (const node of trace.nodes ?? []) {
    const label = `${node.name}\\n${node.duration_ms ?? "?"}ms`;
    const status = node.status === "ok" ? ":::ok" : ":::err";
    lines.push(`  ${node.id}[${label}]${status}`);
  }
  for (const node of trace.nodes ?? []) {
    for (const dep of node.depends_on ?? []) {
      lines.push(`  ${dep} --> ${node.id}`);
    }
  }
  lines.push("classDef ok fill:#dfd,stroke:#3a3");
  lines.push("classDef err fill:#fdd,stroke:#a33");
  return lines.join("\n");
}

export function toAscii(trace) {
  const nodes = trace.nodes ?? [];
  const out = [`run ${trace.run_id ?? "?"} (${nodes.length} nodes)`];
  for (const node of nodes) {
    const deps = (node.depends_on ?? []).join(",") || "-";
    const mark = node.status === "ok" ? "OK" : "!!";
    out.push(
      `  [${mark}] ${node.id} ${node.name} ` +
        `(${node.duration_ms ?? "?"}ms) <- ${deps}`,
    );
  }
  return out.join("\n");
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const trace = readTrace(args);
  if (args.ascii) {
    process.stdout.write(toAscii(trace) + "\n");
  }
  if (args.mermaid) {
    process.stdout.write("\n```mermaid\n" + toMermaid(trace) + "\n```\n");
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
