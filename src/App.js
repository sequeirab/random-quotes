import './App.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      i: 0,
      
      quotes: [
        {
          quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
          author: "Mahatma Gandhi",
        },
        {
          quote: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          author: '1 Lorem ipsum',
        },
        {
          quote: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          author: '2 Lorem ipsum',
        },
        {
          quote: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          author: '3 Lorem ipsum',
        },
        {
          quote: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          author: '4 Lorem ipsum',
        },
      ],

      
    }

    this.changeQuote = this.changeQuote.bind(this);
  }

  
componentDidMount() {
  let length = this.state.quotes.length
  if(this.state.i === length - 1) {
    this.setState({i: 0})
  }
}

  changeQuote() {
    
      
    this.setState({i: this.state.i + 1})
  
    
  }  



  render() {
    
    return (
    <div className='body'>
      
    <div id='quote-box'>
      <div id='text'>{this.state.quotes[this.state.i].quote}</div>
      <div id='author'>{this.state.quotes[this.state.i].author}</div>
      <div className='flex'>
      <a id="tweet-quote" target='_blank' rel="noreferrer"  href={`https://twitter.com/intent/tweet?text=${this.state.quotes[this.state.i].quote} -${this.state.quotes[this.state.i].author} #quotes`}><i class="fa fa-twitter"></i></a>
      <button className="bg-black" onClick={this.changeQuote} id='new-quote'>New Quote</button>
      </div>
      
      
    </div>



    </div>)
  }
}

export default App;
