const Avatar =(props) =>{
    console.log(props); 
    return(
        props.hidden===true ? 
        <h1>Картирнка скрыта</h1>
        :
        <img 
            style={{
                width: `${props.width}px`,
                height: `${props.height}px`,
                borderRadius: "50%"
            }}
            src={props.path} 
            alt="Some alt" 
            onClick={()=>console.log("вы кликнули")} 
        />
    )    
}
export default Avatar;