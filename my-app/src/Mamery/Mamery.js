import React from 'react'
import './MameryCompontes.css'
import{useState,useEffect} from 'react'
import {shuffle,icon} from './Utils'





function Mamery() {

    
    


    //const [remainingTime, setremainingTime] = useState()




    
    return (
    <ul class="myCards">
        <li class="card" type="triangle">{icon.bar_one}</li>
        <li class="card" type="triangle">{icon.bar_two}</li>
        <li class="card" type="diamond">{icon.diamond_one}</li>
        <li class="card" type="diamond">{icon.diamond_two}</li>
        <li class="card" type="star">{icon.female_one}</li>
        <li class="card" type="star">{icon.female_two}</li>
        <li class="card" type="roundShape">{icon.male_one}</li>
        <li class="card" type="roundShape">{icon.male_two}</li>
        <li class="card" type="female">{icon.ohm_one}</li>
        <li class="card" type="female">{icon.ohm_two}</li>
        <li class="card" type="male">{icon.roundShape_one}</li>
        <li class="card" type="male">{icon.roundShape_two}</li>
        <li class="card" type="ohm">{icon.star_one}</li>
        <li class="card" type="ohm">{icon.star_two}</li>
        <li class="card" type="bar">{icon.triangle_one}</li>
        <li class="card" type="bar">{icon.triangle_two}</li>
    </ul>
    )
}

export default Mamery
