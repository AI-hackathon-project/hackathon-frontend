import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

function Contacts() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState('idle');
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [newsletterStatus, setNewsletterStatus] = useState('idle');

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        setTimeout(() => {
            console.log('Form submitted:', formData);
            setFormStatus('success');

            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                setFormStatus('idle');
            }, 3000);
        }, 1500);
    };

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        if (!newsletterEmail) return;

        setNewsletterStatus('submitting');

        setTimeout(() => {
            console.log('Newsletter subscription:', newsletterEmail);
            setNewsletterStatus('success');

            setTimeout(() => {
                setNewsletterEmail('');
                setNewsletterStatus('idle');
            }, 3000);
        }, 1500);
    };

    const ContactCard = ({ icon, title, content, contentLink, linkType }) => {
        const getLink = () => {
            switch (linkType) {
                case 'email': return `mailto:${contentLink || content}`;
                case 'tel': return `tel:${contentLink || content}`;
                case 'map': return contentLink;
                default: return contentLink;
            }
        };

        return (
            <div className="bg-white rounded-xl shadow-md p-6 flex items-start transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="mr-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-[#7e1406]">
                    {icon}
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                    {contentLink ? (
                        <a
                            href={getLink()}
                            className="text-[#E15B42] hover:text-[#7e1406] transition-colors"
                            target={linkType === 'map' ? '_blank' : undefined}
                            rel={linkType === 'map' ? 'noopener noreferrer' : undefined}
                        >
                            {content}
                        </a>
                    ) : (
                        <p className="text-gray-600">{content}</p>
                    )}
                </div>
            </div>
        );
    };

    return (
        <section className="min-h-screen relative" id="Contact">
            <div className="py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Enhanced background design with better responsiveness */}
            <div className="absolute inset-0 z-0">
                {/* Main diagonal gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F2CEC2]/20 to-transparent"></div>

                {/* Floating shapes with responsive sizing */}
                <div className="absolute -top-[10%] -left-[10%] w-[80%] sm:w-[60%] lg:w-[50%] aspect-square bg-[#F2CEC2]/30 rounded-[30%] blur-3xl transform rotate-12"></div>
                <div className="absolute top-[20%] right-[5%] w-[40%] sm:w-[30%] aspect-square bg-[#FCC988]/20 rounded-full blur-2xl z-12"></div>
                <div className="absolute bottom-[10%] left-[15%] w-[35%] sm:w-[25%] aspect-square bg-[#E69695]/25 rounded-full blur-2xl z-12"></div>
                <div className="absolute top-[40%] right-[20%] w-[25%] aspect-square bg-[#C3C198]/20 rounded-[40%] blur-xl transform -rotate-15 z-12"></div>
                <div className="absolute bottom-[30%] right-[10%] w-[45%] sm:w-[35%] aspect-square bg-[#FDB082]/15 rounded-[60%] blur-2xl transform rotate-45 z-12"></div>
            </div>

                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-5 
                         bg-clip-text text-transparent bg-gradient-to-r from-black to-[#E15B42]
                         animate-fade-in">Get in Touch</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We'd love to hear from you. Please fill out the form below or use our contact information.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-xl shadow-md p-8 transform transition-all duration-300 hover:shadow-lg">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>

                                <form onSubmit={handleFormSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleFormChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7e1406] focus:border-[#E15B42] transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleFormChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7e1406] focus:border-[#E15B42] transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-1">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleFormChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7e1406] focus:border-[#E15B42] transition-all"
                                            placeholder="How can we help you?"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleFormChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7e1406] focus:border-[#E15B42] transition-all"
                                            placeholder="Your message here..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formStatus === 'submitting'}
                                        className={`flex items-center justify-center w-full md:w-auto px-6 py-3 text-white font-medium rounded-md transition-all duration-300 ${formStatus === 'submitting'
                                            ? 'bg-[#E15B42] cursor-not-allowed'
                                            : formStatus === 'success'
                                                ? 'bg-green-500 hover:bg-green-600'
                                                : 'bg-gradient-to-r from-[#7e1406] to-[#E15B42] hover:bg-[#7e1406]/70'
                                            }`}
                                    >
                                        {formStatus === 'submitting' ? (
                                            <>
                                                <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                                                Sending...
                                            </>
                                        ) : formStatus === 'success' ? (
                                            'Message Sent!'
                                        ) : (
                                            <>
                                                <Send size={18} className="mr-2" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Newsletter Card */}
                        <div className="lg:col-span-1">
                            <div className="bg-gradient-to-br from-[#7e1406] to-[#E15B42] rounded-xl shadow-md p-6 text-white flex flex-col transform transition-all duration-300 hover:shadow-lg">
                                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm">
                                    <Mail size={24} className="text-white" />
                                </div>

                                <h3 className="text-2xl font-semibold mb-2">Stay Updated</h3>
                                <p className="mb-4 text-blue-100">
                                    Subscribe to our newsletter to receive the latest updates, news, and special offers.
                                </p>

                                <form onSubmit={handleNewsletterSubmit} className="mt-3">
                                    <div className="mb-4">
                                        <label htmlFor="newsletter-email" className="block text-sm font-medium text-blue-100 mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="newsletter-email"
                                            value={newsletterEmail}
                                            onChange={(e) => setNewsletterEmail(e.target.value)}
                                            className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-blue-300/30 rounded-md text-white placeholder-[#4d1f17] focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={newsletterStatus === 'submitting'}
                                        className={`w-full px-6 py-3 font-medium rounded-md transition-all duration-300 ${newsletterStatus === 'submitting'
                                            ? 'bg-white/50 cursor-not-allowed'
                                            : newsletterStatus === 'success'
                                                ? 'bg-green-500 hover:bg-green-600'
                                                : 'bg-white text-[#E15B42] hover:bg-blue-50'
                                            }`}
                                    >
                                        {newsletterStatus === 'submitting' ? (
                                            <span className="flex items-center justify-center">
                                                <div className="animate-spin mr-2 h-4 w-4 border-2 border-[#E15B42] border-t-transparent rounded-full"></div>
                                                Subscribing...
                                            </span>
                                        ) : newsletterStatus === 'success' ? (
                                            <span className="text-white">Subscribed!</span>
                                        ) : (
                                            'Subscribe Now'
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <ContactCard
                            icon={<Mail size={24} />}
                            title="Email Us"
                            content="contact@company.com"
                            linkType="email"
                        />
                        <ContactCard
                            icon={<MapPin size={24} />}
                            title="Visit Us"
                            content="123 Business Avenue, Suite 100, San Francisco, CA 94107"
                            contentLink="https://maps.google.com?q=San+Francisco+CA"
                            linkType="map"
                        />
                        <ContactCard
                            icon={<Phone size={24} />}
                            title="Call Us"
                            content="(555) 123-4567"
                            linkType="tel"
                        />
                    </div>

                    {/* Map */}
                    <div className="mt-12">
                        <div className=" overflow-hidden h-[460px] transform transition-all duration-300 hover:shadow-lg">
                            <div className="relative w-full h-full">
                                <img
                                    src=".../../src/assets/images/ghana.webp"
                                    alt="Location Map"
                                    className="w-full h-full object-contain"
                                />

                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <div className="relative">
                                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                                            <div className="w-4 h-4 bg-red-300 rounded-full"></div>
                                        </div>
                                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-red-500"></div>
                                    </div>
                                </div>

                                {/* <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow">
                                    <h4 className="font-semibold text-gray-800">Our Headquarters</h4>
                                    <p className="text-sm text-gray-600">123 Business Ave, San Francisco</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacts;