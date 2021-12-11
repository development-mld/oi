import './style.css';
import {Button, FormControl, Input} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import React from "react";
import {brokerApi} from "../../service/http-out/brokerApi";
import {Campaign} from "./domain/campaign";

function Home() {
    const camp : Campaign = {name: "", csv: ""};
    const [loading, setLoading] = React.useState(false);
    function handleCsv(param: any) {
        const myCsv = param.target.files[0];
        console.log("csv ", myCsv)
    }
    function handleClick() {
        setLoading(true);
        brokerApi
                .createCampaign(camp)
                .then((response) => {
                    console.log("resp ", response.data);
                })
                .catch((error) => {
                    alert("Ocorreu um erro ao criar campanha");
                });
        setLoading(false);
    }

    return (
        <FormControl>
            <Input placeholder="Inserir nome da Campanha" onChange={() => {camp.name = "teste 123"}}/>
            <Button variant="contained" component="label">
                Upload File
                <input type="file" accept="text/csv" hidden onChange={handleCsv}/>
            </Button>
            <LoadingButton
                onClick={handleClick}
                loading={loading}
                loadingPosition="end"
                variant="contained"
            >
                Criar Campanha
            </LoadingButton>
        </FormControl>
    );
}

export default Home;