//URL base da API
const BASE_URL = 'https://api.buscapao.com';

//Função auxiliar para montar os headers (com ou sem token)
const getHeaders = (token?: string) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
};

//Função para requisições GET (buscar dados)
export async function apiGet<T>(endpoint: string, token?: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'GET',
    headers: getHeaders(token),
  });

  if (!response.ok) {
    throw new Error('Erro ao buscar dados.');
  }
  return response.json();
}

//Função para requisições POST (criar dados)
export async function apiPost<T>(
  endpoint: string,
  data: unknown,
  token?: string,
): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: getHeaders(token),
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Erro ao criar dado.');
  }
  return response.json();
}

//Função para requisições PUT (atualizar dados)
export async function apiPut<T>(
  endpoint: string,
  data: unknown,
  token?: string,
): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'PUT',
    headers: getHeaders(token),
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Erro ao atualizar dado.');
  }
  return response.json();
}

//Função para requisições DELETE (deletar dados)
export async function apiDelete<T>(
  endpoint: string,
  token?: string,
): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'DELETE',
    headers: getHeaders(token),
  });

  if (!response.ok) {
    throw new Error('Erro ao deletar dado.');
  }
  return response.json();
}
