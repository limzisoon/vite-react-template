// File: src/components/MaintenanceForm.tsx
import React, { useState } from "react";
import "./App.css";
import carLogo from "./assets/car_logo.jpg";

interface CarDetails {
  make: string;
  model: string;
  year: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  engineCapacity: string;
  color: string;
  condition: string;
  price: number;
  photos: FileList | null;
}

const MaintenanceForm: React.FC = () => {
  const [carDetails, setCarDetails] = useState<CarDetails>({
    make: "",
    model: "",
    year: new Date().getFullYear(),
    mileage: 0,
    fuelType: "",
    transmission: "",
    engineCapacity: "",
    color: "",
    condition: "",
    price: 0,
    photos: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCarDetails((prev) => ({
      ...prev,
      [name]: name === "photos" ? (e.target as HTMLInputElement).files : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Car Details Submitted:", carDetails);
    // Add logic to send data to the backend
  };

  return (
    <form onSubmit={handleSubmit}>

    <div>
    				<a href="" target="_blank">
    					<img src={carLogo} className="logo" alt="car Logo" />
    				</a>
    				</div>
      <div>
        <label>Make:</label>
        <input type="text" name="make" value={carDetails.make} onChange={handleChange} required />
      </div>
      <div>
        <label>Model:</label>
        <input type="text" name="model" value={carDetails.model} onChange={handleChange} required />
      </div>
      <div>
        <label>Year:</label>
        <input type="number" name="year" value={carDetails.year} onChange={handleChange} required />
      </div>
      <div>
        <label>Mileage:</label>
        <input type="number" name="mileage" value={carDetails.mileage} onChange={handleChange} required />
      </div>
      <div>
        <label>Fuel Type:</label>
        <select name="fuelType" value={carDetails.fuelType} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
        </select>
      </div>
      <div>
        <label>Transmission:</label>
        <select name="transmission" value={carDetails.transmission} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Manual">Manual</option>
          <option value="Automatic">Automatic</option>
        </select>
      </div>
      <div>
        <label>Engine Capacity:</label>
      </div>
      <div>
        <label>Color:</label>
        <input type="text" name="color" value={carDetails.color} onChange={handleChange} required />
      </div>
      <div>
        <label>Condition:</label>
        <select name="condition" value={carDetails.condition} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="New">New</option>
          <option value="Used">Used</option>
          <option value="Certified Pre-Owned">Certified Pre-Owned</option>
        </select>
      </div>
      <div>
        <label>Price:</label>
        <input type="number" name="price" value={carDetails.price} onChange={handleChange} required />
      </div>
      <div>
        <label>Photos:</label>
        <input type="file" name="photos" multiple onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MaintenanceForm;