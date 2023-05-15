import { $baseURL } from "./config-axios";

export const createController = async(nameController, nameProject, packageName) => {
    const {data} = await $baseURL.post('/create_controller',
    {nameController, nameProject, packageName});
    return data;
};

export const createMethod = async(nameMethod,returnValue, pathRequest, args, typeMethod, typeAnnotation) => {
    const {data} = await $baseURL.post('/create_method',{nameMethod, returnValue, pathRequest, args,typeMethod, typeAnnotation});
    return data;
};

export const buildMethods = async() => {
    const {data} = await $baseURL.post('/build');
    return data;
};