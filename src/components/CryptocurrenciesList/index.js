// CryptocurrenciesList.jsx
import {Component} from 'react'

import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  render() {
    const {coinList} = this.props
    return (
      <div className="tracker-con" data-testid="Loader">
        <div>
          <h1>Cryptocurrency Tracker</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
            className="cryptocurrency-img"
          />
        </div>
        <div className="header-con">
          <p>Coin Type</p>
          <div>
            <p>USD</p>
          </div>
          <div>
            <p>EURO</p>
          </div>
        </div>
        <ul className="content-con">
          {coinList.map(each => (
            <CryptocurrencyItem coinTypes={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default CryptocurrenciesList
