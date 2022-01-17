import React from 'react'
import 'components/form-errors/styles.css'

const InputErrorRenderer = ({ formErrors }: any) => (
    <div className="formErrors">
        {Object.keys(formErrors).map((fieldName, i) => {
            if (formErrors[fieldName].length > 0) {
                return (
                    <div
                        key={formErrors[fieldName]}
                        className="bg-pink-600/25 rounded-lg text-xs w-full h-7 text-left my-1 mx-auto flex items-center fadeMe"
                    >
                        <p className="p-2 text-pink-600" key={i}>
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
