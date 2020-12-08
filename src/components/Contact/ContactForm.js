import React from 'react'

import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"

function ContactForm() {
    return (
        <Form className="form">
            <Form.Group className="form--form-group" controlId="formBasicText">
                <Form.Label className="form--form-group--label">Name</Form.Label>
                <Form.Control className="form--form-group--input" type="text" />
            </Form.Group>

            <Form.Group className="form--form-group" controlId="formBasicEmail">
                <Form.Label className="form--form-group--label">Email</Form.Label>
                <Form.Control className="form--form-group--input" type="email" />
            </Form.Group>

            <Form.Group className="form--form-group" controlId="formBasicWebsite">
                <Form.Label className="form--form-group--label">Website</Form.Label>
                <InputGroup className="mb-2 form--form-group--input-group">
                    <InputGroup.Prepend>
                    <InputGroup.Text>https://</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl className="form--form-group--input form--form-group--input--no-radius" id="inlineFormInputGroup" />
                </InputGroup>
            </Form.Group>

            <Form.Group className="form--form-group" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="form--form-group--label">Message</Form.Label>
                <Form.Control className="form--form-group--input" as="textarea" rows={3} />
            </Form.Group>

            <Form.Group className="form--form-group form--form-group__checkbox" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" />
            </Form.Group>

            <Button className="form--button" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default ContactForm
