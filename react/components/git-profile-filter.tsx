import React, { useEffect, useState } from "react";

interface UserDataInterface {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string | null;
  blog: string;
  location: string;
  email: string | null;
  hireable: boolean;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export default function GitProfileFilter() {
  const [userName, setuserName] = useState<string>("thamarai");
  const [userData, setuserData] = useState<UserDataInterface | null>(null);

  const handleSubmit = () => {
    fetchGitUserData();
  };

  async function fetchGitUserData() {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      if (response.ok) {
        const data: UserDataInterface = await response.json();
        setuserData(data);
      } else {
        console.error("User not found");
        setuserData(null); // Reset if the user is not found
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setuserData(null);
    }
  }

  useEffect(() => {
    fetchGitUserData();
  }, [userName]); // Fetch data when `userName` changes

  return (
    <>
      <div className="gitprofilefilter__wrap">
        <div className="gitprofilefilter__input">
          <input
            type="text"
            placeholder="Search By GitHub username"
            value={userName}
            name="username"
            onChange={(event) => setuserName(event.target.value)}
          />
          <button onClick={handleSubmit}>Search</button>
        </div>
      </div>

      {userData ? (
        <UserDetails userData={userData} />
      ) : (
        <p className="text-center">User not found or no data available</p>
      )}
    </>
  );
}

const UserDetails = ({ userData }: { userData: UserDataInterface }) => {
  return (
    <div className="user-details">
      <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
      <p><strong>Bio:</strong> {userData.bio || "N/A"}</p>
      <p><strong>Blog:</strong> {userData.blog || "N/A"}</p>
      <p><strong>Company:</strong> {userData.company || "N/A"}</p>
      <p><strong>Location:</strong> {userData.location}</p>
      <p><strong>Email:</strong> {userData.email || "N/A"}</p>
      <p><strong>Followers:</strong> {userData.followers}</p>
      <p><strong>Following:</strong> {userData.following}</p>
      <p><strong>Public Repos:</strong> {userData.public_repos}</p>
      <p><strong>Created At:</strong> {new Date(userData.created_at).toLocaleDateString()}</p>
    </div>
  );
};
