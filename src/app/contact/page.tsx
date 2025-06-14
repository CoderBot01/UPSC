
import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Send, MapPin, Phone, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Contact Us"
        description="We'd love to hear from you! Reach out with any questions, feedback, or inquiries."
      />

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Send className="h-6 w-6 text-primary" />
              Get in Touch
            </CardTitle>
            <CardDescription>
              Fill out the form below or use the contact details on the right.
              (Note: This is a placeholder form. For actual inquiries, please use the provided email.)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Placeholder for a form - Not functional */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Full Name</label>
              <input type="text" id="name" placeholder="Your Name" className="w-full p-2 border rounded-md bg-input text-sm" disabled />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email Address</label>
              <input type="email" id="email" placeholder="your.email@example.com" className="w-full p-2 border rounded-md bg-input text-sm" disabled />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea id="message" rows={4} placeholder="Your message..." className="w-full p-2 border rounded-md bg-input text-sm" disabled />
            </div>
            <Button disabled className="w-full">
              <Send className="mr-2 h-4 w-4" /> Send Message (Disabled)
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              This form is for demonstration purposes only.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-6 w-6 text-primary" />
              Contact Information
            </CardTitle>
            <CardDescription>
              You can also reach us through the following channels:
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:info@upscaiguide.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@upscaiguide.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Phone (Support Hours: 9 AM - 5 PM IST)</h3>
                <p className="text-muted-foreground">+91 123 456 7890 (Placeholder)</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Office Address</h3>
                <p className="text-muted-foreground">
                  123 AI Street, Knowledge Park, <br />
                  New Delhi, India - 110001 (Placeholder)
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild>
                  <Link href="#" aria-label="Instagram" target="_blank">
                    <Instagram className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="#" aria-label="LinkedIn" target="_blank">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="#" aria-label="Twitter" target="_blank">
                    <Twitter className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
