import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export const createPost = async (url, newPost) =>
  await axios.post(url, newPost);

export const updatePost =async (url, id, updatedPost) =>
  await axios.patch(`${url}/${id}`, updatedPost);

  export const deletePost =async (url, id) =>
   await axios.delete(`${url}/${id}`);

export const likePost =async (url, id) =>
  await axios.patch(`${url}/${id}/likePost`);