import React from 'react';
import logo from '../images/logo.png';
import bgImg from '../images/sign-in.jpg';

export default function LandingPage() {
  return (
    <article className="md:flex h-screen">
      <section className="px-10 flex flex-col items-center w-full md:w-5/12">
        <div className="flex flex-col items-center mb-5 w-full">
          <img className="w-1/3" src={logo} alt="logo" />
          <h1 className="font-inter text-3xl text-center font-bold text-gray-900 mb-5">
            Track Your Reading
          </h1>
          <button className="w-full py-2 mb-5 rounded-md border border-gray-900 border-solid text-md ">
            Create Your Account
          </button>
          <div className="flex items-center w-full">
            <hr className="border-booklistRed border-1 border-solid w-10 flex-auto" />
            <p className="mx-3 text-center text-sm">
              Already have an account? Sign in below
            </p>
            <hr className="border-booklistRed border-1 border-solid w-10 flex-auto" />
          </div>
        </div>
        <div className="w-full">
          <form action="" className="w-full">
            <div className="flex flex-col mb-5">
              <label htmlFor="email" className="text-sm mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="py-2 px-2 rounded-md border border-gray-900 border-solid placeholder-text-sm"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="password" className="text-sm mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="user_password"
                className="py-2 px-2 rounded-md border border-gray-900 border-solid"
              />
            </div>
            <div className="flex flex-row items-center w-full mb-5">
              <input
                type="checkbox"
                name="remember-check"
                id="remember_check"
                className="mr-5"
              />
              <label
                className="text-sm w-full"
                htmlFor="remember_check"
              >
                Remember me
              </label>
              <span className="text-sm w-full text-right">
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
              className="w-full py-2 rounded-md border bg-booklistBlue-light border-solid text-white"
            >
              Sign in
            </button>
          </form>
        </div>
      </section>
      <aside className="invisible md:visible w-7/12">
        <img
          src={bgImg}
          alt="books on shelves"
          className="object-cover w-full h-full"
        />
      </aside>
    </article>
  );
}
