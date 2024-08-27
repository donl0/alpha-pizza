# Overview
- General ![general](https://psv4.userapi.com/c909618/u123495018/docs/d46/8dd765e3e1b8/general_overview.gif?extra=eg5EXnUbg1XOPcQ20mCDy9r8xCorsx4v5-PWbzSHPA-6FnNNmLNHJOHFQ36HSUHvrVcOwpHHBmnXqtHS5HcvIhyYWeYVpI-alycsNrJCjjX8lsZvfFY91LStfXJxZIkEj6_j0Q6PUuq7aiciiZEFs7zQvtOF)
- Order pizza with mixing size and toppings ![order](https://psv4.userapi.com/c909618/u123495018/docs/d6/b5baadbefed1/picking_pizza.gif?extra=iQbSoGKE2PO6HtUDuLKrBU0pafaO9eXObxLD2h4V2xJlRNl1_nL05m5Tz8dAD14AHXYKOaZK70UsjHDlJvxWsYofSvsvJaFBhos_kfqKlkVLpfco8PwzE1yswEHpZCxApkJTgBAlWfRkycyeQZ9skgkfHvwH)
- See order history ![history](https://psv4.userapi.com/c909618/u123495018/docs/d56/522f051ae51a/waiting_pizza.gif?extra=UFOb0cuePhYct1yML6_jvyAKNoanwW0E-PkuIzzw5xPnFt25fazipzCrgcKUczfatvs-9pCKKAQ8EBnnWYtDfY38fTnpDB6SznLJ9QqDU3kcJq1j3biJE6OSrYNk7DR0PiX05uLmJT0Mh8EBiAtvwIqiAsh7)
- Build your pizza ![your_own](https://psv4.userapi.com/c909618/u123495018/docs/d35/392ddbd9fa6d/build_yourself.gif?extra=V55J-nbfD7vF2UznHN7AQUzLrhO5_DydgIT84lnD0GyeyOD38-Rt2F4UuxnwAQ4dfBK99NfNTFDv4N2PhrQ07tYOH30SiuL0h_ANpdFZD95z0aPqjAYAyxFGd0ClGwgdPBm9VmJbZ53i4fQNGajteIEZXeVY)
# Run
## Install
Install [docker](https://docs.docker.com/engine/install/ubuntu/)
Install [docker compose](https://docs.docker.com/compose/install/linux/)

```sh
git clone https://github.com/donl0/alpha-pizza.git
cd alpha-pizza

# restore files
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
