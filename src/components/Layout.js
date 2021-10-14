import React from 'react'
import Home from '../pages/Home'
// import { Header } from './Header'

export const Layout = ({children}) => {
    return (
        <>
           {/* <Header /> */}
           <div className="content__wrapper">
                {/* {children} */}
                <Home />
           </div>
        </>
    )
}
