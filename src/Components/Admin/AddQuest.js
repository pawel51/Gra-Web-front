import React, {useState} from 'react';
import {Button, Col, FloatingLabel, Form, Row} from "react-bootstrap";
import withRouter from "react-router-dom/es/withRouter.js";
import {useForm} from "react-hook-form";
import addRequest from "../../Services/Admin/AddRequest.js";

const AddQuest = () => {
    const rarities = [
        10, 20, 30, 40, 50, 60, 70, 80, 90, 100
    ]

    const {register, handleSubmit} = useForm()

    function Submit(data) {
        const body = {
            "name": data.name,
            "duration": parseInt(data.duration),
            "exp": parseInt(data.exp),
            "prize": parseInt(data.prize),
            "description": "sadfas",
            "questRarity":  parseInt(data.questRarity)
        }


        addRequest("/quest", body)

        console.log(data)
    }


    return (
        <div>
            <Form  onSubmit={handleSubmit(Submit)} title={"ADD QUEST DEFINITION"} style={{width: 400, margin:100}}>
                <Col>
                    <Row>
                        <FloatingLabel controlId="floatingTextarea" label="Name" className="mb-3">
                            <Form.Control placeholder="Enter item name" {...register('name', {required: true})}/>
                        </FloatingLabel>
                    </Row>
                    <Row>
                        <FloatingLabel controlId="floatingTextarea" label="Duration" className="mb-3">
                            <Form.Control placeholder="duration" {...register('duration', {required: true})}/>
                        </FloatingLabel>
                    </Row>
                    <Row>
                        <FloatingLabel controlId="floatingTextarea" label="Experience amount" className="mb-3">
                            <Form.Control placeholder="Enter Experience amount" {...register('exp', {required: true})}/>
                        </FloatingLabel>
                    </Row>
                    <Row>
                        <FloatingLabel controlId="floatingTextarea" label="Gold Amount" className="mb-3">
                            <Form.Control as={"textarea"} placeholder="Enter Gold Amount" {...register('prize', {required: true})}/>
                        </FloatingLabel>
                    </Row>
                    <Row>
                        <FloatingLabel controlId="floatingTextarea" label="Description" className="mb-3">
                            <Form.Control as={"textarea"} placeholder="Enter quest description" {...register('description', {required: true})}/>
                        </FloatingLabel>
                    </Row>
                    <FloatingLabel label="Choose Rarity">
                        <Form.Select {...register('questRarity', {required: true})}>
                            {rarities.map((v) => {
                                return (
                                    <option value={v}>
                                        {v}
                                    </option>
                                )
                            })}
                        </Form.Select>
                    </FloatingLabel>
                </Col>

                <Button variant="primary" type="submit">
                    ADD QUEST DEFINITION
                </Button>
            </Form>

        </div>
    );
};

export default withRouter(AddQuest);