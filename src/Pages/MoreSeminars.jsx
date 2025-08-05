import Seminars from "../components/Seminars"
// Seminar Img
import SeminarImage1 from "../images/seminars/Seminar1.png"
import SeminarImage2 from "../images/seminars/Seminar2.jpg"
import SeminarImage3 from "../images/seminars/Seminar3.png"


function MoreSeminars() {
    return (
        <div>

            <div className="grid sm:grid-cols-3 grid-cols-1 sm:ml-40 ml-10 mt30">
                <Seminars SeminarImg={SeminarImage1} SeminarTitle="lorem lorem lorem" />
                <Seminars SeminarImg={SeminarImage2} SeminarTitle="lorem lorem lorem" />
                <Seminars SeminarImg={SeminarImage3} SeminarTitle="lorem lorem lorem" />
                <Seminars SeminarImg={SeminarImage1} SeminarTitle="lorem lorem lorem" />
                <Seminars SeminarImg={SeminarImage3} SeminarTitle="lorem lorem lorem" />
                <Seminars SeminarImg={SeminarImage2} SeminarTitle="lorem lorem lorem" />
            </div>
        </div>
    )
}

export default MoreSeminars