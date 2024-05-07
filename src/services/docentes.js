import axios from "axios";
import { API_URL } from "@/config";
import { docenteAdapter, docentesAdapter } from "@/adapters";

const API_URL_DOCENTES = API_URL + "docentes";

export const getDocentes = async () => {
  const response = await axios.get(API_URL_DOCENTES);
  return docenteAdapter(response.data);
};
export const getDocentesbyCurso = async (curso) => {
  const response = await axios.get(API_URL_DOCENTES + "/search?curso=" + curso);
  return docentesAdapter(response.data);
};
