package auth

import (
	"context"
	"time"

	authpb "api-gateway/proto/generated"
	"google.golang.org/grpc"
)

type Client struct {
	client authpb.AuthServiceClient
}

func NewClient(conn *grpc.ClientConn) *Client {
	return &Client{
		client: authpb.NewAuthServiceClient(conn),
	}
}

func (c *Client) Login(ctx context.Context, email, password string) (*authpb.LoginResponse, error) {
	ctx, cancel := context.WithTimeout(ctx, 5*time.Second)
	defer cancel()

	return c.client.Login(ctx, &authpb.LoginRequest{
		Email:    email,
		Password: password,
	})
}

func (c *Client) RegisterUser(ctx context.Context, req RegisterUserRequest) (*authpb.RegisterUserResponse, error) {
	ctx, cancel := context.WithTimeout(ctx, 5*time.Second)
	defer cancel()

	return c.client.RegisterUser(ctx, &authpb.RegisterUserRequest{
		Email:           req.Email,
		Username:        req.Username,
		FullName:        req.FullName,
		City:            req.City,
		Phone:           req.Phone,
		Password:        req.Password,
		ConfirmPassword: req.ConfirmPassword,
	})
}
