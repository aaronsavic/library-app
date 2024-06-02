import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditBook = () => {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getBookById();
    }, []);

    const getBookById = async () => {
        const response = await axios.get(`http://localhost:5000/books/${id}`);
        setTitle(response.data.name);
        setFile(response.data.image);
        setPreview(response.data.url);
    }

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image))
    }

    const updateBook = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("file", file);
        try {
            await axios.patch(`http://localhost:5000/books/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="columns is-centered mt-5">
        <div className="column is-half">
            <form onSubmit={updateBook}>
                <div className="field">
                    <label htmlFor="" className="label">Book Name</label>
                    <div className="control">
                        <input type="text" className='input' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Book Name' />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="" className="label">Book Image</label>
                    <div className="control">
                        <div className="file">
                            <label className="file-label">
                                <input type="file" className='file-input' onChange={loadImage} />
                                <span className='file-cta'>
                                    <span className='file-label'>Choose a file</span>
                                </span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className='mb-5'>

                    {preview ? (
                        <figure className='image is-128x128'>
                            <img src={preview} alt="Preview" />
                        </figure>
                    ): (
                        ""
                    )}
                </div>

                <div className="field mt-5">
                    <div className="control">
                        <button type='submit' className="button is-warning">Update</button>
                    </div>
                </div>

            </form>
        </div>
    </div>
  )
}

export default EditBook