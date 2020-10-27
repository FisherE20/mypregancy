import React, {useRef, useState, useEffect} from 'react';
// import Axios from "axios"; 
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";

function Home() {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('May 13, 2021 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance/ (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 *60)));
            const minutes = Math.floor((distance/ (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance/ (1000 * 60 )) / 1000);

            if(distance < 0) {
                // stop our timer
                clearInterval(interval.current);
            } else{
                // update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    // componentDidMount
    useEffect(() => {
        startTimer();
        return() => {
            clearInterval(interval.current);
        };
    });

    // const getUser = () => {
    //     Axios({
    //         method: "GET",
    //         withCredentials: true,
    //         url: "http://localhost:3000/user",
    //     }).then((res) => {
    //         setData(res.data);
    //         console.log(res.data);
    //     });
    // };

    return(
        
        <React.Fragment>
            <Nav />
            <Jumbotron />
        <section className="timer-container">
            <section className="timer">
                <div>
                    <span className="mdi mdi-calendar-clock"></span>
                     <h2>Our little Mino is due to arrive in:</h2>
                </div>
                <div>
                    <section>
                        <p>{timerDays}</p>
                        <p><small>Days</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerHours}</p>
                        <p><small>Hours</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerMinutes}</p>
                        <p><small>Minutes</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerSeconds}</p>
                        <p><small>Seconds</small></p>
                    </section>
                </div>
            </section>
        </section>
        </React.Fragment>
    )
}

export default Home;