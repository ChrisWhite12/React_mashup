import React from 'react'
import currencies from '../supported_curr.json'

const CurrSel = ({currency, handleCurrencyChange}) => {
    return (
        <div>
            <span>Select You Currency</span>
            <select value={currency} onChange={(event) => handleCurrencyChange(event.target.value)}>
                {currencies.map((obj,index) =>
                    <option key={`${index}-${obj.country}`} value={obj.currency}>{obj.country}</option> 
                )}

            </select>
        </div>
    )
}

export default CurrSel