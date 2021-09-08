import React, {useState} from 'react'
import {Modal, Button, Form, FormControl} from 'react-bootstrap'
import '../../styles/Modals.css'

export default function MyVerticallyCenteredModal(props) {
  const [selectedPlaylist, setSelectedPlaylist] = useState('')

  function handleChange(e) {
    setSelectedPlaylist(e.target.value)
  }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
          Add to a Playlist
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4></h4>

        <Form onSubmit={props.onSubmit(selectedPlaylist)}>
            <Form.Control 
                as="select"
                aria-label="Default select example"
                placeholder='Select a Playlist'
                value={selectedPlaylist}
                onChange={handleChange}
                required
            >
              <option value=''> -- Select a Playlist -- </option>
            {props.playlists.map(opt => (
              <option value={opt.id}>{opt.id}</option>
            ))}
                
               
                
            

                
            </Form.Control>
            <div className='text-center'>
            <Button type='submit' variant="success" className="w-75 mt-3 modal-create-btn">Add the Video</Button>
            </div>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}
