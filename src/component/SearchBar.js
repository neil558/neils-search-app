import React, { useState, useEffect } from "react";
import './SearchBar.css';

const SearchBar = (props) => {

    const [SearchValue, setSearchValue] = useState("");
    const ShouldDisableButton = SearchValue.length > 0;



    const HandleChangeFunction = (event) => {

        setSearchValue(event.target.value);

    }

    const HandleClearClick = () => {
        setSearchValue("");
    }

    const FilterArray =  props.Item.filter((product) => {
        return product.includes(SearchValue)
    })

    useEffect(() => {
        if(SearchValue.length === 15) {
            SearchValue = "";
        }
    }, [SearchValue]
    )

    return (

        <div>
            <p>This component uses the useEffect hook to remove all text in the input when 
                the character length hits 15.
            </p>
            <input type="text" value={SearchValue} onChange={HandleChangeFunction} />
            {ShouldDisableButton && <button onClick={HandleClearClick}>CLEAR!</button>}

            <ul>
                	{FilterArray.map((product) => {
                    return (<li key={product}>{product}</li>)
                    })
                    }
            </ul>
        </div>

    )
}

export default SearchBar;