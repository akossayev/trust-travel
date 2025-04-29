package main

import (
	"api-gateway/internal/config"
	"api-gateway/internal/modules/auth"
	"context"
	"log"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	conn, err := grpc.DialContext(
		ctx,
		config.GetEnv("AUTH_SERVICE_GRPC_ADDR", "localhost:50052"),
		grpc.WithTransportCredentials(insecure.NewCredentials()),
		grpc.WithBlock(),
	)
	if err != nil {
		log.Fatalf("Failed to connect to auth service: %v", err)
	}
	defer conn.Close()

	authClient := auth.NewClient(conn)
	authService := auth.NewService(authClient)
	authHandler := auth.NewHandler(authService)

	app := fiber.New()

	app.Post("/login", authHandler.Login)
	app.Post("/register/user", authHandler.RegisterUser)

	port := config.GetEnv("API_GATEWAY_PORT", "8080")
	log.Printf("🚀 API Gateway started on :%s", port)

	if err := app.Listen(":" + port); err != nil {
		log.Fatalf("Failed to start API Gateway: %v", err)
	}
}
