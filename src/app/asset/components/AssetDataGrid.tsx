'use client'
import { useAppDispatch, useAppSelector } from '@/app/client/hooks'
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridRenderCellParams,
  GridDeleteIcon,
  GridToolbar
} from '@mui/x-data-grid'
import { deleteAsset, selectAssets } from '../assetSlice'
import { IconButton } from '@mui/material'
import Link from 'next/link'
import { MouseEventHandler } from 'react'
import { useSnackbar } from 'notistack'

const activeRenderCells = (row: GridRenderCellParams) => (
  <span>
    {row.value ? (
      <p className="text-green-500">Active</p>
    ) : (
      <p className="text-red-500">Inactive</p>
    )}
  </span>
)
const renderActionsCell = (onClick: MouseEventHandler<HTMLButtonElement>) => (
  <IconButton
    color="secondary"
    onClick={onClick}
    aria-label="delete"
    data-testid="delete-button"
  >
    <GridDeleteIcon />
  </IconButton>
)

function renderNameCell(rowData: GridRenderCellParams) {
  return (
    <Link style={{ textDecoration: 'none' }} href={`/asset/${rowData.id}/edit`}>
      <p color="primary">{rowData.value}</p>
    </Link>
  )
}
export const AssetDataGrid = () => {
  const assets = useAppSelector(selectAssets)
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useAppDispatch()
  const rows: GridRowsProp = assets.map((asset) => ({
    id: asset.id,
    name: asset.prefix + ' ' + asset.order,
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
      renderCell: (params) =>
        renderActionsCell(() => {
          dispatch(deleteAsset(params.value))
          enqueueSnackbar('Success deleting asset', { variant: 'success' })
        })
    }
  ]
  return (
    <div className="box-border mx-4  w-[calc(100%-30px)] shadow-md rounded-md">
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
