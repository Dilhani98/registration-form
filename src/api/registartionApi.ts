// src/api/registrationApi.ts
export const RegistrationApi = {
    register: () =>
      new Promise<string>((resolve, reject) => {
        setTimeout(() => {
          // Simulate a successful registration
          resolve('Registration successful');
          // Simulate a failed registration
          // reject(new Error('Registration failed'));
        }, 2000);
      }),
  };
  