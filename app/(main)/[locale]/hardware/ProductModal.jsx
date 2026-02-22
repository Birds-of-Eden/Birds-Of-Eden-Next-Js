import { useState } from "react";
import { motion } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  SkipForward,
  SkipBack,
} from "lucide-react";

const ProductModal = ({
  isOpen,
  onClose,
  product,
  specsMap,
  t,
  pageKey,
  allProducts,
  currentProductIndex,
  onNextProduct,
  onPrevProduct,
}) => {
  if (!isOpen || !product) return null;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (product.images && product.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    }
  };

  const prevImage = () => {
    if (product.images && product.images.length > 1) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + product.images.length) % product.images.length,
      );
    }
  };

  const currentImage = product.images
    ? product.images[currentImageIndex]
    : product.image;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      {/* Previous Product Button */}
      <div>
        {onPrevProduct && (
          <button
            onClick={onPrevProduct}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-blue-600/90 p-3 text-white shadow-lg transition-colors hover:bg-blue-700 dark:bg-blue-600/90 dark:hover:bg-blue-500"
            title={t("modal.previousProduct", "Previous Product")}
          >
            <SkipBack className="h-6 w-6" />
          </button>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-2xl bg-white shadow-2xl dark:bg-gray-800"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:bg-gray-900/90 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex h-full flex-col lg:flex-row">
          {/* Image Section */}
          <div className="relative bg-gray-100 dark:bg-gray-900 lg:w-1/2">
            <img
              src={currentImage}
              alt={product.name}
              className="h-full w-full object-contain"
            />

            {/* Image Navigation */}
            {product.images && product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:bg-gray-900/90 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:bg-gray-900/90 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 w-2 rounded-full transition-colors ${
                        index === currentImageIndex
                          ? "bg-blue-600"
                          : "bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Details Section */}
          <div className="flex-1 overflow-y-auto p-6 lg:p-8">
            <div className="mb-4">
              <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                {product.category || product.brand}
              </span>
            </div>

            <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white lg:text-3xl">
              {product.name}
            </h2>

            <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
              {product.brand || product.processor}
            </p>

            {/* Specifications */}
            <div className="mb-6">
              <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                {t(`${pageKey}.specifications`, "Specifications")}
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {specsMap.map(({ icon: Icon, key, label }) => (
                  <div key={key} className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {label}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {product[key]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            {product.highlights && product.highlights.length > 0 && (
              <div className="mb-6">
                <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {t(`${pageKey}.highlights`, "Key Features")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/20 dark:text-blue-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Delivery Info */}
            <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <span>{t(`${pageKey}.deliveryTime`, "3-5 days")}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Next Product Button */}
      <div className="absolute right-1 top-1/2 z-10 -translate-y-1/2">
        {onNextProduct && (
          <button
            onClick={onNextProduct}
            className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-blue-600/90 p-3 text-white shadow-lg transition-colors hover:bg-blue-700 dark:bg-blue-600/90 dark:hover:bg-blue-500"
            title={t("modal.nextProduct", "Next Product")}
          >
            <SkipForward className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductModal;
