import React, { Component } from "react";
import Joke from "./Joke"
import axios from "axios";
import "./JokeList.css";

class JokeList extends Component {
    static defaultProps = {
        numJokesToGet: 10
    }
    constructor(props) {
        super(props);
        this.state = { jokes: [] };
    }
    async componentDidMount() {
        // Load Jokes
        let jokes = []; //populating an empty array with jokes from res.data.joke 
        while(jokes.length < this.props.numJokesToGet) {
            //setting header to "Accept"; this gives a json res (not the html version)
            const config = { headers: { Accept: "application/json" } };   
            let res = await axios.get("https://icanhazdadjoke.com/", config);
            // console.log(res)
            jokes.push({ id: res.data.id, text: res.data.joke, votes: 0});
        }
        console.log(jokes);
        this.setState({ jokes: jokes })
    }
    handleVote(id, delta) {
        this.setState(st => ({
            //map over existing jokes in state and check each one if j.id is equal to id we looking for 
            jokes: st.jokes.map(j =>
                j.id === id ? { ...j, votes: j.votes + delta } : j
            )
        }));
    }
    render() {
        return (
            <div className="JokeList">
            <div className="JokeList-sidebar">
                <h1 className="JokeList-title">
                    <span>Dad</span> Jokes
                </h1>
                <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" />
                <button className='JokeList-getmore' onClick={this.handleClick}>
                    Fetch Jokes
                </button>
            </div>
                <div className="JokeList-jokes">
                    {this.state.jokes.map(j => (
                        <Joke 
                            key={j.id}  
                            text={j.text} 
                            votes={j.votes} 
                            upvote={() => this.handleVote(j.id, 1)}
                            downvote={() => this.handleVote(j.id, -1)}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default JokeList;