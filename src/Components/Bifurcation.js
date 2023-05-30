import React from 'react'
import '../Styles/Components/Bifurcation.css'
import { app } from '../firebase';
import {
    getFirestore,
    doc,
    setDoc,
    updateDoc,
    collection,
    getDoc,
    getDocs,
} from "firebase/firestore";
const db = getFirestore(app);

function Bifurcation() {
    let paytmTotal = 0, gpayTotal = 0, debitCardTotal = 0, cashTotal = 0;
    const [paytmExpTotal, setPaytmExpTotal] = React.useState(0);
    const [gpayExpTotal, setGpayExpTotal] = React.useState(0);
    const [debitCardExpTotal, setDebitCardExpTotal] = React.useState(0);
    const [cashExpTotal, setCashExpTotal] = React.useState(0);
    let paytmIncTotal = 0, gpayIncTotal = 0, debitCardIncTotal = 0, cashIncTotal = 0;
    const [paytmIncomeTotal, setPaytmIncomeTotal] = React.useState(0);
    const [gpayIncomeTotal, setGpayIncomeTotal] = React.useState(0);
    const [debitCardIncomeTotal, setDebitCardIncomeTotal] = React.useState(0);
    const [cashIncomeTotal, setCashIncomeTotal] = React.useState(0);

    const [pstotal, setPstotal] = React.useState(0);
    const [gstotal, setGstotal] = React.useState(0);
    const [dcstotal, setDcstotal] = React.useState(0);
    const [cstotal, setCstotal] = React.useState(0);
    React.useEffect(() => {
        getTotalValue();
        getSavings();
    }, [cashExpTotal,
        paytmExpTotal,
        gpayExpTotal,
        debitCardExpTotal,
        cashIncomeTotal,
        paytmIncomeTotal,
        gpayIncomeTotal,
        debitCardIncomeTotal
    ])
    

    const getTotalValue = async () => {
        console.log('running');
        const expenseRef = collection(db, "expenses");
        const incomeRef = collection(db, "income")
        getDocs(expenseRef).then((snapshot) => {
            paytmTotal = 0;
            gpayTotal = 0;
            debitCardTotal = 0;
            cashTotal = 0;
            snapshot.docs.forEach((doc) => {
                if (doc.data().paymentMode === "Cash") {
                    cashTotal += parseInt(doc.data().value);
                }
                if (doc.data().paymentMode === "GPay") {
                    gpayTotal += parseInt(doc.data().value);
                }
                if (doc.data().paymentMode === "Paytm Wallet") {
                    paytmTotal += parseInt(doc.data().value);
                }
                if (doc.data().paymentMode === "Debit Card") {
                    debitCardTotal += parseInt(doc.data().value);
                }
            })
            setCashExpTotal(cashTotal);
            setPaytmExpTotal(paytmTotal);
            setGpayExpTotal(gpayTotal);
            setDebitCardExpTotal(debitCardTotal);
        })
        getDocs(incomeRef).then((snapshot) => {
            paytmIncTotal = 0;
            gpayIncTotal = 0;
            debitCardIncTotal = 0;
            cashIncTotal = 0;
            snapshot.docs.forEach((doc) => {
                if (doc.data().paymentMode === "Cash") {
                    cashIncTotal += parseInt(doc.data().value);
                }
                if (doc.data().paymentMode === "GPay") {
                    gpayIncTotal += parseInt(doc.data().value);
                }
                if (doc.data().paymentMode === "Paytm Wallet") {
                    paytmIncTotal += parseInt(doc.data().value);
                }
                if (doc.data().paymentMode === "Debit Card") {
                    debitCardIncTotal += parseInt(doc.data().value);
                }
            })
            setCashIncomeTotal(cashIncTotal);
            setPaytmIncomeTotal(paytmIncTotal);
            setGpayIncomeTotal(gpayIncTotal);
            setDebitCardIncomeTotal(debitCardIncTotal);
        })


    }

    const getSavings = () => {
        let ps = paytmIncomeTotal - paytmExpTotal;
        let gs = gpayIncomeTotal - gpayExpTotal;
        let dcs = debitCardIncomeTotal - debitCardExpTotal;
        let cs = cashIncomeTotal - cashExpTotal;

        setPstotal(ps);
        setGstotal(gs);
        setDcstotal(dcs);
        setCstotal(cs);
    }
    return (
        <div className='bifurcation_main_container'>
            <p className='bifurcation_heading'>Finances</p>
            <div>
                <p className='bifurcation_subheading'>Paytm Wallet</p>
                <div className='bifurcation_sub_container'>
                    <p className='bifurcation_value'>Balance - <span style={{ color: "orange" }}>₹{pstotal}</span></p>
                    <p className='bifurcation_value'>Credit - <span style={{ color: "green" }}>₹{paytmIncomeTotal}</span></p>
                    <p className='bifurcation_value'>Debit - <span style={{ color: "red" }}>₹{paytmExpTotal}</span></p>
                </div>
            </div>
            <div>
                <p className='bifurcation_subheading'>GPay</p>
                <div className='bifurcation_sub_container'>
                    <p className='bifurcation_value'>Balance - <span style={{ color: "orange" }}>₹{gstotal}</span></p>
                    <p className='bifurcation_value'>Credit - <span style={{ color: "green" }}>₹{gpayIncomeTotal}</span></p>
                    <p className='bifurcation_value'>Debit - <span style={{ color: "red" }}>₹{gpayExpTotal}</span></p>
                </div>
            </div>
            <div>
                <p className='bifurcation_subheading'>Debit Card</p>
                <div className='bifurcation_sub_container'>
                    <p className='bifurcation_value'>Balance - <span style={{ color: "orange" }}>₹{dcstotal}</span></p>
                    <p className='bifurcation_value'>Credit - <span style={{ color: "green" }}>₹{debitCardIncomeTotal}</span></p>
                    <p className='bifurcation_value'>Debit - <span style={{ color: "red" }}>₹{debitCardExpTotal}</span></p>
                </div>
            </div>
            <div>
                <p className='bifurcation_subheading'>Cash</p>
                <div className='bifurcation_sub_container'>
                    <p className='bifurcation_value'>Balance - <span style={{ color: "orange" }}>₹{cstotal}</span></p>
                    <p className='bifurcation_value'>Credit - <span style={{ color: "green" }}>₹{cashIncomeTotal}</span></p>
                    <p className='bifurcation_value'>Debit - <span style={{ color: "red" }}>₹{cashExpTotal}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Bifurcation