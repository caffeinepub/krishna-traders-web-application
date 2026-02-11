import { Link } from '@tanstack/react-router';
import { Phone, Mail, MessageCircle, Heart } from 'lucide-react';
import { businessContact, getPhoneLink, getPhone2Link, getEmailLink, getWhatsAppLink } from '@/config/businessContact';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(window.location.hostname || 'krishna-traders');

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/assets/generated/krishna-traders-logo.dim_512x512.png" 
                alt="Krishna Traders Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-lg font-bold">Krishna Traders</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted wholesale supplier of GI plumbing materials, GI clamps, GI brackets, and hardware materials for construction and industrial needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Products & Categories
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact & Inquiry
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <div className="flex flex-col space-y-3">
              <a 
                href={getPhoneLink()} 
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{businessContact.phone}</span>
              </a>
              <a 
                href={getPhone2Link()} 
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{businessContact.phone2}</span>
              </a>
              <a 
                href={getEmailLink()} 
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{businessContact.email}</span>
              </a>
              <a 
                href={getWhatsAppLink()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Krishna Traders. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center space-x-1">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>using</span>
            <a 
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              caffeine.ai
            </a>
          </p>
          <Link 
            to="/admin" 
            className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors"
          >
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
