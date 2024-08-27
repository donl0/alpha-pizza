# Functionality show 

- General
  ![general](https://github.com/donl0/alpha-pizza/blob/readme-content/general_overview.gif)
- Order pizza with mixing size and toppings
  ![order](https://github.com/donl0/alpha-pizza/blob/readme-content/picking_pizza.gif)
- See order history
  ![history](https://github.com/donl0/alpha-pizza/blob/readme-content/waiting_pizza.gif)
- Build your pizza
  ![your_own](https://github.com/donl0/alpha-pizza/blob/readme-content/build_yourself.gif)

# Run
## Install
Install [docker](https://docs.docker.com/engine/install/ubuntu/)
Install [docker compose](https://docs.docker.com/compose/install/linux/)

```sh
git clone https://github.com/donl0/alpha-pizza.git
cd alpha-pizza

# restore db
mkdir -p /var/lib/docker/volumes && cp -r volumes/alpha-pizza_webapi-data /var/lib/docker/volumes
tar -xzvf volumes/alpha-pizza_pgdata.tar.gz -C /var/lib/docker/volumes

docker-compose up --build
```

If run project in windows then not forget to change env variable to correct path.
```
StoredPizzaImagesPath: "wwwroot\\images"
```

## Access

Swagger http://localhost:8080/swagger/index.html
React http://localhost:3000/page

# Proposals for changes
- Connect [onOrderButtonClicked](https://github.com/donl0/alpha-pizza/blob/main/frontend/pizza-site/src/components/orderPizzaMenuTypes/customPizzaMenu/CustomPizzaMenu.jsx) for order custom pizza to affect to backend by update [backend](https://github.com/donl0/alpha-pizza/tree/main/backend/PizzaService)
- Fix [Values](https://github.com/donl0/alpha-pizza/blob/main/frontend/pizza-site/src/components/pizzaOrderPopup/PizzaOrderPopup.jsx) to not mixing between different pizza. popups.
- Fix js warnings
- Fix [compose](https://github.com/donl0/alpha-pizza/blob/main/docker-compose.yml) hardcoding backend url for frontend ` REACT_APP_BACKEND_URL: "http://localhost:8080"`

# Docker
- [web api](https://github.com/donl0/alpha-pizza/blob/main/backend/PizzaService/Dockerfile)
- [frontend](https://github.com/donl0/alpha-pizza/blob/main/frontend/pizza-site/Dockerfile)
- [compose](https://github.com/donl0/alpha-pizza/blob/main/docker-compose.yml)
  Don't forget about environment variables `StoredPizzaImagesPath` and `DbConnection`
