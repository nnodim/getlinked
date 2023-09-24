import React from 'react';
import Nav from '../components/Nav';
import useImages from '../hooks/useImages';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://backend.getlinked.ai/';

const Register = () => {
  const {
    image,
    purpleLens4,
    purpleLens5,
    star,
    starpu,
    congrats,
    wink,
    move,
  } = useImages();

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectTopic, setProjectTopic] = useState('');
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [agreed, setAgreed] = useState(false);

  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
  ];

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(`${BASE_URL}hackathon/categories-list`);
        setCategories(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      email,
      phone_number: phone,
      team_name: teamName,
      group_size: groupSize,
      project_topic: projectTopic,
      category,
      privacy_poclicy_accepted: agreed,
    };
    console.log(data);
    try {
      const res = await axios.post(`${BASE_URL}hackathon/registration`, data);
      console.log(res);
      setIsLoading(false);
      setTeamName('');
      setEmail('');
      setPhone('');
      setProjectTopic('');
      setCategory('');
      setGroupSize('');
      setAgreed(false);
      setShowModal(true);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  return (
    <>
      <Nav />
      <main className='relative font-mono'>
        <img
          src={purpleLens4}
          alt=''
          className='w-[50rem] -top-20 lg:top-0 left-0 absolute opacity-40'
        />
        <img
          src={purpleLens5}
          alt=''
          className='absolute hidden lg:block w-[40rem] bottom-0 opacity-50 right-0'
        />

        <div className='flex flex-col lg:flex-row items-center justify-center py-[3rem]'>
          <div className='relative w-[12rem] md:w-[30rem] lg:w-auto'>
            <h2 className='font-clash text-[1rem] md:text-[2rem] leading-normal font-semibold text-color-3 mb-10 lg:hidden'>
              Register
            </h2>
            <img
              src={image}
              alt=''
            />
            <img
              src={starpu}
              alt=''
              className='hidden lg:block absolute w-5 top-20 left-[5rem]'
            />
            <img
              src={starpu}
              alt=''
              className='hidden lg:block absolute w-5 bottom-[10rem] right-20'
            />
            <img
              src={star}
              alt=''
              className='absolute w-5 bottom-0 left-20 hidden lg:block'
            />
          </div>
          <div className='relative lg:rounded lg:shadow-card w-full md:w-[30rem] lg:w-[46.25rem] lg:p-16 p-9 lg:bg-background-color-1'>
            <img
              src={star}
              alt=''
              className='absolute w-5 top-0 lg:top-10 right-40'
            />
            <h2 className='font-clash text-[2rem] leading-normal font-semibold text-color-3 mb-10 hidden lg:block'>
              Register
            </h2>
            <p className='flex items-end text-white font-mono text-sm py-4'>
              Be part of this movement!{' '}
              <img
                src={move}
                alt=''
                className='ml-2'
              />
            </p>
            <h2 className='font-mono text-2xl text-white pb-4 lg:pb-8'>
              CREATE YOUR ACCOUNT
            </h2>
            <p className='text-white font-mono text-sm lg:hidden py-4'>
              Email us below to any question related to our event
            </p>
            <form
              onSubmit={handleSubmit}
              className=''
            >
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8'>
                <label
                  htmlFor='teamName'
                  className='text-white font-mono text-sm'
                >
                  Team's Name
                  <input
                    required
                    type='text'
                    name='teamName'
                    id='teamName'
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder='Enter the name of your group'
                    className='bg-background-color-1 border text-white shadow-card rounded-md px-5 w-full py-4 placeholder:text-white placeholder:opacity-25 font-mono my-3'
                  />
                </label>

                <label
                  htmlFor='firstName'
                  className='text-white font-mono text-sm'
                >
                  Phone
                  <input
                    required
                    type='text'
                    name='phone'
                    id='phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='Enter your phone number'
                    className='bg-background-color-1 border text-white shadow-card rounded-md px-5 w-full py-4 placeholder:text-white placeholder:opacity-25 font-mono my-3'
                  />
                </label>

                <label
                  htmlFor='email'
                  className='text-white font-mono text-sm'
                >
                  Email
                  <input
                    required
                    type='email'
                    name='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email address'
                    className='bg-background-color-1 border text-white shadow-card rounded-md px-5 w-full py-4 placeholder:text-white placeholder:opacity-25 font-mono my-3'
                  />
                </label>
                <label
                  htmlFor='projectTopic'
                  className='text-white font-mono text-sm'
                >
                  Project Topic
                  <input
                    required
                    type='text'
                    name='projectTopic'
                    id='projectTopic'
                    value={projectTopic}
                    onChange={(e) => setProjectTopic(e.target.value)}
                    placeholder='Enter your email address'
                    className='bg-background-color-1 border text-white shadow-card rounded-md px-5 w-full py-4 placeholder:text-white placeholder:opacity-25 font-mono my-3'
                  />
                </label>
                <label
                  htmlFor='category'
                  className='text-white font-mono text-sm'
                >
                  Category
                  <div className='relative'>
                    <select
                      required
                      className='appearance-none bg-background-color-1 border rounded-md px-5 w-full py-4  font-mono my-3 shadow-card'
                      name='category'
                      id='category'
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option
                        className='text-black'
                        value=''
                      >
                        Select your Category
                      </option>
                      {categories.map((category) => (
                        <option
                          className='text-black'
                          key={category.id}
                          value={category.id}
                        >
                          {category.name}
                        </option>
                      ))}
                    </select>
                    <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-4'>
                      <i className='text-xs fa-solid fa-chevron-down'></i>
                    </div>
                  </div>
                </label>
                <label
                  htmlFor='groupSize'
                  className='text-white font-mono text-sm'
                >
                  Group Size
                  <div className='relative'>
                    <select
                      required
                      className='appearance-none bg-background-color-1 border text-white rounded-md px-5 w-full py-4  font-mono my-3'
                      name='groupSize'
                      id='groupSize'
                      onChange={(e) => setGroupSize(e.target.value)}
                    >
                      <option
                        className='text-black'
                        value=''
                      >
                        Select
                      </option>
                      {options.map((option) => (
                        <option
                          className='text-black'
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-4'>
                      <i className='text-xs fa-solid fa-chevron-down'></i>
                    </div>
                  </div>
                </label>
              </div>
              <p className='text-[#FF26B9] font-mono text-sm italic py-4'>
                Please review your registration details before submitting
              </p>

              <label
                htmlFor='agree'
                className='text-white font-mono text-sm'
              >
                <input
                  required
                  type='checkbox'
                  name='agree'
                  id='agree'
                  className='mr-2'
                  onChange={(e) => setAgreed(e.target.checked)}
                />
                I agreed with the event terms and conditions and privacy policy
              </label>
              <button
                type='submit'
                className='inline-block  rounded mt-4 w-full px-6 py-4 text-base font-medium uppercase leading-normal text-white 
      bg-gradient-1 '
              >
                {isLoading ? 'Loading...' : 'Register Now'}
              </button>
            </form>
          </div>
        </div>
      </main>

      <div
        className={
          showModal
            ? 'fixed z-50 top-0 left-0 bg-background-color-2 w-full h-full flex justify-center px-8 lg:px-0 items-center'
            : 'hidden'
        }
      >
        <div className='relative w-full lg:w-[43.6875rem] rounded-md bg-background-color-1 border border-color-3 px-[3rem] lg:px-[3.5rem] py-[2rem] lg:py-[4rem] text-center'>
          <img
            src={starpu}
            alt=''
            className='absolute w-5 -top-4 -right-8'
          />
          <img
            src={starpu}
            alt=''
            className='absolute w-5 bottom-4 right-10'
          />
          <img
            src={star}
            alt=''
            className='absolute w-5 top-[15rem] left-[5rem]'
          />
          <img
            src={congrats}
            alt=''
            className='block mx-auto'
          />
          <h2 className='font-mono text[1rem]  lg:text-[2rem] text-white font-semibold py-4'>
            Congratulations <br />
            you have successfully Registered!
          </h2>
          <p className='font-mono text-[0.75rem] text-white leading-normal pb-4'>
            Yes, it was easy and you did it! <br />
            check your mail box for next step{' '}
            <img
              src={wink}
              alt=''
              className='inline-block'
            />
          </p>
          <Link to='/'>
            <button className='inline-block rounded mt-4 w-full px-6 py-4 text-base font-medium uppercase leading-normal text-white bg-gradient-1'>
              back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
