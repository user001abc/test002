import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { test2BusinessRule } from '../../server/business-rules/test2-business-rule'

export const Test2BusinessRule = BusinessRule({
    $id: Now.ID['test2-business-rule'],
    name: 'test2_business_rule',
    table: 'task',
    when: 'after',
    action: ['insert', 'update'],
    order: 100,
    active: true,
    script: test2BusinessRule,
})
