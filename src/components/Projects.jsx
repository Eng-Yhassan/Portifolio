

function Projects(props) {
    return (
        <div>

            
            <div className="bg-gray-900 border-2 border-red-800 text-white w-[300px] overflow-hidden  mb-10 mt-10">
                <img className="w-full h-[190px]" src={props.projectImg} alt="" />
                <h1 className="text-3xl text-red-500 px-2">{props.projectTitle}</h1>
                <p className="p-2">Lorem ipsum dolor, sit amet consectetur 
                    adipisicing elit. Quas perspiciatis explicabo 
                    qui dicta officiis quisquam enim ea mollitia error, 
                    laborum alias nobis illo adipisci ullam! Libero excepturi recusandae accusamus molestiae.</p>
            </div>
        </div>
    )
}

export default Projects;