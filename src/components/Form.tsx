'use client'

import React from 'react'
import { Eye, EyeOff } from 'lucide-react';
import { useFormValidation } from '@/hooks/useFormValidation ';
import { IFormFields } from '@/types/FormFields';

// Form fields configuration
const formFields : IFormFields[] = [
    { name: 'name', type: "text", label: "Name", placeHolder: "Enter your name" },
    { name: 'email', type: "email", label: "Email", placeHolder: "Enter your email" },
    { name: 'phone', type: "tel", label: "Phone Number", placeHolder: "Optional 10 digit phone number" },
    { name: 'password', type: "password", label: "Password", placeHolder: "Enter password" },
    { name: 'confirmPassword', type: "password", label: "Confirm Password", placeHolder: "Confirm password" },
];

export default function Form() {
    // Initial form state
    const initialFormState = {
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    };

    // Use custom validation hook
    const {
        formData,
        errors,
        isSubmitted,
        isFormValid,
        handleChange,
        resetForm,
        setIsSubmitted
    } = useFormValidation(initialFormState);

    // Password visibility state
    const [passwordVisibility, setPasswordVisibility] = React.useState({
        password: false,
        confirmPassword: false
    });

    // Toggle password visibility
    const togglePasswordVisibility = (field: 'password' | 'confirmPassword') => {
        setPasswordVisibility(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);

        if (isFormValid) {
            // Form submission logic here
            alert('Form submitted successfully!');

            // call the api / backend here and pass the formData.
            resetForm();
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
            <form onSubmit={handleSubmit}>
                {formFields.map((field) => (
                    <div key={field.name} className="mb-4">
                        <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
                            {field.label}
                        </label>
                        <div className="relative">
                            <input
                                type={
                                    field.name === 'password' 
                                        ? (passwordVisibility.password ? 'text' : 'password')
                                        : field.name === 'confirmPassword'
                                        ? (passwordVisibility.confirmPassword ? 'text' : 'password')
                                        : field.type
                                }
                                name={field.name}
                                id={field.name}
                                placeholder={field.placeHolder}
                                value={formData[field.name as keyof typeof formData]}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none 
                                    ${errors[field.name as keyof typeof errors] 
                                        ? 'border-red-500' 
                                        : 'border-gray-300'
                                    }`}
                            />
                            {(field.name === 'password' || field.name === 'confirmPassword') && (
                                <button
                                    type="button"
                                    onClick={() => togglePasswordVisibility(field.name as 'password' | 'confirmPassword')}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                >
                                    {passwordVisibility[field.name as 'password' | 'confirmPassword'] 
                                        ? <EyeOff size={20} /> 
                                        : <Eye size={20} />
                                    }
                                </button>
                            )}
                        </div>
                        {(isSubmitted || errors[field.name as keyof typeof errors]) && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors[field.name as keyof typeof errors]}
                            </p>
                        )}
                    </div>
                ))}

                <button 
                    type="submit" 
                    disabled={!isFormValid}
                    className={`w-full py-2 px-4 rounded-md text-white 
                        ${isFormValid 
                            ? 'bg-blue-600 hover:bg-blue-700' 
                            : 'bg-gray-400 cursor-not-allowed'
                        }`}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}