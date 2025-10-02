import React, { useState } from 'react';

const settingsFormItems = {
  userCharCount: 10,
  telCharCount: 9
}

const LoginComponent = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    remember: false
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (isSignUp && !formData.username) {
      newErrors.username = 'Nombre de usuario requerido';
    } else if (isSignUp && formData.username.length < settingsFormItems.userCharCount) {
      newErrors.username = `Mínimo ${settingsFormItems.userCharCount} caracteres`;
    }
    
    if (!formData.email) {
      newErrors.email = 'Email requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (isSignUp && !formData.phone) {
      newErrors.phone = 'Teléfono requerido';
    } else if (isSignUp && !/^[+]?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Teléfono inválido';
    }
    
    if (!formData.password) {
      newErrors.password = 'Contraseña requerida';
    } else if (formData.password.length < settingsFormItems.telCharCount) {
      newErrors.password = `Mínimo ${settingsFormItems.telCharCount} caracteres`;
    }
    
    if (isSignUp && !formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirma tu contraseña';
    } else if (isSignUp && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showMessage = (message, type = 'success') => {
    const messageEl = document.createElement('div');
    messageEl.textContent = message;
    messageEl.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 12px 20px;
      border-radius: 8px;
      color: white;
      font-weight: 500;
      z-index: 1000;
      animation: slideIn 0.3s ease;
      background: ${type === 'success' ? '#52c41a' : '#ff4d4f'};
    `;
    document.body.appendChild(messageEl);
    setTimeout(() => {
      messageEl.remove();
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (isSignUp) {
        showMessage('¡Cuenta creada exitosamente!');
        console.log('Registro:', formData);
      } else {
        showMessage('¡Inicio de sesión exitoso!');
        console.log('Login:', formData);
      }
      
    } catch (error) {
      showMessage('Error en la autenticación. Inténtalo de nuevo.', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      showMessage('¡Autenticación con Google exitosa!');
    } catch (error) {
      showMessage('Error al autenticar con Google', error);
    } finally {
      setGoogleLoading(false);
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      remember: false
    });
    setErrors({});
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  // Iconos SVG
  const UserIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  );

  const MailIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  );

  const PhoneIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  );

  const LockIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
    </svg>
  );

  const EyeIcon = ({ show }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      {show ? (
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
      ) : (
        <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
      )}
    </svg>
  );

  const GoogleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );

  const InputField = ({ field, type = 'text', placeholder, icon, label, isPassword = false }) => (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ 
        display: 'block', 
        marginBottom: '8px', 
        fontSize: '14px', 
        fontWeight: '600',
        color: '#374151'
      }}>
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <input
          type={isPassword ? (field === 'password' ? (showPassword ? 'text' : 'password') : (showConfirmPassword ? 'text' : 'password')) : type}
          value={formData[field]}
          onChange={(e) => handleInputChange(field, e.target.value)}
          placeholder={placeholder}
          style={{
            width: '100%',
            height: '48px',
            padding: '0 16px 0 48px',
            border: `2px solid ${errors[field] ? '#ef4444' : '#e5e7eb'}`,
            borderRadius: '12px',
            fontSize: '16px',
            backgroundColor: '#ffffff',
            outline: 'none',
            transition: 'all 0.2s ease',
            boxSizing: 'border-box',
            fontFamily: 'inherit'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#3b82f6';
            e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = errors[field] ? '#ef4444' : '#e5e7eb';
            e.target.style.boxShadow = 'none';
          }}
        />
        <div style={{
          position: 'absolute',
          left: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#9ca3af',
          display: 'flex',
          alignItems: 'center'
        }}>
          {icon}
        </div>
        {isPassword && (
          <button
            type="button"
            onClick={() => field === 'password' ? setShowPassword(!showPassword) : setShowConfirmPassword(!showConfirmPassword)}
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              color: '#9ca3af',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <EyeIcon show={field === 'password' ? showPassword : showConfirmPassword} />
          </button>
        )}
      </div>
      {errors[field] && (
        <div style={{ 
          color: '#ef4444', 
          fontSize: '14px', 
          marginTop: '6px',
          fontWeight: '500'
        }}>
          {errors[field]}
        </div>
      )}
    </div>
  );

  return (
    <>
      <style>
        {`
          @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
          .loading-pulse {
            animation: pulse 1.5s ease-in-out infinite;
          }
        `}
      </style>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '440px',
          background: '#ffffff',
          borderRadius: '20px',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
          padding: '48px 40px',
          border: 'none'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 style={{ 
              margin: '0 0 12px 0', 
              color: '#1f2937',
              fontSize: '32px',
              fontWeight: '700',
              letterSpacing: '-0.025em'
            }}>
              {isSignUp ? 'Crear Cuenta' : 'Iniciar Sesión'}
            </h1>
            <p style={{
              color: '#6b7280',
              fontSize: '16px',
              margin: 0,
              lineHeight: '1.5'
            }}>
              {isSignUp 
                ? 'Completa tus datos para registrarte' 
                : 'Ingresa a tu cuenta para continuar'
              }
            </p>
          </div>

          <div onSubmit={handleSubmit}>
            {isSignUp && (
              <InputField
                field="username"
                placeholder="Ingresa tu nombre de usuario"
                icon={<UserIcon />}
                label="Nombre de Usuario"
              />
            )}

            <InputField
              field="email"
              type="email"
              placeholder="ejemplo@correo.com"
              icon={<MailIcon />}
              label="Correo Electrónico"
            />

            {isSignUp && (
              <InputField
                field="phone"
                placeholder="+591 12345678"
                icon={<PhoneIcon />}
                label="Teléfono"
              />
            )}

            <InputField
              field="password"
              placeholder="Ingresa tu contraseña"
              icon={<LockIcon />}
              label="Contraseña"
              isPassword={true}
            />

            {isSignUp && (
              <InputField
                field="confirmPassword"
                placeholder="Confirma tu contraseña"
                icon={<LockIcon />}
                label="Confirmar Contraseña"
                isPassword={true}
              />
            )}

            {!isSignUp && (
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                marginBottom: '32px' 
              }}>
                <label style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  cursor: 'pointer',
                  fontSize: '14px',
                  color: '#374151'
                }}>
                  <input
                    type="checkbox"
                    checked={formData.remember}
                    onChange={(e) => handleInputChange('remember', e.target.checked)}
                    style={{ 
                      marginRight: '8px',
                      width: '16px',
                      height: '16px',
                      accentColor: '#3b82f6'
                    }}
                  />
                  Recordarme
                </label>
                <a 
                  href="#" 
                  style={{ 
                    fontSize: '14px', 
                    color: '#3b82f6',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}
                  onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            )}

            <button
              type="submit"
              onClick={handleSubmit}
              disabled={loading}
              className={loading ? 'loading-pulse' : ''}
              style={{
                width: '100%',
                height: '52px',
                background: loading ? '#93c5fd' : 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: loading ? 'not-allowed' : 'pointer',
                marginBottom: '24px',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
                fontFamily: 'inherit'
              }}
              onMouseOver={(e) => {
                if (!loading) {
                  e.target.style.transform = 'translateY(-1px)';
                  e.target.style.boxShadow = '0 6px 16px rgba(59, 130, 246, 0.5)';
                }
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.4)';
              }}
            >
              {loading 
                ? (isSignUp ? 'Creando cuenta...' : 'Iniciando sesión...') 
                : (isSignUp ? 'Crear Cuenta' : 'Iniciar Sesión')
              }
            </button>
          </div>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            margin: '32px 0',
            color: '#9ca3af',
            fontSize: '14px'
          }}>
            <div style={{ flex: 1, height: '1px', background: '#e5e7eb' }}></div>
            <span style={{ padding: '0 16px' }}>o continúa con</span>
            <div style={{ flex: 1, height: '1px', background: '#e5e7eb' }}></div>
          </div>

          <button
            onClick={handleGoogleLogin}
            disabled={googleLoading}
            className={googleLoading ? 'loading-pulse' : ''}
            style={{
              width: '100%',
              height: '52px',
              background: '#ffffff',
              color: '#374151',
              border: '2px solid #e5e7eb',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: googleLoading ? 'not-allowed' : 'pointer',
              marginBottom: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              transition: 'all 0.2s ease',
              fontFamily: 'inherit'
            }}
            onMouseOver={(e) => {
              if (!googleLoading) {
                e.target.style.borderColor = '#d1d5db';
                e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
              }
            }}
            onMouseOut={(e) => {
              e.target.style.borderColor = '#e5e7eb';
              e.target.style.boxShadow = 'none';
            }}
          >
            <GoogleIcon />
            {googleLoading ? 'Autenticando...' : 'Continuar con Google'}
          </button>

          <div style={{ textAlign: 'center' }}>
            <span style={{ color: '#6b7280', fontSize: '15px' }}>
              {isSignUp ? '¿Ya tienes una cuenta? ' : '¿No tienes una cuenta? '}
            </span>
            <button
              onClick={toggleMode}
              style={{
                background: 'none',
                border: 'none',
                color: '#3b82f6',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '15px',
                textDecoration: 'underline',
                fontFamily: 'inherit'
              }}
              onMouseOver={(e) => e.target.style.color = '#1d4ed8'}
              onMouseOut={(e) => e.target.style.color = '#3b82f6'}
            >
              {isSignUp ? 'Inicia sesión' : 'Regístrate'}
            </button>
          </div>

          {isSignUp && (
            <div style={{ 
              marginTop: '24px', 
              padding: '20px', 
              backgroundColor: '#f9fafb', 
              borderRadius: '12px',
              textAlign: 'center',
              border: '1px solid #e5e7eb'
            }}>
              <p style={{ 
                fontSize: '13px', 
                color: '#6b7280', 
                margin: 0,
                lineHeight: '1.5'
              }}>
                Al registrarte, aceptas nuestros{' '}
                <a 
                  href="#" 
                  style={{ 
                    color: '#3b82f6',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}
                  onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                >
                  Términos de Servicio
                </a>
                {' '}y{' '}
                <a 
                  href="#" 
                  style={{ 
                    color: '#3b82f6',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}
                  onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                  onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                >
                  Política de Privacidad
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginComponent;