import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};



type Props = {}

export default function ContactMe({ }: Props) {

  const {
    register,
    handleSubmit,
    // watch, 
    // formState: { errors } 
  } = useForm<Inputs>();


  const onSubmit: SubmitHandler<Inputs> = formData => { // this ctrls what happens to form data once it's submitted
      window.location.href = `mailto:name@email.com?subject=${formData.subject}&body=Hello, I'm ${formData.name}. ${formData.message}. Contact me at ${formData.email}`;
  };  


  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Etiam et massa sed erat volutpat elementum. {" "}
          <span className='underline decoration-[#ffea00]/50'>{"Let's Talk"}</span>
        </h4>


        <div className='space-y-10'>

          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#ffea00] h-7 w-7 hover:animate-ping' />
            <p className='text-2xl'>+123456789</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#ffea00] h-7 w-7 hover:animate-ping' />
            <p className='text-2xl'>name@email.com</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#ffea00] h-7 w-7 hover:animate-ping' />
            <p className='text-2xl'>123 Address Rd</p>
          </div>
        </div>


        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 w-fit mx-auto'
        >
          <div className='flex space-x-2'>
            <input
              {...register('name')}
              placeholder="Name"
              className='contactInput'
              type="text"
              required
            />

            <input
              {...register('email')}
              placeholder="Email"
              className='contactInput'
              type="email"
              required
            />

          </div>

          <input
            {...register('subject')}
            placeholder="Subject"
            className='contactInput'
            type='text'
            required
          />

          <textarea
            {...register('message')}
            placeholder="Message"
            className='contactInput'
            required
          />

          <button
            type='submit'
            className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg hover:bg-slate-600 hover:text-[#F7AB0A] hover:animate-pulse'>
            Submit
          </button>



        </form>

      </div>
    </div>
  )
}