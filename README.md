# STRATA & TrashPan — 2-Story B2A Remote MCP Server (`andque-strata-b2a-mcp`)

> **Operated by andQ Inc. / 株式会社andQ** (Corporate Number: `6010001269339` | Web: [https://andque.com](https://andque.com) | B2A Portal: [https://strata.andque.com](https://strata.andque.com) | Contact: `m.m@andque.com`)
>
> **Zero-PII Business-to-Agent (B2A) Structured Data & Deterministic Calculation Infrastructure** — **16 Commercial Data Streams**, **17 Apify Store Pay-Per-Event Actors (`17 / 17` All Live Public)**, **16 x402 v2 Base Mainnet USDC Paywalls** (Lumière PayCheck **16/16 Paid-Test Passed & Proceed**), **5,858,407 Japanese Corporations across All 10,000 R2 Shards (`gen_37500fcdaacecf05`)**, **44,227 Corporate Domains (`107,126` B2B Reverse-Lookup D1 Index) & 4,551 Live B2A Readiness Tier Measured Corporations**, and a **Glama TDQS Grade-A Canonical 18-Tool Surface** (`2 Free Introspection/Probe Tools + 16 Canonical query_* Tools`, plus **100% Backward Compatibility for all 126 Legacy Tool Aliases = 144 Callable Tools**).

![STRATA × TrashPan Interactive Storefront](./docs/storefront-preview.png)

### Verified Global Registry & Audit Links
- **Official MCP Registry (`v2.8.1`)**: `com.andque/strata-b2a-mcp` & `com.andque/agent-data` ([Search on registry.modelcontextprotocol.io](https://registry.modelcontextprotocol.io/v0/servers?search=andque))
- **Glama (Verified Owner Claim)**: [glama.ai/mcp/connectors/com.andque.strata/strata-and-trash-pan-b2a-clean-data-mcp-server](https://glama.ai/mcp/connectors/com.andque.strata/strata-and-trash-pan-b2a-clean-data-mcp-server)
- **MCP.so (Verified & Featured)**: [mcp.so/servers/strata-trashpan-b2a-clean-data-mcp-server](https://mcp.so/servers/strata-trashpan-b2a-clean-data-mcp-server)
- **x402scan (`32/32` OpenAPI 3.1 Routes Indexed)**: [x402scan.com/server/85a5783a-7282-4684-b5e7-d2b524c4e7bc](https://www.x402scan.com/server/85a5783a-7282-4684-b5e7-d2b524c4e7bc)
- **Lumière PayCheck (`16/16` Paid-Test Verified & `Proceed`)**: [lumierepaycheck.org/sellers/strata.andque.com](https://lumierepaycheck.org/sellers/strata.andque.com) (7d Live Uptime) | [Worker `16/16` Grade A](https://lumierepaycheck.org/sellers/trashpan-recycle-worker.moremasatoshi.workers.dev)
- **Interactive Web Storefront**: [https://strata.andque.com](https://strata.andque.com) | **OpenAPI 3.1 Discovery**: [https://strata.andque.com/openapi.json](https://strata.andque.com/openapi.json)

---

## Clean Data Provenance Badge (`commercial_resell_ok`)

1. **100% First-Party & Open Government Licensed** (`commercial_resell_ok` — Zero ToS-violating portal scraping)
2. **Strict Zero-PII & Neutral Observation Architecture** (Zero personal names, emails, or mobile phone numbers)
3. **Cryptographically Timestamped via Sigstore Rekor (TAPP)** (`sha256` Merkle tree anchored to public transparency logs)

---

## Architecture: 2-Story Remote MCP (`streamable-http` & `stdio` Bridge)

- **Primary Remote Streamable HTTP Endpoint (Canonical 18 Tools)**: `https://strata.andque.com/mcp`
- **Full Alias Surface (All 144 Callable Tools = 18 Canonical + 126 Legacy Aliases)**: `https://strata.andque.com/mcp?profile=full`
- **MCP Discovery Manifest**: `https://strata.andque.com/.well-known/mcp.json`
- **x402 v2 Discovery Manifest**: `https://strata.andque.com/.well-known/x402.json`
- **AI Guide (`/llms.txt`)**: `https://strata.andque.com/llms.txt`
- **Legacy Parallel Mirror**: `https://trashpan-recycle-worker.moremasatoshi.workers.dev/mcp`

### 1st Floor (100% FREE / `$0.000` / No API Key Required)
Any MCP client (Claude Desktop, Cursor, Claude Code, Windsurf, Glama, PulseMCP) can connect immediately **without an API key**:
- `initialize` & `notifications/initialized`
- `tools/list`: Exposes the **18 Canonical Tools** (`list_b2a_data_streams`, `probe_stream_inventory`, and 16 `query_*` stream tools, strictly following `^(list|probe|query)_[a-z0-9_]+$` with nationwide 47-prefecture `"01"`..`"47"` coverage and explicit disambiguation notes). Pass `?profile=full` or `params.includeAliases: true` to list all **144 callable tools**.
- **`list_b2a_data_streams`** (`$0.000`): Introspects all 16 B2A data streams, dataset coverage counts, supported `mode` enums, USD pricing, `SOURCE_RIGHTS_REGISTRY` licenses, and canonical `query_*` mappings.
- **`probe_stream_inventory`** (`$0.000`; legacy alias `probe_inventory` also accepted): Checks whether a target 13-digit JCN, corporate domain, LEI, OFAC wallet, ATS job board, trend keyword, or ANSR Golf course/EV matrix is in stock, returning its **SHA-256 fingerprint** (`currentHash`), **24-hour freshness**, and TAPP Rekor seal status before calling a paid `query_*` tool.

### 2nd Floor (Full Structured Data Execution — 16 Canonical `query_*` Tools + 125 Legacy Aliases)
When calling any paid `query_*` tool (or any of the 125 backward-compatible legacy aliases):
1. **With `X-MCP-API-Key` (`MCP_API_KEY`)**: Returns full normalized JSON immediately (with Sigstore Rekor / TAPP transparency seal provenance).
2. **Without `X-MCP-API-Key`**: Returns a structured self-resolution guide pointing the AI agent to:
   - Free `probe_stream_inventory` check (`$0.000`)
   - Instant **x402 v2 Base Mainnet USDC** paywall URL (`$0.004–$0.008 USDC`, settle-on-success only, wallet `0x0539a9eF29D47Ca13B8604BA2B4970E032c7efEC`)
   - Instant **Apify Store Pay-Per-Event** Actor URL (`https://apify.com/andque`)

---

## Quick Connect (Claude Desktop / Cursor / Claude Code)

### Option A: Direct Streamable HTTP (Recommended — Zero Install)

```json
{
  "mcpServers": {
    "strata-b2a": {
      "type": "streamable-http",
      "url": "https://strata.andque.com/mcp"
    }
  }
}
```

*(If you have a 2nd Floor `X-MCP-API-Key`, add `"headers": { "X-MCP-API-Key": "YOUR_KEY" }`.)*

### Option B: Zero-Dependency Node Stdio Bridge (`npx`)

```json
{
  "mcpServers": {
    "strata-b2a": {
      "command": "npx",
      "args": ["-y", "github:andquemori/strata-b2a-mcp"],
      "env": {
        "MCP_API_KEY": ""
      }
    }
  }
}
```

### Option C: Claude Code CLI

```bash
claude mcp add --transport http strata-b2a https://strata.andque.com/mcp
```

---

## Canonical 18 MCP Tools (`tools/list` Default Surface)

| # | Canonical Tool Name | Tier / Price | Stream ID | Scope & Nationwide Coverage |
| :---: | :--- | :---: | :--- | :--- |
| **1** | `list_b2a_data_streams` | **FREE (`$0`)** | *(Catalog Introspection)* | Lists all 16 streams, schemas, `mode` enums, pricing, and open-data licenses (`category` filter & `includeLegacyAliases`). |
| **2** | `probe_stream_inventory` | **FREE (`$0`)** | *(Inventory Pre-Check)* | Checks record existence (`recordExists`), 24h freshness, and `sha256` `currentHash` across any stream before paid retrieval (legacy `probe_inventory` also accepted). |
| **3** | `query_domain_b2a_posture` | `$0.006` | `domain-lookup` | DNS (A/AAAA/NS/MX/TXT), RDAP expiry, SPF/DMARC score (0–100), TTFB, Tech Stack, `/llms.txt` & B2A Readiness Tier (up to 5 domains). |
| **4** | `query_ats_job_postings` | `$0.006` | `ats-jobs` | Normalized Greenhouse, Lever, and Ashby job postings & daily `sha256` diffs (`new`/`changed`/`removed`/`unchanged`). |
| **5** | `query_google_search_trends` | `$0.004` | `google-trends` | Real-time Google Autocomplete related queries & Google Trends daily RSS trending searches (`geo`: US/JP, etc.). |
| **6** | `query_jp_court_foreclosures` | `$0.008` | `jp-court-real-estate-auctions` | Supreme Court BIT real estate foreclosure results & announcements across all 47 prefectures + NIED J-SHIS seismic amplification. |
| **7** | `query_jp_registry_and_recalls_delta` | `$0.006` | `jp-company-kyb-registry-delta` | Daily NTA corporate incorporations/relocations/closures, invoice revocations, MHLW labor referrals, FSA warnings & CAA recalls. |
| **8** | `query_jp_giteki_and_procurement_tenders` | `$0.005` | `jp-giteki-tenders-intel` | MIC Giteki wireless/IoT certifications, KKJ public tenders, gov contract awards & J-Grants subsidies across all 47 prefectures. |
| **9** | `query_cisa_kev_and_cloud_status` | `$0.005` | `cisa-kev-threat-ai-status` | U.S. CISA KEV exploited CVEs (ransomware flag & due dates) & real-time status of 7 core AI/cloud platforms. |
| **10** | `query_jp_medical_facilities` | `$0.006` | `jp-healthcare-hospitals-directory` | MHLW Navii national directory of 7,715 hospitals & clinics across all 47 prefectures (`prefCode` `"01"`..`"47"`). |
| **11** | `query_jp_edinet_and_macro_feeds` | `$0.006` | `jp-edinet-financial-macro-feed` | Daily FSA EDINET filings, MOF JGB yield curve (2Y/10Y/30Y) & FX macro rates, and National Diet / e-Gov law deliberations. |
| **12** | `query_jp_patents_and_saas_pricing_delta` | `$0.006` | `jp-patent-saas-b2a-delta` | JPO API v1 corporate patent applications/examination status & Japanese SaaS/enterprise B2A, pricing & ToS `sha256` diffs. |
| **13** | `query_jp_wholesale_and_plateau_geospatial` | `$0.005` | `jp-real-economy-geospatial-feed` | Toyosu/Ota wholesale market prices, e-Stat housing/labor stats, MLIT PLATEAU 3D city models, G-Space & solar/seismic feeds. |
| **14** | `query_ansr_golf_ev_and_course_strategy` | `$0.005` | `ansr-golf-ev-engine` | 157,480-point Golf EV (`ev`), Strokes Gained (`sg`), target EV (`strategy`), ShotCircle (`dispersion`), & 2,005 JP golf courses / 41,812 holes (`course_search`, `hole_strategy`). |
| **15** | `query_jp_area_poi_and_seismic_hazard` | `$0.005` | `jp-places-poi-geospatial-intel` | Nationwide 47-prefecture station/address/GPS geocoding, GSI elevation, J-SHIS seismic hazard, & Haversine-sorted nearby hospitals/corps/auctions/PLATEAU 3D. |
| **16** | `query_jp_tcg_collectibles_market` | `$0.006` | `olipai-jp-tcg-collectibles-market` | Pokemon Card, JP Foil MTG & Yu-Gi-Oh! secondary-market floor prices (JPY/USD/EUR), cross-venue spreads, 7d/30d deltas & JP expansion sets. |
| **17** | `query_jp_academic_papers_and_patents` | `$0.006` | `jp-academic-rnd-patent-citation-feed` | OpenAlex high-citation Japanese university/institute papers (CC0), NIH PubMed biomedical articles & JPO R&D patent citations. |
| **18** | `query_jp_corporate_reputation_and_sanctions` | `$0.006` | `jp-entity-reputation` | All 5,858,407 JP corporations (10,000 R2 shards), 44,227 corporate domains, 2.47M NTA invoices, co-located address density, 62,630 Gov Unified Qualifications (`gov_qualification`), 4,357 GLEIF LEIs (`gleif_lei`), 3,061 EDINET GC/amendments (`edinet_gc_amendments`), 14,053 Kanpo notices, PARRY check & 26,364 OFAC sanctions (`ofac_sanctions`) via `lookup`, `screen`, or 1,000-entity `batch`. |

---

## Backward-Compatible Legacy Tool Aliases (126 Tools — 100% Supported on `tools/call` & `?profile=full`)

All 126 legacy tool names (`probe_inventory` + 16 legacy primary stream names + 109 specialized verb tools such as `verify_counterparty_batch`, `screen_ofac_counterparty_entities`, `lookup_jp_gov_unified_qualification_rank`, `calculate_golf_shot_ev`, etc.) remain **100% callable** on `POST /mcp` (`tools/call`) and inspectable via `POST /mcp?profile=full` (144 total tools) or `POST /mcp?profile=legacy` (126 legacy tools).

---

## Seller & Compliance Information

- **Seller**: 株式会社andQ / andQ Inc.
- **Corporate Number (Japan NTA)**: `6010001269339`
- **Address**: 〒101-0024 東京都千代田区神田和泉町1-6-16 ヤマトビルディング405
- **Website**: [https://andque.com](https://andque.com) | **B2A Endpoint**: [https://strata.andque.com](https://strata.andque.com)
- **Contact / API Key Issuance / Free B2A Readiness Re-measurement**: `m.m@andque.com`
