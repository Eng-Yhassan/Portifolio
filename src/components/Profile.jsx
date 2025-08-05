import ProfileImg from "../images/Home/profile.jpg"

function Profile() {
    return (
        <div>
            <div className="flex sm:flex-row flex-col gap-20 sm:justify-evenly px-20 py-20">
                {/* Left Div */}
                <div className="space-y-4 sm:mt-10">
                    <h1 className="text-gray-900 sm:text-5xl text-2xl font-bold mb-4">Yahye Hassan👋</h1>
                    <p className="sm:w-[70%] w-[90%]">I’m a passionate and creative
                        graphic designer and web developer.
                        I design websites, apps, and brands
                        using tools like WordPress, Flutter, and
                        React. I’m also a computer science student,
                        constantly learning and improving my skills
                        to build digital solutions that are both modern and user-friendly.</p>
                    <div className="space-x-4 text-2xl text-gray-900">
                        <a href="https://github.com/Eng-Yhassan" target="_blank">

                            <i className="fa-brands fa-github hover:text-red-900"></i>
                        </a>

                        <a href="https://www.figma.com/files/team/1400879578868900328/recents-and-sharing?fuid=1400879576800767688" target="_blank">
                        <i className="fa-brands fa-figma hover:text-red-900"></i>
                        </a>
                        <i className="fa-brands fa-twitter hover:text-red-900"></i>
                    </div>
                </div>

                <div>
                    {/* Right Div */}
                    <img className="sm:w-[610px] sm:h-[290px] w-[305px] h-[210px] rounded-[50%]" src={ProfileImg} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Profile