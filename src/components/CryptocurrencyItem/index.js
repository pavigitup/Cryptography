import {Component} from 'react'
import './index.css'

class CryptocurrencyItem extends Component {
  render() {
    const {coinTypes} = this.props
    console.log(coinTypes)

    const {currencyLogo, currencyName, euroValue, usdValue} = coinTypes
    return (
      <li className="list-con">
        <div data-testid="Loader">
          <img
            src={currencyLogo}
            className="currency-logo"
            alt={currencyName}
          />
        </div>
        <div>
          <p>{euroValue}</p>
        </div>
        <div>
          <p>{usdValue}</p>
        </div>
      </li>
    )
  }
}

export default CryptocurrencyItem
