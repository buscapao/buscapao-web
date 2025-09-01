'use client';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { MoreVertical, Plus, ListFilter } from 'lucide-react';
import { useState } from 'react';

export default function RetailList() {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const [selectAll, setSelectAll] = useState(false);

  // Dados da tabela - MUDAR PARA DADOS REAIS
  const retailers = [
    {
      id: '1',
      name: 'Cliente Exemplo A',
      clientNumber: '001',
      branches: 5,
      status: 'Ativo',
    },
    {
      id: '2',
      name: 'Empresa Modelo B',
      clientNumber: '002',
      branches: 12,
      status: 'Inativo',
    },
    {
      id: '3',
      name: 'Organização C',
      clientNumber: '003',
      branches: 2,
      status: 'Ativo',
    },
  ];

  // Função checkbox da header
  const handleSelectAll = () => {
    const newSelectAllState = !selectAll;
    setSelectAll(newSelectAllState);

    if (newSelectAllState) {
      setSelectedItems(new Set(retailers.map((r) => r.id)));
    } else {
      //limpa selecionados
      setSelectedItems(new Set());
    }
  };

  const handleSelectItem = (itemId: string, checked: boolean) => {
    const newSelected = new Set(selectedItems);

    if (checked) {
      // adiciona o id se foi marcado
      newSelected.add(itemId);
    } else {
      // remove o id se foi desmarcado
      newSelected.delete(itemId);
    }

    // Atualiza o estado com a nova lista de itens selecionados
    setSelectedItems(newSelected);
    if (!checked && selectAll) {
      setSelectAll(false);
    }
  };

  return (
    <div className="p-4 bg-card border rounded-xl m-4">
      <div className="ml-1.5 mb-2.5 mr-1.5 flex justify-between items-center">
        {/* Título da página */}
        <h3 className="text-lg font-semibold">Varejos</h3>

        {/* botoes */}
        <div className="flex gap-2">
          {/* Botão para cadastrar um novo varejo */}
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Cadastrar varejo
          </Button>

          {/* Botão para abrir os filtros da tabela */}
          <Button variant="outline">
            <ListFilter className="mr-2 h-4 w-4" />
            Filtro
          </Button>
        </div>
      </div>

      {/* Container da Tabela */}
      <div className="bg-white border rounded-xl">
        <Table>
          {/* Cabeçalho da Tabela */}
          <TableHeader>
            <TableRow>
              {/* selecionar todos*/}
              <TableHead className="w-[80px]">
                <Checkbox
                  checked={selectAll}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>

              {/* titulo das outras colunas */}
              <TableHead>NOME</TableHead>
              <TableHead>Nº Cliente</TableHead>
              <TableHead>Quantidade de Filiais</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>

          {/* Corpo da Tabela */}
          <TableBody>
            {/* Linha de dados para cada varejo */}
            {retailers.map((retailer) => (
              <TableRow key={retailer.id}>
                {/* checkbox individual da linha */}
                <TableCell>
                  <Checkbox
                    // O checkbox está marcado se o ID do varejista estiver no Set 'selectedItems'
                    checked={selectedItems.has(retailer.id)}
                    // Quando clicado, chama a função para manipular a seleção do item
                    onCheckedChange={(checked) =>
                      handleSelectItem(retailer.id, checked === true)
                    }
                  />
                </TableCell>

                {/* dados do varejo */}
                <TableCell>{retailer.name}</TableCell>
                <TableCell>{retailer.clientNumber}</TableCell>
                <TableCell>{retailer.branches}</TableCell>
                <TableCell>{retailer.status}</TableCell>

                {/* opçoes de ação */}
                <TableCell className="text-right">
                  <MoreVertical className="h-4 w-4 cursor-pointer" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
