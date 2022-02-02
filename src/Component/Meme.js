import React, { Component } from 'react';
import '../App.css'
class Meme extends Component {
  componentDidMount() { 
    fetch("https://api.imgflip.com/get_memes") 
      .then(response => response.json())
      .then(response => {
    const { memes } = response.data 
    console.log(memes[0]) 
    this.setState({ allMemeImgs: memes }) 
  })
  }
    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
        }
        handleSubmit(event) {
            event.preventDefault()
            const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
            const randMemeImg = this.state.allMemeImgs[randNum].url
          this.setState({cleartop:this.state.topText})
          this.setState({clearbottom:this.state.bottomText})
            this.setState({ randomImg: randMemeImg })
          }
  constructor() {
    super();
  
    this.state = {
        topText: '',
        cleartop:'',
        clearbottom:'',
      bottomText: '',
      randomImg: 'http://i.imgflip.com/1bij.jpg',
      allMemeImgs: []  
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
 
  render() {
    return (
            <div className='center'>
            <form className="meme-form" onSubmit={this.handleSubmit}>
            <div className='inputbox'>
  <input
    type='text'
    name='topText'
    placeholder='Type your toptext'
    value={this.state.topText}
    onChange={this.handleChange}
  />
  <span>Top Text</span>
  </div>
  <div className='inputbox'>
  <input
    type='text'
    name='bottomText'
   placeholder='Type your Bottomtext'
    value={this.state.bottomText}
    onChange={this.handleChange}
  />
  <span>Bottom Text</span>
  </div>
  <div class="inputbox">
  <button className='but'>
    Gen</button>
    </div>
 
</form>
<div className='meme'>
  <img src={this.state.randomImg} alt='' />
  <h2 className='top'onSubmit={this.handleSubmit}>{this.state.cleartop}</h2>
  <h2 className='bottom' onSubmit={this.handleSubmit}>{this.state.clearbottom}</h2>
</div>
            </div>
          )
  }
}
export default Meme;