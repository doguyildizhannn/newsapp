import React, { Component } from 'react'

export default class PlaceHolder extends Component {
    render() {
        return (
            <div className='my-3'>
                <div className="card" aria-hidden="true">
                    <img src="https://cff2.earth.com/uploads/2023/05/28121353/Thin-air-scaled.jpg" className="card-img-top" alt="..." width={250} height={200}/>
                    <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-6"></span>
                            <span className="placeholder col-8"></span>
                        </p>
                        <a href="/" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a>
                    </div>
                </div>
            </div>
        )
    }
}
