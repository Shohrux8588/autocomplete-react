import { useState } from "react";
import FetchData from "./FetchData";
const Home = () => {
    const [value, setValue] = useState(null);

    const handleChange = e => {
        if (e.target.value !== "") {
            setTimeout(() => {
                setValue(e.target.value);
            }, 1500);
        }
    };

    return (
        <div>
            <h1>Autocompolete React</h1>
            <form>
                <input onChange={handleChange} type="text" />
            </form>
            {value && <FetchData value={value} />}
        </div>
    );
}

export default Home;