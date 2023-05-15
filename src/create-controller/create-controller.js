import React, { useState } from "react";
import {Container, Card, Form, Button} from 'react-bootstrap'

const CreateController = () => {
    
    //controller info
    const[controllerName, setControllerName] = useState('');
    const[isFirstCreate, setIsFirstCreate] = useState(true);

    //method info
    const[http, setHttp] = useState('GET');
    const[methodName, setMethodName] = useState('');
    const[returnValue, setReturnValue] = useState('');
    const[path, setPath] = useState('/');

    const[mapArgsKey, setMapArgsKey] = useState('');
    const[mapArgsValue, setMapArgsValue] = useState('');


    const addController = async() => {
        setIsFirstCreate(false)
        const nameProject = localStorage.getItem('name');
        const groupdId = localStorage.getItem('groupId');
        //await createController(projectName, nameProject, groupdId);
        console.log(nameProject)
        console.log(groupdId)
        console.log(controllerName)
    }

    const addMethod = async(arg) => {
        if(arg === true){
            //await buildMethods();
            setIsFirstCreate(true)
        }
        
    }

    const addArgs = (key,value) => {
        
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card className="p-3" style={{ width: 600 }}>
                <h2 className="d-flex justify-content-center">{isFirstCreate ? "Создать контроллер" : "Добавить метод"}</h2>
                    {isFirstCreate ? 
                        <Form className="d-flex flex-column p-3 m-3">
                            <Form.Label> Имя контроллера:
                            <Form.Control value={controllerName} onChange={e => setControllerName(e.target.value)}/>
                            </Form.Label>
                            <Button variant="success" onClick={addController}>Добавить контроллер</Button>
                        </Form> 
                        :
                        <Form className="d-flex flex-column p-3 m-3">
                            <Form.Label> Имя метода:
                                <Form.Control value={methodName} onChange={e => setMethodName(e.target.value)}/>
                            </Form.Label>
                            <Form.Label> Возвращаемое значение:
                                <Form.Control value={returnValue} onChange={e => setReturnValue(e.target.value)}/>
                            </Form.Label>
                            <Form.Label> Путь конечной точки:
                                <Form.Control value={path} onChange={e => setPath(e.target.value)}/>
                            </Form.Label>
                            <Form.Label> Аргументы:
                                <Form.Control value={mapArgsKey} onChange={e => setMapArgsKey(e.target.value)} />
                                <Form.Control value={mapArgsValue} onChange={e => setMapArgsValue(e.target.value)}/>
                                <Button variant="success" onClick={() => addArgs(mapArgsKey, mapArgsValue)}  className="mt-3">+</Button>
                            </Form.Label>
                            <Form.Label> HTTP тип ответа:
                                <Form.Select aria-label="Default select example" onChange={e => setHttp(e.target.value)} value={http}>
                                    <option value="GET">GET</option>
                                    <option value="POST">POST</option>
                                    <option value="PATCH">PATCH</option>
                                    <option value="PUT">PUT</option>
                                    <option value="DELETE">DELETE</option>
                                </Form.Select>
                            </Form.Label>
                            <Form.Label> Аннотации:
                                <Form.Control value={controllerName} onChange={e => setControllerName(e.target.value)}/>
                            </Form.Label>
                            <Button variant="danger" onClick={() => addMethod(true)} className="mt-3">Добавить метод и выйти</Button>
                            <Button variant="success" onClick={() => addMethod(false)}  className="mt-3">Добавить метод и добавить еще)))</Button>
                        </Form>
                    }
            </Card>
        </Container>
    );
}

export default CreateController;