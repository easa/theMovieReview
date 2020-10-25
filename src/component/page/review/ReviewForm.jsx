
import React from 'react'
const ReviewForm = ({ id, title, year, review, error, onChange, onSubmit }) => {
  const isInvalid = review === '' || year === '' || title === '';
  return (
    <div className="col-md-6 coffset-md-3">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputtitle1">title</label>
          <input value={title} onChange={onChange} name="title" type="text" className="form-control" id="exampleInputtitle1" placeholder="Enter title" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputyear2">Email address</label>
          <input value={year} onChange={onChange} name="year" type="text" className="form-control" id="exampleInputyear2" placeholder="Enter year" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputreview1">review</label>
          <input value={review} onChange={onChange} name="review" type="text" className="form-control" id="exampleInputreview1" placeholder="review" />
        </div>
        <button className="btn btn-primary" disabled={isInvalid} type="submit"> Post review </button>
      </form>
      {error ? <span className="text-danger">{error}</span> : ''}
    </div>
  )
}
export default ReviewForm