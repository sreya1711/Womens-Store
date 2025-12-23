import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, InstagramIcon, MailIcon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Shop',
      links: [
        { name: 'New Arrivals', href: '/new-arrivals' },
        { name: 'Men', href: '/category/men' },
        { name: 'Women', href: '/category/women' },
        { name: 'Accessories', href: '/category/accessories' },
        { name: 'Sale', href: '/sale' },
      ],
    },
    {
      title: 'Customer Service',
      links: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'FAQs', href: '/faqs' },
        { name: 'Shipping & Returns', href: '/shipping-returns' },
        { name: 'Size Guide', href: '/size-guide' },
        { name: 'Track Order', href: '/track-order' },
      ],
    },
    {
      title: 'About Us',
      links: [
        { name: 'Our Story', href: '/about' },
        { name: 'Sustainability', href: '/sustainability' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blog', href: '/blog' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <FacebookIcon className="h-5 w-5" />, href: '#' },
    { name: 'Twitter', icon: <TwitterIcon className="h-5 w-5" />, href: '#' },
    { name: 'Instagram', icon: <InstagramIcon className="h-5 w-5" />, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">FashionHub</h3>
            <p className="text-gray-400">
              Discover the latest trends in fashion and style with our curated collection of clothing and accessories.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="flex">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MailIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-md text-sm font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} FashionHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-sm text-gray-400 hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
