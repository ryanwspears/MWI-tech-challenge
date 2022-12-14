import React from 'react'
import styles from '../styles/Contact.module.css'
import Head from 'next/head'
import { useEffect, useState } from 'react'


const contact = () => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('http://localhost:5000/posts')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  console.log(data)

  if(loading) {
    return (
      <div>loading</div>
    )
  }

  return (
    <div className={styles.container}>

      <Head>
        <title>Tech Challenge - Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.left}>
        <div className={styles.textSec}>
          <h1><span style={{'border-bottom': '4px solid #DEBF79'}}>Heading</span> One</h1>
          <p style={{'color': '#fff', 'fontWeight': '300'}}>
            {data.posts[0].contact_1}
          </p>
          <p style={{'color': '#fff', 'fontWeight': '300'}}>
            {data.posts[0].contact_2}
          </p>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.contact}>
          <h1 style={{'color': '#222222'}}>Heading Two</h1>
          <form method='POST' action='http://localhost:5000/posts'>
            <input type='text' name='first_name' placeholder={'First Name'} style={{'margin': '0.5rem'}} required />
            <input type='text' name='last_name' placeholder={'Last Name'} style={{'margin': '0.5rem'}} required />
            <input type='text' name='title' placeholder={'Title'} style={{'margin': '0.5rem'}} required />
            <input type='email' name='email' placeholder={'Email'} style={{'margin': '0.5rem'}} required />
            <textarea name='message' placeholder={'Message'} style={{'resize': 'vertical', 'margin': '0.5rem', 'height': '6rem'}}></textarea>
            <div style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'width': '100%'}}>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default contact