'use client';

import { useEffect, useState } from 'react';
import { apiGet } from '@/services/api';
import { Retailer } from '@/types/retailer';
import { useParams } from 'next/navigation';

export default function RetailDetailPage() {
  const [retailer, setRetailer] = useState<Retailer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const { retailerId } = params;

  useEffect(() => {
    if (retailerId) {
      const fetchRetailer = async () => {
        try {
          const data = await apiGet<Retailer>(`/v1/backoffice/retails/${retailerId}`);
          setRetailer(data);
        } catch (error) {
          setError('Erro ao buscar os dados do varejista.');
        } finally {
          setLoading(false);
        }
      };

      fetchRetailer();
    }
  }, [retailerId]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!retailer) {
    return <div>Varejista não encontrado.</div>;
  }

  return (
    <div className="p-4 m-4 border rounded-xl bg-card">
      <h4 className="h4 mb-2">Detalhes do Varejo</h4>
      <div className="p-2 bg-white border rounded-xl">
        <p><strong>Nome:</strong> {retailer.name}</p>
        <p><strong>Nome Fantasia:</strong> {retailer.legalName}</p>
        <p><strong>Documento:</strong> {retailer.document}</p>
        <p><strong>Email:</strong> {retailer.email}</p>
        <p><strong>Telefone:</strong> {retailer.phone}</p>
        <p><strong>Inscrição Estadual:</strong> {retailer.stateRegistration}</p>
        <p><strong>Status:</strong> {retailer.status}</p>
      </div>
    </div>
  );
}