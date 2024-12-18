import { renderHook, act } from '@testing-library/react';
import { useFormValidation } from '@/hooks/useFormValidation ';

const initialState = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
}

describe('useFormValidation Hook',() => {
    // initial state testing
    describe('Initial State', () => {
        it('should initialize with empty form data',() => {
            const {result} = renderHook(() => useFormValidation(initialState))

            expect(result.current.formData).toEqual(initialState)
            expect(result.current.errors).toEqual({});
            expect(result.current.isFormValid).toBeFalsy();
        });
    })

    //Name Field Validation
    describe('Name Validation',() => {
        it('should require name',() => {
            const {result} = renderHook(() => useFormValidation(initialState))

            act(() => {
                result.current.handleChange({
                    target : { name : 'name',value:""}
                }as React.ChangeEvent<HTMLInputElement>) 
            })

            expect(result.current.errors.name).toBe('Name is required.')
        })

        it('should only allow alphabetic character',() => {
            const {result } = renderHook(() => useFormValidation(initialState))

            act(() => {
                result.current.handleChange({
                    target:{name:'name',value:'shyam123'}
                }as React.ChangeEvent<HTMLInputElement>) 
            })

            expect(result.current.errors.name).toBe('Name must contain only letters.')
        })
    })

    // Email validation
    describe('Email Validation',() => {
        it('should require email', () => {
            const { result } = renderHook(() => useFormValidation(initialState))

            act(() => {
                result.current.handleChange({
                    target:{name:'email',value:''}
                }as React.ChangeEvent<HTMLInputElement>)
            })

            expect(result.current.errors.email).toBe('Email is required.');
        })

        it('should validate email format',() => {
            const {result } = renderHook(() => useFormValidation(initialState))

            act(() => {
                result.current.handleChange({
                    target:{name:'email',value:'invalide-email'}
                } as React.ChangeEvent<HTMLInputElement>)
            })

            expect(result.current.errors.email).toBe('Invalid email format.');
        })
    })

    describe('Phone Validation',() => {
        it('should validate phone number length',() => {
            const {result } = renderHook(() => useFormValidation(initialState))

            act(() => {
                result.current.handleChange({
                  target: { name: 'phone', value: '123' }
                } as React.ChangeEvent<HTMLInputElement>);
            });

            expect(result.current.errors.phone).toBe('Phone number must be 10 digits.');
        })
    })

    // Password Validation
    describe('Password Validation', () => {
      it('should require password', () => {
        const { result } = renderHook(() => useFormValidation(initialState));
        
        act(() => {
          result.current.handleChange({
            target: { name: 'password', value: '' }
          } as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.errors.password).toBe('Password is required.');
      });

      it('should validate password complexity', () => {
        const { result } = renderHook(() => useFormValidation(initialState));
        
        act(() => {
          result.current.handleChange({
            target: { name: 'password', value: 'short' }
          } as React.ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.errors.password).toBe('Password must be at least 8 characters.');
      });
    });

    // Confirm Password Validation
  describe('Confirm Password Validation', () => {
    it('should match passwords', () => {
      const { result } = renderHook(() => useFormValidation(initialState));
      
      act(() => {
        result.current.handleChange({
          target: { name: 'password', value: 'Password123!' }
        } as React.ChangeEvent<HTMLInputElement>);
        result.current.handleChange({
          target: { name: 'confirmPassword', value: 'DifferentPassword' }
        } as React.ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.errors.confirmPassword).toBe('Passwords must match.');
    });
  });

})