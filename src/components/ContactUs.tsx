import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

interface Contact7Props {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
  chatLabel?: string;
  chatDescription?: string;
  chatLink?: string;
}

const ContactUs = ({
  title = "Get in Touch",
  description = "Contact our team for audio equipment rentals, technical support, or booking information.",
  emailLabel = "Email",
  emailDescription = "We respond to rental inquiries within 4 hours during business hours.",
  email = "rentals@soundgear.com",
  officeLabel = "Warehouse & Showroom",
  officeDescription = "Visit our showroom to test equipment before renting.",
  officeAddress = "123 Sound Avenue, Music District, NY 10001",
  phoneLabel = "24/7 Support Line",
  phoneDescription = "Technical support available for all rented equipment.",
  phone = "+1 (555) 123-4567",
  chatLabel = "Quote Request",
  chatDescription = "Get a quick quote for your event or production needs.",
  chatLink = "Request Quote",
}: Contact7Props) => {
  return (
    <section className="bg-background py-32 px-4 md:px-8 lg:px-16">
      <div className="container">
        <div className="mb-14">
          <h1 className="mb-3 mt-2 text-balance text-3xl font-semibold md:text-4xl">
            {title}
          </h1>
          <p className="text-muted-foreground max-w-xl text-lg">
            {description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-muted rounded-lg p-6">
            <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
              <Mail className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{emailLabel}</p>
            <p className="text-muted-foreground mb-3">{emailDescription}</p>
            <a
              href={`mailto:${email}`}
              className="font-semibold hover:underline"
            >
              {email}
            </a>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
              <MapPin className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{officeLabel}</p>
            <p className="text-muted-foreground mb-3">{officeDescription}</p>
            <a href="#" className="font-semibold hover:underline">
              {officeAddress}
            </a>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
              <Phone className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{phoneLabel}</p>
            <p className="text-muted-foreground mb-3">{phoneDescription}</p>
            <a href={`tel:${phone}`} className="font-semibold hover:underline">
              {phone}
            </a>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <span className="bg-accent mb-3 flex size-12 flex-col items-center justify-center rounded-full">
              <MessageCircle className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{chatLabel}</p>
            <p className="text-muted-foreground mb-3">{chatDescription}</p>
            <a href="#" className="font-semibold hover:underline">
              {chatLink}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContactUs };
