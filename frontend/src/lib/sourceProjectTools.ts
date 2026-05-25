export const sourceProjectTools = [
  {
    "id": "ai-mortgage-underwriting-assistant-source-workflow",
    "title": "AI Mortgage Underwriting Assistant Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIMortgageUnderwritingAssistant.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIMortgageUnderwritingAssistant to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Mortgage Underwriting Assistant source context",
    "outputLabel": "AI Mortgage Underwriting Assistant source analysis",
    "signals": [
      "server/routes/ai",
      "server/routes/appraisals",
      "server/routes/gap-appraisal",
      "server/routes/pipeline-bottleneck-agent",
      "client/tailwind.config",
      "client/src/main",
      "client/src/pages/AICenter",
      "client/src/pages/ApplicationDetail"
    ]
  },
  {
    "id": "ai-mortgage-underwriting-assistant-ai-tools",
    "title": "AI Mortgage Underwriting Assistant AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIMortgageUnderwritingAssistant.",
    "defaultPrompt": "Review AIMortgageUnderwritingAssistant AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Mortgage Underwriting Assistant AI prompt or tool context",
    "outputLabel": "AI Mortgage Underwriting Assistant AI tool response",
    "signals": [
      "server/routes/ai.js",
      "server/routes/appraisals.js",
      "server/routes/gap-appraisal.js",
      "server/routes/pipeline-bottleneck-agent.js",
      "client/tailwind.config.js",
      "client/src/main.jsx",
      "client/src/pages/AICenter.jsx",
      "client/src/pages/ApplicationDetail.jsx"
    ]
  },
  {
    "id": "ai-mortgage-underwriting-assistant-ai-j615h1-exact-ai",
    "title": "AI Mortgage Underwriting Assistant: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIMortgageUnderwritingAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Application Id",
      "Assets",
      "Borrower Id",
      "Employer Phone",
      "Interest Rate",
      "Loan Amount",
      "Loan Type",
      "Property Id"
    ]
  },
  {
    "id": "ai-mortgage-underwriting-assistant-pipeline-bottleneck-agent-1gt00o-exact-ai",
    "title": "AI Mortgage Underwriting Assistant: Pipeline Bottleneck Agent",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/pipeline-bottleneck-agent.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Pipeline Bottleneck Agent\" from AIMortgageUnderwritingAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Pipeline Bottleneck Agent donor inputs",
    "outputLabel": "Pipeline Bottleneck Agent AI response",
    "signals": [
      "server/routes/pipeline-bottleneck-agent.js"
    ]
  },
  {
    "id": "ai-mortgage-underwriting-assistant-ai-center-42pwwt-exact-ai",
    "title": "AI Mortgage Underwriting Assistant: AI Center",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AICenter.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Center\" from AIMortgageUnderwritingAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Center donor inputs",
    "outputLabel": "AI Center AI response",
    "signals": [
      "client/src/pages/AICenter.jsx"
    ]
  },
  {
    "id": "ai-mortgage-underwriting-assistant-borrower-detail-1h7tjf-exact-ai",
    "title": "AI Mortgage Underwriting Assistant: Borrower Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/BorrowerDetail.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Borrower Detail\" from AIMortgageUnderwritingAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Borrower Detail donor inputs",
    "outputLabel": "Borrower Detail AI response",
    "signals": [
      "client/src/pages/BorrowerDetail.jsx"
    ]
  },
  {
    "id": "ai-mortgage-underwriting-assistant-gap-agentic-amr2uz-exact-ai",
    "title": "AI Mortgage Underwriting Assistant: Gap Agentic",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapAgentic.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Agentic\" from AIMortgageUnderwritingAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Agentic donor inputs",
    "outputLabel": "Gap Agentic AI response",
    "signals": [
      "client/src/pages/GapAgentic.jsx"
    ]
  },
  {
    "id": "ai-mortgage-underwriting-assistant-property-detail-sqlvs8-exact-ai",
    "title": "AI Mortgage Underwriting Assistant: Property Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/PropertyDetail.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Property Detail\" from AIMortgageUnderwritingAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Property Detail donor inputs",
    "outputLabel": "Property Detail AI response",
    "signals": [
      "client/src/pages/PropertyDetail.jsx"
    ]
  }
];
