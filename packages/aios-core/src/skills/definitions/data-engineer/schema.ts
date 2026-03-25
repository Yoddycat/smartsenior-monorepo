/**
 * Data Engineer Skills - Database Management
 *
 * Skills for schema design, optimization, and database operations
 */

import { defineDataEngineerSkill } from '../factory'
import { delegatedAuthority } from '../../authority'
import type { Skill } from '../../types'

/**
 * *create-schema - Create database schema
 */
export const createSchemaSkill: Skill = defineDataEngineerSkill({
  command: '*create-schema',
  name: 'Create Schema',
  description: 'Create detailed database schema (DDL) from architect design. Includes tables, indexes, constraints, and RLS policies.',
  dependsOn: ['architect:design-system'],
  canTrigger: ['data-engineer:create-migration'],
  aliases: ['*schema'],
  tags: ['database', 'schema', 'ddl'],
})

// Override authority to show delegation from architect
createSchemaSkill.authority = delegatedAuthority(
  'data-engineer',
  'architect',
  'Schema implementation delegated from architect'
)

/**
 * *optimize-query - Optimize database queries
 */
export const optimizeQuerySkill: Skill = defineDataEngineerSkill({
  command: '*optimize-query',
  name: 'Optimize Query',
  description: 'Analyze and optimize database queries. Suggests indexes, query rewrites, and execution plan improvements.',
  aliases: ['*query-optimize', '*optimize'],
  tags: ['database', 'optimization', 'performance'],
})

/**
 * *create-migration - Create database migration
 */
export const createMigrationSkill: Skill = defineDataEngineerSkill({
  command: '*create-migration',
  name: 'Create Migration',
  description: 'Create database migration script for schema changes. Handles up/down migrations safely.',
  dependsOn: ['data-engineer:create-schema'],
  aliases: ['*migration'],
  requiresConfirmation: true,
  tags: ['database', 'migration', 'schema'],
})

/**
 * *audit-database - Audit database for issues
 */
export const auditDatabaseSkill: Skill = defineDataEngineerSkill({
  command: '*audit-database',
  name: 'Audit Database',
  description: 'Comprehensive database audit checking schema issues, missing indexes, security gaps, and performance problems.',
  aliases: ['*db-audit'],
  tags: ['database', 'audit', 'security', 'brownfield'],
})

/**
 * *implement-rls - Implement Row Level Security
 */
export const implementRlsSkill: Skill = defineDataEngineerSkill({
  command: '*implement-rls',
  name: 'Implement RLS',
  description: 'Design and implement Row Level Security policies for multi-tenant or role-based data access.',
  aliases: ['*rls'],
  tags: ['database', 'security', 'rls'],
})

/**
 * All Data Engineer skills
 */
export const dataEngineerSkills: Skill[] = [
  createSchemaSkill,
  optimizeQuerySkill,
  createMigrationSkill,
  auditDatabaseSkill,
  implementRlsSkill,
]
