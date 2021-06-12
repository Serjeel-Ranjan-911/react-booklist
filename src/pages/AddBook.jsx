import Header from "../components/Header";

export default function AddBookPage() {
  return (
    <section className=" sm:grid grid-cols-layout grid-rows-layout">
      <Header />
      <div className="min-h-screen col-start-2 row-start-2 bg-gray-100 ">
        <h2 className="px-4 pt-5 text-3xl font-bold text-gray-900 ">Add New</h2>

        <div class=" shadow-md mt-7 mx-5 overflow-hidden rounded-md">
          <form class="bg-white pt-5 pb-2 px-5 flex flex-col" id="new book">
            <label name="Book Title">Book Title</label>
            <input type="text" name="Book Title" required />
            <label name="Pages">Pages</label>
            <input type="text" name="Pages" />
            <label for="Genre">Genre</label>
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
            <label for="Favorite">Favorite</label>
            <label for="Favorite">
              Add this book to your list of favorites
            </label>
            <input type="checkbox" name="Favorite" />
            <label name="Series">Series / Collection</label>
            <input type="text" name="Series" />
            <label for="Photo">Cover Photo</label>
            <input
              type="file"
              name="Photo"
              accept="image/png, image/jpeg"
            ></input>
          </form>

          <div
            class="bg-gray-50 h-16 flex items-center
          "
          >
            <button
              class="bg-booklistBlue-dark rounded-md h-10 w-28 ml-4 text-white font-semibold"
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
