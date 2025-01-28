import React, {useState,useEffect,useRef } from 'react'
import { FaqsContainer } from '../containers/faq'
import { Feature, OptForm } from '../components'
import Jumbotron from '../containers/jumbotron'
import Header from '../containers/header'
import styled from 'styled-components'
import Disqus from "disqus-react"
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';


export default function Mome() {



  const [magnetData, setMagnetData] = useState(null);

    const disqusShortname = "narutopia-netlify-app"
    const disqusConfig = {
      url: "https://trailerpeak.onrender.com",
      identifier: "article-id",
      title: "Title of Your Article"
    }
  const { name } = useParams();

  useEffect(() => {
    // Fetch the magnet data from your Flask server
    fetch(`https://trailerpeak.onrender.com/play/${name}`) // Replace with your Flask server endpoint
      .then(response => response.json())
     .then(data => {
      console.log(data.video_url)
        const magnetLink = data.video_url.split('v=')[1]; // Replace with the key for your magnet link in the JSON data
        setMagnetData(magnetLink);
      })
      .catch(error => console.error('Error fetching magnet data:', error));
  }, []);

  const videoRef = useRef(null);

  return (
    <div>

  <Feature>
 
      <Feature.Title>
{ name}
      </Feature.Title>
 
      <YouTube videoId={magnetData} />
  

  <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
    



  
        </Feature>




    </div>
  )
}
