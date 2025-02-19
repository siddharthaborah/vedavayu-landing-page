"use client"

import Link from "next/link"
import { Leaf, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex flex-col items-start">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-teal-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 text-transparent bg-clip-text">
                Vedavāyu
              </span>
            </div>
            <span className="text-sm text-gray-600 mt-1">Healing Beyond Medicine</span>
          </Link>
          <div className="flex items-center">
            <nav className="hidden md:block mr-4">
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-teal-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-600 hover:text-teal-600 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-600 hover:text-teal-600 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-teal-600 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-600 hover:text-teal-600 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full hidden md:block">Book Appointment</Button>
            <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-teal-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full">Book Appointment</Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

