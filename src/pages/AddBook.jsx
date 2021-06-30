import Header from "../components/Header";

export default function AddBookPage() {
  return (
    <section className=" sm:grid grid-cols-layout grid-rows-layout">
      <Header />
      <div className="min-h-screen col-start-2 row-start-2 bg-gray-100 ">
        <h2 className="px-4 pt-5 text-3xl font-bold text-gray-900 ">Add New</h2>

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
              type="submit"
              form="new book"
              value="Submit"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
