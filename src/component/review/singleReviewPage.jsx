import React, { useState, useEffect, useContext } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { FirebaseContext } from '../firebase'

const INITIAL_MOVIE = {
  id: 'oijafoi34jo',
  title: 'movie title',
  director: 'john doe',
  stars: 'john doe, micheal jackson',
  year: 'year of production',
  review: 'a simple text written about this movie',
  author: { name: 'easa', id: 'alksjfoii2joi4j' },
  date: new Date(),
  comments: [{
    id: '3434',
    content: 'this is a good movie',
    author: { name: 'easa', id: 'alksjfoii2joi4j' },
    date: new Date()
  }]
}
const ReviewPage = (props) => {
  const [movie, setMovie] = useState(INITIAL_MOVIE)
  const firebase = useContext(FirebaseContext)
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
  const { title, year, date, review, comments, author } = movie
  return (
    <div className="col-md-6 coffset-md-3">
      <h2>{title} - ({year})</h2>
      <hr />
      <p>{review}</p>
      <p> by <a rel="author" href={'/user/' + author.id}> {author.name} </a>
        <small>at {date.toDateString()}</small>
      </p>
      <hr />
      <div className="col-md-11 coffset-md-1">
        <h6>Comments: </h6>
        {comments.map(comment => (
          <div key={comment.id} className="comment"> {
            <p>{comment.content} | by
                <a rel="author" href={'/user/' + comment.author.id}> {comment.author.name} </a>
              <small>at {comment.date.toDateString()} </small>
            </p>
          } </div>
        ))}
      </div>
    </div>
  )
}
export default ReviewPage