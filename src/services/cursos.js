import axios from "axios";
import { API_URL } from "@/config";
import { cursosAdapter } from "@/adapters";

const API_URL_CURSOS = API_URL + "cursos";

export const getCursos = async () => {
  const response = await axios.get(API_URL_CURSOS);
  return cursosAdapter(response.data);
};
