import React from 'react';
import '../pages/LiveDemo.css'

function LiveDemo() {
    return (
        <div className='player'>
            <video src='/videos/demo.mp4' autoPlay></video>
        </div>
    )
}

export default LiveDemo;
