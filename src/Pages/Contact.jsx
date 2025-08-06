


function Contact() {
    return (
        <div>

            <div className="flex justify-center items-center h-screen">
                <form className=" bg-gray-100 sm:w-[400px] w-[350px] h-[390px] text-center pt-10 rounded-[4px] shadow-md shadow-black">
                    <h2 className="text-5xl font-bold mb-5">Contact Me</h2>
                    <input className="w-[300px] h-10 p-2 outline-none bg-gray-900 mt-6 rounded-[4px] text-white" type="text" placeholder="Enter Your Name" required/>  <br /><br />
                    <input className="w-[300px] h-10 p-2 outline-none bg-gray-900 mt-6 rounded-[4px] text-white" type="email" placeholder="Enter Your Email" required/> <br /><br />
                    <button className="bg-gray-900 text-white w-[300px] h-10 text-2xl mt-6 rounded-[4px]">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;