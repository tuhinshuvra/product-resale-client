const { useEffect } = require("react")

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Easy Market`;
    }, [title])
}
export default useTitle;