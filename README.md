# open-clinic
Open Source Clinic System focused on Management of Patients and its Exams.

## Architecture
* Java Spring Boot -> Server
* Python GTK+ -> Linux Client
* ReactJS -> Web Client
* ElectronJS -> Windows, MacOS, Linux (Secondary) Client
* MySQL -> Database

## Dependencies

* maven
* python 3
* pip
* node
* yarn
* npm
* mysql

## Install 

### Linux Ubuntu

``` sudo apt install maven python3-dev python3-pip nodejs yarn npm mysql-server ```

## Run
### Server

``` cd server/clinic-system/ ```

``` mvn spring-boot:run ```

### GTK3+ Linux Client

```cd linux/```

```pip install -r requirements.txt```

```python3 start.py```

### Web Client

```cd web/```

```yarn```

```yarn start```

### ElectronJS Desktop Client (Windows, Mac, Linux)

```cd desktop/```

```npm i```

```npm start```

## Examples

### Web Front-End Design
https://www.figma.com/file/0qhiGniZ2AzvXhFRSRImxU/Design-OpenClinic?node-id=0%3A1

## License
#### MIT
