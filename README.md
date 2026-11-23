# STRATA & TrashPan — 2-Story B2A Remote MCP Server (`andque-strata-b2a-mcp`)

> **Operated by andQ Inc. / 株式会社andQ** (Corporate Number: `6010001269339` | Web: [https://andque.com](https://andque.com) | B2A Portal: [https://strata.andque.com](https://strata.andque.com) | Contact: `m.m@andque.com`)
>
> **Zero-PII Business-to-Agent (B2A) Structured Data & Deterministic Calculation Infrastructure** — **16 Commercial Data Streams**, **17 Apify Store Pay-Per-Event Actors** (`13` Live + `4` Standby Queue), **16 x402 v2 Base Mainnet USDC Paywalls** (Lumière PayCheck **16/16 Grade A 100/100**), and **118 MCP Tools** (`1 Free probe_inventory + 16 Primary Stream Tools + 101 Specialized Verb Tools`).

![STRATA × TrashPan Interactive Storefront](./docs/storefront-preview.png)

### Verified Global Registry & Audit Links
- **Official MCP Registry (`v2.4.0`)**: `com.andque/strata-b2a-mcp` & `com.andque/agent-data` ([Search on registry.modelcontextprotocol.io](https://registry.modelcontextprotocol.io/v0/servers?search=andque))
- **MCP.so (Verified & Featured)**: [mcp.so/servers/strata-trashpan-b2a-clean-data-mcp-server](https://mcp.so/servers/strata-trashpan-b2a-clean-data-mcp-server)
- **x402scan (`32/32` OpenAPI 3.1 Routes Indexed)**: [x402scan.com/server/85a5783a-7282-4684-b5e7-d2b524c4e7bc](https://www.x402scan.com/server/85a5783a-7282-4684-b5e7-d2b524c4e7bc)
- **Lumière PayCheck (`16/16` Grade A `100/100` Paid-Test Verified)**: [lumierepaycheck.org/sellers/trashpan-recycle-worker.moremasatoshi.workers.dev](https://lumierepaycheck.org/sellers/trashpan-recycle-worker.moremasatoshi.workers.dev)
- **Interactive Web Storefront**: [https://strata.andque.com](https://strata.andque.com) | **OpenAPI 3.1 Discovery**: [https://strata.andque.com/openapi.json](https://strata.andque.com/openapi.json)

---

## Clean Data Provenance Badge (`commercial_resell_ok`)

1. **100% First-Party & Open Government Licensed** (`commercial_resell_ok` — Zero ToS-violating portal scraping)
2. **Strict Zero-PII & Neutral Observation Architecture** (Zero personal names, emails, or mobile phone numbers)
3. **Cryptographically Timestamped via Sigstore Rekor (TAPP)** (`sha256` Merkle tree anchored to public transparency logs)

---

## Architecture: 2-Story Remote MCP (`streamable-http` & `stdio` Bridge)

- **Primary Remote Streamable HTTP Endpoint**: `https://strata.andque.com/mcp`
- **MCP Discovery Manifest**: `https://strata.andque.com/.well-known/mcp.json`
- **x402 v2 Discovery Manifest**: `https://strata.andque.com/.well-known/x402.json`
- **AI Guide (`/llms.txt`)**: `https://strata.andque.com/llms.txt`
- **Legacy Parallel Mirror**: `https://trashpan-recycle-worker.moremasatoshi.workers.dev/mcp`

### 1st Floor (100% FREE / `$0.000` / No API Key Required)
Any MCP client (Claude Desktop, Cursor, Claude Code, Windsurf, Smithery, Glama, PulseMCP) can connect immediately **without an API key**:
- `initialize` & `notifications/initialized`
- `tools/list` (Lists all **118 MCP tools**)
- `tools/call` -> **`probe_inventory`** (`$0.000`): Checks whether a target domain, company ATS board, trend keyword, Japanese corporate KYB / Counterparty Substance record (**5,000 Verified Hot-Index Corporations** in `gen_25912da412d1e39c`, `5.8M` registry architecture scope), court foreclosure, POI location, OLIPAI TCG SKU, academic R&D paper, or ANSR Golf EV/SG/Course profile matrix is in stock, returning its **SHA-256 fingerprint**, **24-hour freshness**, and instant purchase links. Unindexed queries are automatically queued into **AIGREED** for auto-restock.

### 2nd Floor (Full Structured Data Execution)
When calling any of the 117 data/calculation tools:
1. **With `X-MCP-API-Key` (`MCP_API_KEY`)**: Returns full normalized JSON immediately (with Sigstore Rekor / TAPP transparency seal provenance).
2. **Without `X-MCP-API-Key`**: Returns a structured self-resolution guide pointing the AI agent to:
   - Free `probe_inventory` check (`$0.000`)
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

## All 16 Commercial B2A Streams & 17 Apify Store Actors

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
| **13** | `ansr-golf-ev-engine`<br>(`ansr_golf_ev_engine`) | `$0.005` | [`andque/ansr-golf-strokes-gained-ev-engine`](https://apify.com/andque/ansr-golf-strokes-gained-ev-engine) | **157,480-Point ANSR Golf Expected Value (EV), Single-Shot Strokes Gained (SG), ShotCircle Dispersion & National 2,005 Golf Courses (4,647 Courses / 41,825 Holes) GPS GamePlan Engine** |
| **14** | `jp-places-poi-geospatial-intel`<br>(`jp_places_poi_geospatial_intel`) | `$0.005` | `andque/jp-places-poi-geospatial-intel` *(Queued)* | 100% Legal Japan Area POI, GSI Geocoding & 1m Laser Elevation, NIED J-SHIS Seismic Hazard, MHLW Hospitals & PLATEAU 3D |
| **15** | `olipai-jp-tcg-collectibles-market`<br>(`olipai_jp_tcg_collectibles_market`) | `$0.006` | `andque/olipai-jp-tcg-collectibles-market` *(Queued)* | OLIPAI Japan Trading Card Game (Pokemon / JP Collector Foil MTG / Yu-Gi-Oh!) Secondary Market Floor Price & Cross-Venue Spread |
| **16** | `jp-academic-rnd-patent-citation-feed`<br>(`jp_academic_rnd_patent_citation_feed`) | `$0.006` | `andque/jp-academic-rnd-patent-citation-feed` *(Queued)* | Japan Academic R&D High-Citation Papers (OpenAlex CC0), Biomedical/AI Articles (NIH PubMed) & JPO Patent Citations |
| **17** | **`jp-entity-reputation`**<br>(`jp_entity_reputation`) | **`$0.006`** | `andque/jp-entity-reputation` *(Queued)* | **Japan Corporate Substance & Counterparty Reputation Intelligence (`5,000 Verified Hot-Index Corporations` / `gen_25912da412d1e39c` / `5.8M` Registry Scope / Batch up to 1,000 corps at `$0.006` flat): NTA Registry + Virtual Office Density + MHLW/FSA/CAA Sanctions + Gov Awards + Official Domain/Phone Verification** |

---

## All 118 MCP Tools Grouped by Stream

| Stream ID | Count | MCP Tool Names (`1 Free + 16 Primary + 101 Verb Tools`) |
| :--- | :---: | :--- |
| **`probe-inventory`** *(FREE `$0`)* | **1** | `probe_inventory` |
| **`jp-entity-reputation`** | **13** | `jp_entity_reputation`, `verify_jp_corporate_substance`, `filter_virtual_office_entities`, `screen_sales_list_noise`, `verify_jp_counterparty_kyb`, `verify_counterparty_batch`, `check_jp_phone_domain_parry`, `screen_tokyo_clean_b2b_corporations`, `screen_osaka_clean_b2b_corporations`, `lookup_jp_corp_by_official_domain`, `filter_jp_corps_with_gov_procurement_track_record`, `check_jp_corp_name_and_address_churn_history`, `audit_jp_vendor_onboarding_compliance` |
| **`ansr-golf-ev-engine`** | **13** | `ansr_golf_ev_engine`, `calculate_golf_shot_ev`, `calculate_golf_strokes_gained`, `calculate_golf_target_ev_distance`, `calculate_golf_shot_dispersion`, `search_jp_golf_courses`, `calculate_golf_hole_gameplan`, `compare_golf_ev_across_all_lies`, `calculate_golf_putting_expected_strokes`, `calculate_golf_ob_and_penalty_strokes_gained`, `calculate_golf_tee_shot_dispersion_ellipse`, `calculate_golf_approach_shot_dispersion_ellipse`, `search_jp_golf_courses_by_prefecture` |
| **`jp-company-kyb-registry-delta`** | **9** | `jp_company_kyb_registry_delta`, `check_jp_invoice_status`, `search_jp_new_incorporations`, `check_jp_company_recalls_and_violations`, `search_jp_consumer_product_recalls`, `check_jp_invoice_validity_at_date`, `check_jp_labor_standards_referral_records`, `check_jp_fsa_unregistered_operator_warnings`, `track_jp_corporate_relocations_and_closures` |
| **`domain-lookup`** | **8** | `domain_lookup`, `check_domain_b2a_readiness_and_dmarc`, `check_domain_dns_rdap_and_tech_stack`, `inspect_domain_llms_txt_and_agents_md`, `audit_domain_spf_dmarc_deliverability`, `inspect_domain_robots_ai_bot_policy`, `lookup_domain_rdap_expiration_and_registrar`, `measure_domain_ttfb_and_cdn_stack` |
| **`jp-giteki-tenders-intel`** | **8** | `jp_giteki_tenders_intel`, `search_jp_giteki_unreleased_devices`, `search_jp_gov_public_tenders`, `search_jp_gov_procurement_awards`, `search_jp_public_subsidies_jgrants`, `filter_jp_giteki_iot_and_wifi_certifications`, `search_jp_ministry_it_and_cloud_tenders`, `lookup_jp_corp_government_contract_history` |
| **`ats-jobs`** | **7** | `ats_jobs`, `search_ats_job_postings_delta`, `track_greenhouse_job_board_deltas`, `track_lever_job_board_deltas`, `track_ashby_job_board_deltas`, `filter_ats_new_and_removed_job_postings`, `search_ats_engineering_and_ai_roles` |
| **`jp-court-real-estate-auctions`** | **7** | `jp_court_real_estate_auctions`, `search_jp_court_real_estate_auctions`, `search_jp_court_auction_comps`, `search_jp_court_auction_period_announcements`, `search_tokyo_court_real_estate_auctions`, `search_osaka_court_real_estate_auctions`, `filter_court_auctions_by_valuation_range` |
| **`jp-edinet-financial-macro-feed`** | **7** | `jp_edinet_financial_macro_feed`, `search_jp_edinet_securities_filings`, `get_jp_jgb_yield_curve_and_fx_macro`, `search_jp_national_diet_and_egov_laws`, `diff_jp_tdnet_revisions`, `lookup_edinet_filings_by_security_code`, `track_jp_large_shareholding_reports` |
| **`jp-places-poi-geospatial-intel`** | **7** | `jp_places_poi_geospatial_intel`, `search_jp_area_poi_and_facilities`, `check_jp_location_seismic_and_plateau_3d`, `search_poi_hospitals_near_station_or_coords`, `search_poi_gov_contractors_near_location`, `search_poi_court_foreclosures_near_location`, `search_poi_gtfs_transit_and_3d_city_models` |
| **`olipai-jp-tcg-collectibles-market`** | **7** | `olipai_jp_tcg_collectibles_market`, `get_jp_tcg_collectibles_floor_price`, `track_jp_tcg_market_spread_delta`, `get_jp_pokemon_card_secondary_market_index`, `get_jp_mtg_collector_foil_market_index`, `get_jp_yugioh_ocg_quarter_century_market_index`, `list_jp_pokemon_tcg_expansion_sets` |
| **`cisa-kev-threat-ai-status`** | **6** | `cisa_kev_threat_ai_status`, `search_cisa_kev_exploited_vulnerabilities`, `search_cisa_kev_ransomware_campaigns`, `check_ai_cloud_provider_status`, `lookup_cve_in_cisa_kev_catalog`, `monitor_llm_and_cloud_api_outages` |
| **`google-trends`** | **5** | `google_trends`, `query_google_trends_and_autocomplete`, `get_jp_daily_trending_searches_rss`, `get_us_daily_trending_searches_rss`, `expand_keyword_google_autocomplete_queries` |
| **`jp-healthcare-hospitals-directory`** | **5** | `jp_healthcare_hospitals_directory`, `search_jp_hospitals_and_medical_facilities`, `search_tokyo_hospitals_and_clinics`, `search_osaka_hospitals_and_clinics`, `filter_jp_hospitals_with_official_websites` |
| **`jp-patent-saas-b2a-delta`** | **5** | `jp_patent_saas_b2a_delta`, `search_jp_patent_examination_status`, `check_jp_saas_pricing_and_b2a_diff`, `lookup_jp_corporate_patents_by_number`, `monitor_jp_enterprise_ai_crawler_policies` |
| **`jp-real-economy-geospatial-feed`** | **5** | `jp_real_economy_geospatial_feed`, `get_tokyo_toyosu_wholesale_market_prices`, `search_jp_plateau_3d_and_gspace_geospatial`, `query_jp_estat_housing_and_construction_stats`, `query_jp_solar_irradiance_and_jma_seismic_feed` |
| **`jp-academic-rnd-patent-citation-feed`** | **5** | `jp_academic_rnd_patent_citation_feed`, `search_jp_academic_papers_and_patents`, `track_jp_biotech_ai_rnd_citations`, `search_jp_top_cited_openalex_papers`, `search_jp_corporate_jpo_rnd_citations` |

---

## Seller & Compliance Information

- **Seller**: 株式会社andQ / andQ Inc.
- **Corporate Number (Japan NTA)**: `6010001269339`
- **Address**: 〒101-0024 東京都千代田区神田和泉町1-6-16 ヤマトビルディング405
- **Website**: [https://andque.com](https://andque.com) | **B2A Endpoint**: [https://strata.andque.com](https://strata.andque.com)
- **Contact / API Key Issuance / Free B2A Readiness Re-measurement**: `m.m@andque.com`
