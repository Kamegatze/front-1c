import axios from "axios";

export const createEntity = async(fields, nameEntity) => {
    const nameProject = localStorage.getItem('name');
    const packageName = localStorage.getItem('groupId');
    const {data} = await axios.post('/create_entity',
    {nameEntity, nameProject, packageName, fields});
    return data;
};

export const createRelationship = async(relation, entityOne, entityTwo) => {
    console.log(`/create_entity/create_${relation}?nameOne=${entityOne}&nameTwo=${entityTwo}`);
    const {data} = await axios.get(`/create_entity/create_${relation}?nameOne=${entityOne}&nameTwo=${entityTwo}`);
    return data;
};