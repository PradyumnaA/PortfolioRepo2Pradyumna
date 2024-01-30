import React, { useState, useRef, Suspense } from 'react';
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber';
import { Fox } from '../models/Fox';
import { Loader } from '@react-three/drei';
const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = () => {
    // Implement your handleFocus logic here
  };

  const handleBlur = () => {
    // Implement your handleBlur logic here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic, like sending data to server
   setIsLoading(true);
   emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name:form.name,
        to_name:"Pradyumna",
        from_email:form.email,
        to_email:'pradyumkubeara@gmail.com',
        message:form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY

   ).then(()=>{
    setIsLoading(false);
    // TODO Show success message
    // TODO Hide an alert
    setForm({name:'',email:'',message:''})
   }).catch((error)=>{
    setIsLoading(false);
    console.log(error)
    // SHOW ERROR MESSAGE
   })
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in touch</h1>
        <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
          <label className='text-black-500 font-semibold'>Name</label>
          <input
            type="text"
            name="name"
            className='input'
            placeholder='John'
            value={form.name}
            required
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label className='text-black-500 font-semibold'>Email</label>
          <input
            type="text"
            name="email"
            className='input'
            placeholder='email@example.com'
            value={form.email}
            required
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label className='text-black-500 font-semibold'>Your Message</label>
          <textarea
            name="message"
            rows={4}
            placeholder='Your message here'
            value={form.message}
            required
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <button
            type="submit"
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
        camera={{
          position:[0,0,5],
          fov:75,
          near:0.1,
          far:1000
        }}
        >
          <directionalLight intensity={2.5} position={[0,0,1]}/>
          <Suspense fallback={<Loader/>}>
            <Fox
            position={[0.5,0.5,0.5]}
            rotation={[12.6,-0.6,0]}
            scale={[0.5,0.5,0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;