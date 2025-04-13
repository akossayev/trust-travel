package config

import (
	"github.com/caarlos0/env/v9"
	_ "github.com/joho/godotenv/autoload"
)

type Config struct {
	AppPort string `env:"APP_PORT" envDefault:"8080"`
	AppEnv  string `env:"APP_ENV" envDefault:"development"`
	DbDsn   string `env:"DB_DSN"`
}

var Cfg *Config

func init() {
	if err := env.ParseWithOptions(&Cfg, env.Options{UseFieldNameByDefault: true}); err != nil {
		panic(err)
	}
}
