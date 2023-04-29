import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import axios from 'axios';

const UpdateBook = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const { id } = useParams();

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/books/${id}`);
                const { name, author, description, price, image } = response.data;
                setName(name);
                setAuthor(author);
                setDescription(description);
                setPrice(price);
                setImage(image);
            } catch (error) {
                console.log(error);
            }
        };
        fetchBook();
    }, [id]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleImageChange = (event) => {
        setImage(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:5000/books/${id}`, {
                name,
                author,
                description,
                price,
                image,
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    if (isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="w-1/2">
                <button className="text-2xl font-bold mb-4">Update a Book</button>
                <div className="mb-4">
                    <label className="block font-bold text-gray-700 mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold text-gray-700 mb-2" htmlFor="author">
                        Author
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="author"
                        type="text"
                        placeholder="Enter author"
                        value={author}
                        onChange={handleAuthorChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold text-gray-700 mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        rows="4"
                        placeholder="Enter description"
                        value={description}
                        onChange={handleDescriptionChange}
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block font-bold text-gray-700 mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="price"
                        type="number"
                        step="0.01"
                        placeholder="Enter price"
                        value={price}
                        onChange={handlePriceChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold text-gray-700 mb-2" htmlFor="image">
                        Image
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="image"
                        type="url"
                        placeholder="Enter image URL"
                        value={image}
                        onChange={handleImageChange}
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => handleSubmit()}
                    >
                        Update Book
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateBook;

