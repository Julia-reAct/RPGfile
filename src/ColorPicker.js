import './ColorPicker.css'
import React, {useState, useEffect} from 'react'

function ColorPicker(props) {
    const {onChange, value, onSlidersBlockToggle,onSubmit,onCancel} = props;

    const [state, setState] = useState({
        valueR: props.value[0],
        valueG: props.value[1],
        valueB: props.value[2],
        cancel:1,
        SaveValue: [95, 158, 160]
    })
    useEffect(()=>{
        props.onChange()
    },[state.valueR,state.valueB,state.valueG])

    useEffect(()=>{
        props.onSubmit()
    },[state.SaveValue])
    useEffect(()=>{
        props.onCancel()
    },[state.cancel])

    const [isVisible, setVisible] = useState(true)
    const Visible = () => {
        setVisible(!isVisible)

    }
    useEffect(()=>{
        props.onSlidersBlockToggle()
    },[isVisible])


    return (
        <div className="ColorPicker">
            <header className="ColorPicker__body">
                <div className="ColorPicker__ShowRGB">
                    <button className='ColorPicker__buttonShow button' onClick={Visible}>Show RGB</button>
                </div>
                {
                    isVisible && (

                        <div className='ColorPicker__Show'>
                            <div style={{background: `rgb(${state.valueR},${state.valueG},${state.valueB})`}}
                                 className='ColorPicker__color'>
                            </div>
                            <div className='ColorPicker__column'>
                                {state.valueR}
                                <input className='ColorPicker__inputR input' type="range" min="0" max="255"
                                       value={state.valueR}
                                       onChange={ event => setState({...state, valueR: event.target.value})}/>
                                {state.valueG}
                                <input className='ColorPicker__inputG input' type="range" min="0" max="255"
                                       value={state.valueG}
                                       onChange={event => setState({...state, valueG: event.target.value})}/>
                                {state.valueB}
                                <input className='ColorPicker__inputB input' type="range" min="0" max="255"
                                       value={state.valueB}
                                       onChange={event => setState({...state, valueB: event.target.value})}/>
                            </div>
                            <div className='ColorPicker__button'>
                                <button className='ColorPicker__buttonCancel button' onClick={event => setState(
                                    {
                                        ...state, valueR: state.SaveValue[0],
                                        valueG: state.SaveValue[1], valueB: state.SaveValue[2],
                                        cancel: 1+state.cancel
                                    })}>Cancel
                                </button>
                                <button className='ColorPicker__buttonSubmit button' onClick={event => setState(
                                    {...state, SaveValue: [state.valueR, state.valueG, state.valueB]})}>Submit
                                </button>
                            </div>
                        </div>
                    )
                }


            </header>
        </div>
    )
}

export default ColorPicker