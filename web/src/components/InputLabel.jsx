import React from 'react';

function InputLabel({label, isPassword, ...rest}) {
    return (
        <div className="row">
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
                    className="form-control text-input"
                    placeholder=""
                    {...rest}
                />
            </section>
        </div>
    );
}

export default InputLabel;