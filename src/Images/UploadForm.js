import React , {useState, useEffect, Fragment} from 'react';
import ProgressBar from './ProgressBar';
import Alert from '../Components/alert';

const UploadForm = () => {

    const [file, setFile] = useState('');
    const [errorMsg, setErrormsg] = useState(null);
    const types = ['image/png','image/jpeg'];

    const getImage = (e) =>{
        var file = e.target.files[0];
        if(file && types.includes(file.type)){
            setFile(file);
            setErrormsg(null);
        }else{
            setFile('');
            setErrormsg('Please select an image file (png or jpeg)');
        }
    }
   

    return(
        <Fragment>
            {errorMsg !== null ? <Alert  type="alert alert-danger" msg={errorMsg}/> : '' }
            <form className="justify-content-center align-items-center form-inline">
                <br/>
                <br/>
                <br/>

                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Image</label>
                    <input type="file" accept="image/*"  name="image" onChange={getImage} className="form-control-file" id="exampleFormControlFile1" />
                </div>

                { file && <ProgressBar file={file} setFile={setFile}/>}

            </form>
            <br/>
        </Fragment>
    )
}

export default UploadForm 
