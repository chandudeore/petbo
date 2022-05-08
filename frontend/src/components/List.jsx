import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPetData } from "../Redux/petbo/action";

export const List = () => {
  const [pets, setPets] = useState([]);
  const [count, setCount] = useState(0);
  const { pet } = useSelector((state) => state.pet);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPetData());
    console.log(pet);
  }, []);

  useEffect(() => {
    //setPets(data);
  }, [setCount]);

  const handleSort = (data) => {
    setPets(data);
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <button
          onClick={() => {
            let data = pet.sort((a, b) => {
              if (a.city > b.city) {
                return 1;
              }
              return -1;
            });
            //console.log(pet);
            handleSort(data);
          }}
        >
          Sort On City
        </button>
        <button
          onClick={() => {
            let data = pet.sort((a, b) => {
              if (a.verified > b.verified) {
                return -1;
              }
              return 1;
            });
            handleSort(data);
          }}
        >
          Sort On Verified
        </button>
        <button
          onClick={() => {
            let data = pet.sort((a, b) => {
              if (a.cost > b.cost) {
                return 1;
              }
              return -1;
            });
            handleSort(data);
          }}
        >
          Sort By Cost
        </button>
        <button
          onClick={() => {
            let data = pet.sort((a, b) => {
              if (a.rating > b.rating) {
                return 1;
              }
              return -1;
            });
            handleSort(data);
          }}
        >
          Sort By Rating
        </button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Service Center Name</th>
              <th>City</th>
              <th>Address</th>
              <th>Capacity</th>
              <th>Cost Per Day</th>
              <th>Verified</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {pet.map((ele) => (
              <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>{ele.serviceName}</td>
                <td>{ele.city}</td>
                <td>{ele.address}</td>
                <td>{ele.capacityOfPet}</td>
                <td>{ele.cost}</td>
                <td>{ele.verified}</td>
                <td>{ele.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
