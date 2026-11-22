# STRATA & TrashPan — 2-Story B2A Remote MCP Server (`andque-strata-b2a-mcp`)

> **Operated by andQ Inc. / 株式会社andQ** (Corporate Number: `6010001269339` | Web: [https://andque.com](https://andque.com) | Contact: `m.m@andque.com`)
>
> **Zero-PII Business-to-Agent (B2A) Structured Data & Deterministic Calculation Infrastructure** — **15 Commercial Data Streams**, **16 Apify Store Pay-Per-Event Actors**, **15 x402 v2 Base Mainnet USDC Paywalls** (Lumière PayCheck **Grade A 100/100**), and **50 MCP Tools** (`1 Free probe_inventory + 15 Primary Stream Tools + 34 Specialized Verb Tools`).

---

## Architecture: 2-Story Remote MCP (`streamable-http` & `stdio` Bridge)

- **Remote Streamable HTTP Endpoint**: `https://trashpan-recycle-worker.moremasatoshi.workers.dev/mcp`
- **MCP Discovery Manifest**: `https://trashpan-recycle-worker.moremasatoshi.workers.dev/.well-known/mcp.json`
- **x402 v2 Discovery Manifest**: `https://trashpan-recycle-worker.moremasatoshi.workers.dev/.well-known/x402.json`
- **AI Guide (`/llms.txt`)**: `https://trashpan-recycle-worker.moremasatoshi.workers.dev/llms.txt`

### 1st Floor (100% FREE / `$0.000` / No API Key Required)
Any MCP client (Claude Desktop, Cursor, Claude Code, Windsurf, Smithery, Glama, PulseMCP) can connect immediately **without an API key**:
- `initialize` & `notifications/initialized`
- `tools/list` (Lists all **49 MCP tools**)
- `tools/call` -> **`probe_inventory`** (`$0.000`): Checks whether a target domain, company ATS board, trend keyword, Japanese corporate KYB record, court foreclosure, POI location, OLIPAI TCG SKU, academic R&D paper, or ANSR Golf EV/SG profile matrix is in stock, returning its **SHA-256 fingerprint**, **24-hour freshness**, and instant purchase links. Unindexed queries are automatically queued into **AIGREED** for auto-restock.

### 2nd Floor (Full Structured Data Execution)
When calling any of the 48 data/calculation tools:
1. **With `X-MCP-API-Key` (`MCP_API_KEY`)**: Returns full normalized JSON immediately (with Sigstore Rekor / TAPP transparency seal provenance).
2. **Without `X-MCP-API-Key`**: Returns a structured self-resolution guide pointing the AI agent to:
   - Free `probe_inventory` check (`$0.000`)
   - Instant **x402 v2 Base Mainnet USDC** paywall URL (`$0.004–$0.008 USDC`, settle-on-success only)
   - Instant **Apify Store Pay-Per-Event** Actor URL (`https://apify.com/andque`)

---

## Quick Connect (Claude Desktop / Cursor / Claude Code)

### Option A: Direct Streamable HTTP (Recommended — Zero Install)

```json
{
  "mcpServers": {
    "strata-b2a": {
      "type": "streamable-http",
      "url": "https://trashpan-recycle-worker.moremasatoshi.workers.dev/mcp"
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
claude mcp add --transport http strata-b2a https://trashpan-recycle-worker.moremasatoshi.workers.dev/mcp
```

---

## All 15 Commercial B2A Streams & 16 Apify Store Actors

| # | Stream ID / Primary MCP Tool | x402 USDC | Apify Store Actor (`andque/*`) | Description |
| :---: | :--- | :---: | :--- | :--- |
| **1** | `domain-lookup`<br>(`domain_lookup`) | `$0.006` | [`andque/domain-email-stack-lookup`](https://apify.com/andque/domain-email-stack-lookup) | Bulk Domain, DNS (DoH), RDAP, SPF/DMARC Deliverability Score (0-100), HTTP TTFB, Tech Stack & **B2A Readiness Tier (`2026-11-21.v2`, 0-3 stars)** |
| **2** | `ats-jobs`<br>(`ats_jobs`) | `$0.006` | [`andque/ats-jobs-delta-feed`](https://apify.com/andque/ats-jobs-delta-feed) | Multi-ATS (Greenhouse / Lever / Ashby / Japanese Tech Career Boards) Normalized Job Postings & SHA-256 Daily Delta Feed |
| **3** | `google-trends`<br>(`google_trends`) | `$0.004` | [`andque/google-trends-fast-json`](https://apify.com/andque/google-trends-fast-json) | Real-Time Google Autocomplete Related Queries & Google Trends Daily RSS Trending Searches JSON |
| **4** | `parry-lookup`<br>*(Apify Store Dedicated)* | PPE `$0.004` | [`andque/parry-jp-number-domain-records`](https://apify.com/andque/parry-jp-number-domain-records) | PARRY Japan Phone Number (03/050/0120/0800) & Malicious Domain Quarantine Feed (FSA Warnings + URLhaus IOCs) |
| **5** | `jp-court-real-estate-auctions`<br>(`jp_court_real_estate_auctions`) | `$0.008` | [`andque/jp-court-real-estate-auctions`](https://apify.com/andque/jp-court-real-estate-auctions) | Supreme Court of Japan BIT Real Estate Foreclosure Opening Results (Winning Bid Multiples) & NIED J-SHIS Seismic Hazard |
| **6** | `jp-company-kyb-registry-delta`<br>(`jp_company_kyb_registry_delta`) | `$0.006` | [`andque/jp-company-kyb-registry-delta`](https://apify.com/andque/jp-company-kyb-registry-delta) | Japan NTA Corporate Number Daily Diff, Qualified Invoice Expiry, MHLW Labor Violations, FSA Warnings & CAA Product Recalls |
| **7** | `jp-giteki-tenders-intel`<br>(`jp_giteki_tenders_intel`) | `$0.005` | [`andque/jp-giteki-tenders-intel`](https://apify.com/andque/jp-giteki-tenders-intel) | MIC Japan Radio Law (Giteki) Unreleased Devices, KKJ Public Tenders, Gov Contract Winning Awards & J-Grants Subsidies |
| **8** | `cisa-kev-threat-ai-status`<br>(`cisa_kev_threat_ai_status`) | `$0.005` | [`andque/cisa-kev-threat-ai-status`](https://apify.com/andque/cisa-kev-threat-ai-status) | U.S. CISA KEV Exploited CVEs, abuse.ch URLhaus Malware IOCs & 7 Core AI/Cloud Platform Real-Time Status |
| **9** | `jp-healthcare-hospitals-directory`<br>(`jp_healthcare_hospitals_directory`) | `$0.006` | [`andque/jp-healthcare-hospitals-directory`](https://apify.com/andque/jp-healthcare-hospitals-directory) | Japan MHLW National Hospital & Medical Facility Master Directory (Navii Open Data: 7,715 Hospitals, UTF-8-BOM Cleansed) |
| **10** | `jp-edinet-financial-macro-feed`<br>(`jp_edinet_financial_macro_feed`) | `$0.006` | [`andque/jp-edinet-financial-macro-feed`](https://apify.com/andque/jp-edinet-financial-macro-feed) | FSA EDINET v2 Corporate Securities Filings, Ministry of Finance JGB Yield Curve, FX/BTC Macro & National Diet Laws |
| **11** | `jp-patent-saas-b2a-delta`<br>(`jp_patent_saas_b2a_delta`) | `$0.006` | [`andque/jp-patent-saas-b2a-delta`](https://apify.com/andque/jp-patent-saas-b2a-delta) | Japan Patent Office (JPO API v1) Examination Progress & 100 Japanese SaaS B2A Readiness / Pricing / ToS SHA-256 Delta |
| **12** | `jp-real-economy-geospatial-feed`<br>(`jp_real_economy_geospatial_feed`) | `$0.005` | [`andque/jp-real-economy-geospatial-feed`](https://apify.com/andque/jp-real-economy-geospatial-feed) | Tokyo Toyosu/Ota Wholesale Market Daily Prices, MIC e-Stat Construction/Labor, MLIT PLATEAU 3D Cities & G-Space Catalog |
| **13** | `ansr-golf-ev-engine`<br>(`ansr_golf_ev_engine`) | `$0.005` | [`andque/ansr-golf-strokes-gained-ev-engine`](https://apify.com/andque/ansr-golf-strokes-gained-ev-engine) | **157,480-Point ANSR Golf Expected Value (EV), Single-Shot Strokes Gained (SG) & Course Strategy Black-Box Engine** (62 Core Scores × 16 Driving Bands) |
| **14** | `jp-places-poi-geospatial-intel`<br>(`jp_places_poi_geospatial_intel`) | `$0.005` | [`andque/jp-places-poi-geospatial-intel`](https://apify.com/andque/jp-places-poi-geospatial-intel) | 100% Legal Japan Area POI, GSI Geocoding & 1m Laser Elevation, NIED J-SHIS Seismic Hazard, MHLW Hospitals & PLATEAU 3D |
| **15** | `olipai-jp-tcg-collectibles-market`<br>(`olipai_jp_tcg_collectibles_market`) | `$0.006` | [`andque/olipai-jp-tcg-collectibles-market`](https://apify.com/andque/olipai-jp-tcg-collectibles-market) | OLIPAI Japan Trading Card Game (Pokemon / JP Collector Foil MTG / Yu-Gi-Oh!) Secondary Market Floor Price & Cross-Venue Spread |
| **16** | `jp-academic-rnd-patent-citation-feed`<br>(`jp_academic_rnd_patent_citation_feed`) | `$0.006` | [`andque/jp-academic-rnd-patent-citation-feed`](https://apify.com/andque/jp-academic-rnd-patent-citation-feed) | Japan Academic R&D High-Citation Papers (OpenAlex CC0), Biomedical/AI Articles (NIH PubMed) & JPO Patent Citations |

---

## All 34 Specialized Verb-First MCP Tools (+ `probe_inventory`)

| Tool Name | Backed By Stream | Default Mode / Filter |
| :--- | :--- | :--- |
| **`probe_inventory`** *(FREE $0)* | All 15 Streams | Free 1st-floor SHA-256 & 24h inventory freshness probe |
| `check_domain_b2a_readiness_and_dmarc` | `domain-lookup` | `includeEmailPosture: true, includeHttpTech: true` |
| `check_domain_dns_rdap_and_tech_stack` | `domain-lookup` | `includeEmailPosture: true, includeRdap: true, includeHttpTech: true` |
| `search_ats_job_postings_delta` | `ats-jobs` | `includeDelta: true` |
| `query_google_trends_and_autocomplete` | `google-trends` | `includeRelatedQueries: true, includeTrendingNow: true` |
| `search_jp_court_real_estate_auctions` | `jp-court-real-estate-auctions` | `stage: "all"` |
| `check_jp_invoice_status` | `jp-company-kyb-registry-delta` | `category: "invoice_expirations"` |
| `search_jp_new_incorporations` | `jp-company-kyb-registry-delta` | `category: "new_incorporations"` |
| `check_jp_company_recalls_and_violations` | `jp-company-kyb-registry-delta` | `category: "all"` |
| `search_jp_consumer_product_recalls` | `jp-company-kyb-registry-delta` | `category: "product_recalls"` |
| `search_jp_giteki_unreleased_devices` | `jp-giteki-tenders-intel` | `feedType: "giteki_devices"` |
| `search_jp_gov_public_tenders` | `jp-giteki-tenders-intel` | `feedType: "public_tenders"` |
| `search_jp_gov_procurement_awards` | `jp-giteki-tenders-intel` | `feedType: "procurement_awards"` |
| `search_jp_public_subsidies_jgrants` | `jp-giteki-tenders-intel` | `feedType: "subsidies"` |
| `search_cisa_kev_exploited_vulnerabilities` | `cisa-kev-threat-ai-status` | `feedType: "cisa_kev"` |
| `check_urlhaus_malicious_url_iocs` | `cisa-kev-threat-ai-status` | `feedType: "urlhaus_ioc"` |
| `check_ai_cloud_provider_status` | `cisa-kev-threat-ai-status` | `feedType: "ai_cloud_status"` |
| `search_jp_hospitals_and_medical_facilities` | `jp-healthcare-hospitals-directory` | All 7,715 MHLW hospitals |
| `search_jp_edinet_securities_filings` | `jp-edinet-financial-macro-feed` | `feedType: "edinet_filings"` |
| `get_jp_jgb_yield_curve_and_fx_macro` | `jp-edinet-financial-macro-feed` | `feedType: "jgb_fx_macro"` |
| `search_jp_national_diet_and_egov_laws` | `jp-edinet-financial-macro-feed` | `feedType: "diet_laws"` |
| `search_jp_patent_examination_status` | `jp-patent-saas-b2a-delta` | `feedType: "jpo_patents"` |
| `check_jp_saas_pricing_and_b2a_diff` | `jp-patent-saas-b2a-delta` | `feedType: "saas_b2a_pricing_delta"` |
| `get_tokyo_toyosu_wholesale_market_prices` | `jp-real-economy-geospatial-feed` | `feedType: "wholesale_market"` |
| `search_jp_plateau_3d_and_gspace_geospatial` | `jp-real-economy-geospatial-feed` | `feedType: "geospatial_3d_urban"` |
| `calculate_golf_shot_ev` | `ansr-golf-ev-engine` | `mode: "ev"` (Expected strokes to hole out by skill & lie) |
| `calculate_golf_strokes_gained` | `ansr-golf-ev-engine` | `mode: "sg"` (Single-shot Strokes Gained, OB re-tee `-2.0`) |
| `calculate_golf_target_ev_distance` | `ansr-golf-ev-engine` | `mode: "strategy"` (Linear interpolation reverse distance lookup + target dispersion) |
| `calculate_golf_shot_dispersion` | `ansr-golf-ev-engine` | `mode: "dispersion"` (ShotCircle landing dispersion ellipse & 8-level benchmarks) |
| `search_jp_area_poi_and_facilities` | `jp-places-poi-geospatial-intel` | `category: "all"` |
| `check_jp_location_seismic_and_plateau_3d` | `jp-places-poi-geospatial-intel` | `category: "location_seismic_elevation"` |
| `get_jp_tcg_collectibles_floor_price` | `olipai-jp-tcg-collectibles-market` | `game: "all"` |
| `track_jp_tcg_market_spread_delta` | `olipai-jp-tcg-collectibles-market` | `game: "pokemon"` |
| `search_jp_academic_papers_and_patents` | `jp-academic-rnd-patent-citation-feed` | `feedType: "all"` |
| `track_jp_biotech_ai_rnd_citations` | `jp-academic-rnd-patent-citation-feed` | `feedType: "pubmed_biotech"` |

---

## Seller & Compliance Information

- **Seller**: 株式会社andQ / andQ Inc.
- **Corporate Number (Japan NTA)**: `6010001269339`
- **Address**: 〒101-0024 東京都千代田区神田和泉町1-6-16 ヤマトビルディング405
- **Website**: [https://andque.com](https://andque.com)
- **Contact / API Key Issuance / Free B2A Readiness Re-measurement**: `m.m@andque.com`
