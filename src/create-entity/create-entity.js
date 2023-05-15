import React, { useState } from "react";
import "./create-entity.css"
import { createEntity } from "../config/create-entity";


const sendData = (fields, nameEntity, setFields, setNameEntity) => {
    createEntity(fields, nameEntity).catch((error) => console.error(error));
    setFields({});
    setNameEntity("");
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


    console.log(JSON.stringify(fieldData))

    return(
        <div className="body">
            <div className="header">
                <h3>Создание сущности</h3>
            </div>
            <form className="form-size">
                <div className="mb-3">
                    <label htmlFor="input-name-entity" className="form-label">Имя сущности</label>
                    <input type="text" id="input-name-entity"
                    className="form-control"
                    value={nameEntity}
                    onChange={(e) => change(e, setNameEntity)}
                    placeholder="Введите имя сущности"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="input-name-field" className="form-label">Имя поля</label>
                    <input type="text" id="input-name-field"
                    onChange={(e) => change(e, setName)}
                    value={name}
                    className="form-control" 
                    placeholder="Введите имя поля"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="input-type-field" className="form-label">Имя типа</label>
                    <input type="text" id="input-type-field"
                    onChange={(e) => change(e, setType)}
                    value={type}
                    className="form-control" 
                    placeholder="Введите имя типа"/>
                </div>
                <div className="button">
                    <button onClick={() => sendData(fieldData, nameEntity, setFieldData, setNameEntity)} className="btn btn-primary" type="button">Созданть сущность</button>
                    &nbsp;
                    <button onClick={() => addField(fieldData, setFieldData, name, type, setName, setType)} className="btn btn-primary" type="button">Добавить поле сущности</button>
                </div>
                <div>
                    <button type="button">Добавить связь</button>
                </div>
                <div>
                    <div className="mb-3">
                        <label htmlFor="input-type-field" className="form-label">Имя типа</label>
                        <input type="text" id="input-type-field"
                        onChange={(e) => change(e, setType)}
                        value={type}
                        className="form-control" 
                        placeholder="Введите имя типа"/>
                    </div>
                    
                </div>
            </form>
        </div>
    )
}

export default CreateEntity;