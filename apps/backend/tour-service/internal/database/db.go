package database

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func InitDB(dsn string) (*gorm.DB, error) {
	conn, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		return nil, err
	}
	pg, err := conn.DB()

	if err != nil {
		return nil, err
	}

	err = pg.Ping()
	if err != nil {
		return nil, err
	}

	return conn, nil
}
