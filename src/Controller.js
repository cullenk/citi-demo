import React from 'react'

export default function Controller({
    section5,
    section6,
    section7,
    section8,
    section9,
    section10,
    section11,
    section12,
    section13
}) {

  return (
    <div className='controller-container'>
        <h2>Request</h2>
        <div className='flex-container'>
            <div className='method'>{section13}</div>
            <p>{"/"}</p>
            <p>{section5}</p>
            <p>{"/"}</p>
            <p>{section6}</p>
            <p>{"/"}</p>
            <p>{section7}</p>
            <p>{"/"}</p>
            <p>{section8}</p>
            <p>{"/"}</p>
            <p>{section9}</p>
            <p>{"/"}</p>
            <p>{section10}</p>
            <p>{"/"}</p>
            <p>{section11}</p>
            <p>{"/"}</p>
            <p>{section12}</p>
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
            <textarea></textarea>
        </div>
        <div>
            <h2>Response</h2>
            <div className='response-div'></div>
        </div>
        <button>Send</button>
    </div>
  )
}
