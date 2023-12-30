export const metadata = {
  title: "Projeler | Imatek",
  description: "Imatek yapı ve mühendislik",
};

import { Button, ButtonGroup } from "@nextui-org/react";
import Projeler from "@/components/projeler/projeler";
import Projelercard from "@/components/projeler/projecard";

export default function ResetPassword() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-6xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">Projelerimiz</h1>
            <ButtonGroup className="md:py-8">
              <Button>Müstakil</Button>
              <Button className="border-r border-l border-dashed">Yol</Button>
              <Button className="border-r border-dashed">Apartman</Button>
              <Button>Diğer</Button>
            </ButtonGroup>

            <div className="grid grid-cols-2 md:grid-cols-4">
              <div className="w-full">
                <Projelercard />
              </div>
              <div className="w-full">
                <Projelercard />
              </div>
              <div className="w-full">
                <Projelercard />
              </div>
              <div className="w-full">
                <Projelercard />
              </div>
              <div className="w-full">
                <Projelercard />
              </div>
              <div className="w-full">
                <Projelercard />
              </div>
              <div className="w-full">
                <Projelercard />
              </div>
              <div className="w-full">
                <Projelercard />
              </div>
              <div className="w-full">
                <Projelercard />
              </div>
              <div className="w-full">
                <Projelercard />
              </div>
              <div className="w-full">
                <Projelercard />
              </div>
              <div className="w-full">
                <Projelercard />
              </div>
              <div className="w-full">
                <Projelercard />
              </div>
              <div className="w-full">
                <Projelercard />
              </div>
              <div className="w-full">
                <Projelercard />
              </div>
              <div className="w-full">
                <Projelercard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
