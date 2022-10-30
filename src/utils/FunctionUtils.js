//El property reference hace mención al valor a buscar es decir si quiero buscar por level_name, displayName, son las propiedades de los objetos
const searchReferenceId = (array, searchReference, propertyReference) => {
    const index = array.findIndex((nameReference, index) => {
        return nameReference[propertyReference] === searchReference
    })
    return index
}

export { searchReferenceId }