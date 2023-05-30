import React from 'react'
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

function IncomeCard({ title, value, id, paymentMode }) {
    const dispatch = useDispatch();
    const handleDelete = async () => {
        await deleteDoc(doc(db, "income", id));
        alert("Income has been deleted successfully");
        window.location.reload();
    }
    return (
        <section className='expense_card'>
            <div className='expense_card_left'>
                <p className='expense_card_title'>{title}</p>
                <p className='expense_card_category'>Income Added In - {paymentMode}</p>
                <div>
                    <button onClick={() => {
                        dispatch(actionCreators.setEditIncome(true));
                        dispatch(actionCreators.setIncomeOpen(true));
                        dispatch(actionCreators.setIncome({
                            id: id,
                            title: title,
                            value: value,
                        }))
                    }} className='edit_button'>Edit</button>
                    <button onClick={handleDelete} className='edit_button'>Delete</button>
                </div>
            </div>
            <div className='expense_card_price'>₹ {value}</div>
        </section>
    )
}

export default IncomeCard