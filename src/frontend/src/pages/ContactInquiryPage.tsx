import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import { businessContact, getPhoneLink, getPhone2Link, getEmailLink, getWhatsAppLink } from '@/config/businessContact';
import InquiryForm from '@/components/inquiry/InquiryForm';

export default function ContactInquiryPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-background via-muted/30 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with Krishna Traders for wholesale pricing, product inquiries, or any questions about our GI materials and hardware supplies.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Get In Touch</CardTitle>
                  <CardDescription>
                    Reach out to us through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a 
                    href={getPhoneLink()} 
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-sm text-muted-foreground">{businessContact.phone}</div>
                    </div>
                  </a>
                  
                  <a 
                    href={getPhone2Link()} 
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Phone (Alternate)</div>
                      <div className="text-sm text-muted-foreground">{businessContact.phone2}</div>
                    </div>
                  </a>
                  
                  <a 
                    href={getEmailLink()} 
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground break-all">{businessContact.email}</div>
                    </div>
                  </a>
                  
                  <a 
                    href={getWhatsAppLink()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">WhatsApp</div>
                      <div className="text-sm text-muted-foreground">Chat with us instantly</div>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm text-muted-foreground">{businessContact.hours}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm text-muted-foreground">{businessContact.address}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us an Inquiry</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <InquiryForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
