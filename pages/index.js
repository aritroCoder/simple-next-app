import React from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {

  React.useEffect(() => {
    console.log(styles)
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Home Page</h1>
      <p style={{margin: "10px", padding: "10px"}}>
        This is the home page
      </p>
    </div>
  );
}
