import axios from 'axios';
import { DadosCep } from '../types/DadosCep'

const CORREIOS_BASE_URL = 'https://viacep.com.br/ws';

export const buscarCep = async (cep: string): Promise<DadosCep> => {
  try {
    const response = await axios.get<DadosCep>(`${CORREIOS_BASE_URL}/${cep}/json`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar CEP:', error);
    throw error;
  }
};