package com.lyquit.service.mapper;

import com.lyquit.domain.Category;
import com.lyquit.domain.Products;
import com.lyquit.service.dto.CategoryDTO;
import com.lyquit.service.dto.ProductsDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Products} and its DTO {@link ProductsDTO}.
 */
@Mapper(componentModel = "spring")
public interface ProductsMapper extends EntityMapper<ProductsDTO, Products> {
    @Mapping(target = "category", source = "category", qualifiedByName = "categoryName")
    ProductsDTO toDto(Products s);

    @Named("categoryName")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    @Mapping(target = "name", source = "name")
    CategoryDTO toDtoCategoryName(Category category);
}
