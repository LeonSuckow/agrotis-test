import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useList } from "../hooks/listHooks";
import { Button } from "@mui/material";
import { Link as ReactRouterDomLink } from "react-router-dom";
import { HeaderForm } from "./styles";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "nome", headerName: "Nome", flex: 1 },
  { field: "cnpj", headerName: "Cnpj", flex: 1 },
  {
    field: "laboratorio",
    headerName: "Laboratório",
    flex: 1,

    valueGetter: (params: any) => {
      return params.nome ? params.nome : "";
    },
  },
  {
    field: "infosPropriedade",
    headerName: "Propriedade",
    flex: 1,
    valueGetter: (params: any) => (params.nome ? params.nome : ""),
  },

  { field: "observacoes", headerName: "Observações", flex: 1 },
];

export function List() {
  const { items } = useList();

  return (
    <>
      <HeaderForm>
        <h1>Listagem de items</h1>
        <Button
          component={ReactRouterDomLink}
          to="/form"
          variant="text"
          color="primary"
          sx={{ padding: ".6875rem 1rem", color: "primary" }}
        >
          Cadastrar
        </Button>
      </HeaderForm>
      <div style={{ height: 590, width: "100%" }}>
        <DataGrid
          sx={{ width: "100%", height: "100%" }}
          rows={items}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
    </>
  );
}

export default List;
