'use client';

import NavBar from '@/comps/Nav';
import Radio from '@/comps/Radio';
import { RadioGroup, Radio, Input } from "@nextui-org/react";
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen px-10 py-5">
      <NavBar />
      <section className="flex-grow flex gap-10 flex-col items-center justify-center text-center max-w-[50%] m-auto">
        <div className='flex flex-col gap-2'>
          <h2 className="text-2xl font-semibold text-center text-black">
            We need a little more information first
          </h2>
          <p>Please fill out the following and one of our representatives will get back to you.</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            console.log(data);
            setCookie("company", data);
            router.push("/dashboard");
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
        >
          <Input label="Your name" name="name" required />
          <Input label="Organization name" name="organization" required />

          <Input
            label="Organization address"
            name="address"
            className="md:col-span-2"
            required
          />

          <RadioGroup
            name="organizationType"
            orientation="horizontal"
            className="md:col-span-2"
            required
          >
            <Radio value="charity">We are a charity</Radio>
            <Radio value="business">We are a business</Radio>
          </RadioGroup>

          <button
            type="submit"
            className="md:col-span-2 mt-10 bg-success-500 hover:bg-success-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>

      </section>
    </div>
  );
}
