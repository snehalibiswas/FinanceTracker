import React from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../firebase';
import "../Styles/Pages/ExpenseDashboard.css"
import Topbar from '../Components/Topbar';

const db = getFirestore(app);


function ExpenseDashboard() {
    const [expenses, setExpenses] = React.useState([]);
    const [category, setCategoryFilter] = React.useState([
        "Food", "Entertainment", "Personal", "Study", "Others"
    ]);
    const [paymentMode, setPaymentModeFilter] = React.useState([
        "Cash", "GPay", "Paytm Wallet", "Credit Card", "Debit Card"
    ]);

    React.useEffect(() => {
        getExpenses();
    }, []);

    const getExpenses = async () => {
        const expensesTemp = [];
        const expensesCol = collection(db, 'expenses');
        getDocs(expensesCol).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let document = {
                    id: doc.data().id,
                    title: doc.data().title,
                    value: doc.data().value,
                    category: doc.data().category,
                    date: doc.data().date,
                    paymentThrough: doc.data().paymentMode,
                }
                expensesTemp.push(document);
            });
            setExpenses(expensesTemp);
        });
    }

    const onCheckboxChange = (e) => {
        if (e.target.checked) {
            if (!category.includes(e.target.value)) {
                setCategoryFilter([...category, e.target.value]);
            }
        } else {
            if (category.includes(e.target.value)) {
                // remove that value from the array
                const index = category.indexOf(e.target.value);
                category.splice(index, 1);
                setCategoryFilter([...category]);
            }
        }
        console.log(category);
    }

    const onModeCheckboxChange = (e) => {
        if (e.target.checked) {
            if (!paymentMode.includes(e.target.value)) {
                setPaymentModeFilter([...paymentMode, e.target.value]);
            }
        } else {
            if (paymentMode.includes(e.target.value)) {
                // remove that value from the array
                const index = paymentMode.indexOf(e.target.value);
                paymentMode.splice(index, 1);
                setPaymentModeFilter([...paymentMode]);
            }
        }
        console.log(paymentMode);
    }



    return (
        <>
            <Topbar />
            <div className='dashboard'>
                <div className='filters'>
                    <div className='filter'>
                        <p className='filter_heading'>Show by expense Category</p>
                        <div className='filter_options'>
                            <div className='filter_option'>
                                <input
                                    type='checkbox'
                                    id='Food'
                                    name='Food'
                                    value='Food'
                                    // keep it checked
                                    // checked={true}
                                    onChange={onCheckboxChange}
                                    defaultChecked={true}
                                />
                                <label htmlFor='Food'>Food</label>
                            </div>
                            <div className='filter_option'>
                                <input
                                    type='checkbox'
                                    id='Entertainment'
                                    name='Entertainment'
                                    value='Entertainment'
                                    // keep it checked
                                    // checked={true}
                                    onChange={onCheckboxChange}
                                    defaultChecked={true}
                                />
                                <label htmlFor='Entertainment'>Entertainment</label>
                            </div>
                            <div className='filter_option'>
                                <input
                                    type='checkbox'
                                    id='Personal'
                                    name='Personal'
                                    value='Personal'
                                    // keep it checked
                                    // checked={true}
                                    onChange={onCheckboxChange}
                                    defaultChecked={true}
                                />
                                <label htmlFor='Personal'>Personal</label>
                            </div>
                            <div className='filter_option'>
                                <input
                                    type='checkbox'
                                    id='Study'
                                    name='Study'
                                    value='Study'
                                    // keep it checked
                                    // checked={true}
                                    onChange={onCheckboxChange}
                                    defaultChecked={true}
                                />
                                <label htmlFor='Study'>Study</label>
                            </div>
                            <div className='filter_option'>
                                <input
                                    type='checkbox'
                                    id='Others'
                                    name='Others'
                                    value='Others'
                                    // keep it checked
                                    // checked
                                    onChange={onCheckboxChange}
                                    defaultChecked={true}
                                />
                                <label htmlFor='Others'>Others</label>
                            </div>
                        </div>
                    </div>

                    <div className='filter'>
                        <p className='filter_heading'>Show by payment mode</p>
                        <div className='filter_options'>
                            <div className='filter_option'>
                                <input
                                    type='checkbox'
                                    id='Cash'
                                    name='Cash'
                                    value='Cash'
                                    // keep it checked
                                    // checked={true}
                                    onChange={onModeCheckboxChange}
                                    defaultChecked={true}
                                />
                                <label htmlFor='Cash'>Cash</label>
                            </div>
                            <div className='filter_option'>
                                <input
                                    type='checkbox'
                                    id='GPay'
                                    name='GPay'
                                    value='GPay'
                                    // keep it checked
                                    // checked={true}
                                    onChange={onModeCheckboxChange}
                                    defaultChecked={true}
                                />
                                <label htmlFor='GPay'>GPay</label>
                            </div>
                            <div className='filter_option'>
                                <input

                                    type='checkbox'
                                    id='Paytm Wallet'
                                    name='Paytm Wallet'
                                    value='Paytm Wallet'
                                    // keep it checked
                                    // checked={true}
                                    onChange={onModeCheckboxChange}
                                    defaultChecked={true}
                                />
                                <label htmlFor='Paytm Wallet'>Paytm Wallet</label>
                            </div>
                            <div className='filter_option'>
                                <input
                                    type='checkbox'
                                    id='Credit Card'
                                    name='Credit Card'
                                    value='Credit Card'
                                    // keep it checked
                                    // checked={true}
                                    onChange={onModeCheckboxChange}
                                    defaultChecked={true}
                                />
                                <label htmlFor='Credit Card'>Credit Card</label>
                            </div>
                            <div className='filter_option'>
                                <input

                                    type='checkbox'
                                    id='Debit Card'
                                    name='Debit Card'
                                    value='Debit Card'
                                    defaultChecked={true}
                                    // keep it checked
                                    // checked={true}
                                    onChange={onModeCheckboxChange}
                                />
                                <label htmlFor='Debit Card'>Debit Card</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='exepenses_table'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th scope='col'>Title</th>
                                <th scope='col'>Value</th>
                                <th scope='col'>Category</th>
                                <th scope='col'>Payment Through</th>
                                <th scope='col'>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.map((expense) => {
                                if (category.includes(expense.category) && paymentMode.includes(expense.paymentThrough))
                                    return (
                                        <tr key={expense.id}>
                                            <td>{expense.title}</td>
                                            <td>{expense.value}</td>
                                            <td>{expense.category}</td>
                                            <td>{expense.paymentThrough}</td>
                                            <td>{expense.date}</td>
                                        </tr>
                                    )
                            }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ExpenseDashboard