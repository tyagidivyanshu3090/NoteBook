import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DataGridCustomToolbar from "./DataGridCustomToolbar";

const CustomTable = ({columns, rows, hideColumnsForExport, pageSizeOptions, hidePagination=false, hideToolbar=false, customTitle=''}) =>{

    return(
            <>
                
                
                <Box component ="div" sx={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
                        <Box component="div" sx={{width: 'auto', maxWidth: '100%', height: '60vh', m: 2}}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 10 },
                                },
                                }}
                                pageSizeOptions={hidePagination?'':pageSizeOptions}
                                
                                slots={{ toolbar: hideToolbar?'':()=><DataGridCustomToolbar columns={columns} rows={rows} hideColumnsForExport={hideColumnsForExport} customTitle={customTitle}/>}}
                                slotProps={{
                                    toolbar: {
                                    showQuickFilter: true,
                                    },
                                    loadingOverlay: {
                                        variant: 'circular-progress',
                                        noRowsVariant: 'skeleton',
                                    },
                                }}          
                                disableColumnMenu   
                                sx={{
                                    '&.MuiDataGrid-root  .MuiDataGrid-columnHeaderTitle':{
                                        fontWeight: 600
                                    }
                                }}                   
                    />
                    </Box>
                </Box>
            </>
    )

}

export default CustomTable;