interface Project {
    elements: {
        [key: string]: ProjectElement
    }
    name: string
    id: string
    scripts: {
        [key: string]: any
    }
}

interface ProjectElement {
    uid: string
    properties: ElementProperties
    name: string
    render(): any,
    elementID: string
}

interface ElementProperty {
    value: any
    name: string
    uid: string
    editable: boolean
}

interface ElementProperties {
    properties: {
        [key: string]: ElementProperty
    }
}

interface ProjectScript {
    name: string
    contents: string
    uid: string
}

export {
    ProjectElement,
    ElementProperty,
    ElementProperties,
    ProjectScript,
    Project
}