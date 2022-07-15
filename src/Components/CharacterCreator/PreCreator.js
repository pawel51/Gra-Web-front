import Race from "../../Enums/Race.js";
import Class from "../../Enums/Class.js";
import {FloatingLabel, Form, Container, Row, Col, Button} from 'react-bootstrap';
import {withRouter} from "react-router-dom";
import "./creator.css"
import "../../Styles/App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {changeRace, changeClass, selectClassId, selectRaceId, changeStatsId} from '../../Slices/characterSlice.js'
import {useDispatch, useSelector} from "react-redux";



import {createCharacter} from "../../Services/createCharacter.js";
import React from "react";

const PreCreator =  (props) => {
    const raceId = useSelector(selectRaceId)
    const classId = useSelector(selectClassId)
    const dispatch = useDispatch()


    const Submit = () => {
        const payload = {
            raceId,
            classId
        }

        createCharacter(payload, dispatch, changeStatsId)

        props.history.push('/details')
    }

    return (
        <div className={"box"} className={"WelcomeScreen"}>

            <Form className={"characterForm"}>
                <Container className={"centerButtons"}>
                    <Row>
                        <Col className={"CenterColumns"}>
                            <FloatingLabel label="Choose Race" className={"combobox"}>
                                <Form.Select onChange={(e) => dispatch(changeRace(e.target.value))}>
                                    {Object.keys(Race).map((v) => {
                                        return (
                                            <option value={v}>
                                                {v}
                                            </option>
                                        )
                                    })}
                                </Form.Select>
                            </FloatingLabel>

                            <FloatingLabel label="Choose Class" className={"combobox"}>
                                <Form.Select onChange={(e) => dispatch(changeClass(e.target.value))}>
                                    {Object.keys(Class).map((v) => {
                                        return (
                                            <option id={v}>
                                                {v}
                                            </option>
                                        )
                                    })}
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        {/*TESTS*/}
                        <Col className={"CenterColumns"}>
                            <div>
                                <span className={"epicText"}>{raceId}</span>
                                <span className={"epicText"}>{classId}</span>
                            </div>
                            <Row>
                                <Col>
                                    <div className={`charImg ${classId}-${raceId}`}/>
                                </Col>
                            </Row>
                            <Row className={"submitButton"}>
                                <input className={"submitButton"} type={"submit"} onClick={() => Submit()} value={"Create Hero"} />
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </Form>
        </div>
    );
};

export default withRouter(PreCreator);