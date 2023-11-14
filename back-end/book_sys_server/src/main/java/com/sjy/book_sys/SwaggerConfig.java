package com.sjy.book_sys;

import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;

/**
 * 스에거 설정 파일
 * REST API 사이트 주소 : http://43.200.171.209:8085/swagger-ui/index.html
 * @author 신지영
 * @since 2023.11.08
 * @version 1.0
 */
@Configuration
public class SwaggerConfig {

	@Bean
    public GroupedOpenApi publicApi() {
        return GroupedOpenApi.builder()
                .group("v1-definition")
                .pathsToMatch("/api/**")
                .build();
    }
	
    @Bean
    public OpenAPI springShopOpenAPI() {
        return new OpenAPI()
                .info(new Info().title("Book Rental Service")
                        .description("도서 대출 서비스 API 명세서 입니다.")
                        .version("v0.0.1"));
    }
}
