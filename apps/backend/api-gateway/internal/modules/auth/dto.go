package auth

type RegisterUserRequest struct {
	Email           string `json:"email"`
	Username        string `json:"username"`
	FullName        string `json:"fullName"`
	City            string `json:"city"`
	Phone           string `json:"phone"`
	Password        string `json:"password"`
	ConfirmPassword string `json:"confirmPassword"`
}
