import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormContacts, GradientSubTitleContacts, GradientTextPhone, WraperDiv } from 'components/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if(fetchContacts()) return
    dispatch(fetchContacts());
  }, [dispatch]);

  return (  
    <WraperDiv>
    <div>{isLoading && 'Request in progress...'}</div>
        <GradientTextPhone>Phonebook</GradientTextPhone>
        <ContactForm /> 
        <GradientSubTitleContacts>Contacts</GradientSubTitleContacts>
        <FormContacts>
            <Filter  />  
            <ContactList />
        </FormContacts>
    </WraperDiv>    
  );
}
