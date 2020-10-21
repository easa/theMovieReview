import React, { useState, useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { FirebaseContext } from '../firebase'

const INITIAL_Rveiews = [{
  id: 'oijafoi34jo',
  title: 'movie title',
  year: '2020',
  author: { name: 'easa', id: 'alksjfoii2joi4j' },
  date: new Date(),
}, {
  id: 'oijafoi34jo',
  title: 'movie title',
  year: '2020',
  author: { name: 'easa', id: 'alksjfoii2joi4j' },
  date: new Date(),
}]
const ReviewPage = () => {
  const [reviews, setReviews] = useState(INITIAL_Rveiews)
  const firebase = useContext(FirebaseContext)
  return (
    <div className="col-md-6 coffset-md-3">
      {reviews.map(review => (
        <div key={review.id} id={review.id} className="comment">
          <a className="btn btn-info" href={'review/' + review.id}>show review</a>
          <p> {review.title} - {review.year}
            <author> | by
                <a href={'/user/' + review.author.id}> {review.author.name} </a>
              <small>at {review.date.toDateString()} </small>
            </author>
          </p>
        </div>
      ))}
    </div>
  )
}
export default ReviewPage