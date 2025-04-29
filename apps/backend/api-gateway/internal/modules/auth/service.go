package auth

import (
	"context"
	"errors"

	authpb "api-gateway/proto/generated"
)

type Service struct {
	client *Client
}

func NewService(client *Client) *Service {
	return &Service{client: client}
}

// Login метод оставляем как есть

func (s *Service) Login(ctx context.Context, email, password string) (string, string, error) {
	resp, err := s.client.Login(ctx, email, password)
	if err != nil {
		return "", "", err
	}

	return resp.AccessToken, resp.RefreshToken, nil
}

func (s *Service) RegisterUser(ctx context.Context, req RegisterUserRequest) (*authpb.RegisterUserResponse, error) {
	if req.Password != req.ConfirmPassword {
		return nil, errors.New("passwords do not match")
	}

	registerResp, err := s.client.RegisterUser(ctx, req)
	if err != nil {
		return nil, err
	}

	return registerResp, nil
}
