import React, { useState, useEffect, useContext } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { Context } from '../../app'

const ReviewPage = (props) => {
  const [movie, setMovie] = useState({})
  const {firebase} = useContext(Context)
  const params = useParams()
  useEffect(() => {
    console.log(params)
  }, [])
  const onAddComment = event => {
    if (movie.addCommentURL) console.log('TODO')
    // TODO: make it a preview of a box to get their comment
  }
  const onLike = event => {
    // TODO: direct firebase add like function
  }
  return <Review {...movie} />
}
const Review = ({ title, year, date, review, comments, author }) => {
  return (
    <div className="col-md-6 coffset-md-3">
      <h2>{title} - ({year})</h2>
      <hr />
      <p>{review}</p>
      {author ? <p> by <a rel="author" href={'/user/' + author.id}> {author.name} </a>
        <small>at {new Date(date).toDateString()}</small>
      </p> : ''}
      <hr />
      {comments ?
        <div className="col-md-11 coffset-md-1">
          <h6>Comments: </h6>
          {comments ? comments.map(comment => (
            <div key={comment.id} className="comment"> {
              <p>{comment.content} | by
                <a rel="author" href={'/user/' + comment.author.id}> {comment.author.name} </a>
                <small>at {new Date(comment.date).toDateString()} </small>
              </p>
            } </div>
          )) : ''}
        </div> : ''}
    </div>
  )
}
export default ReviewPage
export { Review }