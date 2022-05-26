import React from 'react'

export default function Steps() {
  return (
    <div className='sticky-container'>
        <div className='steps-container'>
            <div className='step-div'>
                <div className='circle'>
                    <p className='number'>1</p>
                </div>
                <p className='step-paragraph'>You can align the <span className='title'>title</span> or name of the API to the PBWM Taxonomy (try changing elements in the title to see options).</p>
            </div>
            
            <div className='step-div'>
                <div className='circle'>
                    <p className='number'>2</p>
                </div>
                <p className='step-paragraph'>You can align the <span className='base-path'>base path</span> to the Citi API standards as well (try changing elements in the title to see options).</p>
            </div>

            <div className='step-div'>
                <div className='circle'>
                    <p className='number'>3</p>
                </div>
                <div className="step-3">
                    <p className='step-paragraph'>Choose your API Access Level which will drive the security recipe of controls applied to your API including Authentication and Authorization:</p>
                    <div className='margin-bottom-10 flex-container'>
                        <input type="radio" id="pre-login" name="access-level" value="pre-login" />
                        <label htmlFor="pre-login">Pre-Login</label>
                    </div>
                    <div className='flex-container'>
                        <input type="radio" id="post-login" name="access-level" value="post-login" />
                        <label htmlFor="post-login">Post-Login</label>
                    </div>
                    <audio className="step-audio" controls>
                        <source src="horse.ogg" type="audio/ogg" />
                        <source src="horse.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    <br/>
                    <button className='save-button'>Save</button>
                </div>
            </div>

            <div className='step-div'>
                <div className='circle'>
                    <p className='number'>4</p>
                </div>
                <p className='step-paragraph'>Select a basic <span className='crud-method'>CRUD method</span> to use with your API.</p>
            </div>

            <div className='step-div'>
                <div className='circle'>
                    <p className='number'>5</p>
                </div>
                <p className='step-paragraph'>Test your API:</p>
            </div>
        </div>
    </div>
  )
}
