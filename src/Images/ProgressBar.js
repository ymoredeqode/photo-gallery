import React ,{useState, useEffect} from 'react';

import useStorage from '../hooks/useStorage';
import {motion} from 'framer-motion'

const ProgressBar = ({file , setFile}) =>{
    const {url , progress } = useStorage(file);
    console.log(progress,url)


    useEffect(() => {
        if(url){
            setFile(null);
        }
    }, [url, setFile])

    return (
        <motion.div className="progress-bar" initial={{width:0}} animate={{width:progress + '%'}}> Upload {parseInt(progress)} %</motion.div>
    )
}

export default ProgressBar;