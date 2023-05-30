import React from 'react'
import '../Styles/Components/ExpenseCard.css'
import { useDispatch } from "react-redux";
import { actionCreators } from "../State";
import { app } from '../firebase';
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    setDoc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";
const db = getFirestore(app);
function ExpenseCard({ id, title, value, category, paymentThrough }) {
    const dispatch = useDispatch();
    const handleDelete = async () => {
        await deleteDoc(doc(db, "expenses", id));
        alert("Expense has been deleted successfully");
        window.location.reload();
    }
    return (
        <section className='expense_card'>
            <div className='expense_card_left'>
                <p className='expense_card_title'>{title}</p>
                <p className='expense_card_category'>{category}</p>
                <p className='expense_card_category'>Payment Made through - {paymentThrough}</p>
                <div>
                    <button onClick={() => {
                        dispatch(actionCreators.setEdit(true));
                        dispatch(actionCreators.setIsOpen(true));
                        dispatch(actionCreators.setExpense({
                            id: id,
                            title: title,
                            value: value,
                            category: category,
                            paymentThrough: paymentThrough,
                        }))
                    }} className='edit_button'>Edit</button>
                    <button onClick={handleDelete} className='edit_button'>Delete</button>
                </div>
            </div>
            <div className='expense_card_price'>₹ {value}</div>
        </section>
    )
}

export default ExpenseCard