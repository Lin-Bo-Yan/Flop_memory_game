import React from 'react'
import './MameryCompontes.css'
import{useState,useEffect} from 'react'
import {shuffle,icon} from './Utils'





function Mamery() {
    
    
    const [shuffleIcon, setshuffleIcon] = useState(icon)

    shuffle(shuffleIcon)

     


    useEffect(()=>{

        console.log(shuffleIcon)

    },[shuffleIcon])




   

    
    return (
    <ul class="myCards">
        <li class="card" type="triangle">{icon[0].one}</li>
        <li class="card" type="triangle">{icon[1].one}</li>
        <li class="card" type="diamond">{icon[2].one}</li>
        <li class="card" type="diamond">{icon[3].one}</li>
        <li class="card" type="star">{icon[4].one}</li>
        <li class="card" type="star">{icon[5].one}</li>
        <li class="card" type="roundShape">{icon[6].one}</li>
        <li class="card" type="roundShape">{icon[7].one}</li>
        <li class="card" type="female">{icon[8].one}</li>
        <li class="card" type="female">{icon[9].one}</li>
        <li class="card" type="male">{icon[10].one}</li>
        <li class="card" type="male">{icon[11].one}</li>
        <li class="card" type="ohm">{icon[12].one}</li>
        <li class="card" type="ohm">{icon[13].one}</li>
        <li class="card" type="bar">{icon[14].one}</li>
        <li class="card" type="bar">{icon[15].one}</li>
    </ul>
    )
}

export default Mamery
