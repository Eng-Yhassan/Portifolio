

function Seminars(props) {
    return (
        <div>

            
            <div className="bg-red-900 border-2 border-gray-900 text-white w-[300px] overflow-hidden  mb-10 mt-10">
                <img className="w-full h-[190px]" src={props.SeminarImg} alt="" />
                <h1 className="text-3xl text-gray-600 px-2">{props.SeminarTitle}</h1>
                <p className="p-2">Lorem ipsum dolor, sit amet consectetur 
                    adipisicing elit. Quas perspiciatis explicabo 
                    qui dicta officiis quisquam enim ea mollitia error, 
                    laborum alias nobis illo adipisci ullam! Libero excepturi recusandae accusamus molestiae.</p>
            </div>
        </div>
    )
}

export default Seminars;