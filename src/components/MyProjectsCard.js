function MyprojectsCard(props){
    return (
        <div className='col__3' >
        <div className='project__box pointer relative'>
            <div className='project__box__img pointer relative'>
                <div className='project__img__box'>
                    <img src={props.img} alt="" className='project__img'/>
                </div>
                <div className='mask__effect'></div>
            </div>
            <div className='project__meta absolute'>
                <h5 className='project__text'>{props.titleText}</h5>
                <h4 className='project__text'>{props.subtitleText}</h4>
                <a  onClick={props.customClickEvent} className='project__btn'>View Details</a>
            </div>
        </div>
    </div>
    );
}

export default MyprojectsCard;