import { X, Linkedin, Instagram, Facebook } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 border-t border-neutral-800">
      <div className="container mx-auto px-6 py-12">
        {/* Logo + description */}
        <div class="space-y-4 mb-8">
          <h2 className="text-xl font-semibold tracking-tight text-white">MeetupHub</h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Discover local events, connect with communities, and host your own meetups with a
            seamless and modern platform.
          </p>
        </div>
        {/* Top grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-12">
          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Explore
            </h3>
            <ul className="space-y-3">
              <li>
                <a className="hover:text-white transition" href="#">
                  Browse Meetups
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Categories
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Nearby Events
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  All Cities
                </a>
              </li>
            </ul>
          </div>

          {/* For Users */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              For Users
            </h3>
            <ul className="space-y-3">
              <li>
                <a className="hover:text-white transition" href="#">
                  Become a Host
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Attend Meetups
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Profile Settings
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a className="hover:text-white transition" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#">
                  Legal
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-neutral-500">
          {/* <!-- Copyright --> */}
          <p>© 2025 MeetupSphere. All rights reserved.</p>

          {/* <!-- Socials --> */}
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition">
              <X />
            </a>
            <a href="#" className="hover:text-white transition">
              <Linkedin />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram />
            </a>
            <a href="#" className="hover:text-white transition">
              <Facebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
