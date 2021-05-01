class Requester:
    def __init__(self, firstName=None, lastName=None, idUser=None):
        self._ip = '127.0.0.1'
        self.id_user = int() if firstName is None else firstName
        self.first_name = str() if lastName is None else lastName
        self.last_name = str() if idUser is None else idUser

    def set_ip(self, new_ip):
        self._ip = new_ip

    def get_users(self):
        from requests import get
        from json import loads

        url = f'http://{self._ip}:3000/users'
        results = loads(get(url).content)

        return results

    def post_user(self):
        from requests import post

        assert type(self.first_name) == str
        assert type(self.last_name) == str

        pload = {'first_name': self.first_name, 'last_name': self.last_name}
        url = f'http://{self._ip}:3000/user'
        post(url, json=pload)

    def update_user(self):
        from requests import put

        assert type(self.id_user) == int
        assert type(self.first_name) == str
        assert type(self.last_name) == str

        pload = {'first_name': self.first_name, 'last_name': self.last_name}
        url = f'http://{self._ip}:3000/user/{self.id_user}'
        put(url, json=pload)

    def delete_user(self):
        from requests import delete

        assert type(self.id_user) == int

        url = f'http://{self._ip}/user/{self.id_user}'
        delete(url)
