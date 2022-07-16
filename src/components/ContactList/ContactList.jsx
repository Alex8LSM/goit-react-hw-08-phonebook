import ContactItem from '../ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  removeContact,
  fetchContacts,
} from '../../redux/phonebook/phonebookOperations';
import { getContactsByFilter } from '../../redux/phonebook/phonebookSelectors';
import s from './ContactList.module.css';
const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(getContactsByFilter);
  const onDeleteContact = id => {
    dispatch(removeContact(id));
  };
  let contactList = null;

  if (contacts) {
    if (contacts.length === 0)
      contactList = <p className={s.text}>No contacts to show</p>;
    else
      contactList = contacts.map(contact => (
        <ContactItem
          contact={contact}
          onDeleteContact={onDeleteContact}
          key={contact.id}
        />
      ));
  }
  return <div>{contactList}</div>;
};

export default ContactList;
