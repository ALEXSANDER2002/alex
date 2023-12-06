import Head from "next/head";
import Image from "next/image";

import Button from "@/components/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>diploma</title>
      </Head>
      <main>
        <div className="">
          <div className="">
            <div className="">

            </div>
          </div>

          <div className="">
            <div className="alec">
              <p className="text-up-06 text-semi-bold my-3 text-center">
                Documento válido e emitido pela UNIFESSPA!
              </p>
            </div>
            <div className="">
              <p className="">

              </p>
            </div>
            <p className="">

            </p>

            <div className="">
              <div className="">
                <div className="">
                  <Link href="https://www.youtube.com/watch?v=5XPojnx9bb8" className="">
                    <Button
                      icon="magnifying-glass"
                      label="Visualizar Documento"
                      type="primary"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
