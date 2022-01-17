import React from 'react'

class MyErrorBoundary extends React.Component {
    state = {
        errorMessage: '',
    }

    static getDerivedStateFromError(error: { toString: () => any }) {
        return { errorMessage: error.toString() }
    }

    componentDidCatch(
        error: { toString: () => any },
        info: { componentStack: any }
    ) {
        this.logErrorToServices(error.toString(), info.componentStack)
    }

    // A fake logging service.
    logErrorToServices = console.log

    render() {
        if (this.state.errorMessage) {
            return <p>{this.state.errorMessage}</p>
        }
        return this.props.children
    }
}

export default MyErrorBoundary
