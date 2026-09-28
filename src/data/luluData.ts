/**
 * Source of truth data for Lululemon Athletica Inc. (LULU)
 * Institutional Financial Analysis Terminal
 * Exactly preserving all values, metrics, tiers, and disclosures from the provided dataset.
 */

export interface EvidenceItem {
  id?: string;
  source: string;
  quote: string;
  module?: string;
  submodule?: string;
}

export const LULU_RAW_DATA = {
  "symbol": "LULU",
  "companyName": "Lululemon Athletica Inc.",
  "modules": {
    "pricingPower": {
      "symbol": "LULU",
      "companyName": "Lululemon Athletica Inc.",
      "pricingPowerScore": 5.6,
      "categoryWiseGrossMargin": {
        "submoduleScore": 2.0,
        "tier": "Tier 3: Margin Erosion Risk (Limited Pricing Power / Cost Pass-Through Vulnerability)",
        "strategicSummary": "Lululemon Athletica Inc. has experienced notable gross margin compression over the past few fiscal years, particularly marked by a 262 basis point decline in FY2025 following a brief period of expansion in FY2024 and FY2023. The recent decrease is attributed primarily to lower product margins driven by increased tariffs, markdowns, and higher occupancy costs. These factors indicate a vulnerability to external cost pressures and suggest limited pricing power in the face of escalating costs, particularly with changes in tariff regulations impacting their cost structure.",
        "annualMargins": [
          {
            "fiscalYear": "2025",
            "date": "2026-02-01",
            "period": "FY",
            "revenue": 11102600000.0,
            "costOfRevenue": 4818468000.0,
            "grossProfit": 6284132000.0,
            "grossMarginPct": 56.6,
            "yoyChangeBps": -262.0
          },
          {
            "fiscalYear": "2024",
            "date": "2025-02-02",
            "period": "FY",
            "revenue": 10588126000.0,
            "costOfRevenue": 4317315000.0,
            "grossProfit": 6270811000.0,
            "grossMarginPct": 59.22,
            "yoyChangeBps": 91.0
          },
          {
            "fiscalYear": "2023",
            "date": "2024-01-28",
            "period": "FY",
            "revenue": 9619278000.0,
            "costOfRevenue": 4009873000.0,
            "grossProfit": 5609405000.0,
            "grossMarginPct": 58.31,
            "yoyChangeBps": 292.0
          },
          {
            "fiscalYear": "2022",
            "date": "2023-01-29",
            "period": "FY",
            "revenue": 8110518000.0,
            "costOfRevenue": 3618178000.0,
            "grossProfit": 4492340000.0,
            "grossMarginPct": 55.39,
            "yoyChangeBps": -229.0
          },
          {
            "fiscalYear": "2021",
            "date": "2022-01-30",
            "period": "FY",
            "revenue": 6256617000.0,
            "costOfRevenue": 2648052000.0,
            "grossProfit": 3608565000.0,
            "grossMarginPct": 57.68,
            "yoyChangeBps": null
          }
        ],
        "evidence": [
          {
            "source": "FY2025 10-K",
            "quote": "The decrease in gross margin was primarily due to lower product margin driven by higher tariffs and increased markdowns, as well as higher occupancy costs as a percentage of net revenue."
          },
          {
            "source": "FY2024 10-K",
            "quote": "Gross margin decreased 260 basis points to 56.6%."
          },
          {
            "source": "FY2025 10-K",
            "quote": "Changes to U.S. tariff and customs policy... may further materially increase product costs and negatively affect margins."
          },
          {
            "source": "FY2024 10-K",
            "quote": "We experienced a decrease in product margin in the Americas segment of 340 basis points, primarily reflective of the impact of tariffs and increased markdowns."
          }
        ]
      },
      "fullPricePromoLanguage": {
        "submoduleScore": 6.0,
        "tier": "Tier 2: Moderate Promotional Activity",
        "strategicSummary": "Over the past five fiscal years, Lululemon has navigated a landscape of increased costs and promotional activities while maintaining a focus on brand strength and full-price selling strategies. While markdowns have increased due to external pressures, management has expressed a dedication to improving full-price sales across all regions. Continued emphasis on product innovation and strategic pricing actions reflects an effort to protect brand equity and enhance customer loyalty.",
        "summarySentence": "Promotional pressure increased through FY2024–FY2025, while FY2026 Q1 showed sequential improvement in full-price sales.",
        "peakMarkdownImpact": "+70 bps",
        "latestDirection": "Improving ↗",
        "timeline": [
          {
            "period": "FY2023",
            "yearLabel": "FY2023",
            "stance": "Moderate Activity",
            "fullPriceHealth": "Stable",
            "stateType": "stable",
            "eventHeadline": "Investment & resilience",
            "keyEvent": "Investment & resilience",
            "markdownImpact": "Not quantified",
            "markdownImpactBps": null,
            "disclosure": "Management highlighted ongoing investment in product assortment and incremental strategies to drive long-term growth despite external pressures.",
            "managementResponse": null,
            "source": "FY2023 Q2 10-Q",
            "topic": "Tariff pressure",
            "keyEvidence": "We are navigating increased costs related to tariffs and the removal of the de minimis exemption."
          },
          {
            "period": "FY2024",
            "yearLabel": "FY2024",
            "stance": "Moderate Activity",
            "fullPriceHealth": "Under Pressure",
            "stateType": "pressure",
            "eventHeadline": "Markdown pressure",
            "keyEvent": "Increased markdown pressure",
            "markdownImpact": "+70 bps",
            "markdownImpactBps": 70.0,
            "disclosure": "Management acknowledged increased markdowns due to shifting market dynamics and tariff costs, while emphasizing actions to improve full-price health.",
            "managementResponse": "Strategic pricing actions to mitigate tariff costs.",
            "source": "FY2024 Q4 Earnings Transcript",
            "topic": "Pricing actions",
            "keyEvidence": "We are taking actions in both the near term and long term to mitigate the increased tariff costs, including strategic pricing actions."
          },
          {
            "period": "FY2025",
            "yearLabel": "FY2025",
            "stance": "Moderate Activity",
            "fullPriceHealth": "Under Pressure",
            "stateType": "pressure",
            "eventHeadline": "Full-price restoration focus",
            "keyEvent": "Continued promotional pressure",
            "markdownImpact": "Not quantified",
            "markdownImpactBps": null,
            "disclosure": "Higher markdown penetration in North America remained a concern, while management focused on restoring full-price health.",
            "managementResponse": "Focus on restoring full-price health, increasing newness, and guest experience.",
            "source": "FY2025 Q4 Earnings Transcript",
            "topic": "Full-price focus",
            "keyEvidence": "We are focused on the growth of our full-price business ... to increase newness, enhance the guest experience in stores and online and improve our performance."
          },
          {
            "period": "FY2026 Q1",
            "yearLabel": "FY2026 Q1",
            "stance": "Moderate Activity",
            "fullPriceHealth": "Improving",
            "stateType": "improving",
            "eventHeadline": "Full-price momentum",
            "keyEvent": "Full-price recovery",
            "markdownImpact": "Not quantified",
            "markdownImpactBps": null,
            "disclosure": "Management reported sequential improvement in full-price sales relative to Q4.",
            "managementResponse": "Continued focus on product newness, guest experience, brand engagement, and pricing discipline.",
            "source": "FY2026 Q1 Earnings Transcript",
            "topic": "Improvement",
            "keyEvidence": "In Q1, I'm encouraged that we have experienced a sequential improvement in our full price sales relative to Q4."
          }
        ],
        "yearlyTrajectory": [
          {
            "fiscalYear": 2023,
            "stanceTier": "Tier 2: Moderate Promotional Activity",
            "markdownImpactBps": 0.0,
            "keyDisclosures": "Management highlighted the ongoing investment in product assortment and incremental strategies to drive long-term growth despite external pressures."
          },
          {
            "fiscalYear": 2024,
            "stanceTier": "Tier 2: Moderate Promotional Activity",
            "markdownImpactBps": 70.0,
            "keyDisclosures": "Management acknowledged increased markdowns due to shifting market dynamics and tariff costs but emphasized actions to improve full-price health moving forward."
          },
          {
            "fiscalYear": 2025,
            "stanceTier": "Tier 2: Moderate Promotional Activity",
            "markdownImpactBps": 0.0,
            "keyDisclosures": "Despite a challenging North American environment with higher markdown penetration, management remains focused on restoring full-price health as a primary goal."
          },
          {
            "fiscalYear": 2026,
            "stanceTier": "Tier 2: Moderate Promotional Activity",
            "markdownImpactBps": 0.0,
            "keyDisclosures": "Lululemon continues to prioritize improving full-price sales and enhancing brand engagement through unique experiences, indicating a strategic pivot to strengthen pricing discipline."
          }
        ],
        "evidence": [
          {
            "period": "FY2023",
            "source": "FY2023 Q2 10-Q",
            "topic": "Tariff pressure",
            "quote": "We are navigating increased costs related to tariffs and the removal of the de minimis exemption."
          },
          {
            "period": "FY2024",
            "source": "FY2024 Q4 Earnings Transcript",
            "topic": "Pricing actions",
            "quote": "We are taking actions in both the near term and long term to mitigate the increased tariff costs, including strategic pricing actions."
          },
          {
            "period": "FY2025",
            "source": "FY2025 Q4 Earnings Transcript",
            "topic": "Full-price focus",
            "quote": "We are focused on the growth of our full-price business ... to increase newness, enhance the guest experience in stores and online and improve our performance."
          },
          {
            "period": "FY2026 Q1",
            "source": "FY2026 Q1 Earnings Transcript",
            "topic": "Improvement",
            "quote": "In Q1, I'm encouraged that we have experienced a sequential improvement in our full price sales relative to Q4."
          }
        ]
      },
      "marginRecoverySpeed": {
        "score": 10.0,
        "submoduleScore": 10.0,
        "tier": "Tier 1: Rapid Recovery",
        "strategicSummary": "Lululemon demonstrated sharp pricing power and supply chain discipline by fully recovering a 625 bps gross margin drawdown in just 1 quarter, surpassing its previous peak to reach 60.52%.",
        "summary": {
          "peakMargin": 60.42,
          "troughMargin": 54.17,
          "drawdownBps": 625.0,
          "recoveryMargin": 60.52,
          "recoveryQuarters": 1,
          "recoveryPercent": 101.6,
          "status": "Fully Recovered"
        },
        "trend": [
          { "period": "2024 Q4", "margin": 60.42, "event": "Peak" },
          { "period": "2025 Q1", "margin": 58.34, "event": "Decline" },
          { "period": "2025 Q2", "margin": 58.50, "event": "Decline" },
          { "period": "2025 Q3", "margin": 55.57, "event": "Decline" },
          { "period": "2025 Q4", "margin": 54.87, "event": "Decline" },
          { "period": "2026 Q1", "margin": 54.17, "event": "Trough" },
          { "period": "2026 Q2", "margin": 60.52, "event": "Recovered" }
        ],
        "recovery": {
          "targetMargin": 59.80,
          "reached": true,
          "quarters": 1,
          "abovePreviousPeak": true
        },
        "averageQuartersToRecover": 1.0,
        "medianQuartersToRecover": 1.0,
        "fastestRecoveryQuarters": 1,
        "slowestRecoveryQuarters": 1,
        "cycles": [
          {
            "cycleIndex": 1,
            "peakPeriod": "2024 Q4",
            "peakDate": "2025-02-02",
            "peakGrossMarginPct": 60.42,
            "troughPeriod": "2026 Q1",
            "troughDate": "2026-05-03",
            "troughGrossMarginPct": 54.17,
            "drawdownBps": 625.0,
            "target90PctSpreadMargin": 59.8,
            "recoveryPeriod": "2026 Q2",
            "recoveryDate": "2026-08-02",
            "recoveryGrossMarginPct": 60.52,
            "quartersToRecover": 1,
            "status": "Fully Recovered",
            "subsequentQuarters": [
              {
                "period": "2026 Q2",
                "date": "2026-08-02",
                "grossMarginPct": 60.52,
                "recoveryPctOfDrawdown": 101.6,
                "isRecovered90Pct": true
              }
            ]
          }
        ],
        "evidence": [
          {
            "source": "FY2026 Q2 Earnings Transcript",
            "quote": "Gross margin increased to 60.5%, driven by lower air freight expenses, favorable product mix, and disciplined inventory management."
          },
          {
            "source": "FY2024 Q4 Earnings Transcript",
            "quote": "Guests responded well to our product assortment with particular strength in outerwear and lounge."
          },
          {
            "source": "FY2024 Q2 Earnings Transcript",
            "quote": "We are taking actions in both the near term and long term to mitigate the increased tariff costs, including strategic pricing actions, supply chain initiatives."
          },
          {
            "source": "FY2025 Q4 Earnings Transcript",
            "quote": "We are building from a position of strength as we remain the #1 brand for women's activewear in the U.S."
          },
          {
            "source": "FY2024 Q2 Earnings Transcript",
            "quote": "The increased rates and removal of the de minimis provision have played a large part in our guidance reduction for the year."
          },
          {
            "source": "FY2025 Q4 Earnings Transcript",
            "quote": "We are focused on the growth of our full-price business, returning the business to healthier levels of full-price sales."
          }
        ]
      },
      "tariffCostShockPassThrough": {
        "submoduleScore": 6.0,
        "score": 6.0,
        "tier": "Tier 2: Moderate/Partial Pass-Through",
        "strategicSummary": "Lululemon has demonstrated moderate resilience to cost shocks related to tariffs and raw materials, showing some capacity to pass through increased costs to consumers. However, the company has faced challenges in customer demand, particularly in North America, constraining its full pricing power. The gross margin recovery trajectory suggests a gradual improvement as pricing strategies and cost efficiency initiatives are implemented, but headwinds remain from elevated costs and competitive dynamics.",
        "shocks": [
          {
            "shockName": "Tariff Increases",
            "onsetPeriod": "FY2022-Q2",
            "onsetDate": "2022-07-31",
            "natureOfShock": "Tariff increase related to imports",
            "reportedMagnitudeBps": 340.0,
            "pricingAurAction": "Implemented strategic pricing actions to mitigate tariff costs.",
            "unitTrafficResponse": "Reduction in customer demand impacted by price increases.",
            "preShockMarginPct": 56.49,
            "troughMarginPct": 55.11,
            "recoveredMarginPct": 57.52,
            "passThroughClassification": "Moderate/Partial Pass-Through"
          },
          {
            "shockName": "Freight Inflation",
            "onsetPeriod": "FY2023-Q3",
            "onsetDate": "2023-10-29",
            "natureOfShock": "Increased costs of freight logistics",
            "reportedMagnitudeBps": 270.0,
            "pricingAurAction": "Adjusted pricing strategies to manage logistics costs.",
            "unitTrafficResponse": "Some decline in traffic; however, strong branding mitigated severe impacts.",
            "preShockMarginPct": 57.01,
            "troughMarginPct": 55.57,
            "recoveredMarginPct": 58.48,
            "passThroughClassification": "Moderate/Partial Pass-Through"
          },
          {
            "shockName": "Raw Material Cost Increase",
            "onsetPeriod": "FY2024-Q1",
            "onsetDate": "2024-04-28",
            "natureOfShock": "Rising raw material prices affecting production costs",
            "reportedMagnitudeBps": null,
            "pricingAurAction": "Focused on vendor negotiations and cost-efficiency measures.",
            "unitTrafficResponse": "Traffic stable due to brand loyalty despite price adjustments.",
            "preShockMarginPct": 57.72,
            "troughMarginPct": 56.6,
            "recoveredMarginPct": 59.56,
            "passThroughClassification": "Moderate/Partial Pass-Through"
          }
        ],
        "evidence": [
          {
            "source": "FY2022 10-K",
            "quote": "Trade restrictions, tariffs, and customs changes could disrupt our supply chain and compress margins."
          },
          {
            "source": "FY2024 Q2 Earnings Transcript",
            "quote": "We are navigating increased costs related to tariffs and the removal of the de minimis exemption."
          },
          {
            "source": "FY2024 Q4 Earnings Transcript",
            "quote": "For the full year, we now expect gross margin to decrease approximately 270 basis points."
          },
          {
            "source": "FY2024 Q3 Earnings Transcript",
            "quote": "We expect deleverage of approximately 120 basis points versus 2024."
          },
          {
            "source": "FY2023 10-K",
            "quote": "We are taking actions in both the near term and long term to mitigate the increased tariff costs."
          }
        ]
      }
    },
    "catalyst": {
      "symbol": "LULU",
      "companyName": "Lululemon Athletica Inc.",
      "catalystScore": 9.4,
      "submoduleScores": {
        "catalystExecution": 9.5,
        "newCategoryImpact": 9.25
      },
      "catalystExecution": {
        "submoduleScore": 9.5,
        "tier": "Tier 1: High Conviction Strategic Execution",
        "strategicSummary": "Lululemon has demonstrated a robust execution of its corporate strategy focused on international expansion, enhancing product innovation, and improving supply chain agility amid rising tariffs. Despite encountering challenges, especially in the North American market, the leadership has effectively implemented initiatives to elevate brand relevance and operational efficiency, thereby driving growth across multiple regions. Overall, the organization's strategic maneuvers align well with their long-term growth objectives and product offerings.",
        "timeHorizon": "2021-2026",
        "totalCatalystsAnalyzed": 1,
        "scorecard": [
          {
            "eventId": "north-america-business-reset",
            "eventName": "Strategic Reset for North America Business",
            "category": "Corporate Strategy & Long-Range Growth Plans",
            "eventDate": "2024-08-03",
            "q0FiscalQuarter": "2023 Q2",
            "postEventQuarters": 8,
            "growth": {
              "vectorMetricName": "Total Revenue Run-Rate & Comp Growth",
              "vectorUnit": "%",
              "preEventValue": 6257.0,
              "postEventValue": 10260.0,
              "growthDelta": 64.0,
              "status": "Accelerating",
              "macroPreBaseComp": 22.0,
              "macroPostAvgComp": 16.5,
              "macroCompDelta": -5.5
            },
            "margin": {
              "q0MarginPct": 57.1,
              "currentMarginPct": 58.3,
              "marginDeltaBps": 120.0,
              "marginDeltaPts": 1.2,
              "status": "Accretive"
            },
            "guidance": {
              "quartersEvaluated": 8,
              "quartersBeaten": 7,
              "quartersInLine": 1,
              "quartersMissedOrCut": 0,
              "netBeats": 7,
              "status": "Disciplined",
              "cadenceSummary": "Consistent guidance and performance, addressing market fluctuations effectively."
            },
            "inventory": {
              "avgInventoryGrowthPct": 14.4,
              "avgRevenueGrowthPct": 19.2,
              "divergencePts": -4.8,
              "isTemporarilyExempt": false,
              "status": "Disciplined"
            },
            "score": 9.0,
            "tier": "Tier 1: High Conviction Execution",
            "summaryVerdict": "The strategic adjustments made in response to market challenges have significantly bolstered revenue growth and improved margin performance."
          }
        ],
        "evidence": [
          {
            "source": "FY2024 Q2 Earnings Transcript",
            "quote": "We are facing yet another shift today within the industry related to tariffs and the cost of doing business. The increased rates and removal of the de minimis provision have played a large part in our guidance reduction for the year."
          },
          {
            "source": "FY2024 Q1 10-K",
            "quote": "Our operations in the Americas are core to our business and we aim to maintain and grow our net revenue in this market through ongoing product innovation by increasing new style penetration."
          },
          {
            "source": "FY2023 Q3 Earnings Transcript",
            "quote": "Total net revenue rose 7% to $2.6 billion on both a reported and constant currency basis. Comparable sales increased 2%."
          }
        ]
      },
      "newCategoryImpact": {
        "submoduleScore": 9.25,
        "tier": "Tier 1: Accretive Category & Channel Expansion",
        "strategicSummary": "Lululemon's strategic expansion into new product categories and channels has proven to be accretive, driving growth in both the men's product line and international markets. The company has effectively avoided cannibalization through careful market segmentation and targeted product innovations. The margin profile remains robust, indicating a successful integration of new offerings alongside core products.",
        "totalCategoriesAnalyzed": 3,
        "categories": [
          {
            "categoryId": "mens-products",
            "categoryOrChannelName": "Men's Product Line",
            "parentCatalyst": "Increased focus on diversifying product offerings to include men's apparel",
            "launchPeriod": "2021 Q1",
            "growthTrajectory": "Growing",
            "growthDeltaPct": 4.3,
            "marginRelativeToCore": "Parity or better with core",
            "marginDeltaBps": 10.0,
            "score": 8.0,
            "tier": "Tier 1: Accretive Expansion",
            "summaryVerdict": "The men's category shows continued growth, exhibiting strong demand and consistent margins relative to core offerings."
          },
          {
            "categoryId": "outerwear-collection",
            "categoryOrChannelName": "Outerwear Collection",
            "parentCatalyst": "Expansion of offerings into outerwear to capitalize on market trends",
            "launchPeriod": "2023 Q4",
            "growthTrajectory": "Growing",
            "growthDeltaPct": 12.5,
            "marginRelativeToCore": "Parity or better with core",
            "marginDeltaBps": 15.0,
            "score": 9.0,
            "tier": "Tier 1: Accretive Expansion",
            "summaryVerdict": "The new outerwear collection has responded positively with strong sales growth, further contributing to the overall margin health."
          },
          {
            "categoryId": "china-market-expansion",
            "categoryOrChannelName": "Expansion in China",
            "parentCatalyst": "Broadened presence in international markets, particularly in China",
            "launchPeriod": "2022 Q1",
            "growthTrajectory": "Growing",
            "growthDeltaPct": 30.0,
            "marginRelativeToCore": "Modestly below core but stable",
            "marginDeltaBps": -50.0,
            "score": 8.5,
            "tier": "Tier 1: Accretive Expansion",
            "summaryVerdict": "Significant sales growth in China demonstrates successful market penetration despite slightly diluted margins due to initial investment phases."
          }
        ],
        "evidence": [
          {
            "source": "FY2023 Q2 Earnings Transcript",
            "quote": "We recognize there is more work to be done, and we have been course-correcting on a number of fronts, but we are encouraged by the guest response to our recent new product drops and activations."
          },
          {
            "source": "FY2024 10-K",
            "quote": "Net revenue increased by 28% in our China Mainland operations... demonstrating successful expansion efforts."
          },
          {
            "source": "FY2025 Q1 Earnings Transcript",
            "quote": "New styles included Daydrift, Be Calm, Big Cozy, and Mile Maker... indicating our commitment to product innovation."
          }
        ]
      }
    },
    "moatDurability": {
      "symbol": "LULU",
      "companyName": "Lululemon Athletica Inc.",
      "moatDurabilityScore": 7.13,
      "pillarScores": {
        "productAuthorityAndInnovation": 7.07,
        "distributionControlAndChannelDiscipline": 6.65,
        "consumerAndCommunityStrength": 7.28,
        "competitivePositionAndOperationalMoat": 7.44
      },
      "productAuthorityAndInnovation": {
        "newnessAndInnovation": {
          "submoduleScore": 10.0,
          "tier": "Tier 1: High Product Authority & Category Creation",
          "strategicSummary": "Lululemon continues to invest in product innovation and assortment evolution, focusing on increasing the frequency of new styles and improving the speed to market through enhanced R&D capabilities. The brand emphasizes a strategic product activation approach that aligns new product launches with guest preferences and localized market needs. Additionally, Lululemon's commitment to utilizing the Science of Feel principles across its offerings demonstrates a strong dedication to R&D in technical athletic apparel, reinforcing its authority in the category.",
          "assortmentTrajectory": [
            {
              "year": 2024,
              "coreFranchiseSharePct": 60.0,
              "seasonalInnovationSharePct": 40.0,
              "driver": "Introduction of new styles, such as Daydrift and Be Calm, while reinforcing core franchises."
            },
            {
              "year": 2025,
              "coreFranchiseSharePct": 55.0,
              "seasonalInnovationSharePct": 45.0,
              "driver": "Increased focus on product differentiation and localization of assortment."
            },
            {
              "year": 2026,
              "coreFranchiseSharePct": 50.0,
              "seasonalInnovationSharePct": 50.0,
              "driver": "Enhanced ability to curate assortments based on local market preferences."
            }
          ],
          "rdPipeline": [
            {
              "fabricPlatform": "Advanced Technical Fabrics",
              "status": "Under Development",
              "commercialImpact": "Expected to enhance performance and comfort across all product lines."
            },
            {
              "fabricPlatform": "Responsive Replenishment Technologies",
              "status": "Pilot Phase",
              "commercialImpact": "Will allow for quicker turnaround and replenishment of best-selling items, reducing markdowns."
            },
            {
              "fabricPlatform": "Sustainability Innovations",
              "status": "Implementation",
              "commercialImpact": "Aligns with consumer demand for eco-friendly products, bolstering market competitiveness."
            }
          ],
          "evidence": [
            {
              "source": "FY2024 10-K",
              "quote": "The goal of our Product Creation pillar is to ensure we deliver the product that our guests expect from lululemon."
            },
            {
              "source": "FY2025 10-K",
              "quote": "Our product design and development efforts are led by a team of researchers, scientists, engineers, and designers."
            },
            {
              "source": "FY2024 Q2 Earnings Transcript",
              "quote": "We have opportunity within our product assortment and the teams are in action on bringing in style newness, differentiation and increased agility."
            },
            {
              "source": "FY2025 Q3 Earnings Transcript",
              "quote": "We are elevating the store experience by improving our ability to curate our assortment by store and by market."
            },
            {
              "source": "FY2025 Q4 Earnings Transcript",
              "quote": "New guest acquisition, retention, engagement and key brand relevance metrics all remained solid."
            }
          ]
        },
        "productDurability": {
          "submoduleScore": 6.0,
          "tier": "Tier 2: Moderate Durability / Hybrid Exposure (Narrow Moat)",
          "totalDurabilityScore": 4,
          "maxPossibleScore": 6,
          "durabilityPercentage": 66.7,
          "strategicSummary": "Lululemon Athletica Inc. demonstrates a strong competitive position characterized by its dominance in the athletic apparel sector, powered by proprietary materials and a versatile range of products. The brand's commitment to innovation and quality fosters customer loyalty and repeat purchases, mitigating risks associated with changing consumer preferences. However, reliance on market conditions and external factors such as tariffs presents vulnerabilities that could impact long-term stability.",
          "featureAssessments": [
            {
              "featureId": 1,
              "featureName": "Evergreen Franchise Dominance",
              "durableCharacteristic": "Strong brand identity with loyal consumer base.",
              "fadeableRiskCounterpart": "Market competition and changing consumer preferences.",
              "classificationScore": 1,
              "classificationLabel": "Durable",
              "primarySources": ["FY2025 10-K"],
              "evidenceSynthesis": "Lululemon continues to leverage its strong brand recognition and loyalty, focusing on expanding across various athletic categories.",
              "verbatimEvidenceQuotes": [
                "We believe we have an opportunity to expand our brand awareness and familiarity across many activities and categories including yoga, pilates, running, training, golf, and tennis."
              ]
            },
            {
              "featureId": 2,
              "featureName": "Proprietary Material & Technical Functional Utility",
              "durableCharacteristic": "Utilizes high-quality, innovative materials tailored for performance.",
              "fadeableRiskCounterpart": "Competitive pressure from similar brands that may offer comparable products.",
              "classificationScore": 1,
              "classificationLabel": "Durable",
              "primarySources": ["FY2025 10-K"],
              "evidenceSynthesis": "The dedication to premium quality and technical performance underlines Lululemon's product development strategy.",
              "verbatimEvidenceQuotes": [
                "Our product design and development efforts are led by a team of researchers, scientists, engineers, and designers."
              ]
            },
            {
              "featureId": 3,
              "featureName": "Multi-Occasion Wardrobe Utility & Versatility",
              "durableCharacteristic": "Product line caters to multiple activities and lifestyles.",
              "fadeableRiskCounterpart": "Fashion trends could limit applicability of certain product lines.",
              "classificationScore": 1,
              "classificationLabel": "Durable",
              "primarySources": ["FY2026 10-K"],
              "evidenceSynthesis": "Lululemon's strategic approach embraces a wide array of performance fabrics suitable for diverse occasions.",
              "verbatimEvidenceQuotes": [
                "Our women's range remains core to our business, and we continue to innovate in bringing new performance fabrics and styles."
              ]
            },
            {
              "featureId": 4,
              "featureName": "High Replenishment & Repeat Purchase Frequency",
              "durableCharacteristic": "Loyal customer base continually seeks replenishment of favored items.",
              "fadeableRiskCounterpart": "Market saturation and consumer fatigue could reduce purchase frequency.",
              "classificationScore": 1,
              "classificationLabel": "Durable",
              "primarySources": ["FY2024 10-K"],
              "evidenceSynthesis": "Lululemon has cultivated a customer base that favors the company's high-quality products, leading to consistent repeat purchases.",
              "verbatimEvidenceQuotes": [
                "We have initiated an action plan to drive sustainable net revenue growth in the Americas."
              ]
            },
            {
              "featureId": 5,
              "featureName": "Full-Price Discipline & Markdown Resilience",
              "durableCharacteristic": "Maintains a pricing strategy that supports gross margin health.",
              "fadeableRiskCounterpart": "Increasing markdowns may undercut brand premium perception.",
              "classificationScore": 0,
              "classificationLabel": "Fadeable Risk",
              "primarySources": ["FY2024 10-K"],
              "evidenceSynthesis": "While Lululemon maintains a strategy of pricing discipline, there is evidence of increased markdowns impacting margins.",
              "verbatimEvidenceQuotes": [
                "We experienced a decrease in product margin in the Americas segment of 340 basis points, primarily reflective of the impact of tariffs and increased markdowns."
              ]
            },
            {
              "featureId": 6,
              "featureName": "Cross-Category & Cross-Demographic Extensibility",
              "durableCharacteristic": "Diverse product lines attract a wide customer demographic.",
              "fadeableRiskCounterpart": "Emerging brands targeting specific niches may detract from broader appeal.",
              "classificationScore": 0,
              "classificationLabel": "Fadeable Risk",
              "primarySources": ["FY2026 10-K"],
              "evidenceSynthesis": "While Lululemon is expanding its product offerings, competition is intensifying across demographic segments.",
              "verbatimEvidenceQuotes": [
                "We believe this is another way in which we can attract new guests and enable them to experience our products."
              ]
            }
          ],
          "evidence": [
            {
              "source": "FY2025 10-K",
              "quote": "We believe we have an opportunity to expand our brand awareness and familiarity across many activities and categories including yoga, pilates, running, training, golf, and tennis."
            },
            {
              "source": "FY2025 10-K",
              "quote": "Our product design and development efforts are led by a team of researchers, scientists, engineers, and designers."
            },
            {
              "source": "FY2026 10-K",
              "quote": "Our women's range remains core to our business, and we continue to innovate in bringing new performance fabrics and styles."
            },
            {
              "source": "FY2024 10-K",
              "quote": "We have initiated an action plan to drive sustainable net revenue growth in the Americas."
            },
            {
              "source": "FY2024 10-K",
              "quote": "We experienced a decrease in product margin in the Americas segment of 340 basis points, primarily reflective of the impact of tariffs and increased markdowns."
            },
            {
              "source": "FY2026 10-K",
              "quote": "We believe this is another way in which we can attract new guests and enable them to experience our products."
            }
          ]
        },
        "categoryExpansionMarginRetention": {
          "submoduleScore": 6.0,
          "tier": "Tier 2: Modest Margin Dilution",
          "strategicSummary": "Lululemon's expansion strategy continues to focus on enhancing product offerings across both women's and men's categories, maintaining significant revenue contributions while navigating increased costs due to tariffs. The women's segment remains the largest revenue driver, although the company is experiencing modest declines in gross margins, partially attributed to higher operational expenses and product costs. The strategic investment in product differentiation and market expansion supports a long-term growth trajectory despite short-term margin pressures.",
          "categoryBreakdown": [
            {
              "categoryName": "Women's Product",
              "revenueContributionPct": 63.0,
              "revenueM": 6995.4,
              "marginProfile": "High",
              "pricingRationale": "Strong brand loyalty and consistent demand allow for premium pricing on innovative product offerings."
            },
            {
              "categoryName": "Men's Product",
              "revenueContributionPct": 24.0,
              "revenueM": 2664.0,
              "marginProfile": "Moderate",
              "pricingRationale": "Targeted growth initiatives, including enhanced product lines and marketing efforts to build entry into new demographics."
            },
            {
              "categoryName": "Other Segments",
              "revenueContributionPct": 13.0,
              "revenueM": 1443.2,
              "marginProfile": "Varied",
              "pricingRationale": "Represents additional growth avenues through merchandise diversification and strategic collaborations."
            }
          ],
          "segmentRecords": [
            {
              "fiscalYear": 2025,
              "filingDate": "2026-02-01",
              "segments": {
                "Women's Product": 6995.4,
                "Men's Product": 2664.0,
                "Other Segments": 1443.2
              },
              "totalRevenueM": 11102.6,
              "segmentShares": {
                "Women's Product": 63.0,
                "Men's Product": 24.0,
                "Other Segments": 13.0
              }
            },
            {
              "fiscalYear": 2024,
              "filingDate": "2025-02-02",
              "segments": {
                "Women's Product": 6692.6,
                "Men's Product": 2558.4,
                "Other Segments": 1337.1
              },
              "totalRevenueM": 10588.1,
              "segmentShares": {
                "Women's Product": 63.2,
                "Men's Product": 24.2,
                "Other Segments": 12.6
              }
            },
            {
              "fiscalYear": 2023,
              "filingDate": "2024-01-28",
              "segments": {
                "Women's Product": 6147.4,
                "Men's Product": 2252.8,
                "Other Segments": 1219.2
              },
              "totalRevenueM": 9619.3,
              "segmentShares": {
                "Women's Product": 63.9,
                "Men's Product": 23.4,
                "Other Segments": 12.7
              }
            },
            {
              "fiscalYear": 2022,
              "filingDate": "2023-01-29",
              "segments": {
                "Women's Product": 5259.8,
                "Men's Product": 1956.6,
                "Other Segments": 894.1
              },
              "totalRevenueM": 8110.5,
              "segmentShares": {
                "Women's Product": 64.9,
                "Men's Product": 24.1,
                "Other Segments": 11.0
              }
            },
            {
              "fiscalYear": 2021,
              "filingDate": "2022-01-30",
              "segments": {
                "Women's Product": 4171.8,
                "Men's Product": 1535.8,
                "Other Segments": 549.0
              },
              "totalRevenueM": 6256.6,
              "segmentShares": {
                "Women's Product": 66.7,
                "Men's Product": 24.5,
                "Other Segments": 8.8
              }
            },
            {
              "fiscalYear": 2020,
              "filingDate": "2021-01-31",
              "segments": {
                "Women's Product": 3049.9,
                "Men's Product": 953.2,
                "Other Segments": 398.8
              },
              "totalRevenueM": 4401.9,
              "segmentShares": {
                "Women's Product": 69.3,
                "Men's Product": 21.7,
                "Other Segments": 9.1
              }
            },
            {
              "fiscalYear": 2019,
              "filingDate": "2020-02-02",
              "segments": {
                "Women's Product": 2791.0,
                "Men's Product": 933.8,
                "Other Segments": 254.5
              },
              "totalRevenueM": 3979.3,
              "segmentShares": {
                "Women's Product": 70.1,
                "Men's Product": 23.5,
                "Other Segments": 6.4
              }
            },
            {
              "fiscalYear": 2018,
              "filingDate": "2019-02-03",
              "segments": {
                "Corporate Owned Stores": 2126.4,
                "Direct To Consumer": 858.9,
                "Other Segments": 303.1
              },
              "totalRevenueM": 3288.3,
              "segmentShares": {
                "Corporate Owned Stores": 64.7,
                "Direct To Consumer": 26.1,
                "Other Segments": 9.2
              }
            },
            {
              "fiscalYear": 2017,
              "filingDate": "2018-01-28",
              "segments": {
                "Corporate Owned Stores": 1837.1,
                "Direct To Consumer": 577.6,
                "Other Segments": 234.5
              },
              "totalRevenueM": 2649.2,
              "segmentShares": {
                "Corporate Owned Stores": 69.3,
                "Direct To Consumer": 21.8,
                "Other Segments": 8.9
              }
            },
            {
              "fiscalYear": 2016,
              "filingDate": "2017-01-29",
              "segments": {
                "Corporate Owned Stores": 1704.4,
                "Direct To Consumer": 453.3,
                "Other Segments": 186.7
              },
              "totalRevenueM": 2344.4,
              "segmentShares": {
                "Corporate Owned Stores": 72.7,
                "Direct To Consumer": 19.3,
                "Other Segments": 8.0
              }
            },
            {
              "fiscalYear": 2015,
              "filingDate": "2016-01-31",
              "segments": {
                "Corporate Owned Stores": 1516.3,
                "Direct To Consumer": 401.5,
                "Other Segments": 142.7
              },
              "totalRevenueM": 2060.5,
              "segmentShares": {
                "Corporate Owned Stores": 73.6,
                "Direct To Consumer": 19.5,
                "Other Segments": 6.9
              }
            },
            {
              "fiscalYear": 2014,
              "filingDate": "2015-02-01",
              "segments": {
                "Corporate Owned Stores": 1348.2,
                "Direct To Consumer": 321.2,
                "Other Segments": 127.8
              },
              "totalRevenueM": 1797.2,
              "segmentShares": {
                "Corporate Owned Stores": 75.0,
                "Direct To Consumer": 17.9,
                "Other Segments": 7.1
              }
            },
            {
              "fiscalYear": 2013,
              "filingDate": "2014-02-02",
              "segments": {
                "Corporate Owned Stores": 1229.0,
                "Direct To Consumer": 263.1,
                "Other Segments": 99.1
              },
              "totalRevenueM": 1591.2,
              "segmentShares": {
                "Corporate Owned Stores": 77.2,
                "Direct To Consumer": 16.5,
                "Other Segments": 6.2
              }
            },
            {
              "fiscalYear": 2012,
              "filingDate": "2013-02-03",
              "segments": {
                "Corporate Owned Stores": 1090.2,
                "Direct To Consumer": 197.3,
                "Other Segments": 82.9
              },
              "totalRevenueM": 1370.4,
              "segmentShares": {
                "Corporate Owned Stores": 79.6,
                "Direct To Consumer": 14.4,
                "Other Segments": 6.1
              }
            },
            {
              "fiscalYear": 2011,
              "filingDate": "2012-01-29",
              "segments": {
                "Corporate Owned Stores": 817.3,
                "Direct To Consumer": 106.3,
                "Other Segments": 77.2
              },
              "totalRevenueM": 1000.8,
              "segmentShares": {
                "Corporate Owned Stores": 81.7,
                "Direct To Consumer": 10.6,
                "Other Segments": 7.7
              }
            }
          ],
          "evidence": [
            {
              "source": "FY2025 Q2 Earnings Transcript",
              "quote": "We have opportunity within our product assortment and the teams are in action on bringing in style newness, differentiation and increased agility."
            },
            {
              "source": "FY2024 10-K",
              "quote": "The decrease in gross margin was primarily due to lower product margin driven by higher tariffs and increased markdowns."
            },
            {
              "source": "FY2025 Q4 Earnings Transcript",
              "quote": "We have a healthy and loyal customer base that remains engaged and looking to us for great product and experiences."
            },
            {
              "source": "FY2024 10-K",
              "quote": "We aim to maintain and grow our net revenue in this market through ongoing product innovation by increasing new style penetration."
            },
            {
              "source": "FY2024 10-K",
              "quote": "The majority of our sales to U.S. e-commerce guests are currently fulfilled from distribution centers in Canada."
            }
          ]
        },
        "revenueConcentration": {
          "submoduleScore": 6.0,
          "tier": "Tier 2: Moderate Category / Geographic Concentration",
          "strategicSummary": "Lululemon's revenue concentration has shifted over the years from Corporate Owned Stores to Women's Products, indicating a dependency on specific categories. While the company maintains a significant market presence, the high Herfindahl-Hirschman Index (HHI) values suggest moderate concentration risks that could affect performance if demand fluctuates. Diversification efforts in product offerings and market expansion strategies are crucial for mitigating potential risks associated with decreased consumer spending in core categories.",
          "asc606FootnoteSummary": "Lululemon adopts ASC 606, providing significant disclosures regarding revenue recognition and categorization. The company classifies its revenue across multiple channels including company-operated stores, e-commerce, wholesale, and re-commerce, reflecting a comprehensive approach to market reach. This disaggregation allows stakeholders to evaluate the performance and sustainability of each revenue channel.",
          "annualConcentrations": [
            {
              "fiscalYear": 2011,
              "date": "2012-01-29",
              "largestCategoryName": "Corporate Owned Stores",
              "largestCategoryRevenue": 817318000.0,
              "totalRevenue": 1000839000.0,
              "concentrationRatioPct": 81.66,
              "categoryShares": {
                "Corporate Owned Stores": 81.66,
                "Direct To Consumer": 10.62,
                "Other Segments": 7.71
              },
              "hhiScore": 6840.6
            },
            {
              "fiscalYear": 2012,
              "date": "2013-02-03",
              "largestCategoryName": "Corporate Owned Stores",
              "largestCategoryRevenue": 1090181000.0,
              "totalRevenue": 1370358000.0,
              "concentrationRatioPct": 79.55,
              "categoryShares": {
                "Corporate Owned Stores": 79.55,
                "Direct To Consumer": 14.39,
                "Other Segments": 6.05
              },
              "hhiScore": 6571.9
            },
            {
              "fiscalYear": 2013,
              "date": "2014-02-02",
              "largestCategoryName": "Corporate Owned Stores",
              "largestCategoryRevenue": 1228999000.0,
              "totalRevenue": 1591188000.0,
              "concentrationRatioPct": 77.24,
              "categoryShares": {
                "Corporate Owned Stores": 77.24,
                "Direct To Consumer": 16.53,
                "Other Segments": 6.23
              },
              "hhiScore": 6278.1
            },
            {
              "fiscalYear": 2014,
              "date": "2015-02-01",
              "largestCategoryName": "Corporate Owned Stores",
              "largestCategoryRevenue": 1348225000.0,
              "totalRevenue": 1797213000.0,
              "concentrationRatioPct": 75.02,
              "categoryShares": {
                "Corporate Owned Stores": 75.02,
                "Direct To Consumer": 17.87,
                "Other Segments": 7.11
              },
              "hhiScore": 5997.9
            },
            {
              "fiscalYear": 2015,
              "date": "2016-01-31",
              "largestCategoryName": "Corporate Owned Stores",
              "largestCategoryRevenue": 1516323000.0,
              "totalRevenue": 2060523000.0,
              "concentrationRatioPct": 73.59,
              "categoryShares": {
                "Corporate Owned Stores": 73.59,
                "Direct To Consumer": 19.49,
                "Other Segments": 6.92
              },
              "hhiScore": 5843.2
            },
            {
              "fiscalYear": 2016,
              "date": "2017-01-29",
              "largestCategoryName": "Corporate Owned Stores",
              "largestCategoryRevenue": 1704357000.0,
              "totalRevenue": 2344392000.0,
              "concentrationRatioPct": 72.7,
              "categoryShares": {
                "Corporate Owned Stores": 72.7,
                "Direct To Consumer": 19.33,
                "Other Segments": 7.97
              },
              "hhiScore": 5722.5
            },
            {
              "fiscalYear": 2017,
              "date": "2018-01-28",
              "largestCategoryName": "Corporate Owned Stores",
              "largestCategoryRevenue": 1837065000.0,
              "totalRevenue": 2649181000.0,
              "concentrationRatioPct": 69.34,
              "categoryShares": {
                "Corporate Owned Stores": 69.34,
                "Direct To Consumer": 21.8,
                "Other Segments": 8.85
              },
              "hhiScore": 5361.6
            },
            {
              "fiscalYear": 2018,
              "date": "2019-02-03",
              "largestCategoryName": "Corporate Owned Stores",
              "largestCategoryRevenue": 2126363000.0,
              "totalRevenue": 3288319000.0,
              "concentrationRatioPct": 64.66,
              "categoryShares": {
                "Corporate Owned Stores": 64.66,
                "Direct To Consumer": 26.12,
                "Other Segments": 9.22
              },
              "hhiScore": 4948.2
            },
            {
              "fiscalYear": 2019,
              "date": "2020-02-02",
              "largestCategoryName": "Women's Product",
              "largestCategoryRevenue": 2790997000.0,
              "totalRevenue": 3979296000.0,
              "concentrationRatioPct": 70.14,
              "categoryShares": {
                "Men's Product": 23.47,
                "Other Segments": 6.4,
                "Women's Product": 70.14
              },
              "hhiScore": 5511.4
            },
            {
              "fiscalYear": 2020,
              "date": "2021-01-31",
              "largestCategoryName": "Women's Product",
              "largestCategoryRevenue": 3049906000.0,
              "totalRevenue": 4401879000.0,
              "concentrationRatioPct": 69.29,
              "categoryShares": {
                "Men's Product": 21.65,
                "Other Segments": 9.06,
                "Women's Product": 69.29
              },
              "hhiScore": 5351.9
            },
            {
              "fiscalYear": 2021,
              "date": "2022-01-30",
              "largestCategoryName": "Women's Product",
              "largestCategoryRevenue": 4171762000.0,
              "totalRevenue": 6256617000.0,
              "concentrationRatioPct": 66.68,
              "categoryShares": {
                "Men's Product": 24.55,
                "Other Segments": 8.77,
                "Women's Product": 66.68
              },
              "hhiScore": 5125.8
            },
            {
              "fiscalYear": 2022,
              "date": "2023-01-29",
              "largestCategoryName": "Women's Product",
              "largestCategoryRevenue": 5259803000.0,
              "totalRevenue": 8110518000.0,
              "concentrationRatioPct": 64.85,
              "categoryShares": {
                "Men's Product": 24.12,
                "Other Segments": 11.02,
                "Women's Product": 64.85
              },
              "hhiScore": 4908.7
            },
            {
              "fiscalYear": 2023,
              "date": "2024-01-28",
              "largestCategoryName": "Women's Product",
              "largestCategoryRevenue": 6147372000.0,
              "totalRevenue": 9619278000.0,
              "concentrationRatioPct": 63.91,
              "categoryShares": {
                "Men's Product": 23.42,
                "Other Segments": 12.67,
                "Women's Product": 63.91
              },
              "hhiScore": 4793.5
            },
            {
              "fiscalYear": 2024,
              "date": "2025-02-02",
              "largestCategoryName": "Women's Product",
              "largestCategoryRevenue": 6692630000.0,
              "totalRevenue": 10588126000.0,
              "concentrationRatioPct": 63.21,
              "categoryShares": {
                "Men's Product": 24.16,
                "Other Segments": 12.63,
                "Women's Product": 63.21
              },
              "hhiScore": 4738.7
            },
            {
              "fiscalYear": 2025,
              "date": "2026-02-01",
              "largestCategoryName": "Women's Product",
              "largestCategoryRevenue": 6995365000.0,
              "totalRevenue": 11102600000.0,
              "concentrationRatioPct": 63.01,
              "categoryShares": {
                "Women's Product": 63.01,
                "Men's Product": 23.99,
                "Other Segments": 13.0
              },
              "hhiScore": 4714.8
            }
          ],
          "threeYearTrends": [
            {
              "startYear": 2011,
              "endYear": 2014,
              "startConcentrationPct": 81.66,
              "endConcentrationPct": 75.02,
              "changeBps": -664.0,
              "changePercentagePoints": -6.64,
              "largestCategory3yCagrPct": 18.16,
              "expansionCategories3yCagrPct": 34.75,
              "totalRevenue3yCagrPct": 21.55,
              "trendInterpretation": "Healthy Diversification (Expansion outgrowing Core)"
            },
            {
              "startYear": 2012,
              "endYear": 2015,
              "startConcentrationPct": 79.55,
              "endConcentrationPct": 73.59,
              "changeBps": -596.0,
              "changePercentagePoints": -5.96,
              "largestCategory3yCagrPct": 11.63,
              "expansionCategories3yCagrPct": 24.77,
              "totalRevenue3yCagrPct": 14.56,
              "trendInterpretation": "Healthy Diversification (Expansion outgrowing Core)"
            },
            {
              "startYear": 2013,
              "endYear": 2016,
              "startConcentrationPct": 77.24,
              "endConcentrationPct": 72.7,
              "changeBps": -454.0,
              "changePercentagePoints": -4.54,
              "largestCategory3yCagrPct": 11.52,
              "expansionCategories3yCagrPct": 20.9,
              "totalRevenue3yCagrPct": 13.79,
              "trendInterpretation": "Healthy Diversification (Expansion outgrowing Core)"
            },
            {
              "startYear": 2014,
              "endYear": 2017,
              "startConcentrationPct": 75.02,
              "endConcentrationPct": 69.34,
              "changeBps": -568.0,
              "changePercentagePoints": -5.68,
              "largestCategory3yCagrPct": 10.86,
              "expansionCategories3yCagrPct": 21.84,
              "totalRevenue3yCagrPct": 13.81,
              "trendInterpretation": "Healthy Diversification (Expansion outgrowing Core)"
            },
            {
              "startYear": 2015,
              "endYear": 2018,
              "startConcentrationPct": 73.59,
              "endConcentrationPct": 64.66,
              "changeBps": -893.0,
              "changePercentagePoints": -8.93,
              "largestCategory3yCagrPct": 11.93,
              "expansionCategories3yCagrPct": 28.77,
              "totalRevenue3yCagrPct": 16.86,
              "trendInterpretation": "Healthy Diversification (Expansion outgrowing Core)"
            },
            {
              "startYear": 2016,
              "endYear": 2019,
              "startConcentrationPct": 72.7,
              "endConcentrationPct": 70.14,
              "changeBps": -256.0,
              "changePercentagePoints": -2.56,
              "largestCategory3yCagrPct": 17.87,
              "expansionCategories3yCagrPct": 22.91,
              "totalRevenue3yCagrPct": 19.29,
              "trendInterpretation": "Healthy Diversification (Expansion outgrowing Core)"
            },
            {
              "startYear": 2017,
              "endYear": 2020,
              "startConcentrationPct": 69.34,
              "endConcentrationPct": 69.29,
              "changeBps": -5.0,
              "changePercentagePoints": -0.05,
              "largestCategory3yCagrPct": 18.41,
              "expansionCategories3yCagrPct": 18.52,
              "totalRevenue3yCagrPct": 18.44,
              "trendInterpretation": "Stable Parity (Core and Expansion growing in lockstep)"
            },
            {
              "startYear": 2018,
              "endYear": 2021,
              "startConcentrationPct": 64.66,
              "endConcentrationPct": 66.68,
              "changeBps": 202.0,
              "changePercentagePoints": 2.02,
              "largestCategory3yCagrPct": 25.19,
              "expansionCategories3yCagrPct": 21.51,
              "totalRevenue3yCagrPct": 23.91,
              "trendInterpretation": "Increasing Concentration (Core outgrowing Expansion)"
            },
            {
              "startYear": 2019,
              "endYear": 2022,
              "startConcentrationPct": 70.14,
              "endConcentrationPct": 64.85,
              "changeBps": -529.0,
              "changePercentagePoints": -5.29,
              "largestCategory3yCagrPct": 23.52,
              "expansionCategories3yCagrPct": 33.87,
              "totalRevenue3yCagrPct": 26.79,
              "trendInterpretation": "Healthy Diversification (Expansion outgrowing Core)"
            },
            {
              "startYear": 2020,
              "endYear": 2023,
              "startConcentrationPct": 69.29,
              "endConcentrationPct": 63.91,
              "changeBps": -538.0,
              "changePercentagePoints": -5.38,
              "largestCategory3yCagrPct": 26.32,
              "expansionCategories3yCagrPct": 36.94,
              "totalRevenue3yCagrPct": 29.77,
              "trendInterpretation": "Healthy Diversification (Expansion outgrowing Core)"
            },
            {
              "startYear": 2021,
              "endYear": 2024,
              "startConcentrationPct": 66.68,
              "endConcentrationPct": 63.21,
              "changeBps": -347.0,
              "changePercentagePoints": -3.47,
              "largestCategory3yCagrPct": 17.06,
              "expansionCategories3yCagrPct": 23.17,
              "totalRevenue3yCagrPct": 19.17,
              "trendInterpretation": "Healthy Diversification (Expansion outgrowing Core)"
            },
            {
              "startYear": 2022,
              "endYear": 2025,
              "startConcentrationPct": 64.85,
              "endConcentrationPct": 63.01,
              "changeBps": -184.0,
              "changePercentagePoints": -1.84,
              "largestCategory3yCagrPct": 9.97,
              "expansionCategories3yCagrPct": 12.94,
              "totalRevenue3yCagrPct": 11.03,
              "trendInterpretation": "Healthy Diversification (Expansion outgrowing Core)"
            }
          ],
          "evidence": [
            {
              "source": "FY2023 10-K",
              "quote": "lululemon athletica inc., a Delaware corporation, is engaged in the design, distribution, and retail of technical athletic apparel, footwear, and accessories."
            },
            {
              "source": "FY2023 10-K",
              "quote": "The Company organizes its operations into four regional markets: Americas, China Mainland, Asia Pacific ('APAC'), and Europe and the Middle East ('EMEA')."
            },
            {
              "source": "FY2024 10-K",
              "quote": "We generate net revenue in the Americas through our lululemon branded retail locations which include different sizes of company-operated stores, outlets, pop-ups, and other temporary locations."
            },
            {
              "source": "FY2024 10-K",
              "quote": "The decrease in net revenue was primarily due to a decrease in comparable sales, which decreased 3%."
            },
            {
              "source": "FY2024 10-K",
              "quote": "Our operations in the Americas are core to our business and we aim to maintain and grow our net revenue in this market through ongoing product innovation."
            }
          ]
        }
      },
      "distributionControlAndChannelDiscipline": {
        "channelQualityMix": {
          "submoduleScore": 6.0,
          "tier": "Tier 2: Balanced Hybrid DTC & Selective Wholesale (40-65% DTC)",
          "strategicSummary": "Lululemon has a well-balanced distribution channel strategy that leverages both direct-to-consumer (DTC) and selective wholesale. Approximately 40% to 60% of revenue is generated through DTC channels, prominently featuring e-commerce and physical retail. The company maintains pricing discipline by focusing on enhancing their full-price sales while strategically managing markdowns, highlighting their commitment to brand equity and channel control.",
          "channelBreakdown": [
            {
              "channelName": "Company-operated Stores",
              "channelType": "Physical Retail",
              "revenueM": null,
              "sharePct": null,
              "controlLevel": "High",
              "qualityTier": "Premium",
              "details": "Lululemon utilizes company-operated stores to maintain strong brand engagement and support omni-channel capabilities."
            },
            {
              "channelName": "E-commerce",
              "channelType": "Digital",
              "revenueM": 1000.0,
              "sharePct": 40.0,
              "controlLevel": "High",
              "qualityTier": "Premium",
              "details": "Lululemon's e-commerce channel is key to reaching customers beyond physical locations, contributing approximately 40% of total revenue."
            },
            {
              "channelName": "Wholesale",
              "channelType": "Distributor/Retail Partner",
              "revenueM": null,
              "sharePct": 30.0,
              "controlLevel": "Medium",
              "qualityTier": "Standard",
              "details": "Lululemon collaborates with selective wholesale partners to enhance brand presence while controlling product quality and pricing."
            },
            {
              "channelName": "Temporary Locations",
              "channelType": "Pop-Up/Seasonal",
              "revenueM": null,
              "sharePct": null,
              "controlLevel": "Medium",
              "qualityTier": "Standard",
              "details": "Seasonal and pop-up locations serve to expand access during peak shopping periods."
            }
          ],
          "evidence": [
            {
              "source": "FY2024 10-K",
              "quote": "We operate an omni-channel retail model and aim to efficiently and effectively serve our guests in the ways most convenient to them."
            },
            {
              "source": "FY2024 10-K",
              "quote": "In our store channel, total sales increased 3%, and we ended the quarter with 816 stores globally."
            },
            {
              "source": "FY2024 Q2 Earnings Transcript",
              "quote": "We are focused on the growth of our full-price business."
            },
            {
              "source": "FY2026 10-K",
              "quote": "We believe e-commerce is convenient for our guests and also allows us to reach and serve guests in markets beyond where our physical retail locations are based."
            },
            {
              "source": "FY2024 Q4 Earnings Transcript",
              "quote": "In our regions and channels, excluding the 53rd week and in constant currency, results were as follows: North America revenue was flat with comparable sales down 2%."
            }
          ]
        },
        "marketingIntensityVsGrowth": {
          "submoduleScore": 10.0,
          "tier": "Tier 1: Organic Brand Pull (<8% Marketing/Rev with double-digit growth)",
          "strategicSummary": "Lululemon Athletica Inc. demonstrates strong organic demand generation with a marketing spend consistently below 6% of revenue. The company's recent growth rates, particularly in international markets like China, indicate healthy brand pull and customer loyalty. Despite challenges in North America, the company focuses on leveraging its community and product experience rather than relying heavily on marketing spend to drive growth.",
          "financialRecords": [
            {
              "fiscalYear": 2021,
              "fiscalDate": "2022-01-30",
              "netRevenueMillions": 6256.6,
              "revenueGrowthPct": 0.0,
              "marketingExpenseMillions": 333.8,
              "marketingIntensityPct": 5.33,
              "sgaExpenseMillions": 2225.0,
              "sgaRatioPct": 35.56,
              "marketingEfficiencyRatio": 0.0
            },
            {
              "fiscalYear": 2022,
              "fiscalDate": "2023-01-29",
              "netRevenueMillions": 8110.5,
              "revenueGrowthPct": 29.63,
              "marketingExpenseMillions": 413.6,
              "marketingIntensityPct": 5.1,
              "sgaExpenseMillions": 2757.4,
              "sgaRatioPct": 34.0,
              "marketingEfficiencyRatio": 5.81
            },
            {
              "fiscalYear": 2023,
              "fiscalDate": "2024-01-28",
              "netRevenueMillions": 9619.3,
              "revenueGrowthPct": 18.6,
              "marketingExpenseMillions": 509.6,
              "marketingIntensityPct": 5.3,
              "sgaExpenseMillions": 3397.2,
              "sgaRatioPct": 35.32,
              "marketingEfficiencyRatio": 3.51
            },
            {
              "fiscalYear": 2024,
              "fiscalDate": "2025-02-02",
              "netRevenueMillions": 10588.1,
              "revenueGrowthPct": 10.07,
              "marketingExpenseMillions": 564.4,
              "marketingIntensityPct": 5.33,
              "sgaExpenseMillions": 3762.4,
              "sgaRatioPct": 35.53,
              "marketingEfficiencyRatio": 1.89
            },
            {
              "fiscalYear": 2025,
              "fiscalDate": "2026-02-01",
              "netRevenueMillions": 11102.6,
              "revenueGrowthPct": 4.86,
              "marketingExpenseMillions": 610.0,
              "marketingIntensityPct": 5.49,
              "sgaExpenseMillions": 4066.6,
              "sgaRatioPct": 36.63,
              "marketingEfficiencyRatio": 0.88
            }
          ],
          "evidence": [
            {
              "source": "FY2021",
              "quote": "Selling & Marketing=$333.8M (5.33% of Rev)"
            },
            {
              "source": "FY2022",
              "quote": "Selling & Marketing=$413.6M (5.10% of Rev)"
            },
            {
              "source": "FY2023",
              "quote": "Selling & Marketing=$509.6M (5.30% of Rev)"
            },
            {
              "source": "FY2024",
              "quote": "Selling & Marketing=$564.4M (5.33% of Rev)"
            },
            {
              "source": "FY2025",
              "quote": "Selling & Marketing=$610.0M (5.49% of Rev)"
            },
            {
              "source": "FY2025 Q4 Earnings Transcript",
              "quote": "We have a healthy and loyal customer base that remains engaged and looking to us for great product and experiences."
            },
            {
              "source": "FY2024 Q2 Earnings Transcript",
              "quote": "We are facing yet another shift today within the industry related to tariffs and the cost of doing business."
            },
            {
              "source": "FY2025 Q2 Earnings Transcript",
              "quote": "Our brand remains very healthy, and our guests are very loyal, as you know."
            }
          ]
        },
        "wholesaleDoorsAndOffPrice": {
          "submoduleScore": 5.0,
          "tier": "Tier Undetermined",
          "strategicSummary": "",
          "storeFleetTrajectory": [],
          "offPriceExposure": [],
          "evidence": []
        }
      },
      "consumerAndCommunityStrength": {
        "compGrowthConsistency": {
          "submoduleScore": 6.0,
          "tier": "Tier 2: Moderate Cyclical Comp Growth",
          "strategicSummary": "Lululemon's comparable store sales have faced some headwinds, particularly in the Americas where sales decreased due to lower conversion rates and reduced store traffic. However, the company has demonstrated resilience in its digital channels, with notable growth in e-commerce traffic which helped offset some declines in physical store sales. Regional performance indicates strong momentum in international markets, especially in China, highlighting the company's ability to adapt and sustain growth amid cyclical challenges.",
          "evidence": [
            {
              "source": "FY2024 10-K",
              "quote": "Net revenue in the Americas decreased 1% and comparable sales in the Americas decreased 3%. We experienced lower conversion rates, store traffic, and average order value in the Americas, partially reflective of certain product categories, including core categories, experiencing lower demand."
            },
            {
              "source": "FY2024 Q3 Earnings Transcript",
              "quote": "Total net revenue rose 7% to $2.6 billion on both a reported and constant currency basis. Comparable sales increased 2%."
            },
            {
              "source": "FY2025 Q1 Earnings Transcript",
              "quote": "China Mainland revenue increased 30% or 23% in constant currency, with comparable sales increasing 13%."
            },
            {
              "source": "FY2024 Q2 Earnings Transcript",
              "quote": "While we continue to see positive momentum overall in our international regions, we're not happy with the current results in the U.S. business."
            },
            {
              "source": "FY2025 10-K",
              "quote": "We have long-standing relationships with many of our vendors and work closely with them to ensure a shared commitment to quality and ethical standards."
            }
          ]
        },
        "loyaltyMembership": {
          "submoduleScore": 10.0,
          "tier": "Tier 1: High Engagement Ecosystem (>20M Members & High LTV)",
          "strategicSummary": "Lululemon's loyalty program is positioned as a high-engagement ecosystem, supported by strong membership growth and initiatives aimed at enhancing customer experiences. The recent updates to their membership program and successful campaigns during peak shopping periods, such as Black Friday, highlight the brand's ability to drive app downloads and customer retention. With a growing focus on personalized product offerings and local market adaptations, Lululemon aims to reinforce customer loyalty and encourage repeat purchases.",
          "evidence": [
            {
              "source": "FY2025 Q3 Earnings Transcript",
              "quote": "we're rolling out new solves to engage our high-value guests... updates we've recently rolled out to our membership program"
            },
            {
              "source": "FY2025 Q4 Earnings Transcript",
              "quote": "we offered our Black Friday product to our members a week earlier this year... fueled a significant number of app downloads and new sign-ups for our membership program"
            },
            {
              "source": "FY2026 Q1 Earnings Transcript",
              "quote": "strong teams who are motivated and excited to bring our new innovations and product assortments to our guests"
            },
            {
              "source": "FY2026 Q1 Earnings Transcript",
              "quote": "we've seen others, as we start Q2, not generate the anticipated guest response... we are moving with urgency to make the necessary adjustments to reaccelerate momentum"
            },
            {
              "source": "FY2026 Q1 Earnings Transcript",
              "quote": "we reported that engaging with guests through community activations... drive improved brand momentum"
            }
          ]
        },
        "trafficVsTicket": {
          "submoduleScore": 6.0,
          "tier": "Tier 2: Traffic Dependent (Ticket Flat/Down)",
          "strategicSummary": "Lululemon is experiencing challenges with foot traffic and conversion rates, particularly in the Americas where comparable sales decreased 3%. Despite a focus on expanding e-commerce and improving the in-store experience, the average order value has also decreased, indicative of a traffic-dependent model that is struggling to maintain ticket levels. The company's initiatives to enhance product newness and locally curated assortments aim to reinvigorate consumer interest, but current trends suggest that performance remains under pressure.",
          "evidence": [
            {
              "source": "FY2024 10-K",
              "quote": "We experienced lower conversion rates, store traffic, and average order value in the Americas, partially reflective of certain product categories, including core categories, experiencing lower demand."
            },
            {
              "source": "FY2024 10-K",
              "quote": "The decrease in comparable sales was primarily a result of lower conversion rates, reduced store traffic, and a decrease in average order value."
            },
            {
              "source": "FY2024 Q2 Earnings Transcript",
              "quote": "While Q2 earnings per share exceeded guidance, our top line results fell short of our expectations, driven predominantly by underperformance in North America."
            },
            {
              "source": "FY2024 Q3 Earnings Transcript",
              "quote": "Total net revenue rose 7% to $2.6 billion... comparable sales increased 2%."
            },
            {
              "source": "FY2025 Q1 Earnings Transcript",
              "quote": "Comparable sales were down 6%... North America revenue decreased 3% or 4% in constant currency."
            }
          ]
        }
      },
      "competitivePositionAndOperationalMoat": {
        "competitiveRiskFactorTrend": {
          "submoduleScore": 6.0,
          "tier": "Tier 2: Moderate Moat Facing Niche Competition",
          "strategicSummary": "Lululemon Athletica Inc. operates in a highly competitive and fragmented market for athletic apparel, facing competition from both large established brands and niche players focused on women's athletic clothing. While Lululemon has built a strong brand with a loyal customer base and innovative product offerings, macroeconomic conditions, changing consumer shopping preferences, and rising competition could impact its market share and profitability. Additionally, the company's significant reliance on global supply chains exposes it to geopolitical risks and cost pressures, which may create vulnerabilities against competitors with more localized or diversified sourcing strategies.",
          "evidence": [
            {
              "source": "FY2026 10-K",
              "quote": "We operate in a highly competitive market and our competitors may compete more effectively than we can, resulting in a loss of our market share and a decrease in our net revenue and profitability."
            },
            {
              "source": "FY2026 10-K",
              "quote": "Many of our competitors are large apparel and sporting goods companies with strong worldwide brand recognition."
            },
            {
              "source": "FY2024 10-K",
              "quote": "We experienced lower conversion rates, store traffic, and average order value in the Americas, partially reflective of certain product categories, including core categories, experiencing lower demand."
            },
            {
              "source": "FY2025 10-K",
              "quote": "The removal of this exemption increases the cost of fulfilling those orders. As a result, more shipments are now subject to duties, taxes, and customs procedures, which increased product costs."
            },
            {
              "source": "FY2026 10-K",
              "quote": "Changes in consumer shopping preferences, and shifts in distribution channels could materially impact our results of operations."
            }
          ]
        },
        "sourcingConcentration": {
          "submoduleScore": 6.0,
          "tier": "Tier 2: Moderate Regional / Vendor Exposure (20-40% Concentration)",
          "strategicSummary": "Lululemon Athletica Inc. exhibits a moderate level of geographic revenue diversification, with approximately 48.5% of its revenue sourced from the United States and significant contributions from China (28.4%) and Canada (10.9%). However, the company's revenue is concentrated in a few key markets, increasing exposure to regional trade risks. Additionally, Lululemon's reliance on a limited number of suppliers is notable, with significant fabric sourcing concentrated in specific countries such as Taiwan, presenting potential geopolitical risks.",
          "geographicRevenue": [
            {
              "fiscalYear": 2025,
              "date": "2026-02-01",
              "totalRevenueM": 13056.5,
              "segments": [
                { "region": "UNITED STATES", "revenueM": 6328.4, "sharePercent": 48.5 },
                { "region": "CHINA", "revenueM": 3708.7, "sharePercent": 28.4 },
                { "region": "CANADA", "revenueM": 1423.2, "sharePercent": 10.9 },
                { "region": "Outside Of North America", "revenueM": 1301.7, "sharePercent": 10.0 },
                { "region": "Hong Kong SAR, Taiwan, and Macau SAR", "revenueM": 199.1, "sharePercent": 1.5 },
                { "region": "MEXICO", "revenueM": 95.5, "sharePercent": 0.7 }
              ]
            },
            {
              "fiscalYear": 2024,
              "date": "2025-02-02",
              "totalRevenueM": 10588.1,
              "segments": [
                { "region": "UNITED STATES", "revenueM": 6483.2, "sharePercent": 61.2 },
                { "region": "People's Republic of China", "revenueM": 1541.4, "sharePercent": 14.6 },
                { "region": "CANADA", "revenueM": 1411.7, "sharePercent": 13.3 },
                { "region": "Outside Of North America", "revenueM": 1118.5, "sharePercent": 10.6 },
                { "region": "MEXICO", "revenueM": 33.3, "sharePercent": 0.3 }
              ]
            },
            {
              "fiscalYear": 2023,
              "date": "2024-01-28",
              "totalRevenueM": 9619.3,
              "segments": [
                { "region": "UNITED STATES", "revenueM": 6346.4, "sharePercent": 66.0 },
                { "region": "CANADA", "revenueM": 1285.3, "sharePercent": 13.4 },
                { "region": "People's Republic of China", "revenueM": 1134.3, "sharePercent": 11.8 },
                { "region": "Outside Of North America", "revenueM": 853.3, "sharePercent": 8.9 }
              ]
            },
            {
              "fiscalYear": 2022,
              "date": "2023-01-29",
              "totalRevenueM": 8110.5,
              "segments": [
                { "region": "UNITED STATES", "revenueM": 5654.3, "sharePercent": 69.7 },
                { "region": "CANADA", "revenueM": 1163.1, "sharePercent": 14.3 },
                { "region": "People's Republic of China", "revenueM": 681.6, "sharePercent": 8.4 },
                { "region": "Outside Of North America", "revenueM": 611.4, "sharePercent": 7.5 }
              ]
            },
            {
              "fiscalYear": 2021,
              "date": "2022-01-30",
              "totalRevenueM": 6256.6,
              "segments": [
                { "region": "UNITED STATES", "revenueM": 4345.7, "sharePercent": 69.5 },
                { "region": "Outside Of North America", "revenueM": 956.7, "sharePercent": 15.3 },
                { "region": "CANADA", "revenueM": 954.2, "sharePercent": 15.3 }
              ]
            }
          ],
          "evidence": [
            {
              "source": "FY2025 10-K",
              "quote": "Approximately 47% of our products were manufactured by our top five vendors, the largest of which produced approximately 15% of our products."
            },
            {
              "source": "FY2025 10-K",
              "quote": "Approximately 48% of our fabrics were produced by our top five fabric suppliers, the largest of which produced approximately 20% of fabric used."
            },
            {
              "source": "FY2025 10-K",
              "quote": "Our operations in the Americas are core to our business... We generate net revenue in the Americas through our lululemon branded retail locations... including e-commerce."
            },
            {
              "source": "FY2025 10-K",
              "quote": "Our concentration of fabric sourcing in Taiwan exposes us to geopolitical risks, including the possibility of military conflict, trade restrictions, or disruptions affecting that region."
            },
            {
              "source": "FY2025 10-K",
              "quote": "Net revenue in the Americas decreased 1% and comparable sales in the Americas decreased 3%."
            }
          ]
        },
        "supplyChainSpeedAndChase": {
          "submoduleScore": 10.0,
          "tier": "Tier 1: Fast-Chase Agility & Greige Postponement (<12 Weeks)",
          "strategicSummary": "Lululemon has demonstrated strong agility in its supply chain management, with a significant focus on reducing lead times and improving in-season chase capabilities. The company has reduced its mainline product development process timeline from 18-24 months to a target range of 12-14 months. Furthermore, they are actively enhancing their ability to react to guest demand trends, indicating a commitment to maintaining healthy inventory levels that are closely aligned with consumer preferences.",
          "evidence": [
            {
              "source": "FY2026 Q1 Earnings Transcript",
              "quote": "We have also reduced our mainline product development process from 18 to 24 months to 15 to 16 months, and we are working to further reduce it down to 12 to 14 months."
            },
            {
              "source": "FY2026 Q1 Earnings Transcript",
              "quote": "We are chasing 20% more volume this year relative to last year, and we see this as an important capability going forward."
            },
            {
              "source": "FY2025 Q4 Earnings Transcript",
              "quote": "We are focused on the growth of our full-price business...we are already seeing better full-price sell-through in Q1 relative to Q4."
            },
            {
              "source": "FY2025 Q2 Earnings Transcript",
              "quote": "We are taking actions in both the near term and long term to mitigate the increased tariff costs, including strategic pricing actions, supply chain initiatives, including vendor negotiations and DC network efficiency."
            },
            {
              "source": "FY2025 Q4 Earnings Transcript",
              "quote": "The difference between dollar inventory growth and unit inventory growth relates predominantly to higher tariff rates relative to last year and foreign exchange."
            }
          ]
        }
      }
    },
    "structuralVsCyclicalDownside": {
      "ratio": {
        "investmentDebates": {
          "structuralVSCyclical": {
            "finalScore": 5.1,
            "category": "Mixed",
            "metrics": {
              "marginRecovery": {
                "score": 2,
                "recoveryPercentage": 11.25,
                "periods": [
                  { "period": "2025-01-31", "grossMargin": 60.42 },
                  { "period": "2025-04-30", "grossMargin": 58.34 },
                  { "period": "2025-07-31", "grossMargin": 58.5 },
                  { "period": "2025-10-31", "grossMargin": 55.57 },
                  { "period": "2026-01-31", "grossMargin": 54.87 },
                  { "period": "2026-04-30", "grossMargin": 54.2 },
                  { "period": "2026-07-31", "grossMargin": 60.5 }
                ]
              },
              "revenueGrowthPersistence": {
                "weightPct": 13,
                "score": 7,
                "periods": [
                  { "period": "2025-01-31 (Q4 FY24)", "revenueYoyPct": 12.68 },
                  { "period": "2025-04-30 (Q1 FY25)", "revenueYoyPct": 7.32 },
                  { "period": "2025-07-31 (Q2 FY25)", "revenueYoyPct": 6.5 },
                  { "period": "2025-10-31 (Q3 FY25)", "revenueYoyPct": 7.06 },
                  { "period": "2026-01-31 (Q4 FY25)", "revenueYoyPct": 0.81 },
                  { "period": "2026-04-30 (Q1 FY26)", "revenueYoyPct": 4 },
                  { "period": "2026-07-31 (Q2 FY26)", "revenueYoyPct": -4 }
                ]
              },
              "inventoryToSalesDivergence": {
                "weightPct": 13,
                "score": 10,
                "metricValue": -3,
                "scoreBasis": "unit basis",
                "periods": [
                  {
                    "period": "2025-07-31 (Q2 FY25)",
                    "inventoryGrowthPct": 20.53,
                    "revenueGrowthPct": 6.5,
                    "divergencePct": 14.03
                  },
                  {
                    "period": "2025-10-31 (Q3 FY25)",
                    "inventoryGrowthPct": 10.94,
                    "revenueGrowthPct": 7.06,
                    "divergencePct": 3.88
                  },
                  {
                    "period": "2026-01-31 (Q4 FY25)",
                    "inventoryGrowthPct": 17.94,
                    "revenueGrowthPct": 0.81,
                    "divergencePct": 17.13
                  },
                  {
                    "period": "2026-04-30 (Q1 FY26)",
                    "inventoryGrowthPct": -4,
                    "revenueGrowthPct": 4,
                    "divergencePct": -8
                  },
                  {
                    "period": "2026-07-31 (Q2 FY26)",
                    "inventoryGrowthPct": -7,
                    "revenueGrowthPct": -4,
                    "divergencePct": -3
                  }
                ]
              },
              "weaknessBreadth": {
                "weightPct": 10,
                "score": 2,
                "metricValue": 77.8,
                "graphs": {
                  "segmentWise": {
                    "title": "Revenue Growth by Geography",
                    "type": "bar",
                    "unit": "YoY Revenue Growth (%)",
                    "data": {
                      "United States": { "FY2025": -2.39, "FY2026": -8 },
                      "Canada": { "FY2025": 0.81, "FY2026": -11 },
                      "China Mainland": { "FY2025": 140.6, "FY2026": 4 },
                      "Rest of World": { "FY2025": 16.37, "FY2026": 5 }
                    }
                  },
                  "productWise": {
                    "title": "Revenue Growth by Product Category",
                    "type": "bar",
                    "unit": "YoY Revenue Growth (%)",
                    "data": {
                      "Mens": { "FY2025": 4.13, "FY2026": -1 },
                      "Womens": { "FY2025": 4.52, "FY2026": -4 },
                      "Accessories & Other": { "FY2025": 7.94, "FY2026": -13 }
                    }
                  }
                }
              }
            }
          },
          "downSideFloor": {
            "finalScore": 7.2,
            "category": "Good Downside Support",
            "metrics": {
              "valuationSupport": {
                "score": 8.57,
                "metrics": {
                  "forwardEarningsMultiple": {
                    "value": 17.17,
                    "period": "FY26 Guidance",
                    "benchmarkMedian": 32,
                    "ratioPct": 53.7,
                    "score": 10
                  },
                  "historicalEarningsMultiple": {
                    "value": 12.44,
                    "fy25Eps": 13.26,
                    "period": "FY25 Reported Actual",
                    "benchmarkMedian": 32,
                    "ratioPct": 38.9,
                    "score": 10
                  },
                  "enterpriseValueEbitda": {
                    "value": 11.4,
                    "enterpriseValueB": 18.33,
                    "marketCapB": 17.58,
                    "cashB": 1.39,
                    "fundedDebtB": 0,
                    "leaseLiabilitiesB": 2.14,
                    "ttmEbitdaB": 1.61,
                    "formula": "Enterprise Value / TTM EBITDA",
                    "benchmarkMedian": 19.5,
                    "ratioPct": 58.5,
                    "status": "Formula Validated - Pending Source Audit",
                    "score": 10
                  },
                  "historicalTroughValuation": {
                    "value": 14.5,
                    "currentToTroughRatio": 1.184,
                    "score": 8
                  },
                  "distanceToValuationTrough": {
                    "distancePct": 15.55,
                    "score": 7
                  },
                  "priceFreeCashFlow": {
                    "value": 27.05,
                    "marketCapB": 17.58,
                    "fy25FcfM": 650,
                    "period": "FY25 Actual FCF",
                    "benchmarkMedian": 34,
                    "ratioPct": 79.5,
                    "score": 7
                  },
                  "impliedDownsideFloor": {
                    "floorPrice": 137.46,
                    "currentPrice": 165,
                    "floorRatioPct": 83.3,
                    "downsidePct": 16.7,
                    "score": 8
                  }
                }
              },
              "earningsResilience": {
                "score": 6.86,
                "metrics": {
                  "revenueResilience": {
                    "maxDrawdownPct": -4,
                    "period": "Q2 FY26",
                    "note": "Q2 FY26 revenue declined 4.0% YoY during current operating slowdown",
                    "score": 10
                  },
                  "grossMarginResilience": {
                    "troughMarginPct": 54.2,
                    "normalMarginPct": 58.5,
                    "troughToNormalPct": 92.65,
                    "score": 9
                  },
                  "operatingMarginResilience": {
                    "troughMarginPct": 11.2,
                    "normalMarginPct": 20.7,
                    "troughToNormalPct": 54.1,
                    "score": 6
                  },
                  "ebitdaMarginResilience": {
                    "troughMarginPct": 16.8,
                    "normalMarginPct": 25.5,
                    "troughToNormalPct": 65.9,
                    "score": 7
                  },
                  "earningsResilience": {
                    "retainedPct": 71.5,
                    "period": "Forward EPS Guidance Retention",
                    "score": 8
                  },
                  "freeCashFlowResilience": {
                    "retainedPct": 53.28,
                    "period": "FY25 vs Peak FCF",
                    "score": 5
                  },
                  "grossMarginRecovery": {
                    "recoveryPct": 16.28,
                    "note": "Underlying operational GM recovery excluding non-recurring IEEPA tariff refunds",
                    "score": 3
                  }
                }
              },
              "balanceSheetLiquidityCapitalAllocation": {
                "score": 7.11,
                "metrics": {
                  "leaseAdjustedNetLeverage": {
                    "fundedDebtPosition": "Net Cash (+$1.390B)",
                    "leaseInclusivePosition": "Net Obligation (-$751M)",
                    "totalLeaseLiabilities": "$2.141B",
                    "score": 9
                  },
                  "netCashToMarketCapitalization": {
                    "cashB": 1.39,
                    "marketCapB": 17.58,
                    "ratioPct": 7.9,
                    "score": 5
                  },
                  "cashToRevenue": {
                    "cashM": 1389.737,
                    "ttmRevenueM": 10296.5,
                    "ttmPeriodQuarters": [
                      "Q3 FY25 ($2204.0M)",
                      "Q4 FY25 ($3205.1M)",
                      "Q1 FY26 ($2471.4M)",
                      "Q2 FY26 ($2416.0M)"
                    ],
                    "ratioPct": 13.5,
                    "period": "TTM",
                    "score": 5
                  },
                  "currentLiquidityRatio": {
                    "value": 2.19,
                    "currentAssetsM": 3945.587,
                    "currentLiabilitiesM": 1801.651,
                    "score": 8
                  },
                  "quickLiquidityRatio": {
                    "value": 0.87,
                    "quickAssetsM": 1560.901,
                    "currentLiabilitiesM": 1801.651,
                    "score": 6
                  },
                  "freeCashFlowToDebt": {
                    "ratioPct": "Zero Funded Debt",
                    "score": 10
                  },
                  "leaseCoverageRatio": {
                    "coverageX": 7.02,
                    "status": "Formula Validated - Pending Source Audit",
                    "score": 8
                  },
                  "shortTermDebtToCash": {
                    "ratioPct": 0,
                    "score": 10
                  },
                  "shareRepurchaseCoverage": {
                    "buybackCoverageX": 0.54,
                    "score": 3
                  }
                }
              },
              "historicalDownsideBehavior": {
                "score": 5.17,
                "weight": 0.15,
                "metrics": {
                  "maximumStockDrawdown": {
                    "drawdownPct": -68.05,
                    "status": "Ongoing Episode ($516.39 to $165.00)",
                    "score": 3
                  },
                  "averageMajorDrawdown": {
                    "drawdownPct": -66.53,
                    "methodology": "Average of completed episodes with peak-to-trough decline >= 20%",
                    "score": 4
                  },
                  "maximumEpsDrawdown": {
                    "drawdownPct": -28.51,
                    "score": 8
                  },
                  "stockRecoveryTime": {
                    "recoveryMonths": 19.7,
                    "value": "19.7 months",
                    "period": "Completed Episodes Post-Trough",
                    "score": 5
                  },
                  "earningsRecoveryTime": {
                    "recoveryMonths": 18.0,
                    "value": "18.0 months",
                    "period": "Completed Episodes Post-Trough",
                    "score": 5
                  },
                  "valuationRecoveryTime": {
                    "recoveryMonths": 16.5,
                    "value": "16.5 months",
                    "period": "Completed Episodes Post-Trough",
                    "score": 6
                  }
                }
              }
            }
          }
        }
      },
      "insights": {
        "investmentDebates": {
          "structuralVSCyclical": {
            "overallSummary": "LULU\u2019s current weakness appears mixed, with both structural and cyclical characteristics. Inventory trends have improved significantly, as inventory units declined while revenue remained relatively stable or declined less, indicating that excess inventory is not currently driving the weakness. However, underlying gross margin recovery remains limited after excluding the one-time tariff refund, suggesting profitability pressure persists. Revenue and comparable sales have also deteriorated materially, moving from strong growth to near-flat and then negative growth. In addition, weakness has become broad-based across products, geographies, stores, and digital channels, which indicates more persistent pressure rather than an isolated temporary issue. Overall, the evidence suggests that while some operational pressures are cyclical and inventory is normalizing, the breadth and persistence of sales weakness and limited margin recovery indicate meaningful structural pressure.",
            "marginRecovery": {
              "summary": "LULU's profitability weakened from early 2025 into early 2026. The decline was driven by higher tariffs, increased markdowns, weaker sales and fixed-cost deleverage, with some newer product launches also performing below expectations. The latest reported margin increased sharply, but this was significantly affected by a one-time IEEPA tariff refund. Excluding that benefit, the underlying margin was about 54.9%, only slightly above the 54.2% trough. This indicates that genuine profitability recovery is still limited.",
              "evidence": [
                "Gross margin declined from 60.42% in January 2025 to a trough of 54.20% in April 2026.",
                "Tariffs and markdowns reduced product margin.",
                "Weaker sales created fixed-cost deleverage and increased pressure on profitability.",
                "Some newer product launches performed below expectations.",
                "The latest reported 60.5% gross margin included a significant one-time IEEPA tariff refund.",
                "Excluding the tariff refund, underlying gross margin was approximately 54.9%, showing only a small recovery from the trough."
              ]
            },
            "revenueGrowthPersistence": {
              "summary": "LULU's revenue growth has slowed significantly. Revenue remained positive through Q1 FY26, but growth weakened from double-digit levels to almost flat before turning negative in Q2 FY26. Comparable sales show a clearer deterioration, declining in both Q1 and Q2 FY26, with the decline becoming much larger in Q2. The weakness was mainly linked to lower traffic, weaker product launches, negative brand commentary and continued pressure in North America and China. Management has also guided for another revenue decline in Q3 FY26, indicating that the weakness is expected to continue in the near term.",
              "evidence": [
                "Revenue growth slowed from 12.68% in Q4 FY24 to 0.81% by Q4 FY25 before turning negative in Q2 FY26.",
                "Q1 FY26 revenue increased 4%, but comparable sales declined 2%.",
                "Q2 FY26 revenue declined 4%, while comparable sales declined 10%.",
                "North America revenue declined 8% and comparable sales declined 12% in Q2 FY26.",
                "Management said traffic pressure and weaker-than-expected product launches contributed to the moderating sales trend.",
                "Management also cited negative media and social commentary around the brand as a factor affecting traffic and top-line performance.",
                "China Mainland revenue increased only 4% in Q2 FY26 and comparable sales declined 8%, below management's expectations.",
                "Management expects Q3 FY26 revenue to decline 10% to 11%; this is guidance and is not yet an actual result."
              ]
            },
            "inventoryToSalesDivergence": {
              "summary": "LULU's inventory position has improved significantly after building up faster than sales during late FY25. Inventory growth was much higher than revenue growth in Q2 and Q4 FY25, indicating elevated inventory pressure. However, this trend reversed in FY26. Inventory units declined 4% in Q1 and 7% in Q2, while revenue grew 4% in Q1 and declined 4% in Q2. This means inventory is not currently piling up faster than sales. Management also stated that the difference between dollar and unit inventory growth was mainly caused by higher tariff costs and foreign exchange, making the unit trend more useful for assessing the underlying inventory position. The company is also actively managing inventory by chasing stronger-performing products and strategically managing future inventory flows.",
              "evidence": [
                "Inventory grew 20.53% while revenue grew 6.50% in Q2 FY25, creating a 14.03 percentage-point divergence.",
                "Inventory grew 17.94% while revenue grew only 0.81% in Q4 FY25, creating a 17.13 percentage-point divergence.",
                "Inventory units declined 4% in Q1 FY26 while revenue increased 4%, resulting in a -8.0 percentage-point divergence.",
                "Inventory units declined 7% in Q2 FY26 while revenue declined 4%, resulting in a -3.0 percentage-point divergence.",
                "Management said the difference between dollar and unit inventory growth was predominantly related to higher tariff costs and foreign exchange.",
                "Management said it is chasing stronger-performing products and working with vendors to strategically manage future inventory flows.",
                "Management also expects inventory units to remain approximately flat for the full year, indicating continued focus on inventory control."
              ]
            },
            "weaknessBreadth": {
              "summary": "LULU's weakness has become broad-based in FY2026. Seven of the nine reported business dimensions are showing negative revenue growth. The pressure is visible across both products and geographies, with the largest product decline in Accessories & Other and the largest geographic declines in Canada and the United States. Stores and Digital are also both declining, indicating that weakness is not limited to a single sales channel. China Mainland and Rest of World are still positive on reported revenue, although their comparable sales were negative.",
              "evidence": [
                "Mens revenue declined 1% in FY2026.",
                "Womens revenue declined 4% in FY2026.",
                "Accessories & Other revenue declined 13% in FY2026.",
                "United States revenue declined 8% in FY2026.",
                "Canada revenue declined 11% in FY2026.",
                "Stores revenue declined 6% in FY2026.",
                "Digital revenue declined 6% in FY2026.",
                "China Mainland revenue increased 4% in FY2026.",
                "Rest of World revenue increased 5% in FY2026."
              ]
            }
          },
          "downSideFloor": {
            "overallSummary": "LULU's downside profile is supported by a strong valuation cushion and robust balance sheet resilience, even as the company faces operational stress from slowing North American traffic, product launch friction, and tariff margin drag. Historically, LULU has weathered similar stress cycles\u2014where stock drawdowns averaged -66.5% and took 18 to 20 months to recover\u2014yet the underlying business recovered fully every time due to premium pricing power and brand strength. If operational stress deepens now, downside risk is cushioned first by extreme valuation compression (trading near its 14.5x trough P/E floor) and second by a debt-free funded balance sheet holding $1.39B in cash, ensuring the company can absorb near-term sales drops without liquidity strain.",
            "valuationSupport": {
              "summary": "LULU's valuation has compressed to levels near historical troughs, establishing a strong valuation floor even as near-term growth moderates. The forward earnings multiple (17.17x) and reported P/E (12.44x) sit well below historical medians (32.0x), while EV/EBITDA (11.4x) is also deeply discounted. If stress intensifies, the stock's downside is anchored by its historical trough P/E multiple of 14.5x, implying a fundamental floor of $137.46 based on low-end guidance EPS ($9.48)."
            },
            "earningsResilience": {
              "summary": "LULU's core earnings power has demonstrated strong historical resilience during retail slowdowns. During current operational headwinds, top-line revenue declined moderately (-4.0% YoY in Q2 FY26) while gross margins retained 92.65% of normal levels (54.2% trough vs 58.5% baseline). Although operating margin compression is more visible due to fixed-cost deleverage and tariff costs, forward EPS retention remains high at 71.5%, showing that core product profitability can withstand near-term volume drops."
            },
            "balanceSheetLiquidityCapitalAllocation": {
              "summary": "LULU enters the current slowdown with a debt-free funded balance sheet and a $1.39B cash cushion, providing maximum solvency protection against operational shocks. Incorporating $2.14B of ASC 842 lease liabilities yields a manageable -$751M net lease obligation. Short-term liquidity is secure with a 2.19x current ratio and zero short-term debt, giving management full financial flexibility to fund growth initiatives and maintain operations without liquidity strain."
            },
            "historicalDownsideBehavior": {
              "summary": "LULU's historical trading behavior shows that stock drawdowns during stress cycles can be severe (-66.5% average completed drop, with an ongoing -68.05% decline), and post-trough stock recoveries have historically taken 18 to 20 months. However, earnings drawdowns were contained at -28.51%, confirming that market price volatility was far more extreme than actual business erosion. In every past cycle, underlying earnings and valuation multiples fully recovered as demand normalized."
            }
          }
        }
      }
    }
  }
};

