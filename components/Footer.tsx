
import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  const isCSPage = location.pathname === '/cs';

  if (isCSPage) return null;

  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-display font-black text-5xl mb-6 italic text-primary">TEXPERIA 2026</h2>
            <p className="text-gray-400 max-w-sm mb-8">
              SNS College of Technology is committed to building the future of innovation through student excellence and purpose-driven culture.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon="facebook" />
              <SocialIcon icon="instagram" />
              <SocialIcon icon="twitter" />
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-xl mb-6">CONTACT US</h4>
            <ul className="space-y-4">
              <ContactLink icon="phone" text="75503 16701" />
              <ContactLink icon="phone" text="75503 16708" />
              <ContactLink icon="mail" text="texperia@snsgroups.com" />
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-xl mb-6">LOCATION</h4>
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <p className="text-sm opacity-80">
                SNS College of Technology,<br />
                SNS Kalvi Nagar, Saravanampatti,<br />
                Coimbatore - 641035,<br />
                Tamil Nadu, India.
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm italic">© 2026 SNS Institutions. All Rights Reserved.</p>
          <div className="flex items-center gap-6 text-[10px] text-zinc-500 font-bold tracking-widest uppercase">
            <a className="hover:text-primary" href="#">Terms</a>
            <a className="hover:text-primary" href="#">Privacy</a>
            <a className="text-primary hover:underline" href="https://www.snsgroups.com">WWW.SNSGROUPS.COM</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: string }) => (
  <a className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary hover:text-black transition-colors" href="#">
    <span className="material-icons text-lg">{icon === 'twitter' ? 'close' : icon}</span>
  </a>
);

const ContactLink = ({ icon, text }: { icon: string; text: string }) => (
  <li className="flex items-center gap-3">
    <span className="material-symbols-outlined text-primary text-xl">{icon}</span>
    <span className="text-sm">{text}</span>
  </li>
);

export default Footer;
