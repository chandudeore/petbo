import React, { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { getPetData } from "../Redux/petbo/action";

const initialState = {
  serviceName: "",
  city: "",
  address: "",
  capacityOfPet: "",
  cost: "",
  verified: "",
  rating: "",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SERVICE_NAME":
      return { ...state, serviceName: payload };
    case "CITY":
      return { ...state, city: payload };
    case "ADDRESS":
      return { ...state, address: payload };
    case "CAPACITY_OF_PET":
      return { ...state, capacityOfPet: payload };
    case "COST":
      return { ...state, cost: payload };
    case "VERIFIED":
      return { ...state, verified: payload };
    case "RATING":
      return { ...state, rating: payload };
    case "RESET":
      return { ...initialState };
    default:
      throw new Error("Please give proper action object");
  }
};

export const ListCreate = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const reduxdispatch = useDispatch();

  const { serviceName, city, address, capacityOfPet, cost, verified, rating } =
    state;

  const handleData = () => {
    const payload = {
      ...state,
    };
    fetch("http://localhost:3001/petbo", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => reduxdispatch(getPetData()))
      .then(() => dispatch({ type: "RESET" }))
      .catch((err) => console.log("Something Went Wrong", err));
  };
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            dispatch({ type: "SERVICE_NAME", payload: e.target.value });
          }}
          value={serviceName}
          placeholder="Enter pet Bo service Name"
        />
        <input
          type="text"
          onChange={(e) => {
            dispatch({ type: "CITY", payload: e.target.value });
          }}
          value={city}
          placeholder="Enter city"
        />
        <input
          type="text"
          onChange={(e) => {
            dispatch({ type: "ADDRESS", payload: e.target.value });
          }}
          value={address}
          placeholder="Enter Address"
        />
        <input
          type="Number"
          onChange={(e) => {
            dispatch({ type: "CAPACITY_OF_PET", payload: e.target.value });
          }}
          value={capacityOfPet}
          placeholder="Enter Capacity of Service"
        />
        <input
          type="Number"
          onChange={(e) => {
            dispatch({ type: "COST", payload: e.target.value });
          }}
          value={cost}
          placeholder="Enter Cost Per Day"
        />
        <div>
          <label>
            <input
              type="radio"
              checked={verified === "Yes"}
              onChange={(e) => {
                dispatch({ type: "VERIFIED", payload: "Yes" });
              }}
              placeholder="Enter Verified Or Not"
            />
            Yes
          </label>
          <br />
          <label>
            <input
              type="radio"
              checked={verified === "No"}
              onChange={(e) => {
                dispatch({ type: "VERIFIED", payload: "No" });
              }}
              placeholder="Enter Verified Or Not"
            />
            No
          </label>
        </div>
        <input
          type="Number"
          onChange={(e) => {
            dispatch({ type: "RATING", payload: e.target.value });
          }}
          value={rating}
          placeholder="Enter a Rating"
        />
        <input type="submit" onClick={handleData} value="Submit" />
      </div>
    </div>
  );
};
