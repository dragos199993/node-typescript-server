import React, { Component, ReactNode } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import styles from './ContactDisplay.module.scss';

interface IContactDisplayProps {
  contact: any;
  toggleContactModal: () => void;
}

class ContactDisplay extends Component<IContactDisplayProps> {
  render(): ReactNode {
    const { contact, toggleContactModal } = this.props;
    return (
      <Card className={styles.contactDisplay}>
        <CardBody>
          <CardTitle>{contact.firstName} {contact.lastName}</CardTitle>
          <CardText><b>Company:</b> {contact.company}</CardText>
          <CardText><b>Phone:</b> {contact.phone}</CardText>
          <CardText><b>Email:</b> {contact.email}</CardText>
          <Button color="info" onClick={ toggleContactModal }>Edit</Button>
        </CardBody>
      </Card>
    );
  }
}

export default ContactDisplay;
