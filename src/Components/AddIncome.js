import React from 'react'
import { actionCreators } from "../State";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { app } from '../firebase';
import uniqid from "uniqid";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    setDoc,
    updateDoc,
} from "firebase/firestore";
const db = getFirestore(app);



function AddIncome() {
    const id = uniqid("income")
    const [incId] = React.useState(id);
    const editIncomeSel = useSelector(state => state.selInc)
    const [incomeData, setIncData] = React.useState([]);
    const [title, setTitle] = React.useState('');
    const [value, setValue] = React.useState('');
    const editIncState = useSelector(state => state.isEditInc)
    const [paymentMode, setPaymentMode] = React.useState('');
    const handleSubmit = async () => {
        if (title === "" || value === "") {
            alert("Please fill all the fields");
        } else {
            if (!editIncState) {
                const incomeRef = doc(db, "income", incId);
                let document = {
                    id: incId,
                    title: title,
                    paymentMode: paymentMode,
                    value: value,
                }
                await setDoc(incomeRef, document);
                alert("Income Saved Successfully");
                dispatch(actionCreators.setIncomeOpen(false));
                window.location.reload();
            } else {
                let document = {
                    id: editIncomeSel.id,
                    title: title,
                    value: value,
                    paymentMode : paymentMode,
                }
                const incomeRef = doc(db, "income", editIncomeSel.id);
                await updateDoc(incomeRef, document);
                alert("Income Updated Successfully");
                dispatch(actionCreators.setIncomeOpen(false));
                window.location.reload();
            }
        }
    }
    const state = useSelector(state => state.isIncOpen);
    const dispatch = useDispatch();
    return (
        <>
            {state && (
                <section style={{ height: "430px" }} className='add_expense_main'>
                    <p className='add_expense_title'>{editIncState ? 'Edit Income' : 'Add Income'}</p>
                    <input autoComplete={editIncomeSel?.title} onChange={(e) => { setTitle(e.target.value) }} className='title_input' type='text' placeholder='Title' />
                    <input autoComplete={editIncomeSel?.value} onChange={(e) => { setValue(e.target.value) }} className='value_input' type='number' placeholder='Income Added' />
                    <select onChange={(e) => { setPaymentMode(e.target.value) }} className='category_dropdown' name="cars" id="cars">
                        <option value="wrong">Select Payment Method</option>
                        <option value="Cash">Cash</option>
                        <option value="GPay">GPay</option>
                        <option value="Paytm Wallet">Paytm Wallet</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Debit Card">Debit Card</option>
                    </select>
                    <button onClick={handleSubmit} className='add_expenses add'>{editIncState ? 'Save Edits' : 'Add Income'}</button>
                    <button onClick={() => {
                        dispatch(actionCreators.setIncomeOpen(false));
                        dispatch(actionCreators.setEditIncome(false));
                        dispatch(actionCreators.setIncome({}));
                    }} className='add_expenses add'>Close</button>
                </section>
            )}
        </>
    )
}

export default AddIncome