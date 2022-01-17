import React, { Suspense } from 'react'
import MyForm from './components/my-form'
import './App.css'
import MyErrorBoundary from './components/common/MyErrorBoundary'

function App() {
    return (
        <MyErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
                <div className="text-center">
                    <MyForm />
                </div>
            </Suspense>
        </MyErrorBoundary>
    )
}

export default App
