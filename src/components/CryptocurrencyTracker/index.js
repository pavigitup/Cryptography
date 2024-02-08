import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {coinList: [], isLoading: true}

  componentDidMount() {
    this.getCoinsList()
  }

  getCoinsList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))
    this.setState({coinList: updatedData, isLoading: false})
    console.log(updatedData)
  }

  render() {
    const {coinList, isLoading} = this.state
    return (
      <>
        {isLoading ? <Loader /> : <CryptocurrenciesList coinList={coinList} />}
      </>
    )
  }
}

export default CryptocurrencyTracker
