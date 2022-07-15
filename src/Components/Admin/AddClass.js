import React from 'react';
import withRouter from "react-router-dom/es/withRouter.js";
import {Button, Col, FloatingLabel, Form, Row} from "react-bootstrap";
import Class from "../../Enums/Class.js";
import {useForm} from "react-hook-form";
import addRequest from "../../Services/Admin/AddRequest.js";

const AddClass = () => {
    const baseStatsIds = [
        1,2,3,4,5
    ]
    const baseBuffsIds = [
        1,2,3,4,5
    ]


    const {register, handleSubmit} = useForm()


    // Server expectations ???
    // var data = JSON.stringify({
    //     "firstWeaponType": "warrior",
    //     "secondWeaponType": "mage",
    //     "armourType": "mage",
    //     "name": "Paladin",
    //     "baseBuffs": {
    //         "id": 1
    //     },
    //     "baseStats": {
    //         "id": 1
    //     }
    // });
    function Submit(data) {
        addRequest("/class", data)

        console.log(data)
    }

    return (
        <div>
            <Form  onSubmit={handleSubmit(Submit)} title={"ADD CLASS DEFINITION"} style={{width: 400, margin:100}}>
                <Col>
                    <Row>
                        <FloatingLabel controlId="floatingTextarea" label="Name" className="mb-3">
                            <Form.Control placeholder="Enter Class name" {...register('name', {required: true})}/>
                        </FloatingLabel>
                    </Row>
                    <Row>
                        <FloatingLabel label="Choose First Weapon Type">
                            <Form.Select {...register('firstWeaponType', {required: true})}>
                                {Object.keys(Class).map((v) => {
                                    return (
                                        <option value={v}>
                                            {v}
                                        </option>
                                    )
                                })}
                            </Form.Select>
                        </FloatingLabel>
                    </Row>
                    <Row>
                        <FloatingLabel label="Choose Second Weapon Type">
                            <Form.Select {...register('secondWeaponType', {required: true})}>
                                {Object.keys(Class).map((v) => {
                                    return (
                                        <option value={v}>
                                            {v}
                                        </option>
                                    )
                                })}
                            </Form.Select>
                        </FloatingLabel>
                    </Row>
                    <Row>
                        <FloatingLabel label="Choose Armour Type">
                            <Form.Select {...register('armourType', {required: true})}>
                                {Object.keys(Class).map((v) => {
                                    return (
                                        <option value={v}>
                                            {v}
                                        </option>
                                    )
                                })}
                            </Form.Select>
                        </FloatingLabel>
                    </Row>
                    <Row>
                        <FloatingLabel label="Choose BaseStats Id">
                            <Form.Select {...register('baseStats', {required: true})}>
                                {baseStatsIds.map((v) => {
                                    return (
                                        <option value={v}>
                                            {v}
                                        </option>
                                    )
                                })}
                            </Form.Select>
                        </FloatingLabel>
                    </Row>
                    <Row>
                        <FloatingLabel label="Choose BaseBuffsId">
                            <Form.Select {...register('baseBuffs', {required: true})}>
                                {baseBuffsIds.map((v) => {
                                    return (
                                        <option value={v}>
                                            {v}
                                        </option>
                                    )
                                })}
                            </Form.Select>
                        </FloatingLabel>
                    </Row>
                    <Button variant="primary" type="submit" >
                        ADD CLASS DEFINITION
                    </Button>
                </Col>

            </Form>
        </div>
    );
};

export default withRouter(AddClass);