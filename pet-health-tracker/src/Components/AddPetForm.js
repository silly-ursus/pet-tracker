import { useState } from 'react';

const AddPetForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.type) {
      alert('Please fill in pet name and type!');
      return;
    }
    
    console.log('New pet data:', formData);
    // TODO: Save pet data
    alert(`Welcome ${formData.name} the ${formData.type}! 🎉`);
    
    // Reset form
    setFormData({
      name: '',
      type: '',
      age: ''
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Add New Pet 🐾
      </h2>
      
      <div className="space-y-4">
        {/* Pet Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Pet Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your pet's name"
          />
        </div>

        {/* Pet Type */}
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
            Pet Type
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select pet type</option>
            <option value="dog">🐕 Dog</option>
            <option value="cat">🐱 Cat</option>
            <option value="bird">🐦 Bird</option>
            <option value="rabbit">🐰 Rabbit</option>
            <option value="fish">🐠 Fish</option>
            <option value="hamster">🐹 Hamster</option>
            <option value="other">🐾 Other</option>
          </select>
        </div>

        {/* Pet Age */}
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
            Age (years)
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="0"
            max="50"
            step="0.5"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter age (e.g., 2.5)"
          />
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 font-medium"
        >
          Add Pet 🎉
        </button>
      </div>
    </div>
  );
};

export default AddPetForm;