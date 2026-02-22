"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import ProductModal from "../ProductModal";
import {
  Droplets,
  Gauge,
  Layers,
  MousePointerClick,
  Wifi,
} from "lucide-react";
import mouses from "@/app/Data/mouses.json";

type Mouse = {
  id: string;
  brand: string;
  name: string;
  category: string;
  sensor: string;
  dpi: string;
  buttons: string;
  connectivity: string;
  weight: string;
  image: string;
  highlights: string[];
};

type MousePageProps = {
  params: { locale: string };
};

const MousePage = ({ params }: MousePageProps) => {
  const t = useTranslations();
  const [filter, setFilter] = useState("ALL");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedProductIndex, setSelectedProductIndex] = useState<number | null>(null);

  const pills = ["ALL", ...new Set(mouses.map((item) => item.category))];

  type MouseSpecKey = keyof Pick<Mouse, 'sensor' | 'dpi' | 'buttons' | 'connectivity' | 'weight'>;

  const specsMap: Array<{
    icon: any;
    key: MouseSpecKey;
    label: string;
  }> = [
    { icon: MousePointerClick, key: "sensor", label: t("mousePage.sensor") },
    { icon: Layers, key: "dpi", label: t("mousePage.dpi") },
    { icon: Gauge, key: "buttons", label: t("mousePage.buttons") },
    { icon: Wifi, key: "connectivity", label: t("mousePage.connectivity") },
    { icon: Droplets, key: "weight", label: t("mousePage.weight") },
  ];

  const filteredMouses = useMemo(() => {
    if (filter === "ALL") return mouses;
    return mouses.filter((item) => item.category === filter);
  }, [filter]);

  const openModal = (product: any, index: number) => {
    setSelectedProduct(product);
    setSelectedProductIndex(index);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setSelectedProductIndex(null);
  };

  const nextProduct = () => {
    if (selectedProductIndex !== null && selectedProductIndex < filteredMouses.length - 1) {
      const nextIndex = selectedProductIndex + 1;
      setSelectedProduct(filteredMouses[nextIndex]);
      setSelectedProductIndex(nextIndex);
    }
  };

  const prevProduct = () => {
    if (selectedProductIndex !== null && selectedProductIndex > 0) {
      const prevIndex = selectedProductIndex - 1;
      setSelectedProduct(filteredMouses[prevIndex]);
      setSelectedProductIndex(prevIndex);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      <section className="container mx-auto px-4 py-6 transition-all duration-300">
        <div className="flex flex-wrap gap-2">
          {pills.map((pill) => (
            <button
              key={pill}
              onClick={() => setFilter(pill)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                filter === pill
                  ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 focus:ring-blue-500"
                  : "border-gray-300 bg-white text-gray-700 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-blue-400 dark:hover:bg-blue-900/20 dark:hover:text-blue-300 focus:ring-gray-500 dark:focus:ring-gray-400"
              }`}
            >
              {pill === "ALL" ? t("mousePage.all") : pill}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredMouses.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 cursor-pointer"
              onClick={() => openModal(item, idx)}
            >
              <div className="relative h-52 w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-gray-900 shadow-sm backdrop-blur-sm dark:bg-gray-900/95 dark:text-gray-100">
                  {item.category}
                </span>
              </div>

              <div className="p-4">
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 line-clamp-1 dark:text-white">
                      {item.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                      {item.brand}
                    </p>
                  </div>
                </div>

                <div className="mb-3 grid grid-cols-2 gap-2 text-xs">
                  {specsMap.map(({ icon: Icon, key, label }) => (
                    <div
                      key={key}
                      className="flex items-center gap-1.5 rounded-md bg-gray-50 px-2 py-1.5 dark:bg-gray-900/50"
                    >
                      <Icon className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                      <div className="truncate">
                        <p className="text-[10px] text-gray-500 dark:text-gray-400">
                          {label}
                        </p>
                        <p className="text-xs font-medium text-gray-900 truncate dark:text-gray-100">
                          {item[key]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mb-3 flex flex-wrap gap-1">
                  {item.highlights.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.highlights.length > 2 && (
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                      +{item.highlights.length - 2}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-3 dark:border-gray-700">
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 dark:text-gray-400">
                    <Gauge className="h-3 w-3" />
                    <span>{t("mousePage.deliveryTime")}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      
      <ProductModal
        isOpen={!!selectedProduct}
        onClose={closeModal}
        product={selectedProduct}
        specsMap={specsMap}
        t={t}
        pageKey="mousePage"
        allProducts={filteredMouses}
        currentProductIndex={selectedProductIndex}
        onNextProduct={nextProduct}
        onPrevProduct={prevProduct}
      />
    </div>
  );
};

export default MousePage;
