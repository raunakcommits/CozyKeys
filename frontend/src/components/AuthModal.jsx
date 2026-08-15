import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock, User, ArrowRight } from "lucide-react";

const AuthModal = ({ isOpen, onClose, initialMode = "login" }) => {
  const [mode, setMode] = useState(initialMode);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting ${mode}:`, formData);
    // Add backend auth call here
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-[#FAF7F2] rounded-3xl p-8 shadow-2xl border border-[#EBE5D8]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 text-[#2A2421] transition-colors"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-serif text-[#2A2421]">
              {mode === "login" ? "Welcome Back" : "Create your Account"}
            </h2>
            <p className="text-xs text-[#7A7067] mt-1">
              {mode === "login"
                ? "Sign in to access saved properties & AI matches"
                : "Join CozyKeys to find your ideal home"}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <div>
                <label className="block text-xs font-semibold text-[#63554B] uppercase mb-1">Full Name</label>
                <div className="relative">
                  <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C827A]" />
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#EBE5D8] text-sm text-[#2A2421] focus:outline-none focus:border-[#2A2421]"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-[#63554B] uppercase mb-1">Email</label>
              <div className="relative">
                <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C827A]" />
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#EBE5D8] text-sm text-[#2A2421] focus:outline-none focus:border-[#2A2421]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#63554B] uppercase mb-1">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C827A]" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#EBE5D8] text-sm text-[#2A2421] focus:outline-none focus:border-[#2A2421]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3 bg-[#2A2421] text-[#FAF7F2] rounded-xl font-medium text-sm hover:bg-[#3D3531] transition-all flex items-center justify-center gap-2"
            >
              {mode === "login" ? "Sign In" : "Get Started"}
              <ArrowRight size={16} />
            </button>
          </form>

          {/* Mode Switcher */}
          <div className="mt-6 text-center text-xs text-[#7A7067]">
            {mode === "login" ? (
              <p>
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => setMode("signup")}
                  className="font-semibold text-[#2A2421] hover:underline"
                >
                  Get Started
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className="font-semibold text-[#2A2421] hover:underline"
                >
                  Log in
                </button>
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AuthModal;