hello:
	@echo "Hello, World!"

install:
	copy .env.example .env
	cd frontend && copy .env.example .env

install-backend-dependencies:
	cd backend && npm install

install-frontend-dependencies:
	cd frontend && npm install

start:
	docker compose up -d --build

setup:
	make install
	make start

container-stop:
	docker compose down

stop-frontend:
	docker compose stop frontend

restart-frontend:
	docker compose restart frontend

stop-backend:
	docker compose stop backend

restart-backend:
	docker compose restart backend

log-backend:
	docker compose logs -f backend

stop-mysql:
	docker compose stop mysql

restart-mysql:
	docker compose restart mysql

stop-phpmyadmin:
	docker compose stop phpmyadmin

restart-phpmyadmin:
	docker compose restart phpmyadmin

start-eslint-backend:
	cd backend && npm run lint

start-eslint-frontend:
	cd frontend && npm run lint

