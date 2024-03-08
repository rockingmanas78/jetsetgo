"use client"
import { createContext, useContext, useState, ReactNode } from 'react';

interface ToastContextState {
  showToast: boolean;
  toastMessage: string;
  setToast: ({ showToast, toastMessage }: { showToast: boolean; toastMessage: string }) => void;
}


const ToastContext = createContext<ToastContextState | undefined>(undefined);

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const setToast = ({ showToast, toastMessage }: { showToast: boolean; toastMessage: string }) => {
    setShowToast(showToast);
    setToastMessage(toastMessage);
  };

  return (
    <ToastContext.Provider value={{ showToast, toastMessage, setToast }}>
      {children}
    </ToastContext.Provider>
  );
};

// Hook to use the toast context
export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export default ToastContext;
