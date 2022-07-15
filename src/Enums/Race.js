import Class from "./Class.js";

const Races = {
    "ORC": 3,
    "HUMAN": 2,
    "DWARF": 1,
    "ELF": 4,
    "DARK_ELF": 5
}

const getRaceNameById = (id) => {
    for(const [key,value] of Object.entries(Races)){
        if(value === parseInt(id)){
            return key
        }
    }
    return "NO-Race"
}

export {getRaceNameById}

export default Races