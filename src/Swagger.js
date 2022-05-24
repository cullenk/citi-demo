import React, {useState} from 'react'
import Controller from './Controller'


export default function Swagger() {

    const [section1, setSection1] = useState()
    const [section2, setSection2] = useState()
    const [section3, setSection3] = useState()
    const [section4, setSection4] = useState()
    const [section5, setSection5] = useState()
    const [section6, setSection6] = useState()
    const [section7, setSection7] = useState()
    const [section8, setSection8] = useState()
    const [section9, setSection9] = useState()
    const [section10, setSection10] = useState()
    const [section11, setSection11] = useState()
    const [section12, setSection12] = useState()
    const [section13, setSection13] = useState()









  return (
    <div className='swagger-container'>
        <h1>API Design 101</h1>
        <p>A typical API definition file snippet is show below.</p>
        <div className='accent-line'></div>
        <p>{'{'}</p>
        <p>{'"openapi" : "3.0.1",'}</p>
        <p>{'"info" : {'}</p>
        <div className='flex-container'>
            <p className='margin-left-20 title'>{'"title" :'}</p>
            <p className='margin-left-10'>{'"'}</p>
            <select 
                name="section1" 
                id="section1" 
                onChange={(e) => {
                    const selected = e.target.value;
                    setSection1(selected)
                }}>
                <option value="choice1">Choice 1</option>
                <option value="choice2">Choice 2</option>
                <option value="choice3">Choice 3</option>
                <option value="choice4">Choice 4</option>
            </select>
            <p>{'_'}</p>
            <select 
                name="section2" 
                id="section2"
                onChange={(e) => {
                    const selected = e.target.value;
                    setSection2(selected)
                }}>
                <option value="choice1">Choice 1</option>
                <option value="choice2">Choice 2</option>
                <option value="choice3">Choice 3</option>
                <option value="choice4">Choice 4</option>
            </select>
            <p>{'_'}</p>
            <select 
                name="section3" 
                id="section3"
                onChange={(e) => {
                    const selected = e.target.value;
                    setSection3(selected)
                }}>
                <option value="choice1">Choice 1</option>
                <option value="choice2">Choice 2</option>
                <option value="choice3">Choice 3</option>
                <option value="choice4">Choice 4</option>
            </select>
            <p>{'_'}</p>
            <select 
                name="section4" 
                id="section4"
                onChange={(e) => {
                    const selected = e.target.value;
                    setSection4(selected)
                }}>
                <option value="choice1">Choice 1</option>
                <option value="choice2">Choice 2</option>
                <option value="choice3">Choice 3</option>
                <option value="choice4">Choice 4</option>
            </select>
            <p>{'",'}</p>
        </div>
        <p className='margin-left-20'>{'"description": "This service is used for account details maintenance.",'}</p>
        <p className='margin-left-20'>{'"version": "1.0.0"'}</p>
        <p>{'},'}</p>
        <p>{'"servers" : ['}</p>
        <p className='margin-left-10'>{'{'}</p>
        <div className='flex-container'>
            <p className='margin-left-20 base-path'>{'"url": '}</p>
            <p>{'https://127.0.0.1/'}</p>
            <select 
                name="section5" 
                id="section5"
                onChange={(e) => {
                    const selected = e.target.value;
                    setSection5(selected)
                }}>
                <option value="choice1">Choice 1</option>
                <option value="choice2">Choice 2</option>
                <option value="choice3">Choice 3</option>
                <option value="choice4">Choice 4</option>
            </select>
            <p>{'/'}</p>
            <select 
                name="section6" 
                id="section6"
                onChange={(e) => {
                    const selected = e.target.value;
                    setSection6(selected)
                }}>
                <option value="choice1">Choice 1</option>
                <option value="choice2">Choice 2</option>
                <option value="choice3">Choice 3</option>
                <option value="choice4">Choice 4</option>
            </select>
            <p>{'/'}</p>
            <select 
                name="section7" 
                id="section7"
                onChange={(e) => {
                    const selected = e.target.value;
                    setSection7(selected)
                }}>
                <option value="choice1">Choice 1</option>
                <option value="choice2">Choice 2</option>
                <option value="choice3">Choice 3</option>
                <option value="choice4">Choice 4</option>
            </select>
            <p>{'/'}</p>
            <select 
                name="section8" 
                id="section8"
                onChange={(e) => {
                    const selected = e.target.value;
                    setSection8(selected)
                }}>
                <option value="choice1">Choice 1</option>
                <option value="choice2">Choice 2</option>
                <option value="choice3">Choice 3</option>
                <option value="choice4">Choice 4</option>
            </select>
        </div>
        <p className='margin-left-10'>{'}'}</p>
        <p>{'],'}</p>
        <p>{'"paths" : {'}</p>
        <div className='flex-container'>
            <p className='margin-left-10'>{'"/'}</p>
            <select 
                name="section9" 
                id="section9"
                onChange={(e) => {
                    const selected = e.target.value;
                    setSection9(selected)
                }}>
                <option value="choice1">Choice 1</option>
                <option value="choice2">Choice 2</option>
                <option value="choice3">Choice 3</option>
                <option value="choice4">Choice 4</option>
            </select>
            <p>{'/'}</p>
            <select 
                name="section10" 
                id="section10"
                onChange={(e) => {
                    const selected = e.target.value;
                    setSection10(selected)
                }}>
                <option value="choice1">Choice 1</option>
                <option value="choice2">Choice 2</option>
                <option value="choice3">Choice 3</option>
                <option value="choice4">Choice 4</option>
            </select>
            <p>{'/'}</p>
            <select 
                name="section11" 
                id="section11"
                onChange={(e) => {
                    const selected = e.target.value;
                    setSection11(selected)
                }}>
                <option value="choice1">Choice 1</option>
                <option value="choice2">Choice 2</option>
                <option value="choice3">Choice 3</option>
                <option value="choice4">Choice 4</option>
            </select>
            <p>{'/'}</p>
            <select 
                name="section12" 
                id="section12"
                onChange={(e) => {
                    const selected = e.target.value;
                    setSection12(selected)
                }}>
                <option value="choice1">Choice 1</option>
                <option value="choice2">Choice 2</option>
                <option value="choice3">Choice 3</option>
                <option value="choice4">Choice 4</option>
            </select>
            <p>{'": {'}</p>
        </div>
        <div className='flex-container'>
        <p className='margin-left-10'>{'"'}</p>
        <select 
            name="section13" 
            id="section13"
            className='crud-method'
            onChange={(e) => {
                const selected = e.target.value;
                setSection13(selected)
            }}>
            <option value="GET">GET</option>
            <option value="PUT">PUT</option>
            <option value="POST">POST</option>
            <option value="DELETE">DELETE</option>
        </select>
        <p>{'" : {}'}</p>
        </div>
        <p className='margin-left-20'>{'}'}</p>
        <p className='margin-left-10'>{'}'}</p>
        <p>{'}'}</p>
        <div>
        <Controller 
            section1={section1}
            section2={section2}
            section3={section3}
            section4={section4}
            section5={section5}
            section6={section6}
            section7={section7}
            section8={section8}
            section9={section9}
            section10={section10}
            section11={section11}
            section12={section12}
            section13={section13}
        />
        </div>
    </div>
  )
}
