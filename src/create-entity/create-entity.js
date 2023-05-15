import React, { useState } from "react";
import "./create-entity.css"
import { createEntity, createRelationship } from "../config/create-entity";
import { Button, Card, Container, Form } from "react-bootstrap";

const sendData = (fields, nameEntity, setFields, setNameEntity) => {
    createEntity(fields, nameEntity).catch((error) => console.error(error));
    setFields({});
    setNameEntity("");
}

const createRelation = (relation, entityOne, entityTwo) => {
    createRelationship(relation, entityOne, entityTwo);
} 

const change = ({target: {value}}, setField) => {
    setField(value);
}

const addField = (fieldData, setFieldData, name, type, setName, setType) => {
    const fieldDataTemp = {...fieldData};
    fieldDataTemp[name] = type;
    setFieldData(fieldDataTemp);

    setName("");
    setType("");
}

const CreateEntity = () => {

    const [fieldData, setFieldData] = useState({});
    const [nameEntity, setNameEntity] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [entityOne, setEntityOne] = useState("");
    const [entityTwo, setEntityTwo] = useState("");
    const [view, setView] = useState(false);
    const [nameRelation, setRelation] = useState("one_to_one");
    

    const add_relationship = <>
        <div className="relationship">
            <Form.Label> Имя сущности
                <Form.Control value={entityOne} onChange={(e) => change(e, setEntityOne)} />
            </Form.Label>
            &nbsp;
            <div>
            <Form.Label> Выбор связи:
                        <Form.Select aria-label="Default select example" onChange={e => change(e, setRelation)} value={nameRelation}>
                            <option value="one_to_one">OneToOne</option>
                            <option value="one_to_many">OneToMany</option>
                            <option value="many_to_one">ManyToOne</option>
                            <option value="many_to_many">ManyToMany</option>
                        </Form.Select>
                    </Form.Label>
            </div>
            &nbsp;
            <Form.Label> Имя сущности
                <Form.Control value={entityTwo} onChange={(e) => change(e, setEntityTwo)} />
            </Form.Label>
        </div>
        <div className="button">
            <Button onClick={() => createRelation(nameRelation, entityOne, entityTwo)} variant="success">Создать связь</Button>
        </div>
    </>


    return(
        <Container className="d-flex justify-content-center align-items-center"
        style={{ height: window.innerHeight - 54 }}>
            <Card className="p-3" style={{ width: 800 }}>
                <div className="header">
                    <h3>Создание сущности</h3>
                </div>
                <Form className="d-flex flex-column p-3 m-3">
                    <Form.Label> Имя сущности
                        <Form.Control value={nameEntity} onChange={(e) => change(e, setNameEntity)}/>
                    </Form.Label>
                    <Form.Label> Имя поля
                        <Form.Control value={name} onChange={(e) => change(e, setName)}/>
                    </Form.Label>
                    <Form.Label> Название типа
                        <Form.Control value={type} onChange={(e) => change(e, setType)}/>
                    </Form.Label>
                    <div className="button">
                        <Button variant="success" onClick={() => sendData(fieldData, nameEntity, setFieldData, setNameEntity)}>Создать сущность</Button>
                        &nbsp;
                        <Button onClick={() => addField(fieldData, setFieldData, name, type, setName, setType)}>Добавить поле сущности</Button>
                    </div>
                    <div className="button">
                        <Button onClick={() => setView(!view)}>Добавить связь</Button>
                    </div>
                    <div>
                        {
                            view ? add_relationship : null
                        }
                    </div>
                </Form>
            </Card>
        </Container>
    );
}

export default CreateEntity;