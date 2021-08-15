import React, {useState} from 'react'

export const BusquedaInput = ({setSearchContry}) => {

    const [inputValue, setInputValue] = useState('Colombia');

    const handleChange= (e) =>{
        setInputValue(e.target.value);
       
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        setSearchContry(value=>inputValue)
    }


    return (
        <>
        Buscar:
        <form onSubmit={handleSubmit}>
            <input type="text"
                   value={inputValue}
                   onChange={handleChange}
            />
            <button onClick={handleSubmit}>BUSCAR</button>
        </form>
        </>
    )
}
