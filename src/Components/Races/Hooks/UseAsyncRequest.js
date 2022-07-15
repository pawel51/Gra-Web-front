import {useState, useEffect} from 'react';
import axios from "axios";

const useAsyncRequest = (amount) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const config= {
                    url: `http://localhost:8080/race/all`,
                    method: "get",
                    headers: { }
                    }
                
                const response = await axios.request(config);
                setData(response.data);
                setLoading(true);
            } catch (err) {
                console.warn("Something went wrong fetching the API...", err);
                setLoading(false);
            }
        }

        fetchData()
    }, []);

    return [data, loading]
}

export default useAsyncRequest;