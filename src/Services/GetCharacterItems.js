import axios from "axios";
import {ACCESS_TOKEN_NAME, API_BASE_URL} from "../constants/apiConstants.js";
import {setSumedItemStats} from '../Slices/characterSlice.js'




const getCharacterItems = (dispatch, action) => {
    const sumedItemStats = {
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
    }

    const config = {
        method: 'get',
        url: `${API_BASE_URL}/character/items`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN_NAME)}`,
            'Content-Type': 'application/json'
        }
    };



    axios(config)
        .then(response => {
            if(response.status === 200){
                let items = response.data
                const itemSlots = ['helm', 'armour', 'hands', 'boots', 'wep1', 'wep2']

                const emptyEq = itemSlots.map((v) => {
                    return {
                        "slotType": v,
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
                        "slotNum": 7, // the same for each item dont use it
                        "stats": {}
                    }
                })


                for(let item of items){
                    let itemStats = {}

                    // STATS OF ITEM STUP
                    for(const [key,value] of Object.entries(item.stats)){
                        if(value === null || value === 0){
                            continue
                        }
                        sumedItemStats.key += value
                        itemStats[key] = value
                    }

                    item.stats = itemStats;

                    // Starting items have no price :(
                    if(item.priceSell === "" || item.priceSell === 0 || item.priceSell === null)
                        item.priceSell = 0
                    if(item.priceBuy === "" || item.priceBuy === 0 || item.priceBuy === null)
                        item.priceBuy = 0

                    // POSITION IN EQ SETUP
                    if (item.itemDefinition.itemType === "sword" ||
                        item.itemDefinition.itemType === "staff" ||
                        item.itemDefinition.itemType === "bow")
                    {
                        item.slotType = "wep1"
                        emptyEq[4] = item;
                    }
                    else if (item.itemDefinition.itemType === "shield" ||
                        item.itemDefinition.itemType === "magic" ||
                        item.itemDefinition.itemType === "arrows")
                    {
                        item.slotType = "wep2"
                        emptyEq[5] = item
                    }
                    else if (item.itemDefinition.itemType === "helm"){
                        item.slotType = "helm"
                        emptyEq[0] = item
                    }
                    else if (item.itemDefinition.itemType === "hands"){
                        item.slotType = "hands"
                        emptyEq[2] = item
                    }
                    else if (item.itemDefinition.itemType === "armour"){
                        item.slotType = "armour"
                        emptyEq[1] = item
                    }
                    else if (item.itemDefinition.itemType === "boots"){
                        item.slotType = "boots"
                        emptyEq[3] = item
                    }
                }


                dispatch(action(emptyEq))
                // dispatch(action(setSumedItemStats))
            }

            else
                console.log(response.status)
        })
        .catch(function (error) {
            console.log(error);
        })

}

export {getCharacterItems}