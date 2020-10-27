import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    let percentage;
    let mistake;
    let webaddress;
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');
    
    storageRef.put(file).on('state_changed', (snap) => {
      percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      
    }, (err) => {
      mistake= err;
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      await collectionRef.add({ url, createdAt });
      webaddress= url;
    });
    setProgress(percentage);
    setError(mistake);
    setUrl(webaddress);
  }, [file]);

  return { progress, url, error };
}

export default useStorage;