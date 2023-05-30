import React from 'react'
import { useDispatch } from "react-redux";
import { actionCreators } from "../State";
import IncomeCard from './IncomeCard';
import { app } from '../firebase';
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    setDoc,
    updateDoc,
} from "firebase/firestore";
const db = getFirestore(app);


function Income() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        getData();
    }, [])
    const [incomeData, setIncData] = React.useState([]);
    const incomeTempArray = [];
    const getData = () => {
        const incomeRef = collection(db, "income");
        getDocs(incomeRef).then((snapshot) => {
            incomeTempArray.length = 0;
            snapshot.docs.forEach((doc) => {
                incomeTempArray.push(doc.data());
            })
            setIncData(incomeTempArray);
        })
    }
    return (
        <section>
            <div className='expenses_header'>
                <p className='expenses_title'>Income</p>
                <button onClick={() => { dispatch(actionCreators.setIncomeOpen(true)) }} className='add_expenses'>ADD INCOME + </button>
            </div>
            <div>
                {incomeData?.map((exp) => {
                    return (
                        <>
                            <IncomeCard title={exp.title} value={exp.value} id={exp.id} paymentMode={exp.paymentMode}/>
                            <hr style={{ color: "grey", margin: "10px 10px 10px 10px", height: "1.5px", backgroundColor: "#848484" }} />
                        </>
                    )
                })}
            </div>
        </section>
    )
}

export default Income