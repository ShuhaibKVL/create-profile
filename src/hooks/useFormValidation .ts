import { useState } from 'react';
import { Errortype as IError } from '@/types/ErrorType';
import { IFormData } from '@/types/FormData';

export const useFormValidation = (initialState: IFormData) => {
    const [formData, setFormData] = useState<IFormData>(initialState);
    const [errors, setErrors] = useState<IError>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        // Special handling for phone to ensure only numbers
        const processedValue = name === 'phone' 
            ? value.replace(/\D/g, '').slice(0, 10) 
            : value;

        setFormData((prev) => ({
            ...prev,
            [name]: processedValue
        }));

        // Validate field on change
        validateField(name, processedValue);
    };

    const validateField = (name: string, value: string) => {
        const newErrors = {...errors}
        
        switch(name) {
            case 'name':
                if (!value.trim()) {
                    newErrors.name = 'Name is required.';
                } else if (!/^[a-zA-Z\s]+$/.test(value)) {
                    newErrors.name = 'Name must contain only letters.';
                } else {
                    delete newErrors.name;
                }
                break;

            case 'email':
                if (!value.trim()) {
                    newErrors.email = 'Email is required.';
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    newErrors.email = 'Invalid email format.';
                } else {
                    delete newErrors.email;
                }
                break;

            case 'phone':
                // Only validate if phone number is not empty
                if (value && !/^\d{10}$/.test(value)) {
                    newErrors.phone = 'Phone number must be 10 digits.';
                } else {
                    delete newErrors.phone;
                }
                break;

            case 'password':
                if (!value.trim()) {
                    newErrors.password = 'Password is required.';
                } else if (value.length < 8) {
                    newErrors.password = 'Password must be at least 8 characters.';
                } else if (!/[A-Z]/.test(value)) {
                    newErrors.password = 'Must contain an uppercase letter(A-Z).';
                } else if (!/[a-z]/.test(value)) {
                    newErrors.password = 'Must contain a lowercase letter(a-z).';
                } else if (!/\d/.test(value)) {
                    newErrors.password = 'Must contain a number(1-0).';
                } else if (!/[@#$%^&+=!]/.test(value)) {
                    newErrors.password = 'Must contain a special character(e.g.,@,#,$,%,etc.).';
                } else {
                    delete newErrors.password;
                }
                break;

            case 'confirmPassword':
                if (value !== formData.password) {
                    newErrors.confirmPassword = 'Passwords must match.';
                } else {
                    delete newErrors.confirmPassword;
                }
                break;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateForm = () => {
        // const newErrors: IError = {};
        
        // Validate each field
        Object.keys(formData)
            .filter(key => key !== 'phone') // Exclude phone from required validation
            .forEach(key => {
                validateField(key, formData[key as keyof IFormData] as string);
            });

        return Object.keys(errors).length === 0;
    };

    const resetForm = () => {
        setFormData(initialState);
        setErrors({});
        setIsSubmitted(false);
    };

    // Check if form is valid for submission
    const isFormValid = Object.keys(errors).length === 0 && 
        Object.entries(formData).every(([key, value]) => 
            key === 'phone' ? true : value !== ''
        );

    return {
        formData,
        errors,
        isSubmitted,
        isFormValid,
        handleChange,
        validateField,
        validateForm,
        resetForm,
        setIsSubmitted
    };
};