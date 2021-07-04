import React from 'react-dom'
import ReactDOM from 'react'

export default class App extends React.Component {
    render() {
        return <h1>React App</h1>
    }
}

ReactDOM.render(<App />, document.getElementById('app'))