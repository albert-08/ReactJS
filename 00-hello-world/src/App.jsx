import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'albert-08',
    name: 'Alberto Flores Ocaña',
    isFollowing: true
  },
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: false
  },
  {
    userName: '95venus',
    name: 'Joyce Choca Carrillo',
    isFollowing: false
  }
]

export function App() {
  return (
    <section className="App">
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}