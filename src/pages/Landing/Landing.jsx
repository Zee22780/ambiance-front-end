import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Welcome to Ambiance, {user ? user.name : 'friend'}</h1>
    </main>
  )
}

export default Landing
