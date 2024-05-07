export const docenteAdapter = (docente) => {
  return {
    id: docente.id_docente,
    nombres: docente.informacion_personal.nombres,
    apellidos: docente.informacion_personal.apellidos,
    email: docente.informacion_personal.correo,
    telefono: docente.informacion_personal.telefono,
    direccion: docente.informacion_personal.direccion,
  };
};

export const docentesAdapter = (docentes) => {
  return docentes.map(docenteAdapter);
};
