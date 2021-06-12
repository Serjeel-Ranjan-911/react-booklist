import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function Header() {
  const { isAuthenticated } = useAuth0();

  const [toggle, setToggle] = useState(false);
  const [searchValue, setSearchValue] = useState("Search");

  let homeButton = (
    <li className="p-1 focus:bg-booklistBlue-dark">
      <Link to="/">Home</Link>
    </li>
  );

  let profile = null;
  let addBook = null;

  if (isAuthenticated) {
    homeButton = (
      <li className="p-1 focus:bg-booklistBlue-dark">
        <Link to="/dashboard">Dashboard</Link>
      </li>
    );
    profile = (
      <li className="p-1 focus:bg-booklistBlue-dark">
        <Link to="/profile">Profile</Link>
      </li>
    );
    addBook = (
      <li className="p-1 focus:bg-booklistBlue-dark">
        <Link to="/addBook">Add Book</Link>
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
          ${!toggle ? "-translate-y-full transparent" : "translate-y-0"}
        `}
      >
        <nav className="m-2 text-lg font-semibold text-center text-white">
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
