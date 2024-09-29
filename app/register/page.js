'use client';

import NavBar from '@/comps/Nav';
import { useState } from 'react';
import { RadioGroup, Radio, useRadio, VisuallyHidden, cn, Input } from "@nextui-org/react";
import { setCookie } from 'cookies-next';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';

export const CustomRadio = (props) => {
  const {
    Component,
    children,
    isSelected,
    description,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group inline-flex items-center hover:opacity-70 active:opacity-50 justify-between flex-row-reverse tap-highlight-transparent",
        "max-w-[300px] cursor-pointer border-2 border-default rounded-lg gap-4 p-4",
        "data-[selected=true]:border-primary",
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <span {...getWrapperProps()}>
        <span {...getControlProps()} />
      </span>
      <div {...getLabelWrapperProps()}>
        {children && <span {...getLabelProps()}>{children}</span>}
        {description && (
          <span className="text-small text-foreground opacity-70">{description}</span>
        )}
      </div>
    </Component>
  );
};

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
            <CustomRadio value="charity">We are a charity</CustomRadio>
            <CustomRadio value="business">We are a business</CustomRadio>
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
