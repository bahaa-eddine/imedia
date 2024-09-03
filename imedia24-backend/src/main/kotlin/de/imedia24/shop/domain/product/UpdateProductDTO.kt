package de.imedia24.shop.domain.product

import java.math.BigDecimal

data class UpdateProductDTO(
    val name: String,
    val description: String,
    val price: BigDecimal,
    val stock: Int
)