import React from "react"
import InputSelect from "../InputSelect/InputSelect"

import "../../style/components/FilterPanel.scss"
import Button from "../Button"

const FilterPanel = ({
  brands,
  categories,
  handleChangeBrandFilter,
  handleChangeCategoryFilter,
  handleClickFilter,
  selectedBrand,
  selectedCategory,
}) => {
  const displayBrandsFilter = () => {
    return brands && brands.length > 0
  }

  const displayCategoriesFilter = () => {
    return categories && categories.length > 0
  }

  return (
    <div className="ecommerce__filter-panel">
      <div className="ecommerce__filter-panel-brands">
        {displayBrandsFilter() && (
          <InputSelect
            handleSelectOption={handleChangeBrandFilter}
            label="Brands: "
            optionsList={brands}
            value={selectedBrand.value}
          />
        )}
      </div>
      <div className="ecommerce__filter-panel-category">
        {displayCategoriesFilter() && (
          <InputSelect
            handleSelectOption={handleChangeCategoryFilter}
            label="Categories: "
            optionsList={categories}
            value={selectedCategory.value}
          />
        )}
      </div>

      <div className="ecommerce__filter-panel-button">
        <Button
          handleClick={handleClickFilter}
          color="primary"
          label="Filter"
          size="5px 45px"
          type="button"
        />
      </div>
    </div>
  )
}

export default FilterPanel
