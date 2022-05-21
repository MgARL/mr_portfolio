import React,{ useEffect} from 'react'


function ScrollToTop({ children, location }) {

    useEffect(() => {
        window.scrollTo(0,0);
    },[location])
  return <>{children}</>
}

export default ScrollToTop