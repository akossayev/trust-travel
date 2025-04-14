package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.Get("/booking-service", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "Booking Service",
		})
	})

	port := ":8081"
	log.Fatal(app.Listen(port))
}
