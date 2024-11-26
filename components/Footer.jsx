"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/Junaid-Shaukat' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/junaiddshaukat' },
  { name: 'Twitter', icon: Twitter, url: 'http://x.com/junaiddshaukat' },
  { name: 'Email', icon: Mail, url: 'mailto:junaidshaukat546@gmail.com' },
]

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null)

  return (
    <footer className="py-6 px-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-semibold text-white">Junaid</h2>
            <p className="text-sm text-white">Software Engineer</p>
          </div>
          <nav className="flex  space-x-4">
            <Link href="/about" className="text-sm text-white hover:text-purple-800 transition-colors duration-300">
              About
            </Link>
            <Link href="/projects" className="text-sm text-white hover:text-purple-800 transition-colors duration-300">
              Projects
            </Link>
            <Link href="/contact" className="text-sm text-white hover:text-purple-800 transition-colors duration-300">
              Contact
            </Link>
          </nav>
          <div className="flex space-x-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                onMouseEnter={() => setHoveredIcon(link.name)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <link.icon
                  size={20}
                  className="text-white group-hover:text-purple-800 transition-colors duration-300"
                />
                <span className="sr-only">{link.name}</span>
                {hoveredIcon === link.name && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#242424] text-white  text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {link.name}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-[#312f2f] text-center">
          <p className="text-xs text-white">
            © {new Date().getFullYear()} Muhammad Junaid Shaukat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

