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
        this.state = { jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]" ), loading: false};
        // this.seenJokes = new Set(this.state.jokes.map(j => j.text));
        // console.log(this.seenJokes)
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
      if (this.state.jokes.length === 0) this.getJokes();  
    }

    async getJokes() {
        try {
        // Load Jokes
            let jokes = []; //populating an empty array with jokes from res.data.joke
            const seenJokes = new Set(this.state.jokes.map(j => j.text));
            while(jokes.length < this.props.numJokesToGet) {
                //setting header to "Accept"; this gives a json res (not the html version)
                const config = { headers: { Accept: "application/json" } };   
                let res = await axios.get("https://icanhazdadjoke.com/", config);
                if (!seenJokes.has(res.data.joke)) {    
                    jokes.push({ id: res.data.id, text: res.data.joke, votes: 0});
                } else {
                    console.log("FOUND A DUPLICATE!");
                }
            }
            console.log(jokes);
            this.setState(st => ({ 
                loading: false, jokes: [ ...st.jokes, ...jokes ] }),
            () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
            );
        } catch(e) {
            alert(e);
            this.setState({ loading: false });
        }
    }
  
    handleVote(id, delta) {
        this.setState(st => ({
            //map over existing jokes in state and check each one if j.id is equal to id we looking for 
            jokes: st.jokes.map(j =>
                j.id === id ? { ...j, votes: j.votes + delta } : j
            )}),
        () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
        );
    }

    handleClick() {
        this.setState({ loading: true }, this.getJokes);
    }
    render() {
        if (this.state.loading) {
            return (
                <div className='JokeList-spinner'>
                    <i className='far fa-8x fa-laugh fa-spin' />
                    <h1 className='JokeList-title'>Loading...</h1>
                </div>
          );
        }
        // let sortedJokes = this.state.jokes.sort((a, b) => b.votes - a.votes);
        //better approach (this way it won't mutate the state):
        const sortedJokes = [ ...this.state.jokes ].sort((a, b) => b.votes - a.votes);
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
                    {sortedJokes.map(j => (
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