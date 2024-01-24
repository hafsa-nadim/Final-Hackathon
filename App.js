import {useRef , useState , useEffect} from 'react';
import './App.css';
import { uploadFile } from './service/api';
function App() {
  const [file, setFile] = useState('');

  const fileInputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file){
      const data = new FormData();
      data.append("name", file.name);
      data.append("file",file);

      let response = await uploadFile(data);
  }
    }
    getImage();
  }, [file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  console.log(file);

  return (
    <div className="container">
    <div className="wrapper">
      <h1>Project Sharing App!</h1>
      <p>Upload and share the download link</p>

      <button onClick={() => onUploadClick()}>UPLOAD</button>
      <input type="file"ref={fileInputRef}
      style={{display:'none'}} onChange={(e) => setFile(e.target.files[0])}
      />
    </div>
   </div>
  );
}

export default App;
