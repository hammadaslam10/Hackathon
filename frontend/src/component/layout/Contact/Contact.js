import React from 'react'
import './Contact.css'
import { Button } from '@material-ui/core'

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:bscs2012156@szabist.pk">
        <Button>Contact: mailto:bscs2012156@szabist.pk</Button>
      </a>
    </div>
  )
}

export default Contact