import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, Button, FormControl, Grid } from "@mui/material";
import { FormContainer, AutocompleteElement } from "react-hook-form-mui";
import { DatePickerElement } from "react-hook-form-mui/date-pickers";
import dayjs, { Dayjs } from "dayjs";
import CustomTextField from "./field/CustomTextField";
import { useSnackbar } from "../hooks/snackbarHook";
import { HeaderForm, SelectOptions } from "./styles";
import { agrotisApi } from "../config/api";
import { useList } from "../hooks/listHooks";
import { Link as ReactRouterDomLink } from "react-router-dom";

interface FormProps {
  nome: string;
  dataInicial: Dayjs;
  dataFinal: Dayjs;
  infosPropriedade: { id: number; nome: string; cnpj: string };
  laboratorio: { id: number; nome: string };
  observacoes: string;
}

export function Form() {
  const { openSnackbar } = useSnackbar();
  const { addItem } = useList();
  const { data: laboratorios } = useQuery({
    queryKey: ["laboratorios"],
    queryFn: () => agrotisApi.get("/laboratorios.json").then((res) => res.data),
    staleTime: 1000 * 60 * 60,
  });

  const { data: propriedades } = useQuery({
    queryKey: ["propriedades"],
    queryFn: () => agrotisApi.get("/propriedades.json").then((res) => res.data),
    staleTime: 1000 * 60 * 60,
  });

  const [helperTextPropriedade, setHelperTextPropriedade] = useState<string>();

  const onSubmitForm = (data: FormProps) => {
    const payload = {
      nome: data.nome,
      dataInicial: dayjs(data.dataInicial).toISOString(),
      dataFinal: dayjs(data.dataFinal).toISOString(),
      infosPropriedade: data.infosPropriedade,
      laboratorio: data.laboratorio,
      cnpj: data.infosPropriedade.cnpj,
      observacoes: data.observacoes,
    };

    console.log(payload);
    addItem(payload);
    openSnackbar("Cadastro realizado com sucesso!", "success");
  };

  const handleSubmitFormError = () => {
    openSnackbar("Preencha os campos obrigatórios.", "error");
  };

  return (
    <FormContainer onSuccess={onSubmitForm} onError={handleSubmitFormError}>
      <HeaderForm>
        <h1>Teste front-end</h1>
        <div>
          <Button
            component={ReactRouterDomLink}
            to="/"
            variant="text"
            color="primary"
            sx={{ padding: ".6875rem 1rem", color: "primary" }}
          >
            Voltar
          </Button>
          <Button
            variant="text"
            type="submit"
            color="primary"
            sx={{ padding: ".6875rem 1rem" }}
          >
            Salvar
          </Button>
        </div>
      </HeaderForm>

      <Box p={2}>
        <Grid container spacing={2} marginBottom={2}>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              fullWidth
              name="nome"
              label="Name"
              required
              variant="standard"
              type="text"
              counter
              maxLength={40}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <DatePickerElement
              label="Data Inicial"
              name="dataInicial"
              format="DD/MM/YYYY"
              inputProps={{
                fullWidth: true,
                variant: "standard",
              }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <DatePickerElement
              label="Data Final"
              name="dataFinal"
              format="DD/MM/YYYY"
              inputProps={{ fullWidth: true, variant: "standard" }}
              required
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} marginBottom={2}>
          <Grid item xs={12} sm={6}>
            {propriedades && (
              <AutocompleteElement
                label="Propriedade"
                name="infosPropriedade"
                options={propriedades}
                textFieldProps={{
                  variant: "standard",
                  helperText: helperTextPropriedade,
                }}
                autocompleteProps={{
                  onChange: (event, value) => {
                    setHelperTextPropriedade(value.cnpj);
                  },
                  renderOption: (props, option: any) => {
                    return (
                      <SelectOptions {...props}>
                        <p>{option.nome}</p>
                        <Box component="small">{option.cnpj}</Box>
                      </SelectOptions>
                    );
                  },
                  getOptionLabel: (value) => value.nome,
                }}
                required
              />
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            {laboratorios && (
              <FormControl fullWidth>
                <AutocompleteElement
                  label="Laboratório"
                  name="laboratorio"
                  options={laboratorios}
                  textFieldProps={{ variant: "standard" }}
                  autocompleteProps={{
                    renderOption: (props, option: any) => {
                      return (
                        <SelectOptions {...props}>{option.nome}</SelectOptions>
                      );
                    },
                    getOptionLabel: (value) => value.nome,
                  }}
                  required
                />
              </FormControl>
            )}
          </Grid>
        </Grid>
        <Grid container spacing={2} marginBottom={2}>
          <Grid item xs={12}>
            <CustomTextField
              fullWidth
              name="observacoes"
              label="Observações"
              variant="standard"
              multiline={true}
              required={false}
              rows={4}
              counter
              maxLength={1000}
            />
          </Grid>
        </Grid>
      </Box>
    </FormContainer>
  );
}

export default Form;
