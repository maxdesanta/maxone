'use client'

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../icon/solid";
import { useRouter } from "next/navigation";

export default function Search() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const router = useRouter();

  // Fetch data saat mengetik
  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      if (query.length > 1) {
        const url =  `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`;
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODEwOWE1MWI1MDA3NTkwOTQ4ZWQ1ZWFhNDI5MDY5MiIsIm5iZiI6MTY5NzM3MzczNy4wNzIsInN1YiI6IjY1MmJkZTI5ZjI4ODM4MDI5ZjMyYmQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sk58CpfO_dxvQNdkmqs0BeiRcDFv4xfsY0LeV7r-LOk`,
          },
        };

        const res = await fetch(url,options);
        const data = await res.json();
        const dataSearch = data.results
        setResult(dataSearch.slice(0, 5)); // batasi ke 5 hasil
      } else {
        setResult([]);
      }
    }, 300); // debounce 300ms

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleSelect = (id) => {
    setQuery('');
    setResult([]);
    router.push(`/${id}`);
  };

  return (
    <div className="relative w-1/2 max-w-xs"> 
      <div className="bg-[#373737] py-2 px-5 rounded-full flex items-center">
        <FontAwesomeIcon
          icon="fa-solid fa-magnifying-glass"
          className="text-[#F1CE2C] mr-5 w-5 h-5 rotate-90"
        />
        <input
          type="text"
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Fun, Romantic, War"
          className="bg-[#373737] outline-none text-[#8F8989] text-sm w-40 w-full"
        />
      </div>
      <ul className="absolute left-0 mt-2 w-full bg-[#373737] text-[#8F8989] rounded-md shadow-md z-50 max-h-60 overflow-y-auto">
          {result.map((movie) => (
            <li
              key={movie.id}
              onClick={() => handleSelect(movie.id)}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-sm"
            >
              {movie.title} {movie.release_date ? `(${movie.release_date.slice(0, 4)})` : ''}
            </li>
          ))}
        </ul>
    </div>
  );
}
