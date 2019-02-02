import React, { Component, ReactNode } from 'react';
import { axiosClient as axios } from '../../plugins/axios/axiosClient';
import { apiPaths } from '../../plugins/axios/apiPaths';
import ContactDisplay from '../../components/ContactDisplay/ContactDisplay';
import { Row, Col, Button } from 'reactstrap';
import NewContactModal from '../../components/NewContactModal/NewContactModal';

interface IContactsState {
  contacts: any;
  contactModal: boolean;
  newContact: {[key: string]: string};
}

class ContactsContainer extends Component<{}, IContactsState> {

  state: IContactsState = {
    contacts: null,
    contactModal: false,
    newContact: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: ''
    }
  };

  componentDidMount(): void {
    axios.get(apiPaths.contacts)
      .then((res: any) => {
        this.setState({
          contacts: res.data
        });
      });
  }

  toggleContactModal = () => {
    this.setState({
      contactModal: !this.state.contactModal
    });
  }

  render(): ReactNode {
    const { contacts, contactModal } = this.state;

    if (!contacts) {
      return null;
    }

    return (
      <Row>
        <Col md="12" className="my-4">
          <Button onClick={this.toggleContactModal}>Add new contact</Button>
        </Col>

        <NewContactModal
          toggleContactModal = { this.toggleContactModal }
          contactModal = { contactModal }
        />

        {contacts.map((contact: any) =>
          <Col md="6" key={contact._id}>
            <ContactDisplay contact={contact} toggleContactModal={ this.toggleContactModal }/>
          </Col>)
        }
      </Row>
    );
  }
}

export default ContactsContainer;
