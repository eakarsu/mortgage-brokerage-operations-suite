import type { FeatureContext, FeatureDefinition, PageDefinition } from '@/lib/unifiedApp';
import type { FeatureEntitySet } from '@/lib/featureEntities';
import type { FeatureSurface } from '@/lib/featureSurfaces';

export const sourceCustomFeatureCatalog: FeatureDefinition[] = [
  {
    "title": "AI Mortgage Underwriting Assistant Source Feature",
    "href": "/features/source-ai-mortgage-underwriting-assistant",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIMortgageUnderwritingAssistant: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "13 AI, prompt, tool, or workflow files captured"
    ]
  }
];

export const sourceCustomFeatureFamilies: Array<{ name: string; features: string[] }> = [
  {
    "name": "Source Project Features",
    "features": [
      "AI Mortgage Underwriting Assistant Source Feature"
    ]
  }
];

export const sourceCustomPageRegistry: Record<string, PageDefinition> = {
  "source-ai-mortgage-underwriting-assistant": {
    "title": "AI Mortgage Underwriting Assistant Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIMortgageUnderwritingAssistant, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIMortgageUnderwritingAssistant: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "13 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "13",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  }
};

export const sourceCustomFeatureContexts: Record<string, FeatureContext> = {
  "AI Mortgage Underwriting Assistant Source Feature": {
    "sourceOwners": [
      "AIMortgageUnderwritingAssistant"
    ],
    "operatingQueues": [
      "AI",
      "Appraisals",
      "Gap Appraisal",
      "Pipeline Bottleneck Agent"
    ],
    "outputs": [
      "AI Mortgage Underwriting Assistant merged workflow register",
      "AI Mortgage Underwriting Assistant API and route coverage map",
      "AI Mortgage Underwriting Assistant AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  }
};

export const sourceCustomFeatureSurfaceBySlug: Record<string, FeatureSurface> = {
  "source-ai-mortgage-underwriting-assistant": {
    "workItems": [
      {
        "id": "source-ai-mortgage-underwriting-assistant-work-1",
        "item": "AI",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/ai.js"
      },
      {
        "id": "source-ai-mortgage-underwriting-assistant-work-2",
        "item": "Appraisals",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/appraisals.js"
      },
      {
        "id": "source-ai-mortgage-underwriting-assistant-work-3",
        "item": "Gap Appraisal",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/gap-appraisal.js"
      },
      {
        "id": "source-ai-mortgage-underwriting-assistant-work-4",
        "item": "Pipeline Bottleneck Agent",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/pipeline-bottleneck-agent.js"
      },
      {
        "id": "source-ai-mortgage-underwriting-assistant-work-5",
        "item": "Tailwind.Config",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for client/tailwind.config.js"
      },
      {
        "id": "source-ai-mortgage-underwriting-assistant-work-6",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for client/src/main.jsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-mortgage-underwriting-assistant-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-mortgage-underwriting-assistant-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-mortgage-underwriting-assistant-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-mortgage-underwriting-assistant-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-mortgage-underwriting-assistant-log-1",
        "message": "Deep-merge feature generated from AIMortgageUnderwritingAssistant",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-mortgage-underwriting-assistant-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  }
};

export const sourceCustomFeatureEntitiesBySlug: Record<string, FeatureEntitySet> = {
  "source-ai-mortgage-underwriting-assistant": {
    "title": "AI Mortgage Underwriting Assistant Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-mortgage-underwriting-assistant-entity-1",
        "name": "AI",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-mortgage-underwriting-assistant-entity-2",
        "name": "Appraisals",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-mortgage-underwriting-assistant-entity-3",
        "name": "Gap Appraisal",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-mortgage-underwriting-assistant-entity-4",
        "name": "Pipeline Bottleneck Agent",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-mortgage-underwriting-assistant-entity-5",
        "name": "Tailwind.Config",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  }
};

export const sourceCustomFeatureLinksByProject: Record<string, string> = {
  "AIMortgageUnderwritingAssistant": "/features/source-ai-mortgage-underwriting-assistant"
};
