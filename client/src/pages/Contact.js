import Axios from 'axios';
import React, {useState} from 'react';
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";

function Contact () {
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    
    const sendEmail = (e) => {
        e.preventDefault();
        Axios.post(
            "/api/contact",
            {
                email: email,
                subject: subject,
                message: message
            }
        ).then((res) => console.log(res));

    };

    
        return(
        <React.Fragment>
        <Nav />
        <Jumbotron />

        <div>
            <h2>Contact</h2>
        </div>
        <form>
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                    <div className="medium-6 cell">
                        <label>Email
                            <input type="text" placeholder="" onChange={(e) => setEmail(e.target.value)}></input>
                        </label>
                    </div>
                    <div className="medium-6 cell">
                        <label>Subject
                            <input type="text" placeholder=""onChange={(e) => setSubject(e.target.value)}></input>
                        </label>
                    </div>
                    <div className="medium-6 cell">
                    <label>
                    Message:
                    <textarea placeholder="None"onChange={(e) => setMessage(e.target.value)}></textarea>
                    </label>
                    </div>
                    
                </div>
                <div>
                    <button type="button" class="primary button" onClick={sendEmail}>Send</button>
                </div>
            </div>
        </form>
        </React.Fragment>            
                
            
        )
    };



export default Contact;