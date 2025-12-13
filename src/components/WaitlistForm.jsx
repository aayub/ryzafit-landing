import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle, Loader2 } from 'lucide-react';

const WaitlistForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError('');

    try {
      // Google Apps Script URL for RyzaFit Waitlist
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyZG01_w13QxfA_mz9se33uIsgyaSpZDB-zwa3al6BBQ9aS_PdPmtG9_hZk-IuZE-4EtQ/exec';

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email.toLowerCase(),
          timestamp: new Date().toISOString(),
        }),
      });

      // With no-cors mode, we can't read the response, so we assume success
      setShowSuccess(true);
      reset();
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Error submitting email:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          RYZAFIT
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
          Transformative Fitness App with Limitless Features
        </p>
        <p className="text-sm md:text-base text-gray-600">
          One app to track your workouts, monitor progress, and achieve your fitness goals.
        </p>
      </div>

      {/* Simple Form - Like Reference */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className={`w-full px-6 py-4 text-base border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
              errors.email ? 'border-red-500 ring-2 ring-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 bg-blue-600 text-white font-bold py-4 px-6 text-base rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Joining...
              </>
            ) : (
              'Join Waitlist'
            )}
          </button>
        </div>
      </form>

      {showSuccess && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-800">
          <CheckCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Successfully added to waitlist! Check your inbox for confirmation.</span>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          <span className="text-sm font-medium">{error}</span>
        </div>
      )}
    </div>
  );
};

export default WaitlistForm;
