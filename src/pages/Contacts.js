import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { TaskList } from 'components/TaskList/TaskList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
// import { fetchTasks } from '../redux/tasks/operetions';
import { selectLoading } from 'redux/tasks/selectors';
import { FormContacts, WraperDiv } from 'components/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
    <WraperDiv>
    <div>{isLoading && 'Request in progress...'}</div>
        <h1>Phonebook</h1>
        <ContactForm /> 
        <h2>Contacts</h2>
        <FormContacts>
            <Filter  />  
            <ContactList />
        </FormContacts>
    </WraperDiv>
    </>
  );
}


// import { ContactForm } from "./ContactForm/ContactForm"
// import { ContactList } from "./ContactList/ContactList"
// import { Filter } from "./Filter/Filter"
// import {FormContacts, WraperDiv } from "./App.styled"

// export const App = () =>{
// return (
    // <WraperDiv>
    //     <h1>Phonebook</h1>
    //     <ContactForm /> 
    //     <h2>Contacts</h2>
    //     <FormContacts>
    //         <Filter  />  
    //         <ContactList />
    //     </FormContacts>
    // </WraperDiv>
// )
// }