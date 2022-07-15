import React, {useEffect} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import CharacterEq from "../CharacterEq/CharacterEq.js";
import "./shop.css"
import "../../Styles/App.css"
import ShopItems from "./ShopItems.js";
import {getCharacterItems} from "../../Services/GetCharacterItems.js";
import {getShopItems} from "../../Services/GetShopItems.js";
import {
    selectItems,
    setItems,
    setShop,
    selectShop,
    deleteSoldItem,
    setBoughtItem,
    selectStats,
    selectBasicData, setAllStats
} from "../../Slices/characterSlice.js";
import {useDispatch, useSelector} from "react-redux";
import postBuyItem from "../../Services/PostBuyItem.js";
import postSellItem from "../../Services/PostSellItem.js";
import {getCharacterDetails} from "../../Services/GetCharacterDetails.js";
import NavigationBar from "../Navigation/NavigationBar.js";

const Shop = (props) => {

    const dispatch = useDispatch()
    const itemList = useSelector(selectItems)
    const stats = useSelector(selectStats)
    const basicData = useSelector(selectBasicData)
    const shopList = useSelector(selectShop)

    useEffect(() => {
        getCharacterItems(dispatch, setItems)
    },[dispatch] )

    useEffect(() => {
        getShopItems(dispatch, setShop)
    },[dispatch] )

    useEffect(() => {
        getCharacterDetails(basicData.stats.id, dispatch, setAllStats)
    }, [])

    function sellItem(e) {
        let type = e.target.id

        switch (type){
            case "helmet":
                postSellItem(itemList[0].id, 0, dispatch, deleteSoldItem)
                break
            case "armour":
                postSellItem(itemList[1].id, 1, dispatch, deleteSoldItem)
                break
            case "hands":
                postSellItem(itemList[2].id, 2, dispatch, deleteSoldItem)
                break
            case "boots":
                postSellItem(itemList[3].id, dispatch, deleteSoldItem)
                break
            case "wep1":
                postSellItem(itemList[4].id, 3, dispatch, deleteSoldItem)
                break
            case "wep2":
                postSellItem(itemList[5].id, 4, dispatch, deleteSoldItem)
                break
            default:
                return
        }

        getCharacterDetails(basicData.stats.id, dispatch, setAllStats)
    }

    function buyItem(e) {
        let type = e.target.id

        switch (type){
            case "helmet":
                postBuyItem(shopList[0].id, 0, dispatch, setBoughtItem)
                break
            case "armour":
                postBuyItem(shopList[1].id, 1, dispatch, setBoughtItem)
                break
            case "hands":
                postBuyItem(shopList[2].id, 2, dispatch, setBoughtItem)
                break
            case "boots":
                postBuyItem(shopList[3].id, 3, dispatch, setBoughtItem)
                break
            case "wep1":
                postBuyItem(shopList[4].id, 4, dispatch, setBoughtItem)
                break
            case "wep2":
                postBuyItem(shopList[5].id, 5, dispatch, setBoughtItem)
                break
            default:
                return
        }
        getCharacterDetails(basicData.stats.id, dispatch, setAllStats)
    }

    return (
        <div className={"WelcomeScreen"}>
            <NavigationBar history={props.history}/>
            <Container>
                <div id={"characterEq"}>
                    {/*<Row>*/}
                    {/*    <Col>GOLD: {stats.gold}</Col>*/}
                    {/*</Row>*/}
                    <Row>
                        <Col>
                            <CharacterEq itemList={itemList}/>
                        </Col>

                    </Row>

                    <Row className={"buttonContainer"}>

                            <Col><button className={"sellButton"} id={"helmet"} variant={"danger"} onClick={(e) => sellItem(e)}>Sell</button></Col>
                            <Col><button className={"sellButton"} id={"armour"} variant={"danger"} onClick={(e) => sellItem(e)}>Sell</button></Col>
                            <Col><button className={"sellButton"} id={"hands"} variant={"danger"} onClick={(e) => sellItem(e)}>Sell</button></Col>
                            <Col><button className={"sellButton"} id={"boots"} variant={"danger"} onClick={(e) => sellItem(e)}>Sell</button></Col>
                            <Col><button className={"sellButton"} id={"wep1"} variant={"danger"} onClick={(e) => sellItem(e)}>Sell</button></Col>
                            <Col><button className={"sellButton"} id={"wep2"} variant={"danger"} onClick={(e) => sellItem(e)}>Sell</button></Col>

                            {/*<button className={"sellButton"} id={"boots"} variant={"danger"} onClick={(e) => sellItem(e)}>X</button>*/}

                    </Row>
                </div>

                <Row>
                    <div className={"imgContainer"}>merchant</div>
                </Row>

                <div id={"shopItems"}>
                    <Row>
                        <Col>
                            <ShopItems shopList={shopList}/>
                        </Col>
                    </Row>
                    <Row className={"buttonContainer"}>
                        <Col><button className={"sellButton"} id={"helmet"} variant={"danger"} onClick={(e) => buyItem(e)}>Buy</button>
                        </Col>
                        <Col> <button className={"sellButton"} id={"armour"} variant={"danger"} onClick={(e) => buyItem(e)}>Buy</button>
                        </Col>
                        <Col><button className={"sellButton"} id={"hands"} variant={"danger"} onClick={(e) => buyItem(e)}>Buy</button>
                        </Col>
                        <Col><button className={"sellButton"} id={"boots"} variant={"danger"} onClick={(e) => buyItem(e)}>Buy</button>
                        </Col>
                        <Col><button className={"sellButton"} id={"wep1"} variant={"danger"} onClick={(e) => buyItem(e)}>Buy</button>
                        </Col>
                        <Col><button className={"sellButton"} id={"wep2"} variant={"danger"} onClick={(e) => buyItem(e)}>Buy</button>
                        </Col>
                       {/*<button className={"sellButton"} id={"boots"} variant={"danger"} onClick={(e) => sellItem(e)}>X</button>*/}
                    </Row>
                </div>

            </Container>
        </div>
    );
};

export default Shop;