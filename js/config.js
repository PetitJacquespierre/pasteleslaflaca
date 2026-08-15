// Configuración Maestra del Cliente
const clientConfig = {
    businessName: "Pasteles La Flaca",
    whatsapp: "584120000000", // Reemplazar con el real
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
