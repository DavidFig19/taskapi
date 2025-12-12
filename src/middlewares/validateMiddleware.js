export const validateTask = (req, res, next) => {
    const { title, description, status } = req.body;

    if (!title || !description)
        return res.status(400).json({ msg: "Título y descripción son obligatorios" });

    if (status && !["pendiente", "en progreso", "completada"].includes(status))
        return res.status(400).json({ msg: "Estado inválido" });

    next();
};