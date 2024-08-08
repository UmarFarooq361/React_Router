    // Using useEffect and useState hooks
    // import React, { useState, useEffect } from 'react';
    

    // const Github = () => {
    // const username = 'UmarFarooq361';
    // const [followers, setFollowers] = useState([]);
    // const [profile, setProfile] = useState(null);
    // const [readme, setReadme] = useState('');
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     // Fetch followers
    //     fetch(`https://api.github.com/users/${username}/followers`)
    //     .then(response => {
    //         if (!response.ok) {
    //         throw new Error('Network response was not ok ' + response.statusText);
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         setFollowers(data);
    //     })
    //     .catch(error => {
    //         setError(error);
    //     });

    //     // Fetch profile
    //     fetch(`https://api.github.com/users/${username}`)
    //     .then(response => {
    //         if (!response.ok) {
    //         throw new Error('Network response was not ok ' + response.statusText);
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         setProfile(data);
    //     })
    //     .catch(error => {
    //         setError(error);
    //     });

    //     // Fetch readme content
    //     fetch(`https://api.github.com/repos/${username}/${username}/readme`, {
    //     headers: {
    //         Accept: 'application/vnd.github.v3.raw' // To get raw content of readme
    //     }
    //     })
    //     .then(response => {
    //         if (!response.ok) {
    //         throw new Error('Network response was not ok ' + response.statusText);
    //         }
    //         return response.text();
    //     })
    //     .then(data => {
    //         setReadme(data);
    //     })
    //     .catch(error => {
    //         setError(error);
    //     });
    // }, [username]);

    // if (error) {
    //     return (
    //     <div className="w-full text-white p-4 bg-gray-500 flex justify-center items-center">
    //         Error: {error.message}
    //     </div>
    //     );
    // }

    // return (
    //     <div className="w-full text-white p-4 bg-gray-100 flex flex-col items-center">
    //     {profile && (
    //         <div className="flex flex-col items-center">
    //         <img src={profile.avatar_url} alt="Profile" className="w-32 h-32 rounded-full mb-4" />
    //         <h1 className="text-2xl mb-4 text-black">{profile.login}</h1>
    //         </div>
    //     )}
    //     <div className="mb-4 text-black text-lg">
    //         Github Followers: {followers.length}
    //     </div>
    //     <div className="bg-white text-black p-4 rounded w-full max-w-2xl">
    //         <h2 className="text-xl mb-2">Readme</h2>
    //         <pre className="whitespace-pre-wrap">{readme}</pre>
    //     </div>
    //     </div>
    // );
    // }

    // export default Github;


// Using useLoaderData hook
    import React from 'react';
    import { useLoaderData } from 'react-router-dom';
        
    
        const Github = () => {
    
        const {followers, profile, readme} = useLoaderData()
    
        return (
            <div className="w-full text-white p-4 bg-gray-100 flex flex-col items-center">
            {profile && (
                <div className="flex flex-col items-center">
                <img src={profile.avatar_url} alt="Profile" className="w-32 h-32 rounded-full mb-4" />
                <h1 className="text-2xl mb-4 text-black">{profile.login}</h1>
                </div>
            )}
            <div className="mb-4 text-black text-lg">
                Github Followers: {followers.length}
            </div>
            <div className="bg-white text-black p-4 rounded w-full max-w-2xl">
                <h2 className="text-xl mb-2">Readme</h2>
                <pre className="whitespace-pre-wrap">{readme}</pre>
            </div>
            </div>
        );
        }
    
        export default Github;
    
    
        export const GithubInfoLoader = async() =>{
            const username = 'UmarFarooq361';
    
            const [followersRes, profileRes, readmeRes] = await Promise.all([
                fetch(`https://api.github.com/users/${username}/followers`),
                fetch(`https://api.github.com/users/${username}`),
                fetch(`https://api.github.com/repos/${username}/${username}/readme`, {
                headers: {
                    Accept: 'application/vnd.github.v3.raw'
                }
                })
            ])
    
            const followers =  await followersRes.json()
            const profile =  await profileRes.json()
            const readme =  await readmeRes.text()
    
            return {followers, profile, readme}
        }