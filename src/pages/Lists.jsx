import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useListsApi from '../hooks/useListsApi';
import Header from '../components/Header';

export default function Lists() {
  const [allLists, setLists] = useState([]);
  const history = useHistory();
  const { getAllLists } = useListsApi();
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const getLists = async () => {
      try {
        const data = await getAllLists();
        setLists(data);
        console.log(allLists);
      } catch (e) {
        console.log(e.message);
      }
    };
    await getLists();
  }, []);

  useEffect(() => {
    console.log(allLists);
    if (allLists) {
      setLoading(false);
    }
  }, [allLists]);

  let lists;
  console.log(loading);
  if (loading) {
    console.log(allLists);
    lists = null;
  } else {
    console.log(allLists);
    lists = (
      <div className="grid grid-cols-1 pb-6 mx-6 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div>
          {allLists.map((list) => (
            <p>{list.name}</p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className=" sm:grid grid-cols-layout grid-rows-layout">
      <Header />
      <div className="min-h-screen col-start-2 row-start-2 bg-gray-100 ">
        <h2 className="px-4 pt-5 text-3xl font-bold text-gray-900 ">Lists</h2>
        {lists}
        <div className="mx-5 overflow-hidden rounded-md shadow-md mt-7" />
      </div>
    </section>
  );
}
