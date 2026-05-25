export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'AIMortgageBrokerageOperationsAssistant', ownership: 'Accounts source capabilities and workflows', coverage: ['Accounts', 'Applications', 'Transactions'] },
  { name: 'AIMortgageBrokerageOperationsOperations', ownership: 'Applications source capabilities and workflows', coverage: ['Reviews', 'Approvals', 'Exceptions'] },
  { name: 'AIMortgageBrokerageOperationsAnalytics', ownership: 'Transactions source capabilities and workflows', coverage: ['Risk Scores', 'Statements', 'Compliance'] },
  { name: 'AIMortgageBrokerageOperationsWorkflow', ownership: 'Reviews source capabilities and workflows', coverage: ['Forecasts', 'Analytics', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Accounts', value: '84', note: 'Active' },
  { label: 'Applications', value: '61', note: 'Open' },
  { label: 'Transactions', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Accounts operating view', 'Applications operating view', 'Transactions operating view', 'Reviews operating view', 'Approvals operating view', 'Exceptions operating view', 'Risk Scores operating view', 'Statements operating view'];
export const workflowHighlights = ['Accounts workflow with records, approvals, audit, and reporting', 'Applications workflow with records, approvals, audit, and reporting', 'Transactions workflow with records, approvals, audit, and reporting', 'Reviews workflow with records, approvals, audit, and reporting', 'Approvals workflow with records, approvals, audit, and reporting'];
