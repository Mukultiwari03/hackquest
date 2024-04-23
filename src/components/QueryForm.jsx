import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const QueryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        semester: '',
        roomNumber: '',
        personalContact: '',
        parentsContact: '',
        purpose: '',
        place: '',
        inDateTime: '',
        outDateTime: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send form data to server-side endpoint for verification
            const response = await fetch('/api/verifyRequest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Request submitted successfully for verification!');
                // Optionally reset form after successful submission
                setFormData({
                    name: '',
                    semester: '',
                    roomNumber: '',
                    personalContact: '',
                    parentsContact: '',
                    purpose: '',
                    place: '',
                    inDateTime: '',
                    outDateTime: ''
                });
            } else {
                alert('Failed to submit request. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting request:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
      <Navbar />
      <div className="grid grid-cols-12 sticky ">
        <div className=" col-span-2 hidden lg:block">
          <aside className="sticky top-[70px] x-[3]">
            <Sidebar />
          </aside>
        </div>

        <div className=" col-span-12 lg:col-span-10  z-[-1]">
        <div className="max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label htmlFor="semester" className="block text-gray-700 text-sm font-bold mb-2">Semester:</label>
                    <input type="text" id="semester" name="semester" value={formData.semester} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label htmlFor="roomNumber" className="block text-gray-700 text-sm font-bold mb-2">Room Number:</label>
                    <input type="text" id="roomNumber" name="roomNumber" value={formData.roomNumber} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label htmlFor="personalContact" className="block text-gray-700 text-sm font-bold mb-2">Personal Contact Number:</label>
                    <input type="tel" id="personalContact" name="personalContact" value={formData.personalContact} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label htmlFor="parentsContact" className="block text-gray-700 text-sm font-bold mb-2">Parents Contact Number:</label>
                    <input type="tel" id="parentsContact" name="parentsContact" value={formData.parentsContact} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label htmlFor="purpose" className="block text-gray-700 text-sm font-bold mb-2">Purpose of Visit:</label>
                    <input type="text" id="purpose" name="purpose" value={formData.purpose} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label htmlFor="place" className="block text-gray-700 text-sm font-bold mb-2">Place of Visit:</label>
                    <input type="text" id="place" name="place" value={formData.place} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label htmlFor="inDateTime" className="block text-gray-700 text-sm font-bold mb-2">In Date and Time:</label>
                    <input type="datetime-local" id="inDateTime" name="inDateTime" value={formData.inDateTime} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-6">
                    <label htmlFor="outDateTime" className="block text-gray-700 text-sm font-bold mb-2">Out Date and Time:</label>
                    <input type="datetime-local" id="outDateTime" name="outDateTime" value={formData.outDateTime} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Submit
                    </button>
                </div>
            </form>
        </div>
        </div>
      </div>
    </div>
       /* <div className="max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label htmlFor="semester" className="block text-gray-700 text-sm font-bold mb-2">Semester:</label>
                    <input type="text" id="semester" name="semester" value={formData.semester} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label htmlFor="roomNumber" className="block text-gray-700 text-sm font-bold mb-2">Room Number:</label>
                    <input type="text" id="roomNumber" name="roomNumber" value={formData.roomNumber} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label htmlFor="personalContact" className="block text-gray-700 text-sm font-bold mb-2">Personal Contact Number:</label>
                    <input type="tel" id="personalContact" name="personalContact" value={formData.personalContact} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label htmlFor="parentsContact" className="block text-gray-700 text-sm font-bold mb-2">Parents Contact Number:</label>
                    <input type="tel" id="parentsContact" name="parentsContact" value={formData.parentsContact} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label htmlFor="purpose" className="block text-gray-700 text-sm font-bold mb-2">Purpose of Visit:</label>
                    <input type="text" id="purpose" name="purpose" value={formData.purpose} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label htmlFor="place" className="block text-gray-700 text-sm font-bold mb-2">Place of Visit:</label>
                    <input type="text" id="place" name="place" value={formData.place} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                    <label htmlFor="inDateTime" className="block text-gray-700 text-sm font-bold mb-2">In Date and Time:</label>
                    <input type="datetime-local" id="inDateTime" name="inDateTime" value={formData.inDateTime} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-6">
                    <label htmlFor="outDateTime" className="block text-gray-700 text-sm font-bold mb-2">Out Date and Time:</label>
                    <input type="datetime-local" id="outDateTime" name="outDateTime" value={formData.outDateTime} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Submit
                    </button>
                </div>
            </form>
        </div> */
    );
};

export default QueryForm;
