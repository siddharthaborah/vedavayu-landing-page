"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/vedavayu-logo.png" alt="Vedavāyu Logo" width={30} height={30} className="rounded-full" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 text-transparent bg-clip-text">
                Vedavāyu
              </span>
              <span className="text-sm text-gray-600">Healing Beyond Medicine</span>
            </div>
          </Link>
          <nav className="hidden md:block">
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
          <Button className="bg-teal-600 hover:bg-teal-700 text-white hidden md:block">Book Appointment</Button>
          <Button
            variant="ghost"
            className="md:hidden fixed top-4 right-4 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden fixed inset-0 bg-white z-40 flex items-center justify-center">
          <ul className="flex flex-col space-y-4 text-center">
            <li>
              <Link
                href="/"
                className="text-gray-600 hover:text-teal-600 transition-colors text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="text-gray-600 hover:text-teal-600 transition-colors text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#pricing"
                className="text-gray-600 hover:text-teal-600 transition-colors text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-600 hover:text-teal-600 transition-colors text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-teal-600 transition-colors text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white mt-4" onClick={() => setIsMenuOpen(false)}>
                Book Appointment
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
