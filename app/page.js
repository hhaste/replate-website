"use client";

import { useRouter } from "next/navigation";
import NavBar from "../comps/Nav";
import { Button } from "@nextui-org/react";


import { useState, useEffect, useRef } from 'react'
import { ChevronUpIcon, ChevronDownIcon, SendIcon } from 'lucide-react'

export default function Home() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const chatContainerRef = useRef(null)

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/get-restaurants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input: input,
          data: {} // You can add restaurant data here if needed
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch')
      }

      const data = await response.json()
      const botMessage = { role: 'bot', content: data.response }
      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Error:', error)
      const errorMessage = { role: 'bot', content: 'Sorry, I encountered an error. Please try again.' }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen px-10 py-5 relative">
      <NavBar />
      <section className="flex-grow flex flex-col justify-center  relative">
        <div className="flex gap-3 items-center">
          <h1 className="text-7xl text-gray-900">Less waste. <span className="font-bold">More giving.</span></h1>
        </div>
        <p className="text-xl mt-10 opacity-90 max-w-[38%] leading-loose">We help connect local businesses with local charities, providing a direct pipeline for surplus food exchange.</p>

        <Button
          className="text-white mt-24 w-[20%] bg-black"
          size="lg"
          radius="full"
          color="black"
          endContent={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="MediumSeaGreen" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>}
          onClick={() => {
            router.push("/register")
          }}
        >
          Consult with us
        </Button>

        <img src="illustration.svg" className="absolute bottom-[-20px] right-0 max-h-[75%]" />
      </section>

      <div className="fixed bottom-4 right-4 z-50">
        {isOpen ? (
          <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 transition-all duration-300 ease-in-out transform translate-y-0">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">Replate AI Assistant</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                <ChevronDownIcon className="w-6 h-6" />
              </button>
            </div>
            <div ref={chatContainerRef} className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-3/4 p-2 rounded-lg ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-200 text-gray-800 p-2 rounded-lg">
                    Thinking...
                  </div>
                </div>
              )}
            </div>
            <form onSubmit={handleSubmit} className="border-t p-4 flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <SendIcon className="w-5 h-5" />
              </button>
            </form>
          </div>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            <ChevronUpIcon className="w-6 h-6" /> Ask Assistant
          </button>
        )}
      </div>
    </div>
  )
}
  
