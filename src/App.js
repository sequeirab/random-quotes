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
          author: 'Lorem ipsum',
        },
        {
          quote: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          author: 'Lorem ipsum',
        },
        {
          quote: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          author: 'Lorem ipsum',
        },
        {
          quote: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
          author: 'Lorem ipsum',
        },
      ],

      
    }

    this.changeQuote = this.changeQuote.bind(this);
    this.firstRandom = this.firstRandom.bind(this);
  }

  


  changeQuote() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    let length = this.state.quotes.length  
    this.setState({i: getRandomInt(length)})
  
    
  }

  firstRandom() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    let length = this.state.quotes.length
    return this.setState({i: getRandomInt(length)})
  }
  
  



  render() {
    
    return (
    <div className='body'>
      
    <div onLoad={this.firstRandom} id='quote-box'>
      <div id='text'>{this.state.quotes[this.state.i].quote}</div>
      <div id='author'>{this.state.quotes[this.state.i].author}</div>
      <div className='flex'>
      <a id="tweet-quote" target='_blank' rel="noreferrer"  href={`https://twitter.com/intent/tweet?text=${this.state.quotes[this.state.i].quote} -${this.state.quotes[this.state.i].author} #quotes`}><i class="fa fa-twitter"></i></a>
      <a className="bg-black" onClick={this.changeQuote} id='new-quote'>New Quote</a>
      </div>
      
      
    </div>



    </div>)
  }
}

export default App;
