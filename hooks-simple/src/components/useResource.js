import { useState, useEffect } from 'react';
import axios from 'axios';
const useResources = (resource) => {
    const [ resources, setResources ] = useState([]);

    //alternativ se invoca in useEffect fetchResource(resource)
    // const fetchResource = async (resource) => {
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
    //     setResources(response.data);
    // };

    useEffect(() => {
        (async (resource) => {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/${resource}`
            );
            
            setResources(response.data);
        })(resource);
    }, [resource]);

    return resources;
};

export default useResources;