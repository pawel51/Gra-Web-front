import React from 'react';
import {Button, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import {useForm} from "react-hook-form";
import deleteItem from "../../Services/Admin/DeleteRequest.js"


const DeleteItem = (props) => {

    const {register, handleSubmit} = useForm()

    const Delete = (data) => {
        deleteItem(data.table, data.id)

    }

    const integer = /^\d+$/

    const tables = [
        "/class",
        "/race",
        "/monster",
        "/quest",
        "/itemdef"
    ]

    return (
        <div>
            <Container>
                <Row>
                    <Form onSubmit={handleSubmit(Delete)}>
                        <FloatingLabel label="Choose Table to delete from">
                            <Form.Select {...register('table', {required: true})}>
                                {tables.map((v) => {
                                    return (
                                        <option value={v}>
                                            {v}
                                        </option>
                                    )
                                })}
                            </Form.Select>
                        </FloatingLabel>
                        <input type={"text"} {...register('id', {required: true, pattern: integer})}/>
                        <Button type={"submit"} >DELETE</Button>
                    </Form>
                </Row>

            </Container>
        </div>
    );
};

export default withRouter(DeleteItem);