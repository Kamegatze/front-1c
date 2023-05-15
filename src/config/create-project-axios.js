import axios from "axios"; 
import { $baseURL } from "./config-axios";

export const createProject = async(name, groupId, javaVersion, dependencies) => {
    const {data} = await axios.post($baseURL + '/api/v1/project', 
    {name, groupId, javaVersion, dependencies});
    return data;
}