import React, { useState, useEffect } from 'react';
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
  const [seriesOptions, setSeriesOptions] = useState([]);
  const [bookSelection, setBookSelection] = useState([]);
  const [image, setImage] = useState(null);
  const [searchBookLoading, setSearchBookLoading] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const authToken = loadAuthToken();

    axios
      .get(`${API_BASE_URL}/lists`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((res) => {
        setSeriesOptions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function addBook(e) {
    e.preventDefault();
    const authToken = loadAuthToken();

    const pagesNum = parseFloat(pages);
    const listNum = parseFloat(series);
    axios
      .post(
        `${API_BASE_URL}/books`,
        {
          list_id: listNum,
          author,
          title,
          pages: pagesNum,
          // image_url: coverPhoto,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      )
      .then(() => {
        history.push('/dashboard');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function searchBooks() {
    setSearchBookLoading(true);
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${title}`)
      .then((res) => {
        console.log('books result', res.data.items);
        setBookSelection(res.data.items);
        setSearchBookLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function selectBook(e) {
    console.log(e);
    if (bookSelection.length < 1) {
      return;
    }
    if (e.keyCode === 13 || e.type === 'click' || e.key === 'Unidentified') {
      console.log('htting this');
      setFilteredBooks(
        bookSelection.filter(
          (book) =>
            `${book.volumeInfo.title} - ${book.volumeInfo.authors}` === title,
        ),
      );
      if (filteredBooks.length > 0) {
        console.log(filteredBooks, 'filteredBooks');
        setPages(filteredBooks[0].volumeInfo.pageCount);
        setImage(filteredBooks[0].volumeInfo.imageLinks.thumbnail);
        setAuthor(filteredBooks[0].volumeInfo.authors);
        setBookSelection([]);
      }
    }
  }

  // useEffect(() => {
  //   console.log('filteredBooks', filteredBooks);
  //   if (filteredBooks.length > 0) {
  //     console.log(filteredBooks, 'filteredBooks');
  //     setPages(filteredBooks[0].volumeInfo.pageCount);
  //     setImage(filteredBooks[0].volumeInfo.imageLinks.thumbnail);
  //     setAuthor(filteredBooks[0].volumeInfo.authors);
  //     setBookSelection([]);
  //   }
  // }, [filteredBooks]);

  let seriesSelect;
  let loading;
  let imageElement;

  if (seriesOptions.length === 0) {
    seriesSelect = null;
  } else {
    seriesSelect = (
      <select
        onChange={(e) => {
          setSeries(e.target.value);
        }}
        className="w-full border-2"
        name="Series"
        id="Series"
        value={series.list_id}
      >
        {seriesOptions.map((item) => (
          <option value={item.list_id} key={item.list_id}>
            {item.name}
          </option>
        ))}
      </select>
    );
  }

  if (!searchBookLoading || title.length === 0) {
    loading = null;
  } else {
    loading = <span>loading books...</span>;
  }

  if (!image) {
    imageElement = null;
  } else {
    imageElement = <img src={image} alt="" />;
  }
  return (
    <section className=" sm:grid grid-cols-layout grid-rows-layout">
      <Header />
      <div className="min-h-screen col-start-2 row-start-2 bg-gray-100 ">
        <h2 className="px-4 pt-5 text-3xl font-bold text-gray-900 ">Add New</h2>
        <div className="mx-5 overflow-hidden rounded-md shadow-md mt-7">
          <form className="flex flex-col px-5 pt-5 pb-2 bg-white" id="new book">
            <label className="my-2.5" htmlFor="Book Title">
              Book Title
              <input
                onChange={(e) => {
                  setTitle(e.target.value);
                  if (title.length > 2) {
                    searchBooks(title);
                  }
                }}
                className="w-full border-2"
                type="text"
                id="Book Title"
                name="Book Title"
                onKeyDown={selectBook}
                value={title}
                list="bookTitle"
                autoComplete="off"
                required
              />
              <datalist id="bookTitle">
                {bookSelection.map((book) => (
                  <option key={book.id} onSelect={selectBook}>
                    {book.volumeInfo.title} - {book.volumeInfo.authors}
                  </option>
                ))}
              </datalist>
              <button
                className="bg-booklistBlue text-white rounded-md px-4 py-1 mt-1"
                type="button"
                onClick={selectBook}
              >
                Select
              </button>
              {loading}
            </label>
            <label className="my-2.5" htmlFor="Pages">
              Pages
              <input
                onChange={(e) => {
                  setPages(e.target.value);
                }}
                className="w-full border-2"
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
                className="w-full border-2"
                name="Genre"
                id="Genre"
                value={genre}
              >
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Horror">Horror</option>
                <option value="Biography">Biography</option>
                <option value="Auto-Biography">Auto-Biography</option>
                <option value="Mystery">Mystery</option>
              </select>
            </label>
            <label className="my-2.5" htmlFor="Author">
              Author
              <input
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
                className="w-full border-2"
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
              {seriesSelect}
            </label>
            <div className="flex justify-center my-4">{imageElement}</div>
          </form>

          <div className="flex items-center h-16 bg-gray-50 ">
            <button
              className="h-10 ml-4 font-semibold text-white rounded-md bg-booklistBlue-dark w-28"
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
