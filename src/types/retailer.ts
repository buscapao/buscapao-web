import { z } from 'zod';

// GET (RECEBER DADOS)

// Schema para um único Varejista (Ex: GET /varejistas/1)
export const retailerSchema = z.object({
  retailID: z.number(),
  retailFatherID: z.number().nullable(),
  name: z.string(),
  legalName: z.string().nullable(),
  document: z.string(),
  email: z.string().email(),
  phone: z.string(),
  stateRegistration: z.string().nullable(),
  status: z.enum(['active', 'inactive']),
  retailType: z.string(),
  url: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type Retailer = z.infer<typeof retailerSchema>;

// Schema para a lista de Varejistas
export const retailerListResponseSchema = z.object({
  limit: z.number(),
  page: z.number(),
  totalRows: z.number(),
  totalPages: z.number(),
  items: z.array(retailerSchema),
});

export type RetailerListResponse = z.infer<typeof retailerListResponseSchema>;

// POST (ENVIAR DADOS PARA CRIAR)

// Schema para Criar um Varejista (Ex: POST /varejistas)
export const retailerPostSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório.'),
  legalName: z.string(),
  Document: z.string(),
  email: z.string().email('Formato de e-mail inválido.'),
  phone: z.string(),
  stateRegistration: z.string().nullable().optional(),
});

export type RetailerPost = z.infer<typeof retailerPostSchema>;

// PUT (ENVIAR DADOS PARA ATUALIZAR)

// Schema para Atualizar um Varejista (Ex: PUT /varejistas/1)
export const retailerUpdatePayloadSchema = z.object({
  name: z.string(),
  legalName: z.string(),
  Document: z.string(),
  email: z.string().email(),
  phone: z.string(),
  stateRegistration: z.string().nullable(),
});

export type RetailerUpdatePayload = z.infer<typeof retailerUpdatePayloadSchema>;
