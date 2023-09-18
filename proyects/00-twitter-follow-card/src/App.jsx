import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
        <TwitterFollowCard  userName='Martinpdisalvo' initialIsFollowing>Coscu</TwitterFollowCard>
        <TwitterFollowCard  userName='MishoAmoli' initialIsFollowing={false}>Misho Amoli</TwitterFollowCard>
        <TwitterFollowCard  userName='Riot_Kassadin' initialIsFollowing>Riot Kassadin</TwitterFollowCard>
        </section>
    )
}