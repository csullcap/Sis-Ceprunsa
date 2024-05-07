export const cursoAdapter = (curso) => {
  return {
    id: curso.id_curso,
    nombre: curso.nombre,
  };
};

export const cursosAdapter = (cursos) => {
  return cursos.map(cursoAdapter);
};
