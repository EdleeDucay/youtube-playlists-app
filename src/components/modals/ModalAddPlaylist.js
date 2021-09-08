import React, {useState, useRef} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import '../../styles/Modals.css'

export default function MyVerticallyCenteredModal(props) {
    const titleRef = useRef()
    
    function handleChange() {
      props.setPlaylistTitle(titleRef.current.value)
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
          Create a new Playlist
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4></h4>

            <Form onSubmit={props.onSubmit} onChange={handleChange}>
                <Form.Group className="mb-3" controlId="formCreatePlaylist">
                    <Form.Label className="modal-label">Playlist Name</Form.Label>
                    <Form.Control placeholder="Name of your playlist" ref={titleRef} required/>

                </Form.Group>
             <Button type='submit' variant="success" className="w-100 modal-create-btn">Create</Button>
                
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

    );
}
