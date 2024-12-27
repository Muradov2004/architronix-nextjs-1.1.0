"use client";
import React, { useEffect, useState } from "react";
import CategoryNavbar from "@/components/header/CategoryNavbar";
import SectionTitle from "@/components/ui/sectionTitle";
import { menuListTwo } from "@/lib/fackData/menuListTwo";
import ProductGrid from "@/components/ProductGrid";
import Feedback from "@/components/section/feedback";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Ofis mebeli");
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [projectsCategory, setProjectsCategory] = useState([]);

  console.log("Category", selectedCategory);
  console.log("Subcategory", selectedSubCategory);
  // Kategori seçildiğinde, subcategory veya projeleri filtrele
  const selectedCategoryData = menuListTwo.find(
    (category) => category.name === selectedCategory
  );

  // Eğer subkategori seçildiyse, o alt kategoriye ait ürünleri filtrele
  const filteredProjects = selectedSubCategory
    ? selectedCategoryData?.isDropdown.find(
        (dropdown) => dropdown.name === selectedSubCategory
      )?.projects || []
    : selectedCategoryData?.projects || [];

  // // Kategori değiştiğinde, alt kategori sıfırlanır
  // const handleCategorySelect = (category) => {
  //   setSelectedCategory(category);
  //   setSelectedSubCategory(null); // Alt kategori sıfırlanır
  // };

  // // Alt kategori seçildiğinde, alt kategoriye ait ürünleri göster
  // const handleSubCategorySelect = (subCategory) => {
  //   setSelectedSubCategory(subCategory);
  // };

  const getProjectsForCategory = (selectedCategory, selectedSubCategory) => {
    // Öncelikle, seçilen kategoriye ait veriyi buluyoruz
    const selectedCategoryData = menuListTwo.find(
      (category) => category.name === selectedCategory
    );

    // Eğer kategori bulunduyse, projeleri döndürüyoruz
    if (!selectedCategoryData) return [];

    // Eğer alt kategori seçildiyse
    if (selectedSubCategory) {
      // Dropdown içerisindeki alt kategoriyi buluyoruz
      const subCategory = selectedCategoryData.isDropdown?.find(
        (dropdown) => dropdown.name === selectedSubCategory
      );

      // Eğer alt kategori varsa, o kategoriye ait projeleri döndürüyoruz
      if (subCategory) {
        return subCategory.projects || [];
      }
    }

    // Eğer alt kategori yoksa, ana kategoriye ait projeleri döndürüyoruz
    return selectedCategoryData.projects || [];
  };

  const findSubCategoryProjects = (subCategoryName) => {
    // Kategorilerde dolaş
    for (let category of menuListTwo) {
      // Eğer kategori bir dropdown'a sahipse
      if (category.isDropdown) {
        // Dropdown menülerine bak
        for (let dropdown of category.isDropdown) {
          // Eğer dropdown menüsü adı subCategoryName ile eşleşiyorsa
          if (dropdown.name === subCategoryName) {
            // Bu alt kategorinin projelerini döndür
            return dropdown.projects;
          }
        }
      }
      // Eğer kategoriye ait alt kategori yoksa, kategoriye ait projeleri döndür
      // if (category.name === subCategoryName) {
      //   return category.projects;
      // }
    }
    // Eğer alt kategori bulunamazsa boş bir dizi döndür
    return [];
  };

  useEffect(() => {
    const datas = findSubCategoryProjects(selectedSubCategory);
    const datas2 = getProjectsForCategory(selectedCategory);

    if (datas.length > 0) {
      setProjectsCategory(datas);
    } else if (datas2.length > 0) {
      setProjectsCategory(datas2);
    }
    console.log("projects", projectsCategory);
  }, [selectedSubCategory, selectedCategory]);

  return (
    <div>
      {/* Başlık */}
      <div className="container-fluid">
        <SectionTitle
          sectionName={"AZALI"}
          sectionTitle={"Məhsullarımız"}
          sectionDesc={"Sizin ideyanız-Bizim mebelimizdir."}
        />
      </div>

      {/* Kategori Navbar */}
      <div className="mt-20">
        <CategoryNavbar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedSubCategory={selectedSubCategory}
          setSelectedSubCategory={setSelectedSubCategory}
        />
      </div>

      {/* Ürün Grid */}
      <div className="-mt-14  min-w-72 mx-40 ml-2 xm:ml-10 sm:ml-16 2sm:ml-20 md:ml-28 lg:ml-28  ">
        <ProductGrid projects={projectsCategory} />
      </div>

      <Feedback />
    </div>
  );
};

export default Products;
