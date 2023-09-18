import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'Martinpdisalvo',
        name: 'Coscu',
        isFollowing: true
    },
    {
        userName: 'MishoAmoli',
        name: 'Misho Amoli',
        isFollowing: false
    },
    {
        userName: 'Riot_Kassadin',
        name: 'Riot Kassadin',
        isFollowing: false
    }
]

export function App () {
    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard key={userName} userName={userName} isFollowing={isFollowing}>{name}</TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}