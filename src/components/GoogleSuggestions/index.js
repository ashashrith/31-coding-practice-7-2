// Write your code here

import './index.css'

const GoogleSuggestions = props => {
  const {suggestionsList, showSuggestion} = props
  const {suggestion, id} = suggestionsList

  const onShowSuggestion = () => {
    showSuggestion(id)
  }

  return (
    <li className="list-container">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow-img"
        alt="arrow"
        onClick={onShowSuggestion}
      />
    </li>
  )
}

export default GoogleSuggestions
