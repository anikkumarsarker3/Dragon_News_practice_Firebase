import { useEffect, useState } from "react"

export const useCustom = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return data;
}
export const useCategory = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return data;
}