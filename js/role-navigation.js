(function () {
    try {
        const profile = JSON.parse(localStorage.getItem("coalerta_usuario") || "null");
        const cachedRole = JSON.parse(localStorage.getItem("userRole") || "null");
        if (localStorage.getItem("coalertaSesion") === "activa" &&
            profile && cachedRole && profile.uid === cachedRole.uid &&
            String(profile.rol || "").trim().toLowerCase() === cachedRole.role) {
            if (cachedRole.isAdmin === true) document.documentElement.classList.add("role-admin");
            if (cachedRole.isAdmin === true ||
                ["coordinador", "administrador", "admin"].includes(cachedRole.role)) {
                document.documentElement.classList.add("role-coordinator");
            }
            if (cachedRole.isAdmin === true ||
                ["agente", "seguridad", "administrador", "admin"].includes(cachedRole.role)) {
                document.documentElement.classList.add("role-security");
            }
        }
    } catch (error) {
        console.warn("No se pudo recuperar el rol guardado para el menú:", error);
    }
})();
