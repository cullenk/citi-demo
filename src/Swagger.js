import React, {useState} from 'react'
import Controller from './Controller'


export default function Swagger() {

    const [title1, setTitle1] = useState()
    const [title2, setTitle2] = useState()
    const [title3, setTitle3] = useState()
    const [title4, setTitle4] = useState()
    const [title5, setTitle5] = useState()
    const [url1, setUrl1] = useState()
    const [url2, setUrl2] = useState()
    const [url3, setUrl3] = useState()
    const [url4, setUrl4] = useState()
    const [url5, setUrl5] = useState()
    const [url6, setUrl6] = useState()
    const [path1, setPath1] = useState()
    const [path2, setPath2] = useState()
    const [path3, setPath3] = useState()
    const [path4, setPath4] = useState()
    const [method, setMethod] = useState()
    const [overlayDisplay, setOverlayDisplay] = useState('none')

    function closeOverlay(){
        setOverlayDisplay('none')
    }

    function checkIfInfoNeeded(selected){
        if(selected === 'info'){
            setOverlayDisplay('flex')
        }
    }

  return (
    <div className='swagger-container'>
        {/* Info Overlay */}
        <div className='overlay' style={{display: overlayDisplay}}>
            <div className='info-content'>
                <span className='close' onClick={() => closeOverlay()}>X</span>
                <h3 className='glossary'>API Glossary</h3>
                <h4>API Taxonomy Function</h4>
                <p>This is the description of API Taxonomy.</p>
                <audio controls>
                    <source src="horse.ogg" type="audio/ogg" />
                    <source src="horse.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>

                <h4>Qualifier Param</h4>
                <p>This is the description of a Qualifier Param. Response should be all lowercase without any spaces.</p>
                <audio controls>
                    <source src="horse.ogg" type="audio/ogg" />
                    <source src="horse.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                
                <h4>LOB</h4>
                <p>This is the description of LOB.</p>
                <audio controls>
                    <source src="horse.ogg" type="audio/ogg" />
                    <source src="horse.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>

                <h4>Service Type</h4>
                <p>This is the description of Service Type.</p>
                <audio controls>
                    <source src="horse.ogg" type="audio/ogg" />
                    <source src="horse.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>

                <h4>Major Version</h4>
                <p>This is the description of Major Version. Response should be lowercase characters only.</p>
                <audio controls>
                    <source src="horse.ogg" type="audio/ogg" />
                    <source src="horse.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>

                <h4>Domain</h4>
                <p>This is the description of Domain.</p>
                <audio controls>
                    <source src="horse.ogg" type="audio/ogg" />
                    <source src="horse.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>

                <h4>Subdomain</h4>
                <p>This is the description of subdomain.</p>
                <audio controls>
                    <source src="horse.ogg" type="audio/ogg" />
                    <source src="horse.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>

                <h4>Function</h4>
                <p>This is the description of function.</p>
                <audio controls>
                    <source src="horse.ogg" type="audio/ogg" />
                    <source src="horse.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>

                <h4>API Classification</h4>
                <p>This is the description of API Classification.</p>
                <audio controls>
                    <source src="horse.ogg" type="audio/ogg" />
                    <source src="horse.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>

                <h4>Pre-Login Qualifier</h4>
                <p>This is the description of a Pre-Login Qualifier Param. Response should be all lowercase without any spaces.</p>

                <audio controls>
                    <source src="horse.ogg" type="audio/ogg" />
                    <source src="horse.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>

                <h4>CSI App Name or Channel</h4>
                <p>This is the description of CSI App Name or Channel</p>
                <audio controls>
                    <source src="horse.ogg" type="audio/ogg" />
                    <source src="horse.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>

                <h4>Resource Name</h4>
                <p>This is the description of Resource Name. Response should be a plural noun.</p>
                <audio controls>
                    <source src="horse.ogg" type="audio/ogg" />
                    <source src="horse.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>

        {/* Main Swagger Form */}
        <h1>API Design 101</h1>
        <p>A typical API definition file snippet is show below.</p>
        <div className='accent-line'></div>
        <form>
            <p>{'{'}</p>
            <p>{'"openapi" : "3.0.1",'}</p>
            <p>{'"info" : {'}</p>
            <div className='flex-container'>
                <p className='margin-left-20 title'>{'"title" :'}</p>
                <p className='margin-left-10'>{'"'}</p>
                <select 
                    name="title1" 
                    id="title1" 
                    onChange={(e) => {
                        const selected = e.target.value;
                        setTitle1(selected)
                        checkIfInfoNeeded(selected)
                    }}>
                    <option value="API Taxonomy Function">API Taxonomy Function</option>
                    <option value="accountdetails">accountdetails</option>
                    <option value="accounttransactions">accounttransactions</option>
                    <option value="accountclose">accountclose</option>
                    <option value="accountupgrade">accountupgrade</option>
                    <option value="info">More info...</option>
                </select>
                <p>{'_'}</p>
                <input
                    type="text"
                    id="title2"
                    name="title2"
                    placeholder='Qualifier Param'
                    onChange={(e) => {
                        const selected = e.target.value;
                        setTitle2(selected)
                        checkIfInfoNeeded(selected)
                    }}
                ></input>
                <p>{'_'}</p>
                <select 
                    name="title3" 
                    id="title3"
                    onChange={(e) => {
                        const selected = e.target.value;
                        setTitle3(selected)
                        checkIfInfoNeeded(selected)
                    }}
                    >
                    <option value="LOB">LOB</option>
                    <option value="Digital">Digital</option>
                    <option value="Retail">Retail</option>
                    <option value="BrandedCards">BrandedCards</option>
                    <option value="CrossLOB">CrossLOB</option>
                    <option value="CRS">CRS</option>
                    <option value="info">More info...</option>
                </select>
                <p>{'_'}</p>
                <select 
                    name="title4" 
                    id="title4"
                    onChange={(e) => {
                        const selected = e.target.value;
                        setTitle4(selected)
                        checkIfInfoNeeded(selected)
                    }}>
                    <option value="Service Type">Service Type</option>
                    <option value="Domain">Domain</option>
                    <option value="View">View</option>
                    <option value="Orchestrator">Orchestrator</option>
                    <option value="CRUD">CRUD</option>
                    <option value="Aggregator">Aggregator</option>
                    <option value="info">More info...</option>
                </select>
                <p>{'_'}</p>
                <select 
                    name="title5" 
                    id="title5"
                    onChange={(e) => {
                        const selected = e.target.value;
                        setTitle5(selected)
                        checkIfInfoNeeded(selected)
                    }}>
                    <option value="major version">majorversion</option>
                    <option value="v1">v1</option>
                    <option value="v2">v2</option>
                    <option value="v3">v3</option>
                    <option value="info">More info...</option>
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
                    name="url1" 
                    id="url1"
                    onChange={(e) => {
                        const selected = e.target.value;
                        setUrl1(selected)
                        checkIfInfoNeeded(selected)
                    }}>
                    <option value="domain">{'{domain}'}</option>
                    <option value="accounts">accounts</option>
                    <option value="customers">customers</option>
                    <option value="moneymovement">moneymovement</option>
                    <option value="acquisitions">acquisitions</option>
                    <option value="identityaccessmanagement">identityaccessmanagement</option>
                    <option value="communication">communication</option>
                    <option value="documentmanagement">documentmanagement</option>
                    <option value="rewards">rewards</option>
                    <option value="foundations">foundations</option>
                    <option value="marketing">marketing</option>
                    <option value="servicing">servicing</option>
                    <option value="riskmanagement">riskmanagement</option>
                    <option value="wealthmanagement">wealthmanagement</option>
                    <option value="product">product</option>
                    <option value="partner">partner</option>
                    <option value="info">More info...</option>
                </select>
                <p>{'/'}</p>
                <select 
                    name="url2" 
                    id="url2"
                    onChange={(e) => {
                        const selected = e.target.value;
                        setUrl2(selected)
                        checkIfInfoNeeded(selected)
                    }}>
                    <option value="subdomain">{'{subdomain}'}</option>
                    <option value="accountrelationship">accountrelationship</option>
                    <option value="accountfinancials">accountfinancials</option>
                    <option value="accountmanagement">accountmanagement</option>
                    <option value="customermaster">customermaster</option>
                    <option value="payments">payments</option>
                    <option value="info">More info...</option>
                </select>
                <p>{'/'}</p>
                <select 
                    name="url3" 
                    id="url3"
                    onChange={(e) => {
                        const selected = e.target.value;
                        setUrl3(selected)
                        checkIfInfoNeeded(selected)
                    }}>
                    <option value="function">{'{function}'}</option>
                    <option value="accountholder">accountholder</option>
                    <option value="accountdetails">accountdetails</option>
                    <option value="accounttransactions">accounttransactions</option>
                    <option value="cardcancel">cardcancel</option>
                    <option value="carddetails">carddetails</option>
                    <option value="info">More info...</option>
                </select>
                <p>{'/'}</p>
                <select 
                    name="url4" 
                    id="url4"
                    onChange={(e) => {
                        const selected = e.target.value;
                        setUrl4(selected)
                        checkIfInfoNeeded(selected)
                    }}>
                    <option value="LOB">LOB</option>
                    <option value="Digital">Digital</option>
                    <option value="Retail">Retail</option>
                    <option value="BrandedCards">BrandedCards</option>
                    <option value="CrossLOB">CrossLOB</option>
                    <option value="CRS">CRS</option>
                    <option value="info">More info...</option>
                </select>
                <p>{'/'}</p>
                <input
                    type="text"
                    id="url5"
                    name="url5"
                    placeholder='Qualifier Param'
                    onChange={(e) => {
                        const selected = e.target.value;
                        setUrl5(selected)
                    }}
                ></input>
                <p>{'/'}</p>
                <select 
                    name="url6" 
                    id="url6"
                    onChange={(e) => {
                        const selected = e.target.value;
                        setUrl6(selected)
                        checkIfInfoNeeded(selected)
                    }}>
                    <option value="major version">majorversion</option>
                    <option value="v1">v1</option>
                    <option value="v2">v2</option>
                    <option value="v3">v3</option>
                    <option value="info">More info...</option>
                </select>
                <p>{'/'}</p>
            </div>
            <p className='margin-left-10'>{'}'}</p>
            <p>{'],'}</p>
            <p>{'"paths" : {'}</p>
            <div className='flex-container'>
                <p className='margin-left-10'>{'"/'}</p>
                <select 
                    name="path1" 
                    id="path1"
                    onChange={(e) => {
                        const selected = e.target.value;
                        setPath1(selected)
                        checkIfInfoNeeded(selected)
                    }}>
                    <option value="apiClassification">apiClassification</option>
                    <option value="private">private</option>
                    <option value="public">public</option>
                    <option value="partner">partner</option>
                    <option value="info">More info...</option>
                </select>
                <p>{'/'}</p>
                <input
                    type="text"
                    id="path2"
                    name="path2"
                    placeholder='preloginQualifier'
                    onChange={(e) => {
                        const selected = e.target.value;
                        setPath2(selected)
                    }}
                ></input>
                <p>{'/'}</p>
                <select 
                    name="path3" 
                    id="path3"
                    onChange={(e) => {
                        const selected = e.target.value;
                        setPath3(selected)
                        checkIfInfoNeeded(selected)
                    }}>
                    <option value="csiAppName">csiAppName or channel</option>
                    <option value="CBOL">CBOL</option>
                    <option value="MOB">MOB</option>
                    <option value="ATM">ATM</option>
                    <option value="IVR">IVR</option>
                    <option value="UCD">UCD</option>
                    <option value="info">More info...</option>
                </select>
                <p>{'/'}</p>
                <input
                    type="text"
                    id="path4"
                    name="path4"
                    placeholder='Resource Name'
                    onChange={(e) => {
                        const selected = e.target.value;
                        setPath4(selected)
                    }}
                ></input>
                <p>{'": {'}</p>
            </div>
            <div className='flex-container'>
            <p className='margin-left-10'>{'"'}</p>
            <select 
                name="method" 
                id="method"
                className='crud-method'
                onChange={(e) => {
                    const selected = e.target.value;
                    setMethod(selected)
                }}>
                <option value="GET">GET</option>
                <option value="PUT">PUT</option>
                <option value="POST" defaultValue>POST</option>
                <option value="DELETE">DELETE</option>
            </select>
            <p>{'" : {}'}</p>
            </div>
            <p className='margin-left-20'>{'}'}</p>
            <p className='margin-left-10'>{'}'}</p>
            <p>{'}'}</p>
            <div>
            <Controller 
            title1={title1}
            title2={title2}
            title3={title3}
            title4={title4}
            title5={title5}
            url1={url1}
            url2={url2}
            url3={url3}
            url4={url4}
            url5={url5}
            url6={url6}
            path1={path1}
            path2={path2}
            path3={path3}
            path4={path4}
            method={method}
            />
            </div>
        </form>
    </div>
  )
}
