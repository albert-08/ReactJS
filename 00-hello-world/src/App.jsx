import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="albert-08">
        Alberto Flores Ocaña
      </TwitterFollowCard>
      <TwitterFollowCard userName="95Venus">
        Joyce Choca Carrillo
      </TwitterFollowCard>
    </section>
  )
}