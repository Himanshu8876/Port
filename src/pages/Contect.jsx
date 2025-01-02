import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import { Model } from "../models/Fox";
import { Suspense } from 'react';
import  Loader  from '../components/Loader'
import Alert from '../components/Alert';
import useAlert from '../hooks/useAlert';
function Contect() {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();
  
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");
    const serviceId = 'service_krxpptt';
    const templateId = 'template_c7i5s75';
    const publicKey = 'yJqEXg-BFl1iRvVK2';

    const templateParams = {
      from_name: form.name,
      to_name: "Himanshu",
      message: form.message,
      from_email: form.email,
      to_email: "garghimanshu778@gmail.com"
    }

    emailjs
      .send(
        "service_krxpptt","template_c7i5s75",{
          from_name: form.name,
          to_name: "Himanshu",
          message: form.message,
          from_email: form.email,
          to_email: "garghimanshu778@gmail.com"
        },
        "yJqEXg-BFl1iRvVK2"
      ).then(() => {
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
      showAlert({show: true, text: "Thank you for contacting me!", type: "success" });
    }).catch((error) => {
      setLoading(false);
      console.error(error); // Log detailed error
      setCurrentAnimation("idle");
      showAlert({show: true, text: "I didn't get your message", type: "danger" });
    });
  }
  return (
    <section className='relative flex lg:flex-row flex-col max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)] '>
      {alert.show && <Alert alert={alert} />}
        <div className='flex-1 min-w-[50%] flex flex-col'>
          <h1 className='sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins'>Get in touch</h1>
          <form onSubmit={handleSubmit} className='w-full flex flex-col gap-7 mt-14'>
            <label className='text-black font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            </label>
            <label className='text-black font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card;'
              placeholder='John@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            </label>
            <label className='text-black font-semibold'>
            Message
            <textarea
              rows={4}
              name='message'
              className='block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 mt-2.5 font-normal shadow-card'
              placeholder='Let me Know how can i help you'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            </label>
            <button
            type='submit'
            disabled={loading}
            className='text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
          </form>
          </div>
          <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Model
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div> 
    </section>
  )
}

export default Contect
