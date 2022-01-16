import React from 'react'
import './styles.css'

const InputErrorRenderer = ({ formErrors }: any) => (
    <div className="formErrors">
        {Object.keys(formErrors).map((fieldName, i) => {
            if (formErrors[fieldName].length > 0) {
                return (
                    <div
                        key={formErrors[fieldName]}
                        className="error-container fadeMe"
                    >
                        <p className="error-message" key={i}>
                            {formErrors[fieldName]}
                        </p>
                    </div>
                )
            } else {
                return ''
            }
        })}
    </div>
)

export default InputErrorRenderer
