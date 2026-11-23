#!/usr/bin/env node
/**
 * ============================================================================
 * STRATA & TrashPan — 2-Story B2A Remote MCP Zero-Dependency Stdio Bridge
 * ============================================================================
 * Operated by andQ Inc. / 株式会社andQ (Corporate Number: 6010001269339)
 * Primary Remote Streamable HTTP Endpoint:
 *   https://strata.andque.com/mcp
 * Discovery Manifests:
 *   https://strata.andque.com/.well-known/mcp.json
 *   https://strata.andque.com/.well-known/x402.json
 *
 * - 1st Floor (FREE / No API Key Required):
 *     `initialize`, `notifications/initialized`, `ping`, `tools/list` (118 tools),
 *     and `tools/call` with `name: "probe_inventory"` ($0.000).
 * - 2nd Floor (Full Structured Data Execution):
 *     Pass `MCP_API_KEY` env var (forwarded as `X-MCP-API-Key`), or use instant
 *     x402 v2 Base Mainnet USDC paywall / Apify Store Pay-Per-Event links returned
 *     in the response.
 * ============================================================================
 */

import readline from 'node:readline';

const REMOTE_MCP_URL = (
  process.env.STRATA_MCP_URL ||
  'https://strata.andque.com/mcp'
).trim();

const MCP_API_KEY = (
  process.env.MCP_API_KEY ||
  process.env.X_MCP_API_KEY ||
  ''
).trim();

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

async function forwardJsonRpcLine(line) {
  const trimmed = line.trim();
  if (!trimmed) return;

  let parsed;
  try {
    parsed = JSON.parse(trimmed);
  } catch {
    process.stdout.write(
      JSON.stringify({
        jsonrpc: '2.0',
        id: null,
        error: { code: -32700, message: 'Parse error' },
      }) + '\n'
    );
    return;
  }

  // Notifications without an id do not expect a JSON-RPC response frame on stdout
  const isNotification =
    parsed &&
    typeof parsed === 'object' &&
    !('id' in parsed) &&
    typeof parsed.method === 'string';

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'User-Agent': 'Strata-B2A-MCP-Stdio-Bridge/2.4.0 (+https://strata.andque.com)',
  };
  if (MCP_API_KEY) {
    headers['X-MCP-API-Key'] = MCP_API_KEY;
  }

  try {
    const res = await fetch(REMOTE_MCP_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(parsed),
    });

    if (isNotification || res.status === 204) {
      return;
    }

    const text = await res.text();
    if (!text) return;

    const json = JSON.parse(text);
    // If 2nd Floor returned HTTP 401 with self-resolution checkout guidance in `result`,
    // surface `result` cleanly so MCP hosts (Claude Desktop / Cursor) display the guidance to the agent.
    if (res.status === 401 && json && json.result && json.result.content) {
      process.stdout.write(
        JSON.stringify({
          jsonrpc: '2.0',
          id: parsed.id ?? null,
          result: json.result,
        }) + '\n'
      );
      return;
    }

    process.stdout.write(JSON.stringify(json) + '\n');
  } catch (err) {
    if (isNotification) return;
    process.stdout.write(
      JSON.stringify({
        jsonrpc: '2.0',
        id: parsed?.id ?? null,
        error: {
          code: -32603,
          message: `Remote MCP bridge network error: ${
            err instanceof Error ? err.message : String(err)
          }`,
        },
      }) + '\n'
    );
  }
}

rl.on('line', (line) => {
  void forwardJsonRpcLine(line);
});
