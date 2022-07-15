import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {
    selectStats,
    selectBasicData,
    increment,
    decrement,
    selectFreePoints,
    setAllStats,
    setBasicData,
    setItems, selectItems
} from '../../Slices/characterSlice.js'
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import {getCharacterDetails} from "../../Services/GetCharacterDetails.js";
import {getRaceNameById} from "../../Enums/Race.js";
import {getClassNameById} from "../../Enums/Class.js";
import {getCharacterBasic} from "../../Services/GetCharacterBasic.js";
import "./details.css"
import CharacterEq from "../CharacterEq/CharacterEq.js";
import {getCharacterItems} from "../../Services/GetCharacterItems.js";
import updateStats from "../../Services/UpdateStats.js";
import "../../Styles/Welcome.css";
import NavigationBar from "../Navigation/NavigationBar.js";

export function GetBasicData(){
    const basicdata_ = useSelector(selectBasicData);
    return basicdata_;
}

const CharacterDetails = () => {
    const stats = useSelector(selectStats)
    const freePoints = useSelector(selectFreePoints)
    const dispatch = useDispatch()
    const basicData = useSelector(selectBasicData)
    const itemList = useSelector(selectItems)

    const [playerLoaded, setPlayerLoaded] = useState(false)
    const [itemsLoaded, setItemsLoaded] = useState(false)


    useEffect(() => {
        if(playerLoaded) return
        getCharacterBasic(dispatch, setBasicData)
        setPlayerLoaded(true)
    }, [dispatch, basicData])

    useEffect(() => {
        if(playerLoaded)
            getCharacterDetails(basicData.stats.id, dispatch, setAllStats)
    }, [playerLoaded, dispatch, basicData.stats.id])

    useEffect(() => {
        getCharacterItems(dispatch, setItems)
        setItemsLoaded(true)
    },[dispatch] )

    function Submit() {

        updateStats(stats, basicData.freePoints, dispatch, setAllStats)
    }

    return (
        <div className='detailsBackground detailsFont'>
            <NavigationBar/>
            <Container>
                <Row>
                    <Col><div className='gold'/> {stats.gold}</Col>
                    <Col className='floatLeft'>Exp: {stats.exp}</Col>
                </Row>
                <Row>
                    <Col className='basicDataBox'>
                        <Col>HEALTH:{stats.health}</Col>
                        <Col>DAMAGE:{stats.health}</Col>
                        <Col>CRIT Chance:{stats.crit_chance}</Col>
                        <Col>CRIT Damage:{stats.crit_damage}</Col>
                        <Col>BLOCK Chance:{stats.block_chance}</Col>
                        <Col>SPEED:{stats.speed}</Col>
                    </Col>

                    <Col>
                        <div className={`charImg ${basicData.img}`}></div>
                        <div className='imageText'>{getRaceNameById(basicData.race.id)}/{getClassNameById(basicData.classes.id)}</div>
                    </Col>
                    <Col className='itemsBox'>
                        {itemsLoaded ? <CharacterEq itemList={itemList}/> : <span>Loading...</span>}
                    </Col>
                </Row>




                <div className='freePointsLabel'>Free Points = {freePoints}</div>

                
                <Col className='statsColumn statsBox'>
                    <Row>
                        <Col><label className='statsText'>Strength</label></Col>
                        <Col><span>{stats.strength}</span></Col>
                        <Col><button className='incrementButton' onClick={() => dispatch(increment("strength"))}>+</button></Col>
                    </Row>
                    <Row className='margin'>
                        <Col><label className='statsText'>Agility</label></Col>
                        <Col><span>{stats.agility}</span></Col>
                        <Col><button className='incrementButton' onClick={() => dispatch(increment("agility"))}>+</button></Col>
                    </Row>
                    <Row className='margin'>
                        <Col><label className="statsText">Intelligence</label></Col>
                        <Col><span>{stats.intelligence}</span></Col>
                        <Col><button className='incrementButton' onClick={() => dispatch(increment("intelligence"))}>+</button></Col>
                    </Row>
                </Col>
                <Col className='floatLeft'>
                    <Row className='margin'>
                        <Col><label className='statsText'>Endurance</label></Col>
                        <Col><span>{stats.endurance}</span></Col>
                        <Col><button className='incrementButton' onClick={() => dispatch(increment("endurance"))}>+</button></Col>
                    </Row>
                    <Row className='margin'>
                        <Col><label className='statsText'>Luck</label></Col>
                        <Col><span>{stats.luck}</span></Col>
                        <Col><button className='incrementButton' onClick={() => dispatch(increment("luck"))}>+</button></Col>
                    </Row>

                    <Row className='margin'>
                        <Col><label className='statsText'>Armour</label></Col>
                        <Col><span>{stats.armour}</span></Col>
                        <Col><button className='incrementButton' onClick={() => dispatch(increment("armour"))}>+</button></Col>
                    </Row>
                </Col>
                
                <Row>
                    <button className='submitDetailsButton center' onClick={() => Submit()}>Pray, that server accepts your changes</button>
                </Row>
            </Container>

        </div>
    );
};
export default withRouter(CharacterDetails);