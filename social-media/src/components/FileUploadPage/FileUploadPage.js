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
			'https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5',
			{
				method: 'POST',
				body: formData,
				mode: 'no-cors'
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

	const handleSubmissionForm = (e) => {
		//e.preventDefault();
		
		//const form = document.getElementById('formPost')
		const formData = new FormData();
		formData.append("user", "abc");
		formData.append("postdata", selectedFile);
		formData.append("caption", "16th Post");


		let formDataObject = Object.fromEntries(formData.entries());

		let formDataJsonString = JSON.stringify(formDataObject);

		
		//console.log([...formData]);
		// formData.append('postdata', "http://bitly.ws/sDBC");
		// formData.append('caption', "13th Neww");
		//formData.append('File', selectedFile);

		//console.log([...formData]);

		fetch(
			'http://localhost:8080/insertpost',
			{
				method: 'POST',
				body: formDataJsonString,
				headers: {
					'Content-Type': 'application/json'
				  }
				//mode: 'no-cors',
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
					{/* <input name="id" type = "text" /> */}
					<button onClick={handleSubmissionForm}>Submit</button>
			</div>
		</div>
	)
};