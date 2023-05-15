import axios from "axios";

export const createEntity = async(fields, nameEntity) => {
    const nameProject = localStorage.getItem('name');;
    const packageName = localStorage.getItem('groupId');
    const {data} = await axios.post('/create_entity',
    {nameEntity, nameProject, packageName, fields});
    return data;
};