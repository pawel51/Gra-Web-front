import { createSlice } from '@reduxjs/toolkit'

export const characterSlice = createSlice({
    name: 'character',
    initialState: {
        value: {

            basicData: {
                "img": "",
                "user": {
                    "id": 0
                },
                "race": {
                    "id": 0
                },
                "classes": {
                    "id": 0
                },
                "stats": {
                    "id": 0
                },
                "characterEquipment": {
                    "id": 0
                },
                "freePoints": 0
            },

            items: [
                {
                    "slotType": "",
                    "id": "",
                    "priceSell": 0,
                    "priceBuy": 0,
                    "imgRef": null,
                    "itemDefinition": {
                        "id": 0,
                        "name": "",
                        "rarity": 0,
                        "itemType": ""
                    },
                    "stats": {},
                    "slotNum": 7 // the same for each item dont use it
                }
            ],

            shop: [
                {
                    "slotType": "",
                    "id": "",
                    "priceSell": 0,
                    "priceBuy": 0,
                    "imgRef": null,
                    "itemDefinition": {
                        "id": 0,
                        "name": "",
                        "rarity": 0,
                        "itemType": ""
                    },
                    "stats": {},
                    "slotNum": 7 // the same for each item dont use it
                }
            ],

            img: "",
            classId: "ARCHER",
            raceId: "ORC",
            statsId: 0,
            stats: {

                "agility": 0,
                "armour": 0,
                "block_chance": 0.00,
                "crit_chance": 0.00,
                "crit_damage": 0,
                "damage": 0,
                "endurance": 0,
                "evasion_chance": 0.00,
                "exp": 0,
                "gold": 0,
                "health": 0,
                "intelligence": 0,
                "luck": 0,
                "speed": 0,
                "strength": 0

            },
            currentQuestId: -1
        }
    },
    reducers: {
        changeRace: (state, action) => {

            state.value.raceId = action.payload
        },
        changeClass: (state, action) => {
            state.value.classId = action.payload
        },
        changeImg: (state, action) => {
            state.value.img = action.payload
        },
        changeGold: (state, action) => {

            state.value.raceId = action.payload
        },
        changeExp: (state, action) => {
            state.value.classId = action.payload
        },
        changeFreePoints: (state, action) => {
            state.value.img = action.payload
        },
        changeStatsId: (state, action) => {
            state.value.statsId = action.payload
        },
        setAllStats: (state, action) => {
            state.value.stats = action.payload
        },
        setBasicData: (state, action) => {
            state.value.basicData = action.payload
        },
        setItems: (state, action) => {
            state.value.items = action.payload
        },
        setShop: (state, action) => {
            state.value.shop = action.payload
        },
        setBoughtItem: (state, action) => {
            const itemTypes = ["helmet", "armour", "hands", "boots", "wep1", "wep2"]
            state.value.shop[action.payload.id] = {
                "slotType": itemTypes[action.payload.id],
                "id": "",
                "priceSell": 0,
                "priceBuy": 0,
                "imgRef": null,
                "itemDefinition": {
                    "id": 0,
                    "name": "",
                    "rarity": 0,
                    "itemType": ""
                },
                "stats": {},
                "slotNum": 7 // the same for each item dont use it
            }
            action.payload.value.slotType = itemTypes[action.payload.id]
            state.value.items[action.payload.id] = action.payload.value
            // STATS OF ITEM STUP
            let tempStats = {}
            for(const [key,value] of Object.entries(state.value.items[action.payload.id].stats)){
                if(value === null || value === 0){
                    continue
                }
                // sumedItemStats.key += value
                tempStats[key] = value
            }

            state.value.items[action.payload.id].stats = tempStats;

        },
        deleteSoldItem: (state, action) => {
            const itemTypes = ["helmet", "armour", "hands", "boots", "wep1", "wep2"]
            state.value.items[action.payload] = {
                "slotType": itemTypes[action.payload],
                "id": "",
                "priceSell": 0,
                "priceBuy": 0,
                "imgRef": null,
                "itemDefinition": {
                    "id": 0,
                    "name": "",
                    "rarity": 0,
                    "itemType": ""
                },
                "stats": {},
                "slotNum": 7 // the same for each item dont use it
            }
        },


        increment: (state, action) =>{
            let stat = action.payload;
            if(state.value.basicData["freePoints"] === 0) return
            state.value.basicData["freePoints"] -= 1;
            state.value.stats[stat] += 1
        },
        decrement: (state, action) =>{
            let stat = action.payload;
            if(state.value.stats[stat] === 0) return;
            state.value.basicData["freePoints"] += 1;
            state.value.stats[stat] -= 1
        },
        add: (state, action) => {
            state.value[action.payload.key] += action.payload.value
        },
        subtract: (state, action) => {
            state.value[action.payload.key] -= action.payload.value
        },
        setCurrentQuestId: (state, action) => {
            state.value.currentQuestId = action.payload.id
        }


    },
})

// Action creators are generated for each case reducer function
export const {setBoughtItem, deleteSoldItem, setShop, setItems, setBasicData, setAllStats, changeRace, changeClass, changeImg, changeStatsId, increment, decrement, add, subtract, setCurrentQuestId} = characterSlice.actions

export const selectRaceId = (state) => state.character.value.raceId
export const selectClassId = (state) => state.character.value.classId
export const selectStatsId = (state) => state.character.value.statsId
export const selectBasicData = (state) => state.character.value.basicData
export const selectStats = (state) => state.character.value.stats
export const selectItems = (state) => state.character.value.items
export const selectShop = (state) => state.character.value.shop

// export const selectStrength = (state) => state.character.value.stats.strength
// export const selectIntelligence = (state) => state.character.value.stats.intelligence
// export const selectAgility = (state) => state.character.value.stats.agility
// export const selectEndurance = (state) => state.character.value.stats.endurance
// export const selectLuck = (state) => state.character.value.stats.luck
// export const selectGold = (state) => state.character.value["gold"]
// export const selectExp = (state) => state.character.value["exp"]
export const selectFreePoints = (state) => state.character.value.basicData.freePoints
// export const selectArmour = (state) => state.character.value["armour"]
export const selectCurrentQuestId = (state) => state.character.value.currentQuestId

export default characterSlice.reducer