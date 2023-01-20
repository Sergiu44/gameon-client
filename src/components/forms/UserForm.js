import axios from "axios";
import { useEffect, useState } from "react";
import { Input } from "../elements/Input";
import Select from "../elements/Select";

export default function UserForm(props) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios.get("https://localhost:7114/Category/get").then(({ data }) => {
        setOptions(
          data.map((opt) => ({ value: opt.categoryName, id: opt.id }))
        );
      });
    };

    const getUser = () => {
      axios
        .get("https://localhost:7114/User/getCurrentUser", {
          headers: props.token,
        })
        .then(({ data }) => props.setUser(data));
    };
    getUser();
    getData();
  }, []);
  return (
    <div className="bg-gray-100">
      <Input
        className="my-4"
        label="Email"
        type="text"
        value={props.user.email}
      />
      <Input
        className="my-4"
        label="First name"
        type="text"
        value={props.user.firstName}
        onChange={(e) => props.setUser((prev) => ({ ...prev, firstName: e }))}
      />
      <Input
        className="my-4"
        label="Last name"
        type="text"
        value={props.user.lastName}
        onChange={(e) => props.setUser((prev) => ({ ...prev, lastName: e }))}
      />
      <Input
        className="my-4"
        label="Bio"
        type="textarea"
        value={props.user.bio}
        onChange={(e) => props.setUser((prev) => ({ ...prev, bio: e }))}
      />
      <Input
        className="my-4"
        label="Address1"
        type="text"
        value={props.user.addressLine1}
        onChange={(e) =>
          props.setUser((prev) => ({ ...prev, addressLine1: e }))
        }
      />
      <Input
        className="my-4"
        label="Address2"
        type="text"
        value={props.user.addressLine2}
        onChange={(e) =>
          props.setUser((prev) => ({ ...prev, addressLine2: e }))
        }
      />
      <Input
        className="my-4"
        label="City"
        type="text"
        value={props.user.city}
        onChange={(e) => props.setUser((prev) => ({ ...prev, city: e }))}
      />
      <Input
        className="my-4"
        label="County"
        type="text"
        value={props.user.county}
        onChange={(e) => props.setUser((prev) => ({ ...prev, county: e }))}
      />
      <Input
        className="my-4"
        label="Postal code"
        type="text"
        value={props.user.postalCode}
        onChange={(e) => props.setUser((prev) => ({ ...prev, postalCode: e }))}
      />
      <Input
        className="my-4"
        label="Phone"
        type="text"
        value={props.user.phone}
        onChange={(e) => props.setUser((prev) => ({ ...prev, phone: e }))}
      />
      <Select
        options={options}
        onChange={(e) =>
          props.setUser((prev) => ({ ...prev, category: e.target.value }))
        }
      />
      <Input
        className="my-4"
        label="Date of birth"
        type="date"
        value={props.user.dateOfBirth}
        onChange={(e) => props.setUser((prev) => ({ ...prev, dateOfBirth: e }))}
      />
    </div>
  );
}
