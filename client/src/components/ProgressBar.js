import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    console.log(url);
    if (url) {
      setFile(null);
    }
  }, [url, file]);


  return (
    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  );
} 

export default ProgressBar;