import React, {Component, useEffect, useState} from 'react'
import CurrSel from './CurrSel'
import DataDisplay from './DataDisplay'

function Bitcoin (){
    const defaultCurrency = "AUD"
    const [currency, setCurrency] = useState(defaultCurrency)
    const [bitcoinData, setBitcoinData] = useState({})

    const currencyChangeHandler = (newCurrency) => {
        console.log("new: ", newCurrency)
        setCurrency(newCurrency)
    }

    const bitcoinApi = "https://api.coindesk.com/v1/bpi/historical/close.json"

    useEffect(()=>{
        console.log("running useEffect")
        fetch(`${bitcoinApi}?currency=${currency}`)
            .then(res => res.json())
            .then(data => setBitcoinData(data.bpi))
            .catch(err => console.log(err))

    },[currency])
    

    return(
        <div>
            <CurrSel currency={currency} handleCurrencyChange={currencyChangeHandler}/>
            <DataDisplay data={bitcoinData}/>
        </div>
    )
}

export default Bitcoin