import { useEffect, useState } from "react"

const useReview = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(() =>{
        fetch('https://frozen-river-30466.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data));
    },[]);

    return [reviews,setReviews];
}
export {useReview};