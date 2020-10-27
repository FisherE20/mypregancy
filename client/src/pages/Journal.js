import Axios from "axios";
import React, {useState, useEffect} from "react";
// import {Col, Row, Container} from "../components/Grid";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import PostsList from "../components/PostsList";


function Journal () {
    const [title, setTitle] = useState();
    const [currentDate, setCurrentDate] = useState();
    const [body, setBody] = useState();
    
    useEffect(() => {
        let date = new Date().getDate(); //Current Date
        let month = new Date().getMonth() + 1; //Current Month
        let year = new Date().getYear(); //Current Year
        

        setCurrentDate(
            month + '/' + date + '/' + year
            
        );
    }, []);

    const sendPost = (e) => {
        e.preventDefault();
        Axios.post(
            "/api/posts",
            {
                title: title,
                body: body
            }
        ).then((res) => console.log(res));
    };

    const getPost = (e) => {
        e.preventDefault();
            Axios.get(
                "/api/posts",
                {
                    title:title,
                    body:body
                }
            ).then((res) => console.llog(res));
        
    }

    return(
        <React.Fragment>
        <Nav />
        <Jumbotron />
        <div>
            <h2>Journal Entry</h2>
         
        <form>
            <div className="grid-container">
            <div className="grid-x grid-padding-x">
            <div className="medium-6 cell">
                    <label>Title
                        <input type="text" placeholder="" onChange={(e) => setTitle(e.target.value)}></input>
                    </label>
            </div>
            <div className="medium-6 cell">
                <label>Date
                    <div>{currentDate}</div>
                </label>
            </div>
            <div className="medium-6 cell">
                <label>Post
                <textarea placeholder="" onChange={(e) => setBody(e.target.value)}></textarea>
                </label>
            </div>
            </div>
                <a className="button primary"  href="/journal" onClick= {sendPost}>Save</a>
                {/* <a className="button success" href="/journal">Edit</a>
                <a className="button alert" href="/journal">Delete</a> */}
            </div>
        </form>

        <div>
            <h2>Our saved Journal Entries</h2>
            <div>
                <PostsList />
            </div>
        </div>
        </div> 
        </React.Fragment>
            
            
        
    );
}

export default Journal;