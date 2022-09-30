import { useState, useEffect } from "react"

export default function useScroll() {


    const [scrollState, setScrollState] = useState(false);


    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY >= 200) {
                setScrollState(true)
            } else {
                setScrollState(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
    }, [])

    return { scrollState }

}
