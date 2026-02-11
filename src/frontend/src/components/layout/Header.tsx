import { Link, useRouterState } from '@tanstack/react-router';
import { Phone, Mail, MessageCircle, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { getPhoneLink, getEmailLink, getWhatsAppLink } from '@/config/businessContact';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => currentPath === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand Name */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/assets/generated/krishna-traders-logo.dim_512x512.png" 
              alt="Krishna Traders Logo" 
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl sm:text-2xl font-bold text-primary">Krishna Traders</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.to) ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <a href={getPhoneLink()} className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Call</span>
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href={getEmailLink()} className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </a>
            </Button>
            <Button size="sm" asChild>
              <a 
                href={getWhatsAppLink()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/40">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-colors hover:text-primary px-2 py-1 ${
                    isActive(link.to) ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-border/40 flex flex-col space-y-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={getPhoneLink()} className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>Call Us</span>
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={getEmailLink()} className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>Email Us</span>
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a 
                    href={getWhatsAppLink()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
