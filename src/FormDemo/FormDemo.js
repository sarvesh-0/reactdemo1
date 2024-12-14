import React, { useState } from 'react';

const ControlledForm = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        gender: '',
        course: 'so',
        modules: [],
        center: 'so',
        percent: ''
    });
    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevState) => ({
                ...prevState,
                modules: checked
                    ? [...prevState.modules, value]
                    : prevState.modules.filter((module) => module !== value)
            }));
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = () => {
        const newErrors = {};
        if (!formData.fname) newErrors.fname = 'First name is required';
        if (!formData.lname) newErrors.lname = 'Last name is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (formData.course === 'so') newErrors.course = 'Please select a course';
        if (formData.center === 'so') newErrors.center = 'Please select a center';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setSubmittedData(formData);
        }
    };

    return (
        <div>
            <form>
                <table className="tbl" cellPadding="10" width="30%">
                    <tbody>
                        <tr>
                            <td>First Name:</td>
                            <td>
                                <input
                                    type="text"
                                    name="fname"
                                    value={formData.fname}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        {errors.fname && (
                            <tr>
                                <td colSpan="2" className="error">{errors.fname}</td>
                            </tr>
                        )}
                        <tr>
                            <td>Last Name:</td>
                            <td>
                                <input
                                    type="text"
                                    name="lname"
                                    value={formData.lname}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        {errors.lname && (
                            <tr>
                                <td colSpan="2" className="error">{errors.lname}</td>
                            </tr>
                        )}
                        <tr>
                            <td>Gender:</td>
                            <td>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === 'male'}
                                    onChange={handleChange}
                                /> Male <br />
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === 'female'}
                                    onChange={handleChange}
                                /> Female
                            </td>
                        </tr>
                        {errors.gender && (
                            <tr>
                                <td colSpan="2" className="error">{errors.gender}</td>
                            </tr>
                        )}
                        <tr>
                            <td>Course:</td>
                            <td>
                                <select
                                    name="course"
                                    value={formData.course}
                                    onChange={handleChange}
                                >
                                    <option value="so">Select Option</option>
                                    <option value="java">Java Full Stack</option>
                                    <option value="spic">SPIC</option>
                                    <option value="data_sci">Data Science</option>
                                    <option value="python">Python Full Stack</option>
                                </select>
                            </td>
                        </tr>
                        {errors.course && (
                            <tr>
                                <td colSpan="2" className="error">{errors.course}</td>
                            </tr>
                        )}
                        <tr>
                            <td>Modules Done:</td>
                            <td>
                                <input
                                    type="checkbox"
                                    name="module"
                                    value="C Prog"
                                    checked={formData.modules.includes('C Prog')}
                                    onChange={handleChange}
                                /> C Prog<br />
                                <input
                                    type="checkbox"
                                    name="module"
                                    value="SQL"
                                    checked={formData.modules.includes('SQL')}
                                    onChange={handleChange}
                                /> SQL<br />
                                <input
                                    type="checkbox"
                                    name="module"
                                    value="MongoDb"
                                    checked={formData.modules.includes('MongoDb')}
                                    onChange={handleChange}
                                /> MongoDb<br />
                                <input
                                    type="checkbox"
                                    name="module"
                                    value="Core Java"
                                    checked={formData.modules.includes('Core Java')}
                                    onChange={handleChange}
                                /> Core Java
                            </td>
                        </tr>
                        <tr>
                            <td>Center:</td>
                            <td>
                                <select
                                    name="center"
                                    value={formData.center}
                                    onChange={handleChange}
                                >
                                    <option value="so">Select Option</option>
                                    <option value="pune">Pune</option>
                                    <option value="mumbai">Mumbai</option>
                                    <option value="hedrabad">Hedrabad</option>
                                    <option value="nagpur">Nagpur</option>
                                </select>
                            </td>
                        </tr>
                        {errors.center && (
                            <tr>
                                <td colSpan="2" className="error">{errors.center}</td>
                            </tr>
                        )}
                        <tr>
                            <td>Percentage %:</td>
                            <td>
                                <input
                                    type="number"
                                    name="percent"
                                    value={formData.percent}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input
                                    type="button"
                                    value="Submit"
                                    onClick={handleSubmit}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            {submittedData && (
                <div className="info">
                    <p>Student Name: {submittedData.fname} {submittedData.lname}</p>
                    <p>Course: {submittedData.course}</p>
                    <p>Modules Done: {submittedData.modules.join(', ')}</p>
                    <p>Center: {submittedData.center}</p>
                    <p>Percentage: {submittedData.percent}%</p>
                </div>
            )}
        </div>
    );
};

export default ControlledForm;
