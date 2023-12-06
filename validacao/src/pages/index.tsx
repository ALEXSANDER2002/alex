import Button from "@/components/button";
import Link from 'next/link'
import {Image} from 'react-native';

export default function Home() {
  return (
    <>

      <main className="">
        <div className="">
            <div className="">







      <div id="area-principal">
     <p class="text-center alec">Bem-vindo ao <strong>Validador de documentos</strong> emitidos pela UNIFESSPA. Este serviço propõe-se a confirmar a validade dos documentos emitidos pela Instituição.
Para proceder com validação informe o tipo de documento que deseja autenticar:</p>


      <div class=" text-center">
<div class="area">
        <div class="card-body alex25">
          <h5 class="card-title"></h5>
          <p class="card-text"></p>
          <a href="#" class="alex33"></a>

        </div>
<div class="card-header alex23"> <strong>Dados para Validação</strong></div>
        <div class="card-footer alex24 text-body-secondary">1</div>

      </div>
    </div>
    <div></div>
   <div class="alek"></div>

          </div>
          <div className="row my-5 text-center justify-content-center">
            <div className="col-lg-auto">
              <div className="">
                <Link href="../relatorio" className="design-clean">

                  <Button class="butao"
                    icon="newspaper"
                    label="Curriculo Acadêmico"
                    type="tertiary"
                  />


                </Link>


                <div>
                <Link href="../relatorio" >
                 <Button class="butao9"
                    icon="newspaper"
                    label="Diploma"
                    type="tertiary"
                  />
                </Link>
                </div>
                <div>
                  <Link href="../relatorio" >
                <Button class="butao2"
                    icon="newspaper"
                    label="Historico
 Acadêmico
"
                    type="tertiary"
                  /></Link>

                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>
    </>
  );
}
