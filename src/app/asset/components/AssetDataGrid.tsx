'use client'
import { useAppSelector } from '@/app/client/hooks'
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridRenderCellParams,
  GridDeleteIcon,
  GridToolbar
} from '@mui/x-data-grid'
import { selectAssets } from '../assetSlice'
import { IconButton } from '@mui/material'
import Link from 'next/link'

const activeRenderCells = (row: GridRenderCellParams) => (
  <span>
    {row.value ? (
      <p className="text-green-500">Active</p>
    ) : (
      <p className="text-red-500">Inactive</p>
    )}
  </span>
)
function renderActionsCell(params: GridRenderCellParams) {
  return (
    <IconButton
      color="secondary"
      onClick={() => console.log(params.value)}
      aria-label="delete"
      data-testid="delete-button"
    >
      <GridDeleteIcon />
    </IconButton>
  )
}
function renderNameCell(rowData: GridRenderCellParams) {
  return (
    <Link style={{ textDecoration: 'none' }} href={`/asset/${rowData.id}/edit`}>
      <p color="primary">{rowData.value}</p>
    </Link>
  )
}
export const AssetDataGrid = () => {
  const assets = useAppSelector(selectAssets)
  const rows: GridRowsProp = assets.map((asset) => ({
    id: asset.id,
    name: asset.name,
    prefix: asset.prefix,
    order: asset.order,
    is_active: asset.is_active
  }))

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', flex: 1, renderCell: renderNameCell },
    { field: 'prefix', headerName: 'Prefix', flex: 1 },
    { field: 'order', headerName: 'Order', flex: 1 },
    {
      field: 'is_active',
      headerName: 'Active',
      flex: 1,
      type: 'boolean',
      renderCell: activeRenderCells
    },
    {
      field: 'id',
      headerName: 'Actions',
      type: 'string',
      flex: 1,
      renderCell: renderActionsCell
    }
  ]
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        // disableColumnSelector
        disableColumnFilter
        disableDensitySelector
        disableRowSelectionOnClick
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: {
              variant: 'standard',
              size: 'small',
              debounceMs: 500
            }
          }
        }}
      />
    </div>
  )
}
