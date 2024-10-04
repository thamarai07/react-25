import { useEffect, useState } from "react";

export default function SearchFilter() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [users, setUsers] = useState<string[]>([]); // Array of first names (strings)
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState<string[]>([]);

  // Handle input change and filter users
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      // Filter users based on query
      const filteredData = users.filter((item: string) =>
        item.toLowerCase().includes(query)
      );
      setFilteredUsers(filteredData);
      setShowDropDown(filteredData.length > 0);
    } else {
      setFilteredUsers([]);
      setShowDropDown(false);
    }
  }

  async function fetchUser() {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setLoading(false);

      if (data && data.users && data.users.length > 0) {
        // Only map first names into the users state
        setUsers(data.users.map((item: any) => item.firstName));
        setError(null);
      } else {
        setError("No users found.");
      }
    } catch (e: any) {
      setError(e.message);
      setLoading(false); // Stop loading even on error
    }
  }

  useEffect(() => {
    fetchUser();
  }, [searchParam]);

  return (
    <>
      <div className="livesearch__wrap">
        <h1 className="text-[34px] mt-10 mb-10">Live search filter </h1>
        <input
          value={searchParam}
          type="text"
          name="livesearch"
          placeholder="Search..."
          onChange={handleChange}
        />

        {/* Dropdown suggestion box */}
        {showDropDown ? (
          <Suggestion data={filteredUsers} />
        ) : (
          "Please search the data"
        )}

        {/* Show loading spinner or error message */}
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </div>
    </>
  );
}

const Suggestion = ({ data }: { data: string[] }) => {
  const [AddClass, setAddClass] = useState(false);

  useEffect(() => {
    if (data && data.length > 0) {
      setTimeout(() => {
        setAddClass(true)
      }, 100);
    }
  }, [data]);

  return (
    <>
      <ul className="searched__list">
        {/* Show "No results found" if data is empty */}
        {data && data.length > 0 ? (
          data.map((value: string) => (
            <li key={value} className={`searched__user ${AddClass && "active"}`}>
              {value}
            </li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </>
  );
};
