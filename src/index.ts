import * as projectTypes from "./projectTypes"

interface ProtonPlugin {
    [key: string]: any
    project: projectTypes.Project
}

class ProtonPlugin {
    constructor(project: projectTypes.Project) {
        this.project = project
    }

    invoke(command: string, args: {[key: string]: any} | null) {
        const func = this[command]
        if (func) {
            let _args: any = args ? args : {}
            func(..._args)
        }
    }

    editor_saveProject() {}
    editor_addElement(element: projectTypes.ProjectElement) {}
    editor_deleteElement(elementUID: string) {}
}

export default ProtonPlugin
