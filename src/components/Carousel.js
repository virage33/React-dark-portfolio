import React from 'react'


const Slideshow = ({imgs})=>{
    const[index,setIndex] = useState()
    useEffect(()=>{setIndex(0)},[])

    const next = ()=>{
        if(index==imgs.length-1){
            setIndex(0)
        }else{
            setIndex(index+1)
        }

    };
    const prev = ()=>{
        if(index==0){
            setIndex(length-1)
        }else{
            setIndex(index--)
        }
    };

    return <div className='slideshow'>
        <img src='{imgs[index]}' className='main-img'/>
        <div className='actions'>
            <button onClick={next}>next</button>
            <button onClick={prev}>prev</button>

        </div>
    </div>
};

function Carousel() {
    return (
        <div>
            
        </div>
    )
}

export default Carousel
