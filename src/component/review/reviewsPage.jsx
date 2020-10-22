import React, { useState, useContext, useEffect } from 'react'
import { FirebaseContext } from '../firebase'
import { Review } from './singleReview'

const ReviewPage = () => {
  const [reviews, setReviews] = useState([])
  const [state, setState] = useState({})
  const firebase = useContext(FirebaseContext)
  useEffect(() => {
    const reviewRef = firebase.store.collection('review').orderBy("date").limit(10)
    reviewRef.get().then(querySnapshot => {
      const docs = querySnapshot.docs
      console.log(docs)
      window['hhh'] = docs
      const tempReviews = docs.map(doc => ({ ...doc.data(), id: doc.id, showMore: false }))
      console.log(tempReviews)
      setReviews(tempReviews)
    }).catch(error => {
      console.log("Error: " + error);
    })
  }, [])
  const showMore = event => {
    const key = event.target.id
    const index = reviews.findIndex(i => i.id === key)
    reviews[index].showMore = !reviews[index].showMore
    setReviews([...reviews])
  }
  return (
    <div className="col-md-6 coffset-md-3">
      {reviews.map(review => (
        <div key={review.id} className="comment">
          <p> {review.title} - {review.year}
            <span> <small> by </small>
              <a rel="author" href={'/user/' + review.author.id}> {review.author.name} </a>
              <small>at {(new Date(review.date)).toDateString()} </small>
            </span>
            <a className="btn btn-sm btn-outline-info" id={review.id} onClick={showMore}>
              {review.showMore ? 'show less' : 'read more'}
            </a>
          </p>
          {review.showMore ? <Review key={review.id} {...review} /> : ''}
        </div>
      ))}
    </div>
  )
}
export default ReviewPage