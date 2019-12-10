import React, {useState} from 'react'
import { useSelector, useDispatch} from "react-redux";
import {FORM_DATA} from '../../constants'

let badName;
const Level = (props) => {  
    const data = useSelector(state => state.moltoItData);
    const [name, setName] = useState(data.problem_name)
    const [population, setPopulation] = useState(data.popsize)
    const [generations, setGenerations] = useState(data.maxGen)
    const dispatch = useDispatch();
    

    const checkName = () => {
        console.log(data.problem_name.length)
        if (data.problem_name.length < 2) {
            console.log('entro aqui true')
            badName = true
        } else {
            console.log('entro aqui false')
            badName = false
        }
    }
  
    console.log(badName)
    const handleEvent = (event) => {
        
        let cleanValue = event.target.value.toLowerCase()
        let cleanValue_ = cleanValue.replace(/ /g, "")
        setName(event.target.value)
        dispatch({type: FORM_DATA, payload: {'problem_name': event.target.value}})
        dispatch({type: FORM_DATA, payload: {'output_file': cleanValue_ + '.txt'}})
        dispatch({type: FORM_DATA, payload: {'output_dir': "~/tmp/" + cleanValue_}})
        checkName()
    }

    const handlePopulation = (event) => {
        setPopulation(event.target.value)
        dispatch({type: FORM_DATA, payload: {'popsize': parseInt(event.target.value)}})
    }

     const handleGenerations = (event) => {
        setGenerations(event.target.value)
        dispatch({type: FORM_DATA, payload: {'maxGen': parseInt(event.target.value)}})  
     }

    return  <React.Fragment>

            <p className="Title">SELECT YOUR CONFIGURATION</p>
            <div style={{marginBottom: "40px"}}>
                <p>Name of the mission</p>
                <input style={{borderBottom: badName ? "2px solid red" : "2px solid green"}} type="text" value={name} onChange={(event) => handleEvent(event) } placeholder="Name"/>
            </div>
            <div style={{marginBottom: "40px"}}>
                <p>Confirm Population  (Gen. Algorithm)</p>
                <input type="number" max='1000' maxLength="3" value={population} onChange={(event) => handlePopulation(event) } placeholder="Population"/>
                <div>&nbsp;&nbsp;&nbsp;</div>
                <p>Confirm Generations (Gen. Algorithm)</p>
                <input type="number" max="1000" maxLength="3" value={generations} onChange={(event) => handleGenerations(event) } placeholder="Generations"/>
            </div>
            <button onClick={() => props.function(null, props.value !== 7 ? props.value + 1 : 0)}>EASY</button>
            <p>OR</p>
            <button onClick={() => props.function(null, props.value !== 7 ? props.value + 1 : 0)}>ADVANCE</button>
    
            </React.Fragment>
  }
  
  export default Level;