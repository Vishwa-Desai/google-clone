import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import {Avatar} from "@material-ui/core";
import Search from './Search';

function Home()
{
    return(
        <div>
            {/* <h1> This is home page </h1> */}
        
            <div className="home__header"> 
                <div className="home__headerLeft"> 
                    <Link to="/about"> about</Link>
                    <Link to="/store"> Store</Link>
                    

                </div>
                <div className="home__headerRight"> 
                <Link to="/gmail"> Gmail</Link>
                <Link to="/images"> Images</Link>
                <AppsIcon />
                <Avatar />
                </div> 
            </div>
            <div className="home__body"> 
              <center>  <img  className="logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="googlelogo"></img> </center>
            </div>
            <div className="home__inputContainer">
                <Search hideButtons/>
            </div>
        </div>
    )
}

export default Home