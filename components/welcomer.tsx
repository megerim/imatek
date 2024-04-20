"use client";
import { motion } from "framer-motion";
import Logo from "./logo";
import { Link, Button } from "@nextui-org/react";
import { Icon1, Icon2, Icon3, Map } from "@/components/ui/icons";

export default function Welcomer(): JSX.Element {
  return (
    <div className="relative mx-auto  py-24 pb-10 md:pb-16">
      <div className="max-w-5xl  text-center pb-12 md:pb-12">
        <div className="max-w-xs mx-auto md:max-w-none min-h-48 flex  flex-col md:flex-row ">
          <motion.div
            initial={{ opacity: 0.1 }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 0.75 }}
            className="p-5 md:p-0"
          >
            <Logo />
          </motion.div>

          <motion.div
            initial={{ scale: 0.2, opacity: 0.1 }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{ duration: 0.75 }}
            className="h-90 w-2 bg-white p-1 mx-24 hidden md:block"
          />

          <motion.div
            initial={{ opacity: 0.1 }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 1 }}
            className="my-auto"
          >
            <motion.p
              initial={{ opacity: 0.1, scale: 0.9 }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{ duration: 1 }}
              className="font-extrabold text-7xl md:text-9xl border-b-8 border-white pb-2 antialiased text-white"
            >
              IMATEK
            </motion.p>
            <p className="uppercase font-bold text-lg md:text-xl tracking-widest mt-3">
              YAPI & MÜHENDİSLİK
            </p>

            <div className="mt-5">
              <motion.div
                initial={{ scale: 0.9, opacity: 0.1 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex gap-4 mt-4"
                transition={{ duration: 0.8 }}
              >
                <Button
                  as={Link}
                  color="default"
                  variant="shadow"
                  endContent={<Map />}
                  href="/#mapId"
                  size="lg"
                  isIconOnly
                />
                <Button
                  as={Link}
                  color="default"
                  variant="ghost"
                  endContent={<Icon1 />}
                  href="/projeler"
                  size="lg"
                  className="font-bold antialiased tracking-wider w-full"
                >
                  PROJE GALERİMİZ
                </Button>
              </motion.div>
              <div className="flex gap-4 mt-4">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0.1 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-1/2 md:w-2/3"
                  transition={{ duration: 0.6 }}
                >
                  <Button
                    as={Link}
                    size="lg"
                    href="/about"
                    color="default"
                    variant="ghost"
                    endContent={<Icon2 />}
                    className="w-full"
                  >
                    <span className="text-xs font-semibold md:text-base">
                      HAKKIMIZDA
                    </span>
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0.1 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-1/2 md:w-1/3"
                  transition={{ duration: 0.4 }}
                >
                  <Button
                    href="/contact"
                    as={Link}
                    size="lg"
                    color="default"
                    variant="shadow"
                    endContent={<Icon3 />}
                    className="w-full"
                  >
                    <span className="text-xs font-semibold md:text-base tracking-wider">
                      İLETİŞİM
                    </span>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
