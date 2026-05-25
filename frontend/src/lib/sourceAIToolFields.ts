export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "ai-mortgage-underwriting-assistant-ai-j615h1-exact-ai": [
    {
      "name": "application_id",
      "label": "Application Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "assets",
      "label": "Assets",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "borrower_id",
      "label": "Borrower Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "employer_phone",
      "label": "Employer Phone",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "interest_rate",
      "label": "Interest Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "loan_amount",
      "label": "Loan Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "loan_type",
      "label": "Loan Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "property_id",
      "label": "Property Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "property_state",
      "label": "Property State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "statements_summary",
      "label": "Statements Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "term_months",
      "label": "Term Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "title_notes",
      "label": "Title Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "voe_text",
      "label": "Voe Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    }
  ],
  "ai-mortgage-underwriting-assistant-pipeline-bottleneck-agent-1gt00o-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Pipeline Bottleneck Agent source input context",
      "options": [],
      "required": false,
      "source": "server/routes/pipeline-bottleneck-agent.js"
    }
  ],
  "ai-mortgage-underwriting-assistant-ai-center-42pwwt-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Center source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenter.jsx"
    }
  ],
  "ai-mortgage-underwriting-assistant-borrower-detail-1h7tjf-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Borrower Detail source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/BorrowerDetail.jsx"
    }
  ],
  "ai-mortgage-underwriting-assistant-gap-agentic-amr2uz-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Agentic source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapAgentic.jsx"
    }
  ],
  "ai-mortgage-underwriting-assistant-property-detail-sqlvs8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Property Detail source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/PropertyDetail.jsx"
    }
  ],
  "ai-mortgage-underwriting-assistant-source-workflow": [
    {
      "name": "application_id",
      "label": "Application Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "assets",
      "label": "Assets",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "borrower_id",
      "label": "Borrower Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "employer_phone",
      "label": "Employer Phone",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "interest_rate",
      "label": "Interest Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "loan_amount",
      "label": "Loan Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "loan_type",
      "label": "Loan Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "property_id",
      "label": "Property Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "property_state",
      "label": "Property State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "statements_summary",
      "label": "Statements Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "term_months",
      "label": "Term Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "title_notes",
      "label": "Title Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "voe_text",
      "label": "Voe Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Pipeline Bottleneck Agent source input context",
      "options": [],
      "required": false,
      "source": "server/routes/pipeline-bottleneck-agent.js"
    }
  ],
  "ai-mortgage-underwriting-assistant-ai-tools": [
    {
      "name": "application_id",
      "label": "Application Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "assets",
      "label": "Assets",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "borrower_id",
      "label": "Borrower Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "employer_phone",
      "label": "Employer Phone",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "interest_rate",
      "label": "Interest Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "loan_amount",
      "label": "Loan Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "loan_type",
      "label": "Loan Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "property_id",
      "label": "Property Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "property_state",
      "label": "Property State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "statements_summary",
      "label": "Statements Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "term_months",
      "label": "Term Months",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "title_notes",
      "label": "Title Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "voe_text",
      "label": "Voe Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Pipeline Bottleneck Agent source input context",
      "options": [],
      "required": false,
      "source": "server/routes/pipeline-bottleneck-agent.js"
    }
  ]
};
