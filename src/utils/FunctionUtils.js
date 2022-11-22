//El property reference hace mención al valor a buscar es decir si quiero buscar por level_name, displayName, son las propiedades de los objetos
const searchReferenceId = (array, searchReference, propertyReference) => {
    const index = array.findIndex((nameReference, index) => {
        return nameReference[propertyReference] === searchReference
    })
    return index
}
const searchGrades = (array, filter) => {
    // console.log(array)
    filter = filter.toLowerCase()
    const filterLevelNames = array.filter((grade) => {
        // console.log(searchByGradeName(grade.grades, filter))
        // const levelNames = grade.level_name.toLowerCase().includes(filter)
        // return levelNames

        //remplazamos los valores de cada nivel por defecto por los que filtramos dos veces
        grade.grades = searchByGradeName(grade.grades, filter)
        return grade
    })
    return filterLevelNames
}

const searchByGradeName = (array, filter) => {
    // console.log(array)
    const filterGradeNames = array.filter((grade) => {
        const gradeNames = grade.grade_name.toLowerCase().includes(filter)
        return gradeNames
    })
    return filterGradeNames
}

const searchByTeacherName = (array, filter) => {
    // console.log(array)
    filter = filter.toLowerCase()
    const filterGradeNames = array.filter((docente) => {
        const gradeNames = docente.displayName.toLowerCase().includes(filter)
        return gradeNames
    })
    return filterGradeNames
}

const searchByStudentName = (array, filter) => {
    console.log(array)
    filter = filter.toLowerCase()
    const filterAlumnNames = array.filter((estudiante) => {
        const AlumnNames = estudiante.name.toLowerCase().includes(filter)
        return AlumnNames
    })
    return filterAlumnNames
}

const searchByStudentName2 = (array, filter) => {
    console.log(array)
    filter = filter.toLowerCase()
    const filterAlumnNames = array.filter((estudiante) => {
        const AlumnNames = estudiante.name_student.toLowerCase().includes(filter)
        return AlumnNames
    })
    return filterAlumnNames
}

const searchByStudentName3 = (array, filter) => {
    console.log(array)
    filter = filter.toLowerCase()
    const filterAlumnNames = array.filter((estudiante) => {
        const AlumnNames = estudiante.name_complete.toLowerCase().includes(filter)
        return AlumnNames
    })
    return filterAlumnNames
}

export { searchReferenceId, searchGrades, searchByTeacherName, searchByStudentName, searchByStudentName2, searchByStudentName3 }