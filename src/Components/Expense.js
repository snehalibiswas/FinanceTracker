import React from 'react'
import '../Styles/Components/Expense.css'
import ExpenseCard from './ExpenseCard'
import { useDispatch } from "react-redux";
import { actionCreators } from "../State";
import { app } from '../firebase';
import {
    getFirestore,
    collection,
    getDocs,
} from "firebase/firestore";
const db = getFirestore(app);
function Expense() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        getData();
    }, []);
    const expenseTempArray = [];
    const [expData, setExpData] = React.useState([]);
    const getData = () => {
        console.log('running here')
        const expenseRef = collection(db,"expenses");
        getDocs(expenseRef).then((snapshot) => {
            expenseTempArray.length = 0;
            snapshot.docs.forEach((doc) => {
                expenseTempArray.push(doc.data());
            })
            setExpData(expenseTempArray);
            // dispatch(actionCreators.categoryChart(expData));
        })
    }
    // console.log(expData);
    return (
        <section>
            <div className='expenses_header'>
                <p className='expenses_title'>Expenses</p>
                <button onClick={() => { dispatch(actionCreators.setIsOpen(true)) }} className='add_expenses'>ADD EXPENSE + </button>
            </div>
            <div>
                {expData?.map((exp) => {
                    return (
                        <>
                            <ExpenseCard title={exp.title} category={exp.category} value={exp.value} paymentThrough={exp.paymentMode} id={exp.id} />
                            <hr style={{ color: "grey", margin: "10px 10px 10px 10px", height: "1.5px", backgroundColor: "#848484" }} />
                        </>
                    )
                })}
            </div>
        </section>
    )
}

export default Expense