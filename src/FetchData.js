import { useEffect, useState } from "react";

const FetchData = ({ value }) => {
    const url = "https://raw.githubusercontent.com/Shastel/autocomplete-tests/master/cities.json";
    const [data, setData] = useState(null);
    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url)
            .then(response => response.json())
            .then(json => {
                const cities = json.filter(e => e.includes(value));
                setData(cities);
            })
            .catch(err => console.log(err));
        return () => abortCont.abort();
    }, [value]);
    
    return (data &&
        <ul>{data.map((e, i) => {
            return (
                <li key={i}>{e}</li>
            )
        })}
        </ul>
    )

}

export default FetchData;