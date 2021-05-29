import { useRouter } from "next/router";
import PaginationButtons from "./PaginationButtons";

function SearchResults({ results }) {
  return (
    <div className="mx-auto w-full px-3 minSm:!pl-[5%] minMd:!pl-[14%] minLg:!pl-[52%]">
      <p className="text-gray-600 text-md mt-3 mb-5">
        Ungefär {results?.searchInformation?.formattedTotalResults} resultat (
        {results?.searchInformation?.formattedSearchTime} sekunder)
      </p>

      {results?.items?.map((result) => (
        <div key={result?.link} className="max-w-xl mb-8">
          <div className="group">
            <a href={result?.link} className="text-sml">
              {result?.formattedUrl}
              <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline cursor-pointer">
                {result?.title}
              </h2>
            </a>
          </div>
          <p className="line-clamp-2">{result?.snippet}</p>
        </div>
      ))}

      <PaginationButtons />
    </div>
  );
}

export default SearchResults;
