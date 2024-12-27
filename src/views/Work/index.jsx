import React from 'react'
import Navbar from '../Navbar'

function Work() {
  return (
    <div className="w-4/5 mx-auto">
      <Navbar />
      <div className="space-y-4">
        <label className="input input-bordered flex items-center gap-2 w-full md:w-auto">
          Name
          <input type="text" className="grow" placeholder="Daisy" />
        </label>

        <label className="input input-bordered flex items-center gap-2 w-full md:w-auto">
          Email
          <input type="text" className="grow" placeholder="daisy@site.com" />
        </label>

        <textarea
          placeholder="Bio"
          className="textarea textarea-bordered textarea-lg w-full"
        ></textarea>
      </div>
    </div>
  );
}

export default Work
