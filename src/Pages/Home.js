import React from 'react'
import Topbar from '../Components/Topbar'
import Transaction from '../Components/Transaction'
import '../Styles/Pages/Home.css'
import Statistics from '../Components/Statistics'
import Expense from '../Components/Expense'
import AddExpense from '../Components/AddExpense'
import { useSelector } from 'react-redux';
import Income from '../Components/Income'
import AddIncome from '../Components/AddIncome'
import { useDispatch } from "react-redux";
import { actionCreators } from "../State";
import { app } from '../firebase';
import {
    getFirestore,
    doc,
    setDoc,
    updateDoc,
    collection,
    getDocs,
} from "firebase/firestore";
import Bifurcation from '../Components/Bifurcation'
const db = getFirestore(app);

function Home() {
    const [totalIncome, setTotalIncome] = React.useState(0);
    const dispatch = useDispatch();
    const state = useSelector(state => state.isOpen);
    const incState = useSelector(state => state.isIncOpen)
    const [isOpen, setIsOpen] = React.useState(true)
    const [incomeData, setIncData] = React.useState([]);
    const incomeTempArray = [];
    const [expenseData, setExpData] = React.useState([]);
    const expenseTempArray = [];
    const [categoryData, setCategoryData] = React.useState([]);
    const categoryTempArray = [];
    const [paymentModeData, setPaymentModeData] = React.useState([]);
    const paymentModeTempArray = [];
    const [totalExpense, setTotalExpense] = React.useState(0);
    const [totalSavings, setTotalSavings] = React.useState(0);
    // React.useEffect(() => {
    //     getExpenseData();
    // }, [])
    // React.useEffect(() => {
    //     getTotalIncome();
    //     getTotalExpense();
    //     getSavings();
    // }, [totalIncome, totalExpense, totalSavings])

    const getExpenseData = async () => {
        const expenseRef = collection(db, "expenses");
        getDocs(expenseRef).then((snapshot) => {
            expenseTempArray.length = 0;
            snapshot.docs.forEach((doc) => {
                expenseTempArray.push(doc.data());
            })
            setExpData(expenseTempArray);
        })
        const incomeRef = collection(db, "income");
        getDocs(incomeRef).then((snapshot) => {
            incomeTempArray.length = 0;
            snapshot.docs.forEach((doc) => {
                incomeTempArray.push(doc.data());
            })
            setIncData(incomeTempArray);
        })
    }
    let tempTotalIncome = 0;
    const getTotalIncome = () => {
        tempTotalIncome = 0;
        incomeData.map((inc) => {
            // console.log(inc.value);
            tempTotalIncome += parseInt(inc.value);
        })
        setTotalIncome(tempTotalIncome);
    }
    let tempTotalExpense = 0;
    const getTotalExpense = () => {
        // console.log('hello')
        tempTotalExpense = 0;
        expenseData.map((inc) => {
            // console.log(inc.value);
            let document = {
                id: inc.id,
                category: inc.category,
                expense: parseInt(inc.value),
            }
            let document_two = {
                id: inc.id,
                category: inc.paymentMode,
                expense: parseInt(inc.value),
            }
            // console.log(document);
            categoryTempArray.push(document);
            paymentModeTempArray.push(document_two);
            tempTotalExpense += parseInt(inc.value);
        })
        setTotalExpense(tempTotalExpense);
    }
    const getSavings = () => {
        let temp = totalIncome - totalExpense;
        setTotalSavings(temp);
    }
    const transactions = [
        {
            title: 'Total Income',
            value: totalIncome,
            percent: '12'
        },
        {
            title: 'Total Expense',
            value: totalExpense,
            percent: '12'
        },
        {
            title: 'Total Saving',
            value: totalSavings,
            percent: '12'
        },
    ]
    return (
        <>
            {state && (<section className='add_expense_section'>
                <AddExpense />
            </section>)}
            {incState && (<section className='add_expense_section'>
                <AddIncome />
            </section>)}
            <section className='topbar_section'>
                <Topbar />
            </section>
            <section className='main_container'>
                {/* <section className='transaction_container' style={{ display: "flex" }}>
                    {transactions.map((tr) => {
                        return (
                            <Transaction title={tr.title} value={tr.value} percent={tr.percent} />
                        )
                    })}
                </section> */}
                <section className='bifurcation_section'>
                    <Bifurcation />
                </section>
                <section className='income_section desktop'>
                    <Income />
                </section>
                <section className='expenses_section desktop'>
                    <Expense />
                </section>
                <section className='income_and_expense_mobile'>
                    <section className='income_section'>
                        <Income />
                    </section>
                    <section className='expenses_section'>
                        <Expense />
                    </section>
                </section>
                <section className='statistics_container'>
                    <Statistics />
                </section>
            </section>
        </>
    )
}

export default Home