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
  }

  


  changeQuote() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    let length = this.state.quotes.length  
    this.setState({i: getRandomInt(length)})
  
    
  }
  



  render() {
    
    return (
    <div className='body'>
      
    <div id='quote-box'>
      <div id='text'>{this.state.quotes[this.state.i].quote}</div>
      <div id='author'>{this.state.quotes[this.state.i].author}</div>
      <div id='grid'>
      <div className="border bg-black">
      <a onClick={this.changeQuote} href='#' id='new-quote'>New Quote</a>
      </div>
      <a target='_blank' className='button1' href={`https://twitter.com/intent/tweet?text=${this.state.quotes[this.state.i].quote} -${this.state.quotes[this.state.i].author} #quotes`}><i class="fab fa-twitter"></i></a>
    
      <div href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></div>
        <a target='_blank' className='button2' href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Beverly%20Sills&content=You%20may%20be%20disappointed%20if%20you%20fail%2C%20but%20you%20are%20doomed%20if%20you%20don%E2%80%99t%20try.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"></a>

      </div>
      
    </div>



    </div>)
  }
}

export default App;
