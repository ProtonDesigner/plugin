interface Setting {
    id: string
    type: "string" | "number"
    required?: boolean
    defaultValue?: any
}

interface ProtonConfig {
    settings: Array<Setting>
}

function defineConfig(config: ProtonConfig) {
    config.settings.map(setting => {
        if (setting.required && !setting.defaultValue) {
            throw Error(`Setting '${setting.id}' must have a \`defaultValue\` if \`required\` is set to \`true\`.`)
        }
    })
    
    return config
}

export { defineConfig }
