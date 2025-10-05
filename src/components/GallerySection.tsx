import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ImageWithFallback } from "./fig/ImageWithFallback";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1729554608003-5ec8be42da1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwY3liZXJwdW5rfGVufDF8fHx8MTc1OTQ2MTE3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "non",
    category: "non"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5NDQwNTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "non",
    category: "non"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1608278827697-4f4bb6ea08f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwbGlnaHRzJTIwZGFya3xlbnwxfHx8fDE3NTk0MzY3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "non",
    category: "non"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1573384293689-0327bf65bd86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc1OTQ1MDAwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "non",
    category: "non"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMG5lYnVsYXxlbnwxfHx8fDE3NTk0NjExOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "non",
    category: "non"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1687716189063-55c3ccc06b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYWVzdGhldGljJTIwbWluaW1hbHxlbnwxfHx8fDE3NTk0NjExOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "non",
    category: "non"
  }
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index].id);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex].id);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex].id);
  };

  return (
    <>
      <section id="galeria" className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Galería
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Una pequeña colección de mi inicio reciente en el aprendizaje 
              del arte de la fotografía y el diseño digital.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative cursor-pointer"
                onClick={() => openModal(index)}
              >
                <div className="glass-dark p-4 rounded-2xl overflow-hidden">
                  <div className="relative aspect-square overflow-hidden rounded-xl">
                    <ImageWithFallback
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <h3 className="text-white text-lg mb-1">{image.title}</h3>
                      <p className="text-blue-300 text-sm">{image.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-60 glass-dark p-2 rounded-full text-white hover:bg-white/20 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 glass-dark p-2 rounded-full text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 glass-dark p-2 rounded-full text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <div className="glass-dark p-6 rounded-2xl">
              <ImageWithFallback
                src={galleryImages[currentIndex].url}
                alt={galleryImages[currentIndex].title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
              />
              <div className="mt-4 text-center">
                <h3 className="text-white text-xl mb-2">{galleryImages[currentIndex].title}</h3>
                <p className="text-blue-300">{galleryImages[currentIndex].category}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}