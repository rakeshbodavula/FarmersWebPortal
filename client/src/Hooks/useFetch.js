import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("Can't fetch data")
                }
                return res.json()
            })
            .then(data => {
                // setTimeout(()=>{

                    setIsPending(false)
                    setError(null)
                    setData(data)
                // },2000)
            })
            .catch(error => {
                setIsPending(false)
                setError(error)
            })
    },[])
    // console.log(data)
    return { data, isPending, error }
}

export default useFetch;