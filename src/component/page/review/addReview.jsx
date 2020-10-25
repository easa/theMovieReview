import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReviewForm from './ReviewForm'
import { Context } from '../../app'

const INITIAL_REVIEW = {
  id: '',
  title: '',
  year: '',
  review: '',
  author: { name: '', id: '' },
  date: Date.now(),
}

const AddReviewPage = () => {
  const {firebase} = useContext(Context)
  const [state, setState] = useState({})
  const [review, setReview] = useState(INITIAL_REVIEW)
  const onSubmit = event => {
    event.preventDefault()
    firebase.store.collection('review').add({
      ...review,
      date: Date.now()
    }).then(() => {
      setState({ ...state, redirect: '/home' })
    }).catch(error => {
      setState({ ...state, error: error })
    })
  }
  const onChange = event => {
    setReview({ ...review, [event.target.name]: event.target.value })
  }
  if (state.redirect) {
    return <Redirect to={state.redirect} />
  }
  return (<div>
    <h1>Post a review</h1>
    <ReviewForm {...review} {...state} onChange={onChange} onSubmit={onSubmit} />
  </div>)
}

export default AddReviewPage