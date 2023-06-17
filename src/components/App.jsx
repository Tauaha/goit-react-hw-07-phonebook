
import React, { useEffect } from 'react';

import ContactsForm from './ContactsForm/ContactsForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './Filter/Filter';
import { selectorIsLoading } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { contactsApi } from 'redux/contactsApi';
import Loader from "components/Loader/Loader";



export default function App () {
     const dispatch = useDispatch();
     const isLoading = useSelector(selectorIsLoading);
    
   
     useEffect(() => {
       dispatch(contactsApi());
     }, [dispatch]);
    
    return (<div style={{margin:"20px"}}>
       <h1>Phonebook</h1>
  <ContactsForm />
       <h2>Contacts</h2>
  <ContactFilter  />
  {isLoading && <Loader/>}
  <ContactList/>
    </div>
    
   )}








