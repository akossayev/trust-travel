package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.Get("/payment-service", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "Payment Service",
		})
	})

	port := ":8082"
	log.Println("🚀 Starting Fiber server on", port)
	log.Fatal(app.Listen(port))
}
