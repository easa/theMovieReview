import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { FirebaseContext } from '../firebase'
import { statement } from '@babel/template';

const INITIAL_MOVIE = {
  title: 'movie title',
  year: 'year of production',
  review: 'a simple text written about this movie',
  author: { name: 'easa', id: 'alksjfoii2joi4j' },
  date: new Date(),
  comments: [{
    content: 'this is a good movie',
    author: { name: 'easa', id: 'alksjfoii2joi4j' },
    date: new Date()
  }]
}
const ReviewPage = () => {
  const [movie, setMovie] = useState(INITIAL_MOVIE)
  const firebase = useContext(FirebaseContext)
  const onAddComment = event => {
    if (movie.addCommentURL)
      return <Redirect to={movie.addCommentURL} />
  }
  const onLike = event => {
    // TODO: direct firebase add like function
  }
  const { title, year, date, review, comments, author } = movie
  return (
    <div className="col-md-6 coffset-md-3">
      <h2>{title} - ({year})</h2>
      <hr />
      <p>{review}</p>
      <p><author>
        by <a href={'/user/' + author.id}> {author.name} </a>
        <small>at {date.toDateString()}</small>
      </author></p>
      <hr />
      <div className="col-md-11 coffset-md-1">
        <h6>Comments: </h6>
        {comments.map(comment => (
          <div className="comment"> {
            <p> {comment.content}
              <author> | by
                <a href={'/user/' + comment.author.id}> {comment.author.name} </a>
                <small>at {comment.date.toDateString()} </small>
              </author>
            </p>
          } </div>
        ))}
      </div>
    </div>
  )
}
export default ReviewPage