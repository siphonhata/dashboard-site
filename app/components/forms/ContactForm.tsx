'use client';

import { ContactFormData } from '@/app/lib/types';
import { FormEvent, useState } from 'react';


export default function ContactForm() {
  
  const [formData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {/* Form fields... */}
          </form>
        </div>
      </div>
    </div>
  );
}