import React from 'react'
import '../Styles/Components/Statistics.css'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js"
import { app } from '../firebase';
import {
    getFirestore,
    collection,
    getDocs,
} from "firebase/firestore";
import { CChart } from '@coreui/react-chartjs';
const db = getFirestore(app);
Chart.register(CategoryScale);

function Statistics() {
    React.useEffect(() => {
        getExpenseData();
    }, [])
    let food = 0, personal = 0, entertainment = 0, study = 0;
    const [foodTotal, setFoodTotal] = React.useState(0);
    const [personalTotal, setPersonalTotal] = React.useState(0);
    const [entertainmentTotal, setEntertainmentTotal] = React.useState(0);
    const [studyTotal, setStudyTotal] = React.useState(0);
    const [othersTotal, setOthersTotal] = React.useState(0);
    const getExpenseData = async () => {
        const expenseRef = collection(db, "expenses");
        getDocs(expenseRef).then((snapshot) => {
            food = 0;
            entertainment = 0;
            personal = 0;
            study = 0;
            snapshot.docs.forEach((doc) => {
                if (doc.data().category === "Food") {
                    food += parseInt(doc.data().value);
                }
                if (doc.data().category === "Personal") {
                    personal += parseInt(doc.data().value);
                }
                if (doc.data().category === "Entertainment") {
                    entertainment += parseInt(doc.data().value);
                }
                if (doc.data().category === "Study") {
                    study += parseInt(doc.data().value);
                }
                if (doc.data().category === "Others") {
                    setOthersTotal(parseInt(doc.data().value));
                }
            })
            setFoodTotal(food);
            setPersonalTotal(personal);
            setStudyTotal(study);
            setEntertainmentTotal(entertainment);
        })
    }
    return (
        <div className='statistics_section'>
            <p className='statistics_header'>Statistics</p>
            <div>
                <div className='chart'>
                    <CChart
                        type="bar"
                        data={{
                            labels: ['Food', 'Personal', 'Study', 'Entertainment', 'Others'],
                            datasets: [
                                {
                                    label: 'Category Expense',
                                    backgroundColor: '#f87979',
                                    data: [foodTotal, personalTotal, studyTotal, entertainmentTotal, othersTotal],
                                },
                            ],
                        }}
                        labels="Expenses"
                    />
                </div>
            </div>

        </div>
    )
}

export default Statistics