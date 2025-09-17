"use client";

import { useState } from "react";
import AnimatedButton from "./animated-button";

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        const data = await res.json().catch(() => ({}));
        console.error('Failed to submit:', data?.error);
        setStatus('error');
      }
    } catch (err: unknown) {
      console.error('Failed to submit:', err);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="hey@0.email"
          required
          className="flex-1 px-4 py-2 text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <AnimatedButton
          type="submit"
          disabled={status === 'loading'}
          className="bg-[#0015ff] text-white hover:bg-[#0011cc]"
        >
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </AnimatedButton>
      </div>
      
      {status === 'success' && (
        <p className="mt-2 text-green-600 text-sm">Successfully joined the waitlist!</p>
      )}
      {status === 'error' && (
        <p className="mt-2 text-red-600 text-sm">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
