import React, { useEffect, useState } from 'react'

function FetchData() {
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setInfo({ info: data }))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>

        </div>
    )
}

export default FetchData