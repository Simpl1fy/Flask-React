import React from 'react'

export default function TextForm() {
  return (
    <div>
        <div className="mb-3">
            <h3 className='mb-3'>Enter Text Here</h3>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
            <button type="button" className="btn btn-primary mt-3">Primary</button>
        </div>
    </div>
  )
}

