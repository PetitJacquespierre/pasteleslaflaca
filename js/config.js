// Configuración Maestra del Cliente
const clientConfig = {
    id: "la_flaca", // Identificador único para el Kill Switch
    businessName: "Pasteles La Flaca",
    whatsapp: "584120609841", // Reemplazar con el número de WhatsApp del cliente
    hojaDeCalculo: "https://script.google.com/macros/s/AKfycbxaTgppYGOj3stpEzAtkPCZLIvfLSch62FV0fLbQNjMB2G7kfWOR_j6LHldbwyUytpw2g/exec", // Enlace al Google Sheets
    colors: {
        primary: "#F59E0B",   // Naranja Ámbar de La Flaca
        bgDark: "#09090b",    // Negro Carbón
        bgCard: "#18181b"     // Gris Oscuro para tarjetas
    }
};

// Auto-inyectar los colores en el CSS
document.documentElement.style.setProperty('--primary', clientConfig.colors.primary);
document.documentElement.style.setProperty('--bg-dark', clientConfig.colors.bgDark);
document.documentElement.style.setProperty('--bg-card', clientConfig.colors.bgCard);
