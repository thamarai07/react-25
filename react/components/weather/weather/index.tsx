const Weather = ({data} :any)=>{

    return(
        <>
            <p className="text-center">{data && data.message}</p>
        </>
    )
}
export default Weather