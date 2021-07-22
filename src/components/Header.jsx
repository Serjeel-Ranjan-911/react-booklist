import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export default function Header() {
  const { isAuthenticated } = useAuth0();

  const [toggle, setToggle] = useState(false);
  const [searchValue, setSearchValue] = useState('Search');

  let homeButton = (
    <Link to="/">
      <li className="p-1 focus:bg-booklistBlue-dark">Home</li>
    </Link>
  );

  let profile = null;
  let addBook = null;

  if (isAuthenticated) {
    homeButton = (
      <li className="p-1 focus:bg-booklistBlue-dark">
        <Link className="flex" to="/dashboard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          Dashboard
        </Link>
      </li>
    );
    profile = (
      <li className="p-1 focus:bg-booklistBlue-dark">
        <Link className="flex" to="/profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="white"
            viewBox="0 0 512 512"
            stroke="currentColor"
          >
            <path d="m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469-68.382812 0-132.667969 26.628906-181.019531 74.980469-48.351563 48.351562-74.980469 112.636719-74.980469 181.019531 0 68.378906 26.628906 132.667969 74.980469 181.019531 48.351562 48.351563 112.636719 74.980469 181.019531 74.980469 68.378906 0 132.667969-26.628906 181.019531-74.980469 48.351563-48.351562 74.980469-112.640625 74.980469-181.019531 0-68.382812-26.628906-132.667969-74.980469-181.019531zm-308.679687 367.40625c10.707031-61.648438 64.128906-107.121094 127.660156-107.121094 63.535156 0 116.953125 45.472656 127.660156 107.121094-36.347656 24.972656-80.324218 39.613281-127.660156 39.613281s-91.3125-14.640625-127.660156-39.613281zm46.261718-218.519531c0-44.886719 36.515626-81.398438 81.398438-81.398438s81.398438 36.515625 81.398438 81.398438c0 44.882812-36.515626 81.398437-81.398438 81.398437s-81.398438-36.515625-81.398438-81.398437zm235.042969 197.710937c-8.074219-28.699219-24.109375-54.738281-46.585937-75.078125-13.789063-12.480469-29.484375-22.328125-46.359375-29.269531 30.5-19.894531 50.703125-54.3125 50.703125-93.363281 0-61.425782-49.976563-111.398438-111.402344-111.398438s-111.398438 49.972656-111.398438 111.398438c0 39.050781 20.203126 73.46875 50.699219 93.363281-16.871093 6.941406-32.570312 16.785156-46.359375 29.265625-22.472656 20.339844-38.511718 46.378906-46.585937 75.078125-44.472657-41.300781-72.355469-100.238281-72.355469-165.574219 0-124.617188 101.382812-226 226-226s226 101.382812 226 226c0 65.339844-27.882812 124.277344-72.355469 165.578125zm0 0" />
          </svg>
          Profile
        </Link>
      </li>
    );
    addBook = (
      <li className="items-center p-1 focus:bg-booklistBlue-dark">
        <Link className="flex" to="/addBook">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Add Book
        </Link>
      </li>
    );
  }

  return (
    <>
      <div className="relative z-30 flex justify-between col-span-2 px-2 pt-5 pb-4 bg-white shadow-md sm:col-start-2 sm:col-span-1">
        <div className="flex items-center">
          <button
            type="button"
            className="mx-2 min-w-max focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={() => setToggle(!toggle)}
          >
            <svg
              className="text-gray-500 fill-current h-7 sm:hidden"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
            </svg>
          </button>
          <svg
            className="h-5 px-2 stroke-current text-booklistBlue-dark"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <form action="/" method="GET">
            <label htmlFor="search">
              <input
                className="text-lg text-booklistBlue-dark focus:outline-none"
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
                type="text"
                name="search"
                id="search"
                value={searchValue}
              />
            </label>
          </form>
        </div>
        <div className="z-10 flex min-w-max">
          <svg
            className="px-2 stroke-current h-7 text-booklistBlue-dark"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <svg
            className="px-2 stroke-current h-7 text-booklistBlue-dark"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
      <header className="hidden min-h-screen col-start-1 row-span-2 row-start-1 sm:inline bg-booklistBlue">
        <nav className="m-2 text-lg font-semibold text-white">
          <ul>
            {homeButton}
            {profile}
            {addBook}
            <LoginButton />
            <LogoutButton />
          </ul>
        </nav>
      </header>
      <header
        className={`
        col-start-1 absolute top-16 sm:hidden w-screen bg-booklistBlue transform transition z-20
          ${!toggle ? '-translate-y-full transparent' : 'translate-y-0'}
        `}
      >
        <nav className="flex justify-center m-2 text-lg font-semibold text-white">
          <ul>
            {homeButton}
            {profile}
            {addBook}
            <LoginButton />
            <LogoutButton />
          </ul>
        </nav>
      </header>
    </>
  );
}
