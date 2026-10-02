import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Copy, CheckCircle2, Globe, ExternalLink, MessageCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from '../components/Icons';
import { profileData } from '../data/portfolioData';
import { GithubGraph } from '../components/GithubGraph';

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);

  const rawWhatsApp = profileData.socialLinks.whatsapp || '+62 821-2449-7842';
  const cleanWhatsAppNumber = rawWhatsApp.replace(/[^0-9]/g, '').replace(/^0/, '62');
  const baseWhatsAppUrl = profileData.socialLinks.whatsappUrl || `https://wa.me/${cleanWhatsAppNumber}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.socialLinks.email);
    setCopiedEmail(true);
    onShowToast('Email address copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleCopyWhatsApp = () => {
    navigator.clipboard.writeText(rawWhatsApp);
    setCopiedWhatsApp(true);
    onShowToast('WhatsApp number copied to clipboard!');
    setTimeout(() => setCopiedWhatsApp(false), 3000);
  };

  const validateForm = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      onShowToast('Please fill out all contact fields before sending.');
      return false;
    }
    return true;
  };

  // 1. Compose in Gmail Web directly in browser (works for everyone without desktop email client)
  const handleSendGmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profileData.socialLinks.email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    onShowToast('Opening Gmail compose tab in browser...');
  };

  // 2. Open default mail client (mailto:)
  const handleSendMailto = () => {
    if (!validateForm()) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profileData.socialLinks.email}?subject=${subject}&body=${body}`;
    onShowToast('Opening your default email app...');
  };

  // 3. Send message via WhatsApp
  const handleSendWhatsApp = () => {
    if (!formData.name.trim() || !formData.message.trim()) {
      onShowToast('Please fill out your Name and Message to chat on WhatsApp.');
      return;
    }

    const waText = encodeURIComponent(
      `Hello Feriyan!\n\nName: ${formData.name}\nEmail: ${formData.email || 'Not provided'}\n\nMessage:\n${formData.message}`
    );
    const waUrl = `${baseWhatsAppUrl}?text=${waText}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    onShowToast('Opening WhatsApp with your pre-filled message...');
  };

  // 4. Copy full message details
  const handleCopyMessage = () => {
    if (!formData.name && !formData.message) {
      onShowToast('Please type a message first.');
      return;
    }
    const fullText = `To: ${profileData.socialLinks.email}\nSubject: Portfolio Inquiry from ${formData.name}\nFrom: ${formData.name} <${formData.email}>\n\n${formData.message}`;
    navigator.clipboard.writeText(fullText);
    onShowToast('Message & contact details copied to clipboard!');
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <GithubGraph />
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-3"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Let's Build <span className="text-gradient-cyan">Something</span> Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-base leading-relaxed"
          >
            I'm open to software engineering opportunities, AI &amp; machine learning collaboration, and technical discussions. Reach out directly via WhatsApp, email, or social channels.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">Direct Channels</h3>

              {/* Email Card */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-white/10 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-mono text-slate-400">Email Address</div>
                  <div className="text-sm font-semibold text-slate-200 mt-0.5 break-all">
                    {profileData.socialLinks.email}
                  </div>
                  <div className="flex items-center gap-2.5 mt-2 flex-wrap">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
                      data-cursor="hover"
                    >
                      {copiedEmail ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                    </button>
                    <span className="text-slate-600 text-xs">|</span>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profileData.socialLinks.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
                      data-cursor="hover"
                      title="Compose in Gmail Web"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Gmail</span>
                    </a>
                    <span className="text-slate-600 text-xs">|</span>
                    <a
                      href={`mailto:${profileData.socialLinks.email}`}
                      className="text-xs font-mono text-slate-400 hover:text-slate-200 flex items-center space-x-1"
                      data-cursor="hover"
                      title="Open default email app"
                    >
                      <span>Mail App</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-mono text-emerald-400">WhatsApp</div>
                  <div className="text-sm font-semibold text-slate-200 mt-0.5">
                    {rawWhatsApp}
                  </div>
                  <div className="flex items-center gap-2.5 mt-2 flex-wrap">
                    <a
                      href={baseWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center space-x-1 font-medium"
                      data-cursor="hover"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <span className="text-slate-600 text-xs">|</span>
                    <button
                      type="button"
                      onClick={handleCopyWhatsApp}
                      className="text-xs font-mono text-slate-400 hover:text-slate-200 flex items-center space-x-1"
                      data-cursor="hover"
                    >
                      {copiedWhatsApp ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedWhatsApp ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-white/10 text-sky-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Location</div>
                  <div className="text-sm font-semibold text-slate-200 mt-0.5">
                    {profileData.location}
                  </div>
                </div>
              </div>

              {/* Portfolio Website */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-white/10 text-emerald-400">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Portfolio Website</div>
                  <a
                    href={profileData.socialLinks.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 mt-0.5 inline-flex items-center gap-1.5"
                    data-cursor="hover"
                  >
                    <span>https://feriyan-portfolio.vercel.app</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Social & Code */}
              <div className="pt-4 border-t border-white/5 space-y-3">
                <div className="text-xs font-mono text-slate-400">Social &amp; Channels</div>
                <div className="grid grid-cols-3 gap-2.5">
                  <a
                    href={profileData.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-1.5 py-2.5 px-2 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 text-slate-200 text-xs font-semibold hover:text-cyan-400 transition-all"
                    data-cursor="hover"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={profileData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-1.5 py-2.5 px-2 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 text-slate-200 text-xs font-semibold hover:text-cyan-400 transition-all"
                    data-cursor="hover"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={baseWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-1.5 py-2.5 px-2 rounded-xl bg-slate-900 border border-white/10 hover:border-emerald-500/40 text-slate-200 text-xs font-semibold hover:text-emerald-400 transition-all"
                    data-cursor="hover"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Send Direct Message Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSendGmail} className="glass-card p-8 rounded-2xl border border-white/10 space-y-5">
              <div>
                <h3 className="text-xl font-bold text-white">Send Direct Message</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your message to send directly to <span className="text-cyan-400 font-mono">{profileData.socialLinks.email}</span> or via WhatsApp.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Feriyan Eka Nanda"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-2">Your Message</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Feriyan, I would like to discuss a project / collaboration..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 resize-none"
                  required
                />
              </div>

              {/* Action Buttons: Email (Gmail Browser) and WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="submit"
                  className="py-3.5 px-5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center space-x-2 transition-all shadow-lg shadow-cyan-500/25 group cursor-pointer"
                  data-cursor="hover"
                  title="Opens Gmail compose in browser with message pre-filled"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Send via Gmail (Web)</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center space-x-2 transition-all shadow-lg shadow-emerald-600/25 group cursor-pointer"
                  data-cursor="hover"
                  title="Opens WhatsApp with your message ready to send"
                >
                  <WhatsAppIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>

              {/* Alternative Quick Options */}
              <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/5 flex-wrap gap-2">
                <button
                  type="button"
                  onClick={handleSendMailto}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1 font-mono text-[11px]"
                  data-cursor="hover"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Use Default Mail App</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1 font-mono text-[11px]"
                  data-cursor="hover"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Message Details</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-500 font-mono">
                "Send via Gmail" opens Gmail compose tab directly in your browser without requiring desktop email apps.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
