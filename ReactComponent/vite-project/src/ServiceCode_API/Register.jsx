import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    zipCode: '',
    address: ''
  });

  const [errors, setErrors] = useState({});
  // const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    let errors = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords must match";
    }
    if (!/^\d{10}$/.test(formData.mobile)) {
      errors.mobile = "Invalid mobile number";
    }
    if (!/^\d{5,6}$/.test(formData.zipCode)) {
      errors.zipCode = "Invalid ZIP Code";
    }
    if (!formData.address.trim()) errors.address = "Address is required";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccessMessage("Registration successful!");
      setTimeout(() => setSuccessMessage(""), 3000);

      console.log("Form Submitted:", formData);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobile: '',
        zipCode: '',
        address: ''
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Register Page</h1>

      {successMessage && <div className="text-green-600 text-center mb-4">{successMessage}</div>}

      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 shadow-md rounded-md">
        <div className="mb-4">
          <label className="block">First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="border p-2 w-full" />
          {errors.firstName && <div className="text-red-500 text-sm">{errors.firstName}</div>}
        </div>

        <div className="mb-4">
          <label className="block">Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="border p-2 w-full" />
          {errors.lastName && <div className="text-red-500 text-sm">{errors.lastName}</div>}
        </div>

        <div className="mb-4">
          <label className="block">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="border p-2 w-full" />
          {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
        </div>

        <div className="mb-4">
          <label className="block">Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="border p-2 w-full" />
          {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
        </div>

        <div className="mb-4">
          <label className="block">Confirm Password</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="border p-2 w-full" />
          {errors.confirmPassword && <div className="text-red-500 text-sm">{errors.confirmPassword}</div>}
        </div>

        <div className="mb-4">
          <label className="block">Mobile Number</label>
          <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} className="border p-2 w-full" />
          {errors.mobile && <div className="text-red-500 text-sm">{errors.mobile}</div>}
        </div>

        <div className="mb-4">
          <label className="block">ZIP Code</label>
          <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} className="border p-2 w-full" />
          {errors.zipCode && <div className="text-red-500 text-sm">{errors.zipCode}</div>}
        </div>

        <div className="mb-4">
          <label className="block">Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} className="border p-2 w-full" />
          {errors.address && <div className="text-red-500 text-sm">{errors.address}</div>}
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
