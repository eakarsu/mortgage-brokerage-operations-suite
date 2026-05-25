# Mortgage Brokerage Operations Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIMortgageBrokerageOperationsAssistant`
- `AIMortgageBrokerageOperationsOperations`
- `AIMortgageBrokerageOperationsAnalytics`
- `AIMortgageBrokerageOperationsWorkflow`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/mortgage-brokerage-operations-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:5530`

Seeded users:
- `admin@mortgage-brokerage-operations.local / admin123`
- `manager@mortgage-brokerage-operations.local / manager123`
- `analyst@mortgage-brokerage-operations.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/mortgage-brokerage-operations-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:5530 npm run smoke
```
