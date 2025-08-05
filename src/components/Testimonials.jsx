

function Testimonials(props){
    return(
        <div>
            <div className="bg-gray-900 w-[230px] h-[100px] ml-20 mb-20 text-white px-2 py-2 shadow-md shadow-black">
                <h1 className="text-3xl text-red-500">{props.Person}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Testimonials