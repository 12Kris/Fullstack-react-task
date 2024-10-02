import EmilyPhoto from "../assets/image-emily.jpg";
import ThomasPhoto from "../assets/image-thomas.jpg";
import JenniePhoto from "../assets/image-jennie.jpg";

function Feedback() {
    return (
        <article className="testimonials" id="services">
            <h3>Client feedback's</h3>
            <section className="profiles">
                <div className="profile">
                    <img src={EmilyPhoto} alt="Emily R." />
                    <p className="feedback">
                        Incredible end result! Our sales increased over we 
                        worked great with Sunnyside. Highly recommended!
                    </p>
                    <div className="author-block">
                        <p className="profile-author">Emily R.</p>
                        <p className="author-job">Marketing Director</p>
                    </div>
                </div>

                <div className="profile">
                    <img src={ThomasPhoto} alt="Thomas S." />
                    <p className="feedback">
                        Sunnyside enthusiasm coupled with their keen interest
                        success made it a
                        satisfying and enjoyable experience.
                    </p>
                    <div className="author-block">
                        <p className="profile-author">Thomas S.</p>
                        <p className="author-job">Chief Operating Officer</p>
                    </div>
                </div>

                <div className="profile">
                    <img src={JenniePhoto} alt="Jennie F." />
                    <p className="feedback">
                        Incredible end result! Our sales increased over we 
                        worked great with Sunnyside. Highly recommended!
                    </p>
                    <div className="author-block">
                        <p className="profile-author">Jennie F.</p>
                        <p className="author-job">Business Owner</p>
                    </div>
                </div>
            </section>
        </article>
    );
}

export default Feedback;