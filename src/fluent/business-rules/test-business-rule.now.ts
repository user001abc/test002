import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { testBusinessRule } from '../../server/business-rules/test-business-rule'

export const TestBusinessRule = BusinessRule({
    $id: Now.ID['test-business-rule'],
    name: 'test_business_rule',
    table: 'task',
    when: 'before',
    action: ['insert', 'update'],
    order: 100,
    active: true,
    script: testBusinessRule,
})
