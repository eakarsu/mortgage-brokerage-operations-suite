export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "ai-assistant",
    "label": "AI Assistant",
    "description": "Run source-derived AI assistant workflows and prompts.",
    "href": "/features/ai-tools",
    "sourceProjects": [
      "AIMortgageUnderwritingAssistant"
    ],
    "examples": [
      "client/src/main",
      "client/src/pages/AICenter",
      "client/src/pages/ApplicationDetail",
      "client/src/pages/Appraisals",
      "client/src/pages/BorrowerDetail",
      "client/src/pages/GapAgentic"
    ],
    "count": 1
  }
];
