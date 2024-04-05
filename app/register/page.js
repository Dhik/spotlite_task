// Register.js
'use client';
import styles from '../styles/login.module.css'; // Import the CSS module
import { useState } from 'react'; // Import useState hook

export default function Register() {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        // Fetch profile data after successful login
        const profileResponse = await fetch(process.env.NEXT_PUBLIC_API_URL + `/user/${data.id}`);
        const profileData = await profileResponse.json();
        console.log('Profile data:', profileData);
        // Redirect to route '/' with profile data
        // router.push({
        //   pathname: '/',
        //   query: { profile: profileData }
        // });
        window.location.href = 'http://localhost:3000/';
    } else {
        console.error('Login failed');
      }
      // Redirect or perform other actions upon successful registration
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className={styles.body}>
        <div className={styles.signInBorder}>
          <p className={styles.signInTxt}>
            Register
          </p>

          {/* Register form */}
          <form onSubmit={handleSubmit}>
            <label>
              <strong>Name</strong>
              <br />
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className={styles.input} />
            </label>

            <br />

            <label>
              <strong>Email</strong>
              <br />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className={styles.input} />
            </label>

            <br />

            <label>
              <strong>Password</strong>
              <br />
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className={styles.input} />
            </label>

            <div>
              <button type="submit" className={styles.amazon}>Register</button>
            </div>
          </form>
          
          <hr className={styles.footer} />
          
          <div className={styles.extra}>
            <p className={styles.links}>
              <a href="#" id="first">Conditions of Use</a>
              <a href="#">Notice of Use</a>
              <a href="#">Help</a>
            </p>
            <p className={styles.links} id={styles.special}>
              © 1996-2016, Test for Spotlite
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
