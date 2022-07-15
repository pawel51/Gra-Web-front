import React from 'react';
import {Button, Col, FloatingLabel, Form, Row} from "react-bootstrap";
import withRouter from "react-router-dom/es/withRouter.js";
import Class from "../../Enums/Class.js";
import {useForm} from "react-hook-form";
import addRequest from "../../Services/Admin/AddRequest.js";

const AddItem = () => {

    const rarities = [
        "legend", "epic", "rare", "common", "normal"
    ]

    const baseStatsIds = [
        1,2,3,4,5
    ]

    const baseBuffsIds = [
        1,2,3,4,5
    ]

    const {register, handleSubmit} = useForm()

    function Submit(data) {
        addRequest("/item", data)

        console.log(data)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(Submit)} title={"ADD ITEM DEFINITION"} style={{width: 400, margin:100}}>
                <Col>
                    <Row>
                        <FloatingLabel controlId="floatingTextarea" label="Name" className="mb-3">
                            <Form.Control placeholder="Enter monster name" {...register('name', {required: true})}/>
                        </FloatingLabel>
                    </Row>
                    <Row>
                        <FloatingLabel label="Choose Rarity">
                            <Form.Select {...register('rarity', {required: true})}>
                                {rarities.map((v) => {
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
                        <FloatingLabel label="Choose Class Type">
                        <Form.Select {...register('itemType', {required: true})}>
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
                </Col>



                <Button variant="primary" type="submit">
                    ADD ITEM DEFINITION
                </Button>
            </Form>


        </div>
    );
};

export default withRouter(AddItem) ;