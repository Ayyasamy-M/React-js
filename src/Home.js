import React from 'react'
import { Link } from 'react-router-dom';
import { Output } from './link';

function Home() {
  return (<>
  <Output/>
    <div>Home</div>
    <Link to="/">back to tap</Link>
    </>
  )
}

export default Home;