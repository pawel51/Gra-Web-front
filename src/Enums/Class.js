
const Class = {
    "ARCHER": 1,
    "WARRIOR": 2,
    "MAGE": 3
}

const getClassNameById = (id) => {
    for(const [key,value] of Object.entries(Class)){
        if(value === parseInt(id)){
            return key
        }
    }
    return "NO-CLASS"
}

const getClassIdByName = (name) => {
    for(const [key,value] of Object.entries(Class)){
        if(key === name){
            return value
        }
    }
}

export {getClassNameById}
export {getClassIdByName}
export default Class