import React from 'react'
//css 
import styles from './Home.css'

// pages

import BtnDefault from '../../components/Btn/BtnDefault'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Home = () => {
    const helloPage = document.getElementById("hello")
    const homePage = document.getElementById("home")
    const [name, setName] = useState("")

    const handleClick = (e) => {
        e.preventDefault()

        helloPage.classList.add("d-none")
        homePage.classList.remove("d-none")
    }

    return (
        <div>


            <div className='hello' id='hello'>
                <h1 className='title'>Como deseja ser chamado?!</h1>
                <input type='text' placeholder='Devo te chamar de?' id='getName' value={name} onChange={(e) => setName(e.target.value)} />


                <BtnDefault class={"btn btn-success mt-2"} type={"button"} value={"Avançar"} onclick={handleClick} />


            </div>

            <div className='home d-none' id='home'>
                <h1 className='title text-center mb-5'>Seja Bem Vindo <span id='showName'>{name}</span></h1>

                <div className='btns'>

                    <h4 className='title mt-5'>O que deseja fazer?</h4>

                    <div className='campBtn mt-5'>
                        <Link to='/cadastro'>
                            <BtnDefault class={"btn btn-primary mt-2 botao"} type={"button"} value={"Novo Cadastro"} />
                        </Link>

                        <Link to='/lista'>
                            <BtnDefault class={"btn btn-primary mt-2 botao"} type={"button"} value={"Ver Lista"} />
                        </Link>
                    </div>



                </div>

            </div>



        </div>
    )
}

export default Home