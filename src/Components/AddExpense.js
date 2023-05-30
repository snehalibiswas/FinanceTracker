import React from 'react'
import '../Styles/Components/AddExpense.css'
import { Dropdown } from 'rsuite';
import { actionCreators } from "../State";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { app } from '../firebase';
import uniqid from "uniqid";
import {
    getFirestore,
    doc,
    setDoc,
    updateDoc,
} from "firebase/firestore";
const db = getFirestore(app);
function AddExpense() {
    const id = uniqid("expense")
    const [expId] = React.useState(id);
    const editExpState = useSelector(state => state.selExp);
    const state = useSelector(state => state.isOpen);
    const editState = useSelector(state => state.isEdit);
    const dispatch = useDispatch();
    const [title, setTitle] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [paymentMode, setPaymentMode] = React.useState('');
    const [value, setValue] = React.useState('');
    const [date, setDate] = React.useState('');
    const handleSubmit = async () => {
        if (title === "" || value === "" || category === "" || paymentMode === "") {
            alert("Please fill all the fields");
        } else {
            if (!editState) {
                const expenseRef = doc(db, "expenses", expId);
                let document = {
                    id: expId,
                    title: title,
                    value: value,
                    category: category,
                    date: date,
                    paymentMode: paymentMode,
                }
                await setDoc(expenseRef, document);
                alert("Expense Saved Successfully");
                dispatch(actionCreators.setIsOpen(false));
                window.location.reload();
            } else {
                let document = {
                    id: editExpState?.id,
                    title: title,
                    value: value,
                    category: category,
                    date: date,
                    paymentMode: paymentMode,
                }
                const expenseRef = doc(db, "expenses", editExpState.id);
                await updateDoc(expenseRef, document);
                alert("Expenses Updated Successfully");
                dispatch(actionCreators.setIsOpen(false));
                window.location.reload();
            }
        }
    }
    return (
        <>
            {state && (
                <section className='add_expense_main'>
                    <p className='add_expense_title'>{editState ? 'Edit Expense' : 'Add Expense'}</p>
                    <input autoComplete={editExpState?.title} onChange={(e) => { setTitle(e.target.value) }} className='title_input' type='text' placeholder='Title' />
                    <select onChange={(e) => { setCategory(e.target.value) }} className='category_dropdown' name="cars" id="cars">
                        <option value="wrong">Select Category</option>
                        <option value="Food">Food</option>
                        <option value="Personal">Personal</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Study">Study</option>
                        <option value="others">Others</option>
                    </select>
                    <select onChange={(e) => { setPaymentMode(e.target.value) }} className='category_dropdown' name="cars" id="cars">
                        <option value="wrong">Select Payment Method</option>
                        <option value="Cash">Cash</option>
                        <option value="GPay">GPay</option>
                        <option value="Paytm Wallet">Paytm Wallet</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Debit Card">Debit Card</option>
                    </select>
                    {/* <input autoComplete={editExpState?.category} onChange={(e) => { setCategory(e.target.value) }} className='title_input' type='text' placeholder='Category' /> */}
                    {/* <input autoComplete={editExpState?.paymentThrough} onChange={(e) => { setPaymentMode(e.target.value) }} className='title_input' type='text' placeholder='Payment Made Through' /> */}
                    <input autoComplete={editExpState?.value} onChange={(e) => { setValue(e.target.value) }} className='value_input' type='number' placeholder='Expense Made' />
                    <input autoComplete={editExpState?.date} onChange={(e) => { setDate(e.target.value) }} className='value_input' type='date' placeholder='Date' />
                    <button onClick={handleSubmit} className='add_expenses add'>{editState ? 'Save Edits' : 'Add Expense'}</button>
                    <button onClick={() => {
                        dispatch(actionCreators.setIsOpen(false));
                        dispatch(actionCreators.setEdit(false));
                        dispatch(actionCreators.setExpense({}))
                    }} className='add_expenses add'>Close</button>
                </section>
            )}
        </>
    )
}

export default AddExpense