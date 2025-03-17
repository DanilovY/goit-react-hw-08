import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        "https://67d44531d2c7857431ed1527.mockapi.io/contacts"
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addContact = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `https://67d44531d2c7857431ed1527.mockapi.io/contacts`,
        body
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteContact = createAsyncThunk(
  "contacts/delData",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `https://67d44531d2c7857431ed1527.mockapi.io/contacts/${id}`
      );
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export { fetchContacts, addContact, deleteContact };
