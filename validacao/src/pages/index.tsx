import Button from "@/components/button";
import Link from 'next/link'
import {Image} from 'react-native';

export default function Home() {
  return (
    <>
<main className="">
  <div id="area-principal">
    <p class="text-center alec">Bem-vindo ao <strong>Validador de documentos</strong> emitidos pela UNIFESSPA. Este serviço propõe-se a confirmar a validade dos documentos emitidos pela Instituição.
    Para proceder com validação informe o tipo de documento que deseja autenticar:</p>
    <div id="area-principal2">
      <div class="card text-center ">
        <div class="card-header alex23">
          Dados para Validação
        </div>

        <div class="card-body  ">
          <div className="row">
          {/* <div className="row my-5 text-center justify-content-center icone-newspaper " > */}
            <Link href="../relatorio" className="col-xl jota">
              <Button class="butao"
              icon  = "envelope"
              label="Curriculo Acadêmico"
              type="tertiary"
              />
            </Link>


              <Link href="../relatorio" className="col-xl jota">
              <Button class="butao9"
              icon = "envelope"
              label="　　　Diploma　　　"
              type="tertiary"
              />
              </Link>



              <Link href="../relatorio"  className="col-xl jota">
                <Button class="butao2"
                icon="lock"
                label="Historico Acadêmico"
                type="tertiary"
                />
              </Link>


          {/* <p class="card-text"></p>
          <a href="#" class="alex33"></a> */}


          {/* <div class=" alex23"> <h6>Dados para Validação</h6></div> */}
          {/* <div>
            <div class=" alex24 ">&nbsp;</div>
          </div> */}
          </div>
        </div>
        {/* <div></div>
        <div class="alek"></div> */}
        <div class="col-xl card-footer  text-muted alex24">

        </div>
      </div>
    </div>
  </div>
</main>

    </>
  );
}
