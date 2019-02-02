import React, { Component, ReactNode } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input } from 'reactstrap';
import { axiosClient as axios } from '../../plugins/axios/axiosClient';
import { apiPaths } from '../../plugins/axios/apiPaths';

interface INewContactModalSate {
  firstName: string;
  lastName: string;
  email: string;
  phone: string | number;
  company: string;
}

interface INewContactModalProps {
  toggleContactModal: () => void;
  contactModal: boolean;
}

class NewContactModal extends Component<INewContactModalProps, INewContactModalSate> {

  state: INewContactModalSate = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: ''
  };

  updateInput = (e: any): void => {
    // @ts-ignore
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitNewContact = () => {
    const { firstName, lastName, email, phone, company } = this.state;
    if (firstName && lastName && email && phone && company) {
      axios.post(apiPaths.contacts, this.state)
        .then((res: any) => console.log(res.data));
      this.props.toggleContactModal();
    } else {
      alert('all fields must be filled');
    }
  }

  render(): ReactNode {
    const { contactModal, toggleContactModal } = this.props;
    const { firstName, lastName, email, phone, company } = this.state;
    return (
      <Modal isOpen={contactModal} toggle={toggleContactModal}>
        <ModalHeader toggle={toggleContactModal}>Add new contact</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Input
              value={firstName}
              type="text"
              onChange={this.updateInput}
              name="firstName" id="firstName"
              placeholder="First name" />
          </FormGroup>
          <FormGroup>
            <Input
              value={lastName}
              type="text"
              onChange={this.updateInput}
              name="lastName"
              id="lastName"
              placeholder="Last name" />
          </FormGroup>
          <FormGroup>
            <Input
              value={email}
              type="email"
              onChange={this.updateInput}
              name="email"
              id="email"
              placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Input
              value={phone}
              type="text"
              onChange={this.updateInput}
              name="phone"
              id="phone"
              placeholder="Phone number" />
          </FormGroup>
          <FormGroup>
            <Input
              value={company}
              type="text"
              onChange={this.updateInput}
              name="company"
              id="company"
              placeholder="Company" />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.submitNewContact}>Add new</Button>{' '}
          <Button color="secondary" onClick={toggleContactModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default NewContactModal;
