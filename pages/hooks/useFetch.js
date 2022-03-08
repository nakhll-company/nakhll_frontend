import { useEffect, useState } from "react";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";

function useFetch(url, type, token = false, sendData = null) {
    // "/api/v1/logistic/addresses/"
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                let response = await ApiRegister().apiRequest(
                    sendData,
                    type,
                    url,
                    token,
                    ""
                );
                if (response.status < 300) {
                    setData(response.data);
                    setLoading(false);
                }
            } catch (error) {
                setLoading(false);
                setError(error);
            }
        }
        fetchData();
    }, [url, type, token, sendData]);

    return { loading, error, data };
}

export default useFetch;