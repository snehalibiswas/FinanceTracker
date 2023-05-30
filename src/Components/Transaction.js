import React from 'react'
import arrow from '../Assets/Arrow.svg'
import '../Styles/Components/Transaction.css'

function Transaction({ title, value, percent }) {
    return (
        <section className='transaction_card'>
            <div className='card_title'>{title}</div>
            <div className='card_value'>₹{value}</div>
            {/* <div className='card_change_section'>
                <p className='card_text'>from last week</p>
                <div className='change_section'>
                    <img className='arrow' src={arrow} alt='arrow_image' />
                    <p className='percent'>{percent}%</p>
                </div>
            </div> */}
        </section>
    )
}

export default Transaction