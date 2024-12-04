'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useTheme } from 'next-themes';

import { sendEmail } from '@/actions/send-email';
import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { formSchema, TFormSchema } from '@/lib/form-schema';
import { cn } from '@/lib/utils';

export const Contact = () => {
  const { ref } = useSectionInView('Contact');
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormSchema>({ resolver: zodResolver(formSchema) });

  useEffect(() => {
    setMounted(true);
  }, []);

  const onSubmit = async (values: TFormSchema) => {
    const { data, error } = await sendEmail(values);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success(data);
    reset();
  };

  return (
    <section 
      ref={ref} 
      id="contact" 
      className="w-full md:w-3/4 my-10 scroll-mt-28 flex flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <SectionHeading
          heading="Get In Touch"
          content="Feel free to reach out through the form or directly via email"
        />
      </motion.div>

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 px-4">
        <div 
          className="
            flex-1 
            rounded-[32px] 
            border 
            dark:border-[#4e4e4e65] 
            border-[#07070718] 
            dark:bg-[#222636]/50 
            bg-white/50 
            p-8 
            md:mr-6
            hover:scale-[1.01]
            transition-transform
            duration-300
          "
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 w-full"
          >
            <div className="w-full">
              <label
                htmlFor="email"
                className={cn(
                  'block text-sm font-medium mb-2 dark:text-gray-300 text-gray-700',
                  errors.email?.message && 'text-red-500'
                )}
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="hello@example.com"
                {...register('email')}
                className={cn(
                  'w-full px-4 py-3 rounded-xl border transition-all duration-300',
                  mounted && theme === 'dark'
                    ? 'bg-[#333a4f]/30 border-[#4e4e4e65] text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-600'
                    : 'bg-gray-100/50 border-gray-300/60 text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-400',
                  errors.email?.message && 'border-red-500'
                )}
              />
              {errors.email?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email?.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <label
                htmlFor="message"
                className={cn(
                  'block text-sm font-medium mb-2 dark:text-gray-300 text-gray-700',
                  errors.message?.message && 'text-red-500'
                )}
              >
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message here..."
                {...register('message')}
                className={cn(
                  'w-full px-4 py-3 rounded-xl border h-48 resize-none transition-all duration-300',
                  mounted && theme === 'dark'
                    ? 'bg-[#333a4f]/30 border-[#4e4e4e65] text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-600'
                    : 'bg-gray-100/50 border-gray-300/60 text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-400',
                  errors.message?.message && 'border-red-500'
                )}
              ></textarea>
              {errors.message?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message?.message}
                </p>
              )}
            </div>

            <div className="flex justify-end">
              <Button 
                size="lg" 
                className={`
                  flex items-center 
                  ${mounted && theme === 'dark' 
                    ? 'bg-[#77AECD] hover:bg-[#51778d]' 
                    : 'bg-[#77AECD] hover:bg-[#51778d]'}
                `}
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};