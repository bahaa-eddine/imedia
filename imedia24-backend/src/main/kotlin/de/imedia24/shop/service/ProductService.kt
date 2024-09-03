package de.imedia24.shop.service

import de.imedia24.shop.db.entity.ProductEntity
import de.imedia24.shop.db.repository.ProductRepository
import de.imedia24.shop.domain.product.CreateProductDTO
import de.imedia24.shop.domain.product.ProductResponse
import de.imedia24.shop.domain.product.ProductResponse.Companion.toProductResponse
import de.imedia24.shop.domain.product.UpdateProductDTO
import org.springframework.stereotype.Service

@Service
class ProductService(private val productRepository: ProductRepository) {

    fun findProductBySku(sku: String): ProductResponse? =
            productRepository.findBySku(sku)?.toProductResponse()

    fun findProductsBySku(skus: String): List<ProductResponse> {
        val listSkus = skus.split(",")
        val products = mutableListOf<ProductResponse>()
        listSkus.forEach {
            productRepository.findBySku(it)?.let { product -> products.add(product.toProductResponse()) }
        }
        return products
    }

    fun addProduct(product: CreateProductDTO): ProductResponse =
            productRepository.save(ProductEntity.fromDto(product)).toDto()

    fun updateProduct(sku: String, product: UpdateProductDTO): ProductResponse? {
        val currentProduct = productRepository.findBySku(sku)
        return if (currentProduct != null) {
            productRepository.save(ProductEntity.fromDto(product, currentProduct)).toDto()
        } else null
    }

    fun partiallyUpdateProduct(sku: String, product: UpdateProductDTO): ProductResponse? {
        val currentProduct = productRepository.findBySku(sku)
        return if (currentProduct != null) {
            val updatedProduct = currentProduct.copy(
                    name = product.name ?: currentProduct.name,
                    price = product.price ?: currentProduct.price,
                    description = product.description ?: currentProduct.description,
                    stock = product.stock ?: currentProduct.stock
            )
            productRepository.save(updatedProduct).toDto()
        } else null
    }

    fun deleteProduct(sku: String): Boolean {
        val product = productRepository.findBySku(sku)
        return if (product != null) {
            productRepository.delete(product)
            true
        } else false
    }
}
