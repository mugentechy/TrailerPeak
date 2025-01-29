import { createAsyncThunk } from '@reduxjs/toolkit'
import { url } from "../../utils/url.js"
import axios from 'axios'

export const fetchMagnetData = createAsyncThunk(
  'magnet/fetchMagnetData',
  async (name, { rejectWithValue }) => {
    try {

      const response = await axios.get(`${url}/play/${name}`);
      console.log(response)
      const magnetLink = response.data.video_url.split('v=')[1]; // Extract magnet link
      console.log(magnetLink)
      return magnetLink;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);