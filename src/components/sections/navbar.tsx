"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github, ChevronDown, Menu, X, Linkedin, Youtube, Slack, ChevronRight } from 'lucide-react';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/aaa5ffac-3e21-48f9-9cf4-74464f78e4eb-huly-io/_next/static/media/d97ea0940c0302a26ddd7c1b56cf3346.svg"
              alt="Huly"
              width={100}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/pricing"
              className="text-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
            >
              Pricing
            </Link>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isResourcesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-popover border border-border rounded-md shadow-lg py-1 z-50"
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                >
                  <Link
                    href="/blog"
                    className="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/docs"
                    className="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Docs
                  </Link>
                  <Link
                    href="/changelog"
                    className="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Changelog
                  </Link>
                </div>
              )}
            </div>

            {/* Community Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
                onMouseEnter={() => setIsCommunityOpen(true)}
                onMouseLeave={() => setIsCommunityOpen(false)}
              >
                <span>Community</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isCommunityOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-popover border border-border rounded-md shadow-lg py-1 z-50"
                  onMouseEnter={() => setIsCommunityOpen(true)}
                  onMouseLeave={() => setIsCommunityOpen(false)}
                >
                  <a
                    href="https://github.com/hcengineering/huly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/company/huly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://youtube.com/@huly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Youtube className="w-4 h-4" />
                    <span>YouTube</span>
                  </a>
                  <a
                    href="https://join.slack.com/t/huly/shared_invite/zt-xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Slack className="w-4 h-4" />
                    <span>Slack</span>
                  </a>
                </div>
              )}
            </div>

            <Link
              href="/download"
              className="text-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
            >
              Download
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            {/* GitHub Star Button - Hidden on mobile */}
            <a
              href="https://github.com/hcengineering/huly"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center space-x-2 px-3 py-2 text-sm text-foreground hover:text-primary transition-colors duration-200 border border-border rounded-md hover:border-primary/50"
            >
              <Github className="w-4 h-4" />
              <span>Star Us</span>
            </a>

            {/* Auth Buttons - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-2">
              <button className="px-4 py-2 text-sm font-bold uppercase text-white border border-white/20 rounded-md hover:border-white/40 transition-colors">
                SIGN IN
              </button>
              <button className="px-4 py-2 text-sm font-bold uppercase text-white border border-white/20 rounded-md hover:border-white/40 transition-colors bg-primary hover:bg-primary/90">
                SIGN UP
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-sm lg:hidden z-40">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-4">
              {/* Navigation Links */}
              <Link
                href="/pricing"
                className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                Pricing
              </Link>

              {/* Resources Section */}
              <div className="py-2">
                <h3 className="text-lg font-medium text-foreground mb-3">Resources</h3>
                <div className="flex flex-col space-y-2 pl-4">
                  <Link
                    href="/blog"
                    className="text-muted-foreground hover:text-primary transition-colors py-1"
                    onClick={closeMenu}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/docs"
                    className="text-muted-foreground hover:text-primary transition-colors py-1"
                    onClick={closeMenu}
                  >
                    Docs
                  </Link>
                  <Link
                    href="/changelog"
                    className="text-muted-foreground hover:text-primary transition-colors py-1"
                    onClick={closeMenu}
                  >
                    Changelog
                  </Link>
                </div>
              </div>

              {/* Community Section */}
              <div className="py-2">
                <h3 className="text-lg font-medium text-foreground mb-3">Community</h3>
                <div className="flex flex-col space-y-2 pl-4">
                  <a
                    href="https://github.com/hcengineering/huly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors py-1"
                    onClick={closeMenu}
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/company/huly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors py-1"
                    onClick={closeMenu}
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://youtube.com/@huly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors py-1"
                    onClick={closeMenu}
                  >
                    <Youtube className="w-4 h-4" />
                    <span>YouTube</span>
                  </a>
                  <a
                    href="https://join.slack.com/t/huly/shared_invite/zt-xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors py-1"
                    onClick={closeMenu}
                  >
                    <Slack className="w-4 h-4" />
                    <span>Slack</span>
                  </a>
                </div>
              </div>

              <Link
                href="/download"
                className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                Download
              </Link>

              {/* Mobile Actions */}
              <div className="pt-6 space-y-3">
                <a
                  href="https://github.com/hcengineering/huly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full py-3 text-sm text-foreground border border-border rounded-md hover:border-primary/50 transition-colors"
                  onClick={closeMenu}
                >
                  <Github className="w-4 h-4" />
                  <span>Star Us on GitHub</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
                
                <div className="space-y-2">
                  <button 
                    className="w-full py-3 px-4 text-sm font-bold uppercase text-white border border-white/20 rounded-md hover:border-white/40 transition-colors" 
                    onClick={closeMenu}
                  >
                    SIGN IN
                  </button>
                  <button 
                    className="w-full py-3 px-4 text-sm font-bold uppercase text-white border border-white/20 rounded-md hover:border-white/40 transition-colors bg-primary hover:bg-primary/90" 
                    onClick={closeMenu}
                  >
                    SIGN UP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;