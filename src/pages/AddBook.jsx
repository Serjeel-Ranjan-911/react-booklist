import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import { loadAuthToken } from '../utils/local-storage';
import API_BASE_URL from '../config';

export default function AddBookPage() {
  const [title, setTitle] = useState('');
  const [pages, setPages] = useState('');
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');
  const [favorite, setFavorite] = useState(false);
  const [series, setSeries] = useState('');
  const [coverPhoto, setCoverPhoto] = useState('');
  const history = useHistory();

  function addBook(e) {
    e.preventDefault();
    const authToken = loadAuthToken();

    const pagesNum = parseFloat(pages);
    axios
      .post(
        `${API_BASE_URL}/books`,
        {
          list_id: 1,
          author,
          title,
          pages: pagesNum,
          // image_url: coverPhoto,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then(() => {
        history.push('/dashboard');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handlePhotoUpload(e) {
    e.preventDefault();
    const selected = e.target.files[0];
    setCoverPhoto(selected.name);
  }

  return (
    <section className=" sm:grid grid-cols-layout grid-rows-layout">
      <Header />
      <div className="min-h-screen col-start-2 row-start-2 bg-gray-100 ">
        <h2 className="px-4 pt-5 text-3xl font-bold text-gray-900 ">Add New</h2>
<<<<<<< HEAD

        <div className="mx-5 overflow-hidden rounded-md shadow-md mt-7">
          <form className="flex flex-col px-5 pt-5 pb-2 bg-white" id="new book">
            <label name="Book Title">Book Title</label>
            <input type="text" name="Book Title" required />
            <label name="Pages">Pages</label>
            <input type="text" name="Pages" />
            <label htmlFor="Genre">Genre</label>
            <select name="Genre">
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Horror">Horror</option>
              <option value="Biography">Biography</option>
              <option value="Auto-Biography">Auto-Biography</option>
              <option value="Mystery">Mistery</option>
            </select>
            <label name="Author">Author</label>
            <input type="text" name="Author" />
            <label htmlFor="Favorite">Favorite</label>
            <label htmlFor="Favorite">
              Add this book to your list of favorites
            </label>
            <input type="checkbox" name="Favorite" />
            <label name="Series">Series / Collection</label>
            <input type="text" name="Series" />
            <label htmlFor="Photo">Cover Photo</label>
            <input type="file" name="Photo" accept="image/png, image/jpeg" />
          </form>

          <div className="flex items-center h-16 bg-gray-50 ">
            <button
              className="h-10 ml-4 font-semibold text-white rounded-md bg-booklistBlue-dark w-28"
=======
        <div className=" shadow-md mt-7 mx-5 overflow-hidden rounded-md">
          <form className="bg-white pt-5 pb-2 px-5 flex flex-col" id="new book">
            <label className="my-2.5" htmlFor="Book Title">
              Book Title
              <input
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="border-2 w-full"
                type="text"
                id="Book Title"
                name="Book Title"
                value={title}
                required
              />
            </label>
            <label className="my-2.5" htmlFor="Pages">
              Pages
              <input
                onChange={(e) => {
                  setPages(e.target.value);
                }}
                className="border-2 w-full"
                type="number"
                id="pages"
                name="Pages"
                value={pages}
                required
              />
            </label>
            <label className="my-2.5" htmlFor="Genre">
              Genre
              <select
                onChange={(e) => {
                  setGenre(e.target.value);
                }}
                className="border-2 w-full"
                name="Genre"
                id="Genre"
                value={genre}
              >
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Horror">Horror</option>
                <option value="Biography">Biography</option>
                <option value="Auto-Biography">Auto-Biography</option>
                <option value="Mystery">Mistery</option>
              </select>
            </label>
            <label className="my-2.5" htmlFor="Author">
              Author
              <input
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
                className="border-2 w-full"
                type="text"
                name="Author"
                id="Author"
                value={author}
                required
              />
            </label>
            <label className="flex flex-col my-2.5" htmlFor="Favorite">
              Favorite
              <div className="text-gray-500">
                Add this book to your list of favorites
              </div>
              <input
                onChange={(e) => {
                  setFavorite(e.target.value);
                }}
                type="checkbox"
                name="Favorite"
                id="Favorite"
                value={favorite}
              />
            </label>
            <label className="my-3" htmlFor="Series">
              Series / Collection
              <input
                onChange={(e) => {
                  setSeries(e.target.value);
                }}
                className="border-2 w-full"
                type="text"
                name="Series"
                id="Series"
                value={series}
              />
            </label>
            <label className="my-3" htmlFor="Photo">
              Cover Photo
              <input
                onChange={handlePhotoUpload}
                className="border-2 w-full"
                type="file"
                name="Photo"
                id="Photo"
                accept="image/png, image/jpeg"
              />
            </label>
          </form>

          <div
            className="bg-gray-50 h-16 flex items-center
          "
          >
            <button
              className="bg-booklistBlue-dark rounded-md h-10 w-28 ml-4 text-white font-semibold"
>>>>>>> d0d74665ec25700142849bea4bb48c8b3f713357
              type="submit"
              form="new book"
              onClick={addBook}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
