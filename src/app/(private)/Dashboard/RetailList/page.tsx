'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import { MoreVertical, Plus, ListFilter } from 'lucide-react';
import { FaTrash } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';

// Definição do tipo de dados
type Retailer = {
  id: string;
  name: string;
  clientNumber: string;
  branches: number;
  status: 'Ativo' | 'Inativo';
};

// Dados da tabela - MUDAR PARA DADOS REAIS
const retailersData: Retailer[] = [
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
  {
    id: '4',
    name: 'Varejo D',
    clientNumber: '004',
    branches: 8,
    status: 'Ativo',
  },
  {
    id: '5',
    name: 'Loja E',
    clientNumber: '005',
    branches: 1,
    status: 'Inativo',
  },
  {
    id: '6',
    name: 'Comércio F',
    clientNumber: '006',
    branches: 25,
    status: 'Ativo',
  },
  {
    id: '7',
    name: 'Distribuidora G',
    clientNumber: '007',
    branches: 3,
    status: 'Ativo',
  },
  {
    id: '8',
    name: 'Supermercado H',
    clientNumber: '008',
    branches: 15,
    status: 'Ativo',
  },
  {
    id: '9',
    name: 'Magazine I',
    clientNumber: '009',
    branches: 7,
    status: 'Inativo',
  },
  {
    id: '10',
    name: 'Atacado J',
    clientNumber: '010',
    branches: 4,
    status: 'Ativo',
  },
  {
    id: '11',
    name: 'Ponto K',
    clientNumber: '011',
    branches: 1,
    status: 'Ativo',
  },
];

export default function RetailList() {
  const router = useRouter();
  const [rowSelection, setRowSelection] = React.useState({});

  // Função de click
  const handleCreateRetail = () => router.push('/Dashboard/RetailDetailPage');
  const handleEditRetail = (id: string) =>
    router.push(`/Dashboard/NewRetail/${id}`);
  const handleEditStatusRetail = (id: string) =>
    console.log('Alterar status do ID:', id);
  const handleDeleteSelected = () => {
    const selectedIds = table
      .getFilteredSelectedRowModel()
      .rows.map((row) => row.original.id);
    console.log('Excluir todos os selecionados:', selectedIds);
  };

  // Definição das colunas
  const columns: ColumnDef<Retailer>[] = [
    // Coluna de Checkbox - CORRIGIDA
    {
      id: 'select',
      header: ({ table }) => {
        const isAllSelected = table.getIsAllPageRowsSelected();
        const isSomeSelected = table.getIsSomePageRowsSelected();

        return (
          <Checkbox
            checked={isAllSelected}
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Selecionar todas"
            data-state={
              isAllSelected
                ? 'checked'
                : isSomeSelected
                ? 'indeterminate'
                : 'unchecked'
            }
          />
        );
      },
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Selecionar linha"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    // Suas colunas de dados
    { accessorKey: 'name', header: 'Nome' },
    { accessorKey: 'clientNumber', header: 'Nº Cliente' },
    { accessorKey: 'branches', header: 'Filiais' },
    { accessorKey: 'status', header: 'Status' },
    // Coluna de Ações com seu DropdownMenu
    {
      id: 'actions',
      header: () => <div className="text-right"></div>,
      cell: ({ row }) => {
        const retailer = row.original;
        return (
          <div className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleEditRetail(retailer.id)}>
                  Editar
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleEditStatusRetail(retailer.id)}
                >
                  Alterar status
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      },
    },
  ];

  // Controle da tabela
  const table = useReactTable({
    data: retailersData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
  });

  return (
    <div className="p-4 bg-card border rounded-xl m-4">
      {/* Meu titulo */}
      <div className="ml-1.5 mb-2.5 mr-1.5 flex justify-between items-center">
        <h3 className="text-lg font-semibold">Varejos</h3>
        <div className="flex gap-2">
          <Button onClick={handleCreateRetail}>
            <Plus className="mr-2 h-4 w-4" /> Cadastrar varejo
          </Button>
          <Button variant="outline">
            <ListFilter className="mr-2 h-4 w-4" /> Filtro
          </Button>
        </div>
      </div>

      {/* CONTAINER DA TABELA */}
      <div className="bg-white border rounded-xl">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Nenhum resultado encontrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Paginas */}
      <div className="flex items-center justify-between space-x-2 p-2">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} de{' '}
          {table.getFilteredRowModel().rows.length} linha(s) selecionadas.
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex w-[100px] items-center justify-center text-sm font-medium">
            Página {table.getState().pagination.pageIndex + 1} de{' '}
            {table.getPageCount()}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Anterior</span>
              {'<'}
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Próximo</span>
              {'>'}
            </Button>
          </div>
        </div>
      </div>

      {/* botão de excluir */}
      <Button
        className="mt-2"
        variant={'destructive'}
        disabled={Object.keys(rowSelection).length === 0}
        onClick={handleDeleteSelected}
      >
        <FaTrash className="mr-2 h-3.5 w-3.5" />
        Excluir ({table.getFilteredSelectedRowModel().rows.length})
      </Button>
    </div>
  );
}
