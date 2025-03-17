import React from 'react'
import MovieHeader from './MovieHeader'

const SearchMovie = () => {
    return (
        <div>
            <MovieHeader />
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Search Movie</label>
                    <input type="text" className="form_control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success">Search</button>
                </div>
            </div>

        </div>
    )
}

export default SearchMovie