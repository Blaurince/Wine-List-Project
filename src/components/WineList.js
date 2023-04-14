
import { useState } from "react"


export default function WineList() {
    const [theWines, setTheWines] = useState()

    const getWines = () => {
        fetch('https://api.sampleapis.com/wines/reds')
        .then(response => response.json())
        .then(setTheWines)
        .catch(alert)
    }


    return (
     <section className="WineList">
        {(!theWines)
        
        ? <button onClick={getWines}>Get Wine List</button>
        : theWines.map(wine => (
            <div key={wine.id} className="WIne-card">
            <h2>{wine.wine}</h2>
            <img src={wine.image} alt=""/>
            </div>
        ))
        
        }
        
        </section>
    )
}