import React from 'react';
import { X, Mail, MessageCircle, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, isDark }) => {
  if (!isOpen) return null;

  const bgClass = isDark ? 'bg-zinc-900 border-white text-white' : 'bg-white border-black text-black';
  const itemClass = isDark 
    ? 'bg-zinc-800 hover:bg-zinc-700 border-zinc-600' 
    : 'bg-gray-50 hover:bg-gray-100 border-gray-200';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className={`
            relative w-full max-w-md border-4 shadow-2xl p-0 overflow-hidden
            ${bgClass}
          `}
          style={{ boxShadow: isDark ? '8px 8px 0px white' : '8px 8px 0px black' }}
        >
          {/* Header Bar */}
          <div className={`
            flex justify-between items-center px-4 py-2 border-b-4 
            ${isDark ? 'bg-zinc-800 border-white' : 'bg-indigo-600 border-black text-white'}
          `}>
            <span className="font-pixel text-xs">COMMUNICATION_LINK</span>
            <button onClick={onClose} className="hover:scale-110 transition-transform">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-8">
            <h3 className="font-pixel text-lg mb-6 text-center">CHOOSE CHANNEL:</h3>
            
            <div className="space-y-4">
              <a 
                href="mailto:lostmuxi@gmail.com"
                className={`flex items-center gap-4 p-4 border-2 transition-transform hover:-translate-y-1 ${itemClass}`}
              >
                <div className="w-10 h-10 flex items-center justify-center border-2 border-current rounded-none">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="font-mono">
                  <div className="font-bold">EMAIL</div>
                  <div className="text-sm opacity-70">lostmuxi@gmail.com</div>
                </div>
              </a>

              <a 
                href="https://t.me/sue666666"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 border-2 transition-transform hover:-translate-y-1 ${itemClass}`}
              >
                <div className="w-10 h-10 flex items-center justify-center border-2 border-current rounded-none">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="font-mono">
                  <div className="font-bold">TELEGRAM</div>
                  <div className="text-sm opacity-70">@sue666666</div>
                </div>
              </a>

              <div 
                className={`flex items-center gap-4 p-4 border-2 transition-transform hover:-translate-y-1 cursor-pointer ${itemClass}`}
                onClick={() => {
                  navigator.clipboard.writeText('Link5419');
                  alert('WeChat ID copied to clipboard: Link5419');
                }}
              >
                <div className="w-10 h-10 flex items-center justify-center border-2 border-current rounded-none">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="font-mono">
                  <div className="font-bold">WECHAT</div>
                  <div className="text-sm opacity-70">Link5419 (Click to Copy)</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button 
                onClick={onClose}
                className="font-pixel text-[10px] underline opacity-50 hover:opacity-100"
              >
                [CANCEL]
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};