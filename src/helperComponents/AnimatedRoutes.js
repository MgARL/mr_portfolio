import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';

// My Comps
import Home from '../components/Home';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import ScrollToTop from './ScrollToTop';


// framer motion
import { AnimatePresence } from 'framer-motion'


function AnimatedRoutes() {
    const location = useLocation()
    return (
        <>
            <ScrollToTop location={location}>
                <AnimatePresence>
                    <Routes location={location} key={location.pathname}>
                        <Route path='/' element={<Home />} />
                        <Route path='/skills' element={<Skills />} />
                        <Route path='/portfolio' element={<Portfolio />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                </AnimatePresence>
            </ScrollToTop>

        </>
    )
}

export default AnimatedRoutes