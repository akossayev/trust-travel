.PHONY: proto

proto:
	protoc --proto_path=proto \
		--go_out=proto/generated \
		--go-grpc_out=proto/generated \
		proto/auth.proto
