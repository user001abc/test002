import { gs, GlideRecord } from '@servicenow/glide'

export function test2BusinessRule(current: GlideRecord<'task'>, previous: GlideRecord<'task'>) {
    gs.info('test2_business_rule: numberX = ' + current.getValue('number'))
}
