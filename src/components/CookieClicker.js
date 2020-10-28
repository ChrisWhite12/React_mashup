import React, {Component} from 'react'

class CookieClicker extends Component{
    constructor(props){
        super(props)
        this.state = {
            plus_count: 0,
            minus_count: 0,
            score: props.start_score,
            auto_inc: 1
        }
    }

    tick(){
		this.setState({score: Number(this.state.score) + this.state.auto_inc})
    }

    componentDidMount(){
        console.log(this.state.plus_count)
        this.timerId = setInterval(() => this.tick(), 1000)
    }
    componentWillUnmount(){
		clearInterval(this.timerId)
    }

    onClickPlus(){
        console.log('click')
        this.setState({plus_count: this.state.plus_count + 1})
    }

    onClickMinus(){
        this.setState({minus_count: this.state.minus_count + 1})
    }

    onClickAutoInc(){
        if(this.state.score > 100){
            this.setState({
                // score: `${Number(this.state.score) - 100}`,
                // auto_inc: `${Number(this.state.auto_inc) + 10}`
                score: this.state.score - 100,
                auto_inc: this.state.auto_inc + 10
            })
        }
    }

    render(){
        const {plus_count, minus_count, score, auto_inc} = this.state
        return (
            <div>
                <button onClick={() => this.onClickPlus()}>+</button>
                <button onClick={this.onClickMinus.bind(this)}>-</button>
                <button onClick={() => this.onClickAutoInc()}>Increase Auto Increment</button>
                <p>Plus - {plus_count}     Minus - {minus_count}</p>
                <p>Score - {score}          Auto Increment - {auto_inc}</p>
            </div>
        )
    }
}

export default CookieClicker