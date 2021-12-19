function ServiceCardCmpt(props){

    return (
        <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                {props.icon}
              </div>

              <div className="service__meta">
                <h1 className="service__text">
                    {props.textTitle}
                </h1>
                <p className="p service__text p__color">
                    {props.ptext1}
                </p>
                <p className="p service__text p__color">
                    {props.ptext2}
                </p>
                <p className="p service__text p__color">
                    {props.ptext3}
                </p>
              </div>
            </div>
          </div>
        
    );
}

export default ServiceCardCmpt;