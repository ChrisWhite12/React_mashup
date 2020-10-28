import React, {Component} from 'react'

class Movie extends Component{
    constructor(props){
        super(props)
        const {movie} = props
        this.state = {
            movie,
            movies: [],
            listItems: [],
            movie_id: 1
        }
    }

    handleSubmit(event){
        event.preventDefault()
        let text_val = document.getElementById("movieText")["value"]
        this.setState({
            movies: [...this.state.movies, text_val],
            listItems: [ ...this.state.listItems, <li key={this.state.movie_id}>{text_val}</li>],
            movie_id: this.state.movie_id + 1
        })
        
        // console.log(this.state.movies)
    }

    render(){
        const {movie_id,listItems} = this.state
        return (
            <div>
                <div>
                    <input type="text" id="movieText"></input>
                    <input type="submit" value="New Movie" onClick={(event) => this.handleSubmit(event)}></input>
                </div>
                <p>{movie_id}</p>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

Movie.defaultValue = {
    movie: "Spiderman"
}

export default Movie