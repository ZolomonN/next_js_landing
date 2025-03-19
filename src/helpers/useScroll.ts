import React from "react"

const useScroll = () => {
    const [isPageScrolled, setIsPageScrolled] = React.useState(false)

    const handleScrolledState = React.useCallback((event: Event) => setIsPageScrolled(Boolean(window.scrollY)), [])
    
    React.useEffect(() => {
        setIsPageScrolled(Boolean(window.scrollY))
        document.addEventListener("scroll", handleScrolledState)
        return () => document.removeEventListener("scroll", handleScrolledState)
    }, [])

    return isPageScrolled
}

export default useScroll