import React from 'react'

//css 
import styles from './Home.css'

// pages
import Hello from '../Hello/Hello'

const Home = () => {
    return (
        <div>
            <div className='home'>
                <Hello />
            </div>

        </div>
    )
}

export default Home