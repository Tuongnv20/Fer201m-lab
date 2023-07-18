import React from "react";


import { Icon, Container, TextInput, Select, Textarea, Button } from 'react-materialize'


const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Submit successfully')

    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <h1>Contact us </h1>
                <TextInput id="TextInput-1" label="Your Name" />
                <TextInput id="TextInput-2" label="Your Phone" />
                <TextInput email id="TextInput-3" label="Email" validate />
                <Select id="Select-1" multiple={false} onChange={function noRefCheck() { }} value="">
                    <option disabled value="">
                        Choose Your Country
                    </option>
                    <option value='1'>
                        Viet Nam
                    </option>
                    <option value='2'>
                        America
                    </option>
                    <option value='3'>
                        Japan
                    </option>
                </Select>
                <Textarea icon={<Icon>mode_edit</Icon>} id="Textarea-1" label="Message" />
                <Button
                    node="button"
                    type="submit"
                    waves="light"
                >
                    Submit
                    <Icon right>
                        send
                    </Icon>
                </Button>
            </form>
        </Container>
    )
}
export default Contact;