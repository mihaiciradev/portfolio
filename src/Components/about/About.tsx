import React from 'react';
import './About.scss';
import PairWrapper from './PairWrapper/PairWrapper';

function About() {

  const PairWrappers = [
    {
      first: <h1>hi</h1>,
      second: <h2>lmao</h2>
    },
    {
      first: <h1>hello</h1>,
      second: <h2>sal</h2>
    }
  ]

  return (
    <div className='aboutPage'>

      <div id="pairWrapperContainer" style={{"height":`${(65/100 * window.innerHeight) * PairWrapper.length}px`}}>

        <div id="pairWrapperMovingBox">
          {
            PairWrappers.map(pair => <PairWrapper
              firstElement={pair.first}
              secondElement={pair.second}
              active
            />)
          }
        </div>



      </div>

    </div>
  );
}

export default About;