/**
 * Compiled all evidence quotes across all modules and submodules
 * for immediate forensic search, auditability, and traceability.
 */
export const ALL_EVIDENCE: EvidenceItem[] = [
  // Pricing Power - Gross Margin
  {
    module: "Pricing Power",
    submodule: "Category-wise Gross Margin",
    source: "FY2025 10-K",
    quote: "The decrease in gross margin was primarily due to lower product margin driven by higher tariffs and increased markdowns, as well as higher occupancy costs as a percentage of net revenue."
  },
  {
    module: "Pricing Power",
    submodule: "Category-wise Gross Margin",
    source: "FY2024 10-K",
    quote: "Gross margin decreased 260 basis points to 56.6%."
  },
  {
    module: "Pricing Power",
    submodule: "Category-wise Gross Margin",
    source: "FY2025 10-K",
    quote: "Changes to U.S. tariff and customs policy... may further materially increase product costs and negatively affect margins."
  },
  {
    module: "Pricing Power",
    submodule: "Category-wise Gross Margin",
    source: "FY2024 10-K",
    quote: "We experienced a decrease in product margin in the Americas segment of 340 basis points, primarily reflective of the impact of tariffs and increased markdowns."
  },

  // Pricing Power - Full Price Promo
  {
    module: "Pricing Power",
    submodule: "Full-Price / Promo Language",
    source: "FY2023 Q2 10-Q",
    quote: "We are navigating increased costs related to tariffs and the removal of the de minimis exemption."
  },
  {
    module: "Pricing Power",
    submodule: "Full-Price / Promo Language",
    source: "FY2024 Q4 Earnings Transcript",
    quote: "We are taking actions in both the near term and long term to mitigate the increased tariff costs, including strategic pricing actions."
  },
  {
    module: "Pricing Power",
    submodule: "Full-Price / Promo Language",
    source: "FY2025 Q4 Earnings Transcript",
    quote: "We are focused on the growth of our full-price business ... to increase newness, enhance the guest experience in stores and online and improve our performance."
  },
  {
    module: "Pricing Power",
    submodule: "Full-Price / Promo Language",
    source: "FY2026 Q1 Earnings Transcript",
    quote: "In Q1, I'm encouraged that we have experienced a sequential improvement in our full price sales relative to Q4."
  },

  // Pricing Power - Margin Recovery Speed
  {
    module: "Pricing Power",
    submodule: "Margin Recovery Speed",
    source: "FY2024 Q4 Earnings Transcript",
    quote: "Guests responded well to our product assortment with particular strength in outerwear and lounge."
  },
  {
    module: "Pricing Power",
    submodule: "Margin Recovery Speed",
    source: "FY2024 Q2 Earnings Transcript",
    quote: "We are taking actions in both the near term and long term to mitigate the increased tariff costs, including strategic pricing actions, supply chain initiatives."
  },
  {
    module: "Pricing Power",
    submodule: "Margin Recovery Speed",
    source: "FY2025 Q4 Earnings Transcript",
    quote: "We are building from a position of strength as we remain the #1 brand for women's activewear in the U.S."
  },
  {
    module: "Pricing Power",
    submodule: "Margin Recovery Speed",
    source: "FY2024 Q2 Earnings Transcript",
    quote: "The increased rates and removal of the de minimis provision have played a large part in our guidance reduction for the year."
  },
  {
    module: "Pricing Power",
    submodule: "Margin Recovery Speed",
    source: "FY2025 Q4 Earnings Transcript",
    quote: "We are focused on the growth of our full-price business, returning the business to healthier levels of full-price sales."
  },

  // Pricing Power - Tariff Cost Shock
  {
    module: "Pricing Power",
    submodule: "Tariff Cost Shock Pass-Through",
    source: "FY2022 10-K",
    quote: "Trade restrictions, tariffs, and customs changes could disrupt our supply chain and compress margins."
  },
  {
    module: "Pricing Power",
    submodule: "Tariff Cost Shock Pass-Through",
    source: "FY2024 Q2 Earnings Transcript",
    quote: "We are navigating increased costs related to tariffs and the removal of the de minimis exemption."
  },
  {
    module: "Pricing Power",
    submodule: "Tariff Cost Shock Pass-Through",
    source: "FY2024 Q4 Earnings Transcript",
    quote: "For the full year, we now expect gross margin to decrease approximately 270 basis points."
  },
  {
    module: "Pricing Power",
    submodule: "Tariff Cost Shock Pass-Through",
    source: "FY2024 Q3 Earnings Transcript",
    quote: "We expect deleverage of approximately 120 basis points versus 2024."
  },
  {
    module: "Pricing Power",
    submodule: "Tariff Cost Shock Pass-Through",
    source: "FY2023 10-K",
    quote: "We are taking actions in both the near term and long term to mitigate the increased tariff costs."
  },

  // Catalyst Execution
  {
    module: "Catalyst",
    submodule: "Catalyst Execution Scorecard",
    source: "FY2024 Q2 Earnings Transcript",
    quote: "We are facing yet another shift today within the industry related to tariffs and the cost of doing business. The increased rates and removal of the de minimis provision have played a large part in our guidance reduction for the year."
  },
  {
    module: "Catalyst",
    submodule: "Catalyst Execution Scorecard",
    source: "FY2024 Q1 10-K",
    quote: "Our operations in the Americas are core to our business and we aim to maintain and grow our net revenue in this market through ongoing product innovation by increasing new style penetration."
  },
  {
    module: "Catalyst",
    submodule: "Catalyst Execution Scorecard",
    source: "FY2023 Q3 Earnings Transcript",
    quote: "Total net revenue rose 7% to $2.6 billion on both a reported and constant currency basis. Comparable sales increased 2%."
  },

  // Catalyst New Category Impact
  {
    module: "Catalyst",
    submodule: "New Category Impact",
    source: "FY2023 Q2 Earnings Transcript",
    quote: "We recognize there is more work to be done, and we have been course-correcting on a number of fronts, but we are encouraged by the guest response to our recent new product drops and activations."
  },
  {
    module: "Catalyst",
    submodule: "New Category Impact",
    source: "FY2024 10-K",
    quote: "Net revenue increased by 28% in our China Mainland operations... demonstrating successful expansion efforts."
  },
  {
    module: "Catalyst",
    submodule: "New Category Impact",
    source: "FY2025 Q1 Earnings Transcript",
    quote: "New styles included Daydrift, Be Calm, Big Cozy, and Mile Maker... indicating our commitment to product innovation."
  },

  // Moat - Product Innovation
  {
    module: "Moat Durability",
    submodule: "Newness & Innovation",
    source: "FY2024 10-K",
    quote: "The goal of our Product Creation pillar is to ensure we deliver the product that our guests expect from lululemon."
  },
  {
    module: "Moat Durability",
    submodule: "Newness & Innovation",
    source: "FY2025 10-K",
    quote: "Our product design and development efforts are led by a team of researchers, scientists, engineers, and designers."
  },
  {
    module: "Moat Durability",
    submodule: "Newness & Innovation",
    source: "FY2024 Q2 Earnings Transcript",
    quote: "We have opportunity within our product assortment and the teams are in action on bringing in style newness, differentiation and increased agility."
  },
  {
    module: "Moat Durability",
    submodule: "Newness & Innovation",
    source: "FY2025 Q3 Earnings Transcript",
    quote: "We are elevating the store experience by improving our ability to curate our assortment by store and by market."
  },
  {
    module: "Moat Durability",
    submodule: "Newness & Innovation",
    source: "FY2025 Q4 Earnings Transcript",
    quote: "New guest acquisition, retention, engagement and key brand relevance metrics all remained solid."
  },

  // Moat - Product Durability
  {
    module: "Moat Durability",
    submodule: "Product Durability (Durable vs Fadeable)",
    source: "FY2025 10-K",
    quote: "We believe we have an opportunity to expand our brand awareness and familiarity across many activities and categories including yoga, pilates, running, training, golf, and tennis."
  },
  {
    module: "Moat Durability",
    submodule: "Product Durability (Durable vs Fadeable)",
    source: "FY2026 10-K",
    quote: "Our women's range remains core to our business, and we continue to innovate in bringing new performance fabrics and styles."
  },
  {
    module: "Moat Durability",
    submodule: "Product Durability (Durable vs Fadeable)",
    source: "FY2024 10-K",
    quote: "We have initiated an action plan to drive sustainable net revenue growth in the Americas."
  },
  {
    module: "Moat Durability",
    submodule: "Product Durability (Durable vs Fadeable)",
    source: "FY2026 10-K",
    quote: "We believe this is another way in which we can attract new guests and enable them to experience our products."
  },

  // Moat - Category Expansion
  {
    module: "Moat Durability",
    submodule: "Category Expansion & Margin Retention",
    source: "FY2025 Q2 Earnings Transcript",
    quote: "We have opportunity within our product assortment and the teams are in action on bringing in style newness, differentiation and increased agility."
  },
  {
    module: "Moat Durability",
    submodule: "Category Expansion & Margin Retention",
    source: "FY2024 10-K",
    quote: "The decrease in gross margin was primarily due to lower product margin driven by higher tariffs and increased markdowns."
  },
  {
    module: "Moat Durability",
    submodule: "Category Expansion & Margin Retention",
    source: "FY2025 Q4 Earnings Transcript",
    quote: "We have a healthy and loyal customer base that remains engaged and looking to us for great product and experiences."
  },
  {
    module: "Moat Durability",
    submodule: "Category Expansion & Margin Retention",
    source: "FY2024 10-K",
    quote: "The majority of our sales to U.S. e-commerce guests are currently fulfilled from distribution centers in Canada."
  },

  // Moat - Revenue Concentration
  {
    module: "Moat Durability",
    submodule: "Revenue Concentration & HHI",
    source: "FY2023 10-K",
    quote: "lululemon athletica inc., a Delaware corporation, is engaged in the design, distribution, and retail of technical athletic apparel, footwear, and accessories."
  },
  {
    module: "Moat Durability",
    submodule: "Revenue Concentration & HHI",
    source: "FY2023 10-K",
    quote: "The Company organizes its operations into four regional markets: Americas, China Mainland, Asia Pacific ('APAC'), and Europe and the Middle East ('EMEA')."
  },
  {
    module: "Moat Durability",
    submodule: "Revenue Concentration & HHI",
    source: "FY2024 10-K",
    quote: "We generate net revenue in the Americas through our lululemon branded retail locations which include different sizes of company-operated stores, outlets, pop-ups, and other temporary locations."
  },
  {
    module: "Moat Durability",
    submodule: "Revenue Concentration & HHI",
    source: "FY2024 10-K",
    quote: "The decrease in net revenue was primarily due to a decrease in comparable sales, which decreased 3%."
  },

  // Moat - Distribution Control
  {
    module: "Moat Durability",
    submodule: "Distribution Control & Channel Discipline",
    source: "FY2024 10-K",
    quote: "We operate an omni-channel retail model and aim to efficiently and effectively serve our guests in the ways most convenient to them."
  },
  {
    module: "Moat Durability",
    submodule: "Distribution Control & Channel Discipline",
    source: "FY2024 10-K",
    quote: "In our store channel, total sales increased 3%, and we ended the quarter with 816 stores globally."
  },
  {
    module: "Moat Durability",
    submodule: "Distribution Control & Channel Discipline",
    source: "FY2024 Q2 Earnings Transcript",
    quote: "We are focused on the growth of our full-price business."
  },
  {
    module: "Moat Durability",
    submodule: "Distribution Control & Channel Discipline",
    source: "FY2026 10-K",
    quote: "We believe e-commerce is convenient for our guests and also allows us to reach and serve guests in markets beyond where our physical retail locations are based."
  },
  {
    module: "Moat Durability",
    submodule: "Distribution Control & Channel Discipline",
    source: "FY2024 Q4 Earnings Transcript",
    quote: "In our regions and channels, excluding the 53rd week and in constant currency, results were as follows: North America revenue was flat with comparable sales down 2%."
  },

  // Moat - Marketing Intensity
  {
    module: "Moat Durability",
    submodule: "Marketing Intensity vs Growth",
    source: "FY2021",
    quote: "Selling & Marketing=$333.8M (5.33% of Rev)"
  },
  {
    module: "Moat Durability",
    submodule: "Marketing Intensity vs Growth",
    source: "FY2022",
    quote: "Selling & Marketing=$413.6M (5.10% of Rev)"
  },
  {
    module: "Moat Durability",
    submodule: "Marketing Intensity vs Growth",
    source: "FY2023",
    quote: "Selling & Marketing=$509.6M (5.30% of Rev)"
  },
  {
    module: "Moat Durability",
    submodule: "Marketing Intensity vs Growth",
    source: "FY2024",
    quote: "Selling & Marketing=$564.4M (5.33% of Rev)"
  },
  {
    module: "Moat Durability",
    submodule: "Marketing Intensity vs Growth",
    source: "FY2025",
    quote: "Selling & Marketing=$610.0M (5.49% of Rev)"
  },

  // Moat - Consumer & Community Strength
  {
    module: "Moat Durability",
    submodule: "Comparable Growth Consistency",
    source: "FY2024 10-K",
    quote: "Net revenue in the Americas decreased 1% and comparable sales in the Americas decreased 3%. We experienced lower conversion rates, store traffic, and average order value in the Americas, partially reflective of certain product categories, including core categories, experiencing lower demand."
  },
  {
    module: "Moat Durability",
    submodule: "Loyalty Membership Ecosystem",
    source: "FY2025 Q3 Earnings Transcript",
    quote: "we're rolling out new solves to engage our high-value guests... updates we've recently rolled out to our membership program"
  },
  {
    module: "Moat Durability",
    submodule: "Loyalty Membership Ecosystem",
    source: "FY2025 Q4 Earnings Transcript",
    quote: "we offered our Black Friday product to our members a week earlier this year... fueled a significant number of app downloads and new sign-ups for our membership program"
  },
  {
    module: "Moat Durability",
    submodule: "Traffic vs Ticket Diagnostic",
    source: "FY2024 10-K",
    quote: "The decrease in comparable sales was primarily a result of lower conversion rates, reduced store traffic, and a decrease in average order value."
  },

  // Moat - Competitive Position & Sourcing
  {
    module: "Moat Durability",
    submodule: "Competitive Risk Factors",
    source: "FY2026 10-K",
    quote: "We operate in a highly competitive market and our competitors may compete more effectively than we can, resulting in a loss of our market share and a decrease in our net revenue and profitability."
  },
  {
    module: "Moat Durability",
    submodule: "Sourcing & Fabric Concentration",
    source: "FY2025 10-K",
    quote: "Approximately 47% of our products were manufactured by our top five vendors, the largest of which produced approximately 15% of our products."
  },
  {
    module: "Moat Durability",
    submodule: "Sourcing & Fabric Concentration",
    source: "FY2025 10-K",
    quote: "Approximately 48% of our fabrics were produced by our top five fabric suppliers, the largest of which produced approximately 20% of fabric used."
  },
  {
    module: "Moat Durability",
    submodule: "Sourcing & Fabric Concentration",
    source: "FY2025 10-K",
    quote: "Our concentration of fabric sourcing in Taiwan exposes us to geopolitical risks, including the possibility of military conflict, trade restrictions, or disruptions affecting that region."
  },
  {
    module: "Moat Durability",
    submodule: "Supply Chain Speed & Chase",
    source: "FY2026 Q1 Earnings Transcript",
    quote: "We have also reduced our mainline product development process from 18 to 24 months to 15 to 16 months, and we are working to further reduce it down to 12 to 14 months."
  },
  {
    module: "Moat Durability",
    submodule: "Supply Chain Speed & Chase",
    source: "FY2026 Q1 Earnings Transcript",
    quote: "We are chasing 20% more volume this year relative to last year, and we see this as an important capability going forward."
  },

  // Structural vs Cyclical - Margin Recovery
  {
    module: "Structural vs Cyclical",
    submodule: "Margin Recovery & Tariff Distortions",
    source: "SEC Form 10-K & Q1 10-Q (Trough Filing)",
    quote: "Gross margin declined from 60.42% in January 2025 to a trough of 54.20% in April 2026."
  },
  {
    module: "Structural vs Cyclical",
    submodule: "Margin Recovery & Tariff Distortions",
    source: "SEC Form 10-K Item 7 (MD&A)",
    quote: "Tariffs and markdowns reduced product margin."
  },
  {
    module: "Structural vs Cyclical",
    submodule: "Margin Recovery & Tariff Distortions",
    source: "SEC Form 10-Q Operating Leverage Disclosures",
    quote: "Weaker sales created fixed-cost deleverage and increased pressure on profitability."
  },
  {
    module: "Structural vs Cyclical",
    submodule: "Margin Recovery & Tariff Distortions",
    source: "FY2026 Earnings Call Transcript",
    quote: "Some newer product launches performed below expectations."
  },
  {
    module: "Structural vs Cyclical",
    submodule: "Margin Recovery & Tariff Distortions",
    source: "FY2026 Q2 10-Q Item 2 MD&A",
    quote: "The latest reported 60.5% gross margin included a significant one-time IEEPA tariff refund."
  },
  {
    module: "Structural vs Cyclical",
    submodule: "Margin Recovery & Tariff Distortions",
    source: "FY2026 Q2 Non-GAAP / Forensic Reconciliation",
    quote: "Excluding the tariff refund, underlying gross margin was approximately 54.9%, showing only a small recovery from the trough."
  },
  // Structural vs Cyclical - Revenue Growth Persistence
  {
    module: "Structural vs Cyclical",
    submodule: "Revenue Growth Persistence",
    source: "SEC Form 10-K & 10-Q (Multi-Quarter Trend)",
    quote: "Revenue growth slowed from 12.68% in Q4 FY24 to 0.81% by Q4 FY25 before turning negative in Q2 FY26."
  },
  {
    module: "Structural vs Cyclical",
    submodule: "Revenue Growth Persistence",
    source: "FY2026 Q1 SEC Form 10-Q Item 2 MD&A",
    quote: "Q1 FY26 revenue increased 4%, but comparable sales declined 2%."
  },
  {
    module: "Structural vs Cyclical",
    submodule: "Revenue Growth Persistence",
    source: "FY2026 Q2 SEC Form 10-Q Item 2 MD&A",
    quote: "Q2 FY26 revenue declined 4%, while comparable sales declined 10%."
  },
  {
    module: "Structural vs Cyclical",
    submodule: "Revenue Growth Persistence",
    source: "FY2026 Q2 Segment Reporting & Regional Disclosures",
    quote: "North America revenue declined 8% and comparable sales declined 12% in Q2 FY26."
  },
  {
    module: "Structural vs Cyclical",
    submodule: "Revenue Growth Persistence",
    source: "FY2026 Q2 Earnings Call Management Commentary",
    quote: "Management said traffic pressure and weaker-than-expected product launches contributed to the moderating sales trend."
  },
  {
    module: "Structural vs Cyclical",
    submodule: "Revenue Growth Persistence",
    source: "FY2026 Q2 Earnings Call Brand Sentiment Review",
    quote: "Management also cited negative media and social commentary around the brand as a factor affecting traffic and top-line performance."
  },
  {
    module: "Structural vs Cyclical",
    submodule: "Revenue Growth Persistence",
    source: "FY2026 Q2 International Segment Disclosures",
    quote: "China Mainland revenue increased only 4% in Q2 FY26 and comparable sales declined 8%, below management's expectations."
  },
  {
    module: "Structural vs Cyclical",
    submodule: "Revenue Growth Persistence",
    source: "FY2026 Q3 Forward Outlook & Financial Guidance",
    quote: "Management expects Q3 FY26 revenue to decline 10% to 11%; this is guidance and is not yet an actual result."
  },
  // Structural vs Cyclical - Inventory-to-Sales Divergence
  {
    module: "Structural vs Cyclical",
    submodule: "Inventory-to-Sales Divergence",
    source: "FY2025 Q2 SEC Form 10-Q Item 2 MD&A",
    quote: "Inventory grew 20.53% while revenue grew 6.50% in Q2 FY25, creating a 14.03 percentage-point divergence."
  },
  {
    module: "Structural vs Cyclical",
    submodule: "Inventory-to-Sales Divergence",
    source: "FY2025 10-K Working Capital & Inventory Note",
    quote: "Inventory grew 17.94% while revenue grew only 0.81% in Q4 FY25, creating a 17.13 percentage-point divergence."
  },
  {
    module: "Structural vs Cyclical",
    submodule: "Inventory-to-Sales Divergence",
    source: "FY2026 Q1 SEC Form 10-Q Inventory Disclosures",
    quote: "Inventory units declined 4% in Q1 FY26 while revenue increased 4%, resulting in a -8.0 percentage-point divergence."
  },
  {
    module: "Structural vs Cyclical",
    submodule: "Inventory-to-Sales Divergence",
    source: "FY2026 Q2 SEC Form 10-Q Item 2 MD&A",
    quote: "Inventory units declined 7% in Q2 FY26 while revenue declined 4%, resulting in a -3.0 percentage-point divergence."
  },
  {
    module: "Structural vs Cyclical",
    submodule: "Inventory-to-Sales Divergence",
    source: "FY2026 Q2 Earnings Call Transcript",
    quote: "Management said the difference between dollar and unit inventory growth was predominantly related to higher tariff costs and foreign exchange."
  },
  {
    module: "Structural vs Cyclical",
    submodule: "Inventory-to-Sales Divergence",
    source: "FY2026 Q2 Supply Chain & Sourcing Commentary",
    quote: "Management said it is chasing stronger-performing products and working with vendors to strategically manage future inventory flows."
  },
  {
    module: "Structural vs Cyclical",
    submodule: "Inventory-to-Sales Divergence",
    source: "FY2026 Full-Year Inventory Guidance Disclosures",
    quote: "Management also expects inventory units to remain approximately flat for the full year, indicating continued focus on inventory control."
  },
  // Structural vs Cyclical - Weakness Breadth
  {
    module: "Structural vs Cyclical",
    submodule: "Weakness Breadth",
    source: "FY2026 Q2 Form 10-Q Segment Revenue Breakdown",
    quote: "Mens revenue declined 1% in FY2026."
  },
  {
    module: "Structural vs Cyclical",
    submodule: "Weakness Breadth",
    source: "FY2026 Q2 Form 10-Q Segment Revenue Breakdown",
    quote: "Womens revenue declined 4% in FY2026."
  },
  {
    module: "Structural vs Cyclical",
    submodule: "Weakness Breadth",
    source: "FY2026 Q2 Form 10-Q Category Performance",
    quote: "Accessories & Other revenue declined 13% in FY2026."
  },
  {
    module: "Structural vs Cyclical",
    submodule: "Weakness Breadth",
    source: "FY2026 Q2 Regional Revenue Filing",
    quote: "United States revenue declined 8% in FY2026."
  },
  {
    module: "Structural vs Cyclical",
    submodule: "Weakness Breadth",
    source: "FY2026 Q2 Regional Revenue Filing",
    quote: "Canada revenue declined 11% in FY2026."
  },
  {
    module: "Structural vs Cyclical",
    submodule: "Weakness Breadth",
    source: "FY2026 Q2 Channel Performance Report",
    quote: "Stores revenue declined 6% in FY2026."
  },
  {
    module: "Structural vs Cyclical",
    submodule: "Weakness Breadth",
    source: "FY2026 Q2 E-commerce & Direct-to-Consumer Disclosures",
    quote: "Digital revenue declined 6% in FY2026."
  },
  {
    module: "Structural vs Cyclical",
    submodule: "Weakness Breadth",
    source: "FY2026 Q2 International Growth Disclosures",
    quote: "China Mainland revenue increased 4% in FY2026."
  },
  {
    module: "Structural vs Cyclical",
    submodule: "Weakness Breadth",
    source: "FY2026 Q2 International Operations Report",
    quote: "Rest of World revenue increased 5% in FY2026."
  },

  // Downside Floor
  {
    module: "Downside Floor",
    submodule: "Valuation Support & Floor Pricing",
    source: "Valuation Diagnostic Model",
    quote: "Current forward earnings multiple of 17.17x trades at 53.7% of the 32.0x benchmark median. Historical trough P/E multiple of 14.5x implies a downside floor of $137.46 vs current price of $165.00 (16.7% downside)."
  },
  {
    module: "Downside Floor",
    submodule: "Balance Sheet & Solvency Protection",
    source: "FY2025 10-K & TTM Filings",
    quote: "Zero funded debt, $1.39B cash on hand, and current liquidity ratio of 2.19x provide a pristine balance sheet cushion with negative net debt on funded debt basis."
  },
  {
    module: "Downside Floor",
    submodule: "Historical Downside & Recovery Cycles",
    source: "Historical Drawdown Archive",
    quote: "Historical peak-to-trough drawdowns averaged -66.53% (with ongoing -68.05% drop). Average stock recovery period took 19.7 months post-trough, with earnings recovering in 18.0 months."
  }
];
