import React, {useState} from 'react';

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Fab from "@mui/material/Fab";

import './FileUploadPage.css'

// const styles = theme => ({
//     input: {
//       display: "none"
//     },
//     button: {
//       color: blue[900],
//       margin: 10
//     }
//   });

export default function FileUploadPage(props){
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

    

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

    //function for uploading the file
    // const handleUploadClick = event => {
    //     console.log();
    //     var file = event.target.files[0];
    //     const reader = new FileReader();
    //     var url = reader.readAsDataURL(file);
    
    //     reader.onloadend = function(e) {
    //       this.setState({
    //         selectedFile: [reader.result]
    //       });
    //     }.bind(this);
    //     console.log(url); // Would see a path?
    
    //     this.setState({
    //       mainState: "uploaded",
    //       selectedFile: event.target.files[0],
    //       imageUploaded: 1
    //     });
    //   };

	const handleSubmission = () => {
		const formData = new FormData();

		formData.append('File', selectedFile);

		fetch(
			'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
	
	return(
   <div>

            <input
              accept="image/*"
            //   className={classes.input}
              id="contained-button-file"
              className='input-image'
              multiple
              type="file"
              onChange={changeHandler}
            />
            <label htmlFor="contained-button-file">
              <Fab component="span"
            //    className={classes.button}
                >

                <AddPhotoAlternateIcon style = {{ color: "dodgerblue" }}/>
              </Fab>
            </label>

			{isFilePicked ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}


			{/* <input type="file" name="file" onChange={changeHandler} />
			{isFilePicked ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)} */}
            
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>
		</div>
	)
};