import React, {useState}  from 'react'
import axios from 'axios';

export default function Controller({
  title1,
  title2,
  title3,
  title4,
  title5,
  url1,
  url2,
  url3,
  url4,
  url5,
  url6,
  path1,
  path2,
  path3,
  path4,
  method
}) {

    const [requestBody, setRequestBody] = useState()

    function callApigeeUrl(e){
        e.preventDefault()
        let url = 'https://pokeapi.co/api/v2/pokemon/lapras'
        let responseBody = document.getElementById('responseBody')
        axios.get(url)
        .then(response => {
            console.log(requestBody)
            let returnedData = response.data;
            responseBody.innerHTML = JSON.stringify(returnedData)
        })
    }

  return (
    <div className='controller-container'>
        <h2>Request</h2>
        <div className='flex-container'>
            <div className='method'>{method ? method : 'POST'}</div>
            <p>{"/"}</p>
            <p>{url1 ? url1: 'domain'}</p>
            <p>{"/"}</p>
            <p>{url2 ? url2: 'subdomain'}</p>
            <p>{"/"}</p>
            <p>{url3 ? url3: 'function'}</p>
            <p>{"/"}</p>
            <p>{url4 ? url4: 'lob'}</p>
            <p>{"/"}</p>
            <p>{url5 ? url5: 'qualifierparam'}</p>
            <p>{"/"}</p>
            <p>{url6 ? url6: 'majorversion'}</p>
            <p>{"/"}</p>
            <p>{path1 ? path1: 'apiclassification'}</p>
            <p>{"/"}</p>
            <p>{path2 ? path2: 'preloginqualifier'}</p>
            <p>{"/"}</p>
            <p>{path3 ? path3: 'csiappname'}</p>
            <p>{"/"}</p>
            <p>{path4 ? path4: 'resourcename'}</p>
            <p>{"/"}</p>
        </div>
        <div className='headers'>
            <h3>Headers:</h3>
            <div>
                <p>CLIENT_ID O*&^)*&%&*&%&</p>
                <p>AUTHENTICATE bearer &(^876 &^876</p>
            </div>
        </div>
        <div>
            <h3>Body of request:</h3>
            <textarea id="requestBody" onChange={(e) => {
            let requestContent = e.target.value
            setRequestBody(requestContent)
            }}></textarea>
        </div>
        <div>
            <h2>Response</h2>
            <div id="responseBody" className='response-div'></div>
        </div>
        <input type="submit" value="Send" className='send-button' onClick={(e) => callApigeeUrl(e)} />
    </div>
  )
}
