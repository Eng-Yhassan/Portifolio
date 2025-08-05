
function Footer() {
    return (
        <div>
            <div className="bg-gray-900 w-full h-[300px] text-white sm:p-20 sm:flex justify-center gap-48">
                {/* Left Div */}
                <div className="sm:w-[20%] text-center sm:text-left pt-4 space-y-2">
                    <h1 className="text-3xl font-bold">Yahye Hassan</h1>
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Laboriosam ad perferendis
                        architecto quasi explicabo repellat, nobis itaque? Quae, non laborum.</p>
                </div>
                {/* left div  */}
                <div className="text-center sm:text-left pt-4">
                    <h1 className="text-3xl font-bold">Contact me</h1>

                    <div className="text-center mt-10 space-x-6">

                    <a  href="https://wa.me/252614765817"  target="_blank"     >
                       
                        <i className="fa-brands fa-whatsapp text-green-500 text-4xl"></i>
                    </a>

                    <a href="mailto:muscabhassan81@gmail.com">
                        <i className="fa-solid fa-envelope text-blue-500 text-4xl"></i>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer