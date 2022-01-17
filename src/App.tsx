import React from 'react'
import MyForm from './components/my-form'
import './App.css'
import MyErrorBoundary from './components/common/MyErrorBoundary'

function App() {
    return (
        <MyErrorBoundary>
            <div className="App">
                <MyForm />
            </div>
        </MyErrorBoundary>
    )
}

export default App
