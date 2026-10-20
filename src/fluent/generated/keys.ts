import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'bf575ced3c324c34968569185953f216'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '6d9ed6a8596943479e388701ccb7b151'
                    }
                    'src_server_business-rules_test-business-rule_ts': {
                        table: 'sys_module'
                        id: 'e2339b36013c48f199b6b5f29f347610'
                    }
                    'src_server_business-rules_test2-business-rule_ts': {
                        table: 'sys_module'
                        id: '4d1b86f57453496c86bb494a210ade9c'
                    }
                    'test-business-rule': {
                        table: 'sys_script'
                        id: '97b9a755d86d485d9a98028b0aba6fd9'
                    }
                    'test2-business-rule': {
                        table: 'sys_script'
                        id: '578aabd178144c29ac20fb26218c5f5a'
                    }
                }
            }
        }
    }
}
