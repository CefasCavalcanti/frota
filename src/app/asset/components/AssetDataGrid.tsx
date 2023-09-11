'use client'
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridRenderCellParams,
  GridDeleteIcon,
  GridToolbar
} from '@mui/x-data-grid'
import { useAllAssetsQuery, useDeleteAssetMutation } from '../assetSlice'
import { IconButton } from '@mui/material'
import Link from 'next/link'
import { MouseEventHandler, useEffect } from 'react'
import { useSnackbar } from 'notistack'
import { FindAssetOutputDto } from '../asset'

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
  const { data, isLoading } = useAllAssetsQuery({})
  let assets: FindAssetOutputDto[] = []
  if (data!) {
    assets = data.data
  }

  const { enqueueSnackbar } = useSnackbar()
  const [deleteAsset, status] = useDeleteAssetMutation()
  useEffect(() => {
    if (status.isSuccess) {
      enqueueSnackbar('Asset deleted successfully', { variant: 'success' })
    }
    if (status.error) {
      enqueueSnackbar('Asset not deleted', { variant: 'error' })
    }
  }, [enqueueSnackbar, status.error, status.isSuccess])

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
          deleteAsset({ id: params.value })
        })
    }
  ]
  return (
    <div className="box-border mx-4  w-[calc(100%-30px)] shadow-md rounded-md h-[calc(100vh-300px)]">
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        // disableColumnSelector
        disableColumnFilter
        disableDensitySelector
        paginationMode="server"
        loading={isLoading ?? true}
        disableRowSelectionOnClick
        rowCount={isLoading ? rows.length : 1}
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
