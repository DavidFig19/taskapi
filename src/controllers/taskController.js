import Task from "../models/Task.js";

export const createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;

        
        if (!title || !description) {
            return res.status(400).json({
                msg: "El título y la descripción son obligatorios."
            });
        }

        const allowedStatuses = ["pendiente", "en progreso", "completada"];
        if (status && !allowedStatuses.includes(status)) {
            return res.status(400).json({
                msg: "Estado inválido. Los valores permitidos son: 'pendiente', 'en progreso', 'completada'."
            });
        }

        // Crear la tarea (si no viene status, por defecto 'pendiente')
        const task = await Task.create({
            title,
            description,
            status: status || "pendiente",
            userId: req.user.id
        });

        return res.status(201).json({
            msg: "Tarea creada correctamente.",
            task
        });
    } catch (error) {
        console.error("Error creando tarea:", error);
        return res.status(500).json({
            msg: "Error interno al crear la tarea."
        });
    }
};

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user.id });

        if (tasks.length === 0) {
            return res.status(200).json({
                msg: "No hay tareas registradas.",
                tasks: []
            });
        }

        res.json({
            msg: "Tareas obtenidas correctamente.",
            tasks
        });

    } catch (error) {
        res.status(500).json({ msg: "Error interno del servidor." });
    }
};

export const getTaskById = async (req, res) => {
    try {
        const task = await Task.findOne({
            _id: req.params.id,
            userId: req.user.id
        });

        if (!task) {
            return res.status(404).json({ msg: "Tarea no encontrada" });
        }

        res.json(task);
    } catch (error) {
        res.status(500).json({ msg: "Error interno" });
    }
};

export const updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findOneAndUpdate(
            {
                _id: req.params.id,
                userId: req.user.id,
            },
            {
                title: req.body.title,
                description: req.body.description,
                status: req.body.status
            },
            { new: true } 
        );

        if (!updatedTask) {
            return res.status(404).json({
                msg: "La tarea no existe o ya fue eliminada."
            });
        }

        res.json({
            msg: "Tarea actualizada correctamente.",
            task: updatedTask
        });

    } catch (error) {
        return res.status(400).json({
            msg: "ID inválido o formato incorrecto."
        });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const deleted = await Task.findOneAndDelete({
            _id: req.params.id,
            userId: req.user.id
        });

        if (!deleted) {
            return res.status(404).json({ msg: "La tarea no existe o ya fue eliminada." });
        }

        res.json({ msg: "Tarea eliminada correctamente" });
    } catch (error) {
        return res.status(400).json({ msg: "ID inválido o formato incorrecto." });
    }

};