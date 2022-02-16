import logo from './logo.svg'
import './App.css'
import React from 'react'
import ColorPicker from './ColorPicker'

function App() {
    return (
        <div className="App">
            <ColorPicker
                value={[124, 60, 70]}
                onChange={
                    event => {
                        console.log('onChange called', event)
                    }}
                    onSlidersBlockToggle={
                        even=>{
                            console.log('onSlidersBlockToggle called', even)
                        }}
                onSubmit={
                    eve=>{
                        console.log('onSubmit called', eve)
                    }}
                onCancel={
                    ev=>{
                        console.log('onCancel called', ev)
                    }}
            />
        </div>
    )
}

export default App
