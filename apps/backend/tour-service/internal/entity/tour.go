package entity

import (
	"github.com/google/uuid"
	"time"
)

type Tour struct {
	ID              uuid.UUID   `json:"id"`
	StaticObjectIDs []uuid.UUID `json:"static_object_ids"`
	OwnerId         uuid.UUID   `json:"owner_id"`
	GuideID         uuid.UUID   `json:"guide_id"`
	Name            string      `json:"name"`
	Description     string      `json:"description"`
	Cost            float64     `json:"cost"`
	CreatedAt       time.Time   `json:"created_at"`
	UpdatedAt       *time.Time  `json:"updated_at,omitempty"`
	DeletedAt       *time.Time  `json:"deleted_at,omitempty"`
}
