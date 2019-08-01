import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import youtube from './API/youtube';
import VideosList from './Components/VideosList';
import VideoDetail from './Components/VideoDetail';
// import config from './API/youtube';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={ videos:[],selectedVideo:null};
    }

    componentDidMount(){
        this.onTermSubmit("ZARD"); 
    }
    onTermSubmit = async(term) =>{
        const response = await youtube.get('/search',{
            params:{
                part:'snippet',
                maxResults:5,
                key:"your api key",
                q:term
            
        });
        this.setState({videos:response.data.items, selectedVideo:response.data.items[0]});
    }
    onVideoSelect = (video) =>{
       this.setState({selectedVideo:video});
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                        <VideosList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
                
                
            </div>
        )
    }
}
