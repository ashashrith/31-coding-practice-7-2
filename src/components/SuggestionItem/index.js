// Write your code here

import {Component} from 'react'

import GoogleSuggestions from '../GoogleSuggestions'

import './index.css'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

class SuggestionItem extends Component {
  state = {suggestionList: suggestionsList, searchInput: ''}

  searchItem = event => {
    this.setState = {searchInput: event.target.value}
  }

  showSuggestion = id => {
    const {suggestionList} = this.state
    const filterList = suggestionList.filter(each => each.id !== id)

    this.setState({suggestionList: filterList})
  }

  render() {
    const {suggestionList, searchInput} = this.state
    const searchResults = suggestionList.filter(each => {
      each.suggestion.includes(searchInput)
    })

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="logo"
          className="logo-img"
        />
        <div className="mini">
          <div className="cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-img"
            />
            <input
              type="text"
              className="search"
              onChange={this.searchItem}
              value={searchInput}
            />
          </div>
          <ul className="container">
            {searchResults.map(eachItem => (
              <GoogleSuggestions
                suggestionsList={eachItem}
                key={eachItem.id}
                showSuggestion={this.showSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SuggestionItem
