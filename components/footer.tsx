import Link from "next/link"
import { Leaf, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <Leaf className="h-6 w-6 mr-2 text-teal-400" />
            <span className="text-xl font-bold">Vedavāyu</span>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <li>
                <Link href="#services" className="hover:text-teal-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-teal-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="text-teal-400 border-teal-400 hover:bg-teal-400 hover:text-white"
            >
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="text-teal-400 border-teal-400 hover:bg-teal-400 hover:text-white"
            >
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Button>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Vedavāyu. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

