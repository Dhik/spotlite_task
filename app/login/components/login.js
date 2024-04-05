// AmazonSignIn.js
'use client';
// AmazonSignIn.js
import { useState } from 'react';// Import useRouter for navigation in Next.js
import styles from '../login.module.css';
// import { useRouter } from 'next/navigation'

export default function AmazonSignIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
 // Initialize useRouter hook
    // const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/auth/login`, {
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
        const profileResponse = await fetch(process.env.NEXT_PUBLIC_API_URL + `/user/${data.user.id}`);
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className={styles.body}>
        <div className={styles.signInBorder}>
          <p className={styles.signInTxt}>
            Sign in
          </p>

          <form onSubmit={handleSubmit}>
            <label>
              <strong>Username</strong>
              <br />
              <input type="email" name="username" placeholder="Email" value={formData.username} onChange={handleChange} className={styles.input} />
            </label>

            <br />

            <label>
              <strong>Password</strong>
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className={styles.input} />
            </label>

            <div>
              <button type="submit" className={styles.amazon}>Sign in</button>
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
