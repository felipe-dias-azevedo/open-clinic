import React from 'react';

function InputLabel({label, isPassword}) {

    return (
        <section>
            <div className="title-input">
                <h3 className="input-heading">
                    {label}:
                </h3>
                <p>
                    
                </p>
            </div>
            <input 
                type={isPassword ? "password" : "text"}
                id="username-input"
                className="form-control text-input"
                placeholder=""
            />
        </section>
    );
}

export default InputLabel;