import React, {useEffect, useState} from "react";
import {client} from "../graphQl/client";


const useQuery = (query,variables) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    const request = async () => {
        try {
            const response = await client.query({
                query:query,
                variables:variables
            })
            if (!response.ok) {
                setError(response.statusText);
            }
            setLoading(response.loading)
            setData(response.data)

        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        request()
    }, [])


    return {
        data,
        error,
        loading
    }

}


export default useQuery