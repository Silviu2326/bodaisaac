import React, { useState } from 'react';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';

interface FormState {
  name: string;
  // Cambiamos 'file' a 'files' para manejar múltiples archivos
  files: File[];
  status: 'idle' | 'submitting' | 'success' | 'error';
  errorMessage: string;
}

const GuestForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    // Inicializamos 'files' como un array vacío
    files: [],
    status: 'idle',
    errorMessage: '',
  });

  // Eliminamos filePreview ya que manejaremos múltiples archivos
  // const [filePreview, setFilePreview] = useState<string | null>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, name: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Obtenemos todos los archivos seleccionados
    const selectedFiles = Array.from(e.target.files || []);
    
    // Limitamos a 5 archivos si es necesario, aunque el backend lo maneja, es buena práctica en el frontend también.
    const filesToUpload = selectedFiles.slice(0, 5);

    setForm({ ...form, files: filesToUpload });
    
    // Eliminamos la lógica de previsualización de un solo archivo
    // if (file && file.type.startsWith('image/')) {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     setFilePreview(reader.result as string);
    //   };
    //   reader.readAsDataURL(file);
    // } else {
    //   setFilePreview(null);
    // }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validaciones
    if (!form.name.trim()) {
      setForm({
        ...form,
        status: 'error',
        errorMessage: 'Per favor, introduïx el teu nom',
      });
      return;
    }

    // Validar que haya al menos un archivo seleccionado
    if (form.files.length === 0) {
      setForm({
        ...form,
        status: 'error',
        errorMessage: 'Per favor, puja almenys un arxiu',
      });
      return;
    }

    setForm({ ...form, status: 'submitting', errorMessage: '' });
    
    // Crear FormData
    const formData = new FormData();
    formData.append('nombre', form.name);
    form.files.forEach((file, index) => {
      formData.append('archivos', file);
    });

    try {
      // Realizar la petición POST
      const response = await fetch('https://fitoffice-a7ed6ea26ba4.herokuapp.com/api/bodaisaac/subir', {
        method: 'POST',
        body: formData,
        // No es necesario establecer el Content-Type para form-data, fetch lo hace automáticamente
      });

      if (response.ok) {
        // Petición exitosa
        setForm({
          name: '',
          files: [],
          status: 'success',
          errorMessage: '',
        });
        // setFilePreview(null); // Ya no usamos preview
        
        // Opcional: resetear el input de archivo para permitir subir los mismos archivos de nuevo si se desea
        const fileInput = document.getElementById('file') as HTMLInputElement;
        if (fileInput) {
          fileInput.value = '';
        }

        // Volver al estado idle después de un tiempo
        setTimeout(() => {
          setForm(prev => ({ ...prev, status: 'idle' }));
        }, 3000);

      } else {
        // Petición fallida
        const errorData = await response.json(); // Asumiendo que el backend devuelve JSON con detalles del error
        setForm({
          ...form,
          status: 'error',
          errorMessage: errorData.message || 'Error en l\'enviament de l\'arxiu.',
        });
      }

    } catch (error: any) {
      // Error de red u otro error
      setForm({
        ...form,
        status: 'error',
        errorMessage: error.message || 'Error de connexió. Torna a intentar-ho.',
      });
    }
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
          <h3 className="text-2xl font-script text-gray-800 mt-6 mb-3">Gràcies per compartir!</h3>
          <p className="text-gray-600">El teu arxiu ha sigut enviat correctament.</p>
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
              Nom
            </label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={handleNameChange}
              className="form-input"
              placeholder="El teu nom complet"
              disabled={form.status === 'submitting'}
            />
          </div>
          
          <div>
            <label htmlFor="file" className="block text-gray-700 mb-2 font-medium">
              Arxius
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-rose-300 transition-colors bg-white/50">
              <input
                type="file"
                id="file"
                onChange={handleFileChange}
                className="hidden"
                accept="image/*,video/*"
                multiple // Permitir selección de múltiples archivos
                disabled={form.status === 'submitting'}
              />
              
              {/* Eliminamos la previsualización de un solo archivo */}
              {/* {filePreview ? (
                <div className="mb-4">
                  <img 
                    src={filePreview} 
                    alt="Vista prèvia" 
                    className="max-h-48 mx-auto rounded-lg shadow-lg" 
                  />
                </div>
              ) : ( */}
                <Upload className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              {/* )} */}
              
              <label 
                htmlFor="file" 
                className="block cursor-pointer text-rose-600 hover:text-rose-700 font-medium"
              >
                {/* Actualizamos el texto del label */}
                {form.files.length > 0 ? `Canviar arxius (${form.files.length} seleccionat${form.files.length > 1 ? 's' : ''})` : 'Seleccionar arxius'}
              </label>
              <p className="text-sm text-gray-500 mt-2">
                {/* Actualizamos el texto de ayuda */}
                {form.files.length > 0 ? form.files.map(f => f.name).join(', ') : 'JPG, PNG, GIF, MP4 (màx. 5 arxius, 10MB cadascun recomanat)'}
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
                Enviant...
              </span>
            ) : 'Enviar'}
          </button>
        </form>
      )}
    </div>
  );
};

export default GuestForm;