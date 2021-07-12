import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../images/logo.png';
import bgImg from '../images/sign-in.jpg';

export default function LandingPage() {
  const { loginWithRedirect } = useAuth0();

  return (
    <article className="h-screen md:flex">
      <section className="flex flex-col items-center w-full px-10 md:w-5/12">
        <div className="flex flex-col items-center w-full mb-5">
          <img className="w-1/3" src={logo} alt="logo" />
          <h1 className="mb-5 text-3xl font-bold text-center text-gray-900 font-inter">
            Track Your Reading
          </h1>
          <button
            type="button"
            className="w-full py-2 mb-5 border border-gray-900 border-solid rounded-md text-md "
          >
            Create Your Account
          </button>
          <div className="flex items-center w-full">
            <hr className="flex-auto w-10 border-solid border-booklistRed border-1" />
            <p className="mx-3 text-sm text-center">
              Already have an account? Sign in below
            </p>
            <hr className="flex-auto w-10 border-solid border-booklistRed border-1" />
          </div>
        </div>
        <div className="w-full">
          <form action="" className="w-full">
            <div className="flex flex-col mb-5">
              <label htmlFor="email" className="mb-2 text-sm">
                Email Address
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="px-2 py-2 border border-gray-900 border-solid rounded-md placeholder-text-sm"
                />
              </label>
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="password" className="mb-2 text-sm">
                Password
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="px-2 py-2 border border-gray-900 border-solid rounded-md"
                />
              </label>
            </div>
            <div className="flex flex-row items-center w-full mb-5">
              <label className="w-full text-sm" htmlFor="remember_check">
                <input
                  type="checkbox"
                  name="remember-check"
                  id="remember_check"
                  className="mr-5"
                />
                Remember me
              </label>
              <span className="w-full text-sm text-right">
                <a
                  href="#sendpasswordreset"
                  className="text-booklistBlue-dark hover:underline"
                >
                  Forgot your password?
                </a>
              </span>
            </div>
            <button
              type="submit"
              onClick={() => loginWithRedirect()}
              className="w-full py-2 text-white border border-solid rounded-md bg-booklistBlue-light"
            >
              Sign in
            </button>
          </form>
        </div>
      </section>
      <aside className="invisible w-7/12 md:visible">
        <img
          src={bgImg}
          alt="books on shelves"
          className="object-cover w-full h-full"
        />
      </aside>
    </article>
  );
}
