/**
 * Data Engineer Handlers
 *
 * Handlers for database and data management
 */

export {
  dataEngineerHandlers,
  handleCreateSchema,
  handleOptimizeQuery,
  handleCreateMigration,
  handleAuditDatabase,
  handleImplementRls,
  type SchemaResult,
  type QueryOptimizationResult,
  type MigrationResult,
  type DatabaseAuditResult,
  type RlsResult,
} from './schema-handlers'
