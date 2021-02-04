class Requester:
    def __init__(self, firstName=None, lastName=None, idUser=None):
        self.id_user = int() if firstName is None else firstName
        self.first_name = str() if lastName is None else lastName
        self.last_name = str() if idUser is None else idUser

    def get_users(self):
        from requests import get
        from json import loads

        results = loads(get('http://127.0.0.1:3000/users').content)

        return results

    def post_user(self):
        from requests import post

        assert type(self.first_name) == str
        assert type(self.last_name) == str

        pload = {'first_name': self.first_name, 'last_name': self.last_name}
        post('http://127.0.0.1:3000/user', json=pload)

    def update_user(self):
        from requests import put

        assert type(self.id_user) == int
        assert type(self.first_name) == str
        assert type(self.last_name) == str

        pload = {'first_name': self.first_name, 'last_name': self.last_name}
        url = 'http://127.0.0.1:3000/user/' + self.id_user
        put(url, json=pload)

    def delete_user(self):
        from requests import delete

        assert type(self.id_user) == int

        url = 'http://127.0.0.1:3000/user/' + self.id_user
        delete(url)
