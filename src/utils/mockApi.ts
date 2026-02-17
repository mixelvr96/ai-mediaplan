import { FormData, SubmissionResponse } from '../types';

/**
 * Mock API for form submission
 * TODO: Replace with real API endpoint when backend is ready
 * Expected endpoint: POST /api/submit-form
 */
export const submitForm = async (formData: FormData): Promise<SubmissionResponse> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Log submission data for testing
  console.log('Form submitted:', formData);

  // Simulate successful submission
  // TODO: Replace with actual API call:
  // const response = await fetch('/api/submit-form', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(formData),
  // });
  // return response.json();

  return {
    success: true,
    message: 'Your mediaplan has been sent to your email.',
  };
};

/**
 * Mock API error simulation (for testing error handling)
 */
export const submitFormWithError = async (): Promise<SubmissionResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    success: false,
    message: 'Something went wrong. Please try again.',
  };
};
