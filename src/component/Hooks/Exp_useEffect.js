import React, { useState, useEffect } from 'react'

function Exp_useEffect({ nm }) {
    const [countries, setCountries] = useState([])

    const fetchCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const data = await response.json()
        setCountries(data)
    }

    useEffect(() => {
        fetchCountries()
    }, [])



    return (
        <div>Exp_useEffect
            <h1>{nm}</h1>
            {countries.map((country) => (
                <li key={country.cca2}><h2>Country Name:{country.name.common}</h2></li>
            ))}

        </div>
    )
}

export default Exp_useEffect