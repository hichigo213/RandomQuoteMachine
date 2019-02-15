import React from 'react'
import data from '../data/quoteList'
class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuote: '',
            currentAuthor: '',
            allQuotes: data.quotes
        }
        this.newQuote = this.newQuote.bind(this)
    }
    componentDidMount() {
        console.log(this.state.allQuotes)
        this.newQuote()
    }

    newQuote(){
        const rng = Math.floor(Math.random() * this.state.allQuotes.length)
        this.setState({
            currentQuote: this.state.allQuotes[rng].quote,
            currentAuthor: this.state.allQuotes[rng].author
        })
    }


    render() {
        return(
            <div className='quote--container'>
                <div id='quote-box'>
                    <div id='text' name='currentQuote'>{this.state.currentQuote}</div>
                    <div className='author--container'>
                        <span id='author' name='currentAuthor'>{this.state.currentAuthor}</span>
                    </div>
                    <div>
                        <button>Twitter</button>
                        <button>Tumblr</button>
                        <button className='button--quote' onClick = {this.newQuote}>New Quote</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Quote