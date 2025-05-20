import React, { useState } from 'react';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';

interface FormState {
  name: string;
  file: File | null;
  status: 'idle' | 'submitting' | 'success' | 'error';
  errorMessage: string;
}

const GuestForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    file: null,
    status: 'idle',
    errorMessage: '',
  });

  const [filePreview, setFilePreview] = useState<string | null>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, name: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    
    setForm({ ...form, file });
    
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setFilePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setFilePreview(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.name.trim()) {
      setForm({
        ...form,
        status: 'error',
        errorMessage: 'Por favor, introduce tu nombre',
      });
      return;
    }

    if (!form.file) {
      setForm({
        ...form,
        status: 'error',
        errorMessage: 'Por favor, sube un archivo',
      });
      return;
    }

    setForm({ ...form, status: 'submitting' });
    
    setTimeout(() => {
      setForm({
        name: '',
        file: null,
        status: 'success',
        errorMessage: '',
      });
      setFilePreview(null);
      
      setTimeout(() => {
        setForm(prev => ({ ...prev, status: 'idle' }));
      }, 3000);
    }, 1500);
  };

  return (
    <div className="card backdrop-blur">
      {form.status === 'success' ? (
        <div className="text-center py-12">
          <div className="relative inline-flex">
            <div className="absolute inset-0 animate-ping">
              <CheckCircle className="w-16 h-16 text-green-500/30" />
            </div>
            <CheckCircle className="w-16 h-16 text-green-500 relative" />
          </div>
          <h3 className="text-2xl font-script text-gray-800 mt-6 mb-3">¡Gracias por compartir!</h3>
          <p className="text-gray-600">Tu archivo ha sido enviado correctamente.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {form.status === 'error' && (
            <div className="bg-red-50 text-red-700 p-4 rounded-xl flex items-start gap-3 animate-shake">
              <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <p>{form.errorMessage}</p>
            </div>
          )}
          
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={handleNameChange}
              className="form-input"
              placeholder="Tu nombre completo"
              disabled={form.status === 'submitting'}
            />
          </div>
          
          <div>
            <label htmlFor="file" className="block text-gray-700 mb-2 font-medium">
              Archivo
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-rose-300 transition-colors bg-white/50">
              <input
                type="file"
                id="file"
                onChange={handleFileChange}
                className="hidden"
                accept="image/*,video/*"
                disabled={form.status === 'submitting'}
              />
              
              {filePreview ? (
                <div className="mb-4">
                  <img 
                    src={filePreview} 
                    alt="Preview" 
                    className="max-h-48 mx-auto rounded-lg shadow-lg" 
                  />
                </div>
              ) : (
                <Upload className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              )}
              
              <label 
                htmlFor="file" 
                className="block cursor-pointer text-rose-600 hover:text-rose-700 font-medium"
              >
                {filePreview ? 'Cambiar archivo' : 'Seleccionar archivo'}
              </label>
              <p className="text-sm text-gray-500 mt-2">
                {form.file ? form.file.name : 'JPG, PNG, GIF, MP4 (max. 10MB)'}
              </p>
            </div>
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary w-full"
            disabled={form.status === 'submitting'}
          >
            {form.status === 'submitting' ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </span>
            ) : 'Enviar'}
          </button>
        </form>
      )}
    </div>
  );
};

export default GuestForm;