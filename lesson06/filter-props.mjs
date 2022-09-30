
export function filterProperties (props, o) {
    if(!(props instanceof Array)) {
        throw "props argument should be an array"
    }

    const retObj = { }

    // for (let index = 0; index < props.length; index++) {
    //     let proName = props[index]
    //     if(o[proName] != undefined) {
    //         retObj[proName] = o[proName]
    //     }
    // }

    // props.forEach(
    //      propName => {
    //         if(o[propName] != undefined) {
    //             retObj[propName] = o[propName]
    //         }
    //     }
    // )

    props.filter(propName => o[propName] != undefined)
         .forEach(propName => retObj[propName] = o[propName])
    
    // Implement the same with reduce method
    

    return retObj
}

export function filterPropertiesN(propNames,objs) {
    return null;
}



