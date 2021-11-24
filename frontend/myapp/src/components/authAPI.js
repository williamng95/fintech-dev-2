import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const Posts = () => {
    const { getAccessTokenSilently } = useAuth0();
    const [posts, setPosts] = useState(null);
  
    useEffect(() => {
      (async () => {
        try {
          const token = await getAccessTokenSilently({
            audience: process.env.REACT_APP_APIAUDIENCE,
          });
          const response = await fetch(process.env.REACT_APP_APIAUDIENCE+'/users', {
            headers: {
              Authorization: `Bearer ${token}`,
            },'Access-Control-Allow-Origin': process.env.REACT_APP_BASEURL,
            method: 'GET',
          });
          setPosts(await response.json());
          // console.log(posts.map(item=>`${item.email}`))
        } catch (e) {
          console.error(e);
        }
      })();
    }, [getAccessTokenSilently])
    return (
        <div>
            <ul>
              {posts&&posts.map(item=>(<li>{item.email}</li>))}
            </ul>
            
        </div>
    )
};



