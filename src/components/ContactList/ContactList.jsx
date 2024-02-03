import { ButtonDel, ItemContact, ItemsContracts } from "components/App.styled"
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from "redux/contacts/operations";
import { selectIsLoading, selectError, selectVisibleContacts } from "redux/contacts/selectors";
import {  toast } from "react-toastify";
import { MdDeleteOutline } from 'react-icons/md';


export const ContactList =() => {

  const dispatch = useDispatch()

  const visibleContacts = useSelector(selectVisibleContacts)

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])

  const onDeleteContact = (id, name) => {
    toast.warn(`${name} removed from contacts 🙈`); 
    dispatch(deleteContact(id))
  }
  return(
    <div>      
        <ItemsContracts>               
          {!isLoading && visibleContacts.map(({id, name, number}) =>(
            <ItemContact key={id}>{name}: {number}
            <ButtonDel onClick={() => onDeleteContact(id,name)}> 
              <MdDeleteOutline/>
               </ButtonDel>
            </ItemContact>
          ) )}
        </ItemsContracts>
        {isLoading && !error && <b>Request in progress...</b>}  
    </div>
)}

