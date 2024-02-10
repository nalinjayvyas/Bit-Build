import requests

url = "https://api.sheety.co/a97eaa95c239a092f276399d30a916e2/loginDetails/sheet1"
data = {
    'sheet1': {
        'username': "Test_Name",
        'password': "Test_Pwd"
    }
}

with open(file='login.html') as file:


response = requests.post(url=url, json=data)
response.raise_for_status()
