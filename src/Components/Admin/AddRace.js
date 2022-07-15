import React from 'react';
import {Button, Col, FloatingLabel, Form, Row} from "react-bootstrap";
import addRequest from "../../Services/Admin/AddRequest.js";
import {useForm} from "react-hook-form";

const AddRace = () => {
    const baseStatsIds = [
        1,2,3,4,5
    ]

    const baseBuffsIds = [
        1,2,3,4,5
    ]
    const {register, handleSubmit} = useForm()

    function Submit(data) {
        addRequest("/race", data)

        console.log(data)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(Submit)} title={"ADD RACE DEFINITION"} style={{width: 400, margin:100}}>
                <Col>
                    <Row>
                        <FloatingLabel controlId="floatingTextarea" label="Name" className="mb-3">
                            <Form.Control placeholder="Enter Race name" {...register('name', {required: true})}/>
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
                    <Button variant="primary" type="submit">
                        ADD RACE DEFINITION
                    </Button>
                </Col>
            </Form>
        </div>
    );
};

export default AddRace;